import { useEffect, useRef, type ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom" | "blur-in";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  duration?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  duration = 700,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.style.transitionDelay = `${delay}ms`;
            target.classList.add("in-view");
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-anim scroll-anim--${animation} ${className}`}
      style={{ "--anim-duration": `${duration}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
