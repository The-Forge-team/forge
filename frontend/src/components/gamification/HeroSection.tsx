import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Star,
  Shield,
  Sparkles,
  TrendingUp,
  Gem,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const statCards = [
  {
    label: "Current Level",
    value: "Lv. 10",
    sub: "Specialist",
    progress: 54,
    progressLabel: "4,320 / 8,000 XP",
    icon: Star,
    accent: "from-[#ecfdfb] to-[#d1faf5]",
    iconColor: "text-[#0f766e]",
  },
  {
    label: "Rank Title",
    value: "Builder",
    sub: "2,450 rank pts",
    progress: 70,
    progressLabel: "Next: Mentor",
    icon: Trophy,
    accent: "from-[#fff0eb] to-[#ffe4d6]",
    iconColor: "text-[#ff7f50]",
  },
  {
    label: "Weekly Streak",
    value: "7 Days",
    sub: "Daily Streak badge",
    progress: 100,
    progressLabel: "Badge unlocked!",
    icon: Shield,
    accent: "from-[#f0fdf4] to-[#dcfce7]",
    iconColor: "text-emerald-600",
  },
];

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#115e59] shadow-2xl shadow-[#0f766e]/25"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-[#ff7f50]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#ecfdfb]/10 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm font-semibold mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" />
                Community Rewards
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Learn, Build &{" "}
                <span className="text-[#ff7f50]">Earn Recognition</span>
              </h1>

              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                Every meaningful contribution grows your reputation. Earn XP,
                unlock badges, and rise through the ranks as you learn, build,
                and share with others.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white text-[#0f766e] font-bold hover:bg-[#ecfdfb] transition-all hover:scale-[1.02] shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#quests"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/25 hover:bg-white/20 transition-all"
                >
                  View Quests
                </a>
              </div>
            </div>

            {/* Floating profile mockup */}
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative ml-auto w-full max-w-sm"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ecfdfb] to-[#99f6e4] flex items-center justify-center text-2xl shadow-inner">
                      👩‍💻
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Alex Developer
                      </h3>
                      <p className="text-sm text-[#0f766e] font-semibold">
                        Level 10 · Specialist
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#fff0eb] text-[#ff7f50] text-xs font-bold">
                      <Gem className="w-3 h-3" />
                      4,320
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-slate-700">
                        XP Progress
                      </span>
                      <span className="text-slate-500">54%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[54%] rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {[Shield, Star, Trophy].map((Icon, i) => (
                      <div
                        key={i}
                        className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-2xl ${
                          i < 2
                            ? "bg-[#ecfdfb] border border-[#0f766e]/15"
                            : "bg-slate-50 border border-slate-200 opacity-60"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${i < 2 ? "text-[#0f766e]" : "text-slate-400"}`}
                        />
                        <span className="text-[10px] font-semibold text-slate-600">
                          {i === 0 ? "Bug Hunter" : i === 1 ? "Rising Star" : "Locked"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-4 -bottom-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff7f50] to-[#fb923c] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Just earned
                    </p>
                    <p className="text-sm font-bold text-slate-900">+50 XP</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stat cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-6 md:-mt-2 relative z-10">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-5 md:p-6 shadow-lg shadow-slate-200/60 border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {card.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {card.value}
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">{card.sub}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6]"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  {card.progressLabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
