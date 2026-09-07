'use client';

import { ShieldCheck, Anchor, Lock, Star, Award } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer id="society" className="w-full bg-slate-100 dark:bg-[#070f19] border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-[88rem] mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Left Column: Gazette Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-8">
            <div className="space-y-3">
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
                PRIVATE DISPATCH
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold">The Aurelia Gazette</h3>
              <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Receive bespoke nautical itineraries, preview private deck configurations, and access unlisted charter expeditions across remote archipelagoes.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="mt-6 flex max-w-md items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email"
                  className="w-full bg-white dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-l-lg text-xs focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-slate-950 font-jakarta text-xs uppercase tracking-widest px-6 py-3 rounded-r-lg font-bold hover:bg-amber-400 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="mt-6 p-3 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 font-jakarta text-xs font-bold">
                ✓ You are now subscribed to The Aurelia Gazette.
              </div>
            )}
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Nav 1 */}
            <div className="space-y-3">
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.2em] uppercase font-bold block">
                THE FLEET
              </span>
              <ul className="space-y-2 font-jakarta text-xs text-slate-600 dark:text-slate-400">
                <li className="hover:text-amber-500 transition-colors"><a href="#">Aurelia Sovereign</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Aurelia Celestia</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Aurelia Aurora Borealis</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Private Zodiac Expeditions</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Deck & Helipad Specs</a></li>
              </ul>
            </div>

            {/* Nav 2 */}
            <div className="space-y-3">
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.2em] uppercase font-bold block">
                GLOBAL PASSAGES
              </span>
              <ul className="space-y-2 font-jakarta text-xs text-slate-600 dark:text-slate-400">
                <li className="hover:text-amber-500 transition-colors"><a href="#destinations">Mediterranean Grand Tour</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#destinations">Lakshadweep Coral Atolls</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#destinations">Goa Sundowner Passage</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#destinations">Maldives Lagoon Odyssey</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#destinations">Dubai Royal Passage</a></li>
              </ul>
            </div>

            {/* Nav 3 */}
            <div className="space-y-3">
              <span className="font-jakarta text-xs text-amber-600 dark:text-amber-400 tracking-[0.2em] uppercase font-bold block">
                CONCIERGE & STATUTE
              </span>
              <ul className="space-y-2 font-jakarta text-xs text-slate-600 dark:text-slate-400">
                <li className="hover:text-amber-500 transition-colors"><a href="#suites">Stateroom Selection</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#experience">Michelin Dining Atelier</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Private Air Transfers</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Maritime Registry</a></li>
                <li className="hover:text-amber-500 transition-colors"><a href="#">Terms of Charter</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Certifications & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-600 dark:text-slate-400 font-jakarta text-xs">
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span className="uppercase font-bold tracking-wider">SOLAS Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="uppercase font-bold tracking-wider">Lloyd's Register A1+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-amber-500" />
              <span className="uppercase font-bold tracking-wider">256-Bit Escrow Vault</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="uppercase font-bold tracking-wider">Forbes 5-Star Nautical</span>
            </div>
          </div>

          <div className="text-right">
            <p>© 2025 Aurelia Ocean Voyages Ltd. Monaco • London • Singapore. All rights reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
