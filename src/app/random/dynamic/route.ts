import { NextResponse } from "next/server";

export function GET() {
  const ran = Math.random() * 100;
  return NextResponse.json({ num: ran }, { status: 200 });
}
