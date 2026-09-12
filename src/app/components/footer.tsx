import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";
import { Logo } from "./logo";
import { useI18n } from "../i18n";
import { services } from "../data";

export function Footer() {
  const { t, tr, lang } = useI18n();

  const company: { label: string; to: string }[] = {
    fr: [
      { label: "À propos", to: "/a-propos" },
      { label: "Notre équipe", to: "/equipe" },
      // { label: "Projets", to: "/projets" },
      { label: "Académie ForTechLab", to: "/formations" },
      { label: "Rejoindre l'équipe", to: "/equipe" },
    ],
    en: [
      { label: "About", to: "/a-propos" },
      { label: "Our team", to: "/equipe" },
      { label: "Projects", to: "/projets" },
      { label: "ForTechLab Academy", to: "/formations" },
      { label: "Join the team", to: "/equipe" },
    ],
  }[lang];

  return (
    <footer className="bg-white text-[var(--foreground)] border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5 max-w-xs">
            <Logo monochrome />
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
              {tr({
                fr: "Entreprise ImpactTech africaine au service de la transformation numérique et du développement durable.",
                en: "African ImpactTech company driving digital transformation and sustainable development.",
              })}
            </p>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Github, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center size-9 rounded-lg bg-[var(--muted)] "
                  aria-label="social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={t("nav.services")}>
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.id} to="/services">
                {tr(s.title)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={tr({ fr: "Entreprise", en: "Company" })}>
            {company.map((c) => (
              <FooterLink key={c.label} to={c.to}>
                {c.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={t("nav.contact")}>
            <ContactItem icon={Mail}>contact@fortechlab.net</ContactItem>
            {/* <ContactItem icon={Phone}>+229 01 96 14 72 30</ContactItem> */}
            <ContactItem icon={MapPin}>
              {tr({ fr: "Porto-Novo, Bénin", en: "Porto-Novo, Benin" })}
            </ContactItem>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} ForTechLab. {tr({ fr: "Tous droits réservés.", en: "All rights reserved." })}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[var(--foreground)]" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ icon: Icon, children }: { icon: typeof Mail; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)]">
      <Icon className="size-4 text-[var(--primary)] shrink-0" />
      {children}
    </li>
  );
}
