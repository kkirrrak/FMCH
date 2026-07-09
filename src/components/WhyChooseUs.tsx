import { motion } from 'motion/react';
import { Award, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  return (
    <section id="why-us-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with "15 Years of Experience" Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200" 
                alt="Mechanic working on car engine"
                className="w-full h-full object-cover object-center"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
              
              {/* "15 Years of Experience" Badge matching the exact blue badge in bottom-left */}
              <div className="absolute bottom-6 left-6 bg-brand-blue text-white rounded-3xl p-6 md:p-8 flex items-center gap-4 max-w-[280px] shadow-xl border border-brand-blue/30 backdrop-blur-md">
                <div className="bg-white/20 p-3 rounded-2xl">
                  {/* Worker/technician icon */}
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="block font-display font-black text-2xl md:text-3xl leading-none">15 Years</span>
                  <span className="block font-sans text-xs uppercase tracking-widest font-bold opacity-90 mt-1">of Experience</span>
                </div>
              </div>
            </div>
            
            {/* Soft decorative background elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Title, description, points and Know More button */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 pl-0 lg:pl-6">
            <div className="space-y-3">
              <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
                — WHY CHOOSE US /
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                The <em className="text-brand-blue not-italic font-sans font-light italic">story</em> behind service workshop
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed font-light">
              We experiencing unusual vibration or poor handling while driving or have low type threads and other problems, it’s time to get your car tires checked. Maintaining and repairing electric cars is slightly different
            </p>

            {/* Skilled Technicians and Best Quality Parts side-by-side or stacked grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 text-brand-blue p-2.5 rounded-xl">
                    <Award className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900">
                    Skilled technicians
                  </h3>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  We had technical knowledge and physical abilities, practice and learn Mechanics
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 text-brand-blue p-2.5 rounded-xl">
                    <ShieldAlert className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900">
                    Best quality parts
                  </h3>
                </div>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Choosing the right part for your auto can spell the difference service
                </p>
              </div>
            </div>

            {/* Know More Flat Button with Custom diagonal Arrow */}
            <div className="pt-4">
              <a
                href="#about-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-bold text-sm px-6 py-4 rounded-full transition-all shadow-lg shadow-brand-blue/20"
              >
                <span>Know More</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
