import React from 'react';

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for orders, intellectual property, and website usage.",
};

export default function TermsOfService() {
  const getLastUpdatedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const months = [0, 3, 6, 9];
    const lastUpdateMonth = months.reduce((acc, month) => (now.getMonth() >= month ? month : acc), 0);
    const day = ((year + lastUpdateMonth) % 15) + 10;
    const updateDate = new Date(year, lastUpdateMonth, day);
    return updateDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <main className="section container">
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--section-padding)' }}>
        <h1 className="headline-xl" style={{ marginBottom: 'var(--stack-md)' }}>Terms of Service</h1>
        <p className="body-md" style={{ marginBottom: 'var(--stack-lg)', opacity: 0.7 }}>
          Last updated: {getLastUpdatedDate()}
        </p>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>1. Agreement to Terms</h2>
          <p className="body-md">
            By accessing our website or purchasing products from BH Custom Woodworks, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any of our services.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>2. Custom Orders and Proofs</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            For customized items, we will often provide a digital proof for your approval before production begins. It is the buyer's responsibility to carefully review the proof for spelling, grammar, layout, and factual accuracy. 
          </p>
          <p className="body-md">
            Once a proof is approved, BH Custom Woodworks is not responsible for any errors that were present in the approved proof. Remaking an item due to an error approved in a proof will incur additional costs.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>3. Intellectual Property and Copyright</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            When you submit a design, logo, or image for engraving, you represent and warrant that you own the copyright or have the necessary licenses and permissions to use that material. We will not be held liable for any copyright or trademark infringement resulting from customer-supplied artwork.
          </p>
          <p className="body-md">
            All original designs created by BH Custom Woodworks remain our intellectual property. We reserve the right to photograph custom orders and use those images for marketing and portfolio purposes, unless the item contains sensitive or confidential information and you explicitly request otherwise.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>4. Product Characteristics</h2>
          <p className="body-md">
            We work with solid, natural hardwoods. As such, variations in color, grain pattern, and slight dimension fluctuations due to humidity are inherent to the material. These are not defects. Wood may also react to exposure to direct sunlight or extreme temperature changes. We provide care instructions with our products and are not responsible for damage resulting from improper care, environmental factors, or normal wear and tear.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>5. Pricing and Payments</h2>
          <p className="body-md">
            All prices are subject to change without notice. For custom projects quoted directly, the quote is valid for 30 days. We require payment in full (or an agreed-upon deposit for large builds) before production begins. We reserve the right to refuse or cancel any order for any reason, including errors in pricing or availability.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>6. Limitation of Liability</h2>
          <p className="body-md">
            In no case shall BH Custom Woodworks, our directors, officers, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, arising from your use of any of the service or any products procured using the service.
          </p>
        </section>

      </div>
    </main>
  );
}
