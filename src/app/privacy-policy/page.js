import { getLastUpdatedDate } from '../utils/dates';

export const metadata = {
  title: "Privacy Policy",
  description: "Professional custom woodworking and laser engraving services privacy policy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {

  return (
    <main className="section container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="headline-xl" style={{ marginBottom: 'var(--stack-md)' }}>Privacy Policy</h1>
        <p className="body-md" style={{ marginBottom: 'var(--stack-lg)', opacity: 0.7 }}>
          Last updated: {getLastUpdatedDate()}
        </p>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Who we are</h2>
          <p className="body-md">
            BH Custom Woodworks (“we,” “us,” or “our”) is a custom woodworking and laser engraving business. This Privacy Policy explains how we collect, use, and protect information when you use our website.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Information we collect</h2>
          <p className="body-md">
            We collect personal information that you choose to give us, such as when you:
          </p>
          <ul className="body-md" style={{ listStyle: 'disc', marginLeft: 'var(--stack-md)', marginTop: 'var(--stack-sm)' }}>
            <li>Fill out a contact or quote request form on our website.</li>
            <li>Contact us by phone, email, or other means.</li>
          </ul>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            This may include your name, email address, phone number, address or job location, and details about your project.
            Like most websites, our servers and tools may also automatically collect basic technical information, such as IP address, browser type, pages viewed, and the date and time of your visit.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>How we use your information</h2>
          <p className="body-md">
            We use your information to:
          </p>
          <ul className="body-md" style={{ listStyle: 'disc', marginLeft: 'var(--stack-md)', marginTop: 'var(--stack-sm)' }}>
            <li>Respond to your inquiries and provide quotes.</li>
            <li>Communicate with you about your project and schedule services.</li>
            <li>Operate, maintain, and improve our website and services.</li>
          </ul>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Cookies and analytics</h2>
          <p className="body-md">
            Our website uses cookies and similar technologies to help it function properly and to understand how people use it.
            Necessary cookies help with basic functions such as managing form submissions and keeping the site secure.
          </p>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            <strong>Analytics:</strong> We use Google Analytics to collect information about how visitors use our site, such as pages visited, time spent on pages, and general location based on IP address. We use this information in aggregate form to understand overall trends and improve our website. We do not attempt to use Google Analytics to identify individual visitors.
          </p>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            You can control cookies through your browser settings. You can also use tools such as Google’s Analytics Opt‑out Browser Add‑on if you prefer not to be tracked by Google Analytics.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Third‑party services and sharing</h2>
          <p className="body-md">
            We may share your information with trusted third‑party service providers who help us operate our business and website, such as:
          </p>
          <ul className="body-md" style={{ listStyle: 'disc', marginLeft: 'var(--stack-md)', marginTop: 'var(--stack-sm)' }}>
            <li>Website hosting and maintenance providers.</li>
            <li>Email and communication tools.</li>
            <li>Analytics providers like Google Analytics.</li>
          </ul>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            These service providers are allowed to use your information only to perform services for us and must protect it appropriately. We do not sell personal information to third parties.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Data retention</h2>
          <p className="body-md">
            We keep personal information for as long as needed to respond to your request, work on your project, and for a reasonable period afterward for business and record‑keeping purposes. We may keep information longer if required by law or to protect our rights.
            Google Analytics data is retained according to Google’s settings and policies, which you can review in Google’s own documentation.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Data security</h2>
          <p className="body-md">
            We use reasonable physical, technical, and administrative measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Children’s privacy</h2>
          <p className="body-md">
            Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child under 13 has provided us with personal information, please contact us so we can delete it.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Your choices and rights</h2>
          <p className="body-md">
            You can contact us at any time to:
          </p>
          <ul className="body-md" style={{ listStyle: 'disc', marginLeft: 'var(--stack-md)', marginTop: 'var(--stack-sm)' }}>
            <li>Ask what personal information we have about you.</li>
            <li>Request that we update, correct, or delete your information where appropriate.</li>
            <li>Ask questions about how we handle personal information.</li>
          </ul>
          <p className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            We will respond to reasonable requests within a practical timeframe and in accordance with applicable law.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Changes to this Privacy Policy</h2>
          <p className="body-md">
            We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page and change the “Last updated” date at the top. Your continued use of the website after any changes means you accept the updated policy.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--stack-lg)' }}>
          <h2 className="headline-md" style={{ marginBottom: 'var(--stack-sm)' }}>Contact us</h2>
          <p className="body-md">
            If you have any questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="body-md" style={{ marginTop: 'var(--stack-sm)' }}>
            <p style={{ marginBottom: 'var(--stack-md)' }}><strong>BH Custom Woodworks</strong></p>
            <a href="/quote" className="btn btn-primary">Contact Us</a>
          </div>
        </section>
      </div>
    </main>
  );
}
