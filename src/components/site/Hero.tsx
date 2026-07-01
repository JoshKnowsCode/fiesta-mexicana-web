import { ArrowRight, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-feast.jpg";
import { RESTAURANT } from "@/data/menu";
import { useLang } from "@/context/LangContext";

const T = {
  en: {
    badge: "Family-Owned · Rosedale, MD",
    h1a: "Food Made",
    h1b: "From the Heart",
    body: "Handmade tortillas, slow-cooked meats, and family recipes passed down for generations, just the way abuela made them.",
    menu: "View Menu",
    order: "Order Now",
    visit: "Visit Us",
    stats: [
      { n: "20+", label: "Years of recipes" },
      { n: "50+", label: "Menu items" },
      { n: "5★", label: "Neighborhood favorite" },
    ],
  },
  es: {
    badge: "Familiar · Rosedale, MD",
    h1a: "Comida Hecha",
    h1b: "Con el Corazón",
    body: "Tortillas hechas a mano, carnes cocinadas a fuego lento y recetas familiares de generación en generación, tal como las hacía la abuela.",
    menu: "Ver Menú",
    order: "Ordenar",
    visit: "Visítanos",
    stats: [
      { n: "20+", label: "Años de recetas" },
      { n: "50+", label: "Platillos" },
      { n: "5★", label: "Favorito del vecindario" },
    ],
  },
};

export function Hero() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-night">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Authentic Mexican feast at Fiesta Mexicana"
          width={1920}
          height={1080}
          className="h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        <div
          className="absolute inset-0 opacity-35 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(60% 50% at 25% 35%, oklch(0.62 0.16 45 / 0.7), transparent), radial-gradient(45% 45% at 75% 65%, oklch(0.52 0.21 27 / 0.5), transparent)",
          }}
        />
        <div className="grain absolute inset-0 opacity-25 mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-40 pb-32 text-cream" style={{ color: "var(--cream)" }}>
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-white/80 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse shrink-0" />
            {t.badge}
          </div>

          <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-tight">
            {t.h1a}<br />
            <span className="text-gradient-fire italic">{t.h1b}</span>
          </h1>

          <p className="mt-7 max-w-lg text-base md:text-lg text-white/75 leading-relaxed font-light">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.03] active:scale-95 transition text-cream"
              style={{ color: "var(--cream)" }}
            >
              {t.menu} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-medium hover:bg-white/18 active:scale-95 transition"
            >
              <Phone className="h-4 w-4" /> {t.order}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full text-white/70 px-5 py-3.5 text-sm hover:text-white transition"
            >
              <MapPin className="h-4 w-4" /> {t.visit}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 text-sm">
            {t.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-white">{s.n}</div>
                <div className="text-white/50 text-xs uppercase tracking-[0.18em] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] block" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,110 480,20 720,70 C960,120 1200,30 1440,80 L1440,120 L0,120 Z" fill="oklch(0.97 0.02 80)" />
        </svg>
      </div>
    </section>
  );
}
