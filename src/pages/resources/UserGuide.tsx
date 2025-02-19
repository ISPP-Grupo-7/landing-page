import { ResourcePage } from "@/components/resources/ResourcePage";
import { Search, ChevronRight, Book, Map, User, Settings, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";

export default function UserGuide() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string>("inicio");

  const sections = [
    {
      id: "inicio",
      title: "Primeros Pasos",
      icon: Book,
      content: [
        {
          title: "Crear una cuenta",
          description: "Aprende a crear y configurar tu cuenta en MapYourWorld."
        },
        {
          title: "Interfaz principal",
          description: "Conoce los elementos básicos de la interfaz y cómo navegar por ella."
        },
        {
          title: "Configuración inicial",
          description: "Configura tus preferencias básicas para empezar a usar la aplicación."
        }
      ]
    },
    {
      id: "mapas",
      title: "Mapas y Ubicaciones",
      icon: Map,
      content: [
        {
          title: "Crear un nuevo mapa",
          description: "Aprende a crear y personalizar tus propios mapas de viaje."
        },
        {
          title: "Añadir ubicaciones",
          description: "Descubre cómo marcar y gestionar ubicaciones en tus mapas."
        },
        {
          title: "Compartir mapas",
          description: "Comparte tus mapas con amigos y la comunidad."
        }
      ]
    },
    {
      id: "cuenta",
      title: "Cuenta y Perfil",
      icon: User,
      content: [
        {
          title: "Editar perfil",
          description: "Personaliza tu perfil y ajusta tus preferencias."
        },
        {
          title: "Gestionar privacidad",
          description: "Configura las opciones de privacidad de tu cuenta."
        },
        {
          title: "Notificaciones",
          description: "Administra tus preferencias de notificaciones."
        }
      ]
    },
    {
      id: "soporte",
      title: "Soporte Técnico",
      icon: HelpCircle,
      content: [
        {
          title: "Problemas comunes",
          description: "Soluciones a los problemas más frecuentes."
        },
        {
          title: "Contactar soporte",
          description: "Cómo obtener ayuda del equipo de soporte."
        },
        {
          title: "Reportar errores",
          description: "Proceso para reportar problemas técnicos."
        }
      ]
    }
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && sections.some(section => section.id === hash)) {
      setActiveSection(hash);
    }
  }, [location]);

  const filteredSections = sections.map(section => ({
    ...section,
    content: section.content.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.content.length > 0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);
  };

  return (
    <ResourcePage 
      title="Guía de Usuario"
      description="Todo lo que necesitas saber para aprovechar al máximo MapYourWorld"
    >
      <div className="relative">
        <PageHeader 
          section="Contenido"
          links={sections.map(section => ({
            label: section.title,
            href: `#${section.id}`
          }))}
        />
      </div>

      <div className="space-y-8">
        {/* Buscador */}
        <div className="relative">
          <div className="flex items-center border-2 border-gray-200 rounded-lg p-2">
            <Search className="w-6 h-6 text-gray-400 ml-2" />
            <Input
              type="text"
              placeholder="Buscar en la guía..."
              className="w-full px-4 py-2 border-0 focus:ring-0"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Navegación */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-4">Contenido</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contenido */}
          <div className="md:col-span-3">
            {searchQuery && filteredSections.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  No se encontraron resultados para "{searchQuery}"
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {(searchQuery ? filteredSections : sections).map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`space-y-6 ${
                      !searchQuery && activeSection !== section.id ? 'hidden' : ''
                    }`}
                  >
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <section.icon className="w-6 h-6" />
                      {section.title}
                    </h2>
                    <div className="grid gap-4">
                      {section.content.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 