'use client';

import Image from 'next/image';
import { ArrowRight, Award } from 'lucide-react';

interface HeroSectionProps {
  onExploreRoute?: () => void;
  onViewSuites?: () => void;
}

export default function HeroSection({ onExploreRoute, onViewSuites }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-[96vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#5287b3] via-[#3a75a7] to-[#124270]" 
      data-purpose="hero-section"
    >
      {/* Ambient Ocean Backdrop with cruise liner */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/velvet_blue_hero.jpg"
          alt="Oshin Shipping Ocean Vista and Luxury Liner"
          fill
          priority
          className="object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#072443]/85 via-black/20 to-[#072443]/40"></div>
      </div>

      {/* Elegant Kinetic Watermark in Background */}
      <div className="absolute inset-x-0 bottom-24 sm:bottom-28 z-[2] select-none pointer-events-none overflow-hidden opacity-25">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-watermark text-[11vw] leading-none uppercase tracking-tight text-white font-extrabold px-8">
            Oshin Shipping
          </span>
          <span className="font-watermark text-[11vw] leading-none uppercase tracking-tight text-white font-extrabold px-8">
            Luxury Ocean Voyages
          </span>
          <span className="font-watermark text-[11vw] leading-none uppercase tracking-tight text-white font-extrabold px-8">
            Oshin Shipping
          </span>
          <span className="font-watermark text-[11vw] leading-none uppercase tracking-tight text-white font-extrabold px-8">
            Luxury Ocean Voyages
          </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-12 flex-1 flex flex-col items-center justify-start">
        
        {/* Award Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-sm mb-6 text-xs sm:text-sm font-medium tracking-wide">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-100"></span>
          </span>
          <Award className="w-4 h-4 text-white/90" />
          <span>Best Luxury Cruise Line 2026</span>
        </div>

        {/* Hero Headline */}
        <div className="animate-fadeSlideUp max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.15] hero-title-shadow font-sans">
            Wake Up in a New Paradise Every Day
          </h1>

          {/* Animated tag line / rotating focus */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-ocean-200 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-ocean-300 animate-ping"></span>
            <span>Royal Caribbean • Mediterranean Horizons • Secret Atolls</span>
          </div>
        </div>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-50/95 max-w-2xl font-light leading-relaxed drop-shadow-md">
          Experience the freedom of the open ocean with Oshin Shipping. Where every nautical mile is an extraordinary story of elegance and bespoke hospitality.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          <a
            href="#itinerary"
            onClick={onExploreRoute}
            className="px-8 py-3.5 rounded-full bg-deepnavy hover:bg-black text-white text-sm font-semibold tracking-wider transition-all duration-300 shadow-xl shadow-deepnavy/40 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <span>Explore Route</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#staterooms"
            onClick={onViewSuites}
            className="px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-sm font-semibold tracking-wider transition-all duration-300"
          >
            View Suites
          </a>
        </div>
      </div>

      {/* Bottom Ocean Stats Bar */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full pt-8 sm:pt-6">
        <div className="grid grid-cols-3 divide-x divide-white/20 hero-stat-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white text-center shadow-2xl backdrop-blur-md">
          {/* Metric 1 */}
          <div className="px-2 sm:px-6">
            <span className="block text-xs sm:text-sm font-light text-blue-100/80 mb-1">
              Happy Travelers
            </span>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-0.5 font-sans">
              50<span className="text-ocean-300">k+</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="px-2 sm:px-6">
            <span className="block text-xs sm:text-sm font-light text-blue-100/80 mb-1">
              Global Destinations
            </span>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-0.5 font-sans">
              120<span className="text-ocean-300">+</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="px-2 sm:px-6">
            <span className="block text-xs sm:text-sm font-light text-blue-100/80 mb-1">
              Satisfaction Rate
            </span>
            <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-0.5 font-sans">
              98<span className="text-ocean-300">%</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
