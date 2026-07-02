import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL('https://bhcustomwoodworks.com'),
  title: {
    default: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
    template: "%s | BH Custom Woodworks"
  },
  description:
    "Custom woodwork and precision laser engraving designed to last generations. From handcrafted charcuterie boards to premium cutting boards, we blend heritage craft with modern technology.",
  keywords: [
    "custom woodwork",
    "laser engraving",
    "charcuterie boards",
    "cutting boards",
    "wedding decor",
    "memorial pieces",
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
    images: [
      {
        url: 'https://bhcustomwoodworks.com/images/charcuterie-boards-final.webp',
        width: 1200,
        height: 630,
        alt: 'Handcrafted premium walnut charcuterie board',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BH Custom Woodworks | Custom Woodwork & Laser Engraving",
    description: "Heirloom quality handcrafted woodwork and precision laser engraving.",
    images: ['https://bhcustomwoodworks.com/images/charcuterie-boards-final.webp'],
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
  logo: 'https://bhcustomwoodworks.com/bh-custom-woodworks-logo.svg',
  url: 'https://bhcustomwoodworks.com',
  description: 'Artisan woodworking and precision laser engraving, specializing in heirloom-quality memorial pieces, premium charcuterie boards, and custom cutting boards.',
  address: {
    '@type': 'PostalAddress',
    'addressLocality': 'West Jordan',
    'addressRegion': 'UT',
    'addressCountry': 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    'email': 'BHWoodworx@gmail.com',
    'contactType': 'customer support'
  },
  sameAs: [
    'https://www.etsy.com/shop/BHWoodworx'
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HXVTRL2ED3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HXVTRL2ED3');
          `}
        </Script>
        <Navbar />

        {children}

        {/* ====== FOOTER ====== */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="navbar-logo">
              <Image
                src="/bh-custom-woodworks-logo.svg"
                alt=""
                width={40}
                height={40}
                className="navbar-logo-icon"
              />
              <span>BH Custom <br /> Woodworks</span>
            </Link>
            <p className="body-md">
              Crafting legacy pieces through the union of traditional
              woodworking and modern precision.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="label-sm">Navigation</h4>
            <ul>
              <li><Link href="/#collections" className="body-md">Collections</Link></li>
              <li><Link href="/#process" className="body-md">Process</Link></li>
              <li><Link href="/quote" className="body-md">Custom Quote</Link></li>
              <li><Link href="/our-story" className="body-md">Our Story</Link></li>
              <li><Link href="/contact" className="body-md">Contact</Link></li>
              <li><Link href="/shop" className="body-md">Shop</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="label-sm">Legal</h4>
            <ul>
              <li><Link href="/shipping-policy" className="body-md">Shipping Policy</Link></li>
              <li><Link href="/privacy-policy" className="body-md">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="body-md">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="label-sm footer-copy">
            © 2026 BH Custom Woodworks. <br className="footer-split-br" /> All rights reserved.
          </p>
        </div>
      </footer>
      </body>
    </html>
  );
}
