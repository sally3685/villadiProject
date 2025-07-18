import { NextRequest, NextResponse } from "next/server";
import { decrypt, updateSession } from "@/app/lib/session";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "ar"];
const defaultLocale = "en";
const cookieName = "i18nlang";

function getLocale(request: NextRequest): string {
  const cookieLang = request.cookies.get(cookieName)?.value;
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang;
  }

  const acceptLang = request.headers.get("Accept-Language");
  if (acceptLang) {
    const headers = { "accept-language": acceptLang };
    const languages = new Negotiator({ headers }).languages();
    const matched = match(languages, locales, defaultLocale);
    if (matched) return matched;
  }

  return defaultLocale;
}

const specialRoutes = ["FAQ", "ContactUs", "PrivacyPolicy", "TermsConditions"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (
    path.startsWith("/_next") ||
    path.startsWith("/api/uploadthing") ||
    path.includes(".well-known")
  ) {
    return NextResponse.next();
  }

  for (const route of specialRoutes) {
    const normalizedPath = path.endsWith("/") ? path : `${path}/`;
    const referer = req.headers.get("referer");
    const normalizedReferer = referer?.endsWith("/") ? referer : `${referer}/`;

    if (
      normalizedPath.includes(`/${route}/`) &&
      normalizedReferer?.includes(`/${route}/`) &&
      ((normalizedPath.includes("ar") && normalizedReferer?.includes("en")) ||
        (normalizedPath.includes("en") && normalizedReferer?.includes("ar")))
    ) {
      const newPath = `/${path.includes("/en") ? "en" : "ar"}/${route}Page`;
      req.nextUrl.pathname = newPath;
      return NextResponse.redirect(req.nextUrl);
    }
  }

  const isProtectedRoute = path.includes("/Control");
  const needsSignIn =
    path.includes("/SuggestAFlavor") || path.includes("/Opinion");
  const session = req.cookies.get("session")?.value;

  if (session) {
    const decryptedSession = await decrypt(session);
    if (decryptedSession.status) {
      const user = decryptedSession.payload as {
        userId: string;
        userRole: string;
      };
      if (isProtectedRoute && user?.userRole !== "Admin") {
        return NextResponse.redirect(new URL("/unAuthorized", req.nextUrl));
      }
    }
  } else if (needsSignIn || isProtectedRoute) {
    return NextResponse.redirect(new URL("/signIn", req.nextUrl));
  }

  await updateSession(req);

  const currentLocale = locales.find(
    (locale) => path.startsWith(`/${locale}/`) || path === `/${locale}`,
  );

  let response: NextResponse;
  if (currentLocale) {
    response = NextResponse.next();

    const cookieLang = req.cookies.get(cookieName)?.value;
    if (cookieLang !== currentLocale) {
      response.cookies.set(cookieName, currentLocale, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }
  } else {
    const locale = getLocale(req);
    req.nextUrl.pathname = `/${locale}${path}`;
    response = NextResponse.redirect(req.nextUrl);

    response.cookies.set(cookieName, locale, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpe?g|gif|svg|ico|webp|avif)$).*)",
    "/api/:path*",
  ],
};
