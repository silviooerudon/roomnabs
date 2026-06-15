import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConfidenceStrip from "@/components/ConfidenceStrip";
import { findCategory } from "@/lib/site";

const slug = "deals";

// Honest empty state for now — no real, verified deals yet. The page stays
// reachable so the template and navigation work, but it's noindex and kept out
// of the sitemap until there's something real to show (same rule as drafts).
export const metadata: Metadata = {
  title: findCategory(slug)?.name,
  description:
    "Verified deals on the compact home and tech we recommend — no fake timers, no fake discounts. None to show yet; this page updates when we have real ones.",
  robots: { index: false, follow: false },
};

export default function DealsPage() {
  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Deals" }]} />

        <h1>Deals</h1>
        <p>
          When we find a genuine price drop on something we already recommend,
          it&rsquo;ll appear here with the date we checked it and a link to the
          retailer&rsquo;s live price.
        </p>

        <div className="empty-state">
          <h2>Verified deals coming soon</h2>
          <p>
            No fake timers, no fake discounts. We don&rsquo;t have any verified
            deals to show right now, so we&rsquo;re showing nothing rather than
            inventing a countdown or a &ldquo;was/now&rdquo; price to fill the
            page. When there&rsquo;s a real one, it&rsquo;ll be here.
          </p>
          <p>
            In the meantime, see our{" "}
            <Link href="/best-picks">current best picks</Link> or{" "}
            <Link href="/compare">compare them side by side</Link>.
          </p>
        </div>

        <ConfidenceStrip />
      </div>
    </article>
  );
}
