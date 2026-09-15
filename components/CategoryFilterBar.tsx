'use client';

import { useState } from 'react';
import { 
  Palmtree, 
  Mountain, 
  Sun, 
  Landmark, 
  Castle, 
  Compass, 
  Globe2, 
  ChevronDown,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

interface CategoryFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  duration: string;
  onSelectDuration: (duration: string) => void;
  region: string;
  onSelectRegion: (region: string) => void;
  sortBy: string;
  onSelectSortBy: (sort: string) => void;
}

export default function CategoryFilterBar({
  selectedCategory,
  onSelectCategory,
  duration,
  onSelectDuration,
  region,
  onSelectRegion,
  sortBy,
  onSelectSortBy,
}: CategoryFilterBarProps) {
  const categories = [
    { id: 'all', name: 'All Regions', icon: Globe2 },
    { id: 'bahamas', name: 'Bahamas', icon: Palmtree },
    { id: 'alaska', name: 'Alaska', icon: Mountain },
    { id: 'caribbean', name: 'Caribbean', icon: Sun },
    { id: 'europe', name: 'Europe', icon: Landmark },
    { id: 'asia', name: 'Asia', icon: Castle },
    { id: 'australia', name: 'Australia', icon: Compass },
  ];

  return (
    <div className="w-full max-w-[88rem] mx-auto px-4 md:px-8 pt-10 pb-6 space-y-6">
      
      {/* Category Pill Icons - Exactly matching the Mood Board DNA */}
      <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-center min-w-[5.25rem] px-4 py-3 rounded-2xl border transition-all duration-300 group ${
                isActive
                  ? 'bg-white dark:bg-[#0c274c] border-[#29aae0] shadow-[0_8px_24px_rgba(41,170,224,0.25)] -translate-y-1'
                  : 'bg-white/80 dark:bg-[#0c274c]/50 border-slate-200 dark:border-sky-500/20 hover:border-[#29aae0]/60 hover:bg-sky-50/50 dark:hover:bg-sky-950/40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-1.5 transition-colors ${
                  isActive
                    ? 'bg-[#29aae0] text-white shadow-md'
                    : 'bg-sky-100 dark:bg-sky-900/50 text-[#1a78b1] dark:text-[#29aae0] group-hover:scale-110'
                }`}
              >
                <Icon className="w-5 h-5 transition-transform" />
              </div>
              <span
                className={`text-xs font-poppins font-bold tracking-tight text-center ${
                  isActive
                    ? 'text-[#0c274c] dark:text-white'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter Dropdown Controls Bar matching the Mood Board */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#0c274c]/70 backdrop-blur-md border border-slate-200 dark:border-sky-500/20 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0c274c] dark:text-slate-200 uppercase tracking-wider">
          <SlidersHorizontal className="w-4 h-4 text-[#29aae0]" />
          <span>Refine Search</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Duration Selector */}
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-slate-400 block -mb-0.5">Duration</label>
            <select
              value={duration}
              onChange={(e) => onSelectDuration(e.target.value)}
              className="bg-sky-50/70 dark:bg-[#081528] border border-sky-400/20 rounded-xl px-3 py-1.5 text-xs font-semibold text-[#0c274c] dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0] cursor-pointer"
            >
              <option value="any">Any Duration</option>
              <option value="3-5">3 - 5 Nights</option>
              <option value="6-8">6 - 8 Nights</option>
              <option value="9-14">9 - 14 Nights</option>
              <option value="15+">15+ Nights</option>
            </select>
          </div>

          {/* Region Selector */}
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-slate-400 block -mb-0.5">Region</label>
            <select
              value={region}
              onChange={(e) => onSelectRegion(e.target.value)}
              className="bg-sky-50/70 dark:bg-[#081528] border border-sky-400/20 rounded-xl px-3 py-1.5 text-xs font-semibold text-[#0c274c] dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0] cursor-pointer"
            >
              <option value="all">All Regions</option>
              <option value="mediterranean">Mediterranean Sea</option>
              <option value="caribbean">Caribbean & Bahamas</option>
              <option value="alaska">Alaska & Fjords</option>
              <option value="aegean">Greek Isles</option>
              <option value="asia">Asia & Pacific</option>
            </select>
          </div>

          {/* Sort By Selector */}
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-slate-400 block -mb-0.5">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => onSelectSortBy(e.target.value)}
              className="bg-sky-50/70 dark:bg-[#081528] border border-sky-400/20 rounded-xl px-3 py-1.5 text-xs font-semibold text-[#0c274c] dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0] cursor-pointer"
            >
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated (4.8+)</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  );
}
