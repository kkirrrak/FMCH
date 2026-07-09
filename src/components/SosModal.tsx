import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertTriangle, MapPin, Phone, Loader2, Navigation, CheckCircle2, ShieldAlert, Sparkles, Timer } from 'lucide-react';
import { HYDERABAD_AREAS } from '../data';

interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMERGENCY_ISSUES = [
  { id: 'flat-tire', label: 'Flat Tire / Puncture Breakdown' },
  { id: 'overheat', label: 'Engine Overheating / Coolant Leak' },
  { id: 'battery', label: 'Dead Battery / Jump-Start Required' },
  { id: 'brakes', label: 'Brake System failure' },
  { id: 'towing', label: 'Towing & Recovery Required' },
  { id: 'locked', label: 'Car Key Locked Inside' },
];

export default function SosModal({ isOpen, onClose }: SosModalProps) {
  const [issue, setIssue] = useState('flat-tire');
  const [area, setArea] = useState('Madhapur');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'form' | 'loading' | 'dispatched'>('form');
  const [countdown, setCountdown] = useState(720); // 12 minutes in seconds
  const [logLines, setLogLines] = useState<string[]>([]);

  // Simulation logs
  useEffect(() => {
    if (step === 'loading') {
      const logs = [
        '🔄 Connecting to Hyderabad SOS central dispatcher...',
        '🛰️ Triangulating cell tower coordinates near ' + area + '...',
        '🔍 Scanning for closest certified OEM field mechanic...',
        '✅ Dispatch confirmed! Ravinder Singh (Lead Mechanic, 9 years exp) assigned.',
        '🚀 Roadside emergency truck rolling with diagnostic kits!'
      ];

      setLogLines([]);
      logs.forEach((line, idx) => {
        setTimeout(() => {
          setLogLines((prev) => [...prev, line]);
          if (idx === logs.length - 1) {
            setTimeout(() => {
              setStep('dispatched');
            }, 1000);
          }
        }, (idx + 1) * 800);
      });
    }
  }, [step, area]);

  // Countdown clock simulation
  useEffect(() => {
    let timer: any;
    if (step === 'dispatched' && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const handleTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('Please enter your phone number so we can contact you immediately.');
      return;
    }
    setStep('loading');
  };

  const handleReset = () => {
    setStep('form');
    setPhone('');
    setCountdown(720);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-slate-900 border border-red-500/20 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl shadow-red-500/10 font-sans text-slate-100"
          >
            {/* Header */}
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-white animate-bounce" />
                <span className="font-display font-black text-sm md:text-base tracking-tight uppercase">
                  FixMyCarHub Emergency SOS Dispatch
                </span>
              </div>
              <button
                onClick={handleReset}
                className="p-1 rounded-full hover:bg-white/10 text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 min-h-[350px] flex flex-col justify-center">
              
              {step === 'form' && (
                <form onSubmit={handleTrigger} className="space-y-4">
                  <div className="text-center space-y-2 mb-4">
                    <span className="text-red-500 text-xs font-mono font-bold tracking-widest uppercase block">
                      ⚡ IMMEDIATE DISPATCH STATIONED IN HYDERABAD
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">Specify Your Breakdown Issue</h3>
                    <p className="text-xs text-slate-400 font-light">
                      Please enter your details below. Your request will be directly pushed to our 24/7 towing and mobile workshop crew.
                    </p>
                  </div>

                  {/* Select Issue */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Breakdown Category
                    </label>
                    <select
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                    >
                      {EMERGENCY_ISSUES.map((e) => (
                        <option key={e.id} value={e.id}>
                          {e.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Location Area */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Your Current Hyderabad Area
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                    >
                      {HYDERABAD_AREAS.map((a) => (
                        <option key={a} value={a}>
                          {a} Area
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Your Mobile Number (For Callbacks)
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <Phone className="absolute left-3 top-3.5 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit SOS */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-display font-bold py-3.5 rounded-xl mt-4 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 cursor-pointer"
                  >
                    <AlertTriangle className="w-4 h-4 animate-ping" />
                    <span>ACTIVATE SOS EMERGENCY DISPATCH</span>
                  </button>

                  <span className="block text-center text-[9px] text-slate-500 font-mono">
                    *Roadside support includes towing and quick mechanical assistance starting at ₹999.
                  </span>
                </form>
              )}

              {step === 'loading' && (
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <Loader2 className="w-10 h-10 animate-spin text-red-500 mx-auto" />
                    <h3 className="font-display font-bold text-lg text-white mt-4">Triage Protocol Active</h3>
                    <p className="text-xs text-slate-400 font-light mt-1">Please do not close this modal. Establishing dispatch...</p>
                  </div>

                  {/* Dynamic scrolling logs terminal style */}
                  <div className="bg-slate-950 rounded-2xl p-4 font-mono text-[10px] space-y-2 border border-slate-800 min-h-[140px]">
                    {logLines.map((line, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={idx === logLines.length - 1 ? 'text-emerald-400 font-semibold' : 'text-slate-400'}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {step === 'dispatched' && (
                <div className="space-y-6">
                  
                  {/* Big Dispatched Badge */}
                  <div className="text-center">
                    <div className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 p-3 rounded-full w-max mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-black text-xl text-white mt-4">Mechanic En Route!</h3>
                    <p className="text-xs text-slate-400 font-light mt-1">
                      Our responder has locked your coordinates near <span className="text-brand-blue font-bold">{area}</span>.
                    </p>
                  </div>

                  {/* Timer and responder details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
                      <Timer className="w-8 h-8 text-brand-blue animate-pulse" />
                      <div>
                        <span className="block text-[9px] text-gray-500 font-mono uppercase font-bold leading-none">Arrival Est.</span>
                        <span className="text-lg font-display font-black text-white">{formatTime(countdown)}</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
                      <Navigation className="w-8 h-8 text-brand-blue" />
                      <div>
                        <span className="block text-[9px] text-gray-500 font-mono uppercase font-bold leading-none">Distance</span>
                        <span className="text-lg font-display font-black text-white">1.8 km</span>
                      </div>
                    </div>
                  </div>

                  {/* Responder Info */}
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-brand-blue flex items-center justify-center font-display font-black text-brand-blue">
                        RS
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white">Ravinder Singh</span>
                        <span className="block text-[10px] text-slate-400">Lead Field Engineer</span>
                      </div>
                    </div>
                    <a
                      href="tel:+919123456789"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 text-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-display font-bold">Call Now</span>
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-display font-semibold py-3 rounded-xl transition-all cursor-pointer text-xs"
                  >
                    Close Status Window (Keeps Dispatch Active)
                  </button>

                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
