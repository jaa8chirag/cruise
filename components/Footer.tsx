'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#6493BE] via-[#3B6E9C] to-[#0A2E52] text-white pt-20 pb-12 overflow-hidden" data-purpose="grand-footer">
      
      {/* Big Ocean Ripple Background */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-20">
        <Image
          src="/images/velvet_blue_hero.jpg"
          alt="Rolling sea waves background"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Centered Stay on Radar CTA */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 drop-shadow-sm font-sans">
            Stay on the Radar
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/90 mb-6 font-light">
            Join Oshin Shipping&apos;s guest list for exclusive seasonal fares, priority berths, and new route announcements.
          </p>

          {/* Centered Pill Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex items-center glass-nav p-1.5 rounded-full max-w-md mx-auto shadow-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none border-none font-sans"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-deepnavy hover:bg-ocean-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm font-sans"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="glass-nav p-3 rounded-full max-w-md mx-auto text-xs font-bold text-deepnavy shadow-xl">
              ✓ You are on our VIP radar. Thank you!
            </div>
          )}
        </div>

        {/* Quick Nav & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/20 pt-8 pb-6 gap-4 text-xs font-medium text-blue-100">
          <div className="flex items-center gap-6">
            <a href="#itinerary" className="hover:text-white transition-colors">Full Itinerary</a>
            <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
            <a href="#staterooms" className="hover:text-white transition-colors">Staterooms</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#insights" className="hover:text-white transition-colors">Tips</a>
          </div>

          <div className="flex items-center gap-4 text-sm">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="w-full flex justify-center select-none pointer-events-none mt-4 overflow-hidden">
          <span className="font-watermark text-[14vw] leading-none text-white/15 tracking-tighter whitespace-nowrap">
            Oshin Shipping
          </span>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-[11px] text-blue-200/60 mt-4 font-light">
          © 2026 Oshin Shipping Luxury Ocean Voyages Inc. All rights reserved. Precision craftsmanship on the high seas.
        </div>

      </div>
    </footer>
  );
}
