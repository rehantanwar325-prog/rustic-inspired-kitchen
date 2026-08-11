import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { Utensils, X } from 'lucide-react';

interface MenuSectionProps {
  selectedCategoryFromParent?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ selectedCategoryFromParent }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    selectedCategoryFromParent || 'Kebabs'
  );
  const [dietaryFilter, setDietaryFilter] = useState<'All' | 'Veg' | 'NonVeg'>('All');
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  // Sync category if clicked from category showcase
  React.useEffect(() => {
    if (selectedCategoryFromParent) {
      setActiveCategory(selectedCategoryFromParent);
    }
  }, [selectedCategoryFromParent]);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const categoryMatches = item.category.toLowerCase() === activeCategory.toLowerCase();
    if (!categoryMatches) return false;

    if (dietaryFilter === 'Veg') return item.isVeg === true;
    if (dietaryFilter === 'NonVeg') return item.isVeg === false;
    return true;
  });

  return (
    <section id="menu" className="py-24 bg-[#12100E] relative border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A059] font-semibold mb-3">
            FINE INDIAN CUISINE
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            The Rustic Menu
          </h2>
          <p className="text-xs sm:text-sm text-[#D1C7BD] font-light mt-4 leading-relaxed">
            Every dish is freshly prepared with traditional cold-pressed spices, slow charcoal grilling, and Awadhi culinary finesse.
          </p>
        </div>

        {/* Dietary Filters & Search Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setDietaryFilter('All')}
            className={`px-4 py-2 text-xs uppercase tracking-wider rounded-xs transition-all ${
              dietaryFilter === 'All'
                ? 'bg-[#C5A059] text-[#12100E] font-semibold'
                : 'bg-[#1A1614] text-[#D1C7BD] hover:text-[#FAF7F2] border border-[#C5A059]/20'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setDietaryFilter('Veg')}
            className={`px-4 py-2 text-xs uppercase tracking-wider rounded-xs flex items-center gap-2 transition-all ${
              dietaryFilter === 'Veg'
                ? 'bg-emerald-800 text-emerald-100 border border-emerald-500 font-semibold'
                : 'bg-[#1A1614] text-[#D1C7BD] hover:text-[#FAF7F2] border border-[#C5A059]/20'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            Vegetarian
          </button>
          <button
            onClick={() => setDietaryFilter('NonVeg')}
            className={`px-4 py-2 text-xs uppercase tracking-wider rounded-xs flex items-center gap-2 transition-all ${
              dietaryFilter === 'NonVeg'
                ? 'bg-rose-900 text-rose-100 border border-rose-500 font-semibold'
                : 'bg-[#1A1614] text-[#D1C7BD] hover:text-[#FAF7F2] border border-[#C5A059]/20'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
            Non-Vegetarian
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center overflow-x-auto no-scrollbar space-x-2 pb-4 border-b border-[#C5A059]/20 mb-12 justify-start md:justify-center">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-all duration-300 relative ${
                activeCategory.toLowerCase() === cat.toLowerCase()
                  ? 'text-[#C5A059] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C5A059]'
                  : 'text-[#D1C7BD]/70 hover:text-[#FAF7F2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#1A1614]/80 border border-[#C5A059]/15 rounded-sm hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    {/* Veg/Non-Veg Badge */}
                    <div
                      className={`w-5 h-5 rounded-xs bg-[#12100E] border p-0.5 flex items-center justify-center flex-shrink-0 ${
                        item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                    </div>

                    <h3 className="font-editorial text-xl font-medium text-[#FAF7F2] group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h3>

                    {item.isPopular && (
                      <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 rounded-xs">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <span className="font-editorial text-xl font-semibold text-[#FAF7F2] whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-xs text-[#D1C7BD] font-light leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>

              {item.spiceLevel && (
                <div className="mt-4 pt-3 border-t border-[#C5A059]/10 pl-8 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#D1C7BD]/60">
                    Spice Level:
                  </span>
                  <span className="text-[10px] text-[#C5A059] font-medium">
                    {item.spiceLevel}
                  </span>
                </div>
              )}
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#D1C7BD]">
              <p className="text-sm font-light">No items match your selected filter in this category.</p>
            </div>
          )}
        </div>

        {/* VIEW COMPLETE MENU Button */}
        <div className="text-center">
          <button
            onClick={() => setIsFullMenuOpen(true)}
            className="px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#12100E] bg-gold-gradient hover:brightness-110 transition-all rounded-sm shadow-xl inline-flex items-center gap-3"
          >
            <Utensils className="w-4 h-4" />
            <span>VIEW COMPLETE MENU</span>
          </button>
        </div>
      </div>

      {/* Full Menu Modal Overlay */}
      {isFullMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#12100E]/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full bg-[#1A1614] border border-[#C5A059]/30 rounded-sm p-6 sm:p-10 relative my-auto shadow-2xl">
            <button
              onClick={() => setIsFullMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#D1C7BD] hover:text-[#C5A059]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059]">RUSTIC JAIPUR</span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#FAF7F2] mt-1">
                Complete Culinary Menu
              </h2>
              <p className="text-xs text-[#D1C7BD] mt-2">All prices are inclusive of taxes.</p>
            </div>

            {/* Render all categories */}
            <div className="space-y-10">
              {MENU_CATEGORIES.map((category) => {
                const categoryItems = MENU_ITEMS.filter((i) => i.category === category);
                if (categoryItems.length === 0) return null;
                return (
                  <div key={category} className="border-b border-[#C5A059]/20 pb-6">
                    <h3 className="font-editorial text-2xl text-[#C5A059] mb-4 pb-2 border-b border-[#C5A059]/10">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categoryItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                              />
                              <h4 className="text-sm font-medium text-[#FAF7F2]">{item.name}</h4>
                            </div>
                            <p className="text-xs text-[#D1C7BD]/70 font-light mt-0.5">{item.description}</p>
                          </div>
                          <span className="font-editorial text-sm font-semibold text-[#FAF7F2]">
                            ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsFullMenuOpen(false)}
                className="px-8 py-3 text-xs font-semibold tracking-widest uppercase bg-[#C5A059] text-[#12100E] rounded-sm"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
