import { Link } from "react-router";
import { Check, ArrowRight, Clock, BarChart3, ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { formations } from "../data";

const PREVIEW_COUNT = 4;

export function FormationsSection() {
  const { t, tr } = useI18n();
  const preview = formations.slice(0, PREVIEW_COUNT);

  return (
    <section id="formations" className="py-8 lg:py-12 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Académie ForTechLab", en: "ForTechLab Academy" })}
          title={tr({ fr: "Des formations numériques pour transformer votre carrière", en: "Digital training to transform your career" })}
          subtitle={tr({
            fr: "Des parcours intensifs sur les compétences numériques clés — cybersécurité, data, cloud, DevOps, UI/UX, etc — encadrés par des experts africains et internationaux.",
            en: "Intensive programs on key digital skills — cybersecurity, data, cloud, DevOps, UI/UX, etc — led by African and international experts.",
          })}
        />

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {preview.map((f) => (
            <div
              key={f.id}
              className={`relative flex flex-col rounded-[1rem] border bg-card p-6 ${
                f.popular ? "border-border ring-0" : "border-border"
              }`}
            >
              {f.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs whitespace-nowrap" style={{ fontFamily: "var(--font-sans)" }}>
                  {t("common.popular")}
                </span>
              )}

              <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary mb-5">
                <f.icon className="size-6" />
              </div>

              <h3 className="mb-1.5" style={{ fontWeight: 600 }}>{tr(f.title)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-[40px]">{tr(f.tagline)}</p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-5 pb-5 border-b border-border">
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> {tr(f.duration)}
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 className="size-4 text-primary" /> {tr(f.level)}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-7">
                {tr(f.learn).slice(0, 4).map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/formation/${f.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-full mt-auto w-full h-10 text-sm"
                style={
                  f.popular
                    ? { background: "var(--primary)", color: "white", fontWeight: 600 }
                    : { border: "1px solid var(--border)", color: "var(--foreground)", fontWeight: 600 }
                }
              >
                {t("cta.learnMore")} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            {tr({
              fr: "Pour plus de formations, cliquez sur le bouton ci-dessous",
              en: "For more training programs, click the button below",
            })}
          </p>
          <Link
            to="/formations"
            className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm border border-border bg-transparent text-foreground"
            style={{ fontWeight: 600 }}
          >
            {tr({ fr: "Explorer l'Académie ForTechLab", en: "Explore ForTechLab Academy" })}
            <ChevronRight className="size-4" />
          </Link>
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-[1.5rem] p-7 sm:p-8"
          style={{ background: "var(--primary)", color: "white" }}
        >
          <div className="relative flex flex-col items-center text-center gap-6 lg:items-center">
            <div className="max-w-2xl">
              <h3 className="text-xl" style={{ fontWeight: 700, color: "white" }}>
                {tr({ fr: "Vous êtes une entreprise ou une institution ?", en: "Are you a business or institution?" })}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/90">
                {tr({
                  fr: "Ces formations sont également disponibles en version sur mesure pour les administrations publiques, les ONG, les organisations internationales et les entreprises.",
                  en: "These trainings are also available as tailored programs for public administrations, NGOs, international organizations and businesses.",
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mt-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm bg-white text-foreground"
                style={{ fontWeight: 600 }}
              >
                {tr({ fr: "Demandez un devis personnalisé", en: "Request a customized quote" })}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
