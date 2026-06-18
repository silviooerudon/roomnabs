import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import CheckPrice from "@/components/CheckPrice";
import EmailSignup from "@/components/EmailSignup";
import {
  getGuide,
  getGuideCategory,
  getGuideSlugs,
  isGuideDraft,
} from "@/lib/guides";
import { findCategory, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Anchor override for MDX content. Outbound "Check price" CTAs are written as
 * plain markdown links to `/go/[linkId]`; we tag every such link with
 * rel="sponsored nofollow" (and open it in a new tab) so the redirect endpoint
 * gets the right link semantics no matter how the author wrote the link.
 */
function MdxAnchor({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/go/")) {
    return (
      <a href={href} rel="sponsored nofollow" target="_blank" {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

// Components made available to every guide's MDX body.
const mdxComponents = { EmailSignup, CheckPrice, a: MdxAnchor };

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
    // Drafts stay reachable by direct URL for review, but must not be indexed.
    ...(isGuideDraft(guide.frontmatter)
      ? { robots: { index: false, follow: false } }
      : {}),
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

  const { title, description } = guide.frontmatter;
  // Content team uses `updated`; the newer guides supply `date` instead.
  const publishedDate = guide.frontmatter.updated ?? guide.frontmatter.date;
  const categorySlug = getGuideCategory(guide.frontmatter);
  const categoryInfo = categorySlug ? findCategory(categorySlug) : undefined;
  const url = `${SITE_URL}/guide/${slug}`;

  const { content } = await compileMDX({
    source: guide.source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
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
  if (publishedDate) {
    articleSchema.dateModified = publishedDate;
    articleSchema.datePublished = publishedDate;
  }

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    ...(categoryInfo
      ? [{ label: categoryInfo.name, href: `/${categoryInfo.slug}` }]
      : []),
    { label: title },
  ];

  return (
    <article className="page guide">
      <div className="container">
        <Breadcrumbs items={crumbs} />

        {/* The MDX body supplies its own <h1> and last-updated line. */}
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
