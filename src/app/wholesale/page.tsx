import Link from 'next/link';
import type { Metadata } from 'next';
import './wholesale.css';

export const metadata: Metadata = {
  title: 'Wholesale & Distribution',
  description: 'The Açaí Club supplies authentic Brazilian açaí pulp to cafés, gyms, and juice bars across Albania. Direct sourcing, cold-chain delivery, flexible volume.',
  alternates: { canonical: '/wholesale' },
  openGraph: {
    title: 'Wholesale & Distribution | The Açaí Club',
    description: 'Authentic Brazilian açaí pulp, supplied direct to businesses across Albania.',
    url: '/wholesale',
  },
};

export default function WholesalePage() {
  return (
    <main className="wholesale-page">
      <div className="wholesale-container">
        
        <div className="wholesale-hero">
          <h1>Authentic Açaí, Supplied Direct</h1>
          <p>
            As distributors of authentic Brazilian açaí, we supply frozen açaí pulp to cafés, gyms, juice bars, and
            other food service businesses — the same source we use in our own stores.
          </p>
        </div>

        <div className="wholesale-features">
          <div className="feature-item">
            <span className="feature-num">01</span>
            <h3>Direct Sourcing</h3>
            <p>Pulp sourced directly from producers in the Amazon region of Brazil — no brokers, no relabeled product.</p>
          </div>
          <div className="feature-item">
            <span className="feature-num">02</span>
            <h3>Cold-Chain Delivery</h3>
            <p>Flash-frozen near the point of harvest and shipped under controlled temperatures to preserve flavor and nutrients.</p>
          </div>
          <div className="feature-item">
            <span className="feature-num">03</span>
            <h3>Flexible Volume</h3>
            <p>Case-size orders for a single café or recurring bulk supply for multi-location operators — we scale with your business.</p>
          </div>
        </div>

        <div className="wholesale-content-grid">
          <div className="content-block">
            <h2>Who We Work With</h2>
            <p>
              We partner with businesses that care about serving authentic açaí, not a diluted or powdered substitute.
              That includes independent cafés, smoothie and juice bars, gyms and wellness studios, and hospitality
              groups looking to add a genuine açaí offering to their menu.
            </p>
          </div>
          <div className="content-block">
            <h2>How It Works</h2>
            <ul className="content-list">
              <li>Reach out with your business details and expected order volume.</li>
              <li>We&apos;ll walk you through pricing, minimum order sizes, and delivery logistics for your area.</li>
              <li>Set up a recurring supply schedule or place one-off bulk orders as needed.</li>
            </ul>
          </div>
        </div>

        <div className="wholesale-cta">
          <p>Interested in sourcing authentic açaí for your business?</p>
          <Link href="/contact?subject=wholesale" className="btn-primary">Talk to Our Team ➔</Link>
        </div>
        
      </div>
    </main>
  );
}
