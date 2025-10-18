import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { MenuSection } from '@/components/sections/menu';
import { GallerySection } from '@/components/sections/gallery';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { LeafAnimation } from '@/components/leaf-animation';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <LeafAnimation />
        <HeroSection />
        <MenuSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
