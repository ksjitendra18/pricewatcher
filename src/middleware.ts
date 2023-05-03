import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  let user = null;

  if (request.nextUrl.pathname.startsWith("/watchlist")) {
    let cookie = request.cookies.get("auth-token")?.value;

    if (cookie === undefined || !cookie) {
      url.pathname = "/login";
      // return NextResponse.rewrite(new URL("/", request.url));
      return NextResponse.redirect(url);
    }

    url.pathname = "/api/auth/middleware";

    const fetchUserAuth = await fetch(url.href, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cookie }),
    });

    // const user = await fetchUserAuth.json();
    user = await fetchUserAuth.json();

    if (!user) {
      url.pathname = "/login";
      // return NextResponse.rewrite(new URL("/", request.url));
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/signup")
  ) {
    console.log("user is login", user);
    if (user) {
      url.pathname = "/watchlist";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}
