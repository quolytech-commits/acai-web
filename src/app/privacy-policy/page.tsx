import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for The Açaí Club, Tirana, Albania.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-main">
      <div className="container legal-card">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: July 22, 2026</p>

        <p>
          Welcome to The Açaí Club. We respect your privacy and are committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
          visit our website, place an order, or interact with our loyalty program, and it describes your rights
          regarding that information.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          The Açaí Club (&quot;Açaí Club,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is the data
          controller responsible for your personal data. If you have any questions about this policy or how we
          handle your data, you can reach us at{' '}
          <a href="mailto:theacaiclub.info@gmail.com">theacaiclub.info@gmail.com</a>.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li><strong>Identity Data:</strong> name, username, date of birth</li>
          <li><strong>Contact Data:</strong> email address, phone number, delivery address</li>
          <li><strong>Order Data:</strong> items purchased, order history, favorite locations</li>
          <li><strong>Payment Data:</strong> limited billing details processed by our payment provider (we do not store full card numbers)</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, time zone</li>
          <li><strong>Usage Data:</strong> pages visited, features used, and interactions with our website and app</li>
          <li><strong>Marketing Data:</strong> your preferences for receiving promotions and communications</li>
        </ul>

        <h2>3. How We Collect Your Data</h2>
        <p>
          We collect data directly from you when you create an account, place an order, join our loyalty
          program, or contact us. We also collect data automatically through cookies and similar technologies
          as you interact with our Services — see our{' '}
          <a href="/cookie-policy">Cookie Policy</a> for details.
        </p>

        <h2>4. How We Use Your Personal Data</h2>
        <p>We use your personal data only where the law allows us to, typically in the following circumstances:</p>
        <ul>
          <li>To process and fulfil your orders, including payment, delivery, and customer support</li>
          <li>To manage your account and your participation in our loyalty program</li>
          <li>To send you order confirmations, service updates, and, where you have opted in, marketing communications</li>
          <li>To improve our website, menu, and services based on aggregated usage trends</li>
          <li>To detect, investigate, and prevent fraud or other unlawful activity</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>

        <h2>5. Sharing Your Information</h2>
        <p>
          We may share your data with trusted third parties who support our operations, such as payment
          processors, delivery partners, hosting and analytics providers, and marketing platforms. These parties
          are only permitted to use your data to provide services to us and are bound by appropriate
          confidentiality and data protection obligations. We do not sell your personal data.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfil the purposes we collected it for,
          including for the purposes of satisfying any legal, accounting, or reporting requirements, after which
          it is securely deleted or anonymized.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, delete, or port your personal
          data, to object to or restrict certain processing, and to withdraw consent for marketing
          communications at any time. To exercise any of these rights, contact us at{' '}
          <a href="mailto:theacaiclub.info@gmail.com">theacaiclub.info@gmail.com</a>.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our Services are not directed to children under 13, and we do not knowingly collect personal data from
          children under 13. If you believe a child has provided us with personal data, please contact us so we
          can remove it.
        </p>

        <h2>9. Data Security</h2>
        <p>
          We use appropriate technical and organizational measures to protect your personal data against
          accidental loss, unauthorized access, alteration, or disclosure. However, no method of transmission or
          storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>10. International Transfers</h2>
        <p>
          Where your data is transferred outside of your home country, we take steps to ensure it receives an
          adequate level of protection, including through the use of appropriate contractual safeguards.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
          reasons. We will indicate any material changes by updating the &quot;Last updated&quot; date above.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          <br />
          The Açaí Club
          <br />
          Rruga Lidhja E Prizrenit, Tiranë 1016
          <br />
          <a href="mailto:theacaiclub.info@gmail.com">theacaiclub.info@gmail.com</a> · 069 510 0504
        </p>
      </div>
    </main>
  );
}
