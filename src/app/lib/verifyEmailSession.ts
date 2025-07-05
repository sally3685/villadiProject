import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SessionPayload } from "./definitions";
import { getUserById } from "../data-access-layer/user";
import { EmailTemplate } from "@/app/ui/EmailTemplate";
import { Resend } from "resend";
import { EmailTemplatePass } from "../ui/EmailTemplatePass";
const resend = new Resend(process.env.RESEND_API_KEY);

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createVerifySession(
  userId: string,
  userName: string,
  email: string
) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  try {
    let numbers = "";
    while (numbers.length < 4) {
      const randomNum = 0 + Math.random() * (9 - 0);
      const finalNum = Math.floor(randomNum);
      numbers = numbers.concat(finalNum.toString());
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify Email",
      react: EmailTemplate({ numbers, userName }),
    });
    if (error) {
      return { success: false, general: "failed to send email" };
    }
    if (data) {
      const user = { userId: userId, userCode: JSON.stringify(numbers) };
      const session = await encryptVerify(user);
      const cookieStore = await cookies();

      await cookieStore.set("verify", session, {
        httpOnly: true,
        // secure: true,
        expires: expiresAt,
        sameSite: "lax",
      });
      return {
        success: true,
      };
    } else {
      return { success: false, general: "failed to send email" };
    }
  } catch (error) {
    return { success: false, general: "failed to send email" };
  }
}

export async function createVerifyPassSession(
  userId: string,
  userName: string,
  email: string
) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  try {
    let numbers = "";
    while (numbers.length < 4) {
      const randomNum = 0 + Math.random() * (9 - 0);
      const finalNum = Math.floor(randomNum);
      numbers = numbers.concat(finalNum.toString());
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Reset password",
      react: EmailTemplatePass({ numbers }),
    });
    if (error) {
      return { success: false, general: "failed to send email" };
    }
    if (data) {
      const user = { userId: userId, userCode: JSON.stringify(numbers) };
      const session = await encryptVerify(user);
      const cookieStore = await cookies();

      await cookieStore.set("passwordReset", session, {
        httpOnly: true,
        // secure: true,
        expires: expiresAt,
        sameSite: "lax",
      });
      return {
        success: true,
      };
    } else {
      return { success: false, general: "failed to send email" };
    }
  } catch (error) {
    return { success: false, general: "failed to send email" };
  }
}
export async function getVerifyPassSession() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("passwordReset")?.value;
    if (!session) return { success: false };
    const decryptedSession = await decryptVerify(session);
    if (!decryptedSession) return { success: false };
    const user = decryptedSession as { userId: string; userCode: string };

    if (!user) return { success: false };
    const res = await getUserById(user.userId);
    if (res.success === true && res.userData)
      return { success: true, user: res.userData, userCode: user.userCode };
    else return { success: false };
  } catch {
    return { success: false };
  }
}
export async function deletePassSession() {
  const cookieStore = await cookies();
  cookieStore.delete("passwordReset");
}

export async function deleteVerifySession() {
  const cookieStore = await cookies();
  cookieStore.delete("verify");
}
export async function getVerifySession() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("verify")?.value;
    if (!session) return { success: false };
    const decryptedSession = await decryptVerify(session);
    if (!decryptedSession) return { success: false };
    const user = decryptedSession as { userId: string; userCode: string };

    if (!user) return { success: false };
    const res = await getUserById(user.userId);
    if (res.success === true && res.userData)
      return { success: true, user: res.userData, userCode: user.userCode };
    else return { success: false };
  } catch {
    return { success: false };
  }
}
export async function checkVerifyPassSession() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("passwordReset")?.value;
    if (!session) return { success: false };
    else return { success: true };
  } catch {
    return { success: false };
  }
}
export async function checkVerifySession() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("verify")?.value;
    if (!session) return { success: false };
    else return { success: true };
  } catch {
    return { success: false };
  }
}
export async function encryptVerify(payload: {
  userId: string;
  userCode: string;
}) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}
// export async function getUsers
export async function decryptVerify(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return;
  }
}
