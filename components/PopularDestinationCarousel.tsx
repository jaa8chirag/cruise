'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Compass, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Calendar, 
  Ship, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Globe2, 
  Palmtree, 
  Mountain, 
  Sun, 
  Anchor 
} from 'lucide-react';

interface PopularDestinationCarouselProps {
  onBookNow?: (destination: string, price: string) => void;
}

export default function PopularDestinationCarousel({ onBookNow }: PopularDestinationCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'caribbean' | 'mediterranean' | 'alaska' | 'asia' | 'arabian'>('all');
  const [currentFeaturedIdx, setCurrentFeaturedIdx] = useState(0);

  // Featured Snapshot Slider
  const featuredSlides = [
    {
      slideNum: '01',
      totalSlides: '03',
      days: '4 Days',
      places: '12 Places',
      title: 'Caribbean Trip',
      route: 'Miami – Nassau – Havana Harbor – Key West',
      portTag: 'Port of Call',
      portName: 'Havana Harbor & Coral Keys',
      portDesc: 'Deep crystalline waters & private anchorage',
      image: '/images/stitch_tropical_caribbean.png',
      price: '$320',
      description: 'Unpack once and let the world drift by your window. From sun-drenched islands to turquoise frontiers, your next story begins here.'
    },
    {
      slideNum: '02',
      totalSlides: '03',
      days: '7 Days',
      places: '16 Places',
      title: 'Mediterranean Voyage',
      route: 'Rome – Positano – Naples – Santorini – Barcelona',
      portTag: 'Signature Port',
      portName: 'Amalfi Coast & Positano Cliffs',
      portDesc: 'Sunlit pastel cliff villas & Michelin alfresco dining',
      image: '/images/mediterranean_escape.jpg',
      price: '$540',
      description: 'Sail through world-renowned coastal wonders with secluded anchorage, private yacht tenders, and curated shore excursions.'
    },
    {
      slideNum: '03',
      totalSlides: '03',
      days: '8 Days',
      places: '9 Places',
      title: 'Alaskan Glacier Wonder',
      route: 'Seattle – Juneau – Skagway – Glacier Bay – Ketchikan',
      portTag: 'Expedition Port',
      portName: 'Hubbard Glacier Icefields',
      portDesc: 'Thunderous blue icefalls & whale sanctuaries',
      image: '/images/alaska_glacier.jpg',
      price: '$680',
      description: 'Witness calving glaciers and bald eagle sanctuaries from heated panoramic glass verandas and private zodiac excursions.'
    }
  ];

  // Comprehensive Catalog of Global Destinations
  const allDestinations = [
    {
      id: 'carib-01',
      category: 'caribbean',
      title: 'Bahamas Sun & Private Reefs',
      region: 'Bahamas & Keys',
      duration: '4 Days / 3 Nights',
      price: '$320',
      rating: 4.9,
      reviews: 340,
      image: '/images/stitch_tropical_caribbean.png',
      badge: 'Best Value',
      ports: ['Port of Miami', 'Nassau Blue Lagoon', 'Bimini Sands', 'Miami'],
      highlights: ['Catamaran Coral Snorkel', 'Private Island Cabana', 'Sunset Beach Gala']
    },
    {
      id: 'med-01',
      category: 'mediterranean',
      title: 'Amalfi Coast & Positano Escape',
      region: 'Western Mediterranean',
      duration: '7 Days / 6 Nights',
      price: '$540',
      rating: 4.8,
      reviews: 290,
      image: '/images/mediterranean_escape.jpg',
      badge: 'Most Popular',
      ports: ['Civitavecchia (Rome)', 'Naples', 'Positano Bay', 'Capri', 'Barcelona'],
      highlights: ['Michelin Cliffside Dining', 'Blue Grotto Tender', 'Grand Villa Tastings']
    },
    {
      id: 'alaska-01',
      category: 'alaska',
      title: 'Alaskan Glacier Bay & Wildlife',
      region: 'Alaska Fjords',
      duration: '8 Days / 7 Nights',
      price: '$680',
      rating: 4.9,
      reviews: 215,
      image: '/images/alaska_glacier.jpg',
      badge: 'Expedition',
      ports: ['Seattle', 'Juneau', 'Skagway', 'Glacier Bay', 'Ketchikan'],
      highlights: ['Helicopter Glacier Trek', 'Humpback Whale Watch', 'Salmon Bake Feast']
    },
    {
      id: 'med-02',
      category: 'mediterranean',
      title: 'Greek Isles & Santorini Blue Domes',
      region: 'Aegean Sea',
      duration: '7 Days / 6 Nights',
      price: '$590',
      rating: 4.9,
      reviews: 410,
      image: '/images/human_wonder.jpg',
      badge: 'Top Rated',
      ports: ['Piraeus (Athens)', 'Mykonos', 'Santorini (Oia)', 'Crete', 'Rhodes'],
      highlights: ['Oia Sunset Balcony', 'Ancient Delos Ruins', 'Private Beach Tender']
    },
    {
      id: 'carib-02',
      category: 'caribbean',
      title: 'Eastern Caribbean Jewel Islands',
      region: 'Caribbean Sea',
      duration: '7 Days / 6 Nights',
      price: '$480',
      rating: 4.8,
      reviews: 320,
      image: '/images/velvet_blue_hero.jpg',
      badge: 'Signature',
      ports: ['Fort Lauderdale', 'Philipsburg (St. Maarten)', 'St. Thomas', 'San Juan'],
      highlights: ['Bioluminescent Bay Kayak', 'Catamaran Champagne', 'Duty-Free Shopping']
    },
    {
      id: 'asia-01',
      category: 'asia',
      title: 'Tokyo & Mount Fuji Coastal Odyssey',
      region: 'Asia & Japan',
      duration: '9 Days / 8 Nights',
      price: '$890',
      rating: 4.9,
      reviews: 180,
      image: '/images/stitch_design_screen.png',
      badge: 'Cultural Wonder',
      ports: ['Yokohama (Tokyo)', 'Shimizu (Mt. Fuji)', 'Kyoto (Kobe)', 'Hiroshima'],
      highlights: ['Mt. Fuji Tea Ceremony', 'Kyoto Temple Garden', 'Kaiseki Master Dinner']
    },
    {
      id: 'arabian-01',
      category: 'arabian',
      title: 'Arabian Gulf & Dubai Golden Mirage',
      region: 'Arabian Gulf',
      duration: '6 Days / 5 Nights',
      price: '$620',
      rating: 4.9,
      reviews: 165,
      image: '/images/fresh_onboard_luxury.jpg',
      badge: 'Ultra Luxury',
      ports: ['Dubai Marina', 'Abu Dhabi (Louvre)', 'Sir Bani Yas Island', 'Muscat'],
      highlights: ['Desert Safari Luxury Camp', 'Private Yacht Marina Pass', 'Burj Khalifa VIP']
    },
    {
      id: 'carib-03',
      category: 'caribbean',
      title: 'Virgin Islands & St. Barts Yacht Run',
      region: 'Leeward Islands',
      duration: '6 Days / 5 Nights',
      price: '$520',
      rating: 5.0,
      reviews: 140,
      image: '/images/bahamas_tropical.jpg',
      badge: 'Boutique Cruise',
      ports: ['St. Thomas', 'St. John Trunk Bay', 'Tortola', 'Gustavia (St. Barts)'],
      highlights: ['Yacht Tender Beach Club', 'Caviar & Lobster Luncheon', 'Secluded Atoll Swim']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Destinations', icon: Globe2 },
    { id: 'caribbean', label: 'Caribbean & Bahamas', icon: Palmtree },
    { id: 'mediterranean', label: 'Mediterranean & Greece', icon: Sun },
    { id: 'alaska', label: 'Alaska & Fjords', icon: Mountain },
    { id: 'asia', label: 'Asia & Far East', icon: Compass },
    { id: 'arabian', label: 'Arabian Gulf & Dubai', icon: Anchor },
  ];

  const filteredDestinations = selectedCategory === 'all'
    ? allDestinations
    : allDestinations.filter(d => d.category === selectedCategory);

  const featured = featuredSlides[currentFeaturedIdx];

  const nextFeatured = () => {
    setCurrentFeaturedIdx((prev) => (prev + 1) % featuredSlides.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIdx((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-purpose="popular-destinations" id="destinations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 border border-ocean-200/60 px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-ocean-600" />
            <span>Popular Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Wake Up in a New Paradise Every Day
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Browse our global luxury routes. Hover over any destination card to flip and inspect day-by-day ports, inclusions, and instant booking rates.
          </p>
        </div>

        {/* Category Pill Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-deepnavy text-white shadow-md shadow-deepnavy/20 scale-105'
                    : 'bg-white text-slate-700 border-2 border-sky-100 hover:border-ocean-300 hover:bg-sky-50/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-ocean-300' : 'text-ocean-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Snapshot 01/02 Featured Showcase Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border-2 border-sky-200/80 rounded-[2.5rem] p-6 sm:p-10 mb-16 shadow-lg shadow-sky-100/30">
          
          {/* Left Column: Details & Trip Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4">
            <div>
              <div className="text-2xl font-bold text-slate-300 font-mono mb-6">
                {featured.slideNum}<span className="text-slate-400 font-light">/{featured.totalSlides}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  <Clock className="w-3 h-3 text-ocean-600" />
                  {featured.days}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  <Compass className="w-3 h-3 text-ocean-600" />
                  {featured.places}
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-deepnavy mb-1 tracking-tight font-sans">
                {featured.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 font-sans">
                {featured.route}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 pt-8">
              <button
                onClick={prevFeatured}
                aria-label="Previous destination"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-ocean-600 hover:text-white hover:border-ocean-600 transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFeatured}
                aria-label="Next destination"
                className="w-11 h-11 rounded-full bg-deepnavy border border-deepnavy flex items-center justify-center text-white hover:bg-ocean-700 transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Column: Visual Harbor Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ocean-900/15 aspect-[4/5] bg-ocean-100 border border-sky-100">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-ocean-300 block mb-0.5">
                  {featured.portTag}
                </span>
                <p className="text-xl font-bold font-sans">
                  {featured.portName}
                </p>
                <p className="text-xs text-blue-100/80 mt-0.5 font-light">
                  {featured.portDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Booking Action */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-4 text-left lg:text-right">
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs ml-auto font-light">
              {featured.description}
            </p>

            <div className="pt-8">
              <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">
                Starting from
              </span>
              <div className="text-4xl sm:text-5xl font-black text-deepnavy tracking-tight mb-4 font-sans">
                {featured.price}
              </div>
              <button
                onClick={() => onBookNow && onBookNow(featured.title, featured.price)}
                className="w-full sm:w-auto px-8 py-3.5 bg-deepnavy hover:bg-ocean-700 text-white rounded-full text-xs uppercase font-bold tracking-widest transition-all shadow-md active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>

        {/* Global Destinations Booking Grid with 3D Flip & Light Blue Borders */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ocean-600 block">Available Berths</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-deepnavy font-sans">
                Explore All Global Voyages ({filteredDestinations.length})
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">All-Inclusive Luxury Fares</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredDestinations.map((voyage) => (
              <div
                key={voyage.id}
                className="bg-white rounded-[2rem] p-4 border-2 border-sky-200/80 hover:border-ocean-500 shadow-md shadow-sky-100/40 hover:shadow-2xl hover:shadow-sky-200/40 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* 3D Flip Image Container */}
                <div className="relative h-60 w-full rounded-2xl mb-4 flip-card-container">
                  <div className="flip-card-inner">
                    
                    {/* FRONT of Voyage Card */}
                    <div className="flip-card-front bg-slate-100 relative border border-sky-100">
                      <Image
                        src={voyage.image}
                        alt={voyage.title}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/80 via-transparent to-black/20"></div>

                      {/* Top Badge */}
                      <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-deepnavy backdrop-blur-md shadow">
                        {voyage.badge}
                      </span>

                      {/* Flip Hint */}
                      <span className="absolute bottom-3 right-3 text-[10px] font-semibold text-white/90 bg-deepnavy/70 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        Hover Details
                      </span>
                    </div>

                    {/* BACK of Voyage Card (Revealed on hover) */}
                    <div className="flip-card-back bg-gradient-to-br from-deepnavy via-[#072443] to-ocean-900 text-white p-4 flex flex-col justify-between border border-ocean-400/40">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                          Ports of Call ({voyage.ports.length})
                        </span>
                        <div className="space-y-1 text-[11px] text-slate-200">
                          {voyage.ports.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-1.5 font-light">
                              <span className="w-1 h-1 rounded-full bg-cyan-300"></span>
                              <span className="truncate">{p}</span>
                            </div>
                          ))}
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-300 block mt-3 mb-1">
                          Top Highlights
                        </span>
                        <div className="space-y-1 text-[11px] text-slate-200">
                          {voyage.highlights.slice(0, 2).map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 font-light">
                              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onBookNow && onBookNow(voyage.title, voyage.price)}
                        className="w-full py-2 rounded-xl bg-ocean-500 hover:bg-ocean-400 text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1"
                      >
                        <span>Reserve Berth</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>

                {/* Card Content Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-1 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-deepnavy">{voyage.rating}</span>
                      <span className="text-[10px] text-slate-400">({voyage.reviews})</span>
                    </div>

                    <h4 className="text-base font-bold text-deepnavy group-hover:text-ocean-600 transition-colors font-sans line-clamp-1">
                      {voyage.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-light mt-0.5">
                      {voyage.duration} • {voyage.region}
                    </p>
                  </div>

                  {/* Price & Book Row */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">From</span>
                      <span className="text-lg font-black text-deepnavy font-sans">
                        {voyage.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onBookNow && onBookNow(voyage.title, voyage.price)}
                      className="px-4 py-2 rounded-full bg-deepnavy hover:bg-ocean-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                    >
                      Book
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
