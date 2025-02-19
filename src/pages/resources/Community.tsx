import { ResourcePage } from "@/components/resources/ResourcePage";
import { Users, MessageSquare, Map, Calendar, Trophy, Heart, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Community() {
  const groups = [
    {
      name: "Viajeros Andalucía",
      members: 45,
      description: "Grupo local para compartir experiencias y descubrir lugares únicos en Andalucía.",
      topics: ["Rutas", "Cultura", "Gastronomía"],
      image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89"
    },
    {
      name: "Fotografía de Viajes",
      members: 32,
      description: "Comparte tus mejores fotos y aprende técnicas de fotografía de viajes.",
      topics: ["Fotografía", "Consejos", "Edición"],
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
    },
    {
      name: "Viajes Sostenibles",
      members: 28,
      description: "Descubre cómo viajar de forma responsable y respetuosa con el medio ambiente.",
      topics: ["Sostenibilidad", "Eco-turismo", "Consejos"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
    }
  ];

  const events = [
    {
      title: "Encuentro de Viajeros Sevilla",
      date: "25 Mar 2024",
      location: "Sevilla, España",
      attendees: 15
    },
    {
      title: "Taller de Fotografía Móvil",
      date: "15 Abr 2024",
      location: "Online",
      attendees: 20
    },
    {
      title: "Ruta por Sierra Norte",
      date: "10 May 2024",
      location: "Sierra Norte, Sevilla",
      attendees: 12
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Foros de Discusión",
      description: "Comparte experiencias y consejos con otros viajeros locales."
    },
    {
      icon: Map,
      title: "Rutas Compartidas",
      description: "Descubre y comparte tus rutas favoritas por Andalucía."
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Participa en encuentros y actividades organizadas por la comunidad."
    },
    {
      icon: Trophy,
      title: "Logros",
      description: "Gana insignias por compartir y ayudar a otros viajeros."
    }
  ];

  return (
    <ResourcePage 
      title="Comunidad de Viajeros"
      description="Únete a nuestra comunidad en crecimiento y comparte tus experiencias"
    >
      <div className="space-y-12">
        {/* Características */}
        <section className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Grupos Destacados */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Grupos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {group.members} miembros
                    </span>
                    <Button variant="outline" size="sm">
                      Unirse
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {event.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {event.attendees} asistentes
                        </p>
                      </div>
                    </div>
                    <Button>Participar</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas de la Comunidad */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Nuestra Comunidad</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <p className="text-gray-600">Viajeros activos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">8</div>
                <p className="text-gray-600">Grupos temáticos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <p className="text-gray-600">Rutas compartidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <p className="text-gray-600">Eventos mensuales</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ResourcePage>
  );
} 