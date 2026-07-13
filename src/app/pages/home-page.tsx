import { Hero } from "../components/hero";
import { AboutSection } from "../components/about-section";
import { ServicesSection } from "../components/services-section";
import { FormationsSection } from "../components/formations-section";
// import { ProjectsSection } from "../components/projects-section"; // temporairement désactivé
import { ProcessSection } from "../components/process-section";
import { TeamSection } from "../components/team-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { JoinSection } from "../components/join-section";
import { FaqSection } from "../components/faq-section";
import { CtaBand } from "../components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FormationsSection />
      {/* <ProjectsSection /> temporairement désactivé */}
      <ProcessSection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      <JoinSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
