'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  Clock, 
  MapPin, 
  Ship, 
  Heart, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Anchor,
  Compass,
  Calendar
} from 'lucide-react';

export interface VoyageItem {
  id: string;
  title: string;
  category: 'bahamas' | 'alaska' | 'caribbean' | 'europe' | 'asia' | 'australia';
  badge: string;
  image: string;
  rating: number;
  reviewsCount: number;
  durationNights: number;
  region: string;
  shipType: string;
  pricePerPerson: number;
  highlights: string[];
  ports: string[];
  departurePort: string;
  description: string;
}

export const VOYAGES_DATA: VoyageItem[] = [
  {
    id: 'med-escape',
    title: 'Mediterranean Escape',
    category: 'europe',
    badge: 'Popular',
    image: '/images/mediterranean_escape.jpg',
    rating: 4.8,
    reviewsCount: 256,
    durationNights: 7,
    region: 'Mediterranean Sea',
    shipType: 'Luxury Ship',
    pricePerPerson: 1540,
    highlights: ['Positano Cliff Views', 'Santorini Blue Domes', 'Michelin Alfresco Dining'],
    ports: ['Civitavecchia (Rome)', 'Naples (Amalfi)', 'Mykonos', 'Santorini', 'Barcelona'],
    departurePort: 'Civitavecchia / Rome',
    description: 'Experience timeless Mediterranean romance sailing between the pastel cliffs of Positano, turquoise Aegean lagoons, and historic Catalan harbors in ultra-modern luxury.'
  },
  {
    id: 'bahamas-sun',
    title: 'Bahamas Sun & Tropical Waters',
    category: 'bahamas',
    badge: 'Best Seller',
    image: '/images/bahamas_tropical.jpg',
    rating: 4.9,
    reviewsCount: 312,
    durationNights: 5,
    region: 'Bahamas & Keys',
    shipType: 'Mega Liner',
    pricePerPerson: 1280,
    highlights: ['Private Island Cabanas', 'Coral Reef Snorkeling', 'Sunset Beach Club'],
    ports: ['Miami', 'Nassau', 'Ocean Cay MSC Reserve', 'Bimini', 'Miami'],
    departurePort: 'PortMiami, Florida',
    description: 'Sunkissed powdery sand beaches and shimmering turquoise shallows. Unwind with open-air beach clubs and secluded island anchorages.'
  },
  {
    id: 'alaska-glacier',
    title: 'Alaskan Glacier Wonder',
    category: 'alaska',
    badge: 'Expedition',
    image: '/images/alaska_glacier.jpg',
    rating: 4.9,
    reviewsCount: 198,
    durationNights: 8,
    region: 'Alaska & Fjords',
    shipType: 'Polar Class Yacht',
    pricePerPerson: 1890,
    highlights: ['Hubbard Glacier Calving', 'Whale Watching Safari', 'Helicopter Ice Trek'],
    ports: ['Seattle', 'Juneau', 'Skagway', 'Glacier Bay', 'Ketchikan', 'Victoria'],
    departurePort: 'Seattle, Washington',
    description: 'Witness thunderous blue glacier icefalls, pristine fjord mirrors, and bald eagle sanctuaries from private glass-railed observation verandas.'
  },
  {
    id: 'caribbean-discovery',
    title: 'Caribbean Island Odyssey',
    category: 'caribbean',
    badge: 'Trending',
    image: '/images/velvet_blue_hero.jpg',
    rating: 4.8,
    reviewsCount: 420,
    durationNights: 7,
    region: 'Eastern Caribbean',
    shipType: 'Flagship Liner',
    pricePerPerson: 1650,
    highlights: ['Bioluminescent Bay Kayak', 'Catamaran Champagne Cruise', 'St. Thomas Skyride'],
    ports: ['Fort Lauderdale', 'Philipsburg (St. Maarten)', 'Charlotte Amalie', 'San Juan'],
    departurePort: 'Port Everglades, Florida',
    description: 'Island hop across the Caribbean jewels with world-class entertainment, infinity pools over the stern, and starlight deck parties.'
  },
  {
    id: 'greek-isles',
    title: 'Greek Isles & Aegean Dream',
    category: 'europe',
    badge: 'Special Offer',
    image: '/images/human_wonder.jpg',
    rating: 4.9,
    reviewsCount: 345,
    durationNights: 7,
    region: 'Aegean Sea',
    shipType: 'Boutique Cruiser',
    pricePerPerson: 1720,
    highlights: ['Oia Sunset Balconies', 'Delos Ancient Ruins', 'Private Beach Tender'],
    ports: ['Piraeus (Athens)', 'Mykonos', 'Santorini', 'Heraklion (Crete)', 'Rhodes'],
    departurePort: 'Piraeus, Athens',
    description: 'White-washed hillside villages, sparkling sapphire waters, and ancient Aegean history with dedicated concierge service and curated wine tastings.'
  },
  {
    id: 'fresh-luxury',
    title: 'Fresh Onboard Suite Expedition',
    category: 'caribbean',
    badge: 'Ultra Luxury',
    image: '/images/fresh_onboard_luxury.jpg',
    rating: 5.0,
    reviewsCount: 182,
    durationNights: 10,
    region: 'Southern Caribbean',
    shipType: 'Superyacht',
    pricePerPerson: 2450,
    highlights: ['Private Veranda Jacuzzi', 'Caviar & Champagne Service', 'Dedicated Butler'],
    ports: ['Bridgetown (Barbados)', 'St. Lucia (Pitons)', 'Antigua', 'St. Barts'],
    departurePort: 'Bridgetown, Barbados',
    description: 'The ultimate sanctuary of residential serenity. Sprawling teak suites with panoramic sea horizons, 24-hour butler assistance, and bespoke zodiac adventures.'
  }
];

interface DestinationsGridProps {
  onBookVoyage: (voyage: VoyageItem) => void;
  selectedCategory?: string;
  durationFilter?: string;
  regionFilter?: string;
  sortBy?: string;
}

export default function DestinationsGrid({
  onBookVoyage,
  selectedCategory = 'all',
  durationFilter = 'any',
  regionFilter = 'all',
  sortBy = 'popular',
}: DestinationsGridProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter and sort items
  let filtered = VOYAGES_DATA.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    if (regionFilter !== 'all') {
      if (regionFilter === 'mediterranean' && !item.region.toLowerCase().includes('mediterranean')) return false;
      if (regionFilter === 'caribbean' && !item.region.toLowerCase().includes('caribbean') && !item.region.toLowerCase().includes('bahamas')) return false;
      if (regionFilter === 'alaska' && !item.region.toLowerCase().includes('alaska')) return false;
      if (regionFilter === 'aegean' && !item.region.toLowerCase().includes('aegean')) return false;
    }
    if (durationFilter !== 'any') {
      if (durationFilter === '3-5' && (item.durationNights < 3 || item.durationNights > 5)) return false;
      if (durationFilter === '6-8' && (item.durationNights < 6 || item.durationNights > 8)) return false;
      if (durationFilter === '9-14' && (item.durationNights < 9 || item.durationNights > 14)) return false;
      if (durationFilter === '15+' && item.durationNights < 15) return false;
    }
    return true;
  });

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="destinations" className="w-full max-w-[88rem] mx-auto px-4 md:px-8 py-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 border border-sky-400/30 text-[#1a78b1] dark:text-[#29aae0] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Voyages</span>
          </div>
          <h2 className="font-poppins font-black text-3xl sm:text-4xl text-[#0c274c] dark:text-white tracking-tight">
            Featured Cruise Itineraries
          </h2>
          <p className="font-poppins text-slate-500 dark:text-slate-300 text-sm mt-1">
            Handcrafted luxury itineraries sail across the world’s most mesmerizing coasts.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing <span className="text-[#0c274c] dark:text-white font-bold">{filtered.length}</span> voyages available
        </div>
      </div>

      {/* Grid of Voyage Cards - Exactly matching the Mood Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((voyage) => {
          const isFav = !!favorites[voyage.id];

          return (
            <div
              key={voyage.id}
              className="group bg-white dark:bg-[#0c274c] rounded-3xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-[0_10px_30px_rgba(12,39,76,0.06)] dark:shadow-[0_15px_40px_rgba(5,16,33,0.6)] hover:shadow-[0_20px_50px_rgba(41,170,224,0.22)] hover:border-[#29aae0]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Media Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={voyage.image}
                  alt={voyage.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c]/80 via-transparent to-black/30"></div>

                {/* Badge (e.g. "Popular") */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#29aae0] text-white text-xs font-poppins font-bold tracking-wide shadow-md">
                    {voyage.badge}
                  </span>
                </div>

                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(voyage.id, e)}
                  className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-[#081528]/80 backdrop-blur-md flex items-center justify-center transition-all ${
                    isFav ? 'text-rose-500 scale-110' : 'text-slate-700 dark:text-slate-200 hover:text-rose-500'
                  }`}
                  title="Favorite voyage"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                </button>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium bg-[#0c274c]/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-[#29aae0]" />
                    {voyage.departurePort}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Rating Line */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex text-[#f7b339]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#f7b339]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#0c274c] dark:text-white">
                      {voyage.rating}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({voyage.reviewsCount} reviews)
                    </span>
                  </div>

                  {/* Voyage Title */}
                  <h3 className="font-poppins font-bold text-xl text-[#0c274c] dark:text-white group-hover:text-[#29aae0] transition-colors leading-snug">
                    {voyage.title}
                  </h3>

                  {/* Details Subtitle: 7 Nights · Mediterranean Sea · Luxury Ship */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-300 mt-2">
                    <span className="font-semibold text-[#1a78b1] dark:text-[#29aae0]">
                      {voyage.durationNights} Nights
                    </span>
                    <span>·</span>
                    <span>{voyage.region}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Ship className="w-3 h-3 text-slate-400" />
                      {voyage.shipType}
                    </span>
                  </div>

                  {/* Highlights Bullets */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {voyage.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-[#1a78b1] dark:text-[#a9f6fb] border border-sky-400/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing and Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-sky-500/20">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs font-medium text-slate-400">
                      Starting from
                    </span>
                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-2xl text-[#0c274c] dark:text-white">
                        ${voyage.pricePerPerson.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 ml-1">/ person</span>
                    </div>
                  </div>

                  {/* Dual Action Buttons matching Mood Board DNA */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* View Voyage (Sky Blue Button) */}
                    <button
                      onClick={() => onBookVoyage(voyage)}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#1a78b1] to-[#29aae0] text-white text-xs font-poppins font-bold shadow-md hover:shadow-lg hover:from-[#29aae0] hover:to-[#1a78b1] active:scale-95 transition-all text-center flex items-center justify-center gap-1"
                    >
                      <span>View Voyage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* See Details (Midnight Navy Button) */}
                    <button
                      onClick={() => onBookVoyage(voyage)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#0c274c] dark:bg-[#081528] text-white hover:bg-slate-800 dark:hover:bg-slate-900 border border-sky-400/30 text-xs font-poppins font-bold transition-all text-center"
                    >
                      See Details
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
