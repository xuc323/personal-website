import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const ran = Math.random() * 100;
  return NextResponse.json({ num: ran }, { status: 200 });
}
