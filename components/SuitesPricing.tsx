'use client';

import Image from 'next/image';
import { BedDouble, Check, Sparkles } from 'lucide-react';

interface SuitesPricingProps {
  onReserveSuite?: (suiteName: string, price: string) => void;
}

export default function SuitesPricing({ onReserveSuite }: SuitesPricingProps) {
  const handleReserve = (name: string, price: string) => {
    if (onReserveSuite) onReserveSuite(name, price);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-purpose="cabin-categories" id="staterooms">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 px-3 py-1 rounded-full mb-3">
              <BedDouble className="w-3.5 h-3.5 text-ocean-600" />
              <span>Accommodations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
              Luxury Cabins &amp; Staterooms
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed font-light">
            From full panoramic master suites with private teak balconies to serene staterooms, each space in the Oshin Shipping fleet is crafted for supreme rest.
          </p>
        </div>

        {/* Featured Hero Penthouse Ocean Suite */}
        <div className="bg-slate-50 rounded-[2.5rem] border-2 border-sky-200/90 hover:border-ocean-500 p-6 sm:p-8 mb-10 shadow-lg shadow-sky-100/40 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-slate-200 relative border border-sky-100">
              <Image
                src="/images/stitch_stateroom.png"
                alt="Royal Penthouse Ocean Suite Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-ocean-700 bg-ocean-100/70 px-2.5 py-1 rounded-full mb-3">
                  ★ Signature Suite
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-deepnavy font-sans">
                  Royal Penthouse Ocean Suite
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed font-light">
                  Floor-to-ceiling panoramic ocean balcony windows, Italian marble ensuite bathroom with jetted spa tub, handcrafted king bedding, and 24/7 private butler service.
                </p>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-2.5 mt-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-ocean-600 shrink-0" />
                    <span>850 sq.ft + 240 sq.ft Balcony</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-ocean-600 shrink-0" />
                    <span>Personal 24/7 Butler</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-ocean-600 shrink-0" />
                    <span>Complimentary Champagne Bar</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-ocean-600 shrink-0" />
                    <span>Priority VIP Disembarkation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">From</span>
                  <span className="text-3xl font-bold text-deepnavy font-sans">
                    $780 <span className="text-xs font-normal text-slate-500">/ night</span>
                  </span>
                </div>
                <button
                  onClick={() => handleReserve('Royal Penthouse Ocean Suite', '$780/night')}
                  className="px-7 py-3 bg-deepnavy hover:bg-ocean-700 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-md active:scale-95"
                >
                  Reserve Suite
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Stateroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-6 border-2 border-sky-200/80 hover:border-ocean-500 shadow-md shadow-sky-100/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase text-ocean-600 mb-1">Deck 8 – 11</div>
              <h4 className="text-xl font-bold text-deepnavy mb-2 font-sans">Deluxe Veranda Stateroom</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Private open-air glass veranda with comfortable deck seating, separate vanity area, and interactive smart stateroom controls.
              </p>
              <div className="space-y-1.5 mt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2"><span>•</span> 320 sq.ft with teak veranda</div>
                <div className="flex items-center gap-2"><span>•</span> Queen bed or two twin beds</div>
                <div className="flex items-center gap-2"><span>•</span> 24-hour in-room dining</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-deepnavy font-sans">
                $460 <span className="text-xs font-normal text-slate-500">/night</span>
              </span>
              <button
                onClick={() => handleReserve('Deluxe Veranda Stateroom', '$460/night')}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-deepnavy hover:text-white text-deepnavy text-xs font-bold uppercase transition-colors"
              >
                Select
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-6 border-2 border-sky-200/80 hover:border-ocean-500 shadow-md shadow-sky-100/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase text-ocean-600 mb-1">Deck 5 – 7</div>
              <h4 className="text-xl font-bold text-deepnavy mb-2 font-sans">Oceanview Horizon Stateroom</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Large picture window with sweeping sea views, plush lounge sofa, marble shower with rainfall fixtures, and luxury toiletries.
              </p>
              <div className="space-y-1.5 mt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2"><span>•</span> 260 sq.ft living area</div>
                <div className="flex items-center gap-2"><span>•</span> Large picture ocean window</div>
                <div className="flex items-center gap-2"><span>•</span> Daily housekeeping &amp; turndown</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-deepnavy font-sans">
                $380 <span className="text-xs font-normal text-slate-500">/night</span>
              </span>
              <button
                onClick={() => handleReserve('Oceanview Horizon Stateroom', '$380/night')}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-deepnavy hover:text-white text-deepnavy text-xs font-bold uppercase transition-colors"
              >
                Select
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-6 border-2 border-sky-200/80 hover:border-ocean-500 shadow-md shadow-sky-100/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase text-ocean-600 mb-1">Deck 4 – 6</div>
              <h4 className="text-xl font-bold text-deepnavy mb-2 font-sans">Classic Interior Luxury Cabin</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Quiet sanctuaries featuring virtual ocean displays, ambient circadian lighting, high-thread linens, and premium sound systems.
              </p>
              <div className="space-y-1.5 mt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2"><span>•</span> 210 sq.ft serene space</div>
                <div className="flex items-center gap-2"><span>•</span> Virtual HD ocean balcony stream</div>
                <div className="flex items-center gap-2"><span>•</span> Full access to all ship amenities</div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-deepnavy font-sans">
                $320 <span className="text-xs font-normal text-slate-500">/night</span>
              </span>
              <button
                onClick={() => handleReserve('Classic Interior Luxury Cabin', '$320/night')}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-deepnavy hover:text-white text-deepnavy text-xs font-bold uppercase transition-colors"
              >
                Select
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
