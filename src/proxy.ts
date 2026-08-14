import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr", "es"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, maybeLocale, ...segments] = pathname.split("/");

  if (!locales.includes(maybeLocale as (typeof locales)[number])) {
    return NextResponse.next();
  }

  const locale = maybeLocale as (typeof locales)[number];
  const url = request.nextUrl.clone();
  url.pathname = `/${segments.join("/")}`;

  if (url.pathname === "/") {
    url.pathname = "/";
  }

  const response = NextResponse.rewrite(url);
  response.cookies.set("googtrans", `/en/${locale}`, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets|fonts|.*\\..*).*)"],
};
