import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { ThematicEntry } from "@/components/ui/thematic-entry";
import { MotionController } from "@/components/ui/motion-controller";

export default function Home() {
  return (
    <>
      <ThematicEntry />
      <Header />
      <main>
        <Hero />
        <Outcomes />
        <Services />
        <Projects />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MotionController />
    </>
  );
}
