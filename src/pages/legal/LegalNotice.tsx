import { LegalPage } from "@/components/legal/LegalPage";
import { Building2, Scale, FileText, Globe, Mail, MapPin, Shield, AlertCircle } from "lucide-react";

export default function LegalNotice() {
  return (
    <LegalPage 
      title="Aviso Legal" 
      lastUpdated="5 de abril de 2025"
    >
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Building2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Información de la Empresa</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Datos Identificativos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Denominación Social:</span>
                      <p>MapYourWorld S.L.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">CIF:</span>
                      <p>B12345678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Domicilio Social:</span>
                      <p>Av. de la Reina Mercedes, s/n, 41012 Sevilla</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Contacto</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Email:</span>
                      <p>mapyourworld.group7@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Sitio Web:</span>
                      <p>mapyourworld.netlify.app</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Scale className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Marco Legal</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Normativa Aplicable
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Ley 34/2002, de Servicios de la Sociedad de la Información (LSSI)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Reglamento General de Protección de Datos (RGPD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Ley Orgánica de Protección de Datos (LOPDGDD)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Leyes gobernantes
              </h3>
              <p className="text-gray-600 mb-4">
                Cualquier demanda será tramitada ante la Jurisdicción de lo Contencioso-Administrativo o de lo Civil, en función de las competencias de dicha demanda.
              </p>
            </div>
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