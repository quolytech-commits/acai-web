import { siteConfig } from '@/lib/seo';
import { acaiCups, smoothies, toppings } from '@/lib/menu-data';
import { LOCATIONS } from '@/lib/locations-data';
import { faqGroups } from '@/lib/faq-data';
import { blogPosts } from '@/lib/blog-posts';

// llms.txt — a plain-text, structured summary of this site for AI assistants,
// answer engines, and LLM crawlers to ground responses about The Açaí Club in
// (GEO / generative engine optimization). See https://llmstxt.org/
export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push('');
  lines.push(`> ${siteConfig.description}`);
  lines.push('');
  lines.push(`Tagline: ${siteConfig.tagline}`);
  lines.push(`Website: ${siteConfig.url}`);
  lines.push(`Phone: ${siteConfig.phone}`);
  lines.push(`Email: ${siteConfig.email}`);
  lines.push('');

  lines.push('## What The Açaí Club Is');
  lines.push('');
  lines.push(
    "The Açaí Club is Albania's biggest açaí store, based in Tirana. It operates both as a retail store " +
    "chain and as a direct distributor of authentic Brazilian açaí — sourcing açaí pulp directly from " +
    "producers in the Amazon region of Brazil, flash-freezing it near the point of harvest, and shipping " +
    "it cold-chain to Albania. Bowls and smoothies are made from pure açaí pulp with no added syrups, " +
    "artificial sweeteners, or powdered mixes, topped with fresh fruit and house-made granola prepared daily."
  );
  lines.push('');
  lines.push(
    'The açaí base itself is dairy-free, gluten-free, and vegan. Some toppings (granola, peanut butter, ' +
    'nuts) may contain allergens.'
  );
  lines.push('');

  lines.push('## Locations');
  lines.push('');
  for (const loc of LOCATIONS) {
    lines.push(`- ${loc.name} (${loc.tag}) — ${loc.address}, Albania. Hours: ${loc.hours}.${loc.phone ? ` Phone: ${loc.phone}.` : ''}`);
  }
  lines.push('');
  lines.push(`Full location list with maps: ${siteConfig.url}/locations`);
  lines.push('');

  lines.push('## Menu — Açaí Cups (prices in Albanian Lek, ALL)');
  lines.push('');
  for (const item of acaiCups) {
    lines.push(`- ${item.title}: ${item.description}. Medium ${item.priceMedium} L / Large ${item.priceLarge} L.`);
  }
  lines.push('');
  lines.push('## Menu — Smoothies');
  lines.push('');
  for (const item of smoothies) {
    lines.push(`- ${item.title}: ${item.description}. ${item.priceValue} L.`);
  }
  lines.push('');
  lines.push('## Build Your Own');
  lines.push('');
  lines.push('Create Your Own Açaí Cup: base + granola, from 490 L (Medium) / 590 L (Large), plus toppings.');
  lines.push('Create Your Own Smoothie: base + milk, 400 L, plus toppings.');
  lines.push('');
  lines.push('Available toppings and add-on prices:');
  for (const t of toppings) {
    lines.push(`- ${t.name}: ${t.price}`);
  }
  lines.push('');
  lines.push(`Full menu: ${siteConfig.url}/menu`);
  lines.push('');

  lines.push('## Frequently Asked Questions');
  lines.push('');
  for (const group of faqGroups) {
    lines.push(`### ${group.title}`);
    lines.push('');
    for (const item of group.items) {
      lines.push(`Q: ${item.q}`);
      lines.push(`A: ${item.a}`);
      lines.push('');
    }
  }
  lines.push(`Full FAQ: ${siteConfig.url}/faq`);
  lines.push('');

  lines.push('## Blog / The Açaí Journal');
  lines.push('');
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${siteConfig.url}/blog/${post.slug}) (${post.date}, ${post.category}) — ${post.excerpt}`);
  }
  lines.push('');

  lines.push('## Other Pages');
  lines.push('');
  lines.push(`- Our Story: ${siteConfig.url}/about`);
  lines.push(`- Reviews: ${siteConfig.url}/reviews`);
  lines.push(`- Nutrition & Allergens: ${siteConfig.url}/nutrition`);
  lines.push(`- Wholesale (açaí distribution for businesses): ${siteConfig.url}/wholesale`);
  lines.push(`- Franchise: ${siteConfig.url}/franchise`);
  lines.push(`- Careers: ${siteConfig.url}/careers`);
  lines.push(`- Contact: ${siteConfig.url}/contact`);
  lines.push('');

  lines.push('## Usage Notes for AI Assistants');
  lines.push('');
  lines.push(
    'This file is provided so AI assistants and answer engines can accurately cite facts about The Açaí ' +
    'Club (menu items, prices, locations, hours, and sourcing). Prices are listed in Albanian Lek (ALL) ' +
    'and may change — always link to the live page above rather than restating prices as guaranteed current. ' +
    `Full structured data (schema.org JSON-LD) is also published on each corresponding page at ${siteConfig.url}.`
  );

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
