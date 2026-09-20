import { KEY_HUBS, getWhatsAppUrl } from '@/lib/constants';
import { MapPin, Compass, Navigation, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-14 sm:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-orange-200/60">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Key Micro-Markets</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Noida &amp; Yamuna Expressway Coverage
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Specialized in high-growth sectors with verified authority master plans.
          </p>
        </div>

        {/* Location Hubs Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {KEY_HUBS.map((hub, idx) => (
            <div
              key={hub.name}
              id={`hub-${idx}`}
              className="bg-white p-6 rounded-3xl border border-slate-100/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {hub.name}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-orange-700 bg-orange-50/70 px-2.5 py-1 rounded-lg border border-orange-100 inline-block mb-2.5">
                  {hub.sectors}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={getWhatsAppUrl(`Hi Deepak, I am looking for options in ${hub.name} (${hub.sectors}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  Inquire for {hub.name} <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white rounded-3xl border border-slate-100/90 overflow-hidden shadow-2xs">
          <div className="p-4 bg-[#0e1217] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <div>
                <span className="text-xs sm:text-sm font-semibold block">
                  Regional Map &bull; Noida &amp; Yamuna Expressway
                </span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Noida+and+Yamuna+Expressway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors w-fit border border-white/15"
            >
              <span>View Full Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive / Visual Map Container */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-100 flex items-center justify-center overflow-hidden">
            <iframe
              title="Google Maps Location - Noida & Yamuna Expressway"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112196.86470876679!2d77.31977797773441!3d28.535516099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter contrast-105"
            />

            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 shadow-md text-slate-800 text-xs sm:text-sm max-w-sm">
              <div className="font-semibold text-slate-950 flex items-center gap-1.5 mb-0.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                Active Consultation Hub
              </div>
              <p className="text-slate-500 text-xs">
                Noida, Greater Noida, and the complete Yamuna Expressway (Jewar Airport) corridor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
