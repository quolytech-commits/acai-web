import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for The Açaí Club, Tirana, Albania.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
};

export default function CookiePolicy() {
  return (
    <main className="legal-main">
      <div className="container legal-card">
        <h1 className="legal-title">Cookie Policy</h1>
        <p className="legal-updated">Last updated: July 22, 2026</p>

        <p>
          This Cookie Policy explains how The Açaí Club (&quot;Açaí Club,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website. It
          explains what these technologies are, why we use them, and your rights to control our use of them.
          This policy should be read together with our{' '}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
          well as to provide reporting information. Similar technologies, such as pixels and local storage, may
          be used for the same purposes.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Strictly necessary cookies:</strong> required for the website and ordering flow to function,
            such as keeping items in your cart and maintaining your login session. These cannot be disabled.
          </li>
          <li>
            <strong>Performance &amp; analytics cookies:</strong> help us understand how visitors interact with
            our website, such as pages visited and time spent, so we can improve our menu and site experience.
          </li>
          <li>
            <strong>Functional cookies:</strong> remember your preferences, such as your default location or
            saved order, to provide enhanced, personalized features.
          </li>
          <li>
            <strong>Targeting &amp; advertising cookies:</strong> used to deliver relevant promotions and to
            measure the effectiveness of our marketing campaigns, including on third-party platforms.
          </li>
        </ul>

        <h2>3. Why We Use Cookies</h2>
        <p>
          We use first-party and third-party cookies for several reasons: some cookies are required for
          technical reasons for our website to operate (&quot;essential&quot; cookies), while others enable us to
          track and target the interests of our users to enhance the experience on our website and measure the
          performance of our marketing.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may use various third parties&apos; cookies to report usage
          statistics, deliver advertisements, and enable payment processing. These third parties may use
          cookies, web beacons, and similar technologies to collect information about your use of our website
          and other websites.
        </p>

        <h2>5. How Can I Control Cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can set or amend your web
          browser controls to accept or refuse cookies, and if you choose to reject cookies, you may still use
          our website, though your access to some functionality and areas may be restricted. Most browsers allow
          you to refuse or delete cookies via their settings menu.
        </p>

        <h2>6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for
          other operational, legal, or regulatory reasons. Please revisit this page periodically to stay
          informed about our use of cookies.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
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
