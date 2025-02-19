import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  HelpCircle, 
  Users, 
  Newspaper,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const resourceCards = [
  {
    title: "Centro de Ayuda",
    description: "Encuentra respuestas a tus preguntas más frecuentes",
    icon: HelpCircle,
    link: "/help",
    color: "bg-blue-500"
  },
  {
    title: "Guía de Usuario",
    description: "Aprende a sacar el máximo provecho de MapJourney",
    icon: BookOpen,
    link: "/help/guide",
    color: "bg-green-500"
  },
  {
    title: "Blog de Viajes",
    description: "Descubre historias inspiradoras y consejos de viaje",
    icon: Newspaper,
    link: "/blog",
    color: "bg-purple-500"
  },
  {
    title: "Comunidad",
    description: "Conecta con otros viajeros y comparte experiencias",
    icon: Users,
    link: "/community",
    color: "bg-orange-500"
  }
];

export function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Centro de Recursos
          </h1>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas para aprovechar al máximo tu experiencia de viaje
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resourceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={card.link}>
                <div className="group h-full p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl ${card.color} text-white`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <Button asChild>
            <Link to="/contact">Contacta con nosotros</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 