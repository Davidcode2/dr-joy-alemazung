import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

const locales = ["en-US", "de-DE", "de"];
const defaultLocale = "de-DE";

// Get the preferred locale based on Accept-Language header
function getLocale(request: NextRequest): string {
  const headers = {
    "accept-language": request.headers.get("accept-language") || defaultLocale,
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale: string) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.[\\w]+$).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
