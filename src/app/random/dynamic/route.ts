import { generateSnowflake } from "@/lib/snowflake";
import { NextResponse } from "next/server";
import { randomInt } from "node:crypto";

export function GET() {
  const ran = randomInt(0, 100);
  const id = generateSnowflake();
  return NextResponse.json({ num: ran, id: id.toString() }, { status: 200 });
}
