import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <BackgroundElements />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
}
