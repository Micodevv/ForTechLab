import { Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../i18n";
import { testimonials } from "../data";

export function TestimonialsSection() {
  const { tr } = useI18n();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Témoignages", en: "Testimonials" })}
          title={tr({ fr: "Ils nous font confiance", en: "They trust us" })}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-5 rounded-[1.5rem] bg-card border border-border p-7">
              <Quote className="size-8 text-primary/30" />
              <blockquote className="text-[1.02rem] leading-relaxed text-foreground/90 flex-1">
                "{tr(t.quote)}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="size-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <p style={{ fontWeight: 600 }}>{t.name}</p>
                  <p className="text-sm text-muted-foreground">{tr(t.role)}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
