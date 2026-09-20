'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';
import {
  MessageCircle,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
  Phone,
  Layers,
} from 'lucide-react';

export const PROPERTY_GALLERY_IMAGES = [
  {
    id: 'prop-1',
    src: 'https://i.ibb.co/BHddMhbv/IMG-20260920-WA0028.jpg',
    title: 'Living Hall & Dining Area',
    category: 'living',
    categoryLabel: 'Living & Dining',
  },
  {
    id: 'prop-2',
    src: 'https://i.ibb.co/1fbxvbmN/IMG-20260920-WA0027.jpg',
    title: 'Furnished Bedroom with Double Bed & Wardrobe',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
  },
  {
    id: 'prop-3',
    src: 'https://i.ibb.co/m5f513nN/IMG-20260920-WA0026.jpg',
    title: 'Spacious Bedroom with Curtains & Natural Lighting',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
  },
  {
    id: 'prop-4',
    src: 'https://i.ibb.co/ksBnyH4H/IMG-20260920-WA0025.jpg',
    title: 'Floor Lounge & Dining Setup',
    category: 'living',
    categoryLabel: 'Living & Dining',
  },
  {
    id: 'prop-5',
    src: 'https://i.ibb.co/Ng3XP7Kg/IMG-20260920-WA0019.jpg',
    title: 'Bedroom Suite with Double Bed & Full Mirror',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
  },
  {
    id: 'prop-6',
    src: 'https://i.ibb.co/pv5kDLj7/IMG-20260920-WA0024.jpg',
    title: 'Bright Bedroom Layout & Ventilation',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
  },
  {
    id: 'prop-7',
    src: 'https://i.ibb.co/whYcGvVk/IMG-20260920-WA0020.jpg',
    title: 'Floor Corridor & Room Entryway',
    category: 'interior',
    categoryLabel: 'Interior & Corridors',
  },
  {
    id: 'prop-8',
    src: 'https://i.ibb.co/393Z1sXv/IMG-20260920-WA0022.jpg',
    title: 'Furnished Bedroom Setup',
    category: 'bedroom',
    categoryLabel: 'Bedrooms',
  },
  {
    id: 'prop-9',
    src: 'https://i.ibb.co/gqqC74p/IMG-20260920-WA0021.jpg',
    title: 'Wardrobe & Dressing Mirror Fitting',
    category: 'interior',
    categoryLabel: 'Interior & Corridors',
  },
  {
    id: 'prop-10',
    src: 'https://i.ibb.co/4x5Mb6X/IMG-20260920-WA0023.jpg',
    title: 'Modern Washroom & Geyser Installation',
    category: 'bath',
    categoryLabel: 'Washrooms',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'living', label: 'Living & Dining' },
  { id: 'interior', label: 'Interior' },
  { id: 'bath', label: 'Washroom' },
];

export default function PropertiesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? PROPERTY_GALLERY_IMAGES
      : PROPERTY_GALLERY_IMAGES.filter((item) => item.category === activeCategory);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredImages.length]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevLightbox, nextLightbox]);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Minimal */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold mb-2.5">
            <Camera className="w-3.5 h-3.5 text-orange-600" />
            <span>Actual Photographs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
            Property Gallery
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Original, unedited photos of kothi, bedrooms, and interiors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PROPERTY_GALLERY_IMAGES.length
                : PROPERTY_GALLERY_IMAGES.filter((img) => img.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Clean, Unobstructed Images without Overlaid Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                unoptimized
              />

              {/* Minimal Clean Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 flex items-center justify-center shadow-md">
                  <ZoomIn className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Bar below gallery */}
        <div className="mt-12 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Want to visit this property in person?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Contact Deepak Sharma for video walkthroughs, high-res photos, or a physical site inspection.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {AGENT_INFO.displayPhone}</span>
            </a>
            <a
              href={getWhatsAppUrl(
                'Hi Deepak, I saw the Property Image Gallery on your website. Please share complete property details and photos.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[82vh] w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
          >
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-contain"
              referrerPolicy="no-referrer"
              unoptimized
            />
          </div>

          {/* Minimal Navigation Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs border border-white/10">
            <span className="font-semibold text-orange-400">
              {lightboxIndex + 1}
            </span>
            <span className="text-slate-400 mx-1.5">/</span>
            <span className="text-slate-300">{filteredImages.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}
