import { useState } from "react";
import { motion } from "framer-motion";
import PricingHeader from "./PricingHeader";
import PricingToggle from "./PricingToggle";
import PricingCardList from "./PricingCardList";
import { PRICING_TIERS } from "@/data/pricing";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [upgradedTier, setUpgradedTier] = useState<string | null>(null);

  const cards = PRICING_TIERS.map((tier) => {
    let price: string | undefined;

    if (tier.monthlyPrice === null) {
      // Business — no price displayed
      price = undefined;
    } else if (tier.tier === "free") {
      price = "0";
    } else if (billingCycle === "annual" && tier.annualPrice !== null) {
      price = String(tier.annualPrice);
    } else {
      price = String(tier.monthlyPrice);
    }

    return {
      tier: tier.tier,
      title: tier.title,
      description: tier.description,
      price,
      billingCycle,
      features: tier.features,
      ctaLabel: tier.ctaLabel,
      highlighted: tier.highlighted,
      onCtaClick: () => {
        if (tier.tier === "business") {
          window.location.href = "mailto:sales@techcircle.com";
        } else {
          setUpgradedTier(tier.tier);
          // Reset the message after a delay
          setTimeout(() => setUpgradedTier(null), 3000);
        }
      },
    };
  });

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <PricingHeader />

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10"
        >
          <PricingToggle
            billingCycle={billingCycle}
            onChange={setBillingCycle}
          />
        </motion.div>

        {/* Toast notification for mock upgrade */}
        {upgradedTier && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-2xl"
          >
            🎉 You've selected the{" "}
            <span className="capitalize">{upgradedTier}</span> plan! (Mock
            upgrade — no backend yet)
          </motion.div>
        )}

        {/* Cards */}
        <div className="mt-12">
          <PricingCardList cards={cards} />
        </div>
      </div>
    </section>
  );
}
