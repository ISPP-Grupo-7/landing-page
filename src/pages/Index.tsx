import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Trophy, Users, Mail, Users2, MessageSquare, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const pilotUsers = [
    {
      icon: Users2,
      title: "Comunidades de Viajeros",
      description: "Usuarios activos en redes sociales como Instagram y Facebook que comparten experiencias y recomendaciones de viaje.",
      detail: "Su participación e interés en descubrir nuevos destinos los convierte en candidatos ideales para evaluar la experiencia de exploración y gamificación."
    },
    {
      icon: MessageSquare,
      title: "Foros de Viajes",
      description: "Participantes de TripAdvisor, Los Viajeros y otros foros especializados en turismo.",
      detail: "Su conocimiento y experiencia permitirán identificar áreas de mejora y aportar feedback constructivo sobre funcionalidades."
    },
    {
      icon: UserCheck,
      title: "Redes Personales",
      description: "Familiares y amigos amantes de los viajes, con diversos niveles de experiencia tecnológica.",
      detail: "La confianza existente facilita la obtención de feedback honesto y ayuda a evaluar la usabilidad para un público amplio."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg"
        />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transforma tus
            <span className="text-primary"> viajes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre una nueva forma de viajar con nuestra plataforma de geolocalización gamificada. 
            Registra tus aventuras, completa retos y conecta con otros viajeros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Comenzar gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Una nueva experiencia de viaje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Geolocalización inteligente",
                description:
                  "Registra automáticamente tus ubicaciones mediante GPS o fotos con metadatos",
              },
              {
                icon: Trophy,
                title: "Gamificación",
                description:
                  "Completa retos, gana insignias y descubre nuevos destinos mientras viajas",
              },
              {
                icon: Users,
                title: "Comunidad viajera",
                description:
                  "Conecta con otros viajeros, comparte experiencias y descubre recomendaciones",
              },
              {
                icon: Navigation,
                title: "Experiencia Premium",
                description:
                  "Accede a funciones exclusivas y mejora tu experiencia con una suscripción",
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

      {/* Pilot Users Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Usuarios Piloto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buscamos personas motivadas que prueben la aplicación y brinden retroalimentación valiosa antes del lanzamiento final.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pilotUsers.map((user, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 group relative"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <user.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{user.title}</h3>
                <p className="text-gray-600 text-center">{user.description}</p>
                
                {/* Tooltip con el detalle */}
                <div className="absolute inset-0 bg-white/95 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <p className="text-gray-800 text-center">{user.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Proceso de Participación</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Canal de Comunicación</h4>
                    <p className="text-gray-600">El correo electrónico será nuestra herramienta principal de comunicación con los usuarios piloto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Procedimiento</h4>
                    <p className="text-gray-600">
                      1. Registro inicial mediante correo electrónico<br />
                      2. Envío de instrucciones detalladas<br />
                      3. Pruebas periódicas con formularios de feedback<br />
                      4. Seguimiento y soporte continuo
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            onClick={() => navigate("/register")}
          >
            Crear cuenta gratis
          </Button>
        </div>
      </section>
    </div>
  );
}
