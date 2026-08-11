import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.entranceImage}
          alt="Rustic Inspired Kitchen C-Scheme Entrance"
          className="w-full h-full object-cover object-center scale-105 brightness-[0.45] contrast-125 transition-all duration-1000"
        />
        {/* Layered Gradient Overlays for Cinematic Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/70 to-[#12100E]/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1614]/80 border border-[#C5A059]/30 backdrop-blur-md mb-6 animate-fade-in">
          <div className="flex text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="text-xs font-medium text-[#FAF7F2] tracking-wider">
            {RESTAURANT_INFO.rating} ★ ({RESTAURANT_INFO.reviewCount} Reviews)
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
          <span className="text-xs text-[#C5A059] tracking-wider font-light">C-Scheme, Jaipur</span>
        </div>

        {/* Small Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase text-[#C5A059] mb-4">
          {RESTAURANT_INFO.eyebrow}
        </p>

        {/* Large Main Heading */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF7F2] leading-[1.1] mb-6 max-w-4xl">
          Inspired by Flavour.<br className="hidden sm:block" />
          <span className="italic font-serif font-normal text-gold-gradient"> Rooted in Tradition.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#D1C7BD] font-light max-w-2xl leading-relaxed mb-10">
          {RESTAURANT_INFO.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-wrap justify-center">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#FAF7F2] bg-[#1A1614] border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#251F1C] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Explore Menu</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://www.zomato.com/jaipur/rustic-inspired-kitchen-c-scheme"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#12100E] bg-gold-gradient hover:brightness-110 transition-all rounded-sm shadow-2xl hover:shadow-[#C5A059]/30 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order Now</span>
          </a>

          <a
            href="https://www.google.com/search?q=Rustic+-+Inspired+Kitchen+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#FAF7F2] bg-[#1A1614]/80 border border-[#C5A059]/30 hover:border-[#C5A059] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2"
          >
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Google Reviews</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#C5A059]/70 hover:text-[#C5A059] transition-colors group"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase font-light">
          SCROLL TO DISCOVER
        </span>
        <div className="w-5 h-8 border border-[#C5A059]/30 rounded-full flex justify-center pt-1.5 group-hover:border-[#C5A059]">
          <div className="w-1 h-2 bg-[#C5A059] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
