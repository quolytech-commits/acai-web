import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for The Açaí Club, Tirana, Albania.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <main className="legal-main">
      <div className="container legal-card">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: July 22, 2026</p>

        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website, mobile ordering
          platform, loyalty program, and related services (collectively, the &quot;Services&quot;) operated by The
          Açaí Club (&quot;Açaí Club,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or
          using our Services, you agree to be bound by these Terms. If you do not agree with any part of these
          Terms, you may not access or use our Services.
        </p>

        <h2>1. Eligibility &amp; Accounts</h2>
        <p>
          You must be at least 13 years old to create an account, and at least 18 years old to make purchases
          without parental or guardian consent. When you create an account, you agree to provide accurate and
          complete information and to keep it up to date. You are responsible for maintaining the confidentiality
          of your account credentials and for all activity that occurs under your account.
        </p>

        <h2>2. Orders, Pricing &amp; Payment</h2>
        <p>
          All orders placed through our Services are subject to acceptance and product availability. Prices,
          menu items, and promotions are subject to change without notice and may vary by location. Payment is
          due at the time of order. We use third-party payment processors and do not store full payment card
          details on our servers. You are responsible for any taxes and applicable fees associated with your order.
        </p>

        <h2>3. Cancellations &amp; Refunds</h2>
        <p>
          Because food orders are prepared fresh, cancellations may not be possible once an order has been
          submitted to a location for preparation. If you receive an incorrect or unsatisfactory order, please
          contact us within 24 hours at{' '}
          <a href="mailto:theacaiclub.info@gmail.com">theacaiclub.info@gmail.com</a> so we can make it right.
        </p>

        <h2>4. Loyalty Program</h2>
        <p>
          Participation in the Açaí Club rewards program is optional and subject to separate program terms
          communicated at enrollment. We reserve the right to modify, suspend, or terminate the loyalty program,
          or to adjust point balances, at our discretion, including in cases of suspected fraud or abuse.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>
          You agree to use our Services only for lawful purposes and in a manner that does not infringe the
          rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the Services. Prohibited conduct
          includes, without limitation:
        </p>
        <ul>
          <li>Attempting to gain unauthorized access to our systems or another user&apos;s account</li>
          <li>Uploading or transmitting viruses, malware, or other harmful code</li>
          <li>Scraping, harvesting, or reselling content or data from our Services without permission</li>
          <li>Impersonating any person or entity, or submitting fraudulent orders or payment information</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          The content, layout, design, graphics, logos, and other materials on this website are protected by
          intellectual property laws and are owned by or licensed to Açaí Club. You may not reproduce, download,
          distribute, or create derivative works from any part of our Services without our prior written consent.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our Services may contain links to third-party websites or services that are not owned or controlled by
          Açaí Club. We are not responsible for the content, privacy policies, or practices of any third-party
          sites or services.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Our Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
          of any kind, whether express or implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Açaí Club will not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or related to your use of, or inability to
          use, our Services, even if we have been advised of the possibility of such damages.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Açaí Club, its officers, employees, and affiliates from any
          claims, damages, losses, or expenses arising out of your use of the Services or your violation of
          these Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the jurisdiction in which
          Açaí Club is headquartered, without regard to its conflict of law principles.
        </p>

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be indicated by updating the
          &quot;Last updated&quot; date above. Your continued use of the Services after changes take effect
          constitutes acceptance of the revised Terms.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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
