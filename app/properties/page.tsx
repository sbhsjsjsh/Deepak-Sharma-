import type { Metadata } from 'next';
import PropertyTypes from '@/components/PropertyTypes';
import PropertiesShowcase from '@/components/PropertiesShowcase';
import WhatsAppLeadSection from '@/components/WhatsAppLeadSection';
import { Building2, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Properties in Noida & Yamuna Expressway | Deepak Sharma',
  description:
    'Explore residential apartments, flats, villas, plots and commercial retail shops, offices in Noida, Greater Noida, and Yamuna Expressway.',
};

export default function PropertiesPage() {
  return (
    <div className="py-8 sm:py-10">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-md">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Developer &amp; Resale</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white mb-2.5">
              Properties in{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Noida &amp; Yamuna Expressway
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
              Verified residential apartments, authority plots, and prime commercial units.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                <MapPin className="w-3 h-3 text-emerald-400" />
                Noida Expressway
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                <MapPin className="w-3 h-3 text-emerald-400" />
                Yamuna Expressway &bull; Jewar
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">
                <Building2 className="w-3 h-3 text-emerald-400" />
                Residential &amp; Commercial
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Property Types Section */}
      <PropertyTypes />

      {/* Featured Properties Showcase with Large Images */}
      <PropertiesShowcase />

      {/* Direct WhatsApp Lead Generation Section */}
      <WhatsAppLeadSection />
    </div>
  );
}
