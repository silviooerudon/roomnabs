import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: `${SITE_NAME} uses affiliate links and may earn a commission, at no extra cost to you.`,
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Affiliate Disclosure</h1>
        <p className="page__updated">Last updated: 14 June 2026</p>

        <p>
          <strong>
            Pages on {SITE_NAME} contain affiliate links. This means we may earn
            a commission when you click a link and make a purchase — at no extra
            cost to you.
          </strong>{" "}
          You pay the same price you would pay otherwise; the retailer simply
          shares a small part of their margin with us.
        </p>

        <h2>How affiliate links work</h2>
        <p>
          When you click an affiliate link and buy a product, the retailer or
          affiliate network records that the visit came from us and credits us
          with a commission on qualifying purchases. This commission is what
          keeps {SITE_NAME} free to read.
        </p>

        <h2>Our promise</h2>
        <ul>
          <li>
            Affiliate relationships never determine our recommendations. We
            recommend products on their merits — not on commission rates.
          </li>
          <li>
            We only suggest products we believe are a good fit for small,
            rented homes.
          </li>
          <li>
            Prices and availability can change, so always confirm the final
            price on the retailer&rsquo;s site before buying.
          </li>
        </ul>

        <h2>Programmes we participate in</h2>
        <p>
          {SITE_NAME} participates in various affiliate programmes, which may
          include the Amazon Associates Programme and other retailer and network
          partnerships. As an Amazon Associate we earn from qualifying
          purchases.
        </p>

        <h2>Questions</h2>
        <p>
          If anything here is unclear, please email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — we&rsquo;re
          happy to explain.
        </p>
      </div>
    </article>
  );
}
