import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Globe, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { Logo } from "./logo";
import { useI18n } from "../i18n";

const links = [
  { to: "/a-propos", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/formations", key: "nav.formations" },
  // { to: "/projets", key: "nav.projects" },  // temporairement désactivé
  { to: "/equipe", key: "nav.join" },
] as const;

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  const flagIcon = lang === "fr" ? (
    <svg viewBox="0 0 36 36" className="size-4" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
      <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z" />
      <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z" />
      <path fill="#EEE" d="M12 5h12v26H12z" />
    </svg>
  ) : (
    <svg viewBox="0 0 36 36" className="size-4" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
      <path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z" />
      <path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z" />
      <path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z" />
      <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
    </svg>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border ${
        scrolled ? "bg-[#fefefe]" : "bg-[#fefefe]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3.5 py-2 rounded-md text-sm ${
                isActive(l.to)
                  ? "text-primary font-medium"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="hidden sm:flex items-center gap-1.5 px-3 h-9 rounded-full border border-border bg-white text-sm cursor-pointer"
            style={{ fontFamily: "var(--font-sans)" }}
            aria-label="Switch language"
          >
            {flagIcon}
            {lang.toUpperCase()}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 h-9 text-sm text-white"
            style={{ background: "var(--primary)", fontWeight: 600 }}
          >
            {t("cta.contact")} <ArrowRight className="size-4" />
          </Link>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden size-9 rounded-lg border border-border flex items-center justify-center bg-white"
                aria-label="Menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mb-8">
                <Logo />
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 rounded-lg ${
                      isActive(l.to)
                        ? "text-primary bg-primary/5 font-medium"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {t(l.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={toggle}
                  className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border text-sm bg-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {flagIcon}
                  {lang === "fr" ? "Français" : "English"}
                </button>
                <Link
                  to="/contact"
                  className="flex items-center justify-center rounded-full h-10 text-sm text-white"
                  style={{ background: "var(--primary)", fontWeight: 600 }}
                  onClick={() => setOpen(false)}
                >
                  {t("cta.contact")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
