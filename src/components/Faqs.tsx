import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQS_DATA } from '../data';

export default function Faqs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Split into two columns
  const midpoint = Math.ceil(filteredFaqs.length / 2);
  const leftColumn = filteredFaqs.slice(0, midpoint);
  const rightColumn = filteredFaqs.slice(midpoint);

  const renderFaqItem = (faq: typeof FAQS_DATA[0], index: number) => {
    const isOpen = openIdx === index;
    return (
      <motion.div
        key={faq.q}
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full px-5 py-4 text-left flex items-start justify-between gap-3 cursor-pointer focus:outline-none"
        >
          <div className="flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
            <span className="font-display font-bold text-slate-900 text-xs sm:text-sm leading-snug">
              {faq.q}
            </span>
          </div>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-1 pl-10 font-sans text-[11px] sm:text-xs text-gray-500 font-light leading-relaxed border-t border-slate-50">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section id="faqs-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative z-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Header row: Title + Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <span className="block text-[11px] font-mono text-brand-blue uppercase tracking-widest font-bold">
              — FAQ BLOCK /
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xs text-gray-500 leading-relaxed font-light max-w-md">
              Common sawalon ke answers yahan collect kiye hain. Fast roadside repairs aur diagnostics ki complete transparency humara standard hai.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-100 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <span className="block text-[10px] font-mono text-gray-400 mt-1.5 text-right">
              {filteredFaqs.length} of {FAQS_DATA.length} answers
            </span>
          </div>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {leftColumn.map((faq, idx) => renderFaqItem(faq, idx))}
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {rightColumn.map((faq, idx) => renderFaqItem(faq, midpoint + idx))}
            </AnimatePresence>
          </div>
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 mt-4">
            <p className="text-slate-400 text-sm font-sans font-light">No FAQs match your search query.</p>
          </div>
        )}

      </div>
    </section>
  );
}
