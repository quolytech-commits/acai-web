import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with The Açaí Club in Tirana, Albania. Reach out for general questions, franchise, wholesale, or careers inquiries — we'd love to connect.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | The Açaí Club',
    description: 'Get in touch with The Açaí Club, Tirana, Albania.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
