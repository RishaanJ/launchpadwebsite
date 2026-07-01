import type { MetadataRoute } from "next";

// Set NEXT_PUBLIC_SITE_URL in the environment for production
// (e.g. https://launchpad.org). Falls back to the placeholder used elsewhere.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchpad.example"
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
  { path: "/initiative", changeFrequency: "monthly", priority: 0.7 },
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
