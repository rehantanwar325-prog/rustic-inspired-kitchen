import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#12100E]/90 backdrop-blur-md border-b border-[#C5A059]/20 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#12100E]/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex flex-col items-start focus:outline-none">
            <span className="font-editorial text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#FAF7F2] group-hover:text-[#C5A059] transition-colors">
              RUSTIC
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#C5A059] uppercase font-light -mt-1">
              Inspired Kitchen
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm uppercase tracking-[0.2em] text-[#D1C7BD] hover:text-[#C5A059] transition-colors duration-300 font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="text-xs uppercase tracking-widest text-[#C5A059] hover:text-[#FAF7F2] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href="https://www.zomato.com/jaipur/rustic-inspired-kitchen-c-scheme"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#12100E] bg-gold-gradient hover:brightness-110 transition-all rounded-sm shadow-lg hover:shadow-[#C5A059]/20"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="https://www.zomato.com/jaipur/rustic-inspired-kitchen-c-scheme"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#12100E] bg-gold-gradient rounded-sm"
            >
              Order
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FAF7F2] hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#12100E]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto pt-24' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="border-b border-[#C5A059]/20 pb-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Navigation</p>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-editorial tracking-wider text-[#FAF7F2] hover:text-[#C5A059] flex items-center justify-between py-1"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          ))}
        </div>

        {/* Mobile Contact Footer Info */}
        <div className="space-y-4 pt-6 border-t border-[#C5A059]/20">
          <div className="flex items-center gap-3 text-sm text-[#D1C7BD]">
            <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>C-Scheme, Jaipur, Rajasthan</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#D1C7BD]">
            <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
            <span>{RESTAURANT_INFO.phone}</span>
          </div>
          <a
            href="https://www.zomato.com/jaipur/rustic-inspired-kitchen-c-scheme"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 text-center block text-xs font-semibold tracking-[0.2em] uppercase text-[#12100E] bg-gold-gradient rounded-sm shadow-md"
          >
            Order Now on Zomato
          </a>
        </div>
      </div>
    </>
  );
};
