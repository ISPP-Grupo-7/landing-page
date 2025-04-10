import { LegalPage } from "@/components/legal/LegalPage";
import { Building2, Scale, FileText, Globe, Mail, MapPin, Shield, AlertCircle } from "lucide-react";

export default function ServiceAgreement() {
  return (
    <LegalPage 
      title="Acuerdo del Nivel de Servicio" 
      lastUpdated="5 de abril de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Building2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Indicadores y objetivos del nivel de servicio</h2>
          </div>

          <div className="text-gray-600 text-justify space-y-4">
            <p>
            El servicio depende de terceros para el acceso de los usuarios a este y para su correcto funcionamiento. 
            Es por esto que MapYourWorld considerará algunos indicadores de servicios propios y otros externos, 
            quedando extentos de responsabilidad por fallos de terceros, aunque se considerará la situación y se ofrecerán 
            las compensaciones que se consideren necesarias y adecuadas, según lo establecido más adelante.
            </p>
            <p>
            Este acuerdo será revisado cuatrimestralmente para que los objetivos internos se mantengan realistas y alcanzables. 
            De forma puntual, si algún tercero del que el servicio depende modificara en mayor o menor medida sus acuerdo de 
            nivel de servicio, MapYourWorld modificaría de forma acorde los objetivos definidos a continuación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Indicador</h3>
                <ul className="space-y-3 pb-20">
                  <li className="flex items-start gap-3 h-20">
                    Latencia
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Rendimiento
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Disponibilidad
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Índice de error
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Durabilidad
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Exactitud de los datos
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Exactitud de la localización
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Objetivos internos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3 h-20">
                    95% de las llamadas con un tiempo de respuesta menor o igual a 0,3s
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Soportar hasta 40 transacciones por segundo
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Disponibilidad del 95%, considerando las dependencias a terceros
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Índice interno menor de un 1% por el número total de llamadas, siendo el índice combinado menor de un 2%
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Durabilidad interna combinada del 95%
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Mantener un 98% de precisión combinada, un 99% interna
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    Depende íntegramente de terceros
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Objetivos externos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3 h-20">
                    95% de las llamadas con un tiempo de respuesta menor o igual a 1s
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En función de las respectivas SLAs, alrededor de 50 transacciones por segundo
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En función de las respectivas SLAs, alrededor de un 95% de disponibilidad
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En función de las respectivas SLAs, índices que no superen un 2%
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En función de las respectivas SLAs, una durabilidad del 99%
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En función de las respectivas SLAs, mantener un 98% de exactitud
                  </li>
                  <li className="flex items-start gap-3 h-20">
                    En versiones nativas, un margen de exactitud de 15m, mientras que en versiones web de hasta 500m debido a 
                    la naturaleza inexacta de la localización web
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Scale className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Cláusulas de compensación</h2>
          </div>

          <div className="text-gray-600 text-justify space-y-4">
            <p>
            El equipo será responsable de mantener el servicio dentro de los objetivos establecidos y corregirá cualquier 
            desviación que ocurra, dentro de lo posible. Debido a la alta dependencia en terceros, si estos notifican de 
            cualquier impedimento que les impida adherirse a sus acuerdos de nivel de servicio, MapYourWorld se encargará de 
            notificar a sus usuarios. Sin embargo, si ocurre algún imprevisto que imposibilite la calidad del servicio, 
            MapYourWorld no se responsabilizará de estas pérdidas aunque sí considere las siguientes cláusulas de compensación 
            para usuarios de planes base y premium.
            </p>
            <p>
            A los usuarios de plan básico, debido a que MapYourWorld no ofrece un bien básico y necesario y a la gratuidad del 
            servicio, MapYourWorld no ofrecerá ningún tipo de compensación por falta de disponibilidad o gestión errónea de los datos.
            </p>
            <p>
            A los usuarios de plan premium, la incidencia se resolverá de forma diferente atendiendo al tipo de incidencia, 
            ya sea falta de disponibilidad o incumplimiento de la política de privacidad, ofreciendo un descuento de hasta un 50% 
            del siguiente pago del plan o hasta un reembolso, si se considera que el incumplimiento del acuerdo de confidencialidad 
            ha sido de mayor calibre.
            </p>
            <p>
            Si el usuario considera que MapYourWorld ha podido ocasionar daños directos hacia su persona, este podrá ponerse en 
            contacto con MapYourWorld a través del correo mapyourworld.group7@gmail.com exponiendo de buena fe dichos daños y 
            una propuesta de compensación. MapYourWorld considerará la propuesta y se comprometerá a responder en un plazo de 30 días.
            </p>
          </div>
        </section>

        <section className="">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contacto Legal</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              Para cualquier consulta relacionada con este aviso legal:
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
            Este aviso legal fue actualizado por última vez el 5 de abril de 2025. 
            La versión actual es la única válida hasta su próxima actualización.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 