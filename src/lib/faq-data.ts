export type Faq = {
  q: string;
  a: string;
};

export type FaqGroup = {
  title: string;
  items: Faq[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: 'What Açaí Really Is',
    items: [
      {
        q: 'What is açaí, exactly?',
        a: 'Açaí (pronounced ah-sah-EE) is a small, dark purple berry that grows in clusters high up on açaí palm trees native to the Amazon rainforest in northern Brazil. It has been a daily staple food for Indigenous and riverside communities along the Amazon for centuries — long before it became a global "superfood" trend. On its own, the berry is not sweet at all; it has an earthy, slightly tart, almost cacao-like flavor.',
      },
      {
        q: 'Is açaí a superfood, or is that just marketing?',
        a: 'The berry itself genuinely earns the reputation: açaí is naturally rich in antioxidants, healthy fats, fiber, and anthocyanins (the compound responsible for its deep purple color). That said, the term "superfood" gets attached to a lot of products that are mostly sugar and syrup with barely any real açaí in them. We think it is worth knowing the difference — real açaí pulp is a genuinely nutrient-dense food, but a bowl loaded with sweeteners and low-quality fillers is not the same thing.',
      },
      {
        q: "What's actually in one of our açaí bowls?",
        a: "Every bowl starts with our blended açaí base — pure açaí pulp, blended cold with no added syrups or artificial sweeteners — topped with fresh fruit, house-made granola, and toppings prepared in-house daily. We do not use pre-mixed powders or imitation blends. If it's purple, it's because it's açaí, not food coloring.",
      },
      {
        q: 'Is açaí naturally sweet?',
        a: "No — this surprises a lot of first-time customers. Raw açaí pulp is closer to unsweetened cacao in flavor: rich, a little bitter, a little tart. Any sweetness in your bowl comes from the fresh fruit and toppings we add, not from the açaí itself. Shops that serve a very sweet, dessert-like base are usually relying on added sugar or a heavily processed blend, not just the berry.",
      },
      {
        q: 'What are the health benefits people talk about?',
        a: 'Açaí is naturally high in antioxidants and anthocyanins, contains heart-healthy monounsaturated fats, and is a source of dietary fiber. It is not a miracle cure, and we will never claim it is — but as part of a balanced diet, it is a genuinely nutritious, energy-dense fruit, which is exactly why it has been a Amazonian dietary staple for generations.',
      },
      {
        q: 'Is açaí the same as other purple berries, like blueberries?',
        a: 'No — açaí has a distinct nutritional profile. Compared to most common berries, açaí is unusually high in healthy fats (closer to an olive or avocado in that respect) alongside its antioxidant content, which is part of why it has a smooth, creamy texture once blended rather than a watery, juice-like one.',
      },
    ],
  },
  {
    title: 'Why You Should Eat Açaí',
    items: [
      {
        q: 'Why should I actually eat açaí?',
        a: 'Because it gives you real, sustained energy without the crash you get from sugary snacks or caffeine alone. The combination of healthy fats, fiber, and antioxidants makes it a nutrient-dense way to start your day, refuel after a workout, or curb a craving without reaching for something processed.',
      },
      {
        q: 'Is açaí good for energy and focus?',
        a: 'Many customers eat açaí specifically as a mid-morning or pre-workout pick-me-up. The natural fats and fiber slow down digestion, which means the energy from the fruit and toppings releases more gradually than a sugar-only snack — no spike, no crash.',
      },
      {
        q: 'Can açaí help with skin and aging?',
        a: 'Anthocyanins, the antioxidant compounds that give açaí its deep purple color, help fight oxidative stress in the body — the same process linked to visible skin aging. That is part of why açaí has a long-standing reputation as a beauty and wellness food, alongside its nutritional value.',
      },
      {
        q: 'Is açaí good for your heart?',
        a: 'Açaí is naturally rich in monounsaturated fats — the same heart-healthy fat family found in olive oil and avocado — plus antioxidants that support healthy cholesterol levels as part of an overall balanced diet.',
      },
      {
        q: 'Is açaí a good post-workout food?',
        a: 'Yes. A bowl topped with fresh fruit and granola gives you a mix of natural carbohydrates to replenish energy, fiber to keep you full, and antioxidants to support recovery — making it a popular, easy alternative to a protein shake or bar.',
      },
      {
        q: 'How often can I eat açaí?',
        a: 'Açaí is a whole food, not a supplement, so there is no strict limit — many of our regulars have a bowl several times a week as part of their normal routine. As with any food, balance and portion (especially with added toppings) is what matters most.',
      },
      {
        q: 'Is açaí good for weight management?',
        a: 'A bowl built with real açaí, fresh fruit, and modest toppings is filling and nutrient-dense, which can help curb overeating later in the day. The fiber and healthy fats promote satiety — just be mindful that heavy add-ons like extra syrup or candy toppings can turn a healthy bowl into a dessert.',
      },
    ],
  },
  {
    title: 'Our Sourcing — We Are Direct Açaí Distributors',
    items: [
      {
        q: 'Where does your açaí actually come from?',
        a: 'We source and import our açaí pulp directly from producers in the Amazon region of Brazil, the same region the fruit has always come from. We are not buying a generic, relabeled product from a broker — we work as distributors of authentic Brazilian açaí, which is what lets us control quality from the source all the way to your bowl.',
      },
      {
        q: 'So are you a smoothie shop, or a distributor?',
        a: "Both, and that is intentional. Açaí Club operates as a distributor of authentic açaí pulp, which we then prepare fresh in our stores. Because we handle the supply chain ourselves rather than buying pre-blended product from a third party, we can guarantee what actually goes into every bowl — and keep it consistent across every location.",
      },
      {
        q: 'How is your açaí processed and kept fresh?',
        a: 'Açaí berries spoil within about 24 hours of harvest, which is why the fruit is never shipped fresh — it is pulped and flash-frozen near the point of harvest in Brazil to lock in flavor and nutrients, then shipped frozen and stored at controlled temperatures until it is blended to order in our stores. This is the same method used for authentic açaí worldwide; anything shelf-stable or powdered has been processed in a way that strips out most of what makes real açaí valuable.',
      },
      {
        q: 'Do you supply other businesses?',
        a: 'Yes — as part of our distribution operations, we supply açaí pulp to other food service partners in addition to running our own stores. If you are a business interested in sourcing authentic açaí, reach out to us at theacaiclub.info@gmail.com and our team will follow up.',
      },
    ],
  },
  {
    title: 'Pricing — Why Our Bowls Cost More',
    items: [
      {
        q: 'Why are your bowls more expensive than other smoothie or juice shops?',
        a: "We're upfront about this: we are a premium product, and we price accordingly. Authentic açaí is imported frozen from Brazil, which involves real cold-chain logistics, import costs, and a product that spoils fast and cannot be substituted with a cheap alternative. Combine that with fresh fruit, house-made granola, and toppings prepared daily in small batches, and the cost of doing it properly is simply higher than a shop using powdered mixes or heavily sweetened bases.",
      },
      {
        q: 'What am I actually paying for?',
        a: 'You are paying for the real thing: authentic imported açaí pulp rather than a diluted or powdered substitute, no added sugar hidden in the base, fresh produce sourced and prepped daily, and a bowl made to order rather than pre-mixed in bulk. We would rather be honest that we sit at a premium price point than cut corners to compete on price with shops using cheaper, lower-quality açaí.',
      },
      {
        q: 'Is the quality difference really noticeable?',
        a: 'Yes — it shows up in the color (a deep, natural purple rather than an artificially bright one), the texture (thick and smooth, not icy or watery), and the flavor (rich and earthy under the toppings, not just sugar). Once you have had açaí made from real, properly sourced pulp, the difference from a powdered or heavily processed version is easy to taste.',
      },
    ],
  },
  {
    title: 'Ordering & Visiting',
    items: [
      {
        q: 'Can I customize my bowl?',
        a: 'Absolutely. Every bowl on our menu can be adjusted — swap toppings, add extra fruit, or build your own from scratch. Head to our Menu page to see the full list of bases, fruits, and toppings available.',
      },
      {
        q: 'Do you offer delivery or is it pickup only?',
        a: 'You can order ahead for pickup or have your order delivered, depending on your location. Check our Locations page for hours and delivery availability near you.',
      },
      {
        q: 'Are your bowls suitable for common allergies or dietary needs?',
        a: 'Our açaí base itself is dairy-free, gluten-free, and vegan. Some toppings (like granola or peanut butter) may contain allergens such as nuts or gluten, so let our team know about any allergies when ordering and we will help you build a bowl that works for you.',
      },
      {
        q: 'What is the best time of day to eat an açaí bowl?',
        a: 'Most of our customers order in the morning or right after a workout, since the natural carbohydrates and fats make it a great way to refuel. That said, it works just as well as a light lunch or an afternoon reset — there is no wrong time for açaí.',
      },
      {
        q: 'Do you have loyalty rewards for regulars?',
        a: 'Yes — join the Açaí Club rewards program to earn points on every order that can be redeemed toward future bowls. Ask a team member in-store or check your account to enroll.',
      },
    ],
  },
];
