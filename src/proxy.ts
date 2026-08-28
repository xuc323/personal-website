import type { ProxyConfig } from "next/server";
import { NextResponse } from "next/server";

export function proxy() {
  return NextResponse.json("Not found.", { status: 404 });
}

export const config: ProxyConfig = {
  matcher: "/api/:path*",
};
