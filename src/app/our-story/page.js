import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Story",
  description: "Learn about the heritage, craftsmanship, and dedication behind BH Custom Woodworks.",
  alternates: {
    canonical: "/our-story",
  },
};

export default function OurStory() {
  return (
    <main className="section container story-main">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div className="story-hero">
          <span className="label-sm story-hero-label">Our Heritage</span>
          
          <div className="story-hero-main">
            <div className="story-hero-text">
              <h1 className="display-lg" style={{ color: 'var(--primary)' }}>
                Woodworking Isn&apos;t Just a Trade. It&apos;s a Tradition.
              </h1>
            </div>

            <div className="story-hero-image">
              <Image
                src="/images/artisan.webp"
                alt="Bob, Owner and master woodworker of BH Custom Woodworks"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        </div>

        <article className="body-lg" style={{ lineHeight: 1.8, color: 'var(--on-surface-variant)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            There&rsquo;s a profound difference between something manufactured and something made. When you run your hand across a piece of solid walnut that has been planed, sanded, and finished by hand, you can feel the hours that went into it. That tactile connection is exactly why BH Custom Woodworks was started.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            We started small, building pieces for friends and family in a modest garage shop. The goal was never mass production; it was always about precision. Whether it was a simple cutting board or a complex laser-engraved memorial urn, the philosophy remained the same: use the best American hardwoods, refuse to cut corners, and build it as if it were going into our own home.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Today, the shop has grown. Our tools have gotten bigger, and our laser engravers allow us to achieve a level of personalized detail that was unimaginable decades ago. But the core of the business hasn&apos;t changed. Every piece of wood is still hand-selected for its grain and character. Every board is milled and joined with care. Every finish is applied by hand.
          </p>
          
          <blockquote style={{ 
            borderLeft: '4px solid var(--primary)', 
            paddingLeft: '1.5rem', 
            margin: 'var(--stack-lg) 0',
            fontFamily: "'Noto Serif', serif",
            fontSize: '1.5rem',
            color: 'var(--primary)',
            fontStyle: 'italic'
          }}>
            &ldquo;We don&apos;t just sell products; we create heirlooms. Things meant to be passed down, used daily, and cherished for generations.&rdquo;
          </blockquote>

          <p style={{ marginBottom: '1.5rem' }}>
            When you order from us, you aren&apos;t talking to a massive customer service department. You&apos;re talking directly to the woodworker who will select the lumber, run the laser, and pack the box. That direct connection ensures that your vision is translated perfectly into the final piece.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            Thank you for supporting traditional craftsmanship. We look forward to building something beautiful for you.
          </p>

          <div style={{ textAlign: 'center', padding: 'var(--stack-lg)', background: 'var(--surface-container-low)', borderRadius: 'var(--rounded-lg)' }}>
            <h3 className="headline-md" style={{ marginBottom: 'var(--stack-sm)', color: 'var(--primary)' }}>Ready to start a project?</h3>
            <p className="body-md" style={{ marginBottom: 'var(--stack-md)' }}>Let&apos;s talk about what you have in mind.</p>
            <Link href="/quote" className="btn btn-primary">Request a Custom Quote</Link>
          </div>
        </article>

      </div>
    </main>
  );
}
