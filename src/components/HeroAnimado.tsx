import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const AIRBNB_URL = "https://airbnb.com/rooms/TU_ID_AQUI";

const navLinks = [
  { label: "Amenidades", href: "#amenidades" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" },
];

export default function HeroAnimado() {
  return (
    <AnimatedHero
      backgroundImageUrl="https://images.unsplash.com/photo-1540541338537-dc075d557a21?w=1920&q=80&auto=format&fit=crop"
      logo={
        <>
          <HomeIcon className="h-6 w-6 text-white" />
          <span className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Casa <span className="text-amber-300">Tequesquitengo</span>
          </span>
        </>
      }
      navLinks={navLinks}
      topRightAction={
        <Button
          className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold border-0"
          onClick={() => window.open(AIRBNB_URL, "_blank")}
        >
          Reservar
        </Button>
      }
      title="Tu refugio en Tequesquitengo"
      description="A orillas del lago, a 2 horas de la Ciudad de México. Alberca privada, acceso al lago, BBQ y todo lo que necesitas para el fin de semana perfecto."
      ctaButton={{
        text: "Ver disponibilidad",
        onClick: () => window.open(AIRBNB_URL, "_blank"),
      }}
      secondaryCta={{
        text: "Conocer la casa",
        onClick: () => {
          document.getElementById("amenidades")?.scrollIntoView({ behavior: "smooth" });
        },
      }}
    />
  );
}
