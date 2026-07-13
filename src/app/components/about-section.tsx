import { Link } from "react-router";
import { motion } from "motion/react";
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
      fr: "Des solutions générant des résultats concrets et durables",
      en: "Solutions delivering measurable and lasting change",
    },
  },
  {
    icon: Heart,
    iconClassName: "text-rose-600",
    iconBgClassName: "bg-rose-50",
    label: { fr: "Intégrité", en: "Integrity" },
    desc: {
      fr: "Transparence, responsabilité et exigence éthique",
      en: "Transparency, accountability and ethical standards",
    },
  },
  {
    icon: Zap,
    iconClassName: "text-amber-600",
    iconBgClassName: "bg-amber-50",
    label: { fr: "Innovation", en: "Innovation" },
    desc: {
      fr: "Créativité et technologie pour des problèmes complexes",
      en: "Creativity and technology to solve complex problems",
    },
  },
  {
    icon: Globe,
    iconClassName: "text-emerald-600",
    iconBgClassName: "bg-emerald-50",
    label: { fr: "Ancrage local", en: "Local ownership" },
    desc: {
      fr: "L'expertise africaine au cœur de chaque intervention",
      en: "African expertise at the heart of every intervention",
    },
  },
];

export function AboutSection() {
  const { tr } = useI18n();

  return (
    <section id="a-propos" className="py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span
            className="inline-block mb-4 px-3.5 py-1 rounded-full text-xs tracking-widest uppercase"
            style={{ background: "var(--secondary)", color: "var(--brand-blue)", fontFamily: "var(--font-mono)" }}
          >
            {tr({ fr: "À propos de ForTechLab", en: "About ForTechLab" })}
          </span>
          
        </motion.div>

        {/* Image + content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-30">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ boxShadow: "0 24px 64px -16px rgba(13,39,72,0.2)" }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=900&h=700&fit=crop&auto=format&q=80"
                alt={tr({ fr: "Équipe ForTechLab en réunion", en: "ForTechLab team in meeting" })}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,39,72,0.15) 0%, transparent 60%)" }} />
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -top-5 -left-5 size-24 rounded-3xl -z-10 rotate-12"
              style={{ background: "var(--cyan)", opacity: 0.5 }}
            />
            <div
              className="absolute -bottom-4 -right-4 size-16 rounded-2xl -z-10"
              style={{ background: "var(--brand-blue)", opacity: 0.35 }}
            />            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-7"
          >
            
          <div className="flex flex-col gap-4">
            <h2 className="text-[2rem] sm:text-[2.6rem] leading-tight" style={{ fontWeight: 800 }}>
              {tr({
                fr: "Une venture ImpactTech africaine de référence",
                en: "A leading African ImpactTech venture",
              })}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-lg">
              {tr({
                fr: "ForTechLab conçoit et déploie des solutions numériques innovantes à l'intersection de la gouvernance, de l'innovation et du développement durable en Afrique. Positionnés à l'intersection de la gouvernance, de la transformation digitale et de l'innovation, nous accompagnons tous les acteurs de développement (B2G, B2B) dans la conception de systèmes à fort impact.",
                en: "ForTechLab designs and deploys innovative digital solutions at the intersection of governance, innovation and sustainable development across Africa. Positioned at the intersection of governance, digital transformation and innovation, we partner with all development actors (B2G, B2B) to build high-impact systems.",
              })}
            </p>
          </div>

            <Link
              to="/a-propos"
              className="self-start inline-flex items-center gap-2 rounded-full px-7 h-12 text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)", fontWeight: 600 }}
            >
              {tr({ fr: "En savoir plus", en: "Learn more about" })}
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>

        {/* Values grid */}
        <div>
          <p className="text-center text-sm uppercase tracking-widest mb-8" style={{ color: "var(--brand-blue)", fontFamily: "var(--font-mono)" }}>
            {tr({ fr: "Nos valeurs", en: "Our values" })}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label.fr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card "
              >
                <div className={`size-11 rounded-xl grid place-items-center ${v.iconBgClassName ?? "bg-secondary"}`}>
                  <v.icon className={`size-5 ${v.iconClassName ?? "text-[var(--brand-blue)]"}`} />
                </div>
                <h4 style={{ fontWeight: 700 }}>{tr(v.label)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr(v.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
