'use client';

import { Layers, Waves, UtensilsCrossed, Sparkles, Tv, Dices, Users } from 'lucide-react';

export default function PassengerDecksAmenities() {
  const amenities = [
    {
      title: 'Aqua Infinity Oasis',
      deck: 'Deck 14 • Sun Deck',
      desc: 'Heated outdoor pool, whirlpool jacuzzis, and poolside cocktail cabana service.',
      icon: Waves
    },
    {
      title: 'Michelin Star Sea Dining',
      deck: 'Deck 7 & 9',
      desc: '7 specialty dining venues featuring French pastries, fresh ocean catch, and Italian fare.',
      icon: UtensilsCrossed
    },
    {
      title: 'Royal Thalasso Spa',
      deck: 'Deck 11 • Wellness Wing',
      desc: 'Heated ceramic loungers, Nordic sauna, sea salt thermal suites, and seaweed wraps.',
      icon: Sparkles
    },
    {
      title: 'Starlight Grand Theater',
      deck: 'Deck 5 & 6 • Forward',
      desc: 'West End-grade musical productions, world-class illusionists, and live orchestral concerts.',
      icon: Tv
    },
    {
      title: 'Monte Carlo Casino',
      deck: 'Deck 8 • Midship',
      desc: 'Blackjack, European roulette, poker rooms, and VIP private salons for high stakes.',
      icon: Dices
    },
    {
      title: "Children's Ocean Academy",
      deck: 'Deck 12 • Family Zone',
      desc: 'Certified marine biology educators, interactive game rooms, and supervised child care.',
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-purpose="deck-amenities">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 border border-ocean-200/60 px-3.5 py-1.5 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5 text-ocean-600" />
            <span>14 Passenger Decks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            World-Class Amenities On Every Level
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Everything you need for adventure, leisure, and rejuvenation on the open water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-start gap-4 hover:border-ocean-300 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-ocean-100 text-ocean-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-deepnavy font-sans group-hover:text-ocean-700 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-ocean-600 font-semibold block mt-0.5">
                    {item.deck}
                  </span>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
