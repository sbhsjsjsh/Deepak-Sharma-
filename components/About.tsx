import { AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Phone, MapPin, Award, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/75 border border-slate-100/90 rounded-3xl p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Consultant Profile Avatar */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-md mb-3.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  DS
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {AGENT_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {AGENT_INFO.role}
              </p>
              
              {/* Motto */}
              <div className="mt-2.5 inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide border border-orange-200/60">
                {AGENT_INFO.motto}
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>Noida &amp; Yamuna Expressway</span>
              </div>
            </div>

            {/* Consultant Bio & Content */}
            <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-200/80 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1.5">
                Consultant Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Direct &amp; Transparent Property Guidance
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Direct assistance for buyers, sellers, and tenants across Noida, Greater Noida, and Yamuna Expressway.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                  <UserCheck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Direct Advisory &bull; No Brokers
                  </span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                  <Award className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Verified Titles &amp; Valuation
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl("Hi Deepak, I would like to connect regarding a property inquiry in Noida.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>Call {AGENT_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
