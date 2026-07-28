import Link from 'next/link';
import type { Metadata } from 'next';
import '../biz-page.css';

export const metadata: Metadata = {
  title: 'Franchise & Partnerships',
  description: "Bring The Açaí Club to your city. Franchise with Albania's biggest açaí store — a proven concept with authentic sourcing and supply chain built in.",
  alternates: { canonical: '/franchise' },
  openGraph: {
    title: 'Franchise & Partnerships | The Açaí Club',
    description: "Franchise with Albania's biggest açaí store — a proven concept with sourcing built in.",
    url: '/franchise',
  },
};

export default function FranchisePage() {
  return (
    <main className="biz-page">
      <div className="container">
        <div className="biz-hero">
          <h1>Bring The Açaí Club to Your City</h1>
          <p>
            We built our supply chain as direct distributors of authentic Brazilian açaí precisely so it could
            scale — every new location draws from the same source, with no compromise on quality.
          </p>
        </div>

        <div className="biz-features">
          <div className="biz-feature">
            <span className="biz-feature-num">01</span>
            <div className="biz-feature-content">
              <h3>Proven Concept</h3>
              <p>A focused menu, an authentic product story, and a brand built around real açaí — not a generic smoothie shop template.</p>
            </div>
          </div>
          <div className="biz-feature">
            <span className="biz-feature-num">02</span>
            <div className="biz-feature-content">
              <h3>Supply Chain Included</h3>
              <p>Because we distribute açaí ourselves, franchise locations plug directly into our existing sourcing and cold-chain logistics.</p>
            </div>
          </div>
          <div className="biz-feature">
            <span className="biz-feature-num">03</span>
            <div className="biz-feature-content">
              <h3>Support to Launch</h3>
              <p>Guidance on site setup, staff training, and menu execution so every location opens ready to serve the real thing.</p>
            </div>
          </div>
        </div>

        <div className="biz-section">
          <h2>Who We&apos;re Looking For</h2>
          <p>
            We&apos;re looking for partners who care about doing this properly — operators who understand that an
            authentic, premium açaí experience is worth protecting, not diluting to cut costs.
          </p>
        </div>

        <div className="biz-section">
          <h2>What&apos;s Next</h2>
          <ul className="biz-list">
            <li>Reach out with your market, background, and investment capacity</li>
            <li>We&apos;ll walk through the concept, supply chain, and economics in detail</li>
            <li>From there, we work together on site selection and launch timeline</li>
          </ul>
        </div>

        <div className="biz-cta">
          <p>Interested in opening an Açaí Club location?</p>
          <Link href="/contact?subject=franchise" className="btn">Start the Conversation ➔</Link>
        </div>
      </div>
    </main>
  );
}
