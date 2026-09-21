import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/projects/case-study-view";
import { caseStudies, caseStudyBySlug } from "@/content/case-studies";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyBySlug.get(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study | ServAgency`,
    description: project.subtitle,
  };
}

export default async function ProjectCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudyBySlug.get(slug);
  if (!project) {
    notFound();
    return null;
  }

  return <CaseStudyView project={project} />;
}
