import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localeCookie, localeFromCountry } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const savedLocale = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(savedLocale)
    ? savedLocale
    : localeFromCountry(request.headers.get("x-vercel-ip-country"));

  if (locale === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
