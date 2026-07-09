import { Award, Compass, Heart, Anchor, ShieldAlert, Star, Disc, Wrench, Cpu, ShieldCheck } from 'lucide-react';

export default function BrandLogos() {
  const brands = [
    { name: 'Tata Motors', icon: Award },
    { name: 'Mahindra', icon: Compass },
    { name: 'Maruti Suzuki', icon: Heart },
    { name: 'Hyundai', icon: Anchor },
    { name: 'Honda Cars', icon: ShieldAlert },
    { name: 'Toyota India', icon: Star },
    { name: 'BMW India', icon: Disc },
    { name: 'Audi India', icon: Wrench },
    { name: 'Mercedes-Benz', icon: ShieldCheck },
    { name: 'Skoda Auto', icon: Cpu },
    { name: 'Volkswagen', icon: Award },
    { name: 'Kia Motors', icon: Heart },
  ];

  // Repeat brands to ensure smooth infinite marquee scroll
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="bg-slate-50 py-10 border-y border-slate-100 overflow-hidden relative select-none">
      <span className="block text-center text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">
        — Multi-Brand Service Excellence For —
      </span>
      
      <div className="marquee-track flex items-center gap-8 md:gap-12">
        {marqueeBrands.map((brand, idx) => {
          const BrandIcon = brand.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 transition-all text-slate-500 hover:text-brand-blue flex-shrink-0 cursor-pointer group"
            >
              <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center transition-all group-hover:border-brand-blue group-hover:shadow-md">
                <BrandIcon className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
              </div>
              <span className="font-display font-black text-xs md:text-sm tracking-tight text-slate-700 group-hover:text-brand-blue transition-colors">
                {brand.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
