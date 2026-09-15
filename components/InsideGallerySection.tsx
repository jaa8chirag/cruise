'use client';

import Image from 'next/image';
import { Camera } from 'lucide-react';

export default function InsideGallerySection() {
  const galleryItems = [
    {
      title: 'Morning Buffet',
      subtitle: 'Fresh artisan pastries & gourmet breakfasts',
      image: '/images/stitch_fine_dining.png',
    },
    {
      title: 'Dolphin Appearance',
      subtitle: 'Deep ocean encounters & pods',
      image: '/images/stitch_dolphins.png',
    },
    {
      title: 'Luxury Master Suite',
      subtitle: 'Italian marble, rain showers & private deck',
      image: '/images/stitch_stateroom.png',
    },
    {
      title: 'Sunset View',
      subtitle: 'Golden hour from the top-deck infinity pool',
      image: '/images/stitch_infinity_pool.png',
    },
  ];

  return (
    <section className="py-24 bg-slate-50" data-purpose="gallery-deck" id="gallery">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-100/80 px-3 py-1 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5 text-ocean-600" />
              <span>Our Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
              Inside the Cozy of Luxury Cruise
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-light">
            Unpack once and let the world drift by your window. Experience the pristine elegance of Oshin Shipping across global waters.
          </p>
        </div>

        {/* Curated 4-Column Photo Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-100 mb-3 shadow-sm border border-slate-200/60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <h3 className="text-base font-bold text-deepnavy font-sans">{item.title}</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">{item.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
