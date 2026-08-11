import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#12100E] relative border-t border-[#C5A059]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border border-[#C5A059]/30 shadow-2xl group">
              <img
                src={RESTAURANT_INFO.entranceImage}
                alt="Rustic Inspired Kitchen Entrance in C-Scheme Jaipur"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/80 via-transparent to-transparent" />

              {/* Accent Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1A1614]/90 backdrop-blur-md border border-[#C5A059]/30 rounded-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">ESTABLISHED JAIPUR</p>
                  <p className="font-editorial text-lg font-medium text-[#FAF7F2] mt-0.5">Authentic Mughlai & Royal North Indian</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Background Decorative Gold Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A059]/20 rounded-sm -z-0 hidden sm:block" />
          </div>

          {/* Right Column Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
                {RESTAURANT_INFO.storySubtitle}
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight leading-[1.15]">
                {RESTAURANT_INFO.storyTitle}
              </h2>
              <div className="w-16 h-[2px] bg-[#C5A059] mt-6" />
            </div>

            <p className="text-sm sm:text-base text-[#D1C7BD] font-light leading-relaxed">
              {RESTAURANT_INFO.storyParagraph1}
            </p>

            <p className="text-sm sm:text-base text-[#D1C7BD] font-light leading-relaxed">
              {RESTAURANT_INFO.storyParagraph2}
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#C5A059]/15">
              <div className="flex flex-col items-start">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">Fresh Daily</h4>
                <p className="text-[11px] text-[#D1C7BD]/70 font-light mt-1">Ground spices & fresh marinades</p>
              </div>

              <div className="flex flex-col items-start">
                <Compass className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">Authentic Recipes</h4>
                <p className="text-[11px] text-[#D1C7BD]/70 font-light mt-1">Royal Awadhi & Mughlai heritage</p>
              </div>

              <div className="flex flex-col items-start">
                <HeartHandshake className="w-5 h-5 text-[#C5A059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">Warm Royalty</h4>
                <p className="text-[11px] text-[#D1C7BD]/70 font-light mt-1">Jaipur's iconic hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
