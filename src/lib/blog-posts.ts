export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-acai',
    title: 'What Açaí Actually Is (And Why It Isn’t Naturally Sweet)',
    excerpt: 'The açaí berry has been an Amazonian staple for centuries — long before it became a global trend. Here is what it really is.',
    category: 'Origins',
    readTime: '4 min read',
    date: 'June 2, 2026',
    body: [
      'Açaí (pronounced ah-sah-EE) is a small, dark purple berry that grows in clusters high up on açaí palm trees native to the Amazon rainforest in northern Brazil. For Indigenous and riverside communities along the Amazon, it has been a daily staple food for centuries — closer to rice or beans in their diet than a dessert.',
      'On its own, the berry is not sweet at all. It has an earthy, slightly tart, almost cacao-like flavor. Any sweetness you taste in a bowl comes from the fruit and toppings added on top, not from the açaí itself. That surprises a lot of first-time customers who expect something closer to a fruit punch.',
      'The deep purple color comes from anthocyanins, the same class of antioxidant compounds found in blueberries and red grapes — just in much higher concentration. Combined with its naturally high fat content, açaí has a rich, creamy texture once blended that most other berries simply cannot replicate.',
      'Understanding what açaí actually is — a whole, minimally processed fruit, not a syrup or powder — is the first step to understanding why sourcing and preparation matter so much to how a bowl actually tastes.',
    ],
  },
  {
    slug: 'why-your-bowl-costs-more',
    title: 'Why an Authentic Açaí Bowl Costs More Than a Smoothie',
    excerpt: 'We get asked this constantly. Here is the honest breakdown of what goes into an authentic, imported açaí bowl.',
    category: 'Sourcing',
    readTime: '5 min read',
    date: 'June 18, 2026',
    body: [
      'Açaí berries spoil within about 24 hours of harvest. That single fact drives almost everything about why authentic açaí costs more than a typical smoothie ingredient.',
      'Because the fruit cannot be shipped fresh, it has to be pulped and flash-frozen near the point of harvest in Brazil, then shipped frozen and kept in cold-chain storage all the way to our stores. That is real logistics cost, not a markup for the sake of it.',
      'Compare that to a powdered açaí mix or a heavily sweetened "açaí-flavored" blend — both are cheaper to produce and ship precisely because they cut out the parts of the process that preserve the fruit’s actual nutritional and flavor profile.',
      'On top of the base itself, every bowl is built with fresh fruit and house-made granola prepared daily in small batches, not bulk-prepped days in advance. We would rather be upfront that we sit at a premium price point than cut corners to compete on price with shops using cheaper, lower-quality açaí.',
    ],
  },
  {
    slug: 'from-amazon-to-your-bowl',
    title: 'From the Amazon to Your Bowl: How We Source as Distributors',
    excerpt: 'We are not just a smoothie shop — we operate as direct distributors of authentic Brazilian açaí. Here is what that means.',
    category: 'Sourcing',
    readTime: '4 min read',
    date: 'July 5, 2026',
    body: [
      'A lot of açaí sold outside Brazil passes through several middlemen before it reaches a store — often ending up relabeled, diluted, or blended with fillers along the way. We built our supply chain to avoid that.',
      'We work as distributors of açaí pulp, sourcing directly from producers in the Amazon region where the fruit has always come from. That means we control quality from the point of harvest all the way to the bowl in your hands, rather than buying a generic, pre-blended product from a broker.',
      'Because we handle distribution ourselves, we also supply açaí pulp to other food service partners in addition to running our own stores — if you are a business interested in sourcing authentic açaí, our wholesale page has details.',
      'This distributor model is also what lets us guarantee consistency across every location: every store is working from the same authentic source, not whatever a regional supplier happened to have in stock.',
    ],
  },
  {
    slug: 'health-benefits-of-acai',
    title: 'The Real Health Benefits of Açaí (No Miracle Claims)',
    excerpt: 'Açaí has a genuine nutritional case behind it. Here is what the fruit actually offers, without the hype.',
    category: 'Health',
    readTime: '5 min read',
    date: 'July 14, 2026',
    body: [
      'Açaí is not a miracle cure, and we will never claim it is. But as a whole, minimally processed fruit, it does have a genuinely strong nutritional profile worth understanding.',
      'It is naturally rich in antioxidants and anthocyanins — the same compounds linked to fighting oxidative stress in the body, which is part of why açaí has a long-standing reputation as a skin and wellness food.',
      'Unlike most berries, açaí is unusually high in healthy monounsaturated fats, closer to an olive or avocado in that respect. Combined with its fiber content, that is what gives açaí its smooth, creamy texture and helps it release energy gradually rather than causing a sugar spike and crash.',
      'That combination of fiber, healthy fat, and antioxidants is why so many customers reach for açaí specifically as a pre- or post-workout food, or as a filling, energizing alternative to a typical sugary snack.',
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
