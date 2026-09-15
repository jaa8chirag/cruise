'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onBookClick?: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 px-4 sm:px-8 transition-all duration-300 ${
        scrolled ? 'pt-3 pb-2' : 'pt-5 pb-3'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-nav px-5 py-3 rounded-full shadow-lg shadow-black/5 transition-all duration-300 border border-white/60">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-ocean-700 via-ocean-500 to-ocean-300 flex items-center justify-center text-white shadow-md shadow-ocean-500/20 group-hover:scale-105 transition-transform duration-300">
            <svg 
              className="w-6 h-6 transform -rotate-12" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.2" 
              viewBox="0 0 24 24"
            >
              <path d="M2 12c3-3 6-3 9 0s6 3 9 0"></path>
              <path d="M4 16c2.5-2 5-2 7.5 0s5 2 7.5 0"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-deepnavy font-sans">
            Oshin <span className="text-ocean-600 font-medium">Shipping</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#itinerary" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Full Itinerary
          </a>
          <a href="#destinations" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Destinations
          </a>
          <a href="#staterooms" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Staterooms
          </a>
          <a href="#features" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Ship Deck
          </a>
          <a href="#gallery" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Gallery
          </a>
          <a href="#insights" className="hover:text-ocean-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ocean-600 hover:after:w-full after:transition-all">
            Insights
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="#itinerary"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-700 bg-white/80 border border-slate-200/80 hover:bg-slate-50 transition-all shadow-sm"
          >
            View Route
          </a>
          <button 
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-deepnavy hover:bg-ocean-800 transition-all shadow-md shadow-deepnavy/20 hover:shadow-lg hover:shadow-ocean-900/30 active:scale-95 flex items-center gap-1.5"
          >
            <span>Book Voyage</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-ocean-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto glass-nav p-6 rounded-3xl shadow-2xl border border-white/80 space-y-4 animate-fadeIn">
          <a
            href="#itinerary"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2 border-b border-slate-100"
          >
            Full Itinerary
          </a>
          <a
            href="#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2 border-b border-slate-100"
          >
            Destinations
          </a>
          <a
            href="#staterooms"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2 border-b border-slate-100"
          >
            Staterooms
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2 border-b border-slate-100"
          >
            Ship Deck
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2 border-b border-slate-100"
          >
            Gallery
          </a>
          <a
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold py-2"
          >
            Insights
          </a>
        </div>
      )}

    </header>
  );
}
