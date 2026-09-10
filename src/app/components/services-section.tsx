import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { services } from "../data";

export function ServicesSection() {
  const { t, tr } = useI18n();

  return (
    <section id="services" className="py-16 lg:py-12 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link
                to="/contact"
                className="group block h-full rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`grid place-items-center size-12 rounded-xl ${s.iconBgClassName ?? "bg-primary/10"} ${s.iconClassName ?? "text-primary"}`}
                  >
                    <s.icon className="size-6" />
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mb-2" style={{ fontWeight: 600 }}>
                  {tr(s.title)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {tr(s.desc)}
                </p>
                {/* <ul className="flex flex-col gap-2">
                  {tr(s.features).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul> */}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all shrink-0"
        >
          {tr({ fr: "Voir tous nos services", en: "See all services" })}{" "}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
