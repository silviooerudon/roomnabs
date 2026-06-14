import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import CheckPrice from "@/components/CheckPrice";
import EmailSignup from "@/components/EmailSignup";
import { getGuide, getGuideSlugs } from "@/lib/guides";
import { findCategory, SITE_NAME, SITE_URL } from "@/lib/site";

// Components made available to every guide's MDX body.
const mdxComponents = { EmailSignup, CheckPrice };

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render every guide at build time.
export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return { title: "Guide not found", robots: { index: false, follow: false } };
  }

  const { title, description } = guide.frontmatter;
  const canonical = `/guide/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      siteName: SITE_NAME,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const { title, description, category, updated } = guide.frontmatter;
  const categoryInfo = category ? findCategory(category) : undefined;
  const url = `${SITE_URL}/guide/${slug}`;

  const { content } = await compileMDX({
    source: guide.source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  // schema.org Article — only fields we can back with real frontmatter data.
  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
  if (updated) {
    articleSchema.dateModified = updated;
    articleSchema.datePublished = updated;
  }

  return (
    <article className="page guide">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {categoryInfo ? (
              <li>
                <Link href={`/${categoryInfo.slug}`}>{categoryInfo.name}</Link>
              </li>
            ) : null}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        <h1>{title}</h1>
        {updated ? (
          <p className="page__updated">Last updated {updated}</p>
        ) : null}

        <div className="guide__body">{content}</div>
      </div>

      <script
        type="application/ld+json"
        // JSON-LD is static, server-rendered structured data, not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
