import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import type { GalleryItem } from '../data/restaurantData';
import { GALLERY_IMAGES } from '../data/restaurantData';

interface GallerySectionProps {
  onOpenLightbox: (image: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Ambience', 'Dining Experience'];

  const filteredImages = GALLERY_IMAGES.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <section id="gallery" className="py-24 bg-[#171311] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
            VISUAL STORYTELLING
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            THE RUSTIC EXPERIENCE
          </h2>
          <p className="text-xs sm:text-sm text-[#D1C7BD] font-light mt-4 leading-relaxed">
            A glimpse into the flavours, spaces and moments that make Rustic special.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-xs transition-all ${
                selectedFilter === cat
                  ? 'bg-[#C5A059] text-[#12100E] font-semibold'
                  : 'bg-[#1A1614] text-[#D1C7BD] hover:text-[#FAF7F2] border border-[#C5A059]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer border border-[#C5A059]/20 shadow-xl min-h-[300px] ${item.span || 'h-80'}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#FAF7F2] font-medium mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#12100E]/70 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
