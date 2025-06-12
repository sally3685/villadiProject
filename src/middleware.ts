import { NextRequest, NextResponse } from 'next/server';
import { decrypt, updateSession } from '@/app/lib/session';

const protectedRoutes = ['/controls'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const session = req.cookies.get('session');
  if (session) {
    const decryptedSession = await decrypt(session?.value);
    const user = decryptedSession?.user as { userId: string; userRole: string };
    if (isProtectedRoute && user.userRole !== 'Admin') {
      return NextResponse.redirect(new URL('/unAuthorized', req.nextUrl));
    }
  } else if (isProtectedRoute) {
    return NextResponse.redirect(new URL('/signIn', req.nextUrl));
  }

  return await updateSession(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
