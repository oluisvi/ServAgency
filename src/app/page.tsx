import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Audit } from "@/components/sections/audit";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://servagency.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ServAgency",
      url: siteUrl,
      description:
        "Agência de tecnologia e soluções digitais para pequenas e médias empresas.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "ServAgency",
      url: siteUrl,
      areaServed: "Brasil",
      serviceType: [
        "Desenvolvimento web",
        "SEO",
        "Automação",
        "Inteligência artificial",
        "Consultoria digital",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Services />
        <Audit />
        <Process />
        <Projects />
        <Technologies />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
