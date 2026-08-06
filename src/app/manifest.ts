import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ServAgency",
    short_name: "ServAgency",
    description: "Tecnologia, design e estratégia para empresas em evolução.",
    start_url: "/ServAgency/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0757f8",
    icons: [
      { src: "/ServAgency/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
