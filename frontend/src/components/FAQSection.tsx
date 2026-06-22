import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "How do I get started on Forge?",
    answer:
      "Getting started is easy! Sign up with your email or GitHub account, complete your profile with your skills and interests, and start browsing other developers in your city. You can join groups, attend meetups, or start collaborating on projects immediately.",
  },
  {
    id: 2,
    question: "Is Forge free to use?",
    answer:
      "Yes, Forge is completely free! Our core features including discovering developers, joining groups, and collaborating on projects are always free. We believe in building community first, and we offer premium features for teams and organizations.",
  },
  {
    id: 3,
    question: "How do I find developers with specific skills?",
    answer:
      "Use our advanced search filters to find developers by skill, experience level, location, and interests. You can also browse curated lists of developers in your city or check out our skill-based communities.",
  },
  {
    id: 4,
    question: "Can I post project opportunities?",
    answer:
      "Absolutely! You can create project posts to attract collaborators. Specify the skills you're looking for, project details, and timeline. Other developers can express interest and apply to join your team.",
  },
  {
    id: 5,
    question: "How does the community moderation work?",
    answer:
      "We have a dedicated community team that monitors all interactions to ensure a safe and respectful environment. We have clear community guidelines, and users can report any inappropriate behavior for immediate action.",
  },
  {
    id: 6,
    question: "Can I use Forge for recruiting?",
    answer:
      "Yes! Forge is perfect for hiring. Companies can post job opportunities and directly reach out to developers in our community. We offer recruiting packages for organizations looking to scale their hiring efforts.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="mt-1 shrink-0">
              <FiHelpCircle className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 text-left">
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <FiChevronDown className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-l-2 border-emerald-400 ml-10"
            >
              {faq.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-emerald-50/50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Questions?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about Forge
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-linear-to-r from-emerald-600 to-cyan-600 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="mb-4 opacity-95">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full font-semibold bg-white text-emerald-600 hover:bg-slate-100 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
