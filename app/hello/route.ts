import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  let str = "Hello";
  if (params.has("name")) {
    str += ` ${params.get("name")}`;
  }

  return NextResponse.json(str, { status: 200 });
}
