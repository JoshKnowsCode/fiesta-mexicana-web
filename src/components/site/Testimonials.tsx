import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Maria G.",
    place: "Rosedale, MD",
    text: "The pambazo is unreal—like something I'd eat at a market in Mexico City. Federico and the family treat you like familia.",
    highlight: "Like something from Mexico City",
  },
  {
    name: "James K.",
    place: "Baltimore County",
    text: "Best Mexican food in the area, hands down. The tortillas are made by hand and you can taste it. The chilaquiles? Don't sleep on them.",
    highlight: "Best Mexican food in the area",
  },
  {
    name: "Patricia R.",
    place: "Essex, MD",
    text: "I order the Paquete Llenes whenever family visits. It's a feast and everyone leaves happy. Authentic, generous, and delicious.",
    highlight: "Everyone leaves happy",
  },
  {
    name: "Daniel V.",
    place: "Dundalk",
    text: "Catered our daughter's quinceañera and absolutely nailed it. Real moles, real chorizo, real care. Could not have asked for better.",
    highlight: "Real moles, real chorizo, real care",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-gradient-night relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 80%, oklch(0.52 0.21 27 / 0.5), transparent)",
        }}
      />
      <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">
              What guests say
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold text-cream" style={{ color: "var(--cream)" }}>
              The neighborhood<br />
              <span className="text-gradient-fire">keeps coming back</span>
            </h2>
          </Reveal>
        </div>

        {/* 2x2 card grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col h-full group hover:border-white/20 hover:bg-white/8 transition-all duration-300">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <Stars />
                  <Quote className="h-8 w-8 text-[var(--chili)]/40 shrink-0" />
                </div>

                {/* Pull quote */}
                <p className="text-[var(--gold)] font-display text-sm uppercase tracking-[0.15em] mb-3" style={{ color: "var(--gold)" }}>
                  "{t.highlight}"
                </p>

                {/* Full text */}
                <p className="text-white/75 leading-relaxed text-sm flex-1">
                  {t.text}
                </p>

                {/* Attribution */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-fire flex items-center justify-center text-cream text-sm font-display font-bold shrink-0" style={{ color: "var(--cream)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.place}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={320}>
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              Join hundreds of happy guests in Rosedale and Baltimore County.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-3.5 text-sm font-medium text-cream shadow-glow hover:scale-[1.03] transition"
              style={{ color: "var(--cream)" }}
            >
              Come visit us today
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
