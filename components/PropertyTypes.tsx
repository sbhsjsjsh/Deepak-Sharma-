import { getWhatsAppUrl } from '@/lib/constants';
import { Home, Building2, CheckCircle2, MessageCircle } from 'lucide-react';

export default function PropertyTypes() {
  const residentialItems = ['Apartments & Flats', 'Independent Villas', 'Authority Plots', 'Builder Floors'];
  const commercialItems = ['Retail Shops & SCOs', 'Lockable Office Spaces', 'High-Street Retail', 'Commercial Plots'];

  return (
    <section id="property-types" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200/60">
            <span>Portfolio Segments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif tracking-tight">
            Property Segments
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Residential living and commercial investment assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Residential Category */}
          <div
            id="category-residential"
            className="bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif tracking-tight">
                  Residential
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Homes &amp; Land Parcels
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 mb-5">
              {residentialItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-400 block">
                Noida Expressway, Greater Noida &amp; Yamuna Expressway
              </span>
            </div>
          </div>

          {/* Commercial Category */}
          <div
            id="category-commercial"
            className="bg-gradient-to-b from-white to-slate-50/60 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-emerald-950 text-emerald-400 flex items-center justify-center font-bold shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif tracking-tight">
                  Commercial
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Retail &amp; Offices
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 mb-5">
              {commercialItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-400 block">
                High-footfall storefronts, lockable offices &amp; retail hubs
              </span>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-8 text-center">
          <a
            id="property-types-cta"
            href={getWhatsAppUrl("Hi Deepak, I would like to discuss my property requirement in Noida/Yamuna Expressway.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Discuss Property Requirements</span>
          </a>
        </div>
      </div>
    </section>
  );
}
