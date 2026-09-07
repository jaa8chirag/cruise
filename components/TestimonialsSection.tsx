'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 max-w-[88rem] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
          CRITICAL ACCLAIM
        </span>
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
          A Symphony of Praise
        </h2>
        <p className="font-jakarta text-slate-600 dark:text-slate-400 text-sm md:text-base">
          Words from the global press and private voyagers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Quote 1 */}
        <div className="bg-white dark:bg-[#151c26] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="text-amber-500 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="font-playfair text-base md:text-lg text-slate-800 dark:text-slate-200 font-light italic leading-relaxed">
              “Aurelia redefines nautical hospitality. The Lakshadweep passage felt less like a cruise and more like an intimate grand yacht charter with Michelin-pedigree dining at every single meal.”
            </blockquote>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="font-playfair font-bold text-slate-900 dark:text-slate-100">Condé Nast Traveler</p>
            <span className="font-jakarta text-[11px] text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Gold List 2025 Best Maritime Experience
            </span>
          </div>
        </div>

        {/* Quote 2 */}
        <div className="bg-white dark:bg-[#151c26] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="text-amber-500 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="font-playfair text-base md:text-lg text-slate-800 dark:text-slate-200 font-light italic leading-relaxed">
              “From the zero-noise stabilization to the private butler service who arranged our secluded sunset sandbank in Kadmat, Aurelia is without peer in the Indian Ocean.”
            </blockquote>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="font-playfair font-bold text-slate-900 dark:text-slate-100">Sir David & Lady Sterling</p>
            <span className="font-jakarta text-[11px] text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Horizon Penthouse • Mumbai-Dubai Voyage
            </span>
          </div>
        </div>

        {/* Quote 3 */}
        <div className="bg-white dark:bg-[#151c26] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="text-amber-500 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="font-playfair text-base md:text-lg text-slate-800 dark:text-slate-200 font-light italic leading-relaxed">
              “The quiet luxury design aesthetic—midnight wood, brushed brass, and vast sea view glazing—sets the benchmark for modern expedition vessels.”
            </blockquote>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <p className="font-playfair font-bold text-slate-900 dark:text-slate-100">Robb Report</p>
            <span className="font-jakarta text-[11px] text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Superyacht Design of the Year
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
