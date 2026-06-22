import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { FiArrowRight, FiZap } from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

export default function HeroSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    navigate({ to: "/signup" });
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT SIDE */}
          <motion.div className="flex flex-col">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full w-fit">
                <FiZap className="w-4 h-4" />
                HELLO DEVELOPER
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold mb-4 leading-tight text-slate-900"
            >
              We live and breathe
              <br />
              <span className="bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                community.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 mb-8 max-w-md text-lg"
            >
              Connect with developers, build projects together, and grow your network in ways you never imagined.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-emerald-600 to-cyan-600 hover:shadow-lg hover:shadow-emerald-300/50 transition-all whitespace-nowrap"
              >
                Get Started
                <FiArrowRight className="w-4 h-4 inline ml-2" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-emerald-600">150K+</div>
                <div className="text-sm text-slate-500">developers using Forge</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">5K+</div>
                <div className="text-sm text-slate-500">meetups hosted</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-125 flex items-center justify-center"
          >
            {/* Background Decorative Gradient Box */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-100 to-cyan-100 transform rotate-3"
              animate={{ rotate: [3, 8, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Image Container */}
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
                alt="Developer community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl border-2 border-emerald-300 shadow-lg"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💻
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-0 w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-2xl border-2 border-cyan-300 shadow-lg"
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
            >
              🚀
            </motion.div>

            <motion.div
              className="absolute top-1/3 -right-4 w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center text-4xl border-2 border-blue-300 shadow-lg"
              animate={{ x: [0, 15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0.4 }}
            >
              🤝
            </motion.div>

            {/* Bottom Right Stats Card */}
            <motion.div
              className="absolute bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-200 z-20"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
            >
              <div className="text-sm font-bold text-slate-900">2,450</div>
              <div className="text-xs text-slate-500">developers online</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
