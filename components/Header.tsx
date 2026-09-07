'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Phone, Menu, X, Anchor, Compass, Sparkles } from 'lucide-react';

interface HeaderProps {
  onReserveClick?: () => void;
}

export default function Header({ onReserveClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#070f19]/85 backdrop-blur-2xl border-b border-amber-500/20 shadow-lg transition-colors duration-300">
      <div className="h-20 max-w-[88rem] mx-auto px-4 md:px-8 flex items-center justify-between gap-6">
        
        {/* Brand Emblem & Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0c141e] rounded-full flex items-center justify-center">
              <Anchor className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-playfair text-xl tracking-[0.2em] font-bold text-slate-900 dark:text-slate-100 uppercase">
              Aurelia
            </span>
            <span className="font-jakarta text-[10px] tracking-[0.28em] text-amber-600 dark:text-amber-400 font-semibold uppercase -mt-1">
              Ocean Voyages
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#destinations" className="text-amber-600 dark:text-amber-400 border-b-2 border-amber-500 py-1 transition-colors">
            Destinations
          </a>
          <a href="#fleet" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 py-1 transition-colors">
            The Fleet
          </a>
          <a href="#suites" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 py-1 transition-colors">
            Suites & Penthouses
          </a>
          <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 py-1 transition-colors">
            Culinary & Wellness
          </a>
          <a href="#society" className="text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 py-1 transition-colors">
            Sovereign Society
          </a>
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Hotline */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800/60 border border-amber-500/20 rounded-full text-slate-700 dark:text-slate-300 text-xs tracking-wider">
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-semibold">+1 (800) AURELIA</span>
          </div>

          {/* Theme Mode Switcher */}
          <ThemeToggle />

          {/* Reserve CTA Button */}
          <button
            onClick={onReserveClick}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-jakarta text-xs uppercase tracking-[0.14em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserve Voyage</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-amber-500"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-[#070f19]/95 border-b border-amber-500/20 px-6 py-6 space-y-4 backdrop-blur-xl animate-fadeIn">
          <a
            href="#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-600 dark:text-amber-400 font-medium py-2 border-b border-slate-200 dark:border-slate-800"
          >
            Destinations
          </a>
          <a
            href="#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-amber-500 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            The Fleet
          </a>
          <a
            href="#suites"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-amber-500 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            Suites & Penthouses
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-amber-500 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            Culinary & Wellness
          </a>
          <a
            href="#society"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 dark:text-slate-200 hover:text-amber-500 py-2"
          >
            Sovereign Society
          </a>
          <div className="pt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              +1 (800) AURELIA
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
