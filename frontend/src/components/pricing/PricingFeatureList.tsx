import { motion } from "framer-motion";
import type { PricingFeature } from "@/data/pricing";

interface PricingFeatureListProps {
  features: PricingFeature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function PricingFeatureList({
  features,
}: PricingFeatureListProps) {
  return (
    <motion.ul
      className="space-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, idx) => (
        <motion.li
          key={idx}
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          {feature.included ? (
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <span
            className={
              feature.included
                ? "text-sm text-slate-600"
                : "text-sm text-slate-400 line-through"
            }
          >
            {feature.label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
