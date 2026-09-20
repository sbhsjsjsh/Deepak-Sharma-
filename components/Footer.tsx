import Link from 'next/link';
import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { Building2, Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative">
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Consultant Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-none">
                  Deepak Sharma Property
                </span>
                <span className="text-xs text-slate-400">
                  {AGENT_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Residential and commercial property advisory across Noida, Greater Noida, and Yamuna Expressway.
            </p>

            <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-orange-400 text-xs font-semibold">
              {AGENT_INFO.motto}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Menu
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-orange-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h4>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Noida &amp; Yamuna Expressway, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href={`tel:${AGENT_INFO.phone}`} className="hover:text-orange-400 font-semibold">
                  +91 {AGENT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-medium hover:bg-slate-700 transition-colors border border-slate-700/50"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Deepak Sharma. All rights reserved.
          </p>

          <Link href="/" className="hover:text-slate-400 inline-flex items-center gap-1">
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
