import { motion } from "framer-motion";
import { Crown, Medal, Gem, CheckCircle2, Circle } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Sarah Chen", xp: "12,450", level: "Mentor", avatar: "👩‍🔬" },
  { rank: 2, name: "Marcus Lee", xp: "10,820", level: "Specialist", avatar: "👨‍💻" },
  { rank: 3, name: "Alex Developer", xp: "4,320", level: "Specialist", avatar: "🧑‍💻", highlight: true },
  { rank: 4, name: "Jamie Park", xp: "3,890", level: "Builder", avatar: "👩‍🎨" },
  { rank: 5, name: "Chris Ortiz", xp: "2,100", level: "Builder", avatar: "🧑‍🔧" },
];

const quests = [
  {
    title: "Post 5 React tips this week",
    progress: 3,
    total: 5,
    reward: "+250 XP",
    badge: "Frontend Pro",
  },
  {
    title: "Solve 3 coding problems",
    progress: 1,
    total: 3,
    reward: "+180 XP",
    badge: null,
  },
  {
    title: "Explain a concept to a beginner",
    progress: 0,
    total: 1,
    reward: "+100 XP",
    badge: "Mentor Badge",
  },
];

export function DashboardPreviewSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your Growth Dashboard
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Track your progress, compete with peers, and complete quests — all
            in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Leaderboard</h3>
              <span className="text-xs font-semibold text-[#0f766e] bg-[#ecfdfb] px-3 py-1 rounded-full">
                This Week
              </span>
            </div>

            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-2xl transition-colors ${
                    user.highlight
                      ? "bg-[#ecfdfb]/60 border border-[#0f766e]/20"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      user.rank === 1
                        ? "bg-[#fff0eb] text-[#ff7f50]"
                        : user.rank === 2
                          ? "bg-slate-100 text-slate-600"
                          : user.rank === 3
                            ? "bg-[#ecfdfb] text-[#0f766e]"
                            : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    {user.rank <= 3 ? (
                      user.rank === 1 ? (
                        <Crown className="w-3.5 h-3.5" />
                      ) : (
                        <Medal className="w-3.5 h-3.5" />
                      )
                    ) : (
                      user.rank
                    )}
                  </span>
                  <span className="text-lg">{user.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-500">{user.level}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      <Gem className="w-3 h-3 text-[#0f766e]" />
                      {user.xp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Daily Quests */}
          <motion.div
            id="quests"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Active Quests
                </h3>
                <p className="text-sm text-slate-500">
                  2 quests remaining for weekly bonus
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white text-sm font-bold">
                <Gem className="w-4 h-4" />
                +530 XP available
              </div>
            </div>

            {/* Featured quest banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] p-5 mb-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Weekly Challenge
                  </p>
                  <p className="text-white font-bold text-lg">
                    Complete all 3 quests
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Unlock the Community MVP badge
                  </p>
                </div>
                <div className="text-center shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-3xl">
                    🏆
                  </div>
                  <p className="text-white/80 text-xs mt-1 font-semibold">
                    1/3 done
                  </p>
                </div>
              </div>
              <div className="relative mt-4 h-2.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 rounded-full bg-[#ff7f50]" />
              </div>
            </div>

            <div className="space-y-3">
              {quests.map((quest, index) => {
                const pct = (quest.progress / quest.total) * 100;
                const done = quest.progress >= quest.total;
                return (
                  <motion.div
                    key={quest.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-start gap-3">
                        {done ? (
                          <CheckCircle2 className="w-5 h-5 text-[#0f766e] shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {quest.title}
                          </p>
                          {quest.badge && (
                            <span className="inline-block mt-1 text-[10px] font-bold text-[#ff7f50] bg-[#fff0eb] px-2 py-0.5 rounded-full">
                              + {quest.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#ff7f50] shrink-0">
                        {quest.reward}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 ml-8">
                      <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6] transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 shrink-0">
                        {quest.progress}/{quest.total}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
