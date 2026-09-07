'use client';

import { Waves, Users, ShieldCheck, Headset } from 'lucide-react';

export default function TrustSafetySection() {
  return (
    <section className="w-full py-16 bg-slate-200/50 dark:bg-[#19202b] border-y border-slate-300 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[88rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Waves className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-slate-900 dark:text-slate-100">
              Zero-Motion Dynamic Stabilization
            </h4>
            <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Equipped with state-of-the-art Rolls-Royce active dynamic fins for imperceptible water motion across open oceans.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-slate-900 dark:text-slate-100">
              1 : 1.2 Host to Guest Ratio
            </h4>
            <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Unrivaled maritime staffing delivers intuitive, whisper-quiet service anticipating your desires without imposition.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-slate-900 dark:text-slate-100">
              All-Inclusive Purity
            </h4>
            <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              No surprise port levies, no dining surcharges, no gratuity envelopes. True uncompromised peace of mind from embarkation.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Headset className="w-6 h-6" />
            </div>
            <h4 className="font-playfair text-xl font-bold text-slate-900 dark:text-slate-100">
              24/7 Sovereign Concierge
            </h4>
            <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Direct access to dedicated travel curators before, during, and after your expedition for seamless transitions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
