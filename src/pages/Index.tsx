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
            Descubre tus
            <span className="text-primary"> aventuras</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crea un mapa interactivo de tus viajes y comparte tus experiencias con el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary"
              onClick={() => navigate("/register")}
            >
              Comenzar ahora
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
                className="glass-panel p-8 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <user.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{user.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{user.description}</p>
                <p className="text-sm text-gray-500 text-center">{user.detail}</p>
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

      {/* Footer */}
      <footer className="py-12 bg-white border-t">
        {/* Contact Email */}
        <div className="container mx-auto px-4 text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:cambiar@gmail.com" 
              className="hover:text-primary transition-colors"
            >
              cambiar@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">MapYourWorld</h4>
              <p className="text-gray-600 text-sm">
                Explora, comparte y descubre nuevas aventuras con nuestra comunidad de viajeros.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Información Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Guía de Usuario
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Blog de Viajes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Compañía</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Trabaja con Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Programa de Afiliados
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MapYourWorld. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
