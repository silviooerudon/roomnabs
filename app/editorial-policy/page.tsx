import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `The standards behind ${SITE_NAME} reviews and recommendations.`,
};

export default function EditorialPolicyPage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Editorial Policy</h1>
        <p className="page__updated">Last updated: 14 June 2026</p>

        <p>
          {SITE_NAME} exists to help people make better buying decisions for
          small, rented homes. This Editorial Policy explains how we research,
          write and maintain our content so you can trust what you read here.
        </p>

        <h2>Independence</h2>
        <p>
          Our recommendations are made independently. While we earn affiliate
          commissions (see our{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>),
          commission rates never influence whether or how we recommend a
          product. Brands cannot pay for favourable coverage or for placement in
          our rankings.
        </p>

        <h2>How we research</h2>
        <p>
          We don&rsquo;t test products ourselves, and we never claim to. Our
          picks come from:
        </p>
        <ul>
          <li>Analysis of specifications, dimensions and setup requirements</li>
          <li>
            Manufacturer and Irish/European retailer information, with prices
            and dimensions re-checked before we publish
          </li>
          <li>A broad read of verified buyer feedback</li>
          <li>
            A renter-first lens: we weight ease of installation, portability and
            whether a product needs permanent changes to your home
          </li>
        </ul>

        <h2>Accuracy and updates</h2>
        <p>
          Products, prices and availability change over time. We review our
          content periodically and update it when our recommendations change.
          Always confirm current details on the retailer&rsquo;s page before
          purchasing.
        </p>

        <h2>Corrections</h2>
        <p>
          We aim to be accurate, but mistakes happen. If you spot an error,
          please tell us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
          we&rsquo;ll review and correct it promptly.
        </p>
      </div>
    </article>
  );
}
