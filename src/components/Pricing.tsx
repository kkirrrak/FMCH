import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden z-20 border-b border-gray-100">
      
      {/* Abstract background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Pricing Content Panel */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
                — PRICING TABLE /
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                The <em className="text-brand-blue not-italic font-sans font-light italic">best pricing</em> to help you!
              </h2>
            </div>
            
            <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
              We carefully screen all of our service quotes and maintain fixed transparent pricing. Rest assured that you receive the absolute highest quality of roadside repair and service, with no hidden costs or surprise mechanics.
            </p>

            {/* Steer-Wheel Trust Card */}
            <div className="bg-slate-900 text-white rounded-[28px] p-6 relative overflow-hidden shadow-xl">
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="6" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="6" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <span className="font-display font-bold text-sm text-white">Transparent & OEM Standard</span>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">
                Cancel, pause, or transfer your car service membership at any time. We support cashless claims for major Indian motor insurance providers.
              </p>
            </div>
          </div>

          {/* Right Column: Pricing Plans stacked horizontally in rows */}
          <div className="lg:col-span-8 space-y-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 md:p-8 border shadow-lg transition-all hover:shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  plan.isPopular 
                    ? 'bg-slate-900 border-slate-900 text-white ring-4 ring-brand-blue/10' 
                    : 'bg-white border-slate-100 text-slate-900'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-brand-blue text-white text-[9px] font-mono font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Plan meta & title */}
                <div className="md:w-1/4">
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest block mb-1 ${
                    plan.isPopular ? 'text-brand-blue' : 'text-slate-400'
                  }`}>
                    {plan.isPopular ? '// PREMIUM HUB CARE' : '// REPAIR SUITE'}
                  </span>
                  <h3 className="font-display font-black text-lg md:text-xl tracking-tight leading-tight">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-display font-black text-3xl">
                      ₹{plan.price}
                    </span>
                    <span className="text-[10px] text-gray-400 font-sans uppercase font-bold">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features inline list */}
                <div className="md:w-1/2 flex flex-col gap-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span className={`font-sans text-[11px] leading-snug line-clamp-1 ${
                          plan.isPopular ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="md:w-1/4 flex justify-end">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full md:w-auto font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      plan.isPopular
                        ? 'bg-brand-blue hover:bg-brand-light-blue text-white shadow-lg shadow-brand-blue/30'
                        : 'bg-slate-900 hover:bg-brand-blue text-white'
                    }`}
                  >
                    <span>Purchase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
