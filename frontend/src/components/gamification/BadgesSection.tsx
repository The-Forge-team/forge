import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Crown,
  Terminal,
  Heart,
  Trophy,
} from "lucide-react";

const badges = [
  {
    title: "Daily Streak",
    desc: "Posted consistently for 7 days.",
    icon: Star,
    gradient: "from-[#ff7f50] to-[#fb923c]",
    earned: true,
  },
  {
    title: "OS Contributor",
    desc: "Contributed to open source projects.",
    icon: Terminal,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    earned: true,
  },
  {
    title: "Bug Hunter",
    desc: "Found and reported a significant bug.",
    icon: Shield,
    gradient: "from-violet-600 to-purple-500",
    earned: true,
  },
  {
    title: "UI Wizard",
    desc: "Shared exceptional UI/UX designs.",
    icon: Crown,
    gradient: "from-pink-500 to-rose-500",
    earned: false,
  },
  {
    title: "Mentor Badge",
    desc: "Consistently helped beginners.",
    icon: Heart,
    gradient: "from-emerald-600 to-teal-500",
    earned: false,
  },
  {
    title: "Community MVP",
    desc: "Top contributor of the month.",
    icon: Trophy,
    gradient: "from-amber-500 to-yellow-500",
    earned: false,
  },
];

export function BadgesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Badges & Achievements
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Earn unique badges for milestones. Display them proudly on your
            profile for the whole community to see.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={`relative overflow-hidden rounded-3xl p-6 border transition-all ${
                  badge.earned
                    ? "bg-white border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl"
                    : "bg-slate-50 border-slate-200 opacity-75"
                }`}
              >
                {!badge.earned && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
                    Locked
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center mb-4 shadow-md ${
                    !badge.earned ? "grayscale opacity-50" : ""
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 text-lg">
                  {badge.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {badge.desc}
                </p>
                {badge.earned && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#0f766e]">
                    <Star className="w-3.5 h-3.5 fill-[#0f766e]" />
                    Earned
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
