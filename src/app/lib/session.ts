import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SessionPayload } from "./definitions";
import { cache } from "react";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getUserById } from "../data-access-layer/user";
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string, userRole: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const user = { userId: userId, userRole: userRole };
  const session = await encrypt(user);
  const cookieStore = await cookies();

  await cookieStore.set("session", session, {
    httpOnly: true,
    // secure: true,
    expires: expiresAt,
    sameSite: "lax",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) {
    return {
      status: 404,
      messageEn: "Please sign in/up first ♡",
      messageAr: "من فضلك سجل دخول أولا ♡",
    };
  }

  const decryptedSession = await decrypt(session);
  if (!decryptedSession.status) {
    return {
      status: 500,
      messageEn: decryptedSession.messageEn,
      messageAr: decryptedSession.messageAr,
    };
  }

  const user = decryptedSession.payload as { userId: string; userRole: string };
  if (!user) {
    return {
      status: 400,
      messageEn: "User not found 😔",
      messageAr: "المستخدم غير موجود 😔",
    };
  }

  try {
    const res = await getUserById(user.userId);
    if (res.status === 200 && res.userData) {
      return {
        status: res.status,
        messageEn: res.messageEn,
        messageAr: res.messageAr,
        user: {
          id: res.userData?.id,
          name: res.userData?.name,
          role: res.userData?.role,
          email: res.userData?.email,
        },
      };
    } else {
      return {
        status: res.status,
        messageEn: res.messageEn,
        messageAr: res.messageAr,
      };
    }
  } catch (error) {
    return {
      status: 500,
      messageEn: "Internal server error 😔",
      messageAr: "خطأ في الخادم الداخلي 😔",
    };
  }
}
export async function encrypt(payload: SessionPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}
export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    if (!payload) {
      return {
        status: false,
        messageEn: "Invalid token content 😔",
        messageAr: "محتويات الرمز غير صالحة 😔",
      };
    }

    return {
      status: true,
      messageEn: "Token verified successfully ♡",
      messageAr: "تم التحقق من الرمز بنجاح ♡",
      payload,
    };
  } catch (error) {
    await deleteSession();
    return {
      status: false,
      messageEn: "Your session is expired please Sign in again 😔",
      messageAr: " لقد انتهت صلاحية جلستك من فضلك سجل دخول مجددا 😔",
    };
  }
}
export const verifySession = cache(async (lang: string) => {
  const cookie = (await cookies()).get("session")?.value;
  const decryptedSession = await decrypt(cookie);

  const user = decryptedSession?.payload as {
    userId: string;
    userRole: string;
  };
  if (!user?.userId) {
    redirect(`${lang}/signIn}`);
  }

  return { isAuth: true, userId: user.userId };
});
export const sessionExist = async () => {
  return (await cookies()).get("session") ? true : false;
};
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session");
  if (!session || session === undefined) {
    return null;
  }
  const payload = await decrypt(session.value);
  if (!payload) {
    return null;
  }
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  await cookieStore.set("session", session.value, {
    httpOnly: true,
    // secure: true,
    expires: expires,
    sameSite: "lax",
  });
  return;
}
