'use client';

import { useState } from 'react';
import { AGENT_INFO, getWhatsAppUrl } from '@/lib/constants';
import { Phone, MessageCircle, Send, CheckCircle2, User, PhoneCall, Home, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const prefilledText = `Hi Deepak,
My Name: ${formData.name.trim()}
Phone Number: ${formData.phone.trim()}
Requirement: ${formData.requirement.trim() || 'Residential / Commercial Property'}
Preferred Location: ${formData.location.trim() || 'Noida / Yamuna Expressway'}

I would like to discuss available options with you.`;

    const url = getWhatsAppUrl(prefilledText);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-4">
            Contact Deepak Sharma
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a question or want to discuss a property requirement? Connect directly today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Consultant Details Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl font-serif mb-6 border border-emerald-500/30">
                DS
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight mb-1">
                {AGENT_INFO.name}
              </h3>
              <p className="text-emerald-400 font-medium text-sm mb-6">
                {AGENT_INFO.role}
              </p>

              <div className="space-y-4 pt-6 border-t border-slate-800 text-sm">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <p className="text-white font-medium">
                    {AGENT_INFO.location}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Coverage
                  </span>
                  <p className="text-slate-300">
                    {AGENT_INFO.coverage}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Business &amp; Services
                  </span>
                  <p className="text-white font-medium">
                    {AGENT_INFO.services}
                  </p>
                  <p className="text-emerald-400 text-xs mt-0.5">
                    Buying | Selling | Renting
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${AGENT_INFO.phone}`}
                    className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {AGENT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3">
              <a
                id="contact-card-whatsapp"
                href={getWhatsAppUrl(`Hi Deepak, I would like to speak with you regarding a property in Noida.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                id="contact-card-call"
                href={`tel:${AGENT_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Simple Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
              Send Property Requirement
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill in your details below and hit submit to connect instantly on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Name <span className="text-emerald-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-white"
                  />
                </div>
              </div>

              {/* Field 2: Phone Number */}
              <div>
                <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-emerald-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 99532 45542 or 10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-white"
                  />
                </div>
              </div>

              {/* Field 3: Requirement */}
              <div>
                <label htmlFor="inquiry-requirement" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Requirement
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Home className="w-4 h-4" />
                  </div>
                  <input
                    id="inquiry-requirement"
                    name="requirement"
                    type="text"
                    placeholder="e.g. Buying 3 BHK Flat / Selling Plot / Renting Office"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-white"
                  />
                </div>
              </div>

              {/* Field 4: Preferred Location */}
              <div>
                <label htmlFor="inquiry-location" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    id="inquiry-location"
                    name="location"
                    type="text"
                    placeholder="e.g. Sector 150 / Yamuna Expressway / Greater Noida"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-slate-400 bg-white"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp opened with your prefilled details! If not prompted, ensure popups are allowed.</span>
                </div>
              )}

              <p className="text-xs text-slate-400 text-center mt-3">
                Your number is kept 100% confidential. No spam or marketing calls.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
