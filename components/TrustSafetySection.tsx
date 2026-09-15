'use client';

import { Waves, Users, ShieldCheck, Headset, Wifi, Anchor } from 'lucide-react';

export default function TrustSafetySection() {
  return (
    <section className="w-full py-16 bg-sky-50/50 dark:bg-[#081528] border-y border-sky-400/20 transition-colors duration-300">
      <div className="max-w-[88rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1a78b1]/10 dark:bg-sky-900/40 border border-sky-400/30 flex items-center justify-center text-[#1a78b1] dark:text-[#29aae0]">
              <Waves className="w-6 h-6" />
            </div>
            <h4 className="font-poppins text-lg font-bold text-[#0c274c] dark:text-white">
              Zero-Motion Dynamic Stabilizers
            </h4>
            <p className="font-poppins text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Equipped with active underwater gyroscopic stabilizing fins for imperceptible water motion across open seas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1a78b1]/10 dark:bg-sky-900/40 border border-sky-400/30 flex items-center justify-center text-[#1a78b1] dark:text-[#29aae0]">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-poppins text-lg font-bold text-[#0c274c] dark:text-white">
              1 : 1.2 Host to Guest Ratio
            </h4>
            <p className="font-poppins text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Exceptional nautical staffing delivers intuitive, whisper-quiet service anticipating your every preference.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1a78b1]/10 dark:bg-sky-900/40 border border-sky-400/30 flex items-center justify-center text-[#1a78b1] dark:text-[#29aae0]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-poppins text-lg font-bold text-[#0c274c] dark:text-white">
              Transparent All-Inclusive
            </h4>
            <p className="font-poppins text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              No hidden port surcharges, no specialty dining fees, and no gratuity envelopes. Pure, uncompromised peace of mind.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1a78b1]/10 dark:bg-sky-900/40 border border-sky-400/30 flex items-center justify-center text-[#1a78b1] dark:text-[#29aae0]">
              <Headset className="w-6 h-6" />
            </div>
            <h4 className="font-poppins text-lg font-bold text-[#0c274c] dark:text-white">
              24/7 Sovereign Concierge
            </h4>
            <p className="font-poppins text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Direct access to dedicated travel curators before, during, and after your voyage for seamless helicopter and shore transfers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
