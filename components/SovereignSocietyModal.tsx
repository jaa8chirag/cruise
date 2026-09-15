'use client';

import { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Ship } from 'lucide-react';

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
  const [selectedDestination, setSelectedDestination] = useState('Mediterranean Escape');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0c274c] text-slate-900 dark:text-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-sky-400/30 p-6 md:p-8 space-y-6">
        
        <button
          onClick={handleResetAndClose}
          aria-label="Close reservation modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-sky-950 text-slate-500 hover:text-[#29aae0] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-[#1a78b1] dark:text-[#29aae0] text-[10px] uppercase font-bold tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#f7b339]" />
                <span>Velvet Blue Concierge Dispatch</span>
              </div>
              <h2 className="font-poppins font-black text-2xl md:text-3xl text-[#0c274c] dark:text-white">
                Reserve Your Voyage
              </h2>
              <p className="font-poppins text-xs text-slate-600 dark:text-slate-300">
                {initialSuite ? `Requesting allocation for ${initialSuite} (${initialPrice})` : 'Submit your preferences for priority suite allocation, private tender transfers, and bespoke shore planning.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-poppins text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1 uppercase tracking-wider text-[11px]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Captain Alexander Brooks"
                  className="w-full bg-slate-50 dark:bg-[#081528] border border-slate-200 dark:border-sky-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0]"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1 uppercase tracking-wider text-[11px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@luxurytravel.com"
                  className="w-full bg-slate-50 dark:bg-[#081528] border border-slate-200 dark:border-sky-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0]"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1 uppercase tracking-wider text-[11px]">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-slate-50 dark:bg-[#081528] border border-slate-200 dark:border-sky-500/20 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#29aae0]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1a78b1] via-[#29aae0] to-[#1a78b1] text-white font-poppins text-xs uppercase tracking-wider font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Sparkles className="w-4 h-4 text-[#f7b339]" />
                <span>Submit Priority Reservation</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#29aae0]" />
              <span>Discretion guaranteed. Zero deposit required at inquiry.</span>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4 py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-poppins font-black text-2xl text-[#0c274c] dark:text-white">Request Received</h3>
            <p className="font-poppins text-xs text-slate-600 dark:text-slate-300">
              Thank you, <span className="font-bold text-[#29aae0]">{name}</span>. Senior Velvet Blue Concierge will contact you within 2 hours at <span className="font-bold">{email}</span> with your bespoke stateroom allocation and itinerary portfolio.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-full bg-[#29aae0] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1a78b1] transition-all"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
