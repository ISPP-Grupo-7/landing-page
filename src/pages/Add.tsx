import { Button } from "@/components/ui/button";
import { AddCard } from "@/components/add/AddCard";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const navigate = useNavigate();

  const features = {
    local: {
      "Puntos de interés": {
        available: true,
        more: "Tan solo 1",
      },
      "Logo y descripción": {
        available: true,
        more: "",
      },
      "Galería de fotos": {
        available: false,
        more: "",
      },
      "Anuncio": {
        available: false,
        more: "",
      },
      "Beneficios extra": {
        available: false,
        more: "",
      },
    },
    route: {
        "Puntos de interés": {
            available: true,
            more: "Hasta 5 puntos de interés",
        },
        "Logo y descripción": {
            available: true,
            more: "",
        },
        "Galería de fotos": {
            available: true,
            more: "",
        },
        "Anuncio": {
            available: false,
            more: "",
        },
        "Beneficios extra": {
            available: true,
            more: "Crea una ruta especial",
        },
    },
    destination: {
        "Puntos de interés": {
            available: true,
            more: "Hasta 10 puntos de interés",
        },
        "Logo y descripción": {
            available: true,
            more: "",
        },
        "Galería de fotos": {
            available: true,
            more: "",
        },
        "Anuncio": {
            available: true,
            more: "",
        },
        "Beneficios extra": {
            available: true,
            more: "Integra redes y ofertas",
        },
    },
  };

  const plans = [
    {
      name: "Explorador local",
      price: "49€",
      period: "/mes",
      description: "Perfecto para pequeñas empresas",
      features: features.local,
      highlighted: true,
      badge: "Empieza ahora"
    },
    {
      name: "Ruta destacada",
      price: "179€",
      period: "/mes",
      description: "Señala una ruta que nadie podrá perderse",
      features: features.route,
      highlighted: false,
      badge: "Próximamente"
    },
    {
      name: "Destino imperdible",
      price: "299€",
      period: "/mes",
      description: "La mejor manera de promocionar tus empresas",
      features: features.destination,
      highlighted: false,
      badge: "Próximamente"
      }
  ];

  return (
    <div className="min-h-screen py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-2">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4"><span className="text-primary">Publicítate</span> con nosotros</h1>
        </div>

        <div className="transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-8 max-w-10xl mx-auto">
              {plans.map((plan) => (
                <AddCard key={plan.name} {...plan} />
              ))}
          </div>
        </div>

        <div className="mt-16 text-center font-medium">
          <Button onClick={() => navigate("/add/new")}>
              ¡Rellena nuestro cuestionario!
          </Button>
        </div>
      </div>
    </div>
  );
} 