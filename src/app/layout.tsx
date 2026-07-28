import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LocalBusinessJsonLd from '@/components/LocalBusinessJsonLd'
import { siteConfig } from '@/lib/seo'

const googleSans = localFont({
  src: [
    {
      path: './fonts/GoogleSans-VariableFont_GRAD,opsz,wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: './fonts/GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-google-sans',
  display: 'swap',
  preload: false,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Albania's Biggest Açaí Store, Tirana`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'açaí Tirana',
    'açaí Albania',
    'açaí bowls Tirana',
    'best açaí Albania',
    'biggest açaí store Albania',
    'authentic açaí Tirana',
    'açaí smoothie Tirana',
    'Brazilian açaí Albania',
    'açaí distributor Albania',
    'The Açaí Club',
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  generator: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  category: 'food & drink',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['sq_AL'],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Albania's Biggest Açaí Store, Tirana`,
    description: siteConfig.description,
    // Image is generated automatically per-route via opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Albania's Biggest Açaí Store, Tirana`,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.ico?v=big',
    shortcut: '/favicon.ico?v=big',
    apple: '/favicon.ico?v=big',
  },
  other: {
    'geo.region': 'AL-11',
    'geo.placename': 'Tirana',
    'geo.position': '41.3275;19.8187',
    ICBM: '41.3275, 19.8187',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={googleSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
        <LocalBusinessJsonLd />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
