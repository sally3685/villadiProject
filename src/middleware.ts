import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "@/app/lib/session";

import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "ar"];
const defaultLocale = "en";
const cookieName = "i18nlang";
const protectedRoutes = ["/Control"];

function getLocale(request: NextRequest): string {
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/_next")) return NextResponse.next();

  const pathnameHasLocale = locales.some(
    (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`
  );

  const isProtectedRoute = path.includes("/Control");

  const session = req.cookies.get("session");

  if (session !== undefined && session) {
    const decryptedSession = await decrypt(session?.value);

    const user = decryptedSession as { userId: string; userRole: string };
    if (isProtectedRoute && user.userRole !== "Admin") {
      return NextResponse.redirect(new URL("/unAuthorized", req.nextUrl));
    }
  } else if (isProtectedRoute) {
    return NextResponse.redirect(new URL("/signIn", req.nextUrl));
  }

  await updateSession(req);

  if (pathnameHasLocale) return;

  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${path}`;

  const response = NextResponse.redirect(req.nextUrl);
  response.cookies.set(cookieName, locale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpe?g|gif|svg|ico|webp|avif)$).*)",
  ],
};
