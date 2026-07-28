import Link from 'next/link';
import type { Metadata } from 'next';
import '../reviews.css';

export const metadata: Metadata = {
  title: 'Reviews',
  description: "See what customers say about Albania's biggest açaí store. Real feedback on our açaí bowls, sourcing, and premium pricing in Tirana.",
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Reviews | The Açaí Club',
    description: "See what customers say about Albania's biggest açaí store.",
    url: '/reviews',
  },
};

import FloatingReviewCards from '../../components/FloatingReviewCards';
import { siteConfig } from '@/lib/seo';

type Review = {
  quote: string;
  name: string;
  meta: string;
  stars: number;
};

const reviews: Review[] = [
  {
    quote: "First time I've had açaí that actually tastes like açaí and not just frozen sugar. Worth every bit of the price.",
    name: 'Enca',
    meta: 'Ipanema · Regular',
    stars: 5,
  },
  {
    quote: "Yes it's pricier than the mall smoothie place, but now I understand why — you can genuinely taste the difference in the base.",
    name: 'Oriola M.',
    meta: 'Trancoso',
    stars: 5,
  },
  {
    quote: 'Asked the team about their sourcing and they actually knew what they were talking about. Not just a script.',
    name: 'Roza L.',
    meta: 'Brasília',
    stars: 5,
  },
  {
    quote: 'My go-to after every workout. The Recife bowl keeps me full for hours without the sugar crash.',
    name: 'Keisilda',
    meta: 'Recife · 3x weekly',
    stars: 5,
  },
  {
    quote: 'Texture is completely different from other places — thick, smooth, not icy. You can tell it is not a powder mix.',
    name: 'Kristel C.',
    meta: 'Búzios',
    stars: 4,
  },
  {
    quote: 'Built my own bowl exactly how I wanted it. Staff was patient and happy to explain every topping.',
    name: 'Luana V.',
    meta: 'Make Your Own',
    stars: 5,
  },
];

export default function ReviewsPage() {
  const ratingValue = (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1);

  const reviewsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.stars,
        bestRating: '5',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: r.name,
      },
      reviewBody: r.quote,
    })),
  };

  return (
    <main className="reviews-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div className="container">
        <div className="reviews-hero">
          <h1>What People Say</h1>
          <p>
            We hear it a lot: our açaí costs more than the shop down the street. Here&apos;s what customers who tried
            both have to say about the difference.
          </p>
        </div>

        <div className="reviews-summary">
          <span className="score">{ratingValue}</span>
          <span className="stars">★★★★★</span>
          <span className="count">based on {reviews.length} customer reviews across our locations</span>
        </div>

        <FloatingReviewCards reviews={reviews} />

        <div className="reviews-cta">
          <p>Tried us recently? We&apos;d love to hear how it went.</p>
          <Link href="/contact" className="btn">Leave Feedback ➔</Link>
        </div>
      </div>
    </main>
  );
}
