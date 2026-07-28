import { Metadata } from 'next';
import MenuJsonLd from '@/components/MenuJsonLd';

export const metadata: Metadata = {
  title: 'Menu',
  description: "Explore Albania's biggest açaí menu: premium açaí bowls and tropical smoothies made with authentic Brazilian açaí, fresh fruit, and house-made granola in Tirana.",
  alternates: { canonical: '/menu' },
  openGraph: {
    title: 'Menu | The Açaí Club',
    description: "Explore Albania's biggest açaí menu — premium açaí bowls and tropical smoothies in Tirana.",
    url: '/menu',
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuJsonLd />
      {children}
    </>
  );
}
