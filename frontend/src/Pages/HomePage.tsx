import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
// import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      <ScrollProgressBar />

      <BackgroundElements />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <StatsSection />
        {/* <SkillsSection /> */}
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
