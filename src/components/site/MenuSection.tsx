import { useMemo, useState } from "react";
import { ChevronDown, Flame } from "lucide-react";
import { MENU, type MenuItem } from "@/data/menu";
import { Reveal } from "./Reveal";
import { useLang } from "@/context/LangContext";

const T = {
  en: {
    tag: "Menu & Prices",
    h2a: "Every dish,",
    h2b: "made to order",
    sub: "Filter by category, tap a dish to see ingredients and options.",
    popular: "Popular",
    mostLoved: "Most Loved",
    guestFav: "Guest favorites",
    seeOptions: "See options",
    less: "Less",
    all: "All",
  },
  es: {
    tag: "Menú y Precios",
    h2a: "Cada platillo,",
    h2b: "hecho al momento",
    sub: "Filtra por categoría, toca un platillo para ver ingredientes y opciones.",
    popular: "Popular",
    mostLoved: "Los Más Pedidos",
    guestFav: "Favoritos de nuestros clientes",
    seeOptions: "Ver opciones",
    less: "Menos",
    all: "Todo",
  },
};

function PopularBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-fire px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cream" style={{ color: "var(--cream)" }}>
      <Flame className="h-2.5 w-2.5" /> {label}
    </span>
  );
}

function Card({ item, featured = false, t }: { item: MenuItem; featured?: boolean; t: typeof T["en"] }) {
  const [open, setOpen] = useState(false);
  const hasMore = !!(item.description || item.options?.length || item.note);
  return (
    <div className={`group relative rounded-2xl border bg-card overflow-hidden hover-lift ${featured ? "p-6 ring-2 ring-[var(--chili)]/20" : "p-5"}`}>
      {featured && <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-fire" />}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {item.popular && <div className="mb-1"><PopularBadge label={t.popular} /></div>}
          <h3 className={`font-display font-semibold leading-snug ${featured ? "text-2xl" : "text-xl"}`}>{item.name}</h3>
        </div>
        <span className={`font-display text-[var(--chili)] tabular-nums shrink-0 ${featured ? "text-3xl" : "text-2xl"}`}>${item.price}</span>
      </div>
      {item.description && (
        <p className={`mt-2 text-muted-foreground leading-relaxed line-clamp-2 ${featured ? "text-base" : "text-sm"}`}>{item.description}</p>
      )}
      {hasMore && (
        <button onClick={() => setOpen((v) => !v)} className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-[var(--chili)] transition">
          {open ? t.less : t.seeOptions}
          <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      )}
      <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          {item.options && item.options.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {item.options.map((o) => <li key={o} className="rounded-full bg-muted px-2.5 py-1 text-xs">{o}</li>)}
            </ul>
          )}
          {item.note && <p className="mt-3 text-xs text-[var(--chili)]/80 italic">{item.note}</p>}
        </div>
      </div>
    </div>
  );
}

export function MenuSection() {
  const { lang } = useLang();
  const t = T[lang];
  const [active, setActive] = useState<string>("all");

  const cats = useMemo(() => [{ id: "all", title: t.all }, ...MENU.map((c) => ({ id: c.id, title: c.title }))], [t.all]);
  const popularItems = useMemo(() => MENU.flatMap((c) => c.items).filter((i) => i.popular).slice(0, 6), []);
  const visible = active === "all" ? MENU : MENU.filter((c) => c.id === active);

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-[oklch(0.96_0.015_70)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><div className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[var(--chili)] font-bold bg-gradient-to-r from-[var(--chili)]/12 to-transparent rounded-full border border-[var(--chili)]/25">{t.tag}</div></Reveal>
          <Reveal delay={80}><h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">{t.h2a} <span className="text-gradient-fire">{t.h2b}</span></h2></Reveal>
          <Reveal delay={140}><p className="mt-5 text-muted-foreground">{t.sub}</p></Reveal>
        </div>

        {active === "all" && (
          <div className="mt-16">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-[var(--chili)]" />
                  <h3 className="font-display text-2xl md:text-3xl">{t.mostLoved}</h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--chili)]/30 to-transparent" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.guestFav}</span>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularItems.map((item, i) => (
                <Reveal key={item.name} delay={i * 50}><Card item={item} featured t={t} /></Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal delay={200}>
          <div className="mt-14 sticky top-20 z-30 flex justify-center">
            <div className="flex flex-wrap gap-1 rounded-full border bg-card/90 backdrop-blur p-1 shadow-soft">
              {cats.map((c) => (
                <button key={c.id} onClick={() => setActive(c.id)}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full transition ${active === c.id ? "bg-gradient-fire text-cream shadow-glow" : "hover:bg-muted"}`}
                  style={active === c.id ? { color: "var(--cream)" } : {}}
                >{c.title}</button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {visible.map((cat) => (
            <div key={cat.id}>
              <Reveal>
                <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{cat.title}</h3>
                    {cat.blurb && <p className="text-muted-foreground mt-1">{cat.blurb}</p>}
                  </div>
                  <div className="h-px flex-1 ml-6 bg-gradient-to-r from-border to-transparent" />
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 40} animation="fade-up"><Card item={item} t={t} /></Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
