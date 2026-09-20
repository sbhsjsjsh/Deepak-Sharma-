'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_PROPERTIES, AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';
import {
  MapPin,
  Bed,
  Bath,
  Layers,
  Maximize2,
  CheckCircle2,
  Phone,
  MessageCircle,
  Search,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  Camera,
} from 'lucide-react';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Properties' },
  { id: 'rental', label: 'Rentals & Leases' },
  { id: 'sale', label: 'For Sale' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plot', label: 'Plots & Land' },
];

export default function AllPropertiesGrid() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = useMemo(() => {
    return FEATURED_PROPERTIES.filter((property) => {
      // Tab filter
      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'rental' && property.type === 'rental') ||
        (activeTab === 'sale' && property.type === 'sale') ||
        (activeTab === 'commercial' && property.type === 'commercial') ||
        (activeTab === 'plot' && property.type === 'plot');

      // Search filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.specs.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Full Portfolio ({FEATURED_PROPERTIES.length} Listings)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Properties in Sequence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Cleanly organized residential rentals, independent kothis, apartments, luxury villas, authority plots, and commercial shops.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search sector, type, or budget..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const count =
              tab.id === 'all'
                ? FEATURED_PROPERTIES.length
                : tab.id === 'rental'
                ? FEATURED_PROPERTIES.filter((p) => p.type === 'rental').length
                : tab.id === 'sale'
                ? FEATURED_PROPERTIES.filter((p) => p.type === 'sale').length
                : tab.id === 'commercial'
                ? FEATURED_PROPERTIES.filter((p) => p.type === 'commercial').length
                : FEATURED_PROPERTIES.filter((p) => p.type === 'plot').length;

            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500 font-medium mb-6 flex items-center justify-between">
          <span>
            Showing <strong>{filteredProperties.length}</strong> of {FEATURED_PROPERTIES.length} verified listings
          </span>
          {activeTab !== 'all' && (
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="text-orange-600 hover:underline cursor-pointer"
            >
              Reset to all
            </button>
          )}
        </div>

        {/* Properties List - Sequenced & Clean Full-Width Cards */}
        <div className="space-y-8 sm:space-y-10">
          {filteredProperties.map((prop) => (
            <article
              key={prop.id}
              id={prop.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Column: Image Container (Uniform 16:10 Aspect Ratio) */}
                <div className="lg:col-span-5 relative bg-slate-950 overflow-hidden flex flex-col justify-between">
                  <div className="relative w-full aspect-[16/10] lg:h-full lg:aspect-auto">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                      unoptimized={prop.unoptimized}
                    />

                    {/* Minimal Top Badges Only - Clean Photo View */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                        #{prop.sequence}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs ${
                          prop.badge.includes('EXCLUSIVE')
                            ? 'bg-orange-600 text-white'
                            : prop.badge.includes('LEASE')
                            ? 'bg-amber-500 text-slate-950'
                            : prop.badge.includes('AUTHORITY')
                            ? 'bg-blue-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {prop.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Detailed Property Information & Action CTAs */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Header & Location */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-orange-600 font-semibold text-xs tracking-wide uppercase mb-1">
                          <span>Listing #{prop.sequence}</span>
                          <span>&bull;</span>
                          <span>{prop.category}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {prop.title}
                        </h3>
                        <p className="flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm mt-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                          <span>{prop.location}</span>
                        </p>
                      </div>

                      {/* Price Tag */}
                      <div className="sm:text-right shrink-0 bg-orange-50/70 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-orange-100 sm:border-0">
                        <div className="text-xl sm:text-2xl font-black text-orange-600">
                          {prop.price}
                        </div>
                        {prop.priceSubtitle && (
                          <div className="text-[11px] text-slate-500 font-medium mt-0.5 max-w-xs">
                            {prop.priceSubtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specs Grid Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
                      {prop.beds !== null && (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                          <div className="text-[11px] text-slate-500 font-medium">Bedrooms</div>
                          <div className="text-sm font-bold text-slate-900">{prop.beds} BHK</div>
                        </div>
                      )}
                      {prop.baths !== null && (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                          <div className="text-[11px] text-slate-500 font-medium">Washrooms</div>
                          <div className="text-sm font-bold text-slate-900">{prop.baths} Bath</div>
                        </div>
                      )}
                      {prop.floors && (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                          <div className="text-[11px] text-slate-500 font-medium">Structure</div>
                          <div className="text-sm font-bold text-slate-900 truncate">{prop.floors}</div>
                        </div>
                      )}
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-center">
                        <div className="text-[11px] text-slate-500 font-medium">Covered Area</div>
                        <div className="text-sm font-bold text-slate-900 truncate">{prop.sqft}</div>
                      </div>
                    </div>

                    {/* Concise Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {prop.highlight}
                    </p>

                    {/* Key Highlights (Top 3) */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {prop.features.slice(0, 3).map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Inquiry CTAs */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getWhatsAppUrl(prop.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-xs transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Inquire</span>
                    </a>
                    
                    <a
                      href={`tel:${AGENT_INFO.phone}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all text-center"
                    >
                      <Phone className="w-4 h-4 text-orange-400" />
                      <span>Call Consultant</span>
                    </a>

                    {prop.id === 'prop-kothi-131' && (
                      <Link
                        href="/#rentals"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all text-center"
                      >
                        <Camera className="w-3.5 h-3.5 text-orange-600" />
                        <span>View 10 Photos</span>
                      </Link>
                    )}
                  </div>

                </div>

              </div>
            </article>
          ))}

          {filteredProperties.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No properties match your filter</h3>
              <p className="text-sm text-slate-500 mt-1 mb-4">
                Try searching for a different sector or click below to view all listings.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white font-semibold text-xs sm:text-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
