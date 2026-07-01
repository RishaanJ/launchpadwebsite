import type { MetadataRoute } from "next";

// Set NEXT_PUBLIC_SITE_URL in the environment for production
// (e.g. https://launchpad.org). Falls back to the placeholder used elsewhere.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://buildlaunchpad.org"
).replace(/\/$/, "");

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const ROUTES: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partners", changeFrequency: "weekly", priority: 0.7 },
  // /initiative — intentionally excluded from sitemap. Add back when the
  // Atlas brief is ready for search indexing.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
