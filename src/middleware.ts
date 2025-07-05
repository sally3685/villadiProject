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
  console.log(request.cookies.get(cookieName), "ccccc");
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;
  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}
const specialRoutes = ["FAQ", "ContactUs,PrivacyPolicy", "TermsConditions"];
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/_next")) return NextResponse.next();
  for (const route of specialRoutes) {
    const normalizedPath = path.endsWith("/") ? path : `${path}/`;
    const normalizedReferer = req.headers.get("referer")?.endsWith("/")
      ? req.headers.get("referer")
      : `${req.headers.get("referer")}/`;
    if (
      normalizedPath.includes(`/${route}/`) &&
      normalizedReferer?.includes(`/${route}/`) &&
      ((normalizedPath.includes("ar") && normalizedReferer?.includes("en")) ||
        (normalizedPath.includes("en") && normalizedReferer?.includes("ar")))
    ) {
      req.nextUrl.pathname = `/${path.includes("/en") ? "en" : "ar"}/${route}Page`;
      const response = NextResponse.redirect(req.nextUrl);
      return response;
    }
  }
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
  console.log(req.nextUrl.pathname, path);
  const response = NextResponse.redirect(req.nextUrl);
  response.cookies.set(cookieName, locale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpe?g|gif|svg|ico|webp|avif)$).*)",
  ],
};
