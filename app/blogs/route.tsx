import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const num = Math.random() * 100;

  return NextResponse.json({ blogs: [], count: num }, { status: 200 });
}
