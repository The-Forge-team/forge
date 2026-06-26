import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function CommunitySection() {
  const reasons = [
    "Connect with developers, cybersecurity analysts",
     "Data Scientists, AI Engineers, Tech Content Creators and many more from around the world",
    "Discover and attend local tech meetups",
    "Build your professional network",
    "Find your next job or team",
    "Share your projects and get feedback",
    "Learn from experienced developers",
  ];

  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-900 to-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Join Forge?
            </h2>
            <div className="space-y-4">
              {reasons.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 mt-1 shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-purple-500/20 rounded-2xl" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-6xl">🚀</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
