import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ShieldCheck, Wrench, MapPin, ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Book Now',
      description: 'Fill the 30-second form or tap SOS — details land straight on our WhatsApp.',
      image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2024/09/staticbox-new-01.jpg',
      icon: Calendar,
    },
    {
      id: 1,
      number: '02',
      title: 'Vehicle Inspection',
      description: 'A certified mechanic inspects your car at home, office or roadside for a flat ₹599.',
      image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2024/09/staticbox-new-02.jpg',
      icon: ShieldCheck,
    },
    {
      id: 2,
      number: '03',
      title: 'Expert Service',
      description: 'You get a written quote first. Repair only begins after your explicit approval.',
      image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2024/09/staticbox-new-03.jpg',
      icon: Wrench,
    },
    {
      id: 3,
      number: '04',
      title: 'Doorstep Delivery',
      description: 'Genuine OEM parts, warranty on eligible repairs — handed back at your doorstep.',
      image: 'https://karsfix-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2024/09/staticbox-new-04.jpg',
      icon: MapPin,
    },
  ];

  return (
    <section id="how-it-works-section" className="py-16 md:py-24 bg-slate-950 text-white relative z-20">
      
      {/* Wave decorative outline top corner background */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Block matching visual flow */}
        <div className="space-y-3 mb-12 md:mb-16">
          <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
            — HOW IT WORKS /
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Get amazing car service <br /> in 4 simple <em className="text-brand-blue not-italic font-sans font-light italic">steps</em>
          </h2>
        </div>

        {/* Steps interactive preview area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Big active preview card matching the style */}
          <div className="lg:col-span-6 relative h-[350px] md:h-[450px] rounded-[36px] overflow-hidden shadow-2xl border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background active static box image */}
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay vignette specifically formatted for text reading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/40" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-left">
                  <div className="flex justify-between items-start">
                    <span className="font-display font-black text-4xl text-brand-blue/90 font-mono">
                      {steps[activeStep].number}
                    </span>
                    <div className="bg-brand-blue text-white p-3 rounded-2xl border border-brand-blue/30 shadow-lg">
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight flex items-center gap-2 group">
                      <span>{steps[activeStep].title}</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                      {steps[activeStep].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Clickable list selectors - 2x2 on mobile, flex list on desktop */}
          <div className="lg:col-span-6 grid grid-cols-2 lg:flex lg:flex-col lg:justify-center gap-3 sm:gap-4">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-3 sm:p-6 rounded-2xl sm:rounded-[28px] border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 cursor-pointer ${
                    isActive 
                      ? 'bg-brand-blue border-brand-blue/30 shadow-lg shadow-brand-blue/10 text-white' 
                      : 'bg-slate-900/40 border-slate-900/60 text-slate-400 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className={`font-display font-black text-base sm:text-2xl font-mono leading-none ${isActive ? 'text-white' : 'text-slate-600'}`}>
                      {step.number}
                    </span>
                    <div>
                      <h4 className={`font-display font-bold text-xs sm:text-lg ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {step.title}
                      </h4>
                      <p className={`hidden sm:block font-sans text-[11px] md:text-xs leading-normal mt-0.5 line-clamp-1 ${isActive ? 'text-slate-100' : 'text-slate-500'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex-shrink-0 transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-950 text-slate-400'}`}>
                    <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
