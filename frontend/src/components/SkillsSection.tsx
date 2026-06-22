import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const skills = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "TypeScript", category: "Languages" },
  { id: 3, name: "Node.js", category: "Backend" },
  { id: 4, name: "Python", category: "Languages" },
  { id: 5, name: "Next.js", category: "Frontend" },
  { id: 6, name: "GraphQL", category: "Backend" },
  { id: 7, name: "Vue.js", category: "Frontend" },
  { id: 8, name: "PostgreSQL", category: "Database" },
  { id: 9, name: "MongoDB", category: "Database" },
  { id: 10, name: "AWS", category: "DevOps" },
  { id: 11, name: "Docker", category: "DevOps" },
  { id: 12, name: "Git", category: "Tools" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "DevOps",
  "Tools",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const;

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const toggleSkill = (id: number) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-emerald-50/30"
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
            Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Find Developers By Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our community by the technologies they specialize in
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-linear-to-r from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-300/50"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill) => (
            <motion.button
              key={skill.id}
              variants={itemVariants}
              onClick={() => toggleSkill(skill.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl font-semibold transition-all ${
                selectedSkills.includes(skill.id)
                  ? "bg-linear-to-br from-emerald-600 to-cyan-600 text-white shadow-lg shadow-emerald-300/50"
                  : "bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-400"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>{skill.name}</span>
                {selectedSkills.includes(skill.id) && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FiCheck className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
              <p className="text-xs opacity-75 mt-1">{skill.category}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Skills Summary */}
        {selectedSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-4">
              Found{" "}
              <span className="font-semibold text-emerald-600">
                {Math.floor(Math.random() * 500) + 100}
              </span>{" "}
              developers with{" "}
              <span className="font-semibold">
                {selectedSkills.length > 1
                  ? "these skills"
                  : "this skill"}
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-emerald-600 to-cyan-600 hover:shadow-lg hover:shadow-emerald-300/50 transition-all"
            >
              Browse Developers
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
