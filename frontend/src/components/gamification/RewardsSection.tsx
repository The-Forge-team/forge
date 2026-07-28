import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Gem, Sparkles } from "lucide-react";

const rewards = [
  {
    title: "Profile Highlight",
    desc: "Special border & banner on your profile at Level 10+",
    cost: "Level 10",
    icon: Star,
    gradient: "from-[#ff7f50] to-[#fb923c]",
    emoji: "✨",
  },
  {
    title: "Community Reputation",
    desc: "Your level & badges appear next to your name globally",
    cost: "Free",
    icon: ShieldCheck,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    emoji: "🛡️",
  },
  {
    title: "Early Access",
    desc: "Top contributors get early access to new features",
    cost: "Level 20",
    icon: Zap,
    gradient: "from-violet-600 to-purple-500",
    emoji: "⚡",
  },
  {
    title: "Mentor Circle",
    desc: "Join private groups with other top contributors",
    cost: "5,000 XP",
    icon: Sparkles,
    gradient: "from-amber-500 to-yellow-500",
    emoji: "🎯",
  },
];

export function RewardsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Why Participate?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            It's not about monetary prizes — it's about building trust,
            demonstrating your skills, and growing alongside peers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rewards.map((reward, index) => {
            const Icon = reward.icon;
            return (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${reward.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-40" />
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {reward.emoji}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1.5">
                    {reward.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {reward.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#0f766e]">
                    <Gem className="w-4 h-4" />
                    {reward.cost}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
