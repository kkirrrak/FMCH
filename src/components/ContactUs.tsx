import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock, Send, Wrench, Check } from 'lucide-react';
import BrandLogos from './BrandLogos';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    saveInfo: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const whatsappNum = '919281410305';
    const text = `*FixMyCarHub Contact Form Inquiry*\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Phone:* ${formData.phone}\n` +
                 `*Subject:* ${formData.subject || 'General'}\n` +
                 `*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        saveInfo: false,
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="pt-[100px] bg-white">
      {/* Page Title Banner */}
      <div 
        className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center bg-slate-900 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center space-y-3 px-4 z-10">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-300">
            <span className="hover:text-brand-blue cursor-pointer transition-colors">Home</span>
            <span>&gt;</span>
            <span className="text-brand-blue font-semibold">Contact Us</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
      </div>

      {/* 4 Contact Info Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Mail Us */}
          <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-4 hover:shadow-lg transition-all group">
            <div className="bg-blue-50 text-brand-blue p-4 rounded-2xl w-max transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest">
                — MAIL US 24/7
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Email Address
              </h3>
              <p className="font-sans text-xs text-gray-500 font-light leading-relaxed">
                <a href="mailto:support@fixmycarhub.com" className="hover:text-brand-blue transition-colors block">support@fixmycarhub.com</a>
                <a href="mailto:info@fixmycarhub.com" className="hover:text-brand-blue transition-colors block">info@fixmycarhub.com</a>
              </p>
            </div>
          </div>

          {/* Card 2: Our Location */}
          <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-4 hover:shadow-lg transition-all group">
            <div className="bg-blue-50 text-brand-blue p-4 rounded-2xl w-max transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest">
                — OUR LOCATION
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Workshop Address
              </h3>
              <p className="font-sans text-xs text-gray-500 font-light leading-relaxed">
                FIXMYCARHUB Workshop, 6-61, Puppalaguda Rd, Happy Homes, Alkapoor, Ibrahim Bagh, Hyderabad, Telangana 500089
              </p>
            </div>
          </div>

          {/* Card 3: Call Us */}
          <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-4 hover:shadow-lg transition-all group">
            <div className="bg-blue-50 text-brand-blue p-4 rounded-2xl w-max transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest">
                — CALL US 24/7
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Phone Number
              </h3>
              <p className="font-sans text-xs text-gray-500 font-light leading-relaxed">
                <a href="tel:+919281410305" className="hover:text-brand-blue transition-colors block font-semibold text-slate-800">+91 92814 10305</a>
                <span className="block text-slate-400">Emergencies open 24/7</span>
              </p>
            </div>
          </div>

          {/* Card 4: Working Days */}
          <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-4 hover:shadow-lg transition-all group">
            <div className="bg-blue-50 text-brand-blue p-4 rounded-2xl w-max transition-colors group-hover:bg-brand-blue group-hover:text-white">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="block font-mono text-[10px] text-brand-blue font-bold uppercase tracking-widest">
                — WORKING DAYS
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Operating Hours
              </h3>
              <p className="font-sans text-xs text-gray-500 font-light leading-relaxed">
                <span>Mon to Fri: 9:00am - 5:00pm</span>
                <span className="block">Saturday: 10:00am - 6:00pm</span>
                <span className="block text-red-500 font-medium">Sunday: Closed for Regular Service (SOS Open)</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Form and Wrench Graphic Section */}
      <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
        
        {/* Huge Decorative SVG Wrench background shape */}
        <div className="absolute left-[-150px] top-[10%] w-[500px] h-[500px] text-slate-200/50 pointer-events-none select-none hidden lg:block z-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <path d="M90 10 C80 0, 60 0, 50 10 L45 15 C42 12, 38 12, 35 15 L15 35 C12 38, 12 42, 15 45 L20 50 L10 70 L15 85 L30 90 L50 80 L55 85 C58 88, 62 88, 65 85 L85 65 C88 62, 88 58, 85 55 L80 50 L90 10 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column info */}
            <div className="lg:col-span-5 space-y-6 lg:pt-12">
              <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest">
                // GET IN TOUCH /
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                Happy to answer all of your questions
              </h2>
              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
                Aap hume kabhi bhi contact kar sakte hain. Humare customer managers aur expert mechanics aapki car ki technical issues ko samajhne aur diagnose karne ke liye humesha ready hain.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-brand-blue text-white p-2 rounded-full mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Prompt Response Guarantee</h4>
                    <p className="font-sans text-xs text-gray-500 font-light">We reply to all email inquiries within 2 hours during normal hours.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-brand-blue text-white p-2 rounded-full mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Certified Mechanical Advice</h4>
                    <p className="font-sans text-xs text-gray-500 font-light">Your inquiry is routed directly to a senior workshop technician.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Form Box in Soft slate */}
            <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
              <div className="space-y-2 mb-8">
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Send a message
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Your email address will not be published. Required fields are marked *
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-800">Redirecting to WhatsApp...</h4>
                  <p className="font-sans text-xs text-emerald-600 font-light max-w-sm mx-auto">
                    Aapka message FixMyCarHub team ko send karne ke liye WhatsApp pe redirect kiya ja raha hai.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 font-sans">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 font-sans">Your Email *</label>
                      <input 
                        type="email" 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 font-sans">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 92814 10305" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 font-sans">Subject</label>
                      <input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Engine diagnostics / alignment" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 font-sans">Your Message *</label>
                    <textarea 
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your vehicle issues here..." 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input 
                      type="checkbox" 
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-slate-200 text-brand-blue focus:ring-brand-blue/30 cursor-pointer"
                    />
                    <label htmlFor="saveInfo" className="text-[11px] text-gray-400 font-sans cursor-pointer select-none">
                      Save my name, email, and phone in this browser for the next time I comment.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto bg-slate-900 hover:bg-brand-blue text-white font-display font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get Cost Estimate on WhatsApp ↗</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Multi-brand logos strip */}
      <BrandLogos />

      {/* Google Maps Location Embedding */}
      <section className="w-full h-[400px] border-t border-slate-100">
        <iframe 
          title="FixMyCarHub Hyderabad Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6509930818224!2d78.3615822!3d17.3805175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941be2810a01%3A0x6b142079012674e5!2sPuppalaguda%20Rd%2C%20Alkapoor%20Township%2C%20Hyderabad%2C%20Telangana%20500089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
