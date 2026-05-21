import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import kitchen from "@/assets/about-kitchen.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-20 blur-2xl" />
            <img
              src={kitchen}
              alt="Handmade tortillas pressed in our family kitchen"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-[520px]"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl glass-dark p-5 text-cream w-56" style={{ color: "var(--cream)" }}>
              <div className="text-3xl font-display">
                <Counter to={20} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] mt-1 text-white/70">Years of recipes</div>
            </div>
          </div>
        </Reveal>

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
              grew up with, handmade tortillas on the comal, slow-simmered moles when they
              arrive from Mexico City, and chorizo we make ourselves. Nothing fancy, nothing
              shortcut. Just real Mexican food, the way it has always been made: from the heart.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "Handmade", v: "Tortillas, sopes & quesadillas" },
              { k: "Fresh", v: "Salsas made to order" },
              { k: "Authentic", v: "Family recipes" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={200 + i * 80}>
                <div className="rounded-2xl border bg-card p-4 hover-lift">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--chili)]">{s.k}</div>
                  <div className="mt-2 font-display text-lg">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <div>
                <div className="text-3xl font-display"><Counter to={50} suffix="+" /></div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Menu items</div>
              </div>
              <div>
                <div className="text-3xl font-display"><Counter to={100} suffix="%" /></div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Family recipes</div>
              </div>
              <div>
                <div className="text-3xl font-display"><Counter to={5} suffix="★" /></div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Neighborhood favorite</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
