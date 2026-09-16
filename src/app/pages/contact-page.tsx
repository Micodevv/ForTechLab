import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Eyebrow } from "../components/section-heading";
import { ContactForm } from "../components/contact-form";
import { useI18n } from "../i18n";

export default function ContactPage() {
  const { tr } = useI18n();

  const info = [
    { icon: Mail, label: { fr: "Email", en: "Email" }, value: "contact@fortechlab.net", href: "mailto:contact@fortechlab.net" },
    { icon: MapPin, label: { fr: "Adresse", en: "Address" }, value: tr({ fr: "Port-Novo, Bénin", en: "Port-Novo, Benin" }), href: null },
    { icon: Clock, label: { fr: "Horaires", en: "Hours" }, value: tr({ fr: "Lun – Ven, 9h – 18h", en: "Mon – Fri, 9am – 6pm" }), href: null },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-[var(--navy-foreground)] py-16 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          <Eyebrow light>{tr({ fr: "Contactez-nous", en: "Contact us" })}</Eyebrow>
          <h1 className="text-white mt-4 text-[2.6rem] md:text-[3.8rem] leading-[1.05]" style={{ fontWeight: 800 }}>
            {tr({ fr: "Parlons de votre projet", en: "Let's talk about your project" })}
          </h1>
          <p className="mt-4 text-[var(--navy-foreground)]/75 text-lg leading-relaxed max-w-2xl">
            {tr({
              fr: "Une question, un projet ou une envie de formation ? Écrivez-nous, notre équipe vous répond sous 24h.",
              en: "A question, a project or a desire to learn? Write to us, our team replies within 24h.",
            })}
          </p>
          <div className="mt-8 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-sm">
            <MessageSquare className="size-4 text-[var(--cyan)]" />
            {tr({ fr: "Réponse garantie sous 24h — 7j/7", en: "Reply guaranteed within 24h — 7 days a week" })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-28">
            <h2 className="text-xl mb-2" style={{ fontWeight: 700 }}>
              {tr({ fr: "Informations de contact", en: "Contact information" })}
            </h2>
            {info.map((item) => (
              <div key={item.value}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 "
                  >
                    <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{tr(item.label)}</p>
                      <p style={{ fontWeight: 600 }}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <div className="grid place-items-center size-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{tr(item.label)}</p>
                      <p style={{ fontWeight: 600 }}>{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

           
          </div>

          {/* Right: form */}
          <div className="rounded-3xl bg-card border border-border p-7 sm:p-10">
            <div className="flex items-center gap-3 mb-7">
              <div>
                <h3 style={{ fontWeight: 700 }}>{tr({ fr: "Envoyez-nous un message", en: "Send us a message" })}</h3>
                <p className="text-xs text-muted-foreground">{tr({ fr: "Tous les champs * sont obligatoires", en: "All * fields are required" })}</p>
              </div>
            </div>
            <ContactForm variant="general" />
          </div>
        </div>
      </section>
    </div>
  );
}
