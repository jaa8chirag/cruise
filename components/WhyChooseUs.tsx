'use client';

import Image from 'next/image';
import { Compass, ArrowUpRight, Sparkles, Check, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export default function WhyChooseUs({ onLearnMore }: WhyChooseUsProps) {
  const cards = [
    {
      badge: 'Michelin Experience',
      title: 'Exclusive Deals & Perks',
      desc: 'Access curated private dining, sommelier selections, complimentary champagne, and stateroom upgrades booked only through Oshin Shipping.',
      image: '/images/stitch_fine_dining.png',
      backTitle: 'VIP Gastronomy Inclusions',
      backDesc: 'Indulge in 6 masterchef venues with guaranteed table reservations.',
      features: [
        'Private Sommelier Wine Cellar Tour',
        'Complimentary Dom Pérignon Welcome',
        'Priority Seating at Chef Atelier',
        'In-Suite Midnight Caviar Service'
      ],
      ctaText: 'Explore Menus'
    },
    {
      badge: 'Dedicated Butler',
      title: '24/7 Voyage Support',
      desc: 'Our seasoned nautical concierge team accompanies your planning every step, from custom shore excursions to white-glove cabin care.',
      image: '/images/authentic_moments.jpg',
      backTitle: 'White-Glove Concierge 24/7',
      backDesc: 'Your personal dispatch team handles all onshore and onboard desires.',
      features: [
        'WhatsApp Concierge Line Instant Response',
        'Private Zodiac Shore Transfer Booking',
        'Luggage Valet From Airport to Cabin',
        'Custom Private Island Beach Setup'
      ],
      ctaText: 'Contact Concierge'
    },
    {
      badge: 'Secret Coves',
      title: 'Handpicked Itineraries',
      desc: 'Curated secret coves, turquoise lagoons, and historic colonial ports inaccessible to ordinary commercial ships.',
      image: '/images/stitch_tropical_caribbean.png',
      backTitle: 'Exclusive Port Anchorages',
      backDesc: 'Small-draft access allows docking at secluded bays and private atolls.',
      features: [
        'Hidden Coral Lagoon Anchorages',
        'Private Sandbank Picnics & Snorkeling',
        'Evening Overnights in Historic Harbors',
        'Zero Crowds, Pure Natural Solitude'
      ],
      ctaText: 'View Secret Routes'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden" data-purpose="features-grid" id="routes">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-100/80 border border-ocean-200 px-3.5 py-1.5 rounded-full mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Why Sail With Us?
          </h2>

          <p className="mt-3 text-slate-500 text-base sm:text-lg font-light leading-relaxed">
            Hover over any card to flip and reveal exclusive backstage privileges and all-inclusive details.
          </p>
        </div>

        {/* 3-Column Interactive Card Grid with 3D Flip Effects & Light Blue Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, idx) => (
            <article 
              key={idx}
              className="bg-white rounded-[2rem] p-4 sm:p-5 border-2 border-sky-200/80 hover:border-ocean-500 shadow-lg shadow-sky-100/40 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500 flex flex-col group"
            >
              {/* 3D Flip Card Container */}
              <div className="relative h-72 sm:h-80 w-full mb-5 flip-card-container">
                <div className="flip-card-inner">
                  
                  {/* FRONT of the card */}
                  <div className="flip-card-front bg-slate-100 relative border border-sky-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/70 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-deepnavy backdrop-blur-md shadow-md border border-white/80">
                      {card.badge}
                    </span>

                    {/* Flip hint chip at bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deepnavy/80 backdrop-blur-md border border-white/20 text-[11px] font-medium">
                        <Sparkles className="w-3 h-3 text-ocean-300" />
                        Hover to Flip
                      </span>
                      <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* BACK of the card (Revealed on hover) */}
                  <div className="flip-card-back bg-gradient-to-br from-deepnavy via-[#072443] to-ocean-900 text-white p-6 flex flex-col justify-between border border-ocean-400/40 shadow-2xl">
                    <div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ocean-500/30 text-ocean-300 border border-ocean-400/30 text-[10px] uppercase font-bold tracking-wider mb-2">
                        ★ Backstage Access
                      </div>
                      <h4 className="text-lg font-bold text-white font-sans leading-tight">
                        {card.backTitle}
                      </h4>
                      <p className="text-xs text-ocean-100/80 mt-1 font-light leading-relaxed">
                        {card.backDesc}
                      </p>

                      {/* Feature Checklist */}
                      <ul className="space-y-2 mt-4 text-xs text-slate-200">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                            <span className="font-light">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#itinerary"
                      onClick={onLearnMore}
                      className="w-full py-2.5 rounded-xl bg-ocean-500 hover:bg-ocean-400 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md mt-4 flex items-center justify-center gap-1.5"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

              {/* Card Footer Content */}
              <div className="px-2 pb-2 mt-auto">
                <h3 className="text-xl font-bold text-deepnavy group-hover:text-ocean-600 transition-colors font-sans">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
