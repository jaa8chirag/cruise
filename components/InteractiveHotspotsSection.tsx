'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function InteractiveHotspotsSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'wide-deck',
      name: 'Wide Deck',
      subtitle: 'Panoramic ocean views',
      position: 'top-[48%] left-[24%] sm:left-[22%]',
    },
    {
      id: 'private-spa',
      name: 'Private Spa',
      subtitle: 'Serene wellness retreat',
      position: 'top-[58%] left-[42%] sm:left-[43%]',
    },
    {
      id: 'luxury-dining',
      name: 'Luxury Dining',
      subtitle: 'Exquisite fine dining',
      position: 'top-[46%] left-[60%] sm:left-[61%]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-900 to-deepnavy text-white relative overflow-hidden" data-purpose="liner-experience" id="features">
      
      {/* Top Narrative Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean-300 bg-white/10 px-3 py-1 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-ocean-300" />
          <span>Our Features</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl font-sans">
          Experience Unmatched Comfort &amp; Luxury
        </h2>

        <p className="mt-3 text-ocean-200/80 text-sm sm:text-base max-w-xl font-light leading-relaxed">
          Discover premium amenities, world-class service and unforgettable journeys designed for your relaxation and enjoyment with Oshin Shipping.
        </p>
      </div>

      {/* Mega Interactive Liner Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl bg-ocean-950 aspect-[16/10] sm:aspect-[16/9]">
          
          {/* Large Ship Aerial Image */}
          <Image
            src="/images/velvet_blue_hero.jpg"
            alt="Oshin Shipping Fleet Vessel Overview with Interactive Hotspots"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/80 via-transparent to-black/20 pointer-events-none"></div>

          {/* Hotspots */}
          {hotspots.map((hs) => (
            <div
              key={hs.id}
              className={`absolute ${hs.position} -translate-x-1/2 -translate-y-1/2 group z-20`}
              onClick={() => setActiveTooltip(activeTooltip === hs.id ? null : hs.id)}
            >
              <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-xl cursor-pointer group-hover:scale-105 transition-all text-slate-900 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-ocean-600 hotspot-ring"></span>
                <div className="text-left">
                  <span className="block text-xs font-bold leading-none font-sans">{hs.name}</span>
                  <span className="text-[10px] text-slate-500 hidden sm:block font-light">{hs.subtitle}</span>
                </div>
                <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-ocean-600 transition-colors" />
              </div>
            </div>
          ))}

          {/* Hotspot 4: Swimming Pool (Aft Rooftop Preview Card) */}
          <div className="absolute top-[34%] right-[5%] sm:right-[10%] group z-20 hidden md:block">
            <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-2xl border border-white max-w-[190px] text-slate-800 transition-transform group-hover:scale-105">
              <div className="relative h-24 w-full rounded-xl overflow-hidden mb-2 bg-cyan-100">
                <Image
                  src="/images/stitch_infinity_pool.png"
                  alt="Liner Swimming Pool"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h4 className="text-xs font-bold text-deepnavy font-sans">Swimming Pool</h4>
              <p className="text-[10px] text-slate-500 mb-2 font-light">Infinity sea edge</p>
              <div className="flex gap-1 text-[9px] font-semibold text-ocean-700">
                <span className="bg-ocean-50 px-2 py-0.5 rounded">Adult Pool</span>
                <span className="bg-ocean-50 px-2 py-0.5 rounded">Child Pool</span>
              </div>
            </div>
          </div>

          {/* Bottom Banner on image: '#1 Cruise Line' */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 flex flex-wrap items-center gap-6">
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow font-sans">
              #1 Cruise Line
            </span>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous deck view"
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next deck view"
                className="w-9 h-9 rounded-full bg-white text-deepnavy flex items-center justify-center hover:bg-ocean-50 transition-colors shadow-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
