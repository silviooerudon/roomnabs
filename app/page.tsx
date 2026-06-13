import Link from "next/link";
import { LINKS } from "@/lib/site";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily: "var(--font-geist-sans)",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>roomnabs</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Next.js App Router app deployed on Netlify. SSR, dynamic routes,{" "}
        <code>/sitemap.xml</code> and <code>/robots.txt</code> are all wired up.
      </p>

      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
        Example short links
      </h2>
      <ul style={{ lineHeight: 2 }}>
        {LINKS.map((link) => (
          <li key={link.id}>
            <Link href={`/go/${link.id}`}>/go/{link.id}</Link> → {link.label}
          </li>
        ))}
      </ul>
    </main>
  );
}
