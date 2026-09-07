'use client';

import { useState } from 'react';
import { Check, X, Crown, Sparkles } from 'lucide-react';

interface SuitesPricingProps {
  onReserveSuite?: (suiteName: string, price: string) => void;
}

export default function SuitesPricing({ onReserveSuite }: SuitesPricingProps) {
  const [durationTab, setDurationTab] = useState<'3' | '5' | '7'>('5');

  const handleReserve = (name: string, price: string) => {
    if (onReserveSuite) onReserveSuite(name, price);
  };

  return (
    <section id="suites" className="w-full py-16 md:py-24 px-4 md:px-8 max-w-[88rem] mx-auto">
      
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
            BESPOKE STATEROOMS
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-slate-900 dark:text-slate-100 font-bold">
            Select Your All-Inclusive Residence
          </h2>
          <p className="font-jakarta text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl">
            Every stateroom aboard Oshin Shipping is an expansive, private terrace suite facing the infinite horizon with dedicated butler assistance.
          </p>
        </div>

        {/* Segmented Switcher */}
        <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700">
          <button
            onClick={() => setDurationTab('3')}
            className={`px-4 py-2 rounded-md font-jakarta text-xs uppercase tracking-wider transition-all ${
              durationTab === '3'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            3-Night Escapes
          </button>
          <button
            onClick={() => setDurationTab('5')}
            className={`px-4 py-2 rounded-md font-jakarta text-xs uppercase tracking-wider transition-all ${
              durationTab === '5'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            5-Night Journeys
          </button>
          <button
            onClick={() => setDurationTab('7')}
            className={`px-4 py-2 rounded-md font-jakarta text-xs uppercase tracking-wider transition-all ${
              durationTab === '7'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            7+ Nights Grand
          </button>
        </div>
      </div>

      {/* 3 Tier Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Tier 1: Deluxe Ocean Balcony */}
        <div className="bg-white dark:bg-[#151c26] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                Level I Residence
              </span>
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400">
                350 sq.ft • Veranda
              </span>
            </div>
            
            <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-slate-100 mt-4">
              Deluxe Ocean Balcony Suite
            </h3>
            <p className="font-jakarta text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Teak-decked private terrace, marble bath with rainfall shower, Dyson amenities, and 300-thread-count Egyptian linens.
            </p>

            <div className="my-6">
              <span className="font-playfair text-4xl text-amber-600 dark:text-amber-400 font-bold leading-none">
                {durationTab === '3' ? '$1,650' : durationTab === '5' ? '$1,450' : '$1,290'}
              </span>
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400"> / suite per night</span>
            </div>

            <ul className="space-y-3 font-jakarta text-xs text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-slate-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Unlimited Dining at all 6 specialty venues</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sommelier-selected fine wine & spirits</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Ultra-fast Starlink Maritime WiFi</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Shared Zodiac shore landings</span>
              </li>
              <li className="flex items-center gap-2 opacity-40">
                <X className="w-4 h-4 shrink-0" />
                <span>24/7 Dedicated Private Butler</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <button
              onClick={() => handleReserve('Deluxe Ocean Balcony Suite', durationTab === '3' ? '$1,650' : '$1,450')}
              className="w-full py-3.5 rounded-lg border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-jakarta text-xs uppercase tracking-widest transition-all font-bold"
            >
              Reserve Balcony Suite
            </button>
          </div>
        </div>

        {/* Tier 2: Signature Horizon Penthouse (Featured) */}
        <div className="bg-slate-50 dark:bg-[#19202b] relative rounded-2xl p-6 md:p-8 border-2 border-amber-500 shadow-[0_0_40px_rgba(212,175,55,0.25)] flex flex-col justify-between transform lg:-translate-y-3">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 px-4 py-1 rounded-full font-jakarta text-[10px] uppercase tracking-widest font-bold shadow-md flex items-center gap-1">
            <Crown className="w-3 h-3" />
            Most Favored Residence
          </div>

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/30 mt-2">
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
                Level II Penthouse
              </span>
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 font-semibold">
                750 sq.ft • Duplex Terrace
              </span>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-slate-100 mt-4">
              Signature Horizon Penthouse
            </h3>
            <p className="font-jakarta text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Expansive open-plan living salon, outdoor daybeds, dual walk-in closets, bespoke minibar restocked daily, and Hermès amenities.
            </p>

            <div className="my-6">
              <span className="font-playfair text-4xl text-amber-600 dark:text-amber-400 font-bold leading-none">
                {durationTab === '3' ? '$3,150' : durationTab === '5' ? '$2,850' : '$2,550'}
              </span>
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400"> / suite per night</span>
            </div>

            <ul className="space-y-3 font-jakarta text-xs text-slate-800 dark:text-slate-200 pt-4 border-t border-amber-500/30">
              <li className="flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24/7 Dedicated Private Butler Service</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Priority Zodiac & Shore Expedition Tenders</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Unlimited Krug & Dom Pérignon Champagne</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>$500 Aurum Spa Credit per sailing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Private Airport & Port Chauffeur Transfer</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <button
              onClick={() => handleReserve('Signature Horizon Penthouse', durationTab === '3' ? '$3,150' : '$2,850')}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-jakarta text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_28px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve Horizon Penthouse</span>
            </button>
          </div>
        </div>

        {/* Tier 3: The Royal Aurelia Owner’s Suite */}
        <div className="bg-white dark:bg-[#151c26] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                The Sovereign Estate
              </span>
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400">
                1,600 sq.ft • Wrap Jacuzzi
              </span>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-slate-100 mt-4">
              The Royal Oshin Owner’s Suite
            </h3>
            <p className="font-jakarta text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Commanding bridge-view bow stateroom, private heated hydrotherapy pool, grand dining table for 8, and dedicated security salon.
            </p>

            <div className="my-6">
              <span className="font-playfair text-4xl text-amber-600 dark:text-amber-400 font-bold leading-none">
                {durationTab === '3' ? '$6,000' : durationTab === '5' ? '$5,500' : '$4,900'}
              </span>
              <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400"> / suite per night</span>
            </div>

            <ul className="space-y-3 font-jakarta text-xs text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-slate-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">Private Helicopter Deck Transfer to Ship</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-slate-100">In-Suite Personal Master Chef & Butler Team</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Unrestricted Shore Excursions with Limousine</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Unlimited Daily Spa Treatments</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Bespoke Itinerary & Private Anchorages</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <button
              onClick={() => handleReserve('The Royal Oshin Owner’s Suite', durationTab === '3' ? '$6,000' : '$5,500')}
              className="w-full py-3.5 rounded-lg border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-jakarta text-xs uppercase tracking-widest transition-all font-bold"
            >
              Inquire Sovereign Suite
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
