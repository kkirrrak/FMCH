import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onChangePage: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const usefulLinks = [
    { name: 'Home', id: 'home' as const },
    { name: 'About Us', id: 'about' as const },
    { name: 'Services', id: 'services' as const },
    { name: 'Contact Us', id: 'contact' as const },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans relative overflow-hidden">
      {/* Top Newsletter Strip */}
      <div className="border-b border-slate-900 py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-slate-900 to-brand-blue/30 border border-slate-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            <div className="max-w-md">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Get monthly maintenance checklists, diagnostic guides, and priority repair coupon codes. No spam.
              </p>
            </div>

            <div className="flex-1 max-w-md">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-brand-blue"
                  />
                  <button
                    type="submit"
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-semibold text-xs md:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-1 flex-shrink-0"
                  >
                    <span>Subscribe Now</span>
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span className="text-xs font-semibold">Thank you! Subscribed successfully.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">
            
            {/* Column 1: About & Logo */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-md shadow-brand-blue/30 overflow-hidden">
                  <img 
                    src="/src/assets/logo.jpg" 
                    alt="FixMyCarHub Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <span className="font-display font-black text-2xl tracking-tight text-white block">
                    FixMyCarHub
                  </span>
                  <span className="block text-[8px] tracking-widest uppercase font-mono -mt-1 font-bold text-slate-400">
                    Premium Car Care
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                FixMyCarHub is Hyderabad's premium multi-brand independent automotive repair and maintenance network. Hum standard machinery aur skilled mechanics ke saath quality car care ensure karte hain.
              </p>
              
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#facebook" className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-slate-400">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-slate-400">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#instagram" className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-slate-400">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white transition-all text-slate-400">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Useful Link
              </h4>
              <ul className="space-y-2.5 text-xs">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => onChangePage(link.id)} 
                      className="text-slate-400 hover:text-brand-blue hover:pl-1 transition-all text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Working Time */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Working Time
              </h4>
              <div className="space-y-3 text-xs text-slate-400 font-light">
                <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                  <span>Saturday</span>
                  <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                  <span>Sunday</span>
                  <span className="text-red-500 font-bold uppercase text-[10px]">Closed</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 animate-pulse" />
                  <span className="text-[10px] leading-relaxed">Emergency Roadside Towing & SOS: <strong>Open 24/7</strong></span>
                </div>
              </div>
            </div>

            {/* Column 4: Hyderabad Say Hello */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Say Hello
              </h4>
              <div className="space-y-3 text-xs text-slate-400 font-light">
                
                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold leading-none">Support Email</span>
                    <a href="mailto:support@fixmycarhub.com" className="text-white hover:text-brand-blue font-medium mt-1 inline-block">
                      support@fixmycarhub.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold leading-none">24/7 Helpline</span>
                    <a href="tel:+919281410305" className="text-white hover:text-brand-blue font-medium mt-1 inline-block">
                      +91 92814 10305
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold leading-none">Hyderabad Workshop</span>
                    <span className="text-slate-400 block mt-1 leading-relaxed text-[11px]">
                      FIXMYCARHUB Workshop, 6-61, Puppalaguda Rd, Happy Homes, Alkapoor, Ibrahim Bagh, Hyderabad, Telangana 500089
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 font-mono relative z-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Copyright © 2026 FixMyCarHub. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-brand-blue">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-brand-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
