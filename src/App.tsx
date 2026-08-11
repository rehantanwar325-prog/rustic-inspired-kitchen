import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { StorySection } from './components/StorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { LightboxModal } from './components/LightboxModal';
import type { GalleryItem } from './data/restaurantData';

export function App() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [parentCategory, setParentCategory] = useState<string>('Starters & Kebabs');

  const handleSelectCategoryFromShowcase = (categoryKey: string) => {
    setParentCategory(categoryKey);
  };

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F7F4EF] selection:bg-[#C5A059]/30 selection:text-[#FAF7F2] relative">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <FeatureSection />
        <CategoryShowcase onSelectCategory={handleSelectCategoryFromShowcase} />
        <SignatureDishes />
        <MenuSection selectedCategoryFromParent={parentCategory} />
        <GallerySection onOpenLightbox={(img) => setLightboxImage(img)} />
        <StorySection />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar */}
      <MobileBottomBar />

      {/* Gallery Lightbox Preview Modal */}
      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

export default App;
