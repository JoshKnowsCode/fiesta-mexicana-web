import { ArrowRight, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-feast.jpg";
import { RESTAURANT } from "@/data/menu";

export function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, oklch(0.62 0.16 45 / 0.6), transparent), radial-gradient(40% 40% at 80% 70%, oklch(0.52 0.21 27 / 0.55), transparent)",
          }}
        />
      </div>


      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-32 pb-20 text-cream" style={{ color: "var(--cream)" }}>
        <div className="max-w-3xl">



          <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95]">
            Authentic Mexican Food{" "}
            <span className="text-gradient-fire">Made From the Heart</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/85">
            Family recipes, handmade tortillas, and slow-cooked flavor, the way{" "}
            <em>abuela</em> intended. Dine in, carry out, or let us cater your next fiesta.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-6 py-3.5 font-medium shadow-glow hover:scale-[1.03] active:scale-95 transition"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--charcoal,#1a1410)] px-6 py-3.5 font-medium hover:scale-[1.03] active:scale-95 transition"
            >
              <Phone className="h-4 w-4" /> Order Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 font-medium hover:bg-white/10 transition"
            >
              <MapPin className="h-4 w-4" /> Visit Us
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Open today", v: "11am – 9pm" },
            { k: "Family-owned", v: "Authentic recipes" },
            { k: "Handmade", v: "Fresh tortillas daily" },
            { k: "Catering", v: "Parties & events" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl glass-dark px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">{s.k}</div>
              <div className="mt-1 font-display text-lg">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
