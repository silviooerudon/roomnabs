import Link from "next/link";
import { notFound } from "next/navigation";
import { findCategory } from "@/lib/site";

/**
 * Shared layout for the placeholder category pages. Real product listings will
 * replace the "coming soon" block later, but the route, heading and intro copy
 * are real so navigation and SEO work today.
 */
export default function CategoryPage({ slug }: { slug: string }) {
  const category = findCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <article className="page">
      <div className="container">
        <h1>{category.name}</h1>
        <p>{category.description}</p>

        <h2>Coming soon</h2>
        <p>
          We&rsquo;re still testing and curating our {category.name.toLowerCase()}{" "}
          picks. Reviews and recommendations for this category will appear here
          shortly.
        </p>
        <p>
          In the meantime, <Link href="/">explore the other categories</Link> or{" "}
          <Link href="/about">learn more about roomnabs</Link>.
        </p>
      </div>
    </article>
  );
}
