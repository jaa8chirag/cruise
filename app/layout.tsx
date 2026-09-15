import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: 'Oshin Shipping — Luxury Ocean Voyages & Bespoke Cruises',
  description: 'Experience the freedom of the open ocean with Oshin Shipping. Where every nautical mile is an extraordinary story of elegance and bespoke hospitality.',
  keywords: ['luxury cruise', 'Oshin Shipping', 'ocean voyages', 'caribbean cruise', 'bespoke cruise', 'luxury staterooms'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-ocean-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
