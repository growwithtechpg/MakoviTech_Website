import React from 'react';
import { Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SITE_IMAGES, MANUFACTURING_CAPABILITIES, MANUFACTURING_STEPS } from '../data/siteData';

interface ManufacturingProps {
  onEnquire: (subject?: string) => void;
}

export const Manufacturing: React.FC<ManufacturingProps> = ({ onEnquire }) => {
  return (
    <section id="manufacturing" className="py-20 md:py-28 bg-[#090e17] bg-mesh-grid-dark relative border-b border-slate-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Technical Narrative & 5 Capability Rows */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">
              In-House Tooling &amp; Facility
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight text-balance">
              Precision Cutting for Industrial Applications
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              {COMPANY_INFO.manufacturingText}
            </p>

            {/* 5 Numbered Capability Rows */}
            <div className="space-y-3.5 mb-8">
              {MANUFACTURING_CAPABILITIES.map((cap) => (
                <div
                  key={cap.code}
                  className="p-3.5 rounded border border-slate-800 bg-slate-900/70 hover:bg-slate-900 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded bg-sky-950 border border-sky-800/60 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold">{cap.code}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onEnquire('Cutting Dies & Disc Sizing Enquiry')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded transition-colors shadow-md cursor-pointer"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Enquire About Die Sizes &amp; Diameters</span>
              </button>
            </div>
          </div>

          {/* Right Column: Press Cutting Machine Image + 3-Step Process Strip */}
          <div className="lg:col-span-6 space-y-6">
            {/* Press Cutting Machine Image */}
            <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-xl relative group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={SITE_IMAGES.manufacturing}
                  alt="Industrial wire mesh press cutting machines and precision cutting dies"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
              </div>

              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    Wire Mesh Press Cutting Machinery
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Cutting dies configured for exact-size screen components &amp; filters
                  </div>
                </div>
                <span className="text-[11px] font-mono text-sky-400 border border-sky-500/40 px-2 py-0.5 rounded bg-sky-950/40">
                  PRESS CUTTING
                </span>
              </div>
            </div>

            {/* 3-Step Technical Process Strip */}
            <div className="p-5 rounded-lg border border-slate-800 bg-slate-900/80">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Fabrication Sequence</span>
                <span className="text-[11px] font-mono text-sky-400">PRESS TOOLING</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {MANUFACTURING_STEPS.map((step, idx) => (
                  <div key={step.step} className="p-3 rounded bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono font-bold text-sky-400 mb-1">
                        {step.step}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
