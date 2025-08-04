import type { MiddlewareConfig } from "next/server";
import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.json("Not found.", { status: 404 });
}

export const config: MiddlewareConfig = {
  matcher: "/api/:path*",
};
