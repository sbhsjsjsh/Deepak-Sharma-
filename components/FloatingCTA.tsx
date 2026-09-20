'use client';

import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingCTA() {
  const whatsappUrl = getWhatsAppUrl(PREFILLED_MESSAGES.floating);

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col gap-3 pointer-events-auto"
    >
      {/* 1. WhatsApp Floating CTA */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip */}
        <span
          role="tooltip"
          className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
        >
          WhatsApp
        </span>

        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp - Chat with Deepak Sharma"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* 2. Call Floating CTA */}
      <div className="relative group flex items-center justify-end">
        {/* Tooltip */}
        <span
          role="tooltip"
          className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
        >
          Call Now
        </span>

        <a
          id="floating-call-btn"
          href={`tel:${AGENT_INFO.phone}`}
          aria-label="Call Now - 99532 45542"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-400/50 border border-slate-700/50"
        >
          <Phone className="w-6 h-6 text-emerald-400" />
        </a>
      </div>
    </aside>
  );
}
