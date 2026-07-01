import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Catering } from "@/components/site/Catering";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileOrderBar } from "@/components/site/MobileOrderBar";
import { MouseGlow } from "@/components/site/MouseGlow";
import { LangProvider } from "@/context/LangContext";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Fiesta Mexicana",
  description: "Authentic, family-owned Mexican restaurant in Rosedale, Maryland.",
  servesCuisine: "Mexican",
  priceRange: "$$",
  telephone: "+1-410-686-0134",
  url: "/",
  address: { "@type": "PostalAddress", streetAddress: "8436 Philadelphia Road", addressLocality: "Rosedale", addressRegion: "MD", postalCode: "21237", addressCountry: "US" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "11:00", closes: "21:00" }],
};

const cream = "oklch(0.97 0.02 80)";
const menuBg = "oklch(0.96 0.015 70)";
const darkNight = "oklch(0.13 0.02 30)";

function WaveDown({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative z-10 pointer-events-none -mt-1" style={{ background: from }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-[60px] md:h-[90px] block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 C360,90 1080,0 1440,60 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  );
}

function WaveUp({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative z-10 pointer-events-none -mb-1" style={{ background: from }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-[60px] md:h-[90px] block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,90 C360,0 1080,90 1440,30 L1440,0 L0,0 Z" fill={to} />
      </svg>
    </div>
  );
}

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Fiesta Mexicana, Authentic Mexican Food in Rosedale, MD" },
      { name: "description", content: "Family-owned Mexican restaurant in Rosedale, MD serving authentic, handmade tacos, tortas, chilaquiles, carne asada and more." },
      { property: "og:title", content: "Fiesta Mexicana, Authentic Mexican Food in Rosedale, MD" },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,600;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(restaurantJsonLd) }],
  }),
  component: Index,
}));

function Index() {
  return (
    <LangProvider>
      <main className="relative overflow-x-hidden">
        <MouseGlow />
        <Nav />
        <Hero />
        <About />
        <WaveDown from={cream} to={menuBg} />
        <MenuSection />
        <WaveDown from={menuBg} to={cream} />
        <Gallery />
        <WaveDown from={cream} to={darkNight} />
        <Testimonials />
        <WaveDown from={darkNight} to={cream} />
        <Catering />
        <WaveDown from={cream} to={menuBg} />
        <Contact />
        <Footer />
        <MobileOrderBar />
      </main>
    </LangProvider>
  );
}
