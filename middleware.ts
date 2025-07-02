// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const billTypeSlugToShort: Record<string, string> = {
  "house-bill": "hr",
  "senate-bill": "s",
  "house-amendment": "hamdt",
  "senate-amendment": "samdt",
  "house-resolution": "hres",
  "senate-resolution": "sres",
  "house-joint-resolution": "hjres",
  "senate-joint-resolution": "sjres",
  "house-concurrent-resolution": "hconres",
  "senate-concurrent-resolution": "sconres",
};

function parseCongress(congressStr: string) {
  // E.g., "102nd-congress" -> 102
  const match = congressStr.match(/^(\d+)(?:st|nd|rd|th)-congress$/);
  if (!match) return null;
  return match[1];
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // Only act on URLs matching the old pattern
  const billPattern =
    /^\/bill\/(\d{1,3}(?:st|nd|rd|th)-congress)\/([a-z-]+)\/(\d+)\/?$/i;
  const match = url.pathname.match(billPattern);

  if (match) {
    const [, congressStr, billTypeSlug, billNum] = match;
    const congress = parseCongress(congressStr);
    const billType =
      billTypeSlugToShort[billTypeSlug.toLowerCase()] || billTypeSlug;
    if (congress && billType) {
      url.pathname = `/bill/${congress}/${billType}/${billNum}`;
      return NextResponse.redirect(url, 308); // Permanent redirect
    }
  }
  // Continue if no match
  return NextResponse.next();
}

export const config = {
  matcher: ["/bill/:congressStr/:billTypeStr/:billNum*"],
};
