import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';

// Official WhatsApp brand icon (path from WhatsApp brand guidelines)
function WhatsAppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// WhatsApp message builders (from old project brand.js)
const WHATSAPP_NUMBER = '919281410305';

const buildWhatsAppUrl = (message = '') => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

const buildSosMessage = () => `Hello FixMyCarHub 🚨

My vehicle has broken down.
I need roadside assistance immediately.

Location:
Vehicle:
Problem:

Please send a mechanic urgently.`;

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;

    const prefix = 'Hello FixMyCarHub! ';
    const url = buildWhatsAppUrl(prefix + msg.trim());
    window.open(url, '_blank', 'noopener,noreferrer');
    
    setMsg('');
    setIsOpen(false);
  };

  const handleQuickSos = () => {
    const url = buildWhatsAppUrl(buildSosMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Active WhatsApp chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="bg-white rounded-3xl w-80 shadow-2xl border border-slate-100 overflow-hidden mb-4 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <WhatsAppIcon size={20} className="text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#075e54]" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white leading-tight">FixMyCarHub Support</span>
                  <span className="text-[10px] text-emerald-200">Online | Replies instantly</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/15 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#ece5dd] min-h-[140px] flex flex-col gap-3">
              <div className="bg-white p-3 rounded-2xl max-w-[85%] shadow-sm self-start text-xs text-slate-800 leading-relaxed font-light">
                Hello there! 👋 Welcome to Hyderabad&apos;s Premium Car Care. 
                <br /><br />
                Do you need an instant cost estimate, breakdown pickup, or emergency SOS towing? Tell me below!
              </div>
              {/* Quick SOS button inside chat */}
              <button
                onClick={handleQuickSos}
                className="bg-red-600 text-white text-[10px] font-bold py-2 px-3 rounded-xl self-end shadow cursor-pointer hover:bg-red-700 transition-all"
              >
                🚨 Quick SOS Alert
              </button>
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSend} className="p-3 bg-white flex gap-2 border-t border-slate-100">
              <input
                type="text"
                placeholder="Type your vehicle issue..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
                className="w-full bg-slate-50 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-600 border border-slate-100"
              />
              <button
                type="submit"
                className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-2 rounded-xl transition-all flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary WhatsApp floating circle button — Official WhatsApp SVG logo */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center relative cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={26} />
        
        {/* Subtle tooltip indicator */}
        <span className="absolute right-14 bg-slate-900 text-white font-semibold text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow font-sans">
          WhatsApp Chat Online
        </span>
      </motion.button>

    </div>
  );
}
