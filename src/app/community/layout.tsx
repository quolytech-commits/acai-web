import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Gallery',
  description: "See real açaí bowls and moments shared by Tirana's açaí community. Follow @theacaiclub.al and tag us to be featured.",
  alternates: { canonical: '/community' },
  openGraph: {
    title: 'Community Gallery | The Açaí Club',
    description: "Real açaí bowls and moments shared by Tirana's açaí community.",
    url: '/community',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
