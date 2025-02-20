import { LegalPage } from "@/components/legal/LegalPage";
import { Building2, Scale, FileText, Globe, Mail, MapPin, Shield, AlertCircle } from "lucide-react";

export default function LegalNotice() {
  return (
    <LegalPage 
      title="Aviso Legal" 
      lastUpdated="19 de febrero de 2025"
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
                      <p>Calle Ejemplo 123, 41012 Sevilla, España</p>
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
                      <p>www.mapyourworld.com</p>
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
                  <span>Ley Orgánica de Protección de Datos (LOPD)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Registro Mercantil
              </h3>
              <p className="text-gray-600 mb-4">
                Inscrita en el Registro Mercantil de Sevilla:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Tomo: XXXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Folio: XXX</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Hoja: SE-XXXXX</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Condiciones de Uso</h2>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Propiedad Intelectual</h3>
                <p className="text-gray-600">
                  Todos los contenidos del sitio web (incluyendo textos, imágenes, marcas 
                  y logotipos) son propiedad de MapYourWorld S.L. o de terceros que han 
                  autorizado su uso.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Responsabilidad</h3>
                <p className="text-gray-600">
                  MapYourWorld S.L. no se hace responsable de la información y contenidos 
                  almacenados en foros, redes sociales o cualquier otro medio que permita 
                  a terceros publicar contenidos de forma independiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contacto Legal</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-4">
              Para cualquier consulta relacionada con este aviso legal:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="mailto:legal@mapyourworld.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                legal@mapyourworld.com
              </a>
              <span className="text-gray-300 hidden md:inline">|</span>
              <a 
                href="/help/legal"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Departamento Legal
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Este aviso legal fue actualizado por última vez el 19 de febrero de 2025. 
            La versión actual es la única válida hasta su próxima actualización.
          </p>
        </section>
      </div>
    </LegalPage>
  );
} 