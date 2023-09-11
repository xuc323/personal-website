import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const num = Math.floor(Math.random() * 10 + 1);

  const images = await fetch(`https://picsum.photos/v2/list?page=${num}`);
  const imageList = await images.json();

  return NextResponse.json(imageList);
}
