'use client';

import { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuite?: string;
  initialPrice?: string;
}

export default function SovereignSocietyModal({ isOpen, onClose, initialSuite, initialPrice }: ReserveModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#151c26] text-slate-900 dark:text-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/40 p-6 md:p-8 space-y-6">
        
        <button
          onClick={onClose}
          aria-label="Close reservation modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2">
              <span className="font-jakarta text-[11px] text-amber-600 dark:text-amber-400 tracking-[0.25em] uppercase font-bold">
                PRIVATE CONCIERGE DISPATCH
              </span>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                Reserve Your Voyage
              </h2>
              <p className="font-jakarta text-xs md:text-sm text-slate-600 dark:text-slate-400">
                {initialSuite ? `Requesting reservation for ${initialSuite} (${initialPrice})` : 'Submit your request for bespoke stateroom allocation and private itinerary planning.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-jakarta text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Lord / Lady / Captain Full Name"
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                  Confidential Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="guest@sovereign.com"
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1 uppercase tracking-wider">
                  Direct Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 text-slate-950 font-jakarta text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_24px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Sparkles className="w-4 h-4" />
                <span>Transmit Reservation Request</span>
              </button>
            </form>

            <p className="font-jakarta text-[10px] text-slate-500 dark:text-slate-400 text-center">
              Discretion guaranteed. No deposit required at inquiry stage.
            </p>
          </>
        ) : (
          <div className="text-center space-y-4 py-6">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-playfair text-2xl font-bold">Request Transmitted</h3>
            <p className="font-jakarta text-xs text-slate-600 dark:text-slate-300">
              Thank you, <span className="font-bold">{name}</span>. Senior Aurelia Concierge will contact you within 2 hours at <span className="font-bold">{email}</span> with your bespoke stateroom allocation.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
