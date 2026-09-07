'use client';

import { UtensilsCrossed, Dices, Sparkles, Tv } from 'lucide-react';

export default function ShipExperienceBento() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-slate-100 dark:bg-[#070f19] border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[88rem] mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
            NOCTURNAL SPLENDOR
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-slate-900 dark:text-slate-100 font-bold">
            Life Aboard Oshin Flagship
          </h2>
          <p className="font-jakarta text-slate-600 dark:text-slate-400 text-sm md:text-base font-light">
            An opulent world engineered for connoisseurs of the rare and timeless. Revel in six-star maritime sanctuaries curated by masters of fine living.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Gastronomy (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#151c26] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group min-h-[400px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/michelin_dining_hall.jpg"
                alt="Michelin Star Dining"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 max-w-xl text-white">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                <span className="font-jakarta text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                  Gastronomic Atelier • Deck 6
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold">Six Masterchef Specialty Venues</h3>
              <p className="font-jakarta text-xs md:text-sm text-slate-300 leading-relaxed">
                From charcoal-grilled Wagyu at L’Ambre to fresh yellowfin carpaccio curated by 3-Michelin star resident chefs, accompanied by rare vintages from our 2,400-bottle oceanic cellar.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 font-jakarta text-xs uppercase text-amber-300 font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Caviar & Krug Bar</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Sommelier Masterclasses</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Casino (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#151c26] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group min-h-[400px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop"
                alt="Monaco Casino Royale"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <Dices className="w-5 h-5 text-amber-400" />
                <span className="font-jakarta text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                  Monaco Gaming Club • Deck 7
                </span>
              </div>
              <h3 className="font-playfair text-2xl font-bold">The Grand Casino Royale</h3>
              <p className="font-jakarta text-xs md:text-sm text-slate-300 leading-relaxed">
                Private Salon Privé high-limit tables, European roulette, and bespoke hand-crafted mixology under chandelier warmth.
              </p>
            </div>
          </div>

          {/* Bento Item 3: Aurum Spa (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#151c26] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group min-h-[400px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Aurum Spa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="font-jakarta text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                  Holistic Wellness • Deck 9
                </span>
              </div>
              <h3 className="font-playfair text-2xl font-bold">Aurum Thalasso Spa & Vitality</h3>
              <p className="font-jakarta text-xs md:text-sm text-slate-300 leading-relaxed">
                Hydrotherapy magnesium pools, Finnish ocean-view cedar saunas, and anti-aging cell rituals by Valmont Switzerland.
              </p>
            </div>
          </div>

          {/* Bento Item 4: Grand Theatre (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#151c26] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group min-h-[400px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop"
                alt="Grand Theatre"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 max-w-xl text-white">
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5 text-amber-400" />
                <span className="font-jakarta text-xs text-amber-400 uppercase tracking-[0.2em] font-bold">
                  The Stage • Deck 4 & 5
                </span>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold">Broadway-Caliber Grand Theatre</h3>
              <p className="font-jakarta text-xs md:text-sm text-slate-300 leading-relaxed">
                Two-tier crystal acoustic arena with exclusive West End productions, international virtuoso soloists, and starlit jazz recitals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
