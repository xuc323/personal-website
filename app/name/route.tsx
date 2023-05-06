import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const { geo, url } = req;

  return NextResponse.json({
    url: url,
    name: `Hello${name ? ` ${name}` : ""}, I'm now an Edge Function!`,
    loc: geo,
  });
}
