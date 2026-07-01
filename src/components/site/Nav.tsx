import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";
import { useLang } from "@/context/LangContext";

const leftLinks = [
  { href: "#about", id: "about", en: "About", es: "Nosotros" },
  { href: "#menu", id: "menu", en: "Menu", es: "Menú" },
];

const rightLinks = [
  { href: "#gallery", id: "gallery", en: "Gallery", es: "Galería" },
  { href: "#catering", id: "catering", en: "Catering", es: "Catering" },
  { href: "#contact", id: "contact", en: "Visit", es: "Visítanos" },
];

const allLinks = [...leftLinks, ...rightLinks];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = allLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id: string) =>
    `relative text-sm transition-all duration-200 ${
      active === id ? "opacity-100 text-[var(--gold)]" : "opacity-70 hover:opacity-100"
    } after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[var(--gold)] after:transition-all after:duration-300 ${
      active === id ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-16 pb-2">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-3 text-cream shadow-soft transition-all duration-500 ${
            scrolled ? "glass-dark" : "bg-black/20 backdrop-blur-sm border border-white/10"
          }`}
          style={{ color: "var(--cream)" }}
        >
          {/* Left links */}
          <nav className="hidden md:flex flex-1 items-center justify-evenly pr-24">
            {leftLinks.map((l) => (
              <a key={l.href} href={l.href} className={linkClass(l.id)}>
                {lang === "en" ? l.en : l.es}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <a
            href="#top"
            aria-label={RESTAURANT.name}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shrink-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
          >
            <img
              src={logo}
              alt={`${RESTAURANT.name} logo`}
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-28 md:h-36" : "h-36 md:h-48"
              }`}
            />
          </a>

          {/* Right links */}
          <nav className="hidden md:flex flex-1 items-center justify-evenly pl-24">
            {rightLinks.map((l) => (
              <a key={l.href} href={l.href} className={linkClass(l.id)}>
                {lang === "en" ? l.en : l.es}
              </a>
            ))}
          </nav>

          {/* Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Language slider */}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="relative flex items-center gap-0.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm p-0.5 text-[10px] font-semibold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              <span className={`relative z-10 px-2.5 py-1 rounded-full transition-all duration-300 ${lang === "en" ? "text-[var(--charcoal)]" : "text-white/60"}`}>
                EN
              </span>
              <span className={`relative z-10 px-2.5 py-1 rounded-full transition-all duration-300 ${lang === "es" ? "text-[var(--charcoal)]" : "text-white/60"}`}>
                ES
              </span>
              {/* Sliding pill */}
              <span
                className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-fire shadow-glow transition-all duration-300"
                style={{ left: lang === "en" ? "2px" : "calc(50%)" }}
              />
            </button>

            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-fire px-4 py-2 text-xs font-medium text-cream shadow-glow hover:scale-[1.04] transition"
              style={{ color: "var(--cream)" }}
            >
              <Phone className="h-3.5 w-3.5" /> {lang === "en" ? "Order Now" : "Ordenar"}
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-dark p-4 text-cream animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1">
              {allLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 hover:bg-white/10 transition ${active === l.id ? "text-[var(--gold)] bg-white/5" : ""}`}
                >
                  {lang === "en" ? l.en : l.es}
                </a>
              ))}
              {/* Mobile lang toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"
              >
                {lang === "en" ? "🇲🇽 Switch to Español" : "🇺🇸 Switch to English"}
              </button>
              <a
                href={RESTAURANT.phoneHref}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-4 py-2 text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> {lang === "en" ? `Call ${RESTAURANT.phone}` : `Llamar ${RESTAURANT.phone}`}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
