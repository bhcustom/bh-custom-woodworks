import "./globals.css";
import Image from "next/image";
import ScrollLogo from "./components/ScrollLogo";
import Navbar from "./components/Navbar";

export const metadata = {
  metadataBase: new URL('https://bhcustomwoodworks.com'),
  title: {
    default: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
    template: "%s | BH Custom Woodworks"
  },
  description:
    "Custom woodwork and precision laser engraving designed to last generations. From personalized signs to handcrafted cutting boards, we blend heritage craft with modern technology.",
  keywords: [
    "custom woodwork",
    "laser engraving",
    "personalized wood signs",
    "cutting boards",
    "wedding decor",
    "artisan furniture",
    "personalized gifts",
    "business signage",
  ],
  openGraph: {
    title: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
    description: "Heirloom quality handcrafted woodwork and precision laser engraving.",
    url: 'https://bhcustomwoodworks.com',
    siteName: 'BH Custom Woodworks',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
    description: "Heirloom quality handcrafted woodwork and precision laser engraving.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BH Custom Woodworks',
  logo: 'https://bhcustomwoodworks.com/logo_icon.svg',
  url: 'https://bhcustomwoodworks.com',
  description: 'Artisan woodworking and precision laser engraving, specializing in heirloom-quality custom signs, memorial urns, and personalized gifts.',
  address: {
    '@type': 'PostalAddress',
    'addressLocality': 'West Jordan',
    'addressRegion': 'UT',
    'addressCountry': 'US'
  },
  sameAs: [
    'https://www.etsy.com/shop/BHCWoodworking'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollLogo />
        <Navbar />

        {children}

        {/* ====== FOOTER ====== */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="navbar-logo">
              <Image
                src="/logo_icon.svg"
                alt="BH Custom Woodworks Logo"
                width={40}
                height={40}
                className="navbar-logo-icon"
              />
              <span>BH Custom <br /> Woodworks</span>
            </a>
            <p className="body-md">
              Crafting legacy pieces through the perfect union of traditional
              woodworking and modern precision.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="label-sm">Navigation</h4>
            <ul>
              <li><a href="/#collections" className="body-md">Collections</a></li>
              <li><a href="/#process" className="body-md">Process</a></li>
              <li><a href="/quote" className="body-md">Custom Quote</a></li>
              <li><a href="/our-story" className="body-md">Our Story</a></li>
              <li><a href="/shop" className="body-md">Shop</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="label-sm">Legal</h4>
            <ul>
              <li><a href="/shipping-policy" className="body-md">Shipping Policy</a></li>
              <li><a href="/privacy-policy" className="body-md">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="body-md">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="label-sm footer-copy">
            © 2026 BH Custom Woodworks. All rights reserved.
          </p>
        </div>
      </footer>
      </body>
    </html>
  );
}
