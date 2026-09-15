'use client';

import Image from 'next/image';
import { Compass, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export default function WhyChooseUs({ onLearnMore }: WhyChooseUsProps) {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden" data-purpose="features-grid" id="routes">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-100/70 px-3 py-1 rounded-full mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Why Sail With Us?
          </h2>

          <p className="mt-3 text-slate-500 text-base sm:text-lg font-light leading-relaxed">
            We take care of every meticulous detail, so you can focus on the endless ocean horizons and everlasting memories.
          </p>
        </div>

        {/* 3-Column Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Exclusive Deals & Perks */}
          <article className="interactive-card bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col group">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
              <Image
                src="/images/stitch_fine_dining.png"
                alt="Exclusive culinary perks and fine wine dining"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/60 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-deepnavy backdrop-blur-sm shadow-sm">
                Michelin Experience
              </span>
            </div>
            <div className="px-2 pb-2 mt-auto">
              <h3 className="text-xl font-bold text-deepnavy group-hover:text-ocean-600 transition-colors">
                Exclusive Deals &amp; Perks
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed font-light">
                Access curated private dining, sommelier selections, complimentary champagne, and stateroom upgrades booked only through Oshin Shipping.
              </p>
            </div>
          </article>

          {/* Card 2: 24/7 Voyage Support */}
          <article className="interactive-card bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col group relative">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
              <Image
                src="/images/authentic_moments.jpg"
                alt="Concierge Voyage Support"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/50 via-transparent to-transparent"></div>
              
              {/* Floating interactive pill inside card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <a
                  href="#itinerary"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-slate-800 shadow-xl hover:scale-105 active:scale-95 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ocean-600" />
                </a>
              </div>
            </div>
            <div className="px-2 pb-2 mt-auto">
              <h3 className="text-xl font-bold text-deepnavy group-hover:text-ocean-600 transition-colors">
                24/7 Voyage Support
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed font-light">
                Our seasoned nautical concierge team accompanies your planning every step, from custom shore excursions to white-glove cabin care.
              </p>
            </div>
          </article>

          {/* Card 3: Handpicked Itineraries */}
          <article className="interactive-card bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col group">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
              <Image
                src="/images/stitch_tropical_caribbean.png"
                alt="Handpicked Tropical Itineraries and scenic harbors"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/60 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-ocean-700 backdrop-blur-sm shadow-sm">
                Secret Coves
              </span>
            </div>
            <div className="px-2 pb-2 mt-auto">
              <h3 className="text-xl font-bold text-deepnavy group-hover:text-ocean-600 transition-colors">
                Handpicked Itineraries
              </h3>
              <p className="text-slate-500 text-sm mt-1.5 leading-relaxed font-light">
                Curated secret coves, turquoise lagoons, and historic colonial ports inaccessible to ordinary commercial ships.
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
