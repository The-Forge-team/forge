import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "How do I earn XP?",
    answer:
      "You earn XP through meaningful contributions like posting quality tutorials, leaving helpful comments, having your answers accepted as solutions, and completing time-bound challenges.",
  },
  {
    id: 2,
    question: "Can I lose XP?",
    answer:
      "No, you never lose XP! Your progress is permanent. Taking a break won't hurt your score. However, spam or abusive behavior may lead to moderation actions.",
  },
  {
    id: 3,
    question: "How do badges work?",
    answer:
      "Badges are visual achievements earned for specific milestones, like posting for 7 consecutive days or finding a bug. Once earned, they are permanently displayed on your profile.",
  },
  {
    id: 4,
    question: "How do I level up?",
    answer:
      "Leveling up is completely automatic. As you accumulate XP from your contributions, you will pass XP thresholds that automatically upgrade your Level title (e.g., from Builder to Specialist).",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-[#0f766e]/30 transition-all group cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div
              className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                isOpen
                  ? "bg-[#0f766e] text-white"
                  : "bg-[#ecfdfb] text-[#0f766e]"
              }`}
            >
              <FiHelpCircle className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 text-left pt-1">
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <FiChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#0f766e] transition-colors" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-3 ml-11 text-slate-600 leading-relaxed text-sm border-l-2 border-[#ff7f50] ml-14 mr-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function GamificationFAQ() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about the gamification system.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
