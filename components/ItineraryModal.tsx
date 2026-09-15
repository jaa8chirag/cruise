'use client';

import { useState } from 'react';
import { X, Calendar, MapPin, Anchor, Sparkles, Check, Clock, Ship, User, Phone, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { VoyageItem } from './DestinationsGrid';

interface ItineraryModalProps {
  voyage: VoyageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmBooking?: (bookingDetails: any) => void;
}

export default function ItineraryModal({
  voyage,
  isOpen,
  onClose,
  onConfirmBooking,
}: ItineraryModalProps) {
  const [selectedSuiteTier, setSelectedSuiteTier] = useState<'veranda' | 'penthouse' | 'villa'>('veranda');
  const [guestCount, setGuestCount] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);

  if (!isOpen || !voyage) return null;

  const suiteMultipliers = {
    veranda: 1.0,
    penthouse: 1.65,
    villa: 2.8,
  };

  const suiteTitles = {
    veranda: 'Horizon Veranda Suite',
    penthouse: 'Sunset Penthouse Suite',
    villa: 'Sovereign Royal Grand Villa',
  };

  const pricePerGuest = Math.round(voyage.pricePerPerson * suiteMultipliers[selectedSuiteTier]);
  const totalPrice = pricePerGuest * guestCount;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
    if (onConfirmBooking) {
      onConfirmBooking({
        voyage: voyage.title,
        suite: suiteTitles[selectedSuiteTier],
        guests: guestCount,
        totalPrice,
        guestName,
        guestEmail,
      });
    }
  };

  const handleResetAndClose = () => {
    setBookingComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0c274c] text-slate-900 dark:text-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-sky-400/30 flex flex-col">
        
        {/* Header Hero Image */}
        <div className="relative h-52 sm:h-60 w-full flex flex-col justify-end p-6 overflow-hidden flex-shrink-0">
          <Image
            src={voyage.image}
            alt={voyage.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c274c] via-[#0c274c]/60 to-black/30"></div>
          
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#081528]/80 text-white hover:bg-[#29aae0] transition-all z-10 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-1.5 text-white">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#29aae0] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                {voyage.badge}
              </span>
              <span className="text-xs text-[#a9f6fb] flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                {voyage.durationNights} Nights • {voyage.region}
              </span>
            </div>

            <h2 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              {voyage.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl font-light">
              {voyage.description}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {!bookingComplete ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Itinerary Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#29aae0] mb-1">
                    Port of Call Schedule
                  </h3>
                  <h4 className="font-poppins font-bold text-lg text-[#0c274c] dark:text-white">
                    Day-by-Day Journey
                  </h4>
                </div>

                <div className="space-y-3 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-sky-200 dark:before:bg-sky-800">
                  {voyage.ports.map((port, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 pl-8">
                      <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#29aae0] border-2 border-white dark:border-[#0c274c] shadow-sm flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      </div>
                      <div className="bg-sky-50/70 dark:bg-[#081528] p-3 rounded-2xl border border-sky-400/20 flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#1a78b1] dark:text-[#a9f6fb]">Day {idx + 1}</span>
                          <span className="text-[11px] text-slate-400">8:00 AM – 6:00 PM</span>
                        </div>
                        <div className="font-poppins font-bold text-sm text-[#0c274c] dark:text-white mt-0.5">
                          {port}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Voyage Inclusions */}
                <div className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/40 border border-sky-400/20">
                  <h5 className="font-poppins font-bold text-xs text-[#0c274c] dark:text-white mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#f7b339]" />
                    All-Inclusive Luxuries Included:
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#29aae0]" />
                      <span>Fine Dining & Alfresco Lounges</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#29aae0]" />
                      <span>Complimentary Shore Zodiac Tenders</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#29aae0]" />
                      <span>Ocean Theatre Live Spectaculars</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#29aae0]" />
                      <span>High-Speed Oceanic Starlink Wi-Fi</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Cabin Selection & Booking Form (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#081528] rounded-2xl p-5 border border-sky-400/20 space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#29aae0]">
                    Reserve Stateroom
                  </h3>
                  <div className="font-poppins font-bold text-xl text-[#0c274c] dark:text-white">
                    Guest & Suite Selection
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  {/* Suite Tier Selection */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                      Stateroom Category
                    </label>
                    <div className="space-y-1.5">
                      {(['veranda', 'penthouse', 'villa'] as const).map((tier) => (
                        <div
                          key={tier}
                          onClick={() => setSelectedSuiteTier(tier)}
                          className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                            selectedSuiteTier === tier
                              ? 'bg-sky-50 dark:bg-[#133a6e] border-[#29aae0] font-bold text-[#0c274c] dark:text-white shadow-sm'
                              : 'bg-white dark:bg-[#0c274c] border-slate-200 dark:border-sky-500/20 text-slate-600 dark:text-slate-300 hover:border-sky-400'
                          }`}
                        >
                          <span>{suiteTitles[tier]}</span>
                          <span className="font-extrabold text-[#1a78b1] dark:text-[#a9f6fb]">
                            ${Math.round(voyage.pricePerPerson * suiteMultipliers[tier]).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guests Counter */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                      Number of Guests
                    </label>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#0c274c] border border-slate-200 dark:border-sky-500/20">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        {guestCount} Travelers
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs">{guestCount}</span>
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.min(6, guestCount + 1))}
                          className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Guest Contact Details */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Primary Guest Full Name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c274c] border border-slate-200 dark:border-sky-500/20 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#29aae0]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email for Confirmation"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#0c274c] border border-slate-200 dark:border-sky-500/20 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#29aae0]"
                    />
                  </div>

                  {/* Pricing Total Summary */}
                  <div className="pt-3 border-t border-slate-200 dark:border-sky-500/20 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Voyage Rate</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Taxes & Port Fees Included</span>
                    </div>
                    <div className="text-right">
                      <span className="font-poppins font-black text-2xl text-[#1a78b1] dark:text-[#a9f6fb]">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Confirm Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a78b1] via-[#29aae0] to-[#1a78b1] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                  >
                    Confirm & Reserve Stateroom
                  </button>
                </form>
              </div>

            </div>
          ) : (
            /* Confirmation State */
            <div className="p-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#29aae0]">
                  Booking Allocation Confirmed
                </span>
                <h3 className="font-poppins font-black text-3xl text-[#0c274c] dark:text-white">
                  Welcome Aboard, {guestName || 'Valued Guest'}!
                </h3>
                <p className="font-poppins text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Your reservation for <strong className="text-[#1a78b1] dark:text-[#a9f6fb]">{voyage.title}</strong> in the <strong className="text-[#1a78b1] dark:text-[#a9f6fb]">{suiteTitles[selectedSuiteTier]}</strong> has been secured.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-2xl bg-sky-50 dark:bg-[#081528] border border-sky-400/20 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#0c274c] dark:text-white">OV-2026-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Departure Port:</span>
                  <span className="font-semibold text-[#0c274c] dark:text-white">{voyage.departurePort}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Party Size:</span>
                  <span className="font-semibold text-[#0c274c] dark:text-white">{guestCount} Guests</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 dark:border-sky-500/20 pt-2">
                  <span className="font-bold">Total Confirmed:</span>
                  <span className="font-bold text-[#1a78b1] dark:text-[#a9f6fb]">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-full bg-[#29aae0] text-white font-poppins text-xs font-bold uppercase tracking-wider hover:bg-[#1a78b1] transition-all"
              >
                Close & Return to Ocean Voyage
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
