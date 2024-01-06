import type { ServerRuntime } from "next";
import type { AppConfigDynamic } from "next/dist/build/utils";
import type { Revalidate } from "next/dist/server/lib/revalidate";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic: AppConfigDynamic = "auto";
export const revalidate: Revalidate = 60;
export const runtime: ServerRuntime = "nodejs";

export async function GET(request: NextRequest) {
  return NextResponse.json("Hello", { status: 200 });
}
