import { MetadataRoute } from "next";
import { CLIENT_ORIGIN } from "@/constants/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CLIENT_ORIGIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${CLIENT_ORIGIN}/projects/shifttracker/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
