import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/siteData';
import { ProductSchematic } from './ProductSchematic';

interface MovingSliderProps {
  onSelectProduct: (productName: string) => void;
}

export const MovingSlider: React.FC<MovingSliderProps> = ({ onSelectProduct }) => {
  // Combine products and key applications for a rich dual-row or seamless ticker
  const sliderItems = [
    ...PRODUCTS.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category,
      schematic: p.schematicType,
      type: 'product',
    })),
    ...INDUSTRIES.map((ind) => ({
      id: ind.id,
      name: `${ind.name} Line`,
      category: 'Application Sector',
      schematic: 'welded-filter',
      type: 'industry',
    })),
  ];

  // Duplicate items for continuous loop
  const duplicatedItems = [...sliderItems, ...sliderItems];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-6 overflow-hidden relative select-none">
      {/* Subtle edge fade overlays for infinite look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Top Ticker Meta Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
            Live Production Portfolio &middot; Press Cutting &amp; Woven Screens
          </span>
        </div>
        <span className="text-[10px] font-mono text-sky-400 hidden sm:inline">
          HOVER TO PAUSE &middot; CLICK TO ENQUIRE
        </span>
      </div>

      {/* Moving Track */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {duplicatedItems.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => onSelectProduct(item.name.replace(' Line', ''))}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-sky-500/80 transition-all text-left shrink-0 cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 text-sky-400 flex items-center justify-center group-hover:border-sky-500 transition-colors shrink-0">
                <ProductSchematic type={item.schematic} className="w-4 h-4" />
              </div>

              <div>
                <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors whitespace-nowrap flex items-center gap-1.5">
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                  {item.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
