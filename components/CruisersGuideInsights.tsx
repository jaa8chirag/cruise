'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function CruisersGuideInsights() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const blogPosts = [
    {
      title: 'Best time to visit Tropical Beach Harbors & Hidden Coves',
      date: 'Dec 04, 2025',
      image: '/images/stitch_tropical_caribbean.png',
    },
    {
      title: '5 Hidden Gems You can only visit by luxury boat',
      date: 'Dec 14, 2025',
      image: '/images/stitch_dolphins.png',
    },
    {
      title: "Savor the Sea: A Foodie's Guide to Culinary Cruises",
      date: 'Dec 21, 2025',
      image: '/images/stitch_fine_dining.png',
    },
  ];

  return (
    <section className="py-24 bg-slate-50" data-purpose="blog-and-newsletter" id="insights">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-100/70 px-3 py-1 rounded-full mb-3">
              <Newspaper className="w-3.5 h-3.5 text-ocean-600" />
              <span>Our Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-deepnavy tracking-tight font-sans">
              The Cruiser&apos;s<br />Guide &amp; Insights
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xs leading-relaxed font-light">
            Expert tips, packing hacks, and destination guides to help you plan the perfect voyage with Oshin Shipping.
          </p>
        </div>

        {/* Grid Layout: 1 Newsletter Card + 3 Distinct Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Newsletter Box */}
          <div className="bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-ocean-500/20">
            <div>
              <h3 className="text-xl font-bold leading-tight mb-2 font-sans">Subscribe to newsletter</h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Looking for assistance? We&apos;re here to help you get the best deal.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="mt-8 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-xs text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-deepnavy hover:bg-black text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-between shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="mt-8 p-3 rounded-xl bg-white/20 text-xs font-semibold text-white">
                ✓ Thank you for subscribing!
              </div>
            )}
          </div>

          {/* 3 Blog Cards */}
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm flex flex-col group hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-3.5 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                {post.date}
              </span>
              <h4 className="text-sm font-bold text-deepnavy group-hover:text-ocean-600 transition-colors leading-snug font-sans">
                {post.title}
              </h4>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
