'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  Maximize2,
  CheckCircle2,
  Building2,
  Store,
  Sparkles,
  Bed,
  Bath,
  Home,
  Clock,
  Layers,
  Info,
  X
} from 'lucide-react';

const KOTHI_IMAGES = [
  {
    url: 'https://i.ibb.co/BHddMhbv/IMG-20260920-WA0028.jpg',
    title: 'Kothi Living Space & Interior',
  },
  {
    url: 'https://i.ibb.co/1fbxvbmN/IMG-20260920-WA0027.jpg',
    title: 'Furnished Bedroom & Wardrobe',
  },
  {
    url: 'https://i.ibb.co/m5f513nN/IMG-20260920-WA0026.jpg',
    title: 'Spacious Room & Curtains',
  },
  {
    url: 'https://i.ibb.co/ksBnyH4H/IMG-20260920-WA0025.jpg',
    title: 'Floor Living Area & Dining Setup',
  },
  {
    url: 'https://i.ibb.co/Ng3XP7Kg/IMG-20260920-WA0019.jpg',
    title: 'Bedroom Setup with Double Bed',
  },
  {
    url: 'https://i.ibb.co/pv5kDLj7/IMG-20260920-WA0024.jpg',
    title: 'Room Layout & Natural Lighting',
  },
  {
    url: 'https://i.ibb.co/whYcGvVk/IMG-20260920-WA0020.jpg',
    title: 'Interior Corridor & Fixtures',
  },
  {
    url: 'https://i.ibb.co/393Z1sXv/IMG-20260920-WA0022.jpg',
    title: 'Furnished Room & Ambiance',
  },
  {
    url: 'https://i.ibb.co/gqqC74p/IMG-20260920-WA0021.jpg',
    title: 'Wardrobe & Mirror Arrangement',
  },
  {
    url: 'https://i.ibb.co/4x5Mb6X/IMG-20260920-WA0023.jpg',
    title: 'Bathroom & Sanitary Fixtures',
  },
];

const RENTAL_LOCALITIES = [
  'Sector Botanical Garden',
  'Sector 44',
  'Sector 45',
  'Sector 46',
  'Sector 47',
  'Sector 48',
  'Noida Phase 2',
  'Baraula',
  'Sector 49',
  'Salarpur',
  'Bhangel',
  'Sector 131 Jaypee Wish Town',
];

export default function RentalShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? KOTHI_IMAGES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === KOTHI_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') setIsZoomOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const kothiWhatsAppMessage =
    'Hi Deepak, I saw the Independent Kothi for rent in Sector 131 Jaypee Wish Town (6 BHK, 3 Floors, 1.5 Lakh/mo). Please share more details and schedule a visit.';

  const commercialWhatsAppMessage =
    'Hi Deepak, I am looking for Commercial Shops / Rental Properties in Noida (Botanical Garden, Sec 44-49, Phase 2, Bhangel). Please share available options.';

  return (
    <section id="rentals" className="py-12 sm:py-18 bg-slate-50/75 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold mb-3">
            <Building2 className="w-4 h-4 text-orange-600" />
            <span>Rental Properties &amp; Commercial Leasing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Premium Rentals &amp; Commercial Shops in Noida
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct rental assistance for residential kothis, apartments, and commercial shops across prime Noida sectors.
          </p>
        </div>

        {/* Commercial & Rental Locality Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
                <Store className="w-5 h-5 text-orange-600" />
                <span>Commercial Shops &amp; Retail Spaces For Rent</span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base">
                Starting rent from <strong className="text-orange-600 font-bold">₹15,000 to ₹5 Lakh+</strong> per month. Prime high-footfall markets, roadside booths, and commercial retail units ready for possession.
              </p>
              
              {/* Locality Tags */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Active Rental Sectors &amp; Corridors:
                </div>
                <div className="flex flex-wrap gap-2">
                  {RENTAL_LOCALITIES.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70"
                    >
                      <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(commercialWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire Commercial Shops</span>
              </a>
              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all text-center"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call: {AGENT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Listing: Independent Kothi in Sector 131 Jaypee Wish Town */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Top Badge & Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exclusive Rental Listing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Independent Kothi for Rent
              </h3>
              <p className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Sector 131, Jaypee Wish Town, Noida</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end">
              <div className="text-2xl sm:text-3xl font-black text-orange-400">
                ₹1,50,000 <span className="text-sm font-medium text-slate-300">/ month</span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                2 Months Deposit + 1 Month Advance &bull; 3–5 Years Lease
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Uniform Aspect-Ratio Image Carousel */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Carousel Container (Uniform Size: 16/10 aspect ratio) */}
              <div
                className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner group select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Active Image */}
                <Image
                  src={KOTHI_IMAGES[currentIndex].url}
                  alt={KOTHI_IMAGES[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 650px"
                  priority={currentIndex === 0}
                  className="object-cover transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                  unoptimized
                />

                {/* Gradient shade for controls & counter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Photo Counter Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {currentIndex + 1} / {KOTHI_IMAGES.length}
                </div>

                {/* Zoom Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  aria-label="View photo in full screen"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Prev Navigation Arrow */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>

                {/* Next Navigation Arrow */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>

              {/* Thumbnails Row (All same aspect ratio) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {KOTHI_IMAGES.map((img, idx) => (
                  <button
                    key={img.url}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-16 sm:w-20 aspect-[16/10] shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentIndex === idx
                        ? 'border-orange-600 ring-2 ring-orange-500/30 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                      unoptimized
                    />
                  </button>
                ))}
              </div>

              <div className="text-center text-xs text-slate-400">
                Swipe on mobile or use arrow buttons to browse all 10 property photos.
              </div>
            </div>

            {/* Right Column: Full Property Specifications & Commercial Terms */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Spec Pills */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <Layers className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-slate-500">Floors</div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">3 Floors</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <Bed className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-slate-500">Bedrooms</div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">6 BHK</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                  <Bath className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                  <div className="text-xs text-slate-500">Toilets</div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">6 Washrooms</div>
                </div>
              </div>

              {/* Lease & Eligibility */}
              <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4 space-y-2 text-sm">
                <div className="font-bold text-orange-950 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Available For All Use Cases</span>
                </div>
                <p className="text-orange-900 text-xs sm:text-sm">
                  Suitable for <strong>Airbnb / Guest House / Corporate Stays / Family</strong>.
                </p>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-orange-800 pt-1">
                  <span>&bull; Lease Period: <strong>3 to 5 Years</strong></span>
                  <span>&bull; Owner resides in Delhi</span>
                </div>
              </div>

              {/* Furnishing Checklist */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span>Furnishing &amp; Amenities Included:</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>6 Double Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>6 Wardrobes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>6 Geysers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1 Washing Machine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>5 Mirrors per room</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Curtains on every floor</span>
                  </div>
                </div>

                {/* Per Floor Inclusions */}
                <div className="mt-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm space-y-1.5">
                  <div className="font-bold text-slate-900">Per Floor Equipment Provided:</div>
                  <div className="text-slate-600 leading-relaxed">
                    Sofa Set &bull; Dining Table &bull; Refrigerator (Fridge) &bull; RO Water Purifier &bull; Induction Cooktop
                  </div>
                  <div className="text-[11px] text-slate-500 italic pt-1">
                    * Note: TV and Power backup are not included. All other furnishing is fully installed.
                  </div>
                </div>
              </div>

              {/* Brokerage & Call Notice */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Brokerage Terms:</strong> 15-day brokerage applicable from both sides (divided in 3 parts). Channel partners and direct interested parties are welcome to call.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call: {AGENT_INFO.displayPhone}</span>
                </a>
                <a
                  href={getWhatsAppUrl(kothiWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-sm transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire Kothi on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal for Photo Gallery */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close photo preview"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow inside modal */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow inside modal */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={KOTHI_IMAGES[currentIndex].url}
              alt={KOTHI_IMAGES[currentIndex].title}
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-contain"
              referrerPolicy="no-referrer"
              unoptimized
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {currentIndex + 1} of {KOTHI_IMAGES.length} &bull; {KOTHI_IMAGES[currentIndex].title}
          </div>
        </div>
      )}
    </section>
  );
}
