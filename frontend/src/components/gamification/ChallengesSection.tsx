import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Gift } from "lucide-react";

const quests = [
  {
    title: "Post 5 React tips this week",
    desc: "Share your knowledge with the frontend community.",
    progress: 3,
    total: 5,
    reward: "+250 XP",
    timeLeft: "4 days left",
  },
  {
    title: "Solve 3 coding problems",
    desc: "Help the community by tackling open challenges.",
    progress: 1,
    total: 3,
    reward: "+180 XP",
    timeLeft: "6 days left",
  },
  {
    title: "Explain a concept to a beginner",
    desc: "Write a clear, helpful explanation for newcomers.",
    progress: 0,
    total: 1,
    reward: "+100 XP + Badge",
    timeLeft: "2 days left",
  },
];

export function ChallengesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff0eb] text-[#ff7f50] text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              Time-Bound Quests
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Challenges & Quests
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Not sure what to contribute? Quests give you specific goals to
              strive for — helping you learn while you earn XP, badges, and
              profile highlights.
            </p>
            <ul className="space-y-3">
              {[
                "Targeted learning goals",
                "Weekly & monthly events",
                "Exclusive badge rewards",
                "Profile highlight unlocks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="w-6 h-6 rounded-full bg-[#ecfdfb] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0f766e]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {quests.map((quest, index) => {
              const pct = (quest.progress / quest.total) * 100;
              const done = quest.progress >= quest.total;
              return (
                <motion.div
                  key={quest.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {done ? (
                        <CheckCircle2 className="w-5 h-5 text-[#0f766e] shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {quest.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {quest.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#ff7f50] bg-[#fff0eb] px-2.5 py-1 rounded-full shrink-0">
                      {quest.reward}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-600 shrink-0">
                      {quest.progress}/{quest.total}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {quest.timeLeft}
                    </span>
                    {done && (
                      <button className="text-xs font-bold text-white bg-[#0f766e] px-3 py-1 rounded-full flex items-center gap-1">
                        <Gift className="w-3 h-3" />
                        Claim Reward
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
