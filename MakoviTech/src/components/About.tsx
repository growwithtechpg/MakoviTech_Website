import React from 'react';
import { Factory } from 'lucide-react';
import { COMPANY_INFO, SITE_IMAGES } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative border-b border-slate-200 bg-mesh-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Extruder Disc Photo + Manufacturing & Supply Scope Callout */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 shadow-xl group">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={SITE_IMAGES.wireMeshFilterWeldedScreen}
                    alt="Precision welded wire mesh filter screen cylinders and mesh components"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Callout Box: Manufacturing & Supply Scope */}
                <div className="p-5 bg-white border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
                    <Factory className="w-4 h-4 text-sky-600" />
                    <span>Manufacturing &amp; Supply Scope</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    In-house wire mesh press cutting facility equipped with multi-size cutting dies to produce exact-size diameter wire mesh screens, welded filter screens, gaskets, and spin pack filters.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500">
                    Facility: Ambernath (E), Thane, Maharashtra
                  </div>
                </div>
              </div>

              {/* Engineering Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-sky-600/70 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-sky-600/70 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content & 3 Highlight Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-3">
              About Makovi Tech
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
              Built Around Precision, Filtration &amp; Reliability
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-5">
              {COMPANY_INFO.aboutText}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {COMPANY_INFO.manufacturingText}
            </p>

            {/* 3 Highlight Pillars with Left Sky-Blue Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-r border-l-4 border-sky-600 bg-slate-50 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-sky-700 mb-1">
                  01
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  Precision Manufacturing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated press cutting machines and tooling tailored for exact-size disc filters.
                </p>
              </div>

              <div className="p-4 rounded-r border-l-4 border-sky-600 bg-slate-50 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-sky-700 mb-1">
                  02
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  Industrial Applications
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supplying plastics &amp; chemical, pharmaceutical, food processing, heat treatment, and filtering.
                </p>
              </div>

              <div className="p-4 rounded-r border-l-4 border-sky-600 bg-slate-50 border-y border-r border-slate-200 shadow-sm">
                <div className="text-xs font-mono font-bold text-sky-700 mb-1">
                  03
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  Custom Cut Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Circular cutting dies configured to produce required screen diameters, welded filters, and mesh gaskets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
