import { useState, useEffect } from 'react';

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

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: 1000,
      suffix: '+',
      desc: 'Cars Repaired & Serviced',
    },
    {
      id: 2,
      value: '24/7',
      suffix: '',
      desc: 'Emergency SOS Support Active',
    },
    {
      id: 3,
      value: 30,
      suffix: 'Min',
      desc: 'Average Response Time across Hyderabad',
    },
    {
      id: 4,
      value: 100,
      suffix: '%',
      desc: 'OEM Genuine Parts & Certified Mechanics',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white border-b border-gray-100 relative z-30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.id} className="text-left space-y-2">
              <div className="flex items-baseline font-display font-black text-4xl md:text-6xl text-slate-900 tracking-tight">
                {typeof stat.value === 'number' ? (
                  <CountUp end={stat.value} />
                ) : (
                  <span>{stat.value}</span>
                )}
                <span className="text-brand-blue font-bold text-3xl md:text-5xl ml-0.5">{stat.suffix}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
