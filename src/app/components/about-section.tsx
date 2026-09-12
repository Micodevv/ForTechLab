import { Link } from "react-router";
import { ArrowRight, Target, Zap, Heart, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";

const values = [
  {
    icon: Target,
    iconClassName: "text-cyan-600",
    iconBgClassName: "bg-cyan-50",
    label: { fr: "Impact", en: "Impact" },
    desc: {
      fr: "Des solutions à impact durable.",
      en: "Solutions with lasting impact.",
    },
  },
  {
    icon: Heart,
    iconClassName: "text-rose-600",
    iconBgClassName: "bg-rose-50",
    label: { fr: "Intégrité", en: "Integrity" },
    desc: {
      fr: "La transparence, la responsabilité et l’éthique dans toutes nos actions.",
      en: "Transparency, responsibility and ethics in everything we do.",
    },
  },
  {
    icon: Zap,
    iconClassName: "text-amber-600",
    iconBgClassName: "bg-amber-50",
    label: { fr: "Innovation", en: "Innovation" },
    desc: {
      fr: "La technologie et la créativité au service des défis de demain.",
      en: "Technology and creativity serving tomorrow’s challenges.",
    },
  },
  {
    icon: Globe,
    iconClassName: "text-emerald-600",
    iconBgClassName: "bg-emerald-50",
    label: { fr: "Ancrage africain", en: "African anchoring" },
    desc: {
      fr: "Des solutions adaptées aux réalités africaines et aux standards internationaux.",
      en: "Solutions tailored to African realities and international standards.",
    },
  },
];

export function AboutSection() {
  const { tr } = useI18n();

  return (
    <section id="a-propos" className="py-20 lg:py-10 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14">
          <span
            className="inline-block mb-4 px-3.5 py-1 rounded-full text-xs tracking-widest uppercase"
            style={{ background: "var(--secondary)", color: "var(--brand-blue)", fontFamily: "var(--font-sans)" }}
          >
            {tr({ fr: "À propos de ForTechLab", en: "About ForTechLab" })}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-[1rem] overflow-hidden border border-border bg-card">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=900&h=700&fit=crop&auto=format&q=80"
                alt={tr({ fr: "Équipe ForTechLab en réunion", en: "ForTechLab team in meeting" })}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h2 className="text-[2rem] sm:text-[2.6rem] leading-tight" style={{ fontWeight: 800 }}>
                {tr({
                  fr: "Un acteur de référence de l'ImpactTech",
                  en: "A leading ImpactTech player",
                })}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-lg">
                {tr({
                  fr: "Concevoir des technologies et des solutions fondées sur les données qui génèrent un impact durable pour l’Afrique.",
                  en: "Building technology and data-driven solutions that create lasting impact for Africa.",
                })}
              </p>
            </div>

            <Link
              to="/a-propos"
              className="self-start inline-flex items-center gap-2 rounded-[0.85rem] px-7 h-12 text-sm text-white"
              style={{ background: "var(--primary)", fontWeight: 600 }}
            >
              {tr({ fr: "En savoir plus", en: "Learn more about" })}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-center text-sm uppercase tracking-widest mb-8" style={{ color: "var(--brand-blue)", fontFamily: "var(--font-sans)" }}>
            {tr({ fr: "Nos valeurs", en: "Our values" })}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.label.fr}
                className="flex flex-col gap-3 p-5 rounded-[1rem] border border-border bg-card/80"
              >
                <div className={`size-11 rounded-xl grid place-items-center ${v.iconBgClassName ?? "bg-secondary"}`}>
                  <v.icon className={`size-5 ${v.iconClassName ?? "text-[var(--brand-blue)]"}`} />
                </div>
                <h4 style={{ fontWeight: 700 }}>{tr(v.label)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(v.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
