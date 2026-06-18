import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing your use of the ${SITE_NAME} website.`,
};

export default function TermsOfUsePage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Terms of Use</h1>
        <p className="page__updated">Last updated: 18 June 2026</p>

        <p>
          Welcome to {SITE_NAME}. By accessing or using roomnabs.com (the
          &ldquo;Site&rdquo;), you agree to these Terms of Use. If you do not
          agree, please do not use the Site.
        </p>

        <h2>About the Site</h2>
        <p>
          {SITE_NAME} provides information, guides, and product recommendations
          relating to home and tech products, with a focus on small homes and
          rentals. The Site is for general informational purposes only.
        </p>

        <h2>No professional advice</h2>
        <p>
          The content on the Site is provided for general information and does
          not constitute professional, financial, legal, or safety advice. You
          should always check product specifications, current prices, and safety
          information directly with the retailer or manufacturer before making a
          purchase or relying on any information here.
        </p>

        <h2>Product information and pricing</h2>
        <p>We make reasonable efforts to keep information accurate, but:</p>
        <ul>
          <li>
            Prices are approximate and change frequently. Always confirm the
            current price on the retailer&rsquo;s website before buying.
          </li>
          <li>
            Specifications, availability, and product details may change without
            notice.
          </li>
          <li>
            We do not sell products directly. Purchases are made through
            third-party retailers, subject to their own terms.
          </li>
        </ul>

        <h2>Affiliate links</h2>
        <p>
          The Site contains affiliate links and we may earn a commission from
          qualifying purchases, at no extra cost to you. See our{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
          full detail.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The content on this Site, including text and layout, is owned by{" "}
          {SITE_NAME} unless otherwise stated, and may not be copied or
          reproduced without permission. Product names and trademarks belong to
          their respective owners.
        </p>

        <h2>Third-party links</h2>
        <p>
          The Site links to third-party websites (including retailers). We are
          not responsible for the content, products, or practices of those
          sites. Visiting them is at your own risk and subject to their terms.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {SITE_NAME} is not liable for
          any loss or damage arising from your use of the Site or reliance on
          its content, including purchasing decisions made based on information
          here.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms of Use from time to time. Continued use of
          the Site after changes means you accept the updated terms.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of Ireland.</p>

        <h2>Contact</h2>
        <p>
          For any questions about these Terms of Use, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
