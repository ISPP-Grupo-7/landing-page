import { LegalPage } from "@/components/legal/LegalPage";
import { Shield, User, MapPin, Image, Lock, Clock, Users, Bell, FileText, Mail, Search } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <LegalPage 
      title="Tu Privacidad es Nuestra Prioridad" 
      lastUpdated="5 de abril de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Shield className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Compromiso con tu Privacidad</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            En MapYourWorld, proteger tu información personal es fundamental. Esta política 
            detalla cómo cuidamos tus datos mientras disfrutas de nuestra plataforma de 
            viajes gamificada. Queremos que te sientas seguro al compartir tus aventuras 
            con nosotros.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <User className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Datos con los que tratamos</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información del perfil</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Nombre y apellidos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Correo electrónico
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Nombre de usuario
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Contraseña asociada
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información de ubicación</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Distritos descubiertos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-100 rounded-full"></div>
                  La ubicación a tiempo real no se recogerá
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información de puntos de interés</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Fotos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Nombre y descripción
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Coordenadas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Categoría
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información de logros</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Logros desbloqueados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Logros creados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Información del logro proporcionada por el usuario
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información de amistades</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Amigos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Mapas colaborativos a los que pertenece
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Mapas colaborativos creados
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800">Información de pagos</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Historial de subscripciones
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-100 rounded-full"></div>
                  La información de pago no se guardará
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Lock className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Protección de tus Datos</h2>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Medidas de Seguridad</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Encriptación de extremo a extremo para tus datos sensibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Monitorización continua de actividades sospechosas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Control de acceso estricto a información personal</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Tus Derechos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Acceso y descarga de tus datos personales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Control sobre notificaciones y comunicaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Eliminación de cuenta y datos asociados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex items-center gap-3 text-primary">
            <Search className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Uso de la información</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-3">
              <p className="text-gray-600 text-justify">
              La información geográfica recogida se utilizará única y exclusivamente para el módulo estadístico y de logros 
              incluidos en el propio servicio.
              </p>
              <p className="text-gray-600 text-justify">
              Toda información recogida o generada por MapYourWorld será de uso exclusivo por MapYourWorld y no serán compartidos 
              ni accesibles por ninguna organización ni persona ajenas al equipo de MapYourWorld.
              </p>
            </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contacto y Soporte</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              ¿Tienes preguntas sobre cómo manejamos tus datos? Estamos aquí para ayudarte:
            </p>
            <div className="w-100 text-center">
              <a 
                href="mailto:mapyourworld.group7@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                mapyourworld.group7@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Esta política fue actualizada por última vez el 19 de febrero de 2025. 
            Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 