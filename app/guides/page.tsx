import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getPublishedGuides } from "@/lib/guides";
import {
  AIR_FRYER_GUIDE_SLUG,
  ROBOT_VACUUM_GUIDE_SLUG,
} from "@/lib/products";
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

/**
 * A few guides have a clear "hero" product we already hold a real photo for, so
 * their card shows that photo. Every other guide falls back to the on-brand
 * category illustration that `ImagePlaceholder` picks from the title text — no
 * invented imagery, and never an empty slot.
 */
const GUIDE_THUMBS: Record<string, string> = {
  [AIR_FRYER_GUIDE_SLUG]: "/img/products/ninja-af100uk.webp",
  [ROBOT_VACUUM_GUIDE_SLUG]: "/img/products/eufy-robovac-11s-max.webp",
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
          <ul className="guide-grid">
            {guides.map((guide) => (
              <li key={guide.slug} className="guide-grid__item">
                <Link
                  href={`/guide/${guide.slug}`}
                  className="guide-card"
                >
                  <div className="guide-card__media">
                    <ImagePlaceholder
                      src={GUIDE_THUMBS[guide.slug]}
                      alt={guide.frontmatter.title}
                      label="Guide"
                      framed={false}
                    />
                    <span className="guide-card__badge badge">Guide</span>
                  </div>
                  <div className="guide-card__body">
                    <h2 className="guide-card__title">
                      {guide.frontmatter.title}
                    </h2>
                    <p className="guide-card__desc">
                      {guide.frontmatter.description}
                    </p>
                    <span className="link-more guide-card__cta">
                      Read the guide →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
