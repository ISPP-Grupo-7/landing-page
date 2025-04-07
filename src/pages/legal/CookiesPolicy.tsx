import { LegalPage } from "@/components/legal/LegalPage";
import { Cookie, Settings, Shield, Clock, BarChart, Globe, AlertCircle, Mail } from "lucide-react";

export default function CookiesPolicy() {
  return (
    <LegalPage 
      title="Política de Cookies" 
      lastUpdated="19 de febrero de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Cookie className="w-6 h-6" />
            <h2 className="text-2xl font-bold">¿Qué son las Cookies?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
            cuando visitas nuestra plataforma. Nos ayudan a mejorar tu experiencia y a 
            ofrecerte un servicio más personalizado.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Settings className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Tipos de Cookies que Utilizamos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Cookies Esenciales
              </h3>
              <p className="text-gray-600 mb-4">
                Necesarias para el funcionamiento básico de la plataforma.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Autenticación y seguridad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Preferencias de sesión
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Estado de la navegación
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-primary" />
                Cookies Analíticas
              </h3>
              <p className="text-gray-600 mb-4">
                Nos ayudan a mejorar nuestros servicios.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Estadísticas de uso
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Patrones de navegación
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Rendimiento del sitio
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Cookies de Funcionalidad
              </h3>
              <p className="text-gray-600 mb-4">
                Mejoran tu experiencia de usuario.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Preferencias de idioma
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Ubicación aproximada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Personalización de contenido
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Cookies de Duración
              </h3>
              <p className="text-gray-600 mb-4">
                Según su tiempo de permanencia.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Cookies de sesión
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Cookies persistentes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Cookies temporales
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Control de Cookies</h2>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Gestión de Preferencias</h3>
                <p className="text-gray-600 mb-4">
                  Puedes gestionar tus preferencias de cookies en cualquier momento:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Configuración del navegador</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Panel de preferencias de la plataforma</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Importante</h3>
                <p className="text-gray-600">
                  Deshabilitar ciertas cookies puede afectar la funcionalidad de la plataforma. 
                  Las cookies esenciales no pueden ser deshabilitadas ya que son necesarias 
                  para el funcionamiento básico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">¿Tienes Dudas?</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              Si tienes preguntas sobre nuestra política de cookies, contáctanos:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="mailto:mapyourworld.group7@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                mapyourworld.group7@gmail.com
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              <a 
                href="/help/cookies"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Centro de Ayuda
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Esta política de cookies fue actualizada por última vez el 19 de febrero de 2025. 
            Los cambios entrarán en vigor inmediatamente después de su publicación.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 