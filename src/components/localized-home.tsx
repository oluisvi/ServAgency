import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { ThematicEntry } from "@/components/ui/thematic-entry";
import { MotionController } from "@/components/ui/motion-controller";
import type { Locale } from "@/i18n/config";
import { getSiteCopy } from "@/i18n/copy";

export function LocalizedHome({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);

  return (
    <>
      <ThematicEntry />
      <Header locale={locale} copy={copy} />
      <main>
        <Hero copy={copy.hero} />
        <Outcomes locale={locale} copy={copy.outcomes} />
        <Services locale={locale} copy={copy.services} />
        <Projects locale={locale} copy={copy} />
        <Process locale={locale} copy={copy.process} />
        <About locale={locale} copy={copy.about} />
        <FAQ locale={locale} copy={copy.faq} />
        <Contact locale={locale} copy={copy.contact} />
      </main>
      <Footer locale={locale} copy={copy} />
      <MotionController />
    </>
  );
}
