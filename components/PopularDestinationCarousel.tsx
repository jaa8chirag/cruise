'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

interface PopularDestinationCarouselProps {
  onBookNow?: (destination: string, price: string) => void;
}

export default function PopularDestinationCarousel({ onBookNow }: PopularDestinationCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      slideNum: '01',
      totalSlides: '02',
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
      totalSlides: '02',
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
    }
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-purpose="popular-destinations" id="destinations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag & Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 border border-ocean-200/60 px-3.5 py-1.5 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-ocean-600" />
            <span>Popular Destination</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Wake Up in a New Paradise Every Day
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Unpack once and let the world drift by your window. From sun-drenched tropical islands to turquoise bays, your next journey begins here.
          </p>

          <div className="mt-5">
            <a
              href="#itinerary"
              className="px-6 py-2 rounded-full bg-deepnavy text-white text-xs font-semibold uppercase tracking-widest hover:bg-ocean-700 transition-colors shadow-sm inline-block"
            >
              Explore All
            </a>
          </div>
        </div>

        {/* Showcase Layout (Snapshot 01/02 Carousel Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 border border-slate-200/70 rounded-[2.5rem] p-6 sm:p-10 transition-all">
          
          {/* Left Column: Details & Trip Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4">
            <div>
              <div className="text-2xl font-bold text-slate-300 font-mono mb-6">
                {slide.slideNum}<span className="text-slate-400 font-light">/{slide.totalSlides}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  <Clock className="w-3 h-3 text-ocean-600" />
                  {slide.days}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  <Compass className="w-3 h-3 text-ocean-600" />
                  {slide.places}
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-deepnavy mb-1 tracking-tight font-sans">
                {slide.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 font-sans">
                {slide.route}
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 pt-8">
              <button
                onClick={prevSlide}
                aria-label="Previous destination"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-ocean-600 hover:text-white hover:border-ocean-600 transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next destination"
                className="w-11 h-11 rounded-full bg-deepnavy border border-deepnavy flex items-center justify-center text-white hover:bg-ocean-700 transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Column: Visual Harbor Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ocean-900/15 aspect-[4/5] bg-ocean-100">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepnavy/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-ocean-300 block mb-0.5">
                  {slide.portTag}
                </span>
                <p className="text-xl font-bold font-sans">
                  {slide.portName}
                </p>
                <p className="text-xs text-blue-100/80 mt-0.5 font-light">
                  {slide.portDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Booking Action */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-4 text-left lg:text-right">
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs ml-auto font-light">
              {slide.description}
            </p>

            <div className="pt-8">
              <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">
                Starting from
              </span>
              <div className="text-4xl sm:text-5xl font-black text-deepnavy tracking-tight mb-4 font-sans">
                {slide.price}
              </div>
              <button
                onClick={() => onBookNow && onBookNow(slide.title, slide.price)}
                className="w-full sm:w-auto px-8 py-3.5 bg-deepnavy hover:bg-ocean-700 text-white rounded-full text-xs uppercase font-bold tracking-widest transition-all shadow-md active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
