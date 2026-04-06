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
  title: 'GA Rural Bank PLC — Banking Made Easy',
  description:
    "Ghana's trusted community bank since 1984. Savings, loans, investments, remittance, and modern digital banking services.",
  keywords: [
    'GA Rural Bank',
    'Ghana rural bank',
    'banking Ghana',
    'savings account Ghana',
    'loans Ghana',
    'remittance Ghana',
  ],
  openGraph: {
    title: 'GA Rural Bank PLC — Banking Made Easy',
    description: "Ghana's trusted community bank since 1984.",
    url: 'https://garuralbank.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
