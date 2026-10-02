import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, SITE_IMAGES } from '../data/siteData';
import { TEL_URL, getWhatsAppUrl } from '../config/businessConfig';

interface HeroProps {
  onNavigateToContact: () => void;
  onExploreProducts: () => void;
}

const HERO_SLIDES = [
  {
    id: 'slide-1',
    code: '01 / 05',
    tag: 'WOVEN MESH',
    title: 'Stainless Steel Wire Mesh',
    subtitle: 'High-grade woven stainless steel wire mesh for industrial screening & filtration',
    image: SITE_IMAGES.stainlessSteelWireMesh,
    alt: 'Stainless steel wire mesh rolls and sheets',
  },
  {
    id: 'slide-2',
    code: '02 / 05',
    tag: 'CLASSIFICATION',
    title: 'Wire Mesh Screen',
    subtitle: 'Durable woven screen panels for classification, separation & particle retention',
    image: SITE_IMAGES.wireMeshScreen,
    alt: 'Industrial wire mesh screen panel with square grid opening',
  },
  {
    id: 'slide-3',
    code: '03 / 05',
    tag: 'WELDED SCREENS',
    title: 'Wire Mesh Filter Welded Screen',
    subtitle: 'Welded wire mesh filter elements and cylinders for solid-liquid separation',
    image: SITE_IMAGES.wireMeshFilterWeldedScreen,
    alt: 'Welded wire mesh filter screen cylinder',
  },
  {
    id: 'slide-4',
    code: '04 / 05',
    tag: 'SEALING & MESH',
    title: 'Gaskets',
    subtitle: 'Compressed stainless steel wire mesh gaskets for heat treatment & equipment sealing',
    image: SITE_IMAGES.gaskets,
    alt: 'Compressed stainless steel wire mesh sealing gaskets',
  },
  {
    id: 'slide-5',
    code: '05 / 05',
    tag: 'POLYMER FILTRATION',
    title: 'Spin Pack Filter',
    subtitle: 'Precision rimmed circular filters configured for polymer extrusion & synthetic fibers',
    image: SITE_IMAGES.spinPackFilter,
    alt: 'Stainless steel spin pack filter disc assemblies',
  },
];

export const Hero: React.FC<HeroProps> = ({ onNavigateToContact, onExploreProducts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slider every 4.5 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[94vh] pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col justify-center overflow-hidden border-b border-slate-800 bg-[#090e17] bg-mesh-grid-dark"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker per Zero-Pill Discipline */}
            <div className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-3">
              {COMPANY_INFO.kicker}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              {COMPANY_INFO.tagline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded transition-all shadow-lg shadow-sky-950/40 whitespace-nowrap cursor-pointer"
              >
                <span>Send an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Makovi Tech on WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-300 hover:text-white bg-emerald-950/50 hover:bg-emerald-600/90 border border-emerald-700/60 rounded transition-all shadow-md whitespace-nowrap cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <a
                href={TEL_URL}
                aria-label="Call Makovi Tech"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded transition-all whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Moving Hero Slider Showcase with Proper Dedicated Product Images */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-lg overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Technical Framing Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-sky-400 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-sky-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-sky-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-sky-400 z-20 pointer-events-none" />

              {/* Top Bar with Live Index & Controls */}
              <div className="absolute top-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                    {activeSlide.code}
                  </span>
                  <span className="text-[10px] font-mono text-sky-300 bg-sky-950/80 backdrop-blur-md border border-sky-700/60 px-2 py-0.5 rounded uppercase">
                    {activeSlide.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded border border-white/20">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                    className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title={isPaused ? 'Play' : 'Pause'}
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5 text-sky-400" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slider Image Viewer */}
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-950">
                {HERO_SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                  </div>
                ))}
              </div>

              {/* Dynamic Caption Bar */}
              <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between relative z-20">
                <div className="min-h-[44px] flex flex-col justify-center">
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide transition-all">
                    {activeSlide.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {activeSlide.subtitle}
                  </div>
                </div>

                {/* Slide Jump Dots */}
                <div className="flex items-center gap-1.5 shrink-0 ml-4">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? 'w-6 bg-sky-400'
                          : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Summary Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded border border-slate-800/80 bg-slate-900/50">
            <div className="text-xs font-mono font-semibold text-sky-400 mb-1">
              01. CORE FOCUS
            </div>
            <div className="text-sm font-bold text-white mb-0.5">
              Wire Mesh &amp; Filters
            </div>
            <div className="text-xs text-slate-400">
              Stainless steel mesh, wire mesh screens, welded filters, gaskets &amp; spin packs.
            </div>
          </div>

          <div className="p-4 rounded border border-slate-800/80 bg-slate-900/50">
            <div className="text-xs font-mono font-semibold text-sky-400 mb-1">
              02. IN-HOUSE FACILITY
            </div>
            <div className="text-sm font-bold text-white mb-0.5">
              Press Cutting Machines
            </div>
            <div className="text-xs text-slate-400">
              Dedicated circular cutting dies stamping exact-size diameter components.
            </div>
          </div>

          <div className="p-4 rounded border border-slate-800/80 bg-slate-900/50">
            <div className="text-xs font-mono font-semibold text-sky-400 mb-1">
              03. SECTORS SERVED
            </div>
            <div className="text-sm font-bold text-white mb-0.5">
              Industrial Filtration &amp; Processing
            </div>
            <div className="text-xs text-slate-400">
              Plastics &amp; chemicals, pharmaceuticals, food processing, heat treatment &amp; filtering.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
