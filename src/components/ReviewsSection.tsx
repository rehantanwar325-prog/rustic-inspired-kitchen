import React from 'react';
import { Star, Quote, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO, TESTIMONIALS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#171311] relative border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Highlight Counter */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 text-center lg:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
              REPUTATION & GUEST FEEDBACK
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#FAF7F2] tracking-tight">
              Loved by Diners in Jaipur
            </h2>
          </div>

          {/* Rating Badge Box */}
          <div className="flex items-center gap-6 p-6 bg-[#1A1614] border border-[#C5A059]/30 rounded-sm shadow-xl">
            <div className="text-center border-r border-[#C5A059]/20 pr-6">
              <span className="font-editorial text-5xl font-bold text-gold-gradient block">
                {RESTAURANT_INFO.rating}★
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] mt-1 block">
                OUT OF 5 STARS
              </span>
            </div>

            <div>
              <div className="flex text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <p className="font-editorial text-xl font-medium text-[#FAF7F2]">
                {RESTAURANT_INFO.reviewCount} Reviews
              </p>
              <p className="text-xs text-[#D1C7BD] font-light">Verified Google & Tripadvisor Diners</p>
            </div>
          </div>
        </div>

        {/* Dynamic Notice Tag for Restaurant Manager */}
        <div className="mb-10 p-3 bg-[#12100E]/70 border border-[#C5A059]/20 rounded-xs flex items-center justify-between gap-3 text-xs text-[#D1C7BD]/80">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>Sample diner impressions shown below. Manager can easily add live Google Review feeds.</span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-widest hidden sm:block">
            EDITABLE CONTENT
          </span>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#1A1614] border border-[#C5A059]/20 p-8 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/50 transition-all duration-300 relative group shadow-xl"
            >
              <Quote className="w-10 h-10 text-[#C5A059]/15 absolute top-6 right-6 group-hover:text-[#C5A059]/30 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-[#D4AF37] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>

                <h4 className="font-editorial text-lg font-medium text-[#FAF7F2] mb-3">
                  "{review.highlight}"
                </h4>

                <p className="text-xs text-[#D1C7BD] font-light leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#C5A059]/15 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </h5>
                  <span className="text-[10px] text-[#D1C7BD]/60 font-light">{review.location}</span>
                </div>
                <span className="text-[10px] text-[#C5A059]/70 font-light">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
