'use client';

import { X, Calendar, MapPin, Anchor, Sparkles, Check, Clock } from 'lucide-react';

export interface DestinationItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  badge: string;
  description: string;
  itineraryDays: {
    day: number;
    title: string;
    description: string;
  }[];
}

interface ItineraryModalProps {
  item: DestinationItem | null;
  onClose: () => void;
  onBookNow: (item: DestinationItem) => void;
}

export default function ItineraryModal({ item, onClose, onBookNow }: ItineraryModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#151c26] text-slate-900 dark:text-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 flex flex-col">
        
        {/* Header with Background */}
        <div className="relative h-56 sm:h-64 w-full flex flex-col justify-end p-6 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-slate-200 hover:text-white hover:bg-slate-900 transition-all z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-2 text-white">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[10px] uppercase font-bold tracking-widest">
                {item.badge}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {item.duration}
              </span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold">{item.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {item.location}
            </p>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          <div>
            <h3 className="font-playfair text-lg font-bold text-amber-600 dark:text-amber-400 mb-2">Expedition Overview</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description} Experience ultimate tranquility, Michelin-starred meals, private Zodiac tenders, and daily butler assistance.
            </p>
          </div>

          {/* Day by Day Itinerary */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              Bespoke Daily Schedule
            </h3>

            <div className="space-y-3 pl-2 border-l-2 border-amber-500/30">
              {item.itineraryDays.map((d) => (
                <div key={d.day} className="relative pl-6 space-y-1">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[9px] font-bold text-slate-950">
                    {d.day}
                  </div>
                  <h4 className="font-jakarta text-sm font-bold text-slate-800 dark:text-slate-200">
                    Day {d.day}: {d.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-slate-100 dark:bg-slate-800/60 p-4 rounded-xl space-y-2 border border-slate-200 dark:border-slate-700">
            <h4 className="font-jakarta text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Included In Your Fare
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>All 6 Michelin-caliber dining venues</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sommelier selected cellared wines & spirits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24-Hour dedicated suite butler</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Guided Zodiac island & reef excursions</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#0c141e] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-jakarta text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Starting From
            </span>
            <span className="font-playfair text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400">
              {item.price} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ guest</span>
            </span>
          </div>

          <button
            onClick={() => onBookNow(item)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-jakarta text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_0_24px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book This Voyage</span>
          </button>
        </div>

      </div>
    </div>
  );
}
