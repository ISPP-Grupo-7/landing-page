import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Trophy, Users, Mail, Users2, MessageSquare, UserCheck, DownloadIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VideoHero from "@/components/ui/video-hero";

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


  const videoUrl = "/videos/presentacion.mp4";
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
            Descubre tus
            <span className="text-primary"> viajes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre una nueva forma de viajar con nuestra plataforma de geolocalización gamificada. 
            Registra tus aventuras, completa retos y conecta con otros viajeros.
          </p>

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

      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Explora nuestras funcionalidades
          </h2>
          <VideoHero videoUrl={videoUrl} />
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => {
                navigate("/plan");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Ver todas las funcionalidades
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Features Section
      <section id="detailed-features" className="py-24 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Funcionalidades Detalladas
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Geolocalización Inteligente</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Registro automático de ubicaciones mediante GPS</li>
                  <li>• Extracción de metadatos de fotos para ubicación</li>
                  <li>• Historial detallado de lugares visitados</li>
                  <li>• Mapas personalizados de tus viajes</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Sistema de Gamificación</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retos diarios y semanales</li>
                  <li>• Insignias por logros especiales</li>
                  <li>• Sistema de niveles y experiencia</li>
                  <li>• Recompensas exclusivas</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Comunidad Viajera</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Perfiles personalizados</li>
                  <li>• Compartir experiencias y fotos</li>
                  <li>• Recomendaciones de otros viajeros</li>
                  <li>• Eventos y encuentros</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Características Premium</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Mapas offline</li>
                  <li>• Estadísticas avanzadas</li>
                  <li>• Contenido exclusivo</li>
                  <li>• Soporte prioritario</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-8">
              Descubre todos nuestros planes y elige el que mejor se adapte a ti
            </p>
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => navigate("/plan")}
            >
              Ver Planes
            </Button>
          </div>
        </div>
      </section> */}

      {/* Marketing Videos Section
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Descubre MapYourWorld
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <VideoHero videoUrl="/videos/features-overview.mp4" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vista General de Funcionalidades</h3>
                <p className="text-gray-600">Un recorrido completo por todas las características que hacen única nuestra aplicación.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <VideoHero videoUrl="/videos/user-testimonials.mp4" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Testimonios de Usuarios</h3>
                <p className="text-gray-600">Descubre cómo MapYourWorld está transformando la forma de viajar de nuestros usuarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Aplicación en funcionamiento:
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mx-auto">
            {[
              {
                url: "https://app1.mapyourworld.es",
                title: "Versión 1",
                description: "Explora la primera versión de nuestra aplicación.",
              },
              {
                url: "https://app2.mapyourworld.es",
                title: "Versión 2",
                description: "Descubre las mejoras en la segunda versión.",
              },
              {
                url: "https://app3.mapyourworld.es",
                title: "Versión 3",
                description: "Descubre las nuevas características y mejoras en la tercera versión.",
              },
              {
                url: "https://app4.mapyourworld.es",
                title: "Versión 4",
                description: "Explora la versión más reciente con todas las funcionalidades actualizadas.",
              },
            ].map((app, index) => (
              <a
                key={index}
                href={app.url}
                target="_blank"
                className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center relative"
              >
                {index === 3 && (
                  <div className="absolute -top-3 -right-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#0003ff] text-white">New</span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Aplicación en formato APK (para Android y en versión beta):
          </h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            <a
              href="https://drive.google.com/file/d/1sAxYFsEpnN3nqv5Tu2-1o4l0zy6dtj6P/view?usp=drivesdk"
              target="_blank"
              className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <DownloadIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Descargar APK</h3>
              <p className="text-gray-600">Enlace a Google Drive para descarga del ZIP con APK.</p>
            </a>
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
