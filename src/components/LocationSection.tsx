import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Compass, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#171311] relative border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
            VISIT RUSTIC IN C-SCHEME
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            FIND US IN JAIPUR
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Address, Hours, & Contact Action Buttons */}
          <div className="lg:col-span-5 bg-[#1A1614] border border-[#C5A059]/30 rounded-sm p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="border-b border-[#C5A059]/20 pb-6 mb-6">
                <div className="h-40 rounded-sm overflow-hidden border border-[#C5A059]/30 mb-4 group relative">
                  <img
                    src={RESTAURANT_INFO.entranceImage}
                    alt="Rustic Inspired Kitchen C-Scheme Entrance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] uppercase font-semibold tracking-widest text-[#C5A059] bg-[#12100E]/80 px-2 py-0.5 border border-[#C5A059]/30 rounded-xs">
                    C-Scheme Restaurant Entrance
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">DINING DESTINATION</span>
                <h3 className="font-editorial text-3xl font-medium text-[#FAF7F2] mt-1">
                  {RESTAURANT_INFO.name}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                      Address
                    </h4>
                    <p className="text-xs text-[#D1C7BD] font-light leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-xs font-semibold text-[#FAF7F2] tracking-wider uppercase">
                      {RESTAURANT_INFO.openingHours.days}
                    </p>
                    <p className="text-xs text-[#C5A059] font-medium mt-0.5">
                      {RESTAURANT_INFO.openingHours.time}
                    </p>
                    <p className="text-[11px] text-[#D1C7BD]/70 font-light mt-1">
                      C-Scheme, Jaipur
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">
                      Phone & Table Inquiry
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneClean}`}
                      className="text-sm text-[#FAF7F2] font-semibold hover:text-[#C5A059] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-[#C5A059]/20 space-y-3 mt-8">
              <a
                href={RESTAURANT_INFO.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#12100E] bg-gold-gradient rounded-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="py-3 px-3 text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#12100E] border border-[#C5A059]/30 hover:border-[#C5A059] rounded-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#12100E] border border-emerald-500/40 hover:border-emerald-400 rounded-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Embedded Map */}
          <div className="lg:col-span-7 bg-[#1A1614] border border-[#C5A059]/30 rounded-sm overflow-hidden relative min-h-[420px] shadow-2xl flex flex-col">
            <iframe
              title="Rustic Inspired Kitchen Map Location C-Scheme Jaipur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.859660233087!2d75.7975!3d26.9065!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db406a6c42939%3A0xb35520d2d79c6778!2sTilak%20Marg%2C%20C%20Scheme%2C%20Ashok%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
            />

            <div className="absolute top-4 left-4 p-3 bg-[#12100E]/90 backdrop-blur-md border border-[#C5A059]/30 rounded-xs flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#C5A059]" />
              <div>
                <p className="text-xs font-semibold text-[#FAF7F2]">C-Scheme, Jaipur</p>
                <p className="text-[10px] text-[#C5A059]">Tilak Marg, near CBI Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
