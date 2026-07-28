import Link from 'next/link';
import type { Metadata } from 'next';
import { faqGroups } from '@/lib/faq-data';
import '../faq.css';

export const metadata: Metadata = {
  title: 'FAQ',
  description: "Why does authentic açaí cost more? What is açaí, really? Answers from Albania's biggest açaí store on sourcing, pricing, and health benefits.",
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | The Açaí Club',
    description: "Why does authentic açaí cost more, and what is açaí really? Answers from Albania's biggest açaí store.",
    url: '/faq',
  },
};

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <main className="faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        <div className="faq-hero">
          <h1>Let&apos;s Talk Açaí</h1>
          <p>
            We get a lot of questions about what açaí actually is, why we call ourselves distributors, and why our
            bowls sit at a premium price. Here is the honest answer to all of it.
          </p>
        </div>

        <div className="faq-groups">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="faq-group-title">{group.title}</h2>
              <div className="faq-list">
                {group.items.map((item) => (
                  <details className="faq-item" key={item.q}>
                    <summary>
                      <span>{item.q}</span>
                      <span className="faq-icon">+</span>
                    </summary>
                    <p className="faq-answer">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have a question we didn&apos;t cover?</p>
          <Link href="/contact" className="btn">Contact Us ➔</Link>
        </div>
      </div>
    </main>
  );
}
