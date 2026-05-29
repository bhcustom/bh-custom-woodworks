import Image from "next/image";

export const metadata = {
  title: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
  description:
    "Custom woodwork and precision laser engraving designed to last generations. From personalized signs to handcrafted cutting boards, we blend heritage craft with modern technology.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero-bg-final.jpg"
            alt="Close-up of a beautifully finished solid dark wood tabletop corner with soft sunlight highlights"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <Image
            src="/bh-custom-woodworks-logo.svg"
            alt="Official BH Custom Woodworks circular saw blade logo, featuring a friendly illustration of a smiling artisan with white hair and glasses representing founder Bob"
            width={160}
            height={160}
            className="hero-logo-img"
            priority
          />
          <span className="label-sm">BH Custom Woodworks</span>
          <h1 className="display-lg">
            Heirloom Quality, Handcrafted for You
          </h1>
          <p className="body-lg hero-desc">
            Custom woodwork and precision laser engraving designed to last
            generations. Every piece is a unique intersection of heritage craft
            and modern technology.
          </p>
          <div className="hero-cta">
            <a href="/shop" className="btn btn-primary" id="hero-cta-shop">
              Browse the Collection
            </a>
            <a href="/quote" className="btn btn-outline" id="hero-cta-quote">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* ====== BENTO GRID — Product Categories ====== */}
      <section
        id="collections"
        className="section"
      >
        <div className="container">
          <div className="bento-header">
            <h2 className="headline-xl">Curated Collections</h2>
            <p className="body-lg">
              Explore our range of personalized, artisan-crafted pieces.
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1 — Signature (large): Memorial Pieces */}
            <a href="/services/memorial-pieces" className="showcase-card signature">
              <Image
                src="/images/memorial-pieces.jpg"
                alt="Handcrafted wooden memorial keepsake box with floral laser engraving"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <span className="label-sm card-tag">Signature</span>
                <h3 className="headline-md">Memorial Pieces</h3>
                <p className="body-md">
                  Handcrafted cremation urns, tribute boxes, and pet urns,
                  built with care to honor your loved ones and preserve their stories.
                </p>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2: Charcuterie Boards */}
            <a href="/services/charcuterie-boards" className="showcase-card">
              <Image
                src="/images/charcuterie-boards.jpg"
                alt="Handcrafted dark walnut charcuterie board styled with artisan cheeses and fruits"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <h3 className="headline-md">Charcuterie Boards</h3>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>

            {/* Card 3: Cutting Boards */}
            <a href="/services/cutting-boards" className="showcase-card">
              <Image
                src="/images/cutting-boards.jpg"
                alt="Handcrafted walnut edge-grain cutting board with juice groove on a marble surface"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <h3 className="headline-md">Cutting Boards</h3>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>

            {/* Card 4: Wedding Decor */}
            <a href="/services/wedding-decor" className="showcase-card">
              <Image
                src="/images/wedding-decor.jpg"
                alt="Elegant laser-engraved wooden wedding sign with leafy borders and script text"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <h3 className="headline-md">Wedding Decor</h3>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>

            {/* Card 5: Laser Engraved Gifts */}
            <a href="/services/laser-engraved-gifts" className="showcase-card">
              <Image
                src="/images/laser-gifts.jpg"
                alt="Collection of laser-engraved wooden gifts including ornaments and coasters"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <h3 className="headline-md">Laser Engraved Gifts</h3>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>

            {/* Card 6: Business Signage */}
            <a href="/services/business-signage" className="showcase-card">
              <Image
                src="/images/business-signage.jpg"
                alt="Minimalist mountain line-art logo laser-engraved on a rectangular maple wood block plaque"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="card-scrim" />
              <div className="card-content">
                <h3 className="headline-md">Business Signage</h3>
                <div className="label-sm card-link">
                  <span className="card-link-text">View</span>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ====== EDITORIAL / PROCESS ====== */}
      <section id="process" className="editorial">
        <div className="editorial-inner">
          <div className="editorial-image">
            <div className="editorial-image-frame">
              <Image
                src="/images/process.jpg"
                alt="Laser engraving machine cutting a detailed design into solid wood"
                width={800}
                height={1000}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            </div>

          <div className="editorial-text">
            <span className="label-sm">Our Philosophy</span>
            <h2 className="headline-xl">
              The Art of <br />
              <em>Precision</em>
            </h2>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">forest</span>
                </div>
                <div>
                  <h4>Heritage Materials</h4>
                  <p className="body-md">
                    We hand-select every piece of lumber, prioritizing
                    sustainable domestic hardwoods like Black Walnut, Hard Maple,
                    and Cherry. The natural grain dictates the final piece.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4>Modern Technology</h4>
                  <p className="body-md">
                    State-of-the-art laser engraving allows for uncompromising
                    detail. From intricate typography to complex family crests,
                    we achieve perfection down to the fraction of a millimeter.
                  </p>
                </div>
              </div>
            </div>

            <div className="editorial-divider">
              <a href="/our-story" className="label-sm">
                Read Our Story{" "}
                <span className="material-symbols-outlined">east</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section id="quote" className="cta-section">
        <div className="cta-inner">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'wght' 200" }}
          >
            handshake
          </span>
          <h2 className="display-lg">
            Let&rsquo;s Create Something Beautiful Together.
          </h2>
          <p className="body-lg">
            Whether it&rsquo;s a personalized gift or a large custom
            installation, we&rsquo;re ready to bring your vision to life.
          </p>
          <a href="/quote" className="btn btn-inverse" id="cta-request-quote">
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
