'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, X, ZoomIn } from 'lucide-react';

const FLAT_IMAGES = [
  {
    id: 'flat-1',
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    alt: 'High-Rise Modern Apartment Tower in Noida',
  },
  {
    id: 'flat-2',
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
    alt: 'Luxury Apartment Interior Living Space',
  },
  {
    id: 'flat-3',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    alt: 'Premium High-Rise Residential Tower',
  },
  {
    id: 'flat-4',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern Apartment Bedroom & Balcony',
  },
  {
    id: 'flat-5',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    alt: 'Contemporary Apartment Hall & Dining',
  },
  {
    id: 'flat-6',
    src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop',
    alt: 'Evening View of Luxury Apartment Complex',
  },
];

export default function PropertiesShowcase() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="properties" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Flats &amp; Apartments Gallery
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Exclusive glimpses of modern residential flats across Noida &amp; Yamuna Expressway.
          </p>
        </div>

        {/* Only Flat Images Grid - No flat details (no price, beds, baths, sqft) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FLAT_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.src)}
              className="group relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-100 shadow-2xs hover:shadow-md transition-all"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Subtle hover overlay with view icon */}
              <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-900 shadow-sm">
                  <ZoomIn className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Inquiry Action */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl("Hi Deepak, I saw the flats on your website. Please share available flat options and photos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Inquire for Flats on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={activeImage}
              alt="Flat Preview"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
}
