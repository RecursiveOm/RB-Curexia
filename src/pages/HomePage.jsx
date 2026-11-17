import FilmGrain from '../components/layout/FilmGrain.jsx';
import OpeningCurtain from '../components/layout/OpeningCurtain.jsx';
import MainHeader from '../components/layout/MainHeader.jsx';
import NavigationOverlay from '../components/layout/NavigationOverlay.jsx';
import ProductLightbox from '../components/layout/ProductLightbox.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import MissionSection from '../components/sections/MissionSection.jsx';
import PanaceaSection from '../components/sections/PanaceaSection.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import NetworkSection from '../components/sections/NetworkSection.jsx';
import ConciergeSection from '../components/sections/ConciergeSection.jsx';

export default function HomePage() {
  return (
    <>
      <FilmGrain />
      <OpeningCurtain />
      <MainHeader />
      <NavigationOverlay />
      <main className="relative w-full">
        <HeroSection />
        <MissionSection />
        <PanaceaSection />
        <ServicesSection />
        <NetworkSection />
        <ConciergeSection />
      </main>
      <ProductLightbox />
    </>
  );
}
