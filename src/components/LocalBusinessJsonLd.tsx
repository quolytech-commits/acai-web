import { siteConfig } from '@/lib/seo';

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: 'Açaí Club Tirana',
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage.url}`,
    logo: `${siteConfig.url}${siteConfig.ogImage.url}`,
    priceRange: '$$',
    servesCuisine: ['Açaí', 'Brazilian', 'Smoothies', 'Healthy'],
    slogan: siteConfig.tagline,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '6',
      bestRating: '5',
      worstRating: '1',
    },
    hasMenu: `${siteConfig.url}/menu`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Tirana',
      containedInPlace: {
        '@type': 'Country',
        name: 'Albania',
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '23:00',
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.linktree,
      'https://maps.app.goo.gl/PtHFhff2EShS7Wuh8',
    ],
    hasMap: 'https://maps.app.goo.gl/PtHFhff2EShS7Wuh8',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
