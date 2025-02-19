import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export default function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Descarga MapYourWorld</h1>
          <p className="text-xl text-gray-600 mb-12">
            Lleva tus aventuras contigo a donde vayas. Descarga nuestra aplicación
            y comienza a explorar el mundo.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              className="h-16 px-8 bg-black hover:bg-black/90 text-white flex items-center gap-3"
              onClick={() => window.open('https://apps.apple.com', '_blank')}
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Descarga en la</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </Button>

            <Button
              className="h-16 px-8 bg-black hover:bg-black/90 text-white flex items-center gap-3"
              onClick={() => window.open('https://play.google.com', '_blank')}
            >
              <Smartphone className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Disponible en</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </Button>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia Móvil</h3>
              <p className="text-gray-600">
                Disfruta de todas las funcionalidades en tu dispositivo móvil
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido y Eficiente</h3>
              <p className="text-gray-600">
                Navegación fluida y respuesta instantánea
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguro y Confiable</h3>
              <p className="text-gray-600">
                Tus datos siempre protegidos y seguros
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 