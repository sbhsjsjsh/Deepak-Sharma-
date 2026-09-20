import { getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { MessageCircle, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function WhatsAppLeadSection() {
  return (
    <section id="whatsapp-lead" className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-4">
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
          <span>Instant WhatsApp Advisory</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-serif mb-3">
          Looking for a Property in Noida?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-7 max-w-lg mx-auto font-light">
          Share your budget and requirements to receive verified listings directly on WhatsApp.
        </p>

        <div className="flex justify-center mb-8">
          <a
            id="whatsapp-lead-btn"
            href={getWhatsAppUrl(PREFILLED_MESSAGES.generalInquiry)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm sm:text-base font-bold shadow-lg shadow-emerald-950/50 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Send Property Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick benefits */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant brochures</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Site visits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct negotiation</span>
          </div>
        </div>

      </div>
    </section>
  );
}
