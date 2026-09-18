import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/i18n/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // Static asset published alongside the export, not a Next.js route.
      url: `${siteUrl}/tools/semesteroptimering.html`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      // Built separately by scripts/deploy.sh and copied into /budapest.
      url: `${siteUrl}/budapest/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
