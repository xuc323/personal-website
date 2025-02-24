import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const ran = Math.random() * 100;
  return NextResponse.json({ num: ran }, { status: 200 });
}
