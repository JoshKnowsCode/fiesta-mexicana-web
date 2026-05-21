import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MENU, type MenuItem } from "@/data/menu";
import { Reveal } from "./Reveal";

function Card({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasMore = !!(item.description || item.options?.length || item.note);
  return (
    <div className="group relative rounded-2xl border bg-card p-5 hover-lift overflow-hidden">
      <div className="flex items-baseline justify-between gap-4">

        <h3 className="font-display text-xl font-semibold">{item.name}</h3>
        <span className="font-display text-2xl text-[var(--chili)] tabular-nums">${item.price}</span>
      </div>
      {hasMore && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-[var(--chili)] transition"
        >
          {open ? "Less" : "Details"}
          <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      )}
      <div
        className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {item.description && (
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          )}
          {item.options && item.options.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.options.map((o) => (
                <li key={o} className="rounded-full bg-muted px-2.5 py-1 text-xs">
                  {o}
                </li>
              ))}
            </ul>
          )}
          {item.note && <p className="mt-3 text-xs text-[var(--chili)]/80 italic">{item.note}</p>}
        </div>
      </div>
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<string>("all");
  const cats = useMemo(() => [{ id: "all", title: "All" }, ...MENU.map((c) => ({ id: c.id, title: c.title }))], []);
  const visible = active === "all" ? MENU : MENU.filter((c) => c.id === active);

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-[oklch(0.96_0.015_70)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--chili)]/10 text-[var(--chili)] px-3 py-1 text-xs uppercase tracking-[0.25em]">
              Menu & Price List
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
              Every dish, <span className="text-gradient-fire">made to order</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-muted-foreground">
              Filter by category, tap a dish to see ingredients and options.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-10 sticky top-20 z-30 flex justify-center">
            <div className="flex flex-wrap gap-1 rounded-full border bg-card/80 backdrop-blur p-1 shadow-soft">
              {cats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-full transition ${
                    active === c.id
                      ? "bg-gradient-fire text-cream shadow-glow"
                      : "hover:bg-muted"
                  }`}
                  style={active === c.id ? { color: "var(--cream)" } : {}}
                >
                  {c.title}
                </button>
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
                  <Reveal key={item.name} delay={i * 40}>
                    <Card item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
