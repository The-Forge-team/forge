import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { FiArrowRight } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function CTASection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate({ to: "/signup" });
  };

  return (
    <motion.section
      className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0f766e]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Ready to Meet Your Next Collaborator?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join our thriving community of tech professionals and start your journey today
          </motion.p>
          <motion.button
            variants={itemVariants}
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-semibold text-white bg-[#ff7f50] hover:bg-[#f536ca] shadow-lg shadow-black/10 transition-all"
          >
            Start Your Journey
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
