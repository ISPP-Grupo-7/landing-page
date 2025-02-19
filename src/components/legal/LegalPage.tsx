import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionNavigation } from "@/components/layout/navigation/SectionNavigation";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {lastUpdated && (
              <p className="text-xl opacity-90">Última actualización: {lastUpdated}</p>
            )}
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-6">
          <SectionNavigation />
        </div>
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <div className="prose max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 