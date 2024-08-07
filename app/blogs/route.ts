import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const num = Math.random() * 100;

  return NextResponse.json({ blogs: [], count: num }, { status: 200 });
}
