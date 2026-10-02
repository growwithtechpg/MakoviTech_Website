import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import {
  BUSINESS_CONFIG,
  DISPLAY_PHONE,
  TEL_URL,
  getWhatsAppUrl,
} from '../config/businessConfig';

interface NavbarProps {
  onNavigateToContact: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Applications', href: '#applications' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090e17]/95 backdrop-blur-md border-b border-slate-800 py-2.5 sm:py-3 shadow-xl shadow-black/50'
          : 'bg-[#090e17]/85 backdrop-blur-sm border-b border-slate-800/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Element */}
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded shrink-0"
            aria-label="Makovi Tech Homepage"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-slate-900 border border-slate-700 flex items-center justify-center relative overflow-hidden group-hover:border-sky-500 transition-colors shadow-inner">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 group-hover:text-sky-300 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-slate-100 transition-colors uppercase">
              {COMPANY_INFO.name}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="relative py-1 text-slate-300 hover:text-white transition-colors group/link"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right-side CTA buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Us CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Makovi Tech"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-600/90 border border-emerald-700/60 rounded transition-all shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Send Enquiry CTA */}
            <button
              onClick={() => onNavigateToContact()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded transition-all shadow-md shadow-sky-950/40 whitespace-nowrap cursor-pointer"
            >
              <span>Send Enquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={TEL_URL}
              aria-label="Call Makovi Tech"
              className="p-1.5 rounded text-sky-400 bg-slate-900 border border-slate-700 hover:text-white sm:hidden"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#090e17] rounded-b-lg">
            <nav className="flex flex-col space-y-1 px-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Contact Quick Actions Bar */}
            <div className="px-2 pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded transition-colors"
              >
                <span>Send Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={TEL_URL}
                  aria-label="Call Makovi Tech"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Makovi Tech on WhatsApp"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
