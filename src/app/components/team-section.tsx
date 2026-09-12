import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";

export function TeamSection() {
  const { tr } = useI18n();

  return (
    <section id="equipe" className="py-20 lg:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Notre équipe", en: "Our team" })}
          title={tr({ fr: "Les talents derrière ForTechLab", en: "The talent behind ForTechLab" })}
          subtitle={tr({
            fr: "Une équipe passionnée qui allie créativité, expertise technique et sens du détail.",
            en: "A passionate team blending creativity, technical expertise and attention to detail.",
          })}
        />
      </div>
    </section>
  );
}
