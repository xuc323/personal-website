import { ServerRuntime } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime: ServerRuntime = "edge";

export async function GET(request: NextRequest) {
  return NextResponse.json("Hello", { status: 200 });
}
