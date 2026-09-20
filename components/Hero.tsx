'use client';

import { AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';

const POPULAR_AREAS = [
  'Sector 131 Jaypee',
  'Botanical Garden',
  'Sector 44-48',
  'Sector 150',
  'Phase 2 & Bhangel',
  'Yamuna Exp.',
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-amber-50/70 via-orange-50/30 to-white py-14 sm:py-20 lg:py-24 overflow-hidden text-center">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-200/30 via-orange-200/25 to-pink-100/20 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-5">
          Find your perfect<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
            property in Noida
          </span>
        </h1>

        {/* Crisp Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          Discover premium apartments, independent kothis, rental residences, and commercial shops across Noida &amp; Yamuna Expressway&apos;s prime localities.
        </p>

        {/* Popular Locations Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm">
          <span className="text-slate-400 font-medium">Popular:</span>
          {POPULAR_AREAS.map((area) => (
            <a
              key={area}
              href={getWhatsAppUrl(`Hi Deepak, I am looking for properties/rentals in ${area}. Please share available options.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-orange-600 font-medium transition-colors hover:underline underline-offset-4"
            >
              {area}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
