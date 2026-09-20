import { AGENT_INFO, getWhatsAppUrl, PREFILLED_MESSAGES } from '@/lib/constants';
import { ShoppingBag, KeyRound, Building, ArrowRight, MessageCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'service-buying',
      title: 'BUYING',
      icon: ShoppingBag,
      tagline: 'Residential & Commercial',
      description: 'Find residential and commercial properties matching your requirements.',
      cta: 'Ask on WhatsApp',
      message: PREFILLED_MESSAGES.buying,
      color: 'border-slate-200 hover:border-emerald-500',
    },
    {
      id: 'service-selling',
      title: 'SELLING',
      icon: Building,
      tagline: 'Genuine Buyers & Fast Deals',
      description: 'Get assistance connecting your property with genuine buyers.',
      cta: 'Sell Your Property',
      message: PREFILLED_MESSAGES.selling,
      color: 'border-slate-200 hover:border-emerald-500',
    },
    {
      id: 'service-renting',
      title: 'RENTING',
      icon: KeyRound,
      tagline: 'Tenants & Landlords',
      description: 'Find suitable rental properties or get help renting out your property.',
      cta: 'Find a Rental',
      message: PREFILLED_MESSAGES.renting,
      color: 'border-slate-200 hover:border-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-2">
            Professional Real Estate Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-4">
            How I Can Help You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated assistance for buyers, sellers, landlords, and tenants across Noida and Yamuna Expressway.
          </p>
        </div>

        {/* 3 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className="flex flex-col justify-between bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {srv.tagline}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 font-serif mt-1 mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    id={`${srv.id}-cta`}
                    href={getWhatsAppUrl(srv.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-900 text-white font-medium text-sm group-hover:bg-[#25D366] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-white" />
                      {srv.cta}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Have a unique requirement? You can always call directly at{' '}
          <a
            href={`tel:${AGENT_INFO.phone}`}
            className="font-semibold text-slate-900 underline hover:text-emerald-700"
          >
            {AGENT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
