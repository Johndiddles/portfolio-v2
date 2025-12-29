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
  ];
}
