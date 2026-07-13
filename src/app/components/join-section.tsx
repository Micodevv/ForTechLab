import { motion } from "motion/react";
import { Briefcase, Globe2, TrendingUp, Heart } from "lucide-react";
import { Eyebrow } from "./section-heading";
import { ContactForm } from "./contact-form";
import { useI18n } from "../i18n";

export function JoinSection() {
  const { tr } = useI18n();

  const perks = [
    {
      icon: Globe2,
      title: { fr: "Projets à fort impact", en: "Meaningful projects" },
      desc: {
        fr: "Contribuez à des initiatives innovantes qui répondent à des défis concrets et favorisent un développement durable en Afrique.",
        en: "Contribute to innovative initiatives that address real-world challenges and create sustainable impact.",
      },
    },
    {
      icon: TrendingUp,
      title: { fr: "Apprenez et évoluez", en: "Learn and grow" },
      desc: {
        fr: "Développez vos compétences grâce à l'apprentissage continu, à la collaboration et à l'exposition aux technologies les plus récentes.",
        en: "Develop your skills through continuous learning, collaboration and exposure to cutting-edge technologies.",
      },
    },
    {
      icon: Heart,
      title: { fr: "Faites la différence", en: "Make an impact" },
      desc: {
        fr: "Aidez les organisations et les communautés à tirer parti de la technologie pour obtenir des résultats durables.",
        en: "Help organizations and communities leverage technology and knowledge to achieve lasting results.",
      },
    },
  ];

  return (
    <section id="rejoindre" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:sticky lg:top-28"
        >
          {/* <Eyebrow>{tr({ fr: "Rejoindre l'équipe", en: "Join the team" })}</Eyebrow> */}
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

          {/* <div className="flex flex-col gap-4 mt-2">
            {perks.map((p) => (
              <div key={p.title.fr} className="flex items-start gap-4">
                <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <p.icon className="size-5" />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>{tr(p.title)}</h4>
                  <p className="text-sm text-muted-foreground">{tr(p.desc)}</p>
                </div>
              </div>
            ))}
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-xl shadow-primary/5"
        >
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="grid place-items-center size-11 rounded-xl bg-primary text-primary-foreground">
              <Briefcase className="size-5" />
            </div> */}
            <h3 style={{ fontWeight: 600 }}>{tr({ fr: "Rejoindre l'équipe ForTechLab", en: "Join ForTechLab team" })}</h3>
          </div>
          <ContactForm variant="join" compact />
        </motion.div>
      </div>
    </section>
  );
}
