import AffiliateLink from "@/components/AffiliateLink";
import { findLink } from "@/lib/site";

/**
 * "Check price" call-to-action used inside guide MDX:
 *
 *   <CheckPrice linkId="af100uk-hn" retailer="Harvey Norman" />
 *
 * It links to the internal `/go/[linkId]` redirect (a 302 to the retailer) and
 * is rendered with rel="sponsored nofollow" so search engines don't pass link
 * equity to commercial destinations. The `linkId` must exist in `lib/site.ts`.
 */
export default function CheckPrice({
  linkId,
  retailer,
}: {
  linkId: string;
  retailer?: string;
}) {
  const link = findLink(linkId);

  // Fail loudly during development if an MDX file references an unknown link,
  // but never render a broken/empty button in production output.
  if (!link) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(`CheckPrice: unknown linkId "${linkId}"`);
    }
    return null;
  }

  return (
    <AffiliateLink className="check-price" linkId={link.id}>
      Check price{retailer ? ` at ${retailer}` : ""}
    </AffiliateLink>
  );
}
