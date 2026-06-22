import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Maya Patel",
    role: "Content Creator",
    company: "Indie Tech Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "Forge made it easy to meet people who actually want to build, share, and ship ideas together.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Product Owner",
    company: "Northstar Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "It gave my product team a direct line to sharp operators across design, engineering, and data.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina Diallo",
    role: "Cybersecurity Analyst",
    company: "SecureLayer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "I found a community where security conversations happen alongside real collaboration, not in isolation.",
    rating: 5,
  },
  {
    id: 4,
    name: "Noah Kim",
    role: "Data Scientist",
    company: "Signal Works",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    quote: "The mix of people here makes it easy to turn analysis into something useful and visible.",
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
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf2f8]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-[#f536ca] uppercase tracking-widest mb-3">
            Voices
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Loved Across Roles
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Content creators, product owners, analysts, and builders all have a place here
          </p>
        </motion.div>

        {/* Testimonials List */}
        <motion.div
          className="mx-auto max-w-4xl divide-y divide-slate-200 border-y border-slate-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="flex items-start gap-4 py-4 sm:py-5"
            >
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="mt-0.5 h-10 w-10 rounded-full object-cover grayscale shrink-0"
                whileHover={{ scale: 1.05 }}
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[#0f766e]">{testimonial.name}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </span>
                  <span className="ml-auto hidden sm:flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-[#ff7f50] text-[#ff7f50]" />
                    ))}
                  </span>
                </div>
                <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-700">
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
