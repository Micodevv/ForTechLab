import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "../i18n";
import { processSteps } from "../data";

const icons = [Search, PenTool, Code2, Rocket];

export function ProcessSection() {
  const { tr } = useI18n();

  return (
    <section className="py-20 lg:py-15" style={{ background: "#f3f6f8", color: "var(--foreground)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Notre méthode", en: "Our method" })}
          title={tr({ fr: "De l'idée au lancement, en 4 étapes", en: "From idea to launch, in 4 steps" })}
          subtitle={tr({
            fr: "Un processus éprouvé, transparent et collaboratif pour livrer des produits qui marchent.",
            en: "A proven, transparent and collaborative process to ship products that work.",
          })}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(17,24,39,0.08)",
                  boxShadow: "0 1px 0 rgba(15, 23, 36, 0.02)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="grid place-items-center size-12 rounded-xl"
                    style={{ background: "rgba(18,141,183,0.08)" }}
                  >
                    <Icon className="size-6" style={{ color: "var(--primary)" }} />
                  </div>
                  <span
                    className="text-5xl leading-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "rgba(17,24,39,0.12)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-foreground" style={{ fontWeight: 700 }}>{tr(step.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#556372" }}>
                  {tr(step.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
