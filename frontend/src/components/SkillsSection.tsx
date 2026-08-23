import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const categories = [
  { id: 1, name: "Software Engineer", category: "Engineering" },
  { id: 2, name: "Cybersecurity Analysts", category: "Security" },
  { id: 3, name: "Data Scientists", category: "Data" },
  { id: 4, name: "AI Engineers", category: "AI" },
  { id: 5, name: "Content Creators", category: "Content" },
  { id: 6, name: "Product Managers", category: "Product" },
  { id: 7, name: "Cloud Engineers", category: "Engineering" },
  { id: 8, name: "DevOps Engineers", category: "Infrastructure" },
  { id: 9, name: "UI/UX Designers", category: "Design" },
  { id: 10, name: "Data Engineers", category: "Data" },
  { id: 11, name: "Machine Learning Engineers", category: "AI" },
  { id: 12, name: "QA Engineers", category: "Quality" },
  { id: 13, name: "Vibe Coders", category: "Engineering" },
];

const categoryFilters = [
  "All",
  "Engineering",
  "Data",
  "AI",
  "Security",
  "Content",
  "Infrastructure",
  "Design",
  "Quality",
  "Product",
  "Creative"
];

const FOUND_PROFESSIONALS = 420;

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
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((item) => item.category === selectedCategory);

  const selectedCategoryItems = categories.filter((item) =>
    selectedCategories.includes(item.id)
  );

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <motion.section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#fff5f0]"
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
          <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">
            Categories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Find Tech Professionals By Category
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our community by the kinds of professionals they are
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
          {categoryFilters.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-[#0f766e] text-white shadow-lg shadow-black/10"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredCategories.map((categoryItem) => (
            <motion.button
              key={categoryItem.id}
              variants={itemVariants}
              onClick={() => toggleCategory(categoryItem.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl font-semibold transition-all ${
                selectedCategories.includes(categoryItem.id)
                  ? "bg-[#0f766e] text-white shadow-lg shadow-black/10 ring-2 ring-[#0f766e] ring-offset-2 ring-offset-white"
                  : "bg-white border-2 border-slate-200 text-slate-700 hover:border-[#ff7f50]"
              }`}
            >
              <div className="flex items-center justify-between gap-3 text-left">
                <span className="text-sm leading-snug">{categoryItem.name}</span>
                {selectedCategories.includes(categoryItem.id) && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FiCheck className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Categories Summary */}
        {selectedCategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 mb-4">
              Found{" "}
              <span className="font-semibold text-[#0f766e]">
                {FOUND_PROFESSIONALS}
              </span>{" "}
              professionals in{" "}
              <span className="font-semibold">
                {selectedCategories.length > 1
                  ? "these categories"
                  : "this category"}
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedCategoryItems.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center rounded-full bg-[#fdf2f8] px-4 py-2 text-sm font-semibold text-[#f536ca] border border-[#f536ca]/20"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold text-white bg-[#0f766e] hover:bg-[#0d655d] hover:shadow-lg hover:shadow-black/10 transition-all"
            >
              Browse Professionals
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
