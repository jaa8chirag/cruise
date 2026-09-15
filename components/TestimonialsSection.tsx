'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, ChevronLeft, ChevronRight, ShieldCheck, HeartHandshake, DollarSign } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const reviews = [
    {
      quote: "By far this is the best sea trip I've ever experienced. With Oshin Shipping, the culinary craft, panoramic suites, and stellar shore excursions redefine luxury comfort on water.",
      author: "Andrew Gabriel",
      role: "USA Tourist • Verified Voyager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The personalized attention from our butler and the zero-motion stabilizers made cruising through open sea completely relaxing. The private island day in the Bahamas was pure paradise.",
      author: "Catherine & David Miller",
      role: "London, UK • Penthouse Suite Guests",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const review = reviews[currentIdx];

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60" data-purpose="guest-testimonials">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-100/60 px-3 py-1 rounded-full mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-ocean-600" />
          <span>Testimonials</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-deepnavy tracking-tight mb-12 font-sans">
          Here&apos;s what people saying
        </h2>

        {/* Quote Block */}
        <blockquote className="text-xl sm:text-3xl font-semibold text-deepnavy/90 leading-snug sm:leading-relaxed max-w-3xl mx-auto mb-10 font-sans">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        {/* Author & Carousel Buttons */}
        <div className="flex items-center justify-between max-w-xs mx-auto mb-16 pt-2">
          <div className="flex items-center gap-3 text-left">
            <div className="w-11 h-11 rounded-full bg-slate-300 overflow-hidden ring-2 ring-ocean-500/30 relative">
              <Image
                src={review.image}
                alt={review.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-deepnavy font-sans">{review.author}</div>
              <div className="text-xs text-slate-500 font-light">{review.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-ocean-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next review"
              className="w-8 h-8 rounded-full bg-deepnavy text-white flex items-center justify-center hover:bg-ocean-700 transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 text-left">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <div className="text-3xl font-extrabold text-deepnavy mb-1 font-sans">24/7</div>
            <div className="text-sm font-bold text-slate-700 font-sans">Support Agent</div>
            <p className="text-xs text-slate-400 mt-1 font-light">Travel with total peace of mind</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <div className="text-3xl font-extrabold text-deepnavy mb-1 font-sans">100%</div>
            <div className="text-sm font-bold text-slate-700 font-sans">Price Guarantee</div>
            <p className="text-xs text-slate-400 mt-1 font-light">Book with confidence knowing best rates</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <div className="text-3xl font-extrabold text-deepnavy mb-1 font-sans">0</div>
            <div className="text-sm font-bold text-slate-700 font-sans">Hidden Fees</div>
            <p className="text-xs text-slate-400 mt-1 font-light">Full transparent pricing on all voyages</p>
          </div>

        </div>

      </div>
    </section>
  );
}
