import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#catering", label: "Catering" },
  { href: "#contact", label: "Visit Us" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-night text-cream relative overflow-hidden" style={{ color: "var(--cream)" }}>
      <div className="grain absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Scrolling marquee */}
      <div className="overflow-hidden border-y border-white/10 py-5 relative">
        <div className="marquee flex w-max whitespace-nowrap font-display text-3xl md:text-4xl text-white/60">
          {Array.from({ length: 2 }).map((_, copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {[
                "Hecho a Mano",
                "Food Made From the Heart",
                "Rosedale, MD",
                "Tacos · Tortas · Pambazo",
                "Catering · Events",
                "Familia desde siempre",
              ].map((label) => (
                <li key={label} className="flex items-center">
                  <span className="px-8">{label}</span>
                  <span aria-hidden className="text-[var(--gold)]/60">·</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="md:col-span-1">
          <img
            src={logo}
            alt={`${RESTAURANT.name} logo`}
            className="h-36 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]"
          />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[18rem]">
            Authentic, family-owned Mexican kitchen in Rosedale, MD. Food made from the heart since day one.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Mail, label: "Email", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/8 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation col */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-5">Navigate</div>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact col */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-5">Find Us</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" />
              <span className="text-white/70 leading-snug">{RESTAURANT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" />
              <a href={RESTAURANT.phoneHref} className="text-white hover:text-[var(--gold)] transition">
                {RESTAURANT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 text-[var(--chili)] mt-0.5 shrink-0" />
              <span className="text-white/70">{RESTAURANT.hours}</span>
            </li>
          </ul>
          <p className="mt-5 text-xs text-white/40 italic">
            We are not affiliated with any food delivery services.
          </p>
        </div>

        {/* Newsletter col */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45 mb-5">Stay in the loop</div>
          <p className="text-sm text-white/60 mb-4 leading-relaxed">
            Get notified about specials, seasonal dishes, and upcoming events.
          </p>
          <div className="flex rounded-full glass-dark p-1.5 max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/40"
            />
            <button className="rounded-full bg-gradient-fire px-4 py-2 text-sm font-medium text-cream hover:scale-[1.03] transition" style={{ color: "var(--cream)" }}>
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-5 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Fiesta Mexicana. All rights reserved.</span>
          <span>Authentic Mexican food in Rosedale, MD</span>
        </div>
      </div>
    </footer>
  );
}
