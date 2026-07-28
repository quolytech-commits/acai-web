import type { Metadata } from 'next';
import '../nutrition.css';

export const metadata: Metadata = {
  title: 'Nutrition & Allergens',
  description: 'Calories, sugar, fat, fiber, and allergen information for every açaí bowl and smoothie on The Açaí Club menu in Tirana, Albania.',
  alternates: { canonical: '/nutrition' },
  openGraph: {
    title: 'Nutrition & Allergens | The Açaí Club',
    description: 'Calories, sugar, fat, fiber, and allergen information for every bowl and smoothie on our menu.',
    url: '/nutrition',
  },
};

type NutritionRow = {
  name: string;
  size: string;
  calories: string;
  sugar: string;
  fat: string;
  fiber: string;
  allergens: string;
};

const bowlNutrition: NutritionRow[] = [
  { name: 'Trancoso', size: '16 oz', calories: '480 kcal', sugar: '32g', fat: '18g', fiber: '9g', allergens: 'Dairy' },
  { name: 'Búzios', size: '16 oz', calories: '540 kcal', sugar: '38g', fat: '20g', fiber: '8g', allergens: 'Dairy, Tree Nuts' },
  { name: 'Ipanema', size: '16 oz', calories: '510 kcal', sugar: '29g', fat: '22g', fiber: '10g', allergens: 'Tree Nuts' },
  { name: 'Recife', size: '16 oz', calories: '440 kcal', sugar: '30g', fat: '14g', fiber: '9g', allergens: 'None' },
  { name: 'Brasília', size: '16 oz', calories: '520 kcal', sugar: '27g', fat: '24g', fiber: '11g', allergens: 'Peanuts' },
  { name: 'Make Your Own', size: '16 oz base', calories: '320 kcal (base)', sugar: '14g (base)', fat: '13g (base)', fiber: '8g (base)', allergens: 'Varies by topping' },
];

const smoothieNutrition: NutritionRow[] = [
  { name: 'Tiara', size: '12 oz', calories: '310 kcal', sugar: '24g', fat: '9g', fiber: '5g', allergens: 'Dairy' },
  { name: 'Fortaleza', size: '12 oz', calories: '290 kcal', sugar: '26g', fat: '8g', fiber: '5g', allergens: 'Dairy' },
  { name: 'The Açaí Club', size: '12 oz', calories: '350 kcal', sugar: '31g', fat: '9g', fiber: '6g', allergens: 'Dairy' },
  { name: 'Create Your Own...', size: '12 oz base', calories: '260 kcal (base)', sugar: '18g (base)', fat: '7g (base)', fiber: '5g (base)', allergens: 'Varies by topping' },
];

function NutritionTable({ title, rows }: { title: string; rows: NutritionRow[] }) {
  return (
    <div className="nutrition-table-wrap">
      <h2 style={{ color: 'var(--color-linen)', fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        {title}
      </h2>
      <table className="nutrition-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Calories</th>
            <th>Sugar</th>
            <th>Fat</th>
            <th>Fiber</th>
            <th>Allergens</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="item-name">{row.name}</td>
              <td>{row.size}</td>
              <td>{row.calories}</td>
              <td>{row.sugar}</td>
              <td>{row.fat}</td>
              <td>{row.fiber}</td>
              <td>{row.allergens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NutritionPage() {
  return (
    <main className="nutrition-page">
      <div className="container">
        <div className="nutrition-hero">
          <h1>Nutrition &amp; Allergens</h1>
          <p>
            Every bowl and smoothie is made fresh to order, so exact values can vary slightly based on toppings and
            portioning. The figures below reflect our standard recipes as listed on the menu.
          </p>
        </div>

        <NutritionTable title="Açaí Cups" rows={bowlNutrition} />
        <NutritionTable title="Smoothies" rows={smoothieNutrition} />

        <p className="nutrition-note">
          Our açaí base itself is dairy-free, gluten-free, and vegan. Values above include standard toppings as
          listed on the menu — building your own bowl or swapping toppings will change these numbers. If you have a
          food allergy, please tell our team when ordering so we can help you build a bowl that&apos;s safe for you.
        </p>

        <div className="allergen-legend">
          <span className="allergen-pill">🥛 Dairy</span>
          <span className="allergen-pill">🥜 Peanuts</span>
          <span className="allergen-pill">🌰 Tree Nuts</span>
          <span className="allergen-pill">🌾 Gluten (granola only)</span>
        </div>
      </div>
    </main>
  );
}
