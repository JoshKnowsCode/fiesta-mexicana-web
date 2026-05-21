import { Phone } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

export function MobileOrderBar() {
  return (
    <a
      href={RESTAURANT.phoneHref}
      className="md:hidden fixed bottom-4 inset-x-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-fire px-5 py-4 text-cream font-medium shadow-glow active:scale-95 transition"
      style={{ color: "var(--cream)" }}
    >
      <Phone className="h-4 w-4" /> Call to Order · {RESTAURANT.phone}
    </a>
  );
}
