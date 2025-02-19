import { Apple, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { DownloadButton } from "@/components/download/DownloadButton";
import { FeatureCard } from "@/components/download/FeatureCard";

const features = [
  {
    icon: Smartphone,
    title: "Experiencia Móvil",
    description: "Disfruta de todas las funcionalidades en tu dispositivo móvil"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rápido y Eficiente",
    description: "Navegación fluida y respuesta instantánea"
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Seguro y Confiable",
    description: "Tus datos siempre protegidos y seguros"
  }
];

export default function Download() {
  return (
    <div className="min-h-screen relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg"
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="relative z-10 min-h-screen bg-gradient-to-b from-primary/10 to-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Descarga MapYourWorld</h1>
            <p className="text-xl text-gray-600 mb-12">
              Lleva tus aventuras contigo a donde vayas. Descarga nuestra aplicación
              y comienza a explorar el mundo.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <DownloadButton
                icon={Apple}
                storeName="App Store"
                storeDescription="Descarga en la"
                url="https://apps.apple.com"
              />

              <DownloadButton
                icon={Smartphone}
                storeName="Google Play"
                storeDescription="Disponible en"
                url="https://play.google.com"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.25 }}
              className="mt-20 grid md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 