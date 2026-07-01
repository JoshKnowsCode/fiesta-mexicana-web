import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { RESTAURANT } from "@/data/menu";
import { useLang } from "@/context/LangContext";

const T = {
  en: { tag: "Visit Us", h2a: "Come visit us", h2b: "today", address: "Address", callLabel: "Call to order", hoursLabel: "Hours", directions: "Get Directions", call: "Call Now", disclaimer: "We are not affiliated with any food delivery services." },
  es: { tag: "Visítanos", h2a: "Ven a visitarnos", h2b: "hoy", address: "Dirección", callLabel: "Llama para ordenar", hoursLabel: "Horario", directions: "Cómo llegar", call: "Llamar ahora", disclaimer: "No estamos afiliados con ningún servicio de entrega a domicilio." },
};

export function Contact() {
  const { lang } = useLang();
  const t = T[lang];
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT.mapsQuery)}`;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(RESTAURANT.mapsQuery)}&output=embed`;

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[oklch(0.96_0.015_70)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--chili)] font-semibold before:content-[''] before:block before:w-6 before:h-px before:bg-gradient-fire">{t.tag}</div></Reveal>
          <Reveal delay={80}><h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">{t.h2a} <span className="text-gradient-fire">{t.h2b}</span></h2></Reveal>
        </div>
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border bg-card p-6 sm:p-8 h-full shadow-soft">
              <h3 className="font-display text-2xl">{RESTAURANT.name}</h3>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-[var(--chili)] mt-0.5" />
                  <div><div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.address}</div><div className="mt-1">{RESTAURANT.address}</div></div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-[var(--chili)] mt-0.5" />
                  <div><div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.callLabel}</div><a href={RESTAURANT.phoneHref} className="mt-1 block font-display text-xl text-[var(--chili)]">{RESTAURANT.phone}</a></div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-[var(--chili)] mt-0.5" />
                  <div><div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.hoursLabel}</div><div className="mt-1">{RESTAURANT.hours}</div></div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-5 py-3 text-sm font-medium text-cream shadow-glow hover:scale-[1.03] transition" style={{ color: "var(--cream)" }}>
                  <Navigation className="h-4 w-4" /> {t.directions}
                </a>
                <a href={RESTAURANT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-5 py-3 text-sm font-medium hover:scale-[1.03] transition">
                  <Phone className="h-4 w-4" /> {t.call}
                </a>
              </div>
              <p className="mt-6 text-xs text-muted-foreground italic">{t.disclaimer}</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={120}>
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-soft border">
              <iframe title="Fiesta Mexicana on Google Maps" src={embed} loading="lazy" className="absolute inset-0 h-full w-full" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
