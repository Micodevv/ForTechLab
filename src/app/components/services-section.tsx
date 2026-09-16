import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { services } from "../data";

export function ServicesSection() {
  const { tr } = useI18n();

  return (
    <section id="services" className="py-8 lg:py-8 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow={tr({ fr: "Nos services", en: "Our services" })}
            title={tr({
              fr: "Une approche intégrée au service de l'impact",
              en: "An integrated approach in service of impact",
            })}
            subtitle={tr({
              fr: "Conseil stratégique, solutions numériques, data intelligence, formation et innovation — nous intervenons à chaque étape de la transformation digitale de votre organisation.",
              en: "Strategic advisory, digital solutions, data intelligence, training and innovation — we step in at every stage of your organization's digital transformation.",
            })}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.id}>
              <Link
                to="/contact"
                className="group block h-full rounded-[0.95rem] border border-border bg-white p-5 transition-colors hover:border-border"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div
                    className={`grid place-items-center size-11 rounded-[0.75rem] ${s.iconBgClassName ?? "bg-primary/10"} ${s.iconClassName ?? "text-primary"}`}
                  >
                    <s.icon className="size-5" />
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </div>

                <h3 className="mb-2 text-[1.2rem] leading-snug" style={{ fontWeight: 700 }}>
                  {tr(s.title)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tr(s.desc)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full h-12 px-6 text-sm border border-border bg-transparent text-foreground shrink-0"
          style={{ fontWeight: 600 }}
        >
          {tr({ fr: "Voir tous nos services", en: "See all services" })}{" "}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
