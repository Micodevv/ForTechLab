import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { stats } from "../data";

export function Hero() {
  const { t, tr } = useI18n();

  return (
    <section className="relative overflow-hidden pb-2">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 pb-0 lg:pt-20 lg:pb-18 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10">
        <div className="flex flex-col gap-6">
          {/* <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground/80">  
            {tr({ fr: "ImpactTech · Transformation numérique · Innovation", en: "ImpactTech · Digital Transformation · Innovation" })}
          </span> */}

          <h1 className="max-w-xl text-[2.35rem] sm:text-[2.9rem] lg:text-[3.8rem] leading-[0.94] tracking-[-0.06em]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Construisons l’avenir numérique de l’Afrique", en: "Let's build Africa's digital future" })}
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {tr({
              fr: "Nous accompagnons les États, les organisations, les entreprises, les startups et les talents dans leur transformation numérique grâce à l’innovation, à la technologie et au développement des compétences.",
              en: "We support governments, organizations, businesses, startups, and talent in their digital transformation through innovation, technology, and skills development.",
            })}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[0.85rem] h-12 px-7 text-sm text-white"
              style={{ background: "var(--primary)", fontWeight: 600 }}
            >
              {t("cta.start")} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 rounded-[0.85rem] h-12 px-7 text-sm border border-border bg-white"
              style={{ fontWeight: 600 }}
            >
              {tr({ fr: "Découvrir ForTechLab", en: "Discover ForTechLab" })}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[1rem] overflow-hidden border border-border bg-card">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?w=900&h=900&fit=crop&auto=format&q=80"
              alt={tr({ fr: "L'équipe ForTechLab au travail", en: "The ForTechLab team at work" })}
              className="w-full h-[420px] lg:h-[520px] object-cover bg-muted"
            />

          </div>
        </div>
      </div>

      <div className="border-y border-border bg-card/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.value.fr} className="py-7 px-4 text-center flex items-center justify-center">
              <span className="text-lg sm:text-xl lg:text-2xl text-foreground text-center leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {tr(s.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
