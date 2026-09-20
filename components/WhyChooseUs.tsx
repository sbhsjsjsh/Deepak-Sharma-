'use client';

import { WHY_CHOOSE_US } from '@/lib/constants';
import { ShieldCheck, Clock, Compass, BadgePercent, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'verified':
        return <ShieldCheck className="w-7 h-7 text-orange-600 stroke-[2]" />;
      case 'fast':
        return <Clock className="w-7 h-7 text-orange-600 stroke-[2]" />;
      case 'insights':
        return <Compass className="w-7 h-7 text-orange-600 stroke-[2]" />;
      case 'price':
        return <BadgePercent className="w-7 h-7 text-orange-600 stroke-[2]" />;
      case 'support':
        return <Headphones className="w-7 h-7 text-orange-600 stroke-[2]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-orange-600 stroke-[2]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Exactly matching Screenshot 1 */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Why Choose Deepak Sharma
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            We redefine real estate in Noida &amp; Yamuna Expressway with unmatched transparency and dedicated personal service.
          </p>
        </div>

        {/* Feature Cards Stack - Matching Screenshot 1 */}
        <div className="space-y-5 sm:space-y-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/75 hover:bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-100/90 text-center flex flex-col items-center transition-all shadow-2xs hover:shadow-sm"
            >
              {/* Soft Orange Squircle Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4.5 shadow-2xs">
                {getIcon(item.id)}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
