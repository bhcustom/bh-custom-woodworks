import React from 'react';

export const metadata = {
  title: "Shipping & Returns Policy",
  description: "Information regarding shipping times, damage claims, and our return policy for custom woodworking orders.",
};

export default function ShippingPolicy() {
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
        <h1 className="headline-xl" style={{ marginBottom: 'var(--stack-md)' }}>Shipping & Returns Policy</h1>
        <p className="body-md" style={{ marginBottom: 'var(--stack-lg)', opacity: 0.7 }}>
          Last updated: {getLastUpdatedDate()}
        </p>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Processing & Production Time</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            Because the majority of our items are made-to-order and personalized, processing times vary by product.
          </p>
          <ul className="body-md" style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Standard Orders (In-stock/Etsy):</strong> Typically ship within 3–5 business days.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Custom Engravings & Signs:</strong> Typically require 1–2 weeks for design approval and production.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Large Custom Builds:</strong> Timelines will be discussed and agreed upon during the quoting process.</li>
          </ul>
          <p className="body-md">
            If you need an item by a specific date, please contact us before placing your order to ensure we can meet your deadline. Rush processing may be available for an additional fee.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Shipping Rates & Methods</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            We are proud to offer <strong>free standard shipping</strong> on all orders within the contiguous United States.
          </p>
          <p className="body-md">
            We primarily ship via USPS Priority Mail or UPS Ground, depending on the size and weight of the item. Once your order ships, you will receive a tracking number via email. Transit times are generally 2–5 business days, but please note that we cannot control delays caused by the carrier.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Damages During Transit</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            We package our woodworking pieces with extreme care to ensure they arrive safely. However, if your item is damaged during shipping, please contact us <strong>within 3 days of delivery</strong>.
          </p>
          <p className="body-md">
            We require clear photographs of the damaged item AND the original packaging to file a claim with the carrier. Do not throw away the box or packing materials. Once we receive the photos, we will work with you to replace the item as quickly as possible at no additional cost to you.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Returns & Exchanges</h2>
          <p className="body-md" style={{ marginBottom: '1rem' }}>
            <strong>Custom & Personalized Orders:</strong> Because of the nature of these items, we cannot accept returns or exchanges on custom or personalized pieces unless they arrive damaged or defective. We send digital proofs for most custom work—please review these carefully for spelling and layout before approving.
          </p>
          <p className="body-md">
            <strong>Standard/Non-Personalized Items:</strong> We gladly accept returns on standard items. Contact us within 14 days of delivery and ship items back within 30 days of delivery. Buyers are responsible for return shipping costs. If the item is not returned in its original condition, the buyer is responsible for any loss in value.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Natural Wood Variations</h2>
          <p className="body-md">
            Wood is a natural material. Variations in grain pattern, color, and texture are to be expected and are what make each piece unique. We do not consider natural grain variations, small knots, or differences in stain absorption to be defects, and items cannot be returned for these reasons.
          </p>
        </section>

      </div>
    </main>
  );
}
