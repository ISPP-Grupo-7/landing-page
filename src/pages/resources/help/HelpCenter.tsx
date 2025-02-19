import { ResourcePage } from "@/components/resources/ResourcePage";
import { Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { HelpCategory, FAQ } from "@/types/help";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const categories: HelpCategory[] = [
    {
      name: "Primeros Pasos",
      description: "Guías básicas para comenzar a usar la plataforma",
      path: "/resources/help/getting-started"
    },
    {
      name: "Mapas y Rutas",
      description: "Aprende a crear y gestionar tus mapas de viaje",
      path: "/resources/help/maps"
    },
    {
      name: "Cuenta y Perfil",
      description: "Gestiona tu cuenta y personaliza tu perfil",
      path: "/resources/help/account"
    },
    {
      name: "Comunidad",
      description: "Participa en la comunidad y comparte experiencias",
      path: "/resources/help/community"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "¿Cómo puedo crear mi primer mapa de viaje?",
      answer: "Para crear tu primer mapa, dirígete a la sección 'Mis Mapas' y haz clic en el botón 'Crear Nuevo Mapa'. Sigue el asistente para configurar tu mapa y comenzar a añadir ubicaciones."
    },
    {
      question: "¿Puedo compartir mis mapas con otros usuarios?",
      answer: "Sí, puedes compartir tus mapas con otros usuarios. En la vista de tu mapa, encontrarás un botón de 'Compartir' que te permitirá generar un enlace o invitar directamente a otros usuarios."
    },
    {
      question: "¿Cómo puedo unirme a grupos de viajeros?",
      answer: "Puedes unirte a grupos visitando la sección 'Comunidad' y explorando los grupos disponibles. Una vez encuentres uno que te interese, simplemente haz clic en 'Unirse al Grupo'."
    },
    {
      question: "¿Qué hago si olvidé mi contraseña?",
      answer: "Si olvidaste tu contraseña, haz clic en 'Olvidé mi contraseña' en la página de inicio de sesión. Te enviaremos un enlace a tu correo electrónico para restablecerla."
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Tu mensaje ha sido enviado. Te responderemos pronto.");
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsLoading(false);
  };

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery) ||
      faq.answer.toLowerCase().includes(searchQuery)
  );

  return (
    <ResourcePage 
      title="Centro de Ayuda"
      description="Encuentra respuestas a tus preguntas y obtén ayuda cuando la necesites"
    >
      <div className="space-y-8">
        {/* Buscador */}
        <div className="relative">
          <div className="flex items-center border-2 border-gray-200 rounded-lg p-2">
            <Search className="w-6 h-6 text-gray-400 ml-2" />
            <Input
              type="text"
              placeholder="Buscar en el centro de ayuda..."
              className="w-full px-4 py-2 border-0 focus:ring-0"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button
              key={category.path}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-gray-50"
              onClick={() => window.location.href = category.path}
            >
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-600 text-left">
                {category.description}
              </p>
            </Button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
          {searchQuery && filteredFaqs.length === 0 ? (
            <p className="text-gray-600 text-center py-4">
              No se encontraron resultados para "{searchQuery}"
            </p>
          ) : (
            <div className="grid gap-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contacto */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600">
              Nuestro equipo de soporte está aquí para ayudarte
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contactar Soporte</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 