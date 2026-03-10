import { MetadataRoute } from "next";
import { projectsData } from "@/lib/project-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/work`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
