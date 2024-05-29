import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  let str = "Hello";
  if (params && params.has("name")) {
    str += " " + params.get("name");
  }

  return NextResponse.json(str, { status: 200 });
}
