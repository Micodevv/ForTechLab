import { ContactForm } from "./contact-form";
import { useI18n } from "../i18n";

export function JoinSection() {
  const { tr } = useI18n();

  return (
    <section id="rejoindre" className="py-8 lg:py-4 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <h2 className="text-[2rem] md:text-[2.6rem] leading-[1.08]" style={{ fontWeight: 700 }}>
            {tr({
              fr: "Rejoignez-nous pour construire des solutions innovantes",
              en: "Join us in building innovative solutions",
            })}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
            {tr({
              fr: "Chez ForTechLab, nous recherchons des personnes passionnées, talentueuses et engagées qui partagent notre vision d'un impact positif à travers la technologie, la recherche, le renforcement des capacités et la transformation numérique.",
              en: "At ForTechLab, we are always looking for passionate, talented and purpose-driven individuals who share our vision of creating meaningful impact through technology, research, capacity building and digital transformation.",
            })}
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-card border border-border p-7 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <h3 style={{ fontWeight: 600 }}>{tr({ fr: "Rejoindre l'équipe ForTechLab", en: "Join ForTechLab team" })}</h3>
          </div>
          <ContactForm variant="join" compact />
        </div>
      </div>
    </section>
  );
}
