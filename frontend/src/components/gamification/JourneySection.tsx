import { motion } from "framer-motion";
import { Edit3, Star, Hammer, Shield, Trophy } from "lucide-react";

const steps = [
  {
    text: "Creates first post",
    icon: Edit3,
    xp: "+15 XP",
    gradient: "from-[#0f766e] to-[#14b8a6]",
  },
  {
    text: "Earns 50 XP in a week",
    icon: Star,
    xp: "+50 XP",
    gradient: "from-[#ff7f50] to-[#fb923c]",
  },
  {
    text: "Levels up to Builder",
    icon: Hammer,
    xp: "Level 5",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    text: "Unlocks Bug Hunter badge",
    icon: Shield,
    xp: "Badge Unlocked",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    text: "Becomes a Mentor",
    icon: Trophy,
    xp: "Level 20",
    gradient: "from-amber-500 to-yellow-500",
  },
];

export function JourneySection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            The User Journey
          </h2>
          <p className="text-lg text-slate-600">
            See how simple actions compound over time into a trusted reputation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0f766e] via-[#ff7f50] to-amber-400 rounded-full" />

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-center gap-4 pl-14"
                >
                  <div
                    className={`absolute left-3.5 w-5 h-5 rounded-full bg-gradient-to-br ${step.gradient} border-2 border-white shadow-md z-10`}
                  />

                  <div className="flex-1 bg-white rounded-2xl p-4 border border-slate-100 shadow-md shadow-slate-200/40 flex items-center justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-sm`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 text-sm">
                        {step.text}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#0f766e] bg-[#ecfdfb] px-3 py-1 rounded-full shrink-0 ml-2">
                      {step.xp}
                    </span>
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
