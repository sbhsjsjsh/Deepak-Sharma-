import type { Metadata } from 'next';
import Services from '@/components/Services';
import WhatsAppLeadSection from '@/components/WhatsAppLeadSection';
import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { ShieldCheck, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Services in Noida | Buying, Selling & Renting | Deepak Sharma',
  description:
    'Comprehensive residential & commercial property services in Noida and Yamuna Expressway: Buying, Selling, and Renting assistance by Deepak Sharma.',
};

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-14">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-lg">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Spectrum Advisory &bull; Noida &amp; Yamuna Expressway</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white mb-4">
              Real Estate Services
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed mb-6">
              Whether you are looking to purchase your dream home, sell an investment property at peak market value, or find verified tenants, I provide personalized, transparent guidance at every step.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No Artificial Markups
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct Owner &amp; Developer Verification
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Registry &amp; Legal Assistance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Component */}
      <Services />

      {/* Why Work With Deepak Sharma Direct Section */}
      <section className="py-14 sm:py-18 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight mb-3">
              How I Assist You Throughout Your Property Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Personalized attention without corporate delays or portal spam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Curated Shortlisting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Skip hundreds of unverified web listings. I curate 3 to 5 prime options aligned precisely with your budget and handover timeline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Accompanied Site Visits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In-person guided site visits across sectors in Noida, Greater Noida, and Yamuna Expressway. I point out structural and master-plan realities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Fair Negotiation &amp; Papers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Honest rate negotiations, authority title checks, draft agreements, and seamless registry coordination till possession.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(PREFILLED_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Discuss Your Requirements on WhatsApp</span>
            </a>
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-white transition-all"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Call Deepak Sharma Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Lead Section */}
      <WhatsAppLeadSection />
    </div>
  );
}
