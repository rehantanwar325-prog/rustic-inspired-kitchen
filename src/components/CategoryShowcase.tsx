import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORY_SHOWCASE } from '../data/restaurantData';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryKey: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-24 bg-[#12100E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
            CURATED SELECTIONS
          </p>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#FAF7F2] tracking-tight">
            Explore Our Culinary World
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* 3 Large Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CATEGORY_SHOWCASE.map((item) => (
            <div
              key={item.number}
              onClick={() => {
                onSelectCategory(item.categoryKey);
                const menuEl = document.getElementById('menu');
                if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-[480px] rounded-sm overflow-hidden cursor-pointer border border-[#C5A059]/20 shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-75"
              />

              {/* Dark Ambient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Top Category Number */}
              <div className="absolute top-6 left-6 z-10">
                <span className="font-editorial text-3xl text-[#C5A059]/80 group-hover:text-[#D4AF37] transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Arrow Icon Top Right */}
              <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#12100E]/70 backdrop-blur-md border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#12100E] text-[#FAF7F2] transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end">
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#FAF7F2] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D1C7BD] font-light mb-6 leading-relaxed">
                  {item.subtitle}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] group-hover:text-[#FAF7F2] transition-colors">
                  <span>{item.buttonText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
