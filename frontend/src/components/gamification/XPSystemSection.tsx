import { motion } from "framer-motion";
import {
  MessageSquare,
  Heart,
  CheckCircle,
  Lightbulb,
  Target,
} from "lucide-react";

const actions = [
  {
    name: "Quality Posts",
    desc: "Share tutorials & insights",
    xp: "+50 XP",
    icon: Lightbulb,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    bg: "bg-[#ecfdfb]",
  },
  {
    name: "Helpful Comments",
    desc: "Add value to discussions",
    xp: "+15 XP",
    icon: MessageSquare,
    gradient: "from-[#ff7f50] to-[#fb923c]",
    bg: "bg-[#fff0eb]",
  },
  {
    name: "Accepted Solutions",
    desc: "Help others solve problems",
    xp: "+100 XP",
    icon: CheckCircle,
    gradient: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    name: "Community Upvotes",
    desc: "Get recognized by peers",
    xp: "+5 XP",
    icon: Heart,
    gradient: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    name: "Complete Quests",
    desc: "Finish time-bound challenges",
    xp: "+250 XP",
    icon: Target,
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
];

export function XPSystemSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Earn XP for Every Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience Points are the core currency. They represent the value
            you've contributed and the knowledge you've shared.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl p-5 cursor-default"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {action.name}
                  </h4>
                  <p className="text-xs text-white/75 mb-3 leading-relaxed">
                    {action.desc}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                    {action.xp}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
