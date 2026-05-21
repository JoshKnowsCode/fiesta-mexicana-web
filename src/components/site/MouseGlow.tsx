import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden md:block h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen blur-3xl transition-transform duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle at center, oklch(0.62 0.16 45 / 0.55), transparent 60%)",
      }}
    />
  );
}
