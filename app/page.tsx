'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationsGrid from '@/components/DestinationsGrid';
import ShipExperienceBento from '@/components/ShipExperienceBento';
import SuitesPricing from '@/components/SuitesPricing';
import TrustSafetySection from '@/components/TrustSafetySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SovereignSocietyModal from '@/components/SovereignSocietyModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState<{ name: string; price: string } | undefined>(undefined);

  const handleOpenReserve = (suiteName?: string, price?: string) => {
    if (suiteName && price) {
      setSelectedSuite({ name: suiteName, price });
    } else {
      setSelectedSuite(undefined);
    }
    setReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setReserveModalOpen(false);
    setSelectedSuite(undefined);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* Header Bar with Light/Dark Mode Switcher */}
      <Header onReserveClick={() => handleOpenReserve()} />

      {/* Hero Section with Floating Search */}
      <HeroSection onSearchSubmit={() => handleOpenReserve()} />

      {/* Destinations & Archipelagos Grid */}
      <DestinationsGrid onBookVoyage={(item) => handleOpenReserve(item.title, item.price)} />

      {/* Flagship Bento Experience Showcase */}
      <ShipExperienceBento />

      {/* Bespoke Suites & Pricing */}
      <SuitesPricing onReserveSuite={(name, price) => handleOpenReserve(name, price)} />

      {/* Trust & Safety Section */}
      <TrustSafetySection />

      {/* Press Acclaim & Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Reserve & Concierge Modal */}
      <SovereignSocietyModal
        isOpen={reserveModalOpen}
        onClose={handleCloseReserve}
        initialSuite={selectedSuite?.name}
        initialPrice={selectedSuite?.price}
      />

    </main>
  );
}
