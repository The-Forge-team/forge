import { motion } from "framer-motion";

interface PricingToggleProps {
  billingCycle: "monthly" | "annual";
  onChange: (cycle: "monthly" | "annual") => void;
}

export default function PricingToggle({
  billingCycle,
  onChange,
}: PricingToggleProps) {
  const isAnnual = billingCycle === "annual";

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          !isAnnual ? "text-card-foreground" : "text-muted-foreground"
        }`}
      >
        Monthly
      </span>

      <button
        onClick={() =>
          onChange(isAnnual ? "monthly" : "annual")
        }
        className="relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        style={{
          backgroundColor: isAnnual ? "#0f766e" : "#cbd5e1",
        }}
        aria-label={`Switch to ${isAnnual ? "monthly" : "annual"} billing`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block h-5 w-5 rounded-full bg-white shadow-md"
          style={{
            marginLeft: isAnnual ? "calc(100% - 1.25rem - 2px)" : "2px",
          }}
        />
      </button>

      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isAnnual ? "text-card-foreground" : "text-muted-foreground"
        }`}
      >
        Annual
        <span className="ml-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
          Save 17%
        </span>
      </span>
    </div>
  );
}
