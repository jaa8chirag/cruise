'use client';

import Image from 'next/image';
import { Star, ShieldCheck, Utensils, UserCheck, ArrowRight, Compass, Calendar, Ship, BedDouble, Users } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onSearchSubmit?: (filters: any) => void;
}

export default function HeroSection({ onSearchSubmit }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'voyages' | 'weekend' | 'charter'>('voyages');
  const [destination, setDestination] = useState('lakshadweep');
  const [duration, setDuration] = useState('all');
  const [suiteType, setSuiteType] = useState('2-ocean');

  const handleSearch = () => {
    if (onSearchSubmit) {
      onSearchSubmit({ activeTab, destination, duration, suiteType });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-4 md:px-8 overflow-hidden">
      
      {/* Cinematic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aurelia_hero_sunset.jpg"
          alt="Oshin Shipping Superyacht cruising at golden dusk"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Scrim Overlay for both light & dark contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c141e] via-[#0c141e]/60 to-[#0c141e]/30 dark:from-[#0c141e] dark:via-[#0c141e]/70 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c141e]/90 via-[#0c141e]/50 to-transparent"></div>
      </div>

      {/* Top Editorial Headline Content */}
      <div className="relative z-10 max-w-[88rem] mx-auto w-full pt-8 md:pt-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-jakarta text-[11px] text-amber-400 tracking-[0.25em] uppercase font-semibold">
              The Pinnacle of Maritime Elegance • All-Inclusive Suite Expeditions
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
            Sail Beyond <span className="italic font-normal text-amber-400">Luxury</span>
          </h1>

          <p className="font-jakarta text-slate-200 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Discover bespoke coastal journeys across Lakshadweep, Goa, Dubai, and the Mediterranean with Michelin-inspired culinary excellence, private zodiac excursions, and dedicated butler service.
          </p>
        </div>
      </div>

      {/* Floating Glassmorphic Search Widget */}
      <div className="relative z-10 max-w-[88rem] mx-auto w-full mt-10">
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-2xl p-4 md:p-6 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.8)] border border-amber-500/30">
          
          {/* Tab Controls */}
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800 overflow-x-auto">
            <button
              onClick={() => setActiveTab('voyages')}
              className={`px-5 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'voyages'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Ship className="w-4 h-4" />
              Ocean Voyages
            </button>
            <button
              onClick={() => setActiveTab('weekend')}
              className={`px-5 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'weekend'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              Weekend Getaways
            </button>
            <button
              onClick={() => setActiveTab('charter')}
              className={`px-5 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'charter'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BedDouble className="w-4 h-4" />
              Private Yacht Charters
            </button>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            {/* Destination Select */}
            <div className="space-y-1">
              <label className="font-jakarta text-[11px] text-amber-400 uppercase tracking-widest block font-semibold flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Destination & Ports
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-slate-800/90 text-slate-100 border border-slate-700 rounded-lg px-3 py-3 text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="lakshadweep">Lakshadweep Coral Atolls (Kadmat & Kavaratti)</option>
                <option value="goa">Goa & Konkan Coast (Sundowner Excursions)</option>
                <option value="dubai">Arabian Gulf & Dubai (Royal Skyline Passage)</option>
                <option value="maldives">Maldives & Sri Lanka Lagoon Odyssey</option>
                <option value="med">Mediterranean French & Italian Riviera</option>
              </select>
            </div>

            {/* Sailing Window */}
            <div className="space-y-1">
              <label className="font-jakarta text-[11px] text-amber-400 uppercase tracking-widest block font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Sailing Window
              </label>
              <input
                type="text"
                readOnly
                value="Oct 2025 – Jan 2026"
                className="w-full bg-slate-800/90 text-slate-100 border border-slate-700 rounded-lg px-3 py-3 text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
              />
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="font-jakarta text-[11px] text-amber-400 uppercase tracking-widest block font-semibold flex items-center gap-1">
                <Ship className="w-3.5 h-3.5 text-amber-400" />
                Voyage Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-slate-800/90 text-slate-100 border border-slate-700 rounded-lg px-3 py-3 text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="all">Any Duration (3 - 14 Nights)</option>
                <option value="3">3 - 4 Nights (Coastal Weekend)</option>
                <option value="5">5 - 7 Nights (Signature Cruise)</option>
                <option value="10">8+ Nights (Grand Archipelagos)</option>
              </select>
            </div>

            {/* Suite & Party */}
            <div className="space-y-1">
              <label className="font-jakarta text-[11px] text-amber-400 uppercase tracking-widest block font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Suite & Party
              </label>
              <select
                value={suiteType}
                onChange={(e) => setSuiteType(e.target.value)}
                className="w-full bg-slate-800/90 text-slate-100 border border-slate-700 rounded-lg px-3 py-3 text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="2-ocean">2 Guests • Grand Ocean Balcony</option>
                <option value="2-penthouse">2 Guests • Horizon Penthouse Duplex</option>
                <option value="4-owner">4 Guests • Royal Oshin Suite</option>
                <option value="1-solo">1 Guest • Private Veranda Studio</option>
              </select>
            </div>

            {/* Explore Button */}
            <div>
              <button
                onClick={handleSearch}
                className="w-full h-[44px] rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-jakarta text-xs uppercase tracking-[0.16em] font-bold shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:shadow-[0_0_36px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Voyages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Trust Ticker Below Search */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-slate-300 text-xs">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.98 Guest Satisfaction (Verified Superyacht Index)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>100% Ocean-View Private Balcony Suites</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" />
              <span>Complimentary 6-Venue Michelin Dining & Cellar Pairings</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>24-Hour Dedicated Stateroom Butler</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
