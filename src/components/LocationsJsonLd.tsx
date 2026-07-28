import { siteConfig } from '@/lib/seo';
import { LOCATIONS } from '@/lib/locations-data';

export default function LocationsJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Açaí Club Locations',
    url: `${siteConfig.url}/locations`,
    itemListElement: LOCATIONS.map((loc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CafeOrCoffeeShop',
        name: `The Açaí Club — ${loc.name}`,
        branchOf: {
          '@type': 'CafeOrCoffeeShop',
          name: siteConfig.name,
          '@id': `${siteConfig.url}/#business`,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: loc.address,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: loc.lat,
          longitude: loc.lng,
        },
        ...(loc.phone ? { telephone: loc.phone } : {}),
        openingHours: loc.hours,
        hasMap: loc.mapLink,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
