import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://garuralbank.com'),
  title: {
    default: 'GA Rural Bank PLC — Community Banking Since 1984',
    template: '%s — GA Rural Bank PLC',
  },
  description:
    "Ghana's trusted community bank since 1984. Savings accounts, loans, Mobile Banking via *365*212#, E-Zwich, and remittance services across Greater Accra and Kasoa.",
  keywords: [
    'GA Rural Bank',
    'Garural Bank',
    'Ghana rural bank',
    'community bank Ghana',
    'savings account Ghana',
    'loans Ghana',
    'USSD mobile banking Ghana',
    '*365*212#',
    'Amasaman bank',
    'remittance Ghana',
    'E-Zwich Ghana',
    'BoG licensed bank Ghana',
  ],
  authors: [{ name: 'GA Rural Bank PLC', url: 'https://garuralbank.com' }],
  creator: 'GA Rural Bank PLC',
  publisher: 'GA Rural Bank PLC',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'GA Rural Bank PLC — Community Banking Since 1984',
    description:
      "Ghana's trusted community bank. Savings, loans, and Mobile Banking via *365*212# — no app, no internet needed.",
    url: 'https://garuralbank.com',
    siteName: 'GA Rural Bank PLC',
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA Rural Bank PLC — Community Banking Since 1984',
    description: 'Trusted community banking since 1984. Dial *365*212# for Mobile Banking on any phone.',
  },
  alternates: {
    canonical: 'https://garuralbank.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BankOrCreditUnion',
      name: 'GA Rural Bank PLC',
      alternateName: 'Garural Bank',
      url: 'https://garuralbank.com',
      logo: 'https://garuralbank.com/images/logo.png',
      description:
        "Ghana's trusted community bank since 1984 — savings, loans, Mobile Banking (USSD *365*212#), E-Zwich, and remittance.",
      foundingDate: '1984',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'P.O. Box AM 70',
        addressLocality: 'Amasaman',
        addressRegion: 'Greater Accra',
        addressCountry: 'GH',
      },
      telephone: '+2330302900120',
      email: 'info@garuralbank.com',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Banking Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Savings Account' } },
          { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Current Account' } },
          { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'eSusu Account' } },
          { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Personal Loan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Business Loan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'LoanOrCredit', name: 'Micro Loan' } },
        ],
      },
      sameAs: [],
    };

  return (
    <html
      lang="en"
        dir="ltr"
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
          {/* Skip to main content — accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-xl focus:bg-[#ffd400] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-[#103d1e]"
          >
            Skip to main content
          </a>
          <div id="main-content">
        {children}
          </div>
      </body>
    </html>
  );
}
