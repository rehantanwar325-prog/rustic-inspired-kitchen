import React from 'react';
import { X } from 'lucide-react';
import type { GalleryItem } from '../data/restaurantData';

interface LightboxModalProps {
  image: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0A09]/95 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-[#D1C7BD] hover:text-[#C5A059] focus:outline-none z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="overflow-hidden rounded-sm border border-[#C5A059]/30 shadow-2xl bg-[#1A1614] inline-flex flex-col items-stretch max-h-[85vh]">
          <img
            src={image.image}
            alt={image.title}
            className="max-h-[75vh] max-w-full w-auto object-contain mx-auto"
          />
          <div className="p-4 bg-[#12100E] border-t border-[#C5A059]/20 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                {image.category}
              </span>
              <h3 className="font-editorial text-lg sm:text-xl font-medium text-[#FAF7F2]">
                {image.title}
              </h3>
            </div>
            <span className="text-xs text-[#D1C7BD]/60 font-light whitespace-nowrap">Rustic – Inspired Kitchen</span>
          </div>
        </div>
      </div>
    </div>
  );
};
