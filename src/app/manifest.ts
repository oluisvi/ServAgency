import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ServAgency",
    short_name: "ServAgency",
    description: "Sistemas e experiências digitais com estratégia, design e tecnologia.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0f",
    theme_color: "#090b0f",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
