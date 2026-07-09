import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, HYDERABAD_AREAS } from '../data';
import { Calendar, Phone, Mail, User, ShieldAlert, CheckCircle2, ChevronRight, Loader2, Sparkles } from 'lucide-react';

interface BookingFormProps {
  selectedPlanId?: string;
  preSelectedServiceId?: string;
  onBookingComplete: () => void;
}

export default function BookingForm({ selectedPlanId, preSelectedServiceId, onBookingComplete }: BookingFormProps) {
  const [service, setService] = useState(preSelectedServiceId || 'maintenance');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('Madhapur');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimateData, setEstimateData] = useState<any | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) {
      alert('Please fill in your Name, Phone Number, and Date.');
      return;
    }

    setIsSubmitting(true);

    // Simulate standard calculations after 2 seconds
    setTimeout(() => {
      const selectedServiceObj = SERVICES_DATA.find((s) => s.id === service);
      const serviceName = selectedServiceObj ? selectedServiceObj.title : 'General Maintenance';
      
      // Calculate randomized pricing in INR
      const labor = Math.floor(Math.random() * 1500) + 500;
      const parts = Math.floor(Math.random() * 4000) + 1000;
      const total = labor + parts;

      setEstimateData({
        serviceName,
        date,
        name,
        phone,
        area,
        labor,
        parts,
        total,
        orderId: 'FMC-' + Math.floor(Math.random() * 90000 + 10000),
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleConfirmBooking = () => {
    // Open custom WhatsApp message with estimate details
    const text = `Hello FixMyCarHub! I would like to confirm my booking.
*Order ID:* ${estimateData.orderId}
*Service:* ${estimateData.serviceName}
*Date:* ${estimateData.date}
*Name:* ${estimateData.name}
*Phone:* ${estimateData.phone}
*Area:* ${estimateData.area}
*Estimated Cost:* ₹${estimateData.total}
Please dispatch a mechanic or schedule pick-up. Thanks!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919281410305?text=${encodedText}`, '_blank');
    
    // Clear and complete
    setEstimateData(null);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    onBookingComplete();
  };

  return (
    <section id="booking-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_40%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full inline-block">
              // INSTANT QUOTATION /
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none">
              Get your free estimate!
            </h2>
            <p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
              Input your vehicle details and preferred appointment slot. Our proprietary automated diagnostic algorithm calculates standard OEM labor rates and parts costs instantly.
            </p>

            <div className="space-y-4 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue/20 text-brand-blue p-2.5 rounded-xl border border-brand-blue/10">
                  <ShieldAlert className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">No Obligation Quote</span>
                  <span className="text-[11px] text-slate-400 font-light">Free diagnostics. Decline anytime if not satisfied.</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue/20 text-brand-blue p-2.5 rounded-xl border border-brand-blue/10">
                  <Calendar className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">Flexible Pick-up & Drop</span>
                  <span className="text-[11px] text-slate-400 font-light">Free pickup from your Hyderabad home/office.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form / Receipt Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative min-h-[420px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!estimateData ? (
                  // Booking Inputs Form
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Service Dropdown */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Choose a Service
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.id} className="bg-slate-900">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Area Dropdown (Hyderabad) */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Hyderabad Area
                        </label>
                        <select
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
                        >
                          {HYDERABAD_AREAS.map((a) => (
                            <option key={a} value={a} className="bg-slate-900">
                              {a}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date Picker */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Preferred Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors cursor-pointer [color-scheme:dark]"
                          />
                          <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. Ramesh Kumar"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors"
                          />
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="e.g. 9876543210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors"
                          />
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="e.g. ramesh@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue transition-colors"
                          />
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Submit Button with Loading Trigger */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 disabled:bg-slate-800 text-white font-display font-bold py-3.5 rounded-xl mt-4 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Generating Dynamic Quotation...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Cost Estimate</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Estimate Result Receipt Card
                  <motion.div
                    key="estimate"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6 text-slate-100"
                  >
                    <div className="text-center pb-4 border-b border-slate-800">
                      <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-full w-max mx-auto mb-2 border border-emerald-500/20">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-black text-xl text-white">Quotation Generated!</h3>
                      <span className="text-xs text-slate-400 font-mono">Ref Order: {estimateData.orderId}</span>
                    </div>

                    <div className="space-y-3 font-sans text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-light">Client Name:</span>
                        <span className="font-bold text-white">{estimateData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-light">Selected Service:</span>
                        <span className="font-bold text-brand-blue">{estimateData.serviceName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-light">Hyderabad Pickup:</span>
                        <span className="font-bold text-white">{estimateData.area} Area</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-light">Schedule Date:</span>
                        <span className="font-bold text-white">{estimateData.date}</span>
                      </div>
                      
                      <div className="border-t border-slate-800 pt-3 space-y-2">
                        <div className="flex justify-between text-slate-400">
                          <span>Standard OEM Parts Cost:</span>
                          <span>₹{estimateData.parts}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Technician Labor Rate:</span>
                          <span>₹{estimateData.labor}</span>
                        </div>
                        <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-dashed border-slate-800">
                          <span className="flex items-center gap-1">
                            Estimated Total <Sparkles className="w-3.5 h-3.5 text-brand-blue inline" />
                          </span>
                          <span className="text-brand-blue text-lg">₹{estimateData.total}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      <button
                        onClick={() => setEstimateData(null)}
                        className="w-full bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 font-display font-semibold text-xs py-3 rounded-xl transition-all cursor-pointer"
                      >
                        Recalculate / Back
                      </button>
                      <button
                        onClick={handleConfirmBooking}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20 cursor-pointer"
                      >
                        <span>Confirm on WhatsApp</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-slate-500 font-mono leading-none">
                      *Estimates are calculated using standard insurance-approved tariff tables.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
