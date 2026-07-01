import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";
import { useLang } from "@/context/LangContext";

const NAV_LINKS = {
  en: [{ href: "#about", label: "About Us" }, { href: "#menu", label: "Menu" }, { href: "#gallery", label: "Gallery" }, { href: "#catering", label: "Catering" }, { href: "#contact", label: "Visit Us" }],
  es: [{ href: "#about", label: "Nosotros" }, { href: "#menu", label: "Menú" }, { href: "#gallery", label: "Galería" }, { href: "#catering", label: "Catering" }, { href: "#contact", label: "Visítanos" }],
};

const T = {
  en: { tagline: "Authentic, family-owned Mexican kitchen in Rosedale, MD. Food made from the heart since day one.", navigate: "Navigate", findUs: "Find Us", loop: "Stay in the loop", loopSub: "Get notified about specials, seasonal dishes, and upcoming events.", emailPh: "Your email", join: "Join", rights: "All rights reserved.", authentic: "Authentic Mexican food in Rosedale, MD", disclaimer: "We are not affiliated with any food delivery services." },
  es: { tagline: "Cocina mexicana familiar y auténtica en Rosedale, MD. Comida hecha con el corazón desde el primer día.", navigate: "Navegar", findUs: "Encuéntranos", loop: "Mantente al día", loopSub: "Recibe avisos sobre especiales, platillos de temporada y eventos.", emailPh: "Tu correo", join: "Suscribirse", rights: "Todos los derechos reservados.", authentic: "Comida mexicana auténtica en Rosedale, MD", disclaimer: "No estamos afiliados con ningún servicio de entrega." },
};

const MARQUEE = {
  en: ["Hecho a Mano", "Food Made From the Heart", "Rosedale, MD", "Tacos · Tortas · Pambazo", "Catering · Events", "Familia desde siempre"],
  es: ["Hecho a Mano", "Comida Hecha con el Corazón", "Rosedale, MD", "Tacos · Tortas · Pambazo", "Catering · Eventos", "Familia desde siempre"],
};

export function Footer() {
  const { lang } = useLang();
  const t = T[lang];
  const links = NAV_LINKS[lang];
  const marquee = MARQUEE[lang];

  return (
    <footer className="bg-gradient-night text-cream relative overflow-hidden" style={{ color: "var(--cream)" }}>
      <div className="grain absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="overflow-hidden border-y border-white/10 py-5 relative">
        <div className="marquee flex w-max whitespace-nowrap font-display text-3xl md:text-4xl text-white/60">
          {Array.from({ length: 2 }).map((_, copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {marquee.map((label) => (
                <li key={label} className="flex items-center">
                  <span className="px-8">{label}</span>
                  <span aria-hidden className="text-[var(--gold)]/60">·</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt={`${RESTAURANT.name} logo`} className="h-36 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]" />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[18rem]">{t.tagline}</p>
          <div className="mt-5 flex gap-2">
            {[{ Icon: Instagram, label: "Instagram" }, { Icon: Facebook, label: "Facebook" }, { Icon: Mail, label: "Email" }].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/8 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-5">{t.navigate}</div>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-white/70 hover:text-white transition">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-5">{t.findUs}</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" /><span className="text-white/70 leading-snug">{RESTAURANT.address}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" /><a href={RESTAURANT.phoneHref} className="text-white hover:text-[var(--gold)] transition">{RESTAURANT.phone}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" /><span className="text-white/70">{RESTAURANT.hours}</span></li>
          </ul>
          <p className="mt-5 text-xs text-white/40 italic">{t.disclaimer}</p>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Fiesta Mexicana. {t.rights}</span>
          <span>{t.authentic}</span>
        </div>
      </div>
    </footer>
  );
}
