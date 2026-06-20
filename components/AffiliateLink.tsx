"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * The single "Check price" affiliate CTA used across the site (product cards,
 * comparison tables and guide MDX). It routes through the internal
 * `/go/[linkId]` redirect with `rel="sponsored nofollow"`, and fires an
 * `AffiliateClick` analytics event (with `{ linkId }`) on click — before the
 * browser opens the link.
 *
 * Because it opens in a new tab (`target="_blank"`), the current page isn't
 * unloaded, so the event reliably reaches the analytics provider. If no
 * provider is configured, `trackEvent` is a no-op (see `lib/analytics.ts`).
 */
export default function AffiliateLink({
  linkId,
  children,
  ...props
}: {
  linkId: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "target">) {
  return (
    <a
      href={`/go/${linkId}`}
      rel="sponsored nofollow"
      target="_blank"
      onClick={() => trackEvent("AffiliateClick", { linkId })}
      {...props}
    >
      {children}
    </a>
  );
}
