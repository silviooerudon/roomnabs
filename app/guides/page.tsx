import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPublishedGuides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

const TITLE = "Guides";
const DESCRIPTION =
  "In-depth buying guides for small-space living — how to choose, what matters, and the picks we'd actually buy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guides" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesIndexPage() {
  const guides = getPublishedGuides();

  return (
    <article className="page">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />

        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>

        {guides.length === 0 ? (
          <div className="empty-state">
            <h2>No guides published yet</h2>
            <p>New buying guides are on the way — check back soon.</p>
          </div>
        ) : (
          <ul className="guide-index">
            {guides.map((guide) => (
              <li key={guide.slug} className="guide-index__item">
                <Link href={`/guide/${guide.slug}`} className="guide-index__card">
                  <span className="badge">Guide</span>
                  <h2 className="guide-index__title">{guide.frontmatter.title}</h2>
                  <p className="guide-index__desc">
                    {guide.frontmatter.description}
                  </p>
                  <span className="link-more">Read the guide →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
