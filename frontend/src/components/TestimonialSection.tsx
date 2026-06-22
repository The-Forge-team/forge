import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Alex Turner",
    role: "Full Stack Developer",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Forge helped me find amazing collaborators for my side project. The community is incredibly supportive!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Product Designer",
    company: "Design Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "The networking opportunities on Forge are unmatched. I've met so many talented developers here.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Chen",
    role: "Backend Engineer",
    company: "Cloud Systems",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "This platform transformed how I approach learning and collaboration. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "DevOps Engineer",
    company: "Infrastructure Pro",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    quote: "Found my perfect team through Forge. Building amazing things together has never been easier.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

export default function TestimonialSection() {
  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-emerald-50/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of developers who've found their perfect collaborators
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-200/50 transition-all cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-6 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-600"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
