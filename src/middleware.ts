import { NextResponse, type NextRequest } from "next/server";

import { cookies } from "next/headers";
export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const authCookie =
    cookieStore.get("next-auth.session-token") ??
    cookieStore.get("__Secure-next-auth.session-token");

  if (!authCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
