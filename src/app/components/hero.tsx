import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { stats } from "../data";

export function Hero() {
  const { t, tr } = useI18n();

  return (
    <section className="relative overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-white to-white" />
        <div className="absolute -top-32 -right-24 size-[480px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-40 -left-32 size-[420px] rounded-full bg-[var(--cyan)]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 pb-0 lg:pt-24 lg:pb-18 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-7"
        >
          <span
            className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-border shadow-sm text-sm"
          >
            <Sparkles className="size-4" style={{ color: "#ebae09" }} />
            {tr({ fr: "ImpactTech · Transformation numérique · Innovation", en: "ImpactTech · Digital Transformation · Innovation" })}
          </span>

          <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.06]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Construisons l’avenir numérique de l’Afrique ", en: "Let's build Africa's digital future " })}
            {/* <span className="relative" style={{ color: "var(--brand-blue)" }}>
              {tr({ fr: "performance", en: "performance" })}
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7C50 2 150 2 198 7" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> */}
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {tr({
              fr: "Nous accompagnons les États, les organisations, les entreprises, les startups et les talents dans leur transformation numérique grâce à l’innovation, à la technologie et au développement des compétences.",
              en: "We support governments, organizations, businesses, startups, and talent in their digital transformation through innovation, technology, and skills development.",
            })}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)", fontWeight: 600 }}
            >
              {t("cta.start")} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm border border-border bg-white hover:bg-secondary transition-colors"
              style={{ fontWeight: 600 }}
            >
              {tr({ fr: "Découvrir ForTechLab", en: "Discover ForTechLab" })}
            </Link>
          </div>

          {/* <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {[
                "photo-1739303987830-ca19742b19bc",
                "photo-1641759191629-cc107016e78a",
                "photo-1739289696453-36d45073e1c7",
              ].map((id) => (
                <ImageWithFallback
                  key={id}
                  src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&auto=format&q=80`}
                  alt=""
                  className="size-9 rounded-full border-2 border-white object-cover bg-muted"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-0.5" style={{ color: "#ebae09" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                {tr({ fr: "500+ professionnels formés · 50+ projets", en: "500+ professionals trained · 50+ projects" })}
              </span>
            </div>
          </div> */}
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border border-border">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?w=900&h=900&fit=crop&auto=format&q=80"
              alt={tr({ fr: "L'équipe ForTechLab au travail", en: "The ForTechLab team at work" })}
              className="w-full h-[420px] lg:h-[520px] object-cover bg-muted"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.value.fr} className="py-7 px-4 text-center flex items-center justify-center">
              <span className="text-lg sm:text-xl lg:text-2xl text-primary text-center leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                {tr(s.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
