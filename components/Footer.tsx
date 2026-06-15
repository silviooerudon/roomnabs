import Link from "next/link";
import { CATEGORIES, LEGAL_PAGES, SITE_NAME } from "@/lib/site";

/**
 * Site footer: brand + Browse (categories) and Company (legal) columns, plus
 * the standing affiliate disclosure shown on every page.
 *
 * No social icons — we don't have real accounts yet, so we don't link to any.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const suffix = "nabs";
  const hasSuffix = SITE_NAME.toLowerCase().endsWith(suffix);
  const prefix = hasSuffix
    ? SITE_NAME.slice(0, SITE_NAME.length - suffix.length)
    : SITE_NAME;
  const accent = hasSuffix
    ? SITE_NAME.slice(SITE_NAME.length - suffix.length)
    : "";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__brand">
              {prefix}
              {accent ? <span className="brand__accent">{accent}</span> : null}
            </p>
            <p className="site-footer__tagline">
              Compact home &amp; tech picks for small, rented flats across
              Ireland and Europe.
            </p>
          </div>

          <nav aria-label="Browse">
            <h2 className="site-footer__col-title">Browse</h2>
            <ul className="site-footer__list">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="site-footer__col-title">Company</h2>
            <ul className="site-footer__list">
              {LEGAL_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__note">
            {SITE_NAME} is reader-supported. Some links on this site are
            affiliate links, which means we may earn a commission at no extra
            cost to you if you buy through them. See our{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
            details.
          </p>
          <p className="site-footer__copy">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
