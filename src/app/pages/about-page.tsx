import { Link } from "react-router";
import {
  ArrowRight,
  Target,
  Zap,
  Heart,
  Globe,
  Shield,
  Lightbulb,
  Users,
  BarChart3,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { CtaBand } from "../components/cta-band";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: BarChart3,
    color: "var(--brand-blue)",
    title: { fr: "Conseil stratégique", en: "Strategic advisory" },
    desc: {
      fr: "Appui aux réformes, systèmes de gouvernance et stratégies de transformation digitale",
      en: "Support for reforms, governance systems and digital transformation strategies",
    },
  },
  {
    icon: Zap,
    color: "var(--cyan)",
    title: { fr: "Développement de produits numériques", en: "Digital product development" },
    desc: {
      fr: "Conception de plateformes centrées sur l'utilisateur, robustes et évolutives",
      en: "Design of user-centered, robust and scalable platforms",
    },
  },
  {
    icon: BarChart3,
    color: "var(--amber)",
    title: { fr: "Data intelligence", en: "Data intelligence" },
    desc: {
      fr: "Transformer les données en informations exploitables pour la prise de décision",
      en: "Transforming data into actionable insights for decision-making",
    },
  },
  {
    icon: Users,
    color: "var(--brand-blue)",
    title: { fr: "Formation & renforcement des capacités", en: "Training & capacity building" },
    desc: {
      fr: "Doter les institutions, équipes et leaders des compétences pour une transformation durable",
      en: "Equipping institutions, teams and leaders with skills for sustainable transformation",
    },
  },
  {
    icon: Lightbulb,
    color: "var(--cyan)",
    title: { fr: "Incubation d'innovations", en: "Innovation incubation" },
    desc: {
      fr: "Accompagner les solutions émergentes répondant aux défis prioritaires du continent",
      en: "Supporting emerging solutions addressing the continent's most pressing challenges",
    },
  },
];

const values = [
  {
    icon: Target,
    title: { fr: "Impact", en: "Impact" },
    desc: {
      fr: "Nous privilégions des solutions générant des résultats concrets et durables.",
      en: "We focus on solutions that deliver measurable and lasting change.",
    },
  },
  {
    icon: Shield,
    title: { fr: "Intégrité", en: "Integrity" },
    desc: {
      fr: "Nous agissons avec transparence, responsabilité et exigence éthique.",
      en: "We uphold transparency, accountability and ethical standards in everything we do.",
    },
  },
  {
    icon: Zap,
    title: { fr: "Innovation", en: "Innovation" },
    desc: {
      fr: "Nous mobilisons la créativité et la technologie pour résoudre des problèmes complexes.",
      en: "We embrace creativity and technology to solve complex problems.",
    },
  },
  {
    icon: Heart,
    title: { fr: "Ancrage local", en: "Local ownership" },
    desc: {
      fr: "Nous valorisons l'expertise africaine et les solutions adaptées aux contextes locaux.",
      en: "We prioritize African expertise, context and leadership in all our interventions.",
    },
  },
];

const whyItMatters = [
  {
    fr: "Meilleure gouvernance et des services publics plus efficaces",
    en: "More effective governance and better public service delivery",
  },
  {
    fr: "Transparence accrue et redevabilité des institutions",
    en: "Increased transparency and institutional accountability",
  },
  {
    fr: "Décisions fondées sur des données fiables",
    en: "Decisions based on reliable data",
  },
  {
    fr: "Création d'opportunités économiques durables",
    en: "Creation of sustainable economic opportunities",
  },
  {
    fr: "Renforcement des capacités humaines et institutionnelles",
    en: "Strengthening of human and institutional capacities",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const { tr } = useI18n();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-12 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <span
              className="inline-block self-start px-3.5 py-1 rounded-full text-xs tracking-widest uppercase"
              style={{
                background: "var(--secondary)",
                color: "var(--primary)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {tr({ fr: "À propos de ForTechLab", en: "About ForTechLab" })}
            </span>
            <h1
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.06] text-foreground"
              style={{ fontWeight: 800 }}
            >
              {tr({
                fr: "Technologie au service d'un impact durable en Afrique",
                en: "Technology in service of sustainable impact in Africa",
              })}
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              {tr({
                fr: "ForTechLab est une entreprise ImpactTech qui conçoit et déploie des solutions numériques innovantes et évolutives au service de la performance et du développement durable sur le continent.",
                en: "ForTechLab is an ImpactTech venture designing and deploying scalable digital solutions that drive performance and sustainable development across the continent.",
              })}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--primary)", color: "var(--navy-foreground)", fontWeight: 600 }}
              >
                {tr({ fr: "Nous contacter", en: "Contact us" })} <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm border border-border bg-transparent text-foreground transition-colors hover:bg-secondary"
              >
                {tr({ fr: "Nos services", en: "Our services" })}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.5rem] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=680&fit=crop&auto=format&q=80"
                alt={tr({ fr: "Professionnels africains au travail", en: "African professionals at work" })}
                className="w-full h-[420px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
            {/* Left: sticky image + ambition */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[1.5rem] overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=900&h=700&fit=crop&auto=format&q=80"
                  alt={tr({ fr: "Équipe ForTechLab en réunion", en: "ForTechLab team in meeting" })}
                  className="w-full h-[360px] object-cover"
                />
              </div>

              {/* Ambition card */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#f3f6f8", color: "var(--foreground)" }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  {tr({ fr: "Notre ambition", en: "Our ambition" })}
                </p>
                <p className="leading-relaxed" style={{ color: "#475467" }}>
                  {tr({
                    fr: "Être la référence africaine en ImpactTech, en accélérant la transformation numérique au service d’une Afrique plus innovante, plus performante, plus résiliente et plus durable.",
                    en: "To be Africa's leading reference in ImpactTech, accelerating digital transformation for a more innovative, high-performing, resilient, and sustainable Africa.",
                  })}
                </p>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex flex-col gap-12">
              {/* Who we are */}
              <div>
                <span
                  className="inline-block mb-4 px-3 py-1 rounded-full text-xs tracking-widest uppercase"
                  style={{ background: "var(--secondary)", color: "var(--brand-blue)", fontFamily: "var(--font-sans)" }}
                >
                  {tr({ fr: "Qui sommes-nous?", en: "Who we are?" })}
                </span>
                <h2 className="text-3xl mb-5" style={{ fontWeight: 700, color: "var(--navy)" }}>
                  {tr({
                    fr: "À l’intersection de l’innovation, de la technologie et de l’impact",
                    en: "At the intersection of innovation, technology, and impact",
                  })}
                </h2>
                <div className="flex flex-col gap-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  <p>
                    {tr({
                      fr: "ForTechLab est une entreprise ImpactTech qui accompagne les États, les organisations, les entreprises, les startups et les individus dans leur transformation numérique.",
                      en: "ForTechLab is an ImpactTech company that supports governments, organizations, businesses, startups, and individuals in their digital transformation.",
                    })}
                  </p>
                  <p>
                    {tr({
                      fr: "Nous concevons et déployons des solutions innovantes, développons les compétences et mobilisons les technologies émergentes pour améliorer la performance, renforcer la gouvernance et accélérer un développement durable et inclusif en Afrique.",
                      en: "We design and deploy innovative solutions, develop skills, and leverage emerging technologies to improve performance, strengthen governance, and accelerate sustainable, inclusive development across Africa.",
                    })}
                  </p>
                  <p>
                    {tr({
                      fr: "Grâce à une expertise ancrée dans les réalités africaines et alignée sur les meilleures pratiques internationales, nous transformons les défis complexes en opportunités.",
                      en: "With expertise rooted in African realities and aligned with international best practices, we turn complex challenges into opportunities.",
                    })}
                  </p>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-12 lg:py-12" style={{ background: "#f3f6f8" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-block mb-4 px-3.5 py-1 rounded-full text-xs tracking-widest uppercase"
              style={{ background: "rgba(18,141,183,0.08)", color: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              {tr({ fr: "Ce en quoi nous croyons", en: "What we believe in" })}
            </span>
            <h2 className="text-[2rem] sm:text-[2.5rem] text-foreground" style={{ fontWeight: 700 }}>
              {tr({ fr: "Nos valeurs fondamentales", en: "Our core values" })}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title.fr}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{ background: "#ffffff", border: "1px solid rgba(17,24,39,0.08)" }}
              >
                <div
                  className="size-12 rounded-xl grid place-items-center"
                  style={{ background: "rgba(18,141,183,0.08)" }}
                >
                  <v.icon className="size-6" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="text-foreground" style={{ fontWeight: 700 }}>{tr(v.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#556372" }}>
                  {tr(v.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
