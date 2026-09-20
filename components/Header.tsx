'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { Phone, MessageCircle, Menu, X, Home } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand / Consultant Identity */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold tracking-tight shadow-sm group-hover:bg-orange-500 transition-all">
              <Home className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-none">
                Deepak Sharma Property
              </span>
              <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                Noida &amp; Yamuna Expressway
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-all px-3.5 py-1.5 rounded-full ${
                    isActive
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${AGENT_INFO.phone}`}
              aria-label="Call Deepak Sharma"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{AGENT_INFO.displayPhone}</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl(PREFILLED_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden gap-1.5">
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="p-2 text-slate-700 hover:text-orange-600 rounded-lg hover:bg-slate-50"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 text-orange-600" />
            </a>
            <button
              id="mobile-nav-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-orange-600 rounded-lg focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.2]" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${
                    isActive
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp for Property Inquiry
            </a>
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              Call Now ({AGENT_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
