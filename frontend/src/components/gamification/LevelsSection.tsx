import { motion } from "framer-motion";
import { Compass, Hammer, Award, GraduationCap, Crown } from "lucide-react";

const levels = [
  {
    level: 1,
    title: "Explorer",
    xp: "0 – 1,000 XP",
    desc: "Just starting out, exploring the community.",
    icon: Compass,
    color: "from-slate-400 to-slate-500",
  },
  {
    level: 5,
    title: "Builder",
    xp: "1,000 – 5,000 XP",
    desc: "Actively contributing and participating.",
    icon: Hammer,
    color: "from-[#0f766e] to-[#14b8a6]",
  },
  {
    level: 10,
    title: "Specialist",
    xp: "5,000 – 15,000 XP",
    desc: "Recognized for consistent, quality input.",
    icon: Award,
    color: "from-[#ff7f50] to-[#fb923c]",
  },
  {
    level: 20,
    title: "Mentor",
    xp: "15,000 – 40,000 XP",
    desc: "Guiding others and sharing deep knowledge.",
    icon: GraduationCap,
    color: "from-violet-600 to-purple-500",
  },
  {
    level: 30,
    title: "Thought Leader",
    xp: "40,000+ XP",
    desc: "A pillar of the community.",
    icon: Crown,
    color: "from-amber-500 to-yellow-500",
  },
];

export function LevelsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Level Progression
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Rise through the ranks automatically as you accumulate XP. Each
            level unlocks a new title on your profile.
          </p>
        </div>

        {/* Featured level card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#115e59] p-6 md:p-8 mb-6 shadow-xl shadow-[#0f766e]/20"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm font-semibold mb-1">
                Your Current Level
              </p>
              <h3 className="text-3xl font-bold text-white mb-1">
                Level 10: Specialist
              </h3>
              <p className="text-white/70 text-sm">
                4,320 / 8,000 XP to Mentor
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm text-white/80 mb-2">
                <span>Progress</span>
                <span className="font-bold">54%</span>
              </div>
              <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[54%] rounded-full bg-gradient-to-r from-[#ff7f50] to-[#fbbf24]" />
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-3xl shrink-0">
              🏅
            </div>
          </div>
        </motion.div>

        {/* Level track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {levels.map((level, index) => {
            const Icon = level.icon;
            const isCurrent = level.level === 10;
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative rounded-3xl p-5 border transition-all hover:-translate-y-1 hover:shadow-lg ${
                  isCurrent
                    ? "bg-[#ecfdfb] border-[#0f766e]/30 shadow-md shadow-[#0f766e]/10"
                    : "bg-white border-slate-100 shadow-sm"
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2.5 left-4 text-[10px] font-bold text-white bg-[#0f766e] px-2.5 py-0.5 rounded-full">
                    You are here
                  </span>
                )}
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full mb-2">
                  Level {level.level}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {level.title}
                </h3>
                <p className="text-xs font-semibold text-[#0f766e] mb-2">
                  {level.xp}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {level.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
