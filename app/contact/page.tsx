import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} team.`,
};

export default function ContactPage() {
  return (
    <article className="page">
      <div className="container">
        <h1>Contact</h1>

        <p>
          We&rsquo;d love to hear from you. Whether you have a question, a
          product suggestion, a correction, or a partnership enquiry, the best
          way to reach us is by email:
        </p>

        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>

        <h2>What to email us about</h2>
        <ul>
          <li>Product recommendations or requests for something to review</li>
          <li>Corrections or feedback on an existing review</li>
          <li>Press, partnership or affiliate enquiries</li>
          <li>Privacy requests relating to your personal data</li>
        </ul>

        <p>
          We aim to reply to every message within a few business days. Please
          include as much detail as you can so we can help you faster.
        </p>
      </div>
    </article>
  );
}
