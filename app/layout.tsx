import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: 'Oshin Shipping | Ultra-Luxury Mega Yacht & Cruise Expeditions',
  description: 'Experience bespoke luxury ocean voyages across Lakshadweep, Goa, Dubai, and the Mediterranean with Michelin dining, private suites, and dedicated butler service.',
  keywords: ['luxury cruise', 'superyacht charter', 'Oshin Shipping', 'Lakshadweep cruise', 'ocean voyages', 'all-inclusive luxury cruise'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#0c141e] text-slate-900 dark:text-slate-100 selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
