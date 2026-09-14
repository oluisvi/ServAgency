import type { PortfolioProject } from "@/content/site";

type Props = {
  project: PortfolioProject;
  layout?: "lead" | "supporting";
};

/**
 * Legacy compatibility shim.
 * Flagship work is rendered by ProjectScene in the redesigned portfolio rail.
 * This component remains only to overwrite the pre-redesign ProjectCard when
 * files are uploaded on top of an existing repository.
 */
export function ProjectCard({ project: _project, layout: _layout = "supporting" }: Props) {
  return null;
}
