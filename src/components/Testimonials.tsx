import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials-section" className="py-16 md:py-24 bg-white relative overflow-hidden z-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonial Hero Image & 460+ Reviews Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[350px] md:h-[480px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800" 
                alt="Happy customer with car service"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
              
              {/* Badge: "460+ Satisfied Clients Reviews" */}
              <div className="absolute bottom-6 left-6 bg-slate-950/90 text-white rounded-3xl p-6 flex items-center gap-4 max-w-[280px] shadow-xl border border-white/10 backdrop-blur-md">
                <div className="bg-brand-blue/20 p-2.5 rounded-xl">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <span className="block font-display font-black text-2xl leading-none">460+</span>
                  <span className="block font-sans text-[10px] uppercase tracking-wider font-bold text-gray-300 mt-1">Satisfied Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Review Quote & Author Details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 pl-0 lg:pl-6">
            <div className="space-y-3">
              <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
                — TESTIMONIALS /
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-none">
                Hear what our <em className="text-brand-blue not-italic font-sans font-light italic">customers</em> say about our workshop
              </h2>
            </div>

            {/* Quote container with Slide transition */}
            <div className="relative min-h-[180px] bg-slate-50 border border-slate-100 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="absolute top-6 right-6 text-brand-blue/10">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(TESTIMONIALS_DATA[current].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="font-sans font-light text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{TESTIMONIALS_DATA[current].quote}"
                  </p>

                  {/* Profile info inside */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-brand-blue/30 flex-shrink-0">
                      <img 
                        src={TESTIMONIALS_DATA[current].image} 
                        alt={TESTIMONIALS_DATA[current].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="block font-display font-bold text-slate-900 text-xs sm:text-sm">
                        {TESTIMONIALS_DATA[current].name}
                      </span>
                      <span className="block font-sans text-[10px] text-brand-blue font-semibold">
                        {TESTIMONIALS_DATA[current].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controllers row below */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center justify-center text-slate-700"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center justify-center text-slate-700"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
