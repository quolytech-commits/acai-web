import Link from 'next/link';
import type { Metadata } from 'next';
import './careers.css';

export const metadata: Metadata = {
  title: 'Careers',
  description: "Join the team at Albania's biggest açaí store. Open roles in our Tirana store and distribution team at The Açaí Club.",
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | The Açaí Club',
    description: "Join the team at Albania's biggest açaí store in Tirana.",
    url: '/careers',
  },
};

const openRoles: { title: string; type: string; location: string }[] = [
  // Uncomment and add roles here when hiring
  // { title: 'Bowl Artisan (Part-Time)', type: 'Part-Time', location: 'In-Store' },
  // { title: 'Shift Lead', type: 'Full-Time', location: 'In-Store' },
  // { title: 'Store Manager', type: 'Full-Time', location: 'In-Store' },
  // { title: 'Delivery & Logistics', type: 'Full-Time', location: 'Distribution' },
];

export default function CareersPage() {
  return (
    <main className="careers-page">
      <div className="careers-container">
        
        <div className="careers-hero">
          <h1>Shape The Future of Açaí</h1>
          <p>
            We&apos;re a passionate team building something we genuinely believe in — real, authentic açaí done properly.
            If you thrive in a fast-paced environment and love great food, we&apos;d love to meet you.
          </p>
        </div>

        <div className="careers-values">
          <div className="value-card">
            <span className="value-icon">🫐</span>
            <h3>Authentic Product</h3>
            <p>You&apos;ll be serving a premium, imported product, not a powdered mix. It&apos;s something you can proudly stand behind.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🌱</span>
            <h3>Room to Grow</h3>
            <p>As we expand our locations and distribution network, there are real opportunities to move into leadership roles.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>Team-First Culture</h3>
            <p>Enjoy flexible scheduling, exclusive staff perks, and a supportive environment that treats everyone with respect.</p>
          </div>
        </div>

        <h2 className="job-section-title">Open Positions</h2>
        
        <div className="job-board">
          {openRoles.length > 0 ? (
            openRoles.map((role) => (
              <div className="job-entry" key={role.title}>
                <div className="job-details">
                  <h3>{role.title}</h3>
                  <div className="job-meta">
                    <span>{role.location}</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <Link href={`/contact?subject=Application:%20${encodeURIComponent(role.title)}`} className="apply-btn">
                  Apply Now ➔
                </Link>
              </div>
            ))
          ) : (
            <div className="no-jobs-message">
              <h3>We&apos;re fully staffed right now!</h3>
              <p>There are no open positions at the moment, but we&apos;re always looking for great talent. Feel free to send us your resume for future consideration.</p>
            </div>
          )}
        </div>

        <div className="careers-cta">
          <p>Don&apos;t see the right role listed? We&apos;re always looking for great talent.</p>
          <Link href="/contact?subject=General%20Application" className="apply-btn">
            Send General Application
          </Link>
        </div>

      </div>
    </main>
  );
}
