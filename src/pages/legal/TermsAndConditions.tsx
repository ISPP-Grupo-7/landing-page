import { LegalPage } from "@/components/legal/LegalPage";
import { Book, Users, MapPin, Trophy, Map, Lock, Handshake, AlertCircle, Mail, Award, ChartLine, Earth } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <LegalPage 
      title="Términos y Condiciones" 
      lastUpdated="5 de abril de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Book className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Bienvenido a MapYourWorld</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-justify">
            MapYourWorld es una aplicación innovadora que transforma la exploración del mundo en un juego interactivo. A medida 
            que visitas nuevas ciudades, barrios o rincones escondidos, tu mapa personal se actualiza, desbloqueando logros y 
            permitiéndote compartir tus aventuras con amigos. Con opciones gratuitas y premium, gamificación y mapas colaborativos,
             MapYourWorld convierte cada viaje en una experiencia única.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 text-primary">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Descripción detallada del servicio</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
              Funcionalidades disponibles
            </h3>
            <div className="text-gray-600 flex">
              <div className="space-y-3" style={{width: '50%'}}>
                <div className="flex items-center gap-2">
                  <Earth className="w-4 h-4 text-primary" />
                  Descubrir distritos a tiempo real
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Creación de puntos de interés
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Desbloquea logros predeterminados
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  Crea logros personalizados
                </div>
              </div>
              <div className="space-y-3" style={{width: '50%'}}>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Interacción comunitaria
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-primary" />
                  Crea mapas colaborativos
                </div>
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-primary" />
                  Únete a mapas de otros jugadores
                </div>
                <div className="flex items-center gap-2">
                  <ChartLine className="w-4 h-4 text-primary" />
                  Ver tus estadísticas de exploración
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-8">
              Para más información, consulta nuestros <a className="font-semibold text-primary" href="/plan">planes</a>.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Uso del servicio</h2>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <h3 className="font-semibold mb-4 text-gray-800">Aceptación de los usos</h3>
            <p className="text-gray-600 text-justify">
              Por favor, lee estos términos de uso antes de hacer uso de nuestra aplicación. Al acceder y usar el servicio 
              admites haber leído, entendido y aceptado estos términos ya que necesitarás dar tu consentimiento a estos. 
              Si no aceptas estas condiciones, no podrás acceder al servicio.
            </p>
            <p className="text-gray-600 text-justify">
              Estas condiciones de uso no son definitivas y pueden ser modificadas, en cuyo caso la aceptación de estos 
              términos se pedirá nuevamente. El uso continuado del servicio significará que has aceptado las nuevas condiciones de uso.
            </p>
            <p className="text-gray-600 text-justify">
              Estos términos afectan al uso de toda versión e iteración de MapYourWorld, esto incluye tanto las versiones online 
              accesibles desde www.mapyourworld.es o mapyourworld.netlify.app como versiones nativas para dispositivos Android e iOS.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <h3 className="font-semibold mb-4 text-gray-800">Responsabilidad y precaución</h3>
            <p className="text-gray-600 text-justify">
              Debido a la gran importancia de la localización del usuario para utilizar nuestros servicios, el uso de 
              MapYourWorld puede llegar a ser considerado peligroso por diversos factores como son el terreno y el tiempo.
            </p>
            <p className="text-gray-600 text-justify">
              La existencia de un distrito o punto de interés no implica la seguridad o legalidad de llegar a este. 
              Todos los riesgos que puedan surgir por usar MapYourWorld deben ser asumidos plenamente por el usuario.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl space-y-2">
              <h3 className="font-semibold mb-4 text-gray-800">Código de conducta</h3>
              <p className="text-gray-600">
                El uso del servicio implicará la adherencia a un código de conducta. Este código prohibe:
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Interferir con el uso del servicio o privacidad de cualquier otro usuario.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Recopilar información personal de otros usuarios del servicio.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Distribuir contenido que pueda considerarse abusivo, ilegal, indecente, ofensivo o amenazante.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Distribuir cualquier contenido que anime a la violencia.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Distribuir cualquier contenido que anime al incumplimiento de cualquier ley o derechos de propiedad.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Distribuir cualquier contenido que contenga un virus o cualquier componente software dañino.
              </p>
              <p  className="text-gray-600 flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                Descompilar o intentar extraer el código base del software asociado al producto.
              </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Lock className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Propiedad intelectual</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-justify">
            <h3 className="font-semibold mb-4 text-gray-800">Nuestro contenido</h3>
            <div className="space-y-3 text-gray-600">
              Salvo que se indique lo contrario, todo contenido del servicio, incluido artículos, ilustraciones, 
              capturas, gráficos, logos y otros archivos son propiedad de MapYourWorld y está protegido por las leyes 
              de propiedad intelectual correspondientes.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-justify">
              <h3 className="font-semibold mb-4 text-gray-800">Contáctanos</h3>
              <p className="text-justify text-gray-600 mb-2">
                Si crees que algún fragmento del servicio infringe tu copyright y quieres notificarnos, 
                contáctanos con la siguiente información:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Una descripción del producto con copyright o cualquier otra propiedad intelectual 
                    presuntamente infringida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Identificar el material que está presuntamente infringiendo dicho copyright, incluyendo una 
                    descripción de dónde está ubicado en toda versión del servicio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Un correo a través el cual podamos ponernos en contacto, si el usado para mandar la notificación 
                    no va a estar disponible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Si estás representando a una tercera parte, quiénes son.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Una declaración firmada en la que se declare que la información anterior es correcta y 
                    la creencia en buena fe que el uso del material con copyright no ha sido autorizado por el 
                    propietario del copyright, su agente o la ley.</span>
                </li>
              </ul>
            </div>
        </section>

        <section className="space-y-6 text-justify">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información Importante</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Menores de Edad</h3>
              <p className="text-gray-600">
                Se requiere autorización parental para menores de 14 años.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Modificaciones</h3>
              <p className="text-gray-600">
                Nos reservamos el derecho de actualizar estos términos, en cuyo caso la aceptación sería requerida de nuevo.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4 text-gray-800">Terminación</h3>
              <p className="text-gray-600 mb-2">
              MapYourWorld se reserva la posibilidad de suspender o terminar la cuenta de cualquier usuario si se considera 
              que se ha violado cuualquiera de los términos de este acuerdo, es decir, si este ha hecho algo ilegal o ha dañado 
              sobremanera a otro usuario de la aplicación. En función de la situación de la que se trate, especialmente si el 
              usuario no ha puesto en peligro a ningún usuario ni a sus datos, se le dará al usuario una 
              oportunidad para corregir su falta antes de la suspensión o terminación. 
              </p>
              <p className="text-gray-600">
              Todo usuario puede dejar de usar los servicios de MapYourWorld y terminar los términos de este acuerdo salvo aquellas cláusulas sin limitación, que 
              incluye las cláusulas de Propiedad intelectual y Limitación de liabilidad.
              </p>
            </div>
        </section>

        <section className="">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">¿Necesitas Ayuda?</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              Nuestro equipo está aquí para resolver tus dudas:
            </p>
            <div className="text-center w-100">
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
            Estos términos fueron actualizados por última vez el 5 de abril de 2025. 
            Los cambios entrarán en vigor 30 días después de su publicación.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 