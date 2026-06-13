import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { findLink } from "@/lib/site";

// Render this route on every request (SSR). The set of links is not known at
// build time, so we opt out of static generation. This is fully supported by
// Netlify's Next.js adapter and runs as a serverless/edge function.
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ linkId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { linkId } = await params;
  const link = findLink(linkId);
  return {
    title: link ? `Redirecting to ${link.label}` : "Link not found",
    robots: { index: false, follow: false },
  };
}

export default async function GoPage({ params }: Props) {
  const { linkId } = await params;
  const link = findLink(linkId);

  if (!link) {
    notFound();
  }

  // Server-side redirect to the target URL.
  redirect(link.url);
}
