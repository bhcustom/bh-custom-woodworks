import Image from "next/image";

/**
 * Reusable service landing page layout.
 * Each /services/[slug]/page.js passes its data into this component.
 */
export default function ServicePage({ service }) {
  const faqJsonLd = service.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  } : null;

  return (
    <main>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* ====== HERO ====== */}
      <section className="service-hero">
        <div className="service-hero-bg">
          <Image
            src={service.heroImage}
            alt={service.heroAlt}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="service-hero-overlay" />
        </div>
        <div className="container service-hero-content">
          <h1 className="display-lg">{service.intro.headline}</h1>
          <p className="body-lg">{service.intro.description}</p>
          <div style={{ display: "flex", gap: "var(--stack-sm)", flexWrap: "wrap", width: "100%" }}>
            {service.etsyUrl ? (
              <>
                <a
                  href={service.etsyUrl}
                  className="btn btn-inverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop on Etsy
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", marginLeft: "0.5rem" }}>
                    open_in_new
                  </span>
                </a>
                <a
                  href="/quote"
                  className="btn btn-outline-inverse"
                >
                  Request a Custom Quote
                </a>
              </>
            ) : (
              <a href="/quote" className="btn btn-inverse">
                Request a Custom Quote
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ====== DETAILS GRID ====== */}
      <section className="service-details section">
        <div className="container">
          <div className="service-details-grid">
            {service.details.map((block) => (
              <div key={block.title} className="service-detail-card">
                <div className="service-detail-icon">
                  <span className="material-symbols-outlined">
                    {block.icon}
                  </span>
                </div>
                <h2 className="headline-md">{block.title}</h2>
                <ul>
                  {block.items.map((item) => {
                    const parts = item.split(": ");
                    return (
                      <li key={item} className="body-md">
                        {parts.length > 1 ? (
                          <>
                            <strong>{parts[0]}</strong>: {parts[1]}
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== POPULAR USES ====== */}
      <section className="service-uses section">
        <div className="container">
          <div className="service-uses-inner">
            <div className="service-uses-header">
              <span className="label-sm">Popular Uses</span>
              <h2 className="headline-xl">
                What People Order Most
              </h2>
            </div>
            <div className="service-uses-grid">
              {service.popularUses.map((use) => (
                <div key={use} className="service-use-chip">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  <span className="body-md">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="service-faq section">
        <div className="container">
          <div className="service-faq-header">
            <span className="label-sm">Common Questions</span>
            <h2 className="headline-xl">Before You Order</h2>
          </div>
          <div className="service-faq-grid">
            {service.faq.map((item) => (
              <div key={item.q} className="service-faq-item">
                <h3 className="headline-md">{item.q}</h3>
                <p className="body-md">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section">
        <div className="cta-inner">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'wght' 200" }}
          >
            handshake
          </span>
          <h2 className="display-lg">Ready to get started?</h2>
          <p className="body-lg">
            Tell us what you have in mind. We&rsquo;ll get back to you with
            options, pricing, and a timeline.
          </p>
          <div style={{ display: "flex", gap: "var(--stack-sm)", flexWrap: "wrap", justifyContent: "center" }}>
            {service.etsyUrl ? (
              <>
                <a
                  href={service.etsyUrl}
                  className="btn btn-inverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop on Etsy
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", marginLeft: "0.5rem" }}>
                    open_in_new
                  </span>
                </a>
                <a
                  href="/quote"
                  className="btn btn-outline-inverse"
                >
                  Request a Custom Quote
                </a>
              </>
            ) : (
              <a href="/quote" className="btn btn-inverse">
                Request a Custom Quote
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
