import Navbar from "@/components/Navbar";
import BackgroundElements from "@/components/BackgroundElements";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/gamification/HeroSection";
import { DashboardPreviewSection } from "@/components/gamification/DashboardPreviewSection";
import { HowItWorksSection } from "@/components/gamification/HowItWorksSection";
import { XPSystemSection } from "@/components/gamification/XPSystemSection";
import { LevelsSection } from "@/components/gamification/LevelsSection";
import { BadgesSection } from "@/components/gamification/BadgesSection";
import { ChallengesSection } from "@/components/gamification/ChallengesSection";
import { RewardsSection } from "@/components/gamification/RewardsSection";
import { JourneySection } from "@/components/gamification/JourneySection";
import { GamificationFAQ } from "@/components/gamification/GamificationFAQ";

export default function GamificationPage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      <BackgroundElements />
      <Navbar />

      <main className="relative z-10 pt-16">
        <HeroSection />
        <DashboardPreviewSection />
        <HowItWorksSection />
        <XPSystemSection />
        <LevelsSection />
        <BadgesSection />
        <ChallengesSection />
        <RewardsSection />
        <JourneySection />
        <GamificationFAQ />

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#115e59] p-10 md:p-14 text-center shadow-2xl shadow-[#0f766e]/25">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#ff7f50]/20 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to grow your reputation?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join the community, share your knowledge, and start earning XP
                today.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-[#0f766e] font-bold text-lg hover:bg-[#ecfdfb] hover:scale-[1.03] transition-all shadow-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
