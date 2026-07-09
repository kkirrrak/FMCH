import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Award, 
  Shield, 
  UserCheck, 
  Star, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  Share2
} from 'lucide-react';
import BrandLogos from './BrandLogos';
import { TIMELINE_DATA, TESTIMONIALS_DATA } from '../data';

function CountUp({ end, duration = 1500 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <span>{count}</span>;
}

interface AboutUsProps {
  onOpenBooking: () => void;
}

export default function AboutUs({ onOpenBooking }: AboutUsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const history = TIMELINE_DATA;

  const team = [
    {
      name: 'Mark Donald',
      role: 'Senior Tech',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    },
    {
      name: 'Rylee Eleanor',
      role: 'Mechanic',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    },
    {
      name: 'Darren Breda',
      role: 'Engineer',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400',
    },
    {
      name: 'David Green',
      role: 'Tuning',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
    },
  ];

  const testimonials = TESTIMONIALS_DATA;

  return (
    <div className="pt-[100px] bg-white overflow-hidden">
      {/* Banner Page Title */}
      <div 
        className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center bg-slate-900 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center space-y-3 px-4 z-10">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-300">
            <span className="hover:text-brand-blue cursor-pointer transition-colors">Home</span>
            <span>&gt;</span>
            <span className="text-brand-blue font-semibold">About Us</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
      </div>

      {/* Intro Craftsmanship Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1.5 rounded-full inline-block">
              / ABOUT US /
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-none">
              Top-quality craftsmanship with hands-on care tried and true.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pt-8">
            <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
              Humare FixMyCarHub garage par aapki car ka har ek kaam bilkul high-tech machines aur expert mechanics ke zariye kiya jata hai. Pure Hyderabad me best class repairs ke liye jana jata hai hamara premium workshop setup.
            </p>
            <p className="font-sans text-sm text-gray-500 leading-relaxed font-light">
              We carefully screen all of our mechanical engineers and master technicians, so you can rest assured that your vehicle will receive the absolute highest quality of service. Hum direct OEM genuine spares aur transparency guarantee karte hain.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-brand-blue/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Appointment ↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Three side-by-side card styles with white overlapping pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: 'Experienced Staff',
              subtitle: 'Certified Techs',
              image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=400',
            },
            {
              title: 'Quality Products',
              subtitle: '100% OEM Spares',
              image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=400',
            },
            {
              title: 'Modern Equipment',
              subtitle: 'Laser Diagnostics',
              image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=400',
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group flex flex-col items-center pb-6 bg-transparent"
            >
              <div className="w-full h-[280px] rounded-[32px] overflow-hidden shadow-md">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/15" />
              </div>
              
              {/* Overlapping Pill Badge */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 font-display font-black text-sm px-7 py-3 rounded-full shadow-lg border border-slate-100/50 whitespace-nowrap z-10 transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white text-center">
                {card.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Centerpiece Outline Logo & Floating Blue Car Section */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[450px]">
        {/* Outline background text "KARSFIX" */}
        <h2 
          className="absolute font-display font-black text-7xl md:text-[180px] tracking-widest uppercase opacity-20 pointer-events-none select-none text-center"
          style={{ 
            WebkitTextStroke: '2px rgba(255,255,255,0.08)', 
            color: 'transparent',
            top: '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        >
          KARSFIX
        </h2>

        {/* Floating blue car on top of the text */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-2xl px-4 flex justify-center mt-8"
        >
          <img 
            src="/src/assets/blue_sports_car.png" 
            alt="Blue sports car highlight" 
            className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,54,255,0.3)]"
          />
        </motion.div>
      </section>

      {/* History Timeline Section in Dark Background */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest bg-brand-blue/15 px-3 py-1 rounded-full">
                ⚡ OUR JOURNEY
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none">
                We are working hard
              </h2>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm font-light">
              Humara safar shuru hua tha ek chote single bay garage se, aur aaj hum Hyderabad ke premium workshop network me shumar hain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {history.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 group relative"
              >
                {/* Outlined year */}
                <div 
                  className="font-display font-black text-5xl sm:text-6xl text-transparent select-none leading-none group-hover:scale-105 transition-transform origin-left inline-block"
                  style={{
                    WebkitTextStroke: '1.5px #0036ff',
                    color: 'transparent'
                  }}
                >
                  {item.year}
                </div>
                
                {/* Timeline node dot */}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-blue group-hover:scale-125 transition-transform shadow-lg shadow-brand-blue/50" />
                  <div className="h-[2px] bg-slate-800 flex-1" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Expert Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">
              👥 EXPERT TEAM
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              We have a expert <span className="text-brand-blue">team</span> to serve you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 p-4 pb-6 flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-2xl overflow-hidden h-[240px] mb-4 bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display font-black text-base text-slate-900">
                    {member.name}
                  </h3>
                  <span className="text-xs text-brand-blue font-mono uppercase tracking-wider block mt-1">
                    {member.role}
                  </span>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="w-9 h-9 bg-slate-50 text-slate-400 group-hover:bg-brand-blue group-hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer border border-slate-100/50">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section with Outlined Numbers */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '1000', suffix: '+', desc: 'Cars Repaired & Serviced' },
              { value: '24/7', suffix: '', desc: 'Emergency SOS Support Active' },
              { value: '30', suffix: 'Min', desc: 'Average Response Time across Hyderabad' },
              { value: '100', suffix: '%', desc: 'OEM Genuine Parts & Certified Mechanics' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-3 text-left">
                <div className="flex items-baseline font-display font-black text-5xl md:text-7xl leading-none">
                  {/* Outlined numeric value */}
                  <span 
                    className="text-transparent" 
                    style={{ WebkitTextStroke: '2px #0036ff', color: 'transparent' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-brand-blue font-black ml-1">{stat.suffix}</span>
                </div>
                <p className="font-sans text-[11px] md:text-xs text-gray-500 leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Testimonial Image & Outlined Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[350px] md:h-[480px] w-full rounded-[40px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800" 
                  alt="Customer consulting with mechanic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />
              </div>
            </div>

            {/* Right: Quote Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 pl-0 lg:pl-6">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-brand-blue uppercase tracking-widest font-bold">
                  — TESTIMONIALS /
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
                  Hear what our <span className="text-brand-blue">customers</span> say about our workshop
                </h2>
              </div>

              {/* Box */}
              <div className="bg-white border border-slate-100 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-6 right-6 text-brand-blue/10">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50/50 text-brand-blue p-3.5 rounded-2xl w-max">
                    <Quote className="w-6 h-6 text-brand-blue fill-brand-blue" />
                  </div>

                  <p className="font-sans font-light text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <span className="block font-display font-black text-slate-900 text-xs sm:text-sm">
                        {testimonials[currentTestimonial].name}
                      </span>
                      <span className="block font-sans text-[10px] text-brand-blue font-semibold mt-0.5">
                        {testimonials[currentTestimonial].role}
                      </span>
                    </div>

                    {/* Navigation Circles */}
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="w-9 h-9 border border-slate-200 hover:bg-slate-900 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-slate-700"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                        className="w-9 h-9 border border-slate-200 hover:bg-slate-900 hover:text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-slate-700"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Outlined stats */}
              <div className="flex items-center gap-4 pt-4">
                <div 
                  className="font-display font-black text-5xl md:text-6xl text-transparent"
                  style={{ WebkitTextStroke: '1.5px #0036ff', color: 'transparent' }}
                >
                  460+
                </div>
                <p className="font-sans text-xs text-gray-500 font-light leading-snug">
                  Satisfied customer feedback we got from <br />
                  our premium car services.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Newsletter Subscription Block */}
      <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10 space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-sans text-xs sm:text-sm text-blue-100 max-w-lg mx-auto">
            Get latest car maintenance tips, discount coupons, and local Hyderabad garage offers straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 rounded-full bg-white/15 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/40 text-xs sm:text-sm"
            />
            <button className="bg-white hover:bg-blue-50 text-brand-blue font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer">
              <span>Subscribe Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
