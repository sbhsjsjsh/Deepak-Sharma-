import type {Metadata} from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deepak Sharma | Real Estate Consultant in Noida & Yamuna Expressway',
  description:
    'Deepak Sharma provides residential and commercial real estate services in Noida and Yamuna Expressway for buying, selling and renting properties.',
  keywords: [
    'Real estate consultant Noida',
    'Property dealer Noida',
    'Properties in Noida',
    'Yamuna Expressway property',
    'Buy property in Noida',
    'Sell property in Noida',
    'Rent property in Noida',
    'Residential property Noida',
    'Commercial property Noida',
    'Noida real estate',
    'Yamuna Expressway plots',
    'Deepak Sharma real estate',
  ],
  authors: [{name: 'Deepak Sharma'}],
  creator: 'Deepak Sharma',
  openGraph: {
    title: 'Deepak Sharma | Real Estate Consultant in Noida & Yamuna Expressway',
    description:
      'Deepak Sharma provides residential and commercial real estate services in Noida and Yamuna Expressway for buying, selling and renting properties.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Deepak Sharma Real Estate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak Sharma | Real Estate Consultant in Noida & Yamuna Expressway',
    description:
      'Deepak Sharma provides residential and commercial real estate services in Noida and Yamuna Expressway for buying, selling and renting properties.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Deepak Sharma - Real Estate Consultant',
  telephone: '+919953245542',
  description:
    'Deepak Sharma provides residential and commercial real estate services in Noida and Yamuna Expressway for buying, selling and renting properties.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Noida',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Greater Noida',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Yamuna Expressway',
    },
  ],
  knowsAbout: [
    'Residential Properties',
    'Commercial Properties',
    'Plots in Yamuna Expressway',
    'Flats & Apartments in Noida',
    'Buying, Selling, Renting',
  ],
  priceRange: '₹₹ - ₹₹₹₹',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
