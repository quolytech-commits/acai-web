import { Metadata } from 'next';
import LocationsJsonLd from '@/components/LocationsJsonLd';

export const metadata: Metadata = {
  title: 'Visit Us in Tirana',
  description: "Find The Açaí Club's flagship store on Rruga Lidhja e Prizrenit, Tirana, Albania. Open daily 10:00–23:00. Get directions and visit Albania's biggest açaí store.",
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Visit Us in Tirana | The Açaí Club',
    description: "Find The Açaí Club's flagship store in Tirana, Albania. Open daily 10:00–23:00.",
    url: '/locations',
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocationsJsonLd />
      {children}
    </>
  );
}
