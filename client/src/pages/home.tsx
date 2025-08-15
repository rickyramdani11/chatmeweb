import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import GamesShowcase from "@/components/games-showcase";
import VirtualGiftsSection from "@/components/virtual-gifts-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gradient-to-br from-dark-bg via-purple-900 to-dark-card text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <GamesShowcase />
      <VirtualGiftsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
