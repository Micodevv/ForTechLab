import { useState, FormEvent, useRef } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Tag } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { useI18n } from "../i18n";

export type FormVariant = "general" | "join" | "formation";

export function ContactForm({
  variant = "general",
  context,
  compact = false,
}: {
  variant?: FormVariant;
  context?: string;
  compact?: boolean;
}) {
  const { t, tr } = useI18n();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const subjectLabel = tr({
    join: { fr: "Domaine d'expertise", en: "Area of expertise" },
    formation: { fr: "Formation visée", en: "Target training" },
    general: { fr: "Sujet", en: "Subject" },
  }[variant]);

  const messageLabel = tr({
    join: { fr: "Présentez-vous & vos compétences", en: "Introduce yourself & your skills" },
    formation: { fr: "Vos questions sur la formation", en: "Your questions about the training" },
    general: { fr: "Votre message", en: "Your message" },
  }[variant]);

  const messagePlaceholder = tr({
    join: {
      fr: "Décrivez votre expérience, vos technologies de prédilection et ce que vous souhaitez apporter à Fortechlab…",
      en: "Describe your experience, your preferred technologies and what you'd bring to Fortechlab…",
    },
    formation: {
      fr: "Dites-nous votre niveau actuel, vos objectifs et toute question sur le programme…",
      en: "Tell us your current level, your goals and any questions about the program…",
    },
    general: {
      fr: "Parlez-nous de votre projet ou de votre objectif…",
      en: "Tell us about your project or goal…",
    },
  }[variant]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) {
      setLoading(false);
      setError(tr({ fr: "Formulaire introuvable.", en: "Form not found." }));
      return;
    }

    // Envoi via EmailJS: service, template, form, clé publique
    emailjs
      .sendForm(
        "service_pea6hlq",
        "template_cxamro8",
        formRef.current,
        "GsbIytjKZ5PawDXoU"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          try {
            formRef.current?.reset();
          } catch (err) {
            // ignore
          }
        },
        (err) => {
          setLoading(false);
          setError(
            tr({ fr: "Erreur lors de l'envoi. Réessayez.", en: "Error sending message. Please try again." })
          );
          console.error("EmailJS error:", err);
        }
      );
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-14 px-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary border border-border">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
          <div className="relative grid place-items-center size-16 rounded-full bg-primary text-primary-foreground shadow-sm">
            <CheckCircle2 className="size-8" />
          </div>
        </div>
        <div>
          <h3 className="text-lg mb-1" style={{ fontWeight: 700 }}>
            {tr({ fr: "Message envoyé !", en: "Message sent!" })}
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm">{t("form.success")}</p>
        </div>
        <Button variant="outline" className="rounded-full" onClick={() => setSent(false)}>
          {tr({ fr: "Envoyer un autre message", en: "Send another message" })}
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      {context && (
        <div className="flex items-center gap-2.5 text-sm px-4 py-5 rounded-xl bg-navy border border-white/10 text-white">
          <Tag className="size-5 shrink-0" />
          <span style={{ fontWeight: 500, fontSize: "1rem" }}>{context}</span>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <FloatingField
          label={t("form.name")}
          htmlFor="name"
          icon={User}
        >
          <input
            id="name"
            name="user_name"
            required
            placeholder={t("form.placeholder.name")}
            className="peer w-full h-12 rounded-xl border border-border px-4 pl-10 text-sm outline-none"
          />
        </FloatingField>

        <FloatingField
          label={t("form.email")}
          htmlFor="email"
          icon={Mail}
        >
          <input
            id="email"
            name="user_email"
            type="email"
            required
            placeholder="email@exemple.com"
            className="peer w-full h-12 rounded-xl border border-border px-4 pl-10 text-sm outline-none"
          />
        </FloatingField>

        <FloatingField
          label={t("form.phone")}
          htmlFor="phone"
          icon={Phone}
        >
          <input
            id="phone"
            name="user_phone"
            type="tel"
            placeholder="+229"
            className="peer w-full h-12 rounded-xl border border-border px-4 pl-10 text-sm outline-none"
          />
        </FloatingField>

        <FloatingField
          label={subjectLabel}
          htmlFor="subject"
          icon={Tag}
        >
          <input
            id="subject"
            name="subject"
            required
            placeholder={subjectLabel}
              className="peer w-full h-12 rounded-xl border border-border px-4 pl-10 text-sm outline-none"
            />
        </FloatingField>
      </div>

      <FloatingField label={messageLabel} htmlFor="message" icon={MessageSquare}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={messagePlaceholder}
          className="peer w-full rounded-xl border border-border px-4 pl-10 py-3 text-sm outline-none"
        />
      </FloatingField>

      {context && (
        <input type="hidden" name="context" value={context} />
      )}

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-md">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          {tr({ fr: "Réponse sous 24h garantie", en: "Reply guaranteed within 24h" })}
        </p>
        <Button
          type="submit"
          disabled={loading}
          className="rounded-full h-11 px-7 gap-2 shadow-sm"
        >
          {loading ? (
            <>
              <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              {t("common.sending")}
            </>
          ) : (
            <>
              {t("form.send")}
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FloatingField({
  label,
  htmlFor,
  icon: Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm text-muted-foreground pl-1" style={{ fontWeight: 500 }}>
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        {children}
      </div>
    </div>
  );
}
