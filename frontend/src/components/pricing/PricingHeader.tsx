import { motion } from "framer-motion";

export default function PricingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
        Pricing
      </span>
      <h2 className="text-4xl font-bold text-card-foreground sm:text-5xl">
        Simple, transparent pricing
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Choose the plan that fits your journey. From individual developers to
        enterprise teams, we've got you covered.
      </p>
    </motion.div>
  );
}
