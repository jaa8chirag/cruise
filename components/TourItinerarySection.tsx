'use client';

import { MapPin, Navigation, Clock, Calendar, Anchor } from 'lucide-react';

interface TourItinerarySectionProps {
  onSelectCabin?: () => void;
}

export default function TourItinerarySection({ onSelectCabin }: TourItinerarySectionProps) {
  const days = [
    {
      num: '01',
      tag: 'Departure Port',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Embarkation: 12:00 PM – 03:30 PM • Sail Away: 05:00 PM',
      title: 'Port of Miami, Florida — Embarkation & Sunset Gala',
      description: 'Board the flagship vessel of Oshin Shipping, settle into your stateroom, and join the Captain’s Welcome Sunset Gala on Deck 14 overlooking the illuminated Miami skyline.',
      perk: 'Welcome Reception Included',
      perkColor: 'bg-white text-slate-700 border-slate-200'
    },
    {
      num: '02',
      tag: 'At Sea Experience',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Cruising the Straits of Florida',
      title: 'Full Day at Sea — Infinity Pool Deck Party & Starlight Theater',
      description: 'Lounge by the panoramic heated infinity pool, indulge in Thalassotherapy spas, savor Michelin-crafted tastings, and enjoy the evening Broadway Starlight show.',
      perk: 'All Amenities Open',
      perkColor: 'bg-white text-slate-700 border-slate-200'
    },
    {
      num: '03',
      tag: 'Port of Call',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Port Time: 08:00 AM – 06:00 PM (10 Hours Docked)',
      title: 'Nassau, Bahamas — Dolphin Reef & Private Beach Club',
      description: 'Dock in turquoise Bahamian waters. Take a catamaran tender to Blue Lagoon for dolphin spotting safari, coral snorkeling, and unlimited beach club cabana access.',
      perk: 'Dolphin Encounter Shore Tour',
      perkColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      num: '04',
      tag: 'Cultural Port',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Port Time: 08:30 AM – 08:00 PM (11.5 Hours Docked)',
      title: 'Havana Harbor, Cuba — Vintage Car Heritage & Cigar Lounge',
      description: 'Step back into golden era charm. Cruise in classic 1950s convertibles across the Malecón seawall, visit UNESCO Old Havana plazas, and savor rum pairings.',
      perk: 'Classic Car Tour',
      perkColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      num: '05',
      tag: 'Adventure & Sea',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Port Time: 07:30 AM – 06:30 PM (11 Hours Docked)',
      title: 'Cozumel, Mexico — Palancar Reef Scuba Diving & Cenotes',
      description: 'Explore the Mesoamerican Barrier Reef—the world’s second largest reef system. Optional excursions include Mayan ruin walks and private yacht cenote tours.',
      perk: 'Reef Diving / Cenote Trek',
      perkColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      num: '06',
      tag: 'Historic Island',
      badgeColor: 'bg-ocean-100 text-ocean-700',
      time: 'Port Time: 09:00 AM – 07:30 PM (10.5 Hours Docked)',
      title: 'Key West, Florida — Mallory Square Sunset & Conch Trail',
      description: 'Stroll through historic pastel cottages, visit Hemingway’s estate, taste authentic Key Lime desserts, and celebrate the world-famous sunset at Mallory Pier.',
      perk: 'Sunset Pier Celebration',
      perkColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      num: '07',
      tag: 'Arrival Port',
      badgeColor: 'bg-slate-200 text-slate-600',
      time: 'Arrival: 06:30 AM • Disembarkation: 07:30 AM – 10:00 AM',
      title: 'Return to Port of Miami — Farewell Gourmet Breakfast & Disembarkation',
      description: 'Enjoy our signature farewell champagne breakfast. Express VIP luggage delivery directly to your transfer or Miami International Airport.',
      perk: 'VIP Express Transfers',
      perkColor: 'bg-white text-slate-700 border-slate-200'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200/70" data-purpose="full-tour-itinerary" id="itinerary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ocean-700 bg-ocean-50 border border-ocean-200/60 px-3.5 py-1.5 rounded-full mb-3">
            <Navigation className="w-3.5 h-3.5 text-ocean-600" />
            <span>Complete Tour Route &amp; Ports of Call</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-deepnavy tracking-tight font-sans">
            Grand 7-Day Royal Caribbean &amp; Tropical Voyage
          </h2>

          <p className="mt-3 text-slate-500 text-base sm:text-lg font-light leading-relaxed">
            Complete voyage schedule: from embarkation at Port of Miami through private Bahamian reefs, historic Havana, vibrant Cozumel, Key West, and back.
          </p>
        </div>

        {/* Visual Route Map Summary Strip */}
        <div className="bg-gradient-to-r from-deepnavy via-ocean-900 to-ocean-800 text-white rounded-3xl p-6 sm:p-8 mb-14 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-ocean-300 font-semibold block mb-1">
                Official Cruise Passage
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans">
                Miami → Nassau → Havana → Cozumel → Key West → Miami
              </h3>
              <p className="text-ocean-200/80 text-xs sm:text-sm mt-1 font-light">
                Total Nautical Distance: 1,480 NM • 7 Days / 6 Nights • 5 Shore Excursions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-ocean-300 uppercase tracking-wider block">Fares From</span>
                <span className="text-3xl font-extrabold text-white font-sans">
                  $1,280<span className="text-xs font-normal text-ocean-200"> /person</span>
                </span>
              </div>
              <a
                href="#staterooms"
                onClick={onSelectCabin}
                className="px-6 py-3 rounded-full bg-ocean-500 hover:bg-ocean-400 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Select Cabin
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Day-by-Day Timeline */}
        <div className="space-y-6">
          {days.map((d, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-[2rem] bg-slate-50 border-2 border-sky-200/70 hover:border-ocean-500 shadow-sm hover:shadow-lg hover:shadow-sky-100/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${index % 2 === 0 ? 'bg-ocean-600' : 'bg-deepnavy'} text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-md font-sans`}>
                  {d.num}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${d.badgeColor} px-2.5 py-0.5 rounded-full`}>
                      {d.tag}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {d.time}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-deepnavy group-hover:text-ocean-700 transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed font-light">
                    {d.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${d.perkColor}`}>
                  {d.perk}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
