export type TierId = "free" | "pro" | "business";

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTierConfig {
  tier: TierId;
  title: string;
  description: string;
  monthlyPrice: number | null; // null = custom pricing (Business)
  annualPrice: number | null;
  features: PricingFeature[];
  ctaLabel: string;
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTierConfig[] = [
  {
    tier: "free",
    title: "Free",
    description: "Perfect for getting started in the tech community.",
    monthlyPrice: 0,
    annualPrice: null,
    features: [
      { label: "Basic profile setup", included: true },
      { label: "Community access & networking", included: true },
      { label: "1 challenge submission / month", included: true },
      { label: "Standard search placement", included: true },
      { label: "Premium profile styling", included: false },
      { label: "Verified badge", included: false },
      { label: "Portfolio embed", included: false },
      { label: "Priority search placement", included: false },
    ],
    ctaLabel: "Get Started Free",
  },
  {
    tier: "pro",
    title: "Pro",
    description: "For serious developers looking to stand out.",
    monthlyPrice: 5,
    annualPrice: 50,
    features: [
      { label: "Everything in Free", included: true },
      { label: "Premium profile styling", included: true },
      { label: "Verified badge", included: true },
      { label: "Portfolio embed", included: true },
      { label: "Unlimited challenge submissions", included: true },
      { label: "Priority search placement", included: true },
      { label: "Advanced analytics", included: false },
      { label: "Sponsored challenges", included: false },
    ],
    ctaLabel: "Upgrade to Pro",
    highlighted: true,
  },
  {
    tier: "business",
    title: "Business",
    description: "For teams & partners looking to hire and grow.",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Talent discovery & hiring", included: true },
      { label: "Sponsored challenges", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Dedicated support", included: true },
      { label: "Custom integrations", included: true },
      { label: "Team management", included: true },
      { label: "API access", included: true },
    ],
    ctaLabel: "Contact Sales",
  },
];
