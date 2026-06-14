import { NextResponse } from "next/server";
import { findLink } from "@/lib/site";

// The set of links isn't known at build time, so this route is always dynamic.
export const dynamic = "force-dynamic";

type Context = {
  params: Promise<{ linkId: string }>;
};

/**
 * Affiliate-style redirect endpoint.
 *
 * `GET /go/<linkId>` issues a 302 (temporary) redirect to the link's target
 * URL. Targets are plain retailer URLs for now; affiliate deeplinks can be
 * swapped in later via `lib/site.ts` without touching the markup that links
 * here. Unknown ids return a noindex 404.
 */
export async function GET(_request: Request, { params }: Context) {
  const { linkId } = await params;
  const link = findLink(linkId);

  if (!link) {
    return new NextResponse("Link not found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  return NextResponse.redirect(link.url, {
    status: 302,
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
}
