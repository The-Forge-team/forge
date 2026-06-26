import { motion } from "framer-motion";
import {
  FiUsers,
  FiCalendar,
  FiCode,
  FiMessageCircle,
} from "react-icons/fi";

const features = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Find Your Tribe",
    description: "Connect with developers who share your passion and interests",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FiCalendar className="w-8 h-8" />,
    title: "Discover Meetups",
    description: "Join local and virtual events to meet fellow developers",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Showcase Projects",
    description: "Share your work and get feedback from the community",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <FiMessageCircle className="w-8 h-8" />,
    title: "Collaborate",
    description: "Partner with others on exciting projects and ideas",
    gradient: "from-orange-500 to-red-500",
  },
];

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

export default function FeaturesSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Experience features designed to help you grow as a developer and build meaningful connections
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative backdrop-blur-sm bg-linear-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all"
            >
              <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} p-3 text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
