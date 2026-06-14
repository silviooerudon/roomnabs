import Link from "next/link";
import { CATEGORIES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Small space? Big upgrade.</h1>
          <p>
            roomnabs finds compact home and tech products that actually fit
            small, rented apartments in Ireland and across Europe — no drilling,
            no wasted space, no clutter. We test and curate so you can buy once
            and buy right.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Browse by category</h2>
          <div className="category-grid">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="category-card"
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
