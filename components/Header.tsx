import Link from "next/link";
import { CATEGORIES, SITE_NAME } from "@/lib/site";

/**
 * Brand wordmark. The "nabs" half is amber to match the CTA accent. Falls back
 * to the plain name if it doesn't end in "nabs".
 */
function Brand() {
  const suffix = "nabs";
  const lower = SITE_NAME.toLowerCase();
  const hasSuffix = lower.endsWith(suffix);
  const prefix = hasSuffix
    ? SITE_NAME.slice(0, SITE_NAME.length - suffix.length)
    : SITE_NAME;
  const accent = hasSuffix
    ? SITE_NAME.slice(SITE_NAME.length - suffix.length)
    : "";

  return (
    <Link href="/" className="brand">
      {prefix}
      {accent ? <span className="brand__accent">{accent}</span> : null}
    </Link>
  );
}

/**
 * Site header: brand + Home and category links. No search box or wishlist — we
 * only ship navigation that actually works.
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          {CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
