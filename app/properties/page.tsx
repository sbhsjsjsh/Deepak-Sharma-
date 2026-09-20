import type { Metadata } from 'next';
import AllPropertiesGrid from '@/components/AllPropertiesGrid';
import PropertiesShowcase from '@/components/PropertiesShowcase';
import PropertyTypes from '@/components/PropertyTypes';
import WhatsAppLeadSection from '@/components/WhatsAppLeadSection';
import { Building2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Properties in Noida & Yamuna Expressway | Deepak Sharma',
  description:
    'Explore complete verified property listings: Independent Kothis, Commercial Shops, Luxury Apartments, YEIDA Authority Plots, and Villas across Noida & Yamuna Expressway.',
};

export default function PropertiesPage() {
  return (
    <div className="py-6 sm:py-10 bg-slate-50/40">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-sm border border-slate-800">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>Verified Portfolio • Direct Owner &amp; Developer</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2.5">
              Properties in{' '}
              <span className="text-orange-500">
                Noida &amp; Yamuna Expressway
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-5 max-w-2xl">
              Complete inventory of verified independent kothis, commercial retail shops, luxury apartments, authority plots, and villas ready for visit and deal closure.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <MapPin className="w-3 h-3 text-orange-400" />
                Sector 131 Jaypee &bull; Sec 44-49
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <MapPin className="w-3 h-3 text-orange-400" />
                Sector 137 &bull; Sector 150
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <MapPin className="w-3 h-3 text-orange-400" />
                Yamuna Expressway &bull; Jewar Airport
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                <Building2 className="w-3 h-3 text-orange-400" />
                Rentals, Sale &amp; Commercial
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. All Properties Grid - Sequenced & Clean */}
      <AllPropertiesGrid />

      {/* 2. Actual Property Photographs Gallery with Lightbox */}
      <PropertiesShowcase />

      {/* 3. Property Types Overview */}
      <PropertyTypes />

      {/* 4. Direct WhatsApp Lead Generation Section */}
      <WhatsAppLeadSection />
    </div>
  );
}

