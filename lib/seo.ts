import type { Metadata } from "next";

// Set NEXT_PUBLIC_SITE_URL to your production origin before deploying.
// Falls back to a placeholder so builds don't break locally.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://buildlaunchpad.org"
).replace(/\/$/, "");

export const SITE_NAME = "Launchpad";
export const SITE_TAGLINE = "The High School Product Development Network";
// Brand mark (used in JSON-LD alternateName and elsewhere)
export const BRAND_TAGLINE = "Build. Ship. Sell. Scale.";
export const SITE_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "The high school product development network. We teach students to build, ship, sell, and scale real products that reach real people — not class projects, not hackathon trophies.";

export const SHORT_DESCRIPTION =
  "The high school product development network. Build, ship, sell, and scale real products.";

// 1200x630-ish social preview image. Actual asset is 2544x1300 (1.96:1),
// which crops cleanly for both OG (1.91:1) and Twitter summary_large_image.
export const OG_IMAGE = {
  url: "/seobg.png",
  width: 2544,
  height: 1300,
  alt: `${SITE_NAME} — ${BRAND_TAGLINE}`,
} as const;

export const TWITTER_HANDLE = "@launchpadbuild";

export const KEYWORDS = [
  "high school",
  "product development",
  "student builders",
  "nonprofit",
  "hackathon",
  "Shipathon",
  "startup",
  "founder education",
  "youth entrepreneurship",
  "AHS",
  "Bay Area",
  "chapter network",
  "open-source curriculum",
  "Launchpad",
];

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: { url: string; width: number; height: number; alt?: string };
  ogType?: "website" | "article";
  noIndex?: boolean;
};

/**
 * Build a Metadata object for a single page. Handles canonical URLs, OG,
 * Twitter, and defaults inherited from the site constants above.
 *
 * Pass a bare `title` (no site suffix) — the layout's `title.template` will
 * append " — Launchpad" for you. To override the template entirely, provide
 * a full string here and it'll still work.
 */
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  ogImage = OG_IMAGE,
  ogType = "website",
  noIndex = false,
}: BuildMetadataArgs = {}): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title ?? SITE_TITLE;

  return {
    title: title ?? SITE_TITLE,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: canonicalUrl,
      locale: "en_US",
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * JSON-LD Organization schema for the home page. Helps Google render rich
 * knowledge-panel results. Add more `sameAs` links once socials are live.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: SITE_NAME,
    alternateName: BRAND_TAGLINE,
    url: SITE_URL,
    logo: `${SITE_URL}/BigLogo.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description: SITE_DESCRIPTION,
    slogan: BRAND_TAGLINE,
    foundingDate: "2026",
    areaServed: [
      { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
    ],
    sameAs: [
      // Populate as socials go live
      // "https://twitter.com/launchpadbuild",
      // "https://instagram.com/launchpadbuild",
      // "https://linkedin.com/company/launchpad-network",
    ],
  } as const;
}
