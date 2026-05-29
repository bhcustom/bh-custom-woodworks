import Image from "next/image";
import { categories, products, sizeGuide } from "../data/products";

export const metadata = {
  title: "Shop",
  description:
    "Browse handcrafted memorial urns, commemorative plaques, and artisan woodwork. Solid American hardwoods, free custom laser engraving, and free shipping on every order.",
  alternates: {
    canonical: "/shop",
  },
};

function ProductCard({ product }) {
  const isLimited = product.limited;

  return (
    <div className="shop-product-card" id={`product-${product.id}`}>
      <div className="shop-product-image">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        {isLimited && (
          <span className="shop-limited-badge">{product.limitedLabel}</span>
        )}
      </div>

      <div className="shop-product-info">
        <h3 className="headline-md">{product.name}</h3>
        <p className="body-md shop-product-summary">{product.summary}</p>

        <div className="shop-product-details">
          {product.wood && (
            <div className="shop-detail-row">
              <span className="material-symbols-outlined">park</span>
              <span>
                <strong>{product.wood}</strong>: {product.woodNote}
              </span>
            </div>
          )}
          {product.sizes && (
            <div className="shop-detail-row">
              <span className="material-symbols-outlined">straighten</span>
              <span>{product.sizes}</span>
            </div>
          )}
          {product.personalization && (
            <div className="shop-detail-row">
              <span className="material-symbols-outlined">edit</span>
              <span>{product.personalization}</span>
            </div>
          )}
          {product.details && (
            <div className="shop-detail-row">
              <span className="material-symbols-outlined">info</span>
              <span>{product.details}</span>
            </div>
          )}
        </div>

        <p className="shop-product-price">
          {product.cta === "etsy"
            ? `$${product.startingPrice}`
            : `Starting at $${product.startingPrice}`}
        </p>

        <div className="shop-product-ctas">
          {(product.cta === "etsy" || product.cta === "etsy+custom") && (
            <a
              href={product.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {product.cta === "etsy" ? "Buy on Etsy" : "Order on Etsy"}
              <span className="material-symbols-outlined" style={{ fontSize: "18px", marginLeft: "0.5rem" }}>
                open_in_new
              </span>
            </a>
          )}
          {product.cta === "custom" && (
            <a href="/quote" className="btn btn-outline">
              Request a Custom Quote
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SizeGuideTable() {
  return (
    <div className="shop-size-guide" id="size-guide">
      <h3 className="headline-md" style={{ marginBottom: "var(--stack-sm)" }}>
        Sizing Guide
      </h3>
      <p className="body-md" style={{ marginBottom: "var(--stack-md)", maxWidth: "42rem" }}>
        Not sure which size you need? This guide covers the most common
        options. If you have questions, just ask. We&rsquo;re happy to help
        you choose.
      </p>
      <div className="shop-table-wrap">
        <table className="shop-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Volume</th>
              <th>Intended For</th>
              <th>Starting At</th>
            </tr>
          </thead>
          <tbody>
            {sizeGuide.map((row) => (
              <tr key={row.size}>
                <td className="shop-table-size">{row.size}</td>
                <td>{row.volume}</td>
                <td>{row.intended}</td>
                <td>${row.startingPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className="body-md"
        style={{ marginTop: "var(--stack-sm)", opacity: 0.7, fontSize: "0.875rem" }}
      >
        Cedar urns start at $90 due to material cost. All sizes include free
        laser engraving and free shipping.
      </p>
    </div>
  );
}

export default function ShopPage() {
  let isFirstCategory = true;

  return (
    <main>
      {/* ====== PRODUCT SECTIONS ====== */}
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.slug);
        if (catProducts.length === 0) return null;

        const showTrust = isFirstCategory;
        if (isFirstCategory) isFirstCategory = false;

        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className="shop-category section"
          >
            <div className="container">
              <div className="shop-category-header">
                {showTrust ? (
                  <h1 className="headline-xl">{cat.title}</h1>
                ) : (
                  <h2 className="headline-xl">{cat.title}</h2>
                )}
                <p className="body-lg">{cat.intro}</p>
                {showTrust && (
                  <div className="shop-trust">
                    <span className="material-symbols-outlined">verified</span>
                    <span>
                      5.0 stars from 19 reviews on Etsy &nbsp;·&nbsp; Free shipping on every order
                    </span>
                  </div>
                )}
              </div>

              <div className="shop-product-grid">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Size Guide — only for memorial urns */}
              {cat.slug === "memorial-urns" && <SizeGuideTable />}
            </div>
          </section>
        );
      })}

      {/* ====== CUSTOM CTA ====== */}
      <section className="cta-section">
        <div className="cta-inner">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'wght' 200" }}
          >
            handshake
          </span>
          <h2 className="display-lg">
            Don&rsquo;t see exactly what you&rsquo;re looking for?
          </h2>
          <p className="body-lg">
            We build custom signs, cutting boards, wedding decor, and business
            signage from scratch. Tell us what you have in mind.
          </p>
          <a href="/quote" className="btn btn-inverse">
            Request a Custom Quote
          </a>
        </div>
      </section>
    </main>
  );
}
