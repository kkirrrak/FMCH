import { useState, useEffect } from 'react';
import { Menu, X, Phone, AlertTriangle, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenSos: () => void;
  onOpenBooking: () => void;
  activePage: 'home' | 'about' | 'services' | 'contact';
  onChangePage: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Header({ 
  onOpenSos, 
  onOpenBooking, 
  activePage, 
  onChangePage 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' as const },
    { name: 'About Us', id: 'about' as const },
    { name: 'Services', id: 'services' as const },
    { name: 'Contact Us', id: 'contact' as const },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-0'
    }`}>
      {/* Upper Scrolling Announcement Bar - Visible on all devices when at top */}
      {!isScrolled && (
        <div className="w-full bg-slate-950 text-white py-2 overflow-hidden relative select-none border-b border-white/5 flex items-center z-50">
          <div className="marquee-track flex items-center">
            {Array(4).fill([
              "✦ Open 24/7 for Emergency Towing & Roadside SOS Support in Hyderabad",
              "✦ Call +91 92814 10305 for Instant Dispatch",
              "✦ FixMyCarHub Multi-Brand Premium Car Service Workshop",
              "✦ Book Online & Get Free 40-Point Diagnostic Checkup",
              "✦ OEM-Certified Engineers & Genuine Spares"
            ]).flat().map((phrase, idx) => (
              <span key={idx} className="inline-block mx-8 text-[10px] md:text-xs font-mono tracking-wider font-semibold text-slate-200 uppercase flex-shrink-0">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={`container mx-auto px-4 md:px-8 ${!isScrolled ? 'mt-4 md:mt-6' : ''}`}>
        <div className={`transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? '' 
            : 'bg-white/5 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl shadow-xl'
        }`}>
          
          {/* Left part: Logo & Call Widget */}
          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
            <button 
              onClick={() => {
                onChangePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              {/* Bigger logo icon with glass effect */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-105 duration-300 overflow-hidden ${
                isScrolled 
                  ? 'bg-white/90 backdrop-blur-md shadow-md border border-slate-100' 
                  : 'bg-white/10 backdrop-blur-md shadow-md shadow-brand-blue/20 border border-white/15'
              }`}>
                <img 
                  src="/src/assets/logo.jpg" 
                  alt="FixMyCarHub Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              {/* Styled logo text: FIXMY (blue) CAR (red) HUB (blue) */}
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className={`font-display font-black text-lg md:text-xl tracking-tight transition-colors ${
                    isScrolled ? 'text-[#1a3a6b]' : 'text-white'
                  }`}>
                    FIXMY
                  </span>
                  <span className={`font-display font-black text-lg md:text-xl tracking-tight transition-colors ${
                    isScrolled ? 'text-red-600' : 'text-red-400'
                  }`}>
                    CAR
                  </span>
                  <span className={`font-display font-black text-lg md:text-xl tracking-tight transition-colors ${
                    isScrolled ? 'text-[#1a3a6b]' : 'text-white'
                  }`}>
                    HUB
                  </span>
                </div>
                <span className={`text-[7px] md:text-[8px] tracking-[0.2em] uppercase font-bold mt-0.5 ${
                  isScrolled ? 'text-gray-400' : 'text-slate-300/80'
                }`}>
                  Expert Care Anytime, Anywhere
                </span>
              </div>
            </button>

            {/* Phone icon-only button (no number text) */}
            <a 
              href="tel:+919281410305"
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                isScrolled 
                  ? 'bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
              title="Call +91 92814 10305"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile menu and action toggles */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links - Floating Pill Style */}
          <nav className={`hidden lg:flex items-center gap-1.5 p-1.5 rounded-full border shadow-md transition-all ${
            isScrolled 
              ? 'bg-slate-50/80 backdrop-blur-md border-slate-100 shadow-slate-100/50' 
              : 'bg-white border-white/10 shadow-slate-900/10'
          }`}>
            {menuItems.map((item) => {
              const active = activePage === item.id;
              return (
                <button
                  key={item.name}
                  onClick={() => onChangePage(item.id)}
                  className={`font-sans font-semibold text-xs px-5 py-2 rounded-full transition-all cursor-pointer uppercase tracking-wider ${
                    active 
                      ? 'bg-brand-blue text-white font-bold shadow-md shadow-brand-blue/20' 
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/50'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Red Pulse SOS Button */}
            <button
              onClick={onOpenSos}
              className="sos-pulse-btn bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-red-500/20 transition-all cursor-pointer uppercase tracking-wider"
            >
              <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
              <span>SOS DISPATCH</span>
            </button>

            {/* Get Quote / Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="bg-brand-blue hover:bg-brand-light-blue text-white font-display font-bold text-xs px-5 py-3 rounded-full shadow-lg shadow-brand-blue/30 transition-all cursor-pointer uppercase tracking-wider"
            >
              Get Quote ↗
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-slate-900/80 backdrop-blur-md z-[999] transition-all duration-300">
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl p-6 pt-16 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="block font-mono text-[10px] text-brand-blue font-bold uppercase tracking-wider">
                — Navigation Menu
              </span>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      onChangePage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`font-display font-semibold text-lg text-left py-1 transition-colors flex items-center justify-between border-b border-slate-50 cursor-pointer ${
                      activePage === item.id ? 'text-brand-blue' : 'text-slate-800 hover:text-brand-blue'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </nav>

              {/* Call mobile widget — only phone icon + label */}
              <div className="bg-brand-blue/5 p-4 rounded-xl border border-brand-blue/10 flex items-center gap-3">
                <div className="bg-brand-blue text-white p-2 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-mono font-medium">24/7 SOS Helpline</span>
                  <a href="tel:+919281410305" className="font-display font-bold text-base text-brand-blue">
                    +91 92814 10305
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile drawer bottom actions */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenSos();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-display font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>SOS Roadside Help</span>
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-semibold py-3 rounded-xl"
              >
                Book Appointment
              </button>
              <p className="text-center text-[10px] text-gray-400 font-mono">
                FixMyCarHub Hyderabad © 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
