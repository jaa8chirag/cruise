'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TourItinerarySection from '@/components/TourItinerarySection';
import PopularDestinationCarousel from '@/components/PopularDestinationCarousel';
import InteractiveHotspotsSection from '@/components/InteractiveHotspotsSection';
import SuitesPricing from '@/components/SuitesPricing';
import InsideGallerySection from '@/components/InsideGallerySection';
import PassengerDecksAmenities from '@/components/PassengerDecksAmenities';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksTimeline from '@/components/HowItWorksTimeline';
import CruisersGuideInsights from '@/components/CruisersGuideInsights';
import Footer from '@/components/Footer';
import SovereignSocietyModal from '@/components/SovereignSocietyModal';
import ItineraryModal from '@/components/ItineraryModal';
import { VOYAGES_DATA } from '@/components/DestinationsGrid';

export default function Home() {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState<{ name: string; price: string } | undefined>(undefined);
  const [activeVoyageModal, setActiveVoyageModal] = useState<any>(null);

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

  const handleOpenVoyageModal = (destinationTitle?: string, price?: string) => {
    const matchedVoyage = VOYAGES_DATA.find((v) => 
      v.title.toLowerCase().includes(destinationTitle?.toLowerCase() || '') ||
      destinationTitle?.toLowerCase().includes(v.title.toLowerCase() || '')
    ) || VOYAGES_DATA[0];

    setActiveVoyageModal(matchedVoyage);
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-ocean-500 selection:text-white">
      
      {/* Floating Glass Navigation */}
      <Header onBookClick={() => handleOpenReserve()} />

      {/* Hero Section with Kinetic Watermark Marquee & Ocean Stats */}
      <HeroSection 
        onExploreRoute={() => {
          const el = document.getElementById('itinerary');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onViewSuites={() => {
          const el = document.getElementById('staterooms');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Why Choose Us / Why Sail With Us */}
      <WhyChooseUs 
        onLearnMore={() => {
          const el = document.getElementById('itinerary');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Comprehensive Tour Route & Full 7-Day Itinerary */}
      <TourItinerarySection 
        onSelectCabin={() => {
          const el = document.getElementById('staterooms');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Popular Destination Showcase Carousel (01/02 Layout, $320 Pricing) */}
      <PopularDestinationCarousel 
        onBookNow={(title, price) => handleOpenReserve(title, price)}
      />

      {/* Interactive Cruise Liner Hotspots Experience */}
      <InteractiveHotspotsSection />

      {/* Luxury Cabins & Staterooms Accommodations */}
      <SuitesPricing 
        onReserveSuite={(name, price) => handleOpenReserve(name, price)}
      />

      {/* Inside the Cozy of Luxury Cruise Gallery */}
      <InsideGallerySection />

      {/* 14 Passenger Decks World-Class Amenities Grid */}
      <PassengerDecksAmenities />

      {/* Testimonials & Trust Metrics */}
      <TestimonialsSection />

      {/* How It Works - Seamless From Start to Sea */}
      <HowItWorksTimeline 
        onBookNow={() => handleOpenReserve()}
      />

      {/* The Cruiser's Guide & Insights (Blog & Newsletter) */}
      <CruisersGuideInsights />

      {/* Grand Watermark Footer */}
      <Footer />

      {/* Booking & Stateroom Reserve Modal */}
      <SovereignSocietyModal
        isOpen={reserveModalOpen}
        onClose={handleCloseReserve}
        initialSuite={selectedSuite?.name}
        initialPrice={selectedSuite?.price}
      />

      {/* Detailed Itinerary Modal */}
      <ItineraryModal
        voyage={activeVoyageModal}
        isOpen={!!activeVoyageModal}
        onClose={() => setActiveVoyageModal(null)}
      />

    </main>
  );
}
