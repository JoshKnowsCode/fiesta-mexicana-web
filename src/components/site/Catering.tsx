import { useState } from "react";
import { PartyPopper, Users, Utensils, Check } from "lucide-react";
import catering from "@/assets/catering.jpg";
import { Reveal } from "./Reveal";
import { RESTAURANT } from "@/data/menu";
import { useLang } from "@/context/LangContext";

const T = {
  en: {
    tag: "Catering",
    h2a: "Bring the fiesta",
    h2b: "to your event",
    body: "Family meals, party trays, quinceañeras, weddings, office lunches we cater across Baltimore County with authentic Mexican menus, including full trays of flan, tres leches, gelatinas and buñuelos.",
    items: ["Family-style trays", "Custom menus", "Events of any size", "Authentic recipes"],
    namePh: "Your name", emailPh: "Email", phonePh: "Phone", datePh: "Date", guestPh: "Guest count", msgPh: "Tell us about your event...",
    submit: "Request Catering Quote",
    thanks: "¡Gracias! We'll be in touch soon.",
    call: "Or call us right now:",
  },
  es: {
    tag: "Catering",
    h2a: "Lleva la fiesta",
    h2b: "a tu evento",
    body: "Comidas familiares, charolas para fiestas, quinceañeras, bodas, almuerzos de oficina... Servimos en todo el Condado de Baltimore con menús auténticos, incluyendo charolas de flan, tres leches, gelatinas y buñuelos.",
    items: ["Charolas familiares", "Menús personalizados", "Eventos de cualquier tamaño", "Recetas auténticas"],
    namePh: "Tu nombre", emailPh: "Correo electrónico", phonePh: "Teléfono", datePh: "Fecha", guestPh: "Número de invitados", msgPh: "Cuéntanos sobre tu evento...",
    submit: "Solicitar Cotización",
    thanks: "¡Gracias! Nos pondremos en contacto pronto.",
    call: "O llámanos ahora:",
  },
};

export function Catering() {
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="catering" className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-fire opacity-20 blur-2xl" />
            <img src={catering} alt="Mexican catering spread for events" loading="lazy" width={1600} height={1024} className="relative rounded-[2rem] shadow-soft object-cover w-full h-[520px]" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-sm border-l-2 border-[var(--chili)] bg-[var(--chili)]/8 pl-3 pr-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--chili)] font-bold">
              {t.tag}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold leading-tight">
              {t.h2a} <span className="text-gradient-fire">{t.h2b}</span>
            </h2>
          </Reveal>
          <Reveal delay={140}><p className="mt-5 text-muted-foreground text-lg">{t.body}</p></Reveal>

          <Reveal delay={200}>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
              {([Users, Utensils, PartyPopper, Check] as const).map((Icon, i) => (
                <li key={i} className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2">
                  <Icon className="h-4 w-4 text-[var(--chili)]" /> {t.items[i]}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 rounded-3xl border bg-card p-5 sm:p-6 shadow-soft">
              {sent ? (
                <div className="py-8 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-fire text-cream" style={{ color: "var(--cream)" }}><Check /></div>
                  <p className="mt-3 font-display text-xl">{t.thanks}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.call} <a href={RESTAURANT.phoneHref} className="text-[var(--chili)] underline">{RESTAURANT.phone}</a></p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required placeholder={t.namePh} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required type="email" placeholder={t.emailPh} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required placeholder={t.phonePh} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input required type="date" className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)]" />
                  <input placeholder={t.guestPh} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)] sm:col-span-2" />
                  <textarea placeholder={t.msgPh} rows={3} className="rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--chili)] sm:col-span-2" />
                  <button type="submit" className="sm:col-span-2 inline-flex justify-center items-center gap-2 rounded-full bg-gradient-fire px-6 py-3.5 font-medium text-cream shadow-glow hover:scale-[1.02] active:scale-95 transition" style={{ color: "var(--cream)" }}>{t.submit}</button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
