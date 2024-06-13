import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.json("Not found.", { status: 404 });
}

export const config: MiddlewareConfig = {
  matcher: "/api/:path*",
};
