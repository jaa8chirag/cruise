'use client';

import { useState } from 'react';
import { MapPin, ChevronRight, Clock } from 'lucide-react';
import ItineraryModal, { DestinationItem } from './ItineraryModal';

const destinationsData: DestinationItem[] = [
  {
    id: 'lakshadweep',
    title: 'Lakshadweep Atoll Sanctuary',
    location: 'Coral Atolls',
    duration: '5 Nights / 6 Days',
    price: '$1,850',
    image: '/images/lakshadweep_atoll.jpg',
    badge: 'Exclusive Access',
    description: 'Remote anchorages in Kadmat and Kavaratti, bespoke scuba reef safaris, and uninhabited private sandbank dinners.',
    itineraryDays: [
      { day: 1, title: 'Embarkation & Sundowner Welcome', description: 'Board Aurelia in Cochin, champagne reception on aft deck as we sail into sunset.' },
      { day: 2, title: 'Kavaratti Lagoon Exploration', description: 'Private Zodiac tender to shallow coral reefs with marine biologists.' },
      { day: 3, title: 'Kadmat Island Coral Sanctuary', description: 'Deep sea diving, jet-ski safaris, and open-air beach dining under coconut palms.' },
      { day: 4, title: 'Uninhabited Sandbank Banquet', description: 'Helicopter transfer to isolated sandbank for private chef seafood barbecue.' },
      { day: 5, title: 'At Sea Wellness & Cellar Tasting', description: 'Relax at Aurum Spa followed by 5-course wine pairing dinner.' },
      { day: 6, title: 'Disembarkation', description: 'Farewell gourmet breakfast before transfer.' }
    ]
  },
  {
    id: 'goa',
    title: 'Goa & Sundowner Coast',
    location: 'Konkan Coastline',
    duration: '3 Nights / 4 Days',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop',
    badge: 'Weekend Retreat',
    description: 'Private beach club anchorage at Morjim, curated spice estate tastings, and sunset champagne jazz on the aft deck.',
    itineraryDays: [
      { day: 1, title: 'Sunset Embarkation at Panaji Port', description: 'Welcome cocktails with live acoustic jazz overlooking colonial harbor.' },
      { day: 2, title: 'Private Estate & Spice Safari', description: 'Exclusive access to historical Portuguese spice villas with private chef lunch.' },
      { day: 3, title: 'Morjim Bay Anchorage & Yacht Lounge', description: 'Water sports, seabob diving, and sunset champagne deck party.' },
      { day: 4, title: 'Return Docking', description: 'Morning yoga session on bow deck and gourmet breakfast.' }
    ]
  },
  {
    id: 'dubai',
    title: 'Dubai to Mumbai Royal Passage',
    location: 'Arabian Gulf',
    duration: '7 Nights / 8 Days',
    price: '$3,450',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    badge: 'Signature Grand Voyage',
    description: "Cross the historic spice routes from futuristic Emirati skylines to Muscat fjords and Mumbai's iconic colonial Gateway.",
    itineraryDays: [
      { day: 1, title: 'Dubai Harbor Departure', description: 'Sunset sailpast beneath Burj Al Arab and Ain Dubai.' },
      { day: 2, title: 'Muscat Fjords & Royal Opera', description: 'Private tour of Sultan Qaboos Grand Mosque and dhow harbor.' },
      { day: 3, title: 'Khasab Fjords Zodiac Expedition', description: 'Dolphin watching through turquoise mountain gorges.' },
      { day: 4, title: 'High Seas Culinary Masterclass', description: 'Interactive cooking workshop with 3-Michelin star guest chef.' },
      { day: 5, title: 'Arabian Sea Stargazing & Casino', description: 'High-limit roulette at Monaco Salon Privé.' },
      { day: 6, title: 'Mumbai Gateway Harbor Approach', description: 'Panoramic view of Taj Mahal Palace & Gateway of India.' },
      { day: 7, title: 'Private Heritage Gallery Tour', description: 'Exclusive after-hours viewing of art museums.' },
      { day: 8, title: 'Chauffeur Disembarkation', description: 'Private luxury car transfer to airport.' }
    ]
  },
  {
    id: 'maldives',
    title: 'Sri Lanka & Maldives Odyssey',
    location: 'Indian Ocean',
    duration: '8 Nights / 9 Days',
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop',
    badge: 'Ultra All-Inclusive',
    description: 'Whale sanctuaries in Mirissa, secluded Maldivian sandbars, private chef reef dining, and starlit open-air cinema.',
    itineraryDays: [
      { day: 1, title: 'Male Atoll Welcome', description: 'Embarkation with Krug champagne toast on helipad.' },
      { day: 2, title: 'Bioluminescent Reef Night Snorkel', description: 'Night diving with luminescent marine flora.' },
      { day: 3, title: 'Mirissa Blue Whale Sanctuary', description: 'Guided catamaran whale watching excursion.' },
      { day: 4, title: 'Galle Fort Heritage Walk', description: 'Private tea tasting at colonial tea estates.' },
      { day: 5, title: 'Maldivian Private Lagoon Day', description: 'Overwater daybed relaxation with personal butler.' },
      { day: 6, title: 'Deck Cinema Under Stars', description: 'Private movie screening on aft pool deck.' },
      { day: 7, title: 'Aurum Hydrotherapy Spa Day', description: 'Valmont anti-aging treatments included.' },
      { day: 8, title: 'Captain’s Farewell Gala', description: 'Black-tie 7-course tasting menu with vintage pairings.' },
      { day: 9, title: 'Transfer to Male Airport', description: 'Private sea-plane or yacht transfer.' }
    ]
  }
];

interface DestinationsGridProps {
  onBookVoyage?: (item: DestinationItem) => void;
}

export default function DestinationsGrid({ onBookVoyage }: DestinationsGridProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<DestinationItem | null>(null);

  const filteredData = destinationsData.filter(d => {
    if (filter === 'all') return true;
    if (filter === 'arabian' && (d.location.includes('Arabian') || d.location.includes('Konkan'))) return true;
    if (filter === 'indian' && (d.location.includes('Coral') || d.location.includes('Indian'))) return true;
    return true;
  });

  const handleBook = (item: DestinationItem) => {
    setSelectedItem(null);
    if (onBookVoyage) onBookVoyage(item);
  };

  return (
    <section id="destinations" className="w-full py-16 md:py-24 px-4 md:px-8 max-w-[88rem] mx-auto">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
            CURATED ARCHIPELAGOS
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl text-slate-900 dark:text-slate-100 font-bold">
            Destinations Defined by Distinction
          </h2>
          <p className="font-jakarta text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl">
            From crystal atoll lagoons in Lakshadweep to sundowner heritage shores of Goa and glittering Arabian skylines.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-800'
            }`}
          >
            All Voyages
          </button>
          <button
            onClick={() => setFilter('arabian')}
            className={`px-4 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all ${
              filter === 'arabian'
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-800'
            }`}
          >
            Arabian Sea
          </button>
          <button
            onClick={() => setFilter('indian')}
            className={`px-4 py-2 rounded-full font-jakarta text-xs uppercase tracking-wider transition-all ${
              filter === 'indian'
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-100 dark:bg-slate-800'
            }`}
          >
            Indian Ocean
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-[#151c26] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151c26] via-transparent to-black/30"></div>
              
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 font-jakarta text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-amber-400/30 font-bold">
                {item.badge}
              </span>
              <span className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-slate-100 font-jakarta text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                {item.duration}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-jakarta text-[11px] tracking-widest uppercase mb-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </div>
                <h3 className="font-playfair text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="font-jakarta text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="font-jakarta text-[10px] text-slate-500 dark:text-slate-400 block uppercase tracking-wider">From</span>
                  <span className="font-playfair text-lg text-amber-600 dark:text-amber-400 font-bold">
                    {item.price} <span className="font-jakarta text-xs text-slate-500 dark:text-slate-400 font-normal">/ guest</span>
                  </span>
                </div>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-slate-950 font-jakarta text-xs uppercase tracking-wider transition-colors flex items-center gap-1 text-slate-800 dark:text-slate-200 font-semibold"
                >
                  <span>Itinerary</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Itinerary Modal */}
      <ItineraryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBookNow={handleBook}
      />

    </section>
  );
}
