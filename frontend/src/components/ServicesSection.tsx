import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Find Developers",
    description: "Connect with talented developers in your city",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Collaborate",
    description: "Work together on exciting projects",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Learn & Grow",
    description: "Expand your skills with the community",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Build Projects",
    description: "Create amazing things together",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Network",
    description: "Build meaningful professional connections",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    title: "Mentor",
    description: "Share knowledge and guide others",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=200&h=200&fit=crop",
    color: "from-pink-500 to-rose-500",
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

export default function ServicesSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-emerald-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - Circle on left, services on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left - Circular Images Grid */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center lg:justify-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-linear-to-br ${service.color}`}
                style={{
                  transform:
                    idx % 2 === 0
                      ? `translateY(${Math.random() * 20}px)`
                      : `translateY(-${Math.random() * 20}px)`,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Service Cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all cursor-pointer group"
              >
                <div className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center`}>
                  <FiArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
