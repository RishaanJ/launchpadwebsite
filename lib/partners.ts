export type PartnerTier = "Friend" | "Builder" | "Operator" | "Title";

export type Partner = {
  name: string;
  tier: PartnerTier;
  logo?: string | null;
  url?: string;
  blurb?: string;
  since?: string;
};

// Populate as real sponsors sign on. `logo` is an optional path under /public.
// Empty PARTNERS array → both /#partners and /partners render the recruitment state.
export const PARTNERS: Partner[] = [
  // Example:
  // {
  //   name: "Vercel",
  //   tier: "Title",
  //   logo: "/partners/vercel.svg",
  //   url: "https://vercel.com",
  //   blurb: "Title partner of the inaugural Bay Area Shipathon.",
  //   since: "2026",
  // },
];

export const PARTNER_SLOT_COUNT = 6;

export const TIER_ORDER: PartnerTier[] = [
  "Title",
  "Operator",
  "Builder",
  "Friend",
];

export const TIER_AMOUNTS: Record<PartnerTier, string> = {
  Friend: "$500",
  Builder: "$2,500",
  Operator: "$10,000",
  Title: "$30,000+",
};
