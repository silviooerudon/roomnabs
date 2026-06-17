import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import {
  EXPLORE_LINKS,
  LEGAL_PAGES,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/site";

/**
 * Site footer: brand + Explore / Company columns and a Follow Us row, plus the
 * standing affiliate disclosure shown on every page. Mirrors the reference
 * footer layout (Explore / Company / Follow Us).
 *
 * Social handles are placeholders until real accounts exist (see SOCIAL_LINKS).
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
          <div className="site-footer__intro">
            <p className="site-footer__brand">
              {prefix}
              {accent ? <span className="brand__accent">{accent}</span> : null}
            </p>
            <p className="site-footer__tagline">
              Compact home &amp; tech picks for small, rented flats across
              Ireland and Europe.
            </p>
          </div>

          <nav aria-label="Explore">
            <h2 className="site-footer__col-title">Explore</h2>
            <ul className="site-footer__list">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
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

          <div>
            <h2 className="site-footer__col-title">Follow Us</h2>
            <ul className="site-footer__social">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    className="site-footer__social-link"
                    aria-label={social.label}
                    {...(social.id !== "email"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <SocialIcon id={social.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
