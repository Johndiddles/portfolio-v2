import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Adepelumi | Full Stack Engineer | Software Engineer",
    short_name: "John Adepelumi",
    description:
      "John Adepelumi is a full stack engineer based in the Bahamas specializing in building exceptional digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
