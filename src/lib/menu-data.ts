export type MenuCup = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
  priceMedium: number;
  priceLarge: number;
};

export type MenuSmoothie = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
  priceValue: number;
};

export type Topping = {
  name: string;
  price: string;
  priceValue: number;
};

export const acaiCups: MenuCup[] = [
  {
    id: 'brasilia',
    title: 'BRASÍLIA',
    image: '/menu1/acai cup 1.png',
    description: 'Base açaí, granola, peanut butter, banana',
    price: 'M 690 L / L 790 L',
    priceMedium: 690,
    priceLarge: 790,
  },
  {
    id: 'trancoso',
    title: 'TRANCOSO',
    image: '/menu1/acai cup 2.png',
    description: 'Base açaí, powder milk, banana, condensed milk',
    price: 'M 790 L / L 890 L',
    priceMedium: 790,
    priceLarge: 890,
  },
  {
    id: 'buzios',
    title: 'BÚZIOS',
    image: '/menu1/acai cup 4.png',
    description: 'Base açaí, granola, nutella, strawberry',
    price: 'M 790 L / L 890 L',
    priceMedium: 790,
    priceLarge: 890,
  },
  {
    id: 'recife',
    title: 'RECIFE',
    image: '/menu1/acai cup 3.png',
    description: 'Base açaí, granola, condensed milk, mango',
    price: 'M 790 L / L 890 L',
    priceMedium: 790,
    priceLarge: 890,
  },
  {
    id: 'ipanema',
    title: 'IPANEMA',
    image: '/menu1/acai cup 5.png',
    description: 'Base açaí, pistachio cream, blueberries, granola',
    price: 'M 820 L / L 920 L',
    priceMedium: 820,
    priceLarge: 920,
  },
  {
    id: 'amazon',
    title: 'AMAZON',
    image: '/menu1/acai cup amazon.png',
    description: 'Base açaí, dulce de leche, coconut, lotus, blueberries',
    price: 'M 890 L / L 990 L',
    priceMedium: 890,
    priceLarge: 990,
  },
];

export const smoothies: MenuSmoothie[] = [
  {
    id: 'tiara',
    title: 'TIARA',
    image: '/menu1/smoothie 1.png',
    description: 'Açaí + milk + banana',
    price: '500 L',
    priceValue: 500,
  },
  {
    id: 'fortaleza',
    title: 'FORTALEZA',
    image: '/menu1/smoothie 2.png',
    description: 'Açaí + strawberry + milk',
    price: '500 L',
    priceValue: 500,
  },
  {
    id: 'the-acai-club',
    title: 'THE AÇAÍ CLUB',
    image: '/menu1/smoothie 1.png',
    description: 'Açaí + banana + panda + strawberry + milk',
    price: '750 L',
    priceValue: 750,
  },
];

export const toppings: Topping[] = [
  { name: 'Forest Fruit Syrup', price: '25 L', priceValue: 25 },
  { name: 'Caramel Syrup', price: '25 L', priceValue: 25 },
  { name: 'Chocolate Syrup', price: '25 L', priceValue: 25 },
  { name: 'Honey', price: '25 L', priceValue: 25 },
  { name: 'Powdered Milk', price: '50 L', priceValue: 50 },
  { name: 'Caramel', price: '50 L', priceValue: 50 },
  { name: 'Chocolate Chips', price: '50 L', priceValue: 50 },
  { name: 'Black Chocolate', price: '50 L', priceValue: 50 },
  { name: 'White Chocolate', price: '50 L', priceValue: 50 },
  { name: 'Cherry', price: '50 L', priceValue: 50 },
  { name: 'Protein Cup', price: '50 L', priceValue: 50 },
  { name: 'Coconut Flakes', price: '50 L', priceValue: 50 },
  { name: 'Banana', price: '50 L', priceValue: 50 },
  { name: 'Granola', price: '50 L', priceValue: 50 },
  { name: 'Nutella', price: '75 L', priceValue: 75 },
  { name: 'Blanched Almonds', price: '80 L', priceValue: 80 },
  { name: 'Crushed Lotus', price: '100 L', priceValue: 100 },
  { name: 'Peanut Butter', price: '100 L', priceValue: 100 },
  { name: 'Condensed Milk', price: '100 L', priceValue: 100 },
  { name: 'Blueberries', price: '100 L', priceValue: 100 },
  { name: 'Pistachio Cream', price: '100 L', priceValue: 100 },
  { name: 'Lotus Cream', price: '100 L', priceValue: 100 },
  { name: 'Strawberries', price: '120 L', priceValue: 120 },
  { name: 'Crushed Pistachio', price: '150 L', priceValue: 150 },
  { name: 'Mango', price: '150 L', priceValue: 150 },
  { name: 'Dulce de Leche', price: '200 L', priceValue: 200 },
];
