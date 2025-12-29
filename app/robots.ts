import { MetadataRoute } from "next";
import { CLIENT_ORIGIN } from "@/constants/urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CLIENT_ORIGIN}/sitemap.xml`,
  };
}
