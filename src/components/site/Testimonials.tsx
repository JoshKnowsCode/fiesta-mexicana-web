import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Maria G.",
    place: "Rosedale, MD",
    text: "The pambazo is unreal, like something I'd eat at a market in Mexico City. Federico and the family treat you like familia.",
  },
  {
    name: "James K.",
    place: "Baltimore County",
    text: "Best Mexican food in the area, hands down. The tortillas are made by hand and you can taste it. The chilaquiles? Don't sleep on them.",
  },
  {
    name: "Patricia R.",
    place: "Essex, MD",
    text: "I order the Paquete Llenes whenever family visits. It's a feast and everyone leaves happy. Authentic, generous, and delicious.",
  },
  {
    name: "Daniel V.",
    place: "Dundalk",
    text: "Catered our daughter's quinceañera and absolutely nailed it. Real moles, real chorizo, real care.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--chili)]/10 text-[var(--chili)] px-3 py-1 text-xs uppercase tracking-[0.25em]">
            What guests say
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Quote className="mx-auto mt-8 h-10 w-10 text-[var(--chili)]/30" />
        </Reveal>
        <div className="relative mt-6 min-h-[180px]">
          {TESTIMONIALS.map((q, idx) => (
            <blockquote
              key={q.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-display text-2xl md:text-3xl leading-relaxed">"{q.text}"</p>
              <footer className="mt-6 flex items-center justify-center gap-3 text-sm">
                <div className="flex">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />)}</div>
                <span className="text-muted-foreground">, {q.name}, {q.place}</span>
              </footer>
            </blockquote>
          ))}
          {/* invisible spacer so layout sizes */}
          <div className="opacity-0 pointer-events-none">
            <p className="font-display text-2xl md:text-3xl leading-relaxed">"{t.text}"</p>
            <div className="mt-6 h-6" />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-1.5">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[var(--chili)]" : "w-2 bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
