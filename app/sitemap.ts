import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/case-studies", "/about", "/blogs", "/pricing", "/approach", "/contact"].map(path => ({url: "https://ispier.com" + path}));
}