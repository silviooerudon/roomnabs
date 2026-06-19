/**
 * Privacy-first, provider-agnostic analytics helper.
 *
 * The actual analytics script is loaded by `<Analytics />` (see
 * `components/Analytics.tsx`) only when the `NEXT_PUBLIC_ANALYTICS_SRC`
 * environment variable is set — so with no env configured, nothing loads and
 * `trackEvent` is a harmless no-op.
 *
 * `trackEvent` speaks to whichever cookieless provider is present on `window`:
 *   - Plausible exposes `window.plausible(name, { props })`
 *   - Umami exposes `window.umami.track(name, data)` (older builds: a function)
 * Neither sets tracking cookies, so this stays consistent with our cookie
 * policy and needs no consent banner. If no provider is loaded, calls are
 * silently ignored.
 */

/** Event properties — kept to simple scalars so every provider accepts them. */
export type AnalyticsProps = Record<string, string | number | boolean>;

type PlausibleFn = (event: string, options?: { props?: AnalyticsProps }) => void;
type UmamiTrackFn = (event: string, data?: AnalyticsProps) => void;
type Umami = UmamiTrackFn | { track?: UmamiTrackFn };

declare global {
  interface Window {
    plausible?: PlausibleFn;
    umami?: Umami;
  }
}

/**
 * Fire an analytics event. Safe to call anywhere (SSR, no provider loaded,
 * provider errors) — it never throws and never blocks navigation.
 */
export function trackEvent(name: string, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, props ? { props } : undefined);
      return;
    }

    const umami = window.umami;
    if (typeof umami === "function") {
      umami(name, props);
    } else if (umami && typeof umami.track === "function") {
      umami.track(name, props);
    }
  } catch {
    // Analytics is best-effort: never let a tracking failure break the page.
  }
}
