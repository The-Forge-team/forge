import { motion } from "framer-motion";
import PricingFeatureList from "./PricingFeatureList";
import type { TierId, PricingFeature } from "@/data/pricing";

interface PricingCardProps {
  tier: TierId;
  title: string;
  description: string;
  price?: string;
  billingCycle: "monthly" | "annual";
  features: PricingFeature[];
  ctaLabel: string;
  onCtaClick: () => void;
  highlighted?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PricingCard({
  tier,
  title,
  description,
  price,
  billingCycle,
  features,
  ctaLabel,
  onCtaClick,
  highlighted = false,
}: PricingCardProps) {
  const isBusiness = price === undefined;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={highlighted ? { scale: 1.03 } : { scale: 1.01 }}
      className={`relative flex flex-col rounded-2xl border-2 bg-card p-8 shadow-lg transition-shadow duration-300 ${
        highlighted
          ? "border-primary shadow-primary/10 hover:shadow-primary/20"
          : "border-border shadow-sm hover:shadow-md hover:border-primary/30"
      }`}
    >
      {/* Most Popular Badge */}
      {highlighted && (
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-500 px-4 py-1 text-xs font-semibold text-primary-foreground shadow-md">
            <svg
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            Most Popular
          </span>
        </motion.div>
      )}

      {/* Tier Label & Title */}
      <div className="mb-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {tier}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-card-foreground">{title}</h3>

      {/* Pricing */}
      <div className="mt-4 mb-6">
        {isBusiness ? (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-card-foreground">
              Talk to us
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-card-foreground">
              ${price}
            </span>
            <span className="text-sm text-muted-foreground">
              /{billingCycle === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        )}
        {!isBusiness && billingCycle === "annual" && (
          <p className="mt-1 text-xs text-emerald-600 font-medium">
            Save ~17% with annual billing
          </p>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Divider */}
      <div className="mb-6 h-px bg-border" />

      {/* Features */}
      <div className="flex-1">
        <PricingFeatureList features={features} />
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={onCtaClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
          highlighted
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            : "bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
        }`}
      >
        {ctaLabel}
      </motion.button>
    </motion.div>
  );
}
