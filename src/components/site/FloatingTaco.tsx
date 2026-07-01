import { useEffect, useRef } from "react";

export function FloatingTaco() {
  const tacoRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const taco = tacoRef.current;
    if (!taco) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);

      // Move taco along the top bar from left to right
      const trackWidth = window.innerWidth;
      const tacoWidth = 48;
      const x = progress * (trackWidth - tacoWidth - 32);

      // Gentle bounce as it travels
      const bounce = Math.abs(Math.sin(progress * Math.PI * 8)) * 4;
      // Tilt based on direction/speed
      const tilt = Math.sin(progress * Math.PI * 8) * 12;

      taco.style.transform = `translateX(${x}px) translateY(${-bounce}px) rotate(${tilt}deg)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={trackRef}
      className="fixed top-0 inset-x-0 z-[60] pointer-events-none h-1"
      aria-hidden
    >
      {/* Scroll progress bar */}
      <div className="absolute inset-0 bg-gradient-fire opacity-0" />

      {/* Taco */}
      <div
        ref={tacoRef}
        className="absolute top-1 left-4 text-4xl leading-none select-none"
        style={{ willChange: "transform", transition: "transform 0.08s linear" }}
      >
        🌮
      </div>
    </div>
  );
}
