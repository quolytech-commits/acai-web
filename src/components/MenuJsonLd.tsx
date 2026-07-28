import { siteConfig } from '@/lib/seo';
import { acaiCups, smoothies, toppings } from '@/lib/menu-data';

export default function MenuJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'The Açaí Club Menu',
    url: `${siteConfig.url}/menu`,
    inLanguage: 'en',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Açaí Cups',
        description: 'Açaí bowls served in a cup, built on our pure açaí base with fresh fruit and house-made granola.',
        hasMenuItem: acaiCups.map((item) => ({
          '@type': 'MenuItem',
          name: item.title,
          description: item.description,
          offers: [
            { '@type': 'Offer', price: item.priceMedium, priceCurrency: 'ALL', name: 'Medium' },
            { '@type': 'Offer', price: item.priceLarge, priceCurrency: 'ALL', name: 'Large' },
          ],
        })),
      },
      {
        '@type': 'MenuSection',
        name: 'Smoothies',
        description: 'Blended açaí smoothies.',
        hasMenuItem: smoothies.map((item) => ({
          '@type': 'MenuItem',
          name: item.title,
          description: item.description,
          offers: { '@type': 'Offer', price: item.priceValue, priceCurrency: 'ALL' },
        })),
      },
      {
        '@type': 'MenuSection',
        name: 'Toppings — Build Your Own',
        description: 'Add-on toppings for a custom açaí cup or smoothie, built on a pure açaí base.',
        hasMenuItem: toppings.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          offers: { '@type': 'Offer', price: item.priceValue, priceCurrency: 'ALL' },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
