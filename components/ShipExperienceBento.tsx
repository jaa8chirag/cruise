'use client';

import { UtensilsCrossed, Dices, Sparkles, Tv, Waves, Compass, Music, Flame } from 'lucide-react';
import Image from 'next/image';

export default function ShipExperienceBento() {
  return (
    <section id="experience" className="w-full py-20 bg-slate-50 dark:bg-[#081528] border-t border-sky-400/20 transition-colors duration-300">
      <div className="max-w-[88rem] mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 border border-sky-400/30 text-[#1a78b1] dark:text-[#29aae0] text-xs font-poppins font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#f7b339]" />
            <span>Onboard Wonder & Entertainment</span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-[#0c274c] dark:text-white tracking-tight">
            Life Aboard The <span className="text-[#29aae0]">Velvet Blue</span> Fleet
          </h2>

          <p className="font-poppins text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Inspired by the world’s most celebrated mega liners. From Michelin-starred alfresco dining to Broadway ocean theaters and infinity lagoons.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Gastronomy (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c274c] rounded-3xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-xl hover:border-[#29aae0]/50 transition-all duration-300 relative group min-h-[420px] flex flex-col justify-end p-6 md:p-10">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/michelin_dining_hall.jpg"
                alt="Michelin Star Dining Aboard Velvet Blue"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c] via-[#0c274c]/70 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 max-w-xl text-white">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-[#f7b339]" />
                <span className="font-poppins text-xs text-[#a9f6fb] uppercase tracking-wider font-bold">
                  Gastronomic Atelier • Deck 6
                </span>
              </div>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-white">
                Six World-Class Specialty Dining Venues
              </h3>
              <p className="font-poppins text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                From fresh Mediterranean seafood carpaccio to dry-aged charcoal steaks, paired with vintage Grand Crus selected by our Master Sommeliers.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 font-poppins text-xs uppercase text-[#a9f6fb] font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f7b339]"></span> Caviar & Champagne Lounge</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#29aae0]"></span> Master Chef Table Exclusives</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Ocean Pool & Sunset Deck (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0c274c] rounded-3xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-xl hover:border-[#29aae0]/50 transition-all duration-300 relative group min-h-[420px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/velvet_blue_hero.jpg"
                alt="Infinity Pool Deck at Sunset"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c] via-[#0c274c]/70 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-[#29aae0]" />
                <span className="font-poppins text-xs text-[#a9f6fb] uppercase tracking-wider font-bold">
                  Sky Deck Oasis • Deck 14
                </span>
              </div>
              <h3 className="font-poppins text-2xl font-extrabold text-white">The Infinity Sky Lagoon</h3>
              <p className="font-poppins text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                Cantilevered glass swimming pools suspended above the open ocean, heated whirlpools, and plush poolside cabanas with chilled refreshments.
              </p>
            </div>
          </div>

          {/* Bento Item 3: Aurum Spa (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0c274c] rounded-3xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-xl hover:border-[#29aae0]/50 transition-all duration-300 relative group min-h-[420px] flex flex-col justify-end p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/fresh_onboard_luxury.jpg"
                alt="Thalasso Wellness Spa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c] via-[#0c274c]/80 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#f7b339]" />
                <span className="font-poppins text-xs text-[#a9f6fb] uppercase tracking-wider font-bold">
                  Vitality & Renewal • Deck 10
                </span>
              </div>
              <h3 className="font-poppins text-2xl font-extrabold text-white">Thalasso Thermal Spa & Salons</h3>
              <p className="font-poppins text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                Heated salt-water vitality baths, panoramic herbal steam rooms, cryotherapy chambers, and tailor-made holistic body rituals.
              </p>
            </div>
          </div>

          {/* Bento Item 4: Grand Ocean Theatre (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0c274c] rounded-3xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-xl hover:border-[#29aae0]/50 transition-all duration-300 relative group min-h-[420px] flex flex-col justify-end p-6 md:p-10">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/authentic_moments.jpg"
                alt="Evening Ocean Theater & Music"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c] via-[#0c274c]/75 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-3 max-w-xl text-white">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-[#f7b339]" />
                <span className="font-poppins text-xs text-[#a9f6fb] uppercase tracking-wider font-bold">
                  The Ocean Stage • Deck 4 & 5
                </span>
              </div>
              <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-white">
                Broadway-Caliber Ocean Theatre & Live Music
              </h3>
              <p className="font-poppins text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                Spectacular evening productions, guest jazz quartets, and starlight acoustic sessions under celestial glass domes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
