import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import logo from "@/assets/logo.png";

const leftLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
];

const rightLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#catering", label: "Catering" },
  { href: "#contact", label: "Visit" },
];

const allLinks = [...leftLinks, ...rightLinks];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-10 pb-2" : "pt-16 pb-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="relative flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 glass-dark text-cream shadow-soft"
          style={{ color: "var(--cream)" }}
        >
          {/* Left links, desktop, evenly spaced */}
          <nav className="hidden md:flex flex-1 items-center justify-evenly text-sm pr-24">
            {leftLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative opacity-80 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Center logo, overlaps the nav borders, much larger */}
          <a
            href="#top"
            aria-label={RESTAURANT.name}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shrink-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
          >
            <img
              src={logo}
              alt={`${RESTAURANT.name} logo`}
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-24 md:h-32" : "h-32 md:h-44"
              }`}
            />

          </a>

          {/* Right links, desktop, evenly spaced */}
          <nav className="hidden md:flex flex-1 items-center justify-evenly text-sm pl-24">
            {rightLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative opacity-80 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-dark p-4 text-cream animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1">
              {allLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={RESTAURANT.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-4 py-2 text-sm font-medium"
              >
                Call {RESTAURANT.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
