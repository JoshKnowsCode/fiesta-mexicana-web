import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import kitchen from "@/assets/about-kitchen.jpg";
import { Heart, Leaf, Flame } from "lucide-react";

const PILLARS = [
  { Icon: Flame, k: "Handmade", v: "Tortillas, sopes & quesadillas pressed daily" },
  { Icon: Leaf, k: "Fresh", v: "Salsas and guacamole made to order" },
  { Icon: Heart, k: "Authentic", v: "Family recipes passed down for generations" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{ background: "var(--gradient-fire)", filter: "blur(80px)" }}
      />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image side */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-15 blur-2xl" />
            <img
              src={kitchen}
              alt="Handmade tortillas pressed in our family kitchen"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-[540px]"
            />
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl glass-dark p-5 text-cream border border-white/15 shadow-glow" style={{ color: "var(--cream)" }}>
              <div className="text-4xl font-display">
                <Counter to={20} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] mt-1 text-white/60">Years of recipes</div>
            </div>
            {/* Top left badge */}
            <div className="absolute -top-4 -left-4 hidden md:flex items-center gap-2 rounded-full glass-dark border border-white/15 px-4 py-2 text-cream text-sm" style={{ color: "var(--cream)" }}>
              <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
              Family-owned since day one
            </div>
          </div>
        </Reveal>

        {/* Text side */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--chili)]/10 text-[var(--chili)] px-3 py-1 text-xs uppercase tracking-[0.25em]">
              Our Story
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold leading-tight">
              A family kitchen,{" "}
              <span className="text-gradient-fire">open to yours.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Fiesta Mexicana is a family-owned restaurant in Rosedale serving the recipes we
              grew up with—handmade tortillas on the comal, slow-simmered moles when they arrive
              from Mexico City, and chorizo we make ourselves. Nothing fancy, nothing
              shortcut. Just real Mexican food, the way it has always been made: from the heart.
            </p>
          </Reveal>

          {/* Pillars */}
          <div className="mt-10 space-y-3">
            {PILLARS.map(({ Icon, k, v }, i) => (
              <Reveal key={k} delay={200 + i * 70}>
                <div className="flex items-start gap-4 rounded-2xl border bg-card px-5 py-4 hover-lift">
                  <div className="h-9 w-9 rounded-xl bg-gradient-fire flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-cream" style={{ color: "var(--cream)" }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--chili)]">{k}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{v}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats row */}
          <Reveal delay={440}>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              {[
                { n: 50, suf: "+", label: "Menu items" },
                { n: 100, suf: "%", label: "Family recipes" },
                { n: 5, suf: "★", label: "Neighborhood favorite" },
              ].map(({ n, suf, label }) => (
                <div key={label}>
                  <div className="text-3xl font-display text-[var(--chili)]">
                    <Counter to={n} suffix={suf} />
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
