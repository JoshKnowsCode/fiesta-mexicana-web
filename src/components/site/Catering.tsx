import { useState } from "react";
import { PartyPopper, Users, Utensils, Check } from "lucide-react";
import catering from "@/assets/catering.jpg";
import { Reveal } from "./Reveal";
import { RESTAURANT } from "@/data/menu";

export function Catering() {
  const [sent, setSent] = useState(false);

  return (
    <section id="catering" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-20 blur-2xl" />
            <img
              src={catering}
              alt="Mexican catering spread for events"
              loading="lazy"
              width={1600}
              height={1024}
              className="relative rounded-[2rem] shadow-soft object-cover w-full h-[520px]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--chili)]/10 text-[var(--chili)] px-3 py-1 text-xs uppercase tracking-[0.25em]">
              <PartyPopper className="h-3.5 w-3.5" /> Catering
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold leading-tight">
              Bring the fiesta <span className="text-gradient-fire">to your event</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-muted-foreground text-lg">
              Family meals, party trays, quinceañeras, weddings, office lunches, we cater across
              Baltimore County with authentic Mexican menus, including full trays of flan, tres
              leches, gelatinas and buñuelos.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { icon: Users, t: "Family-style trays" },
                { icon: Utensils, t: "Custom menus" },
                { icon: PartyPopper, t: "Events of any size" },
                { icon: Check, t: "Authentic recipes" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2">
                  <Icon className="h-4 w-4 text-[var(--chili)]" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 rounded-3xl border bg-card p-5 sm:p-6 shadow-soft"
            >
              {sent ? (
                <div className="py-8 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-fire text-cream" style={{ color: "var(--cream)" }}>
                    <Check />
                  </div>
                  <p className="mt-3 font-display text-xl">¡Gracias! We'll be in touch soon.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Or call us right now: <a href={RESTAURANT.phoneHref} className="text-[var(--chili)] underline">{RESTAURANT.phone}</a>
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required placeholder="Your name" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required type="email" placeholder="Email" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required placeholder="Phone" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required type="date" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input placeholder="Guest count" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)] sm:col-span-2" />
                  <textarea placeholder="Tell us about your event…" rows={3} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)] sm:col-span-2" />
                  <button type="submit" className="sm:col-span-2 inline-flex justify-center items-center gap-2 rounded-full bg-gradient-fire px-6 py-3.5 font-medium text-cream shadow-glow hover:scale-[1.02] active:scale-95 transition" style={{ color: "var(--cream)" }}>
                    Request Catering Quote
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
