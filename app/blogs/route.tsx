import { AppConfigDynamic } from "next/dist/build/utils";
import { NextRequest, NextResponse } from "next/server";

export const dynamic: AppConfigDynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const num = Math.random() * 100;

  return NextResponse.json({ blogs: [], count: num }, { status: 200 });
}
