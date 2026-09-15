'use client';

import Image from 'next/image';
import { 
  Sparkles, 
  Compass, 
  Palmtree, 
  BedDouble, 
  Users, 
  Anchor, 
  Camera, 
  Wine, 
  Mountain, 
  MapPin, 
  Glasses, 
  Ship,
  Globe2,
  Heart
} from 'lucide-react';

export default function EmotionalWorldSection() {
  const pillars = [
    {
      title: 'Expansive Coastlines',
      subtitle: 'Untamed ocean vistas & endless horizons',
      image: '/images/mediterranean_escape.jpg',
      tag: 'Expedition'
    },
    {
      title: 'Bright Destinations',
      subtitle: 'Iconic sun-drenched coastal harbors',
      image: '/images/human_wonder.jpg',
      tag: 'Mediterranean'
    },
    {
      title: 'Human Wonder',
      subtitle: 'Inspiring cliffside terraces & azure waters',
      image: '/images/human_wonder_santorini.jpg',
      tag: 'Discovery'
    },
    {
      title: 'Fresh Onboard Luxury',
      subtitle: 'Residential suites with private ocean verandas',
      image: '/images/fresh_onboard_luxury.jpg',
      tag: 'Luxury Suites'
    },
    {
      title: 'Authentic Moments',
      subtitle: 'Shared champagne sunsets & unforgettable memories',
      image: '/images/authentic_moments.jpg',
      tag: 'Family & Loved Ones'
    },
  ];

  const shapes = [
    { name: 'Expedition', icon: Mountain, color: 'from-blue-600 to-cyan-500' },
    { name: 'Mediterranean', icon: Compass, color: 'from-sky-500 to-blue-600' },
    { name: 'Tropical', icon: Palmtree, color: 'from-teal-500 to-emerald-500' },
    { name: 'Luxury Suites', icon: BedDouble, color: 'from-amber-500 to-yellow-500' },
    { name: 'Family Fun', icon: Users, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section id="moodboard" className="relative w-full py-20 bg-[#fafafa] dark:bg-[#070f19] border-t border-b border-sky-400/20 overflow-hidden transition-colors duration-300">
      
      {/* Soft Ambient Ocean Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#a9f6fb]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#1a78b1]/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-[88rem] mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/70 border border-[#29aae0]/30 text-[#1a78b1] dark:text-[#29aae0] text-xs font-poppins font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f7b339]" />
            <span>Visual Mood Board & Photography Direction</span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-[#0c274c] dark:text-white tracking-tight">
            The Emotional World of <span className="text-[#29aae0]">Ocean Voyage</span>
          </h2>

          <p className="font-poppins text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Every moment at sea is curated around optimism, modern openness, and genuine connection. Explore the five photographic pillars of our guest experience.
          </p>
        </div>

        {/* 5 Photography Pillars Row matching Mood Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0c274c] border border-slate-200 dark:border-sky-500/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover object-center group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c]/90 via-[#0c274c]/20 to-transparent"></div>
                
                {/* Floating pill tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-[#081528]/90 backdrop-blur-md text-[10px] font-bold text-[#1a78b1] dark:text-[#a9f6fb] border border-sky-400/30">
                    {pillar.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-bold text-base text-[#0c274c] dark:text-white group-hover:text-[#29aae0] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-poppins text-xs text-slate-500 dark:text-slate-300 mt-1 leading-normal">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shapes & Details Grid with Vignettes and Handwritten Badge */}
        <div className="p-6 md:p-10 rounded-3xl bg-white/90 dark:bg-[#0c274c]/60 backdrop-blur-xl border border-slate-200 dark:border-sky-500/20 shadow-xl space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-sky-500/20 pb-6">
            <div>
              <span className="text-xs font-bold text-[#29aae0] uppercase tracking-wider">Shapes & Details</span>
              <h3 className="font-poppins font-bold text-2xl text-[#0c274c] dark:text-white">
                Vibrant Experiences & Iconic Motifs
              </h3>
            </div>
            
            {/* Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {shapes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/50 border border-sky-400/20 text-xs font-semibold text-[#0c274c] dark:text-slate-200 hover:border-[#29aae0] transition-colors cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#29aae0]" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vignette Collage & Stat Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Vignettes: Circular & Oval Frames from Moodboard */}
            <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
              
              {/* Circular Vignette 1: Cruise Liner Sailing */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-[#1a78b1] shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/velvet_blue_hero.jpg"
                  alt="Cruise liner sailing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Oval/Pill Vignette 2: Coastal Bay */}
              <div className="relative w-32 h-44 sm:w-36 sm:h-52 rounded-[2.5rem] overflow-hidden border-4 border-[#29aae0] shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/mediterranean_escape.jpg"
                  alt="Positano Bay"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Circular Vignette 3: Santorini Blue Dome */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#f7b339] shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/human_wonder_santorini.jpg"
                  alt="Santorini cliff"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Right: Handwritten Accent & Stat Cards */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center gap-6">
                {/* Handwritten Wavy Badge: "Sailing is a journey" */}
                <div className="relative px-6 py-4 rounded-3xl bg-gradient-to-tr from-sky-100 to-[#a9f6fb]/50 dark:from-[#081528] dark:to-sky-950/80 border-2 border-dashed border-[#29aae0] shadow-sm transform -rotate-2">
                  <span className="font-editorial-accent text-2xl sm:text-3xl text-[#1a78b1] dark:text-[#a9f6fb] font-semibold">
                    Sailing is a journey
                  </span>
                  <div className="w-16 h-1 bg-[#f7b339] rounded-full mt-1"></div>
                </div>

                {/* Micro Brand Quote */}
                <p className="text-xs text-slate-500 dark:text-slate-300 italic max-w-xs">
                  “The sea, once it casts its spell, holds one in its net of wonder forever.”
                </p>
              </div>

              {/* Stat Counters matching Mood Board */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                
                <div className="p-4 rounded-2xl bg-white dark:bg-[#081528] border border-sky-400/25 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 text-[#1a78b1] dark:text-[#29aae0] flex items-center justify-center mx-auto mb-2">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="font-poppins font-black text-xl sm:text-2xl text-[#0c274c] dark:text-white">
                    30k+
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Voyages Sailed
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#081528] border border-sky-400/25 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 text-[#1a78b1] dark:text-[#29aae0] flex items-center justify-center mx-auto mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-poppins font-black text-xl sm:text-2xl text-[#0c274c] dark:text-white">
                    5480+
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Happy Travelers
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#081528] border border-sky-400/25 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/40 text-[#1a78b1] dark:text-[#29aae0] flex items-center justify-center mx-auto mb-2">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="font-poppins font-black text-xl sm:text-2xl text-[#0c274c] dark:text-white">
                    25+
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Destinations
                  </div>
                </div>

              </div>

              {/* Minimal Line Art Icons Row from Mood Board */}
              <div className="flex items-center justify-around pt-3 text-slate-400 dark:text-sky-300/60 border-t border-slate-100 dark:border-sky-500/20">
                <Ship className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Cruise Ship" />
                <Palmtree className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Tropical Island" />
                <Camera className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Photography" />
                <Wine className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Sunset Cocktails" />
                <Mountain className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Expeditions" />
                <Anchor className="w-5 h-5 hover:text-[#29aae0] transition-colors" title="Ports of Call" />
              </div>

            </div>

          </div>

          {/* Coastal Harbor Skyline Graphic Silhouette from Mood Board */}
          <div className="w-full pt-4 opacity-40 dark:opacity-30 flex justify-center">
            <svg className="w-full max-w-3xl h-14 text-[#29aae0]" viewBox="0 0 800 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,60 L20,60 L20,45 L35,45 L35,38 L45,38 L45,30 L55,30 L55,42 L70,42 L70,52 L90,52 L90,60 L140,60 L140,48 L150,48 L150,40 L165,40 L165,22 L175,22 L175,15 L180,15 L180,22 L190,22 L190,48 L210,48 L210,60 L260,60 L260,50 L275,50 L275,35 L285,35 L285,25 L300,25 L300,50 L320,50 L320,60 L380,60 L380,45 L400,45 L400,32 L415,32 L415,20 L425,20 L425,10 L430,10 L430,20 L440,20 L440,45 L460,45 L460,60 L510,60 L510,48 L530,48 L530,35 L545,35 L545,52 L565,52 L565,60 L620,60 L620,42 L635,42 L635,28 L645,28 L645,18 L655,18 L655,28 L665,28 L665,42 L685,42 L685,60 L740,60 L740,48 L755,48 L755,36 L770,36 L770,54 L800,54 L800,60 Z" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
