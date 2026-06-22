import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function TeamSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-emerald-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left - Text */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">
              Our Community
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Welcome to <br /> the Forge
            </h2>
            <p className="text-slate-600 text-lg">
              Our thriving community of tech professionals is ready to connect, collaborate, and build amazing things together.
            </p>
          </motion.div>

          {/* Right - Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <p className="text-slate-600 leading-relaxed">
              Join thousands of people across 50+ cities worldwide. Whether you're looking to learn, collaborate on side projects, or find your next opportunity, Forge is your platform.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <button className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-emerald-600 to-cyan-600 hover:shadow-lg hover:shadow-emerald-300/50 transition-all">
              Join The Community
            </button>
          </motion.div>
        </motion.div>

        {/* Team Members Carousel */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              className={`relative flex flex-col items-center ${
                idx % 2 === 0 ? "mt-0" : "mt-8"
              }`}
            >
              {/* Circle Container */}
              <div
                className={`relative rounded-full overflow-hidden border-4 border-slate-200 shadow-xl w-40 h-40 sm:w-48 sm:h-48 ${
                  idx % 2 === 0
                    ? "bg-linear-to-br from-emerald-500 to-cyan-500"
                    : "bg-linear-to-br from-purple-500 to-pink-500"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Card Below */}
              <motion.div className="mt-4 text-center">
                <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                <p className="text-xs text-slate-500">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
