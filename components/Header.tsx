"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { SITE_NAME } from "@/lib/site";

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
    <Link href="/" className="brand" aria-label={SITE_NAME}>
      {prefix}
      {accent ? <span className="brand__accent">{accent}</span> : null}
    </Link>
  );
}

/** Primary navigation — mirrors the reference: Home / Best Picks / Comparisons / Deals / Guides. */
const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/best-picks", label: "Best Picks" },
  { href: "/compare", label: "Comparisons" },
  { href: "/deals", label: "Deals" },
  { href: "/guides", label: "Guides" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/guides") return pathname.startsWith("/guide");
  if (href === "/compare") return pathname.startsWith("/compare");
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Site header: brand left, centred primary nav with an amber underline on the
 * active item, and a search field + saved-items (heart) action on the right —
 * matching the reference layout.
 */
export default function Header() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  function onSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(
      "q",
    ) as HTMLInputElement | null;
    const q = input?.value.trim();
    // No dedicated search page yet — route to Best Picks (our product index)
    // with the query so the field is functional rather than decorative.
    router.push(q ? `/best-picks?q=${encodeURIComponent(q)}` : "/best-picks");
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />

        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <form
            className="site-search"
            role="search"
            aria-label="Search"
            onSubmit={onSearch}
          >
            <span className="site-search__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              type="search"
              name="q"
              className="site-search__input"
              placeholder="Search products, guides…"
              aria-label="Search products and guides"
            />
          </form>

          <Link
            href="/best-picks"
            className="site-header__icon-btn"
            aria-label="Saved picks"
            title="Saved picks"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
