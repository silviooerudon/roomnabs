import Link from "next/link";
import { LEGAL_PAGES, SITE_NAME } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="site-footer__links" aria-label="Site information">
          {LEGAL_PAGES.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`}>
              {page.title}
            </Link>
          ))}
        </nav>
        <p className="site-footer__note">
          © {year} {SITE_NAME}. As an affiliate, we earn from qualifying
          purchases. Some links on this site are affiliate links — if you buy
          through them we may earn a commission at no extra cost to you.
        </p>
      </div>
    </footer>
  );
}
