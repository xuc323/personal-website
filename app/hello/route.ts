import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const revalidate = 60;
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  return NextResponse.json("Hello", { status: 200 });
}
