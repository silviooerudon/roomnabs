import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses and protects your personal data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="page__updated">Last updated: 14 June 2026</p>

        <p>
          This Privacy Policy explains how {SITE_NAME} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects, uses and safeguards your information when
          you visit our website. We are committed to protecting your privacy and
          handling your data in line with the EU General Data Protection
          Regulation (GDPR).
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Usage data:</strong> anonymous or aggregated analytics such
            as pages visited, approximate location, device and browser type.
          </li>
          <li>
            <strong>Information you provide:</strong> details you send us
            directly, for example when you email us.
          </li>
          <li>
            <strong>Cookies:</strong> small files stored on your device — see our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> for details.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To operate, maintain and improve the website</li>
          <li>To understand how visitors use our content</li>
          <li>To respond to your enquiries</li>
          <li>To comply with our legal obligations</li>
        </ul>

        <h2>Affiliate links and third parties</h2>
        <p>
          We use affiliate links, and our partners may set their own cookies
          when you click through to their sites. We may also use third-party
          services such as analytics providers. These third parties have their
          own privacy policies governing how they handle your data.
        </p>

        <h2>Your rights</h2>
        <p>
          Under the GDPR you have the right to access, correct, delete or
          restrict the processing of your personal data, and to object to its
          processing. To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Data retention &amp; security</h2>
        <p>
          We keep personal data only for as long as necessary for the purposes
          described here, and we use reasonable technical and organisational
          measures to protect it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted
          on this page with a revised &ldquo;last updated&rdquo; date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </article>
  );
}
