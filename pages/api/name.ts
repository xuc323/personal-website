import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest, event: NextFetchEvent) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const { geo, url } = req;

  return NextResponse.json({
    url: url,
    name: `Hello${name ? ` ${name}` : ""}, I'm now an Edge Function!`,
    loc: geo,
  });
}
