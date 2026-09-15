import { Link } from "react-router";
import {
  Twitter,
  Briefcase,
  Globe2,
  TrendingUp,
  Heart,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { SectionHeading, Eyebrow } from "../components/section-heading";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ContactForm } from "../components/contact-form";
import { useI18n } from "../i18n";
import { team, stats } from "../data";

export default function EquipePage() {
  const { tr } = useI18n();

  const perks = [
    {
      icon: Globe2,
      title: { fr: "Projets internationaux", en: "International projects" },
      desc: { fr: "Travaillez sur des produits à impact pour des clients variés.", en: "Work on impactful products for diverse clients." },
    },
    {
      icon: TrendingUp,
      title: { fr: "Montée en compétences", en: "Skill growth" },
      desc: { fr: "Formez-vous en continu et progressez avec des experts.", en: "Keep learning and grow alongside experts." },
    },
    {
      icon: Heart,
      title: { fr: "Flexibilité & remote", en: "Flexibility & remote" },
      desc: { fr: "Collaborez à distance avec une équipe bienveillante.", en: "Collaborate remotely with a caring team." },
    },
    {
      icon: Star,
      title: { fr: "Culture de l'excellence", en: "Excellence culture" },
      desc: { fr: "Rejoignez une équipe qui vise toujours plus haut.", en: "Join a team that always aims higher." },
    },
    {
      icon: Zap,
      title: { fr: "Projets variés & stimulants", en: "Varied & stimulating projects" },
      desc: { fr: "Fintech, EdTech, HealthTech — ne vous ennuyez jamais.", en: "Fintech, EdTech, HealthTech — never be bored." },
    },
    {
      icon: Briefcase,
      title: { fr: "Freelance bienvenu", en: "Freelancers welcome" },
      desc: { fr: "Rejoignez notre vivier d'experts freelance sur des missions.", en: "Join our expert freelance pool for missions." },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-20 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "Notre équipe", en: "Our team" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.8rem] md:text-[4rem] leading-[1.04]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Les talents derrière Fortechlab", en: "The talent behind Fortechlab" })}
          </h1>
          <p className="mt-5 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Une équipe passionnée qui allie créativité, expertise technique et sens du détail pour livrer des solutions digitales d'exception.",
              en: "A passionate team blending creativity, technical expertise and attention to detail to deliver exceptional digital solutions.",
            })}
          </p>

          {/* Stats */}
          {/* <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-3xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{s.value}</p>
                <p className="text-sm text-[var(--navy-foreground)]/60 mt-1">{tr(s.label)}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Why join us */}
      <section className="py-20 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow={tr({ fr: "Pourquoi nous rejoindre", en: "Why join us" })}
            title={tr({ fr: "Travaillez différemment", en: "Work differently" })}
            subtitle={tr({
              fr: "Chez Fortechlab, nous croyons qu'un environnement épanouissant est la clé de la créativité et de l'excellence.",
              en: "At Fortechlab, we believe a fulfilling environment is the key to creativity and excellence.",
            })}
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p) => (
              <div key={p.title.fr} className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-6">
                <div className="grid place-items-center size-11 rounded-xl bg-primary/8 text-primary shrink-0">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h4 className="text-foreground" style={{ fontWeight: 600 }}>{tr(p.title)}</h4>
                  <p className="text-sm text-slate-600 mt-1">{tr(p.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join form */}
      <section id="rejoindre" className="py-20 lg:py-16 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Eyebrow>{tr({ fr: "Candidature", en: "Application" })}</Eyebrow>
            <h2 className="text-[2rem] md:text-[2.6rem] leading-[1.08]" style={{ fontWeight: 700 }}>
              {tr({ fr: "Rejoignez l'équipe Fortechlab", en: "Join the Fortechlab team" })}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
              {tr({
                fr: "Vous êtes développeur, designer, DevOps ou expert du numérique ? Nous sommes toujours à la recherche de talents passionnés pour construire l'avenir avec nous.",
                en: "Are you a developer, designer, DevOps or digital expert? We're always looking for passionate talent to build the future with us.",
              })}
            </p>
            <div className="mt-2 p-5 rounded-2xl" style={{ background: "#edf5f8", border: "1px solid rgba(17,24,39,0.08)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
                {tr({
                  fr: "Postes ouverts en ce moment : Développeur React Senior, Designer UX Mobile, Ingénieur DevOps, Data Analyst.",
                  en: "Currently open positions: Senior React Developer, Mobile UX Designer, DevOps Engineer, Data Analyst.",
                })}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-7 sm:p-9">
            {/* <div className="flex items-center gap-3 mb-6">
             
              <h3 style={{ fontWeight: 600 }}>{tr({ fr: "Candidature spontanée", en: "Spontaneous application" })}</h3>
            </div> */}
            <ContactForm variant="join" compact />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--navy)] text-[var(--navy-foreground)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Eyebrow light>{tr({ fr: "Des questions ?", en: "Any questions?" })}</Eyebrow>
          <h2 className="text-white mt-4 text-[1.8rem] md:text-[2.4rem]" style={{ fontWeight: 700 }}>
            {tr({ fr: "Parlons de votre projet ou de votre candidature", en: "Let's discuss your project or application" })}
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full h-12 px-8 text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--primary)", fontWeight: 600 }}
          >
            {tr({ fr: "Nous contacter", en: "Contact us" })} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
