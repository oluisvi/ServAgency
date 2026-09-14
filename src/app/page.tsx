import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://servagency.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ServAgency",
      url: siteUrl,
      description:
        "Agência de tecnologia, design e soluções digitais para pequenas e médias empresas.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "ServAgency",
      url: siteUrl,
      areaServed: "Brasil",
      serviceType: [
        "Desenvolvimento web",
        "Automação",
        "Inteligência artificial",
        "SEO",
        "Experiências digitais interativas",
        "Consultoria digital",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Outcomes />
        <Services />
        <Projects />
        <Process />
        <Technologies />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
