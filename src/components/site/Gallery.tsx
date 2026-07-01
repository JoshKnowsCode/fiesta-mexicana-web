import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import nachos from "@/assets/dish-nachos.jpg";
import queso from "@/assets/dish-queso.jpg";
import chilaquiles from "@/assets/dish-chilaquiles.jpg";
import carne from "@/assets/dish-carne.jpg";
import huevos from "@/assets/dish-huevos.jpg";
import paquete from "@/assets/dish-paquete.jpg";
import hero from "@/assets/hero-feast.jpg";
import kitchen from "@/assets/about-kitchen.jpg";

const SHOTS = [
  { src: hero, span: "row-span-2 col-span-2", alt: "Mexican feast spread" },
  { src: nachos, span: "", alt: "Fiesta nachos" },
  { src: queso, span: "", alt: "Queso fundido in cast iron" },
  { src: chilaquiles, span: "", alt: "Chilaquiles verdes" },
  { src: carne, span: "row-span-2", alt: "Carne asada plate" },
  { src: huevos, span: "", alt: "Huevos rancheros" },
  { src: paquete, span: "col-span-2", alt: "Paquete sampler" },
  { src: kitchen, span: "", alt: "Family kitchen handmade tortillas" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[var(--chili)] font-bold bg-gradient-to-r from-[var(--chili)]/12 to-transparent rounded-full border border-[var(--chili)]/25">
              Gallery
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-6xl font-display font-bold">
              A taste, in <span className="text-gradient-fire">pictures</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {SHOTS.map((s, i) => (
            <Reveal key={i} delay={i * 50} className={s.span}>
              <button
                onClick={() => setLightbox(s.src)}
                className="group relative h-full w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 backdrop-blur p-4 animate-in fade-in duration-300"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full glass-dark text-cream"
            style={{ color: "var(--cream)" }}
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X />
          </button>
          <img src={lightbox} alt="Enlarged dish" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-glow" />
        </div>
      )}
    </section>
  );
}
