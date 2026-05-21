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

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Fiesta Mexicana",
  description:
    "Authentic, family-owned Mexican restaurant in Rosedale, Maryland, handmade tortillas, traditional recipes, dine-in, carry-out, and catering across Baltimore County.",
  servesCuisine: "Mexican",
  priceRange: "$$",
  telephone: "+1-410-686-0134",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8436 Philadelphia Road",
    addressLocality: "Rosedale",
    addressRegion: "MD",
    postalCode: "21237",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  acceptsReservations: "True",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fiesta Mexicana, Authentic Mexican Food in Rosedale, MD" },
      {
        name: "description",
        content:
          "Family-owned Mexican restaurant in Rosedale, MD serving authentic, handmade tacos, tortas, chilaquiles, carne asada and more. Dine-in, carry-out & catering across Baltimore County.",
      },
      {
        name: "keywords",
        content:
          "authentic Mexican food Rosedale MD, best Mexican restaurant Baltimore County, Mexican catering Maryland, traditional Mexican breakfast, tacos Rosedale, chilaquiles Baltimore",
      },
      { property: "og:title", content: "Fiesta Mexicana, Authentic Mexican Food in Rosedale, MD" },
      {
        property: "og:description",
        content:
          "Handmade tortillas, family recipes, and the warm hospitality of a real Mexican kitchen. Now serving Rosedale & Baltimore County.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantJsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <MouseGlow />
      <Nav />
      <Hero />
      <About />
      <MenuSection />
      
      <Testimonials />
      <Gallery />
      <Catering />
      <Contact />
      <Footer />
      <MobileOrderBar />
    </main>
  );
}
