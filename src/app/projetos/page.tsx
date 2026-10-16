import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import ProjectCatalog from "@/components/sections/project-catalog";
import { getSiteCopy } from "@/i18n/copy";

export const metadata: Metadata = {
  title: "Projetos e experiências por nicho — ServAgency",
  description:
    "Explore 40 experiências digitais demonstrativas da ServAgency, organizadas por nicho e tipo de negócio.",
};

type CatalogSearchParams = Promise<{
  nicho?: string | string[];
  q?: string | string[];
}>;

export default async function ProjectCatalogPage({
  searchParams,
}: {
  searchParams: CatalogSearchParams;
}) {
  const locale = "pt-BR";
  const copy = getSiteCopy(locale);
  const { nicho, q } = await searchParams;
  const category = Array.isArray(nicho) ? nicho[0] : nicho;
  const query = Array.isArray(q) ? q[0] : q;

  return (
    <>
      <Header locale={locale} copy={copy} />
      <main id="inicio">
        <ProjectCatalog activeCategory={category} query={query} />
      </main>
      <Footer locale={locale} copy={copy} />
    </>
  );
}
