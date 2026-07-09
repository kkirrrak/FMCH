import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoCards from './components/PromoCards';
import WhyChooseUs from './components/WhyChooseUs';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import BrandLogos from './components/BrandLogos';
import BookingForm from './components/BookingForm';
import Blog from './components/Blog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SosModal from './components/SosModal';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Faqs from './components/Faqs';
import { PricingPlan } from './types';

type PageType = 'home' | 'about' | 'services' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setActivePage('home'); // Route back home to show the form
    setTimeout(() => {
      const element = document.getElementById('booking-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    alert(`Selected Membership Plan: ${plan.name}. Let's fill the estimate form to schedule your first diagnostics!`);
    handleOpenBooking('maintenance');
  };

  return (
    <div className="bg-white min-h-screen relative selection:bg-brand-blue selection:text-white">
      
      {/* 24/7 Global SOS Banner header alert for urgent cases */}
      <div className="bg-red-600 text-white text-center py-1.5 text-[10px] md:text-xs font-mono font-bold tracking-wider z-[60] relative flex items-center justify-center gap-1">
        <span>🚨 HYDERABAD 24/7 ROADSIDE SOS EMERGENCY ACTIVE</span>
        <button 
          onClick={() => setIsSosOpen(true)} 
          className="underline hover:text-slate-900 transition-colors font-sans font-black ml-1 uppercase cursor-pointer"
        >
          Activate Dispatch Now
        </button>
      </div>

      {/* Header Navigation with active page state */}
      <Header
        onOpenSos={() => setIsSosOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        activePage={activePage}
        onChangePage={setActivePage}
      />

      {/* Conditional Page Rendering */}
      {activePage === 'home' && (
        <>
          {/* Hero Carousel */}
          <Hero onOpenBooking={() => handleOpenBooking('maintenance')} />

          {/* Stats Counter (horizontal block right below slider) */}
          <Stats />

          {/* Service Carousel/Grid */}
          <Services
            onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
          />

          {/* Why Choose Us Section with 15 Years Badge */}
          <WhyChooseUs onOpenBooking={() => handleOpenBooking('maintenance')} />

          {/* Rotating Marquee Strip */}
          <Marquee />

          {/* Interactive How It Works Steps Section */}
          <HowItWorks />

          {/* Customer Testimonials Carousel */}
          <Testimonials />

          {/* Pricing Memberships */}
          <Pricing onSelectPlan={handleSelectPlan} />

          {/* Collapsible FAQs Section */}
          <Faqs />

          {/* Promo Highlights Overlapping Card Banners */}
          <PromoCards
            onOpenBooking={() => handleOpenBooking()}
            onOpenSos={() => setIsSosOpen(true)}
          />

          {/* Indian Multi-Brand Automotive badges */}
          <BrandLogos />

          {/* Booking and Dynamic estimation form */}
          <BookingForm
            preSelectedServiceId={bookingServiceId}
            onBookingComplete={() => {}}
          />

          {/* Blog & News tips */}
          <Blog />
        </>
      )}

      {activePage === 'about' && (
        <AboutUs onOpenBooking={() => handleOpenBooking('maintenance')} />
      )}

      {activePage === 'services' && (
        <div className="pt-[100px] bg-white">
          {/* Services Page Header Banner */}
          <div 
            className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center bg-slate-900 overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1920")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-center space-y-3 px-4 z-10">
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Our Services
              </h1>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-300">
                <span className="hover:text-brand-blue cursor-pointer transition-colors" onClick={() => setActivePage('home')}>Home</span>
                <span>&gt;</span>
                <span className="text-brand-blue font-semibold">Services</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
          </div>

          <Services
            layoutMode="grid"
            onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
          />
          <BrandLogos />
        </div>
      )}

      {activePage === 'contact' && (
        <ContactUs />
      )}

      {/* Shared Footer with dynamic navigation links */}
      <Footer onChangePage={setActivePage} />

      {/* Interactive WhatsApp floating Widget */}
      <WhatsAppButton />

      {/* Roadside Assistance dispatch simulator modal */}
      <SosModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />

    </div>
  );
}
