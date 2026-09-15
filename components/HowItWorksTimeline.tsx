'use client';

import Image from 'next/image';
import { CheckSquare } from 'lucide-react';

interface HowItWorksTimelineProps {
  onBookNow?: () => void;
}

export default function HowItWorksTimeline({ onBookNow }: HowItWorksTimelineProps) {
  return (
    <section className="py-24 bg-white" data-purpose="process-steps" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 px-3 py-1 rounded-full mb-3">
            <CheckSquare className="w-3.5 h-3.5 text-ocean-600" />
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Seamless From Start to Sea
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            Unpack once and let the world drift by your window. From sun-drenched islands to turquoise frontiers, your next story begins here.
          </p>
        </div>

        {/* 3-Step Timeline with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center mb-3 font-sans">
              1
            </span>
            <h3 className="text-lg font-bold text-deepnavy font-sans">Pick Your Voyage</h3>
            <p className="text-xs text-slate-500 mt-1 mb-5 font-light">
              Browse destinations and filter by date to find your perfect itinerary.
            </p>
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
              <Image
                src="/images/stitch_tropical_caribbean.png"
                alt="Tropical destination port"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100 mb-5 order-last md:order-first">
              <Image
                src="/images/stitch_stateroom.png"
                alt="Cabin stateroom luxury interior"
                fill
                className="object-cover"
              />
            </div>
            <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center mb-3 font-sans">
              2
            </span>
            <h3 className="text-lg font-bold text-deepnavy font-sans">Book Your Cabin</h3>
            <p className="text-xs text-slate-500 mt-1 mb-2 md:mb-5 font-light">
              Select your preferred room type and secure your spot instantly online.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center mb-3 font-sans">
              3
            </span>
            <h3 className="text-lg font-bold text-deepnavy font-sans">Set Sail</h3>
            <p className="text-xs text-slate-500 mt-1 mb-5 font-light">
              Receive your e-tickets and get ready for the vacation of a lifetime.
            </p>
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
              <Image
                src="/images/stitch_infinity_pool.png"
                alt="Cruise ocean infinity pool deck"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        <div className="mt-14 text-center">
          <button
            onClick={onBookNow}
            className="px-8 py-3.5 bg-deepnavy hover:bg-ocean-700 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 inline-block"
          >
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}
