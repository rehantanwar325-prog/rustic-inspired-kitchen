import React from 'react';
import { Star } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

interface SignatureDishesProps {
  onSelectDishForReservation?: (dishName: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = () => {
  return (
    <section className="py-24 bg-[#171311] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
              THE RUSTIC COLLECTION
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#FAF7F2] tracking-tight">
              Made to Be Remembered.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#D1C7BD] font-light max-w-md leading-relaxed border-l border-[#C5A059]/30 pl-4">
            A curated ensemble of our master chef's proudest creations, crafted with authentic coal tandoors and Awadhi spice secret marinades.
          </p>
        </div>

        {/* 6 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#1A1614] border border-[#C5A059]/20 rounded-sm overflow-hidden flex flex-col hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-transparent" />

                {/* Badge Top Left */}
                {dish.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] uppercase font-semibold tracking-wider bg-[#12100E]/80 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/30 rounded-xs">
                      {dish.badge}
                    </span>
                  </div>
                )}

                {/* Veg / Non-Veg Indicator Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className={`w-6 h-6 rounded-xs bg-[#12100E]/90 border p-1 flex items-center justify-center ${
                      dish.isVeg ? 'border-emerald-500' : 'border-rose-500'
                    }`}
                    title={dish.isVeg ? 'Vegetarian Dish' : 'Non-Vegetarian Dish'}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-medium">
                      {dish.subtitle}
                    </span>
                    <div className="flex items-center gap-1 text-[#D4AF37] text-xs font-medium">
                      <Star className="w-3 h-3 fill-[#D4AF37]" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#FAF7F2] mb-3 group-hover:text-[#C5A059] transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#D1C7BD] font-light leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer Price */}
                <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#D1C7BD]/70 font-light">
                    Price
                  </span>
                  <span className="font-editorial text-xl font-semibold text-[#FAF7F2]">
                    ₹{dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
