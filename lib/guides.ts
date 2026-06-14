/**
 * Guide loading utilities.
 *
 * Guides are authored as MDX files in `content/guides/`. The frontmatter block
 * at the top of each file (delimited by `---`) supplies the metadata used for
 * routing, `<head>` tags and breadcrumbs. The MDX body is compiled and rendered
 * by the `/guide/[slug]` route.
 *
 * These helpers run on the server only (they touch the filesystem) and are used
 * at build time via `generateStaticParams` as well as in server components.
 */
import fs from "node:fs";
import path from "node:path";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

/** Frontmatter we read off each guide. `title`/`description` are required. */
export type GuideFrontmatter = {
  title: string;
  description: string;
  slug?: string;
  category?: string;
  updated?: string;
};

export type Guide = {
  /** The canonical slug, taken from the filename (frontmatter `slug` must match). */
  slug: string;
  frontmatter: GuideFrontmatter;
  /** Raw file contents, frontmatter included — passed straight to compileMDX. */
  source: string;
};

/**
 * Minimal YAML-frontmatter parser. We author the frontmatter ourselves and only
 * use simple scalar `key: value` pairs, so a full YAML dependency isn't needed.
 * Values may be optionally wrapped in single or double quotes.
 */
function parseFrontmatter(raw: string): GuideFrontmatter {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  const data: Record<string, string> = {};

  if (match) {
    for (const line of match[1].split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const sep = trimmed.indexOf(":");
      if (sep === -1) continue;
      const key = trimmed.slice(0, sep).trim();
      let value = trimmed.slice(sep + 1).trim();
      value = value.replace(/^["'](.*)["']$/, "$1");
      data[key] = value;
    }
  }

  return data as GuideFrontmatter;
}

function guidesDirExists(): boolean {
  try {
    return fs.statSync(GUIDES_DIR).isDirectory();
  } catch {
    return false;
  }
}

/** All guide slugs (filenames without the `.mdx` extension). */
export function getGuideSlugs(): string[] {
  if (!guidesDirExists()) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Load a single guide by slug, or `undefined` if it doesn't exist. */
export function getGuide(slug: string): Guide | undefined {
  // Guard against path traversal via the dynamic `[slug]` segment.
  if (!/^[a-z0-9-]+$/i.test(slug)) return undefined;

  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const source = fs.readFileSync(filePath, "utf8");
  return { slug, frontmatter: parseFrontmatter(source), source };
}

/** All guides, loaded and ready to list (e.g. on category pages). */
export function getAllGuides(): Guide[] {
  return getGuideSlugs()
    .map((slug) => getGuide(slug))
    .filter((guide): guide is Guide => guide !== undefined);
}

/** Guides that belong to a given category slug. */
export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter(
    (guide) => guide.frontmatter.category === category,
  );
}
