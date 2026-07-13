import { Link } from "react-router";
import logoSrc from "../../imports/Logo-Fortechlab.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center shrink-0" aria-label="ForTechLab — Accueil">
      <img
        src={logoSrc}
        alt="ForTechLab"
        className="h-12 w-auto object-contain"
        style={{ filter: light ? "brightness(0) invert(1)" : undefined }}
      />
    </Link>
  );
}
