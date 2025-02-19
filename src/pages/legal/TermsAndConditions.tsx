import { LegalPage } from "@/components/legal/LegalPage";
import { Book, Users, MapPin, Trophy, Shield, Lock, Settings, AlertCircle, Mail } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <LegalPage 
      title="Términos y Condiciones" 
      lastUpdated="19 de febrero de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Book className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Bienvenido a MapYourWorld</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Tu plataforma digital de viajes que combina geolocalización, gamificación e 
            integración social. Al usar nuestra plataforma, aceptas estos términos que 
            están diseñados para crear una experiencia segura y emocionante para todos.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Nuestros Servicios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Plan Gratuito
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Registro de ubicaciones GPS
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  Retos básicos
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Interacción comunitaria
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Recomendado
              </div>
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Plan Premium
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Sin anuncios
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  Herramientas avanzadas
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  Gamificación exclusiva
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Lock className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Tu Contenido</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Tus Derechos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Mantienes los derechos de propiedad intelectual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Control sobre la privacidad de tu contenido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Derecho a eliminar tu contenido</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Tus Responsabilidades</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Respetar los derechos de otros usuarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>No compartir contenido inapropiado o ilegal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Mantener la seguridad de tu cuenta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información Importante</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Menores de Edad</h3>
              <p className="text-gray-600">
                Se requiere autorización parental para usuarios menores de 16 años.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Modificaciones</h3>
              <p className="text-gray-600">
                Nos reservamos el derecho de actualizar estos términos con previo aviso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Cancelación</h3>
              <p className="text-gray-600">
                Puedes cancelar tu cuenta en cualquier momento desde la configuración.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">¿Necesitas Ayuda?</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              Nuestro equipo está aquí para resolver tus dudas:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="mailto:support@mapyourworld.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                support@mapyourworld.com
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              <a 
                href="/help/terms"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Centro de Ayuda
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Estos términos fueron actualizados por última vez el 19 de febrero de 2025. 
            Los cambios entrarán en vigor 30 días después de su publicación.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 