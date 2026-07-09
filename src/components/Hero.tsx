import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const SLIDES = [
  {
    id: 1,
    subtitle: 'Freshness & Cleanliness',
    giantText: 'Trusted',
    tagline: 'auto care experts',
    image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/revslider/slider-demo-02/slide-b-01-1.jpg',
  },
  {
    id: 2,
    subtitle: 'We Keep You Running',
    giantText: 'Powered',
    tagline: 'Driven by Ethics',
    image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/revslider/slider-demo-02/slide-b-02.jpg',
  },
  {
    id: 3,
    subtitle: 'Repaired Your Ride',
    giantText: 'EXPERTISE',
    tagline: 'Expert Car Care',
    image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/revslider/slider-demo-02/slide-b-03.jpg',
  },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [current, setCurrent] = useState(2); // Set Slide 3 as initial default since it's the one in the user screenshot

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section id="home-section" className="relative h-[85vh] sm:h-[90vh] md:h-[95vh] min-h-[600px] w-full bg-slate-950 overflow-hidden">
      
      {/* Background Images with AnimatePresence for cross-fading */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Dark overlay specifically to match the image */}
            <div className="absolute inset-0 bg-slate-950/40 z-10" />
            <img
              src={SLIDES[current].image}
              alt="Car Care Expertise"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay - Centered exactly as in screenshot */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 max-w-4xl pt-16"
          >
            {/* Subtitle above giant title */}
            <span className="block text-white font-sans font-medium text-base sm:text-lg md:text-xl tracking-wide opacity-90">
              {SLIDES[current].subtitle}
            </span>

            {/* Giant Bold Title exactly matching Sora font style and uppercase letter-spacing */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tight leading-none">
              {SLIDES[current].giantText}
            </h1>

            {/* Tagline / Sub-heading below title */}
            <h2 className="text-white font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-normal pb-2">
              {SLIDES[current].tagline}
            </h2>

            {/* Centered Buttons - White pill and Blue pill side-by-side */}
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 pt-4">
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-100 text-slate-900 font-display font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all flex items-center gap-1.5 shadow-xl hover:shadow-black/20"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 text-slate-900" />
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all flex items-center gap-1.5 shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/35 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      {/* Slider Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      {/* Slide dots at the bottom-center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === idx ? 'w-8 bg-brand-blue' : 'w-2.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
