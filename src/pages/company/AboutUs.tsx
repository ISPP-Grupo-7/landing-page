import { motion } from "framer-motion";
import { Users, Globe, Heart } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: Users,
      title: "Comunidad",
      description: "Creemos en el poder de compartir experiencias y conectar viajeros."
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description: "Promovemos el turismo responsable y el respeto por el medio ambiente."
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y nos esforzamos por mejorar cada día."
    }
  ];

  const departments = {
    backend: "bg-blue-100 text-blue-800",
    frontend: "bg-green-100 text-green-800",
    testing: "bg-yellow-100 text-yellow-800",
    devops: "bg-purple-100 text-purple-800",
    security: "bg-red-100 text-red-800",
    legal: "bg-orange-100 text-orange-800",
    marketing: "bg-pink-100 text-pink-800",
    coordination: "bg-cyan-100 text-cyan-800"
  };

  const team = [
    { 
      name: "Alfonso Alonso", 
      roles: ["Backend","Coordinación (C)"]
    },
    { 
      name: "Alejandro Aragón", 
      roles: ["Backend", "Testing", "Seguridad (C)", "Coordinación"]
    },
    { 
      name: "José María Baquero", 
      roles: ["Frontend", "Marketing"]
    },
    { 
      name: "Pablo Caballero", 
      roles: ["Backend", "DevOps (C)", "Coordinación"]
    },
    { 
      name: "Ricardo Carreño", 
      roles: ["Frontend","Seguridad (C)", "Marketing", "Coordinación"]
    },
    { 
      name: "Franco Dell'Aguila", 
      roles: ["Frontend","DevOps", "Marketing"]
    },
    { 
      name: "Alberto Escobar", 
      roles: ["Backend",""]
    },
    { 
      name: "Jaime Gómez", 
      roles: ["Frontend", "Marketing"]
    },
    { 
      name: "Claudio González", 
      roles: ["Backend", "Seguridad"]
    },
    { 
      name: "Ángel Neria", 
      roles: ["Frontend (C)", "Marketing", "Coordinación"]
    },
    { 
      name: "Pablo Olivencia", 
      roles: ["Backend", "Frontend"]
    },
    { 
      name: "Antonio Porcar", 
      roles: ["Backend",  "Testing (C)","Coordinación"]
    },
    { 
      name: "Alba Ramos", 
      roles: [ "Frontend", "Legal (C)", "Coordinación"]
    },
    { 
      name: "Pedro Pablo Santos", 
      roles: ["Backend (C)", "Testing","Coordinación"]
    },
    { 
      name: "Manuel Vélez", 
      roles: ["Backend", "Testing", "DevOps"]
    },
    { 
      name: "Gonzalo García", 
      roles: ["Backend", "Frontend", "Testing", "DevOps", "Seguridad"]
    }
  ];

  const getDepartmentClass = (roles: string[]) => {
    if (roles.length === 1) {
      const role = roles[0].toLowerCase();
      return departments[role.replace(' ', '')];
    }
    // Para múltiples roles, usar un estilo especial
    return "bg-gradient-to-r from-primary/20 to-secondary/20 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nuestro Equipo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Equipo de desarrolladores de MapYourWorld
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo de Desarrollo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${getDepartmentClass(member.roles)} transition-all duration-300 hover:scale-105`}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <div className="space-y-1">
                    {member.roles.map((role, roleIndex) => (
                      <p key={roleIndex} className="text-sm">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 