
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Trophy, Users } from "lucide-react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Documenta tus
            <span className="text-primary"> aventuras</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crea un mapa interactivo de tus viajes y comparte tus experiencias con el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => console.log("Registro")}
            >
              Comenzar ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary"
              onClick={() => console.log("Más información")}
            >
              Saber más
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Características principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Registro de ubicaciones",
                description:
                  "Marca automáticamente los lugares que visitas con fotos y notas",
              },
              {
                icon: Trophy,
                title: "Sistema de logros",
                description:
                  "Desbloquea insignias y recompensas mientras exploras el mundo",
              },
              {
                icon: Users,
                title: "Mapas colaborativos",
                description:
                  "Crea y comparte mapas con amigos para planear viajes juntos",
              },
              {
                icon: Navigation,
                title: "Exploración guiada",
                description:
                  "Descubre nuevos lugares cerca de ti con recomendaciones personalizadas",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-panel p-6 hover:scale-105 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar tu aventura?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de viajeros y comienza a crear tu mapa personal de aventuras
          </p>
          <Button
            size="lg"
            className="btn-primary"
            onClick={() => console.log("Registro")}
          >
            Crear cuenta gratis
          </Button>
        </div>
      </section>
    </div>
  );
}
