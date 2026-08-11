import React from 'react';
import { Flame, Sparkles, UtensilsCrossed, Crown } from 'lucide-react';
import { CORE_FEATURES } from '../data/restaurantData';

export const FeatureSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#C5A059]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Flame className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-[#171311] border-y border-[#C5A059]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 rounded-sm bg-[#1A1614]/60 border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Subtle top accent line */}
              <div className="w-8 h-[2px] bg-[#C5A059]/40 group-hover:w-full transition-all duration-500 mb-6" />

              <div className="w-12 h-12 rounded-full bg-[#12100E] border border-[#C5A059]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(feature.icon)}
              </div>

              <h3 className="font-editorial text-xl font-medium text-[#FAF7F2] mb-3 group-hover:text-[#C5A059] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs text-[#D1C7BD] leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
