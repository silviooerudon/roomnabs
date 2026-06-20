import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How and why ${SITE_NAME} uses cookies and similar technologies.`,
};

export default function CookiePolicyPage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Cookie Policy</h1>
        <p className="page__updated">Last updated: 19 June 2026</p>

        <p>
          This Cookie Policy explains how {SITE_NAME} uses cookies and similar
          technologies when you visit our website, and the choices you have.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They are widely used to make sites work, to remember your
          preferences, and to provide information to site owners.
        </p>

        <h2>How we use cookies</h2>
        <ul>
          <li>
            <strong>Essential cookies:</strong> required for the site to function
            correctly.
          </li>
          <li>
            <strong>Affiliate cookies:</strong> set when you click an affiliate
            link, so our partners can attribute a qualifying purchase to us.
            Learn more in our{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
          </li>
        </ul>

        <h2>Analytics</h2>
        <p>
          We use privacy-first, <strong>cookieless</strong> analytics to
          understand how visitors use the site so we can improve it. It does not
          set tracking cookies, does not store identifiers on your device, and
          does not track you across other websites &mdash; so it needs no cookie
          consent banner. We also record when an affiliate{" "}
          &ldquo;Check price&rdquo; link is clicked, as an aggregate, anonymous
          event with no personal data.
        </p>

        <h2>Third-party cookies</h2>
        <p>
          When you click an affiliate link, the partner network may set its own
          cookies to attribute a qualifying purchase to us. We do not control
          these cookies; please refer to the relevant third party&rsquo;s policy
          for more information. Our analytics provider does not set cookies.
        </p>

        <h2>Managing cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Most
          browsers let you block or remove cookies, but please note that some
          parts of the site may not work properly if you do.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about our use of cookies? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
