export default function Marquee() {
  const words = [
    'Emergency & SOS',
    'Mechanical Services',
    'Electrical & Wiring',
    'Brake Service',
    'AC & Climate',
    'Tyres & Wheels',
    'Periodic Maintenance',
    'Body Shop & Painting',
    'Cleaning & Detailing',
    'Concierge & Others',
  ];

  const marqueeItems = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-white py-6 md:py-16 overflow-hidden relative select-none border-b border-gray-100">
      <div className="marquee-track flex items-center">
        {marqueeItems.map((word, idx) => (
          <div key={idx} className="flex items-center mx-4 md:mx-12 flex-shrink-0">
            {/* Outline font style matching exact screenshot design */}
            <span className="font-display font-black text-3xl sm:text-5xl md:text-8xl text-transparent [-webkit-text-stroke:1px_#e2e8f0] md:[-webkit-text-stroke:2px_#e2e8f0] hover:[-webkit-text-stroke:2px_#0036ff] transition-all uppercase tracking-wider whitespace-nowrap">
              {word}
            </span>
            <span className="text-xl sm:text-4xl text-brand-blue ml-8 md:ml-24 font-bold select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
