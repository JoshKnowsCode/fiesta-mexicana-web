import { useEffect, useRef } from "react";

export function FloatingTaco() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrolled / maxScroll; // 0 to 1

      // Move from top 10% to bottom 85% of viewport
      const topPct = 10 + progress * 75;
      // Gentle horizontal sway using a sine wave
      const sway = Math.sin(progress * Math.PI * 4) * 12;
      // Rotation follows the sway
      const rotate = Math.sin(progress * Math.PI * 4) * 18;

      el.style.top = `${topPct}vh`;
      el.style.right = `${28 + sway}px`;
      el.style.transform = `rotate(${rotate}deg)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed z-30 pointer-events-none hidden lg:block transition-[top] duration-150 ease-out"
      style={{ right: "28px", top: "10vh" }}
      aria-hidden
    >
      <div className="relative select-none">
        {/* Drop shadow glow */}
        <div className="absolute inset-0 blur-xl opacity-40 scale-75 translate-y-2" style={{ background: "radial-gradient(circle, oklch(0.62 0.16 45), transparent 70%)" }} />
        {/* Taco SVG */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
        >
          {/* Shell */}
          <path d="M8 38 Q32 6 56 38" stroke="oklch(0.72 0.14 75)" strokeWidth="5" strokeLinecap="round" fill="none"/>
          {/* Shell fill */}
          <path d="M8 38 Q32 10 56 38 Q44 44 32 44 Q20 44 8 38Z" fill="oklch(0.82 0.14 80)" />
          {/* Lettuce */}
          <path d="M14 38 Q18 34 22 37 Q26 34 30 37 Q34 34 38 37 Q42 34 46 37 Q48 38 50 38" stroke="oklch(0.65 0.18 145)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          {/* Meat */}
          <ellipse cx="32" cy="39" rx="14" ry="3.5" fill="oklch(0.42 0.12 35)" />
          {/* Tomato */}
          <circle cx="24" cy="37" r="2.5" fill="oklch(0.55 0.2 25)" />
          <circle cx="40" cy="37" r="2" fill="oklch(0.55 0.2 25)" />
          {/* Cheese */}
          <path d="M20 38 L26 35 L32 38 L38 35 L44 38" stroke="oklch(0.82 0.16 75)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          {/* Sour cream dots */}
          <circle cx="29" cy="40" r="1.5" fill="white" opacity="0.85" />
          <circle cx="35" cy="40" r="1.5" fill="white" opacity="0.85" />
        </svg>
      </div>
    </div>
  );
}
