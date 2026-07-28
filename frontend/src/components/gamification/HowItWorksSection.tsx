import { motion } from "framer-motion";
import { Edit3, Star, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Contribute",
    description: "Post quality content, comment with value, and help others.",
    icon: Edit3,
    color: "from-[#0f766e] to-[#14b8a6]",
  },
  {
    id: 2,
    title: "Earn XP",
    description: "Gain Experience Points for every meaningful action.",
    icon: Star,
    color: "from-[#ff7f50] to-[#fb923c]",
  },
  {
    id: 3,
    title: "Unlock Recognition",
    description: "Level up, earn badges, and grow your reputation.",
    icon: TrendingUp,
    color: "from-violet-600 to-purple-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple system designed to reward continuous learning and
            collaboration.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.id} className="flex-1 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-200/40 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-md`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Step {step.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {!isLast && (
                  <div className="hidden md:flex items-center justify-center px-3 shrink-0">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
