import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const proto = req.headers.get("x-forwarded-proto");

  if (proto !== "https") {
    return NextResponse.redirect(`https://${host}${req.nextUrl.pathname}`);
  }

  return NextResponse.next();
}
