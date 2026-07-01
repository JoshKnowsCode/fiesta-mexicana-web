import { ArrowRight, MapPin, Phone, ChevronDown } from "lucide-react";
import hero from "@/assets/hero-feast.jpg";
import { RESTAURANT } from "@/data/menu";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-night">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Authentic Mexican feast at Fiesta Mexicana"
          width={1920}
          height={1080}
          className="h-full w-full object-cover ken-burns"
        />
        {/* Multi-layer dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/90" />
        {/* Fire color wash */}
        <div
          className="absolute inset-0 opacity-45 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, oklch(0.62 0.16 45 / 0.6), transparent), radial-gradient(40% 40% at 80% 70%, oklch(0.52 0.21 27 / 0.55), transparent)",
          }}
        />
        {/* Grain overlay */}
        <div className="grain absolute inset-0 opacity-30 mix-blend-overlay" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-32 pb-24 text-cream" style={{ color: "var(--cream)" }}>
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Family-Owned · Rosedale, MD
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.93] tracking-tight">
            Authentic Mexican Food{" "}
            <span className="text-gradient-fire">Made From the Heart</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
            Family recipes, handmade tortillas, and slow-cooked flavor—the way{" "}
            <em>abuela</em> intended. Dine in, carry out, or let us cater your next fiesta.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 font-medium shadow-glow hover:scale-[1.03] active:scale-95 transition text-cream"
              style={{ color: "var(--cream)" }}
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--charcoal,#1a1410)] px-7 py-4 font-medium hover:scale-[1.03] active:scale-95 transition"
            >
              <Phone className="h-4 w-4" /> Order Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-4 font-medium hover:bg-white/10 transition"
            >
              <MapPin className="h-4 w-4" /> Visit Us
            </a>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { k: "Open Today", v: "11am – 9pm" },
            { k: "Family-Owned", v: "20+ years of recipes" },
            { k: "Handmade", v: "Fresh tortillas daily" },
            { k: "Catering", v: "Parties & events" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl glass-dark px-4 py-3.5 border border-white/10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/55">{s.k}</div>
              <div className="mt-1 font-display text-lg text-white">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
