import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Calendar, ArrowRight, UserCheck } from 'lucide-react';

interface PromoCardsProps {
  onOpenBooking: () => void;
  onOpenSos: () => void;
}

export default function PromoCards({ onOpenBooking, onOpenSos }: PromoCardsProps) {
  const [mechanicCount, setMechanicCount] = useState(150);

  // Simulate an active counter matching the shifting stats in the video (e.g. 150+ to 520+)
  useEffect(() => {
    const targets = [150, 280, 410, 520];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % targets.length;
      setMechanicCount(targets[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 px-4 md:px-6 -mt-8 md:-mt-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Free Evaluation */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/5 border border-slate-100 flex flex-col justify-between group"
        >
          <div>
            <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest block mb-2">
              // FREE SERVICES /
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 leading-tight">
              Free Evaluation of Your Car Service
            </h3>
            <p className="font-sans text-sm text-gray-500 mt-2 font-light">
              Bring your car to our Hub for a complete 40-point diagnostic scan and mechanical checklist completely free of cost.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={onOpenBooking}
              className="text-brand-blue font-display font-bold text-sm flex items-center gap-2 group-hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <div className="bg-slate-100 group-hover:bg-brand-blue group-hover:text-white p-2 rounded-full transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* Card 2: Shifting Mechanic Count */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-brand-blue rounded-3xl p-6 md:p-8 shadow-xl shadow-brand-blue/10 text-white flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-200 animate-pulse" />
              <span className="font-mono text-[10px] text-slate-200 font-medium uppercase tracking-widest">
                Our Experts
              </span>
            </div>
            
            {/* Numeric Shifting Highlight */}
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display font-black text-4xl md:text-5xl tracking-tight text-white transition-all duration-500">
                {mechanicCount}+
              </span>
            </div>
            
            <h4 className="font-display font-bold text-lg md:text-xl text-white leading-snug mt-2">
              Professional and Experienced staff ready to help you
            </h4>
            <p className="font-sans text-xs text-blue-200 mt-2 font-light">
              Highly trained OEM-certified auto engineers and detailing experts available across Hyderabad spots.
            </p>
          </div>
          <div className="mt-6">
            <span className="text-[10px] font-mono text-blue-300 flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full w-max">
              <UserCheck className="w-3.5 h-3.5" /> Average 8+ Years Experience
            </span>
          </div>
        </motion.div>

        {/* Card 3: Easy Booking & Communication */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/5 border border-slate-100 flex flex-col justify-between group"
        >
          <div>
            <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest block mb-2">
              // EXPRESS ACCESS /
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 leading-tight">
              Easy Booking & Fast Communication
            </h3>
            <p className="font-sans text-sm text-gray-500 mt-2 font-light">
              Schedule your pick-up or service slot online in less than 60 seconds. Get real-time status updates directly over WhatsApp.
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={onOpenBooking}
              className="w-full bg-slate-900 hover:bg-brand-blue text-white font-display font-semibold text-sm py-3 rounded-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Now</span>
              <Calendar className="w-4 h-4 text-brand-blue group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
