import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn what ${SITE_NAME} is, who it's for, and how we choose the compact home and tech products we recommend.`,
};

export default function AboutPage() {
  return (
    <article className="page">
      <div className="container">
        <h1>About {SITE_NAME}</h1>

        <p>
          {SITE_NAME} helps people who live in small, rented homes get more out
          of their space. Apartments across Ireland and Europe are getting
          smaller, leases come with rules, and most product reviews assume you
          own a large house. We focus on the opposite: compact, renter-friendly
          home and tech products that fit tight kitchens, shared flats and
          temporary living situations.
        </p>

        <h2>Who we&rsquo;re for</h2>
        <p>
          Renters, students, young professionals and anyone furnishing a small
          space they can&rsquo;t permanently modify. If &ldquo;no drilling&rdquo;
          and &ldquo;does it fit?&rdquo; are constant questions, this site is for
          you.
        </p>

        <h2>How we choose products</h2>
        <p>
          We prioritise size, ease of setup, and whether something works without
          permanent changes to your home. We combine hands-on testing, verified
          buyer feedback and specification research to shortlist products worth
          your money. Read more about our standards in our{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>

        <h2>How we&rsquo;re funded</h2>
        <p>
          {SITE_NAME} is reader-supported. Some links are affiliate links, which
          means we may earn a commission when you buy through them — at no extra
          cost to you. This never changes which products we recommend. See our{" "}
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for the
          full details.
        </p>

        <h2>Get in touch</h2>
        <p>
          Questions, suggestions or a product we should test? Email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
