import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "@/context/LangContext";

const TESTIMONIALS = {
  en: [
    { name: "Sergio P.", place: "Yelp Review", text: "There is no better, more authentic, more quality and love in your food Mexican restaurant in Maryland, Virginia or Delaware. This place is the real deal.", highlight: "No better Mexican in MD, VA or DE" },
    { name: "Verified Guest", place: "TripAdvisor", text: "I've been devouring their delicious food for about 13 years, since they were in a smaller location. Seriously the best Mexican food in the state. The food is made to order and you can see the women in the kitchen making it.", highlight: "Best Mexican food in the state" },
    { name: "Verified Guest", place: "Yellow Pages", text: "Absolutely the best Mexican food anywhere. It's real Mexican food, not Tex-Mex. Try it — you'll keep coming back. Wish I didn't live 3 hours away, I'd eat here daily.", highlight: "Real Mexican food, not Tex-Mex" },
    { name: "Verified Guest", place: "Restaurant Review", text: "The best Sopes I've ever had (besides my mom's). My bf said these are the best tacos he's had in 20 years. We traveled 80 miles from Virginia just for this place and it was worth every mile.", highlight: "Worth the 80-mile drive" },
  ],
  es: [
    { name: "Sergio P.", place: "Reseña Yelp", text: "No hay restaurante mexicano más auténtico, con más calidad y amor en su comida en Maryland, Virginia o Delaware. Este lugar es de verdad.", highlight: "El mejor mexicano en MD, VA y DE" },
    { name: "Cliente verificado", place: "TripAdvisor", text: "Llevo 13 años disfrutando su comida, desde que estaban en un local más pequeño. La comida es hecha al momento y se ve a las señoras cocinando en la cocina. El mejor mexicano del estado.", highlight: "El mejor mexicano del estado" },
    { name: "Cliente verificado", place: "Yellow Pages", text: "Absolutamente la mejor comida mexicana. Es comida mexicana de verdad, no Tex-Mex. Pruébalo y seguirás volviendo. Ojalá no viviera a 3 horas, comería aquí todos los días.", highlight: "Comida mexicana de verdad" },
    { name: "Cliente verificado", place: "Reseña restaurante", text: "Los mejores sopes que he probado. Mi novio dice que son los mejores tacos en 20 años. Viajamos 130 km desde Virginia solo para venir aquí y valió cada kilómetro.", highlight: "Valió cada kilómetro" },
  ],
};

const T = {
  en: { tag: "What guests say", h2a: "The neighborhood", h2b: "keeps coming back", cta: "Come visit us today" },
  es: { tag: "Lo que dicen nuestros clientes", h2a: "El vecindario", h2b: "sigue volviendo", cta: "Ven a visitarnos hoy" },
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
    </div>
  );
}

export function Testimonials() {
  const { lang } = useLang();
  const t = T[lang];
  const testimonials = TESTIMONIALS[lang];

  return (
    <section className="py-28 md:py-36 bg-gradient-night relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(60% 50% at 50% 80%, oklch(0.52 0.21 27 / 0.5), transparent)" }} />
      <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <Reveal><div className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-[var(--gold)] font-bold bg-gradient-to-r from-[var(--gold)]/15 to-transparent rounded-full border border-[var(--gold)]/30">{t.tag}</div></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-bold text-cream" style={{ color: "var(--cream)" }}>
              {t.h2a}<br /><span className="text-gradient-fire">{t.h2b}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {testimonials.map((t2, i) => (
            <Reveal key={t2.name} delay={i * 80} animation="zoom">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7 flex flex-col h-full group hover:border-white/20 hover:bg-white/8 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <Stars />
                  <Quote className="h-8 w-8 text-[var(--chili)]/40 shrink-0" />
                </div>
                <p className="text-[var(--gold)] font-display text-sm uppercase tracking-[0.15em] mb-3" style={{ color: "var(--gold)" }}>"{t2.highlight}"</p>
                <p className="text-white/75 leading-relaxed text-sm flex-1">{t2.text}</p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-fire flex items-center justify-center text-cream text-sm font-display font-bold shrink-0" style={{ color: "var(--cream)" }}>{t2.name[0]}</div>
                  <div>
                    <div className="text-white text-sm font-medium">{t2.name}</div>
                    <div className="text-white/50 text-xs">{t2.place}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="mt-12 text-center">
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-3.5 text-sm font-medium text-cream shadow-glow hover:scale-[1.03] transition" style={{ color: "var(--cream)" }}>
              {t.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
