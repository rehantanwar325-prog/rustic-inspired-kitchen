import React from 'react';
import { Phone, MessageSquare, Utensils, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#12100E]/95 backdrop-blur-lg border-t border-[#C5A059]/30 md:hidden px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 text-center">
        {/* Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 text-[#D1C7BD] active:text-[#C5A059] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[10px] uppercase font-medium tracking-wider">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 text-[#D1C7BD] active:text-emerald-400 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[10px] uppercase font-medium tracking-wider">WhatsApp</span>
        </a>

        {/* Menu */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 text-[#D1C7BD] active:text-[#C5A059] transition-colors"
        >
          <Utensils className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[10px] uppercase font-medium tracking-wider">Menu</span>
        </a>

        {/* Order */}
        <a
          href="https://www.zomato.com/jaipur/rustic-inspired-kitchen-c-scheme"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 bg-gold-gradient text-[#12100E] rounded-xs font-semibold shadow-md"
        >
          <ShoppingBag className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Order</span>
        </a>
      </div>
    </div>
  );
};
