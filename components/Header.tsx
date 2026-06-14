import Link from "next/link";
import { CATEGORIES, SITE_NAME } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          {SITE_NAME}
        </Link>
        <nav className="site-nav" aria-label="Categories">
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
