import { Facebook, Instagram, Mail } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-night text-cream" style={{ color: "var(--cream)" }}>
      <div className="overflow-hidden border-y border-white/10 py-6">
        <div className="marquee flex w-max whitespace-nowrap font-display text-3xl md:text-4xl text-white/70">
          {Array.from({ length: 2 }).map((_, copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {[
                "Hecho a Mano",
                "Food Made From the Heart",
                "Rosedale, MD",
                "Tacos · Tortas · Pambazo",
                "Catering",
              ].map((label) => (
                <li key={label} className="flex items-center">
                  <span className="px-6">{label}</span>
                  <span aria-hidden>·</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl">{RESTAURANT.name}</div>
          <p className="mt-3 text-sm text-white/70 max-w-sm">
            Authentic, family-owned Mexican kitchen in Rosedale, MD. Food made from the heart since day one.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex max-w-sm rounded-full glass-dark p-1.5"
          >
            <input
              type="email"
              placeholder="Newsletter, fiestas & specials"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/50"
            />
            <button className="rounded-full bg-gradient-fire px-4 py-2 text-sm font-medium">
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Visit</div>
          <div className="mt-3 text-white/80">{RESTAURANT.address}</div>
          <a href={RESTAURANT.phoneHref} className="mt-2 block text-white">{RESTAURANT.phone}</a>
          <div className="mt-2 text-white/70">{RESTAURANT.hours}</div>
        </div>

        <div className="text-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Follow</div>
          <div className="mt-3 flex gap-2">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-white/10 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-white/5 hover:bg-white/10 transition" aria-hidden />
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">Instagram feed coming soon</p>
        </div>
      </div>

      <div className="flex justify-center pt-6 pb-2">
        <img
          src={logo}
          alt={`${RESTAURANT.name} logo`}
          className="h-48 md:h-64 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
        />
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Fiesta Mexicana, All Rights Reserved. Authentic Mexican food in Rosedale, MD.
      </div>
    </footer>
  );
}
