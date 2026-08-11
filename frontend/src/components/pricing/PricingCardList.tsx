import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import type { PricingFeature, TierId } from "@/data/pricing";

interface PricingCardData {
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

interface PricingCardListProps {
  cards: PricingCardData[];
}

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

export default function PricingCardList({ cards }: PricingCardListProps) {
  return (
    <motion.div
      className="grid gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card) => (
        <PricingCard
          key={card.tier}
          tier={card.tier}
          title={card.title}
          description={card.description}
          price={card.price}
          billingCycle={card.billingCycle}
          features={card.features}
          ctaLabel={card.ctaLabel}
          onCtaClick={card.onCtaClick}
          highlighted={card.highlighted}
        />
      ))}
    </motion.div>
  );
}
