import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: "How The Açaí Club became Albania's biggest açaí store. From the Amazon rainforest to our flagship in Tirana, discover the rhythm and craft behind authentic Brazilian açaí.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Our Story | The Açaí Club',
    description: "How The Açaí Club became Albania's biggest açaí store, sourcing authentic açaí direct from Brazil.",
    url: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
