import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Siren,
  Wrench,
  Zap,
  Disc,
  Snowflake,
  CircleDot,
  Gauge,
  SprayCan,
  Droplets,
  Truck
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

// Map icon strings to Lucide components
const iconMap = {
  Siren: Siren,
  Wrench: Wrench,
  Zap: Zap,
  Disc: Disc,
  Snowflake: Snowflake,
  CircleDot: CircleDot,
  Gauge: Gauge,
  SprayCan: SprayCan,
  Droplets: Droplets,
  Truck: Truck,
};

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
  layoutMode?: 'carousel' | 'grid';
}

export default function Services({ onOpenBooking, layoutMode = 'carousel' }: ServicesProps) {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 1 < SERVICES_DATA.length) {
      setStartIndex((prev) => prev + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    } else {
      setStartIndex(SERVICES_DATA.length - 1);
    }
  };

  // We can show up to 4 items on larger screens, 2 on tablet, 1 on mobile
  const visibleServices = [
    ...SERVICES_DATA.slice(startIndex),
    ...SERVICES_DATA.slice(0, Math.max(0, 4 - (SERVICES_DATA.length - startIndex)))
  ].slice(0, 4);

  // Helper to map titles to match the screenshots exactly
  const getMappedTitle = (service: typeof SERVICES_DATA[0]) => {
    return service.title;
  };

  // --- GRID MODE LAYOUT (Services Page) ---
  if (layoutMode === 'grid') {
    return (
      <section className="py-16 md:py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Wrench;
              const mappedTitle = getMappedTitle(service);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => onOpenBooking(service.id)}
                >
                  {/* Top Image Box with Blue Circle Overlap */}
                  <div className="relative h-[220px] overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={mappedTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/15" />
                    
                    {/* Overlapping Blue Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking(service.id);
                      }}
                      className="absolute -bottom-5 right-6 w-11 h-11 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-light-blue transition-all shadow-lg border-4 border-white z-10"
                      title="Book Service"
                    >
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
                        {mappedTitle}
                      </h3>
                      <p className="font-sans text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Row - Icon Box */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="w-12 h-12 bg-blue-50/50 border border-blue-50 rounded-2xl flex items-center justify-center text-brand-blue">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  // --- CAROUSEL MODE LAYOUT (Homepage Default) ---
  return (
    <section id="services-section" className="py-16 md:py-24 bg-white relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header with Subtitle, Title and Arrow controls on the right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
              — OUR SERVICES /
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-none">
              We offer a <em className="text-brand-blue not-italic font-sans font-light italic">wide range</em> of car services
            </h2>
          </div>

          {/* Slider Controllers at the top-right exactly like screenshot */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center justify-center text-slate-700"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer flex items-center justify-center text-slate-700"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Grid Layout: 4 columns on desktop, 2 on tablet, 2 on mobile (2x2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => {
              const mappedTitle = getMappedTitle(service);
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative h-[200px] sm:h-[320px] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-end p-4 sm:p-6 cursor-pointer"
                  onClick={() => onOpenBooking(service.id)}
                >
                  {/* Service Background Image with subtle zoom on hover */}
                  <div className="absolute inset-0 z-0 bg-slate-900">
                    <img
                      src={service.image}
                      alt={mappedTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient overlay to match image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  </div>

                  {/* Service Text */}
                  <div className="relative z-10 space-y-1 sm:space-y-2">
                    <span className="text-[8px] sm:text-[10px] font-mono text-brand-blue uppercase tracking-widest font-bold bg-brand-blue/10 border border-brand-blue/20 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full inline-block">
                      Est: Free Checkup
                    </span>
                    <h3 className="font-display font-black text-xs sm:text-2xl text-white tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                      {mappedTitle}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-xs text-slate-300 font-light line-clamp-1 sm:line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Black Circular Button with Arrow exactly matching the design */}
                  <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBooking(service.id);
                      }}
                      className="w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all shadow-md bg-black/80 hover:bg-brand-blue text-white"
                      title="Book Service"
                    >
                      <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Estimate Trigger text bar below */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs font-mono">
            * Estimates are fully customized based on standard Indian OEM guidelines.
          </p>
        </div>

      </div>
    </section>
  );
}
