import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { SessionPayload } from './definitions';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string, userRole: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const user = { userId: userId, userRole: userRole };
  const session = await encrypt(user);
  const cookieStore = await cookies();

  await cookieStore.set('session', session, {
    httpOnly: true,
    // secure: true,
    expires: expiresAt,
    sameSite: 'lax',
  });
}
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  console.log(session);
  return await decrypt(session);
}
export async function encrypt(payload: SessionPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log(error, 'Failed to verify session');
  }
}
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  const user = session?.user as { userId: string; userRole: string };
  if (!user?.userId) {
    redirect('/SignIn');
  }

  return { isAuth: true, userId: user.userId };
});
export const sessionExist = async () => {
  return (await cookies()).get('session') ? true : false;
};

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session');
  // const payload = await decrypt(session?.value);
  // console.log('update', session?.value, payload);
  if (!session) {
    return null;
  }
  const payload = await decrypt(session.value);
  if (!payload) {
    return null;
  }
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  await cookieStore.set('session', session.value, {
    httpOnly: true,
    // secure: true,
    expires: expires,
    sameSite: 'lax',
  });
  return NextResponse.next();
}
