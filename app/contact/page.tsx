import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';
import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Deepak Sharma | Real Estate Consultant in Noida & Yamuna Expressway',
  description:
    'Contact Deepak Sharma directly via WhatsApp or Phone call for buying, selling, or renting properties in Noida and Yamuna Expressway. Phone: 99532 45542.',
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-14">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-lg">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Personal Communication &bull; Fast Response</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white mb-4">
              Get in Touch with Deepak Sharma
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed mb-6">
              Connect directly for property consultations, site visit schedules, or resale evaluations across Noida and Yamuna Expressway.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-lg border border-white/20 text-white font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {AGENT_INFO.displayPhone}</span>
              </a>

              <a
                href={getWhatsAppUrl(PREFILLED_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] px-3.5 py-2 rounded-lg text-white font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant Chat</span>
              </a>

              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-2 rounded-lg border border-white/10 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Available 7 Days a Week
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section with Inquiry Form & Direct Cards */}
      <ContactSection />

      {/* Office & Coverage Area Map */}
      <LocationSection />
    </div>
  );
}
