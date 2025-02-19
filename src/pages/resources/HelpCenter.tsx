import { ResourcePage } from "@/components/resources/ResourcePage";
import { Search, ChevronRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function HelpCenter() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const categories = [
    {
      name: "Primeros Pasos",
      description: "Guías básicas para comenzar",
      path: "/help/guide"
    },
    {
      name: "Mapas y Ubicaciones",
      description: "Cómo usar el mapa y marcar lugares",
      path: "/help/guide#mapas"
    },
    {
      name: "Cuenta y Perfil",
      description: "Gestiona tu cuenta",
      path: "/help/guide#cuenta"
    },
    {
      name: "Privacidad y Seguridad",
      description: "Configuración de privacidad",
      path: "/legal/privacy"
    },
    {
      name: "Problemas Técnicos",
      description: "Solución de problemas comunes",
      path: "/help/guide#soporte"
    },
    {
      name: "Facturación",
      description: "Información sobre planes y pagos",
      path: "/plan"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo crear mi primer mapa?",
      answer: "Para crear tu primer mapa, inicia sesión y haz clic en el botón 'Crear Mapa' en tu dashboard. Sigue las instrucciones para añadir ubicaciones y personalizar tu mapa."
    },
    {
      question: "¿Puedo compartir mis mapas con otros usuarios?",
      answer: "Sí, puedes compartir tus mapas con otros usuarios. En la página de tu mapa, encuentra el botón 'Compartir' y elige entre las opciones disponibles: público, privado o compartido con usuarios específicos."
    },
    {
      question: "¿Cómo añado fotos a mis ubicaciones?",
      answer: "Para añadir fotos a una ubicación, selecciona el punto en tu mapa y haz clic en 'Añadir Foto'. Puedes subir imágenes desde tu dispositivo o elegir entre las fotos que ya has compartido."
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsLoading(false);
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <ResourcePage 
      title="Centro de Ayuda"
      description="Encuentra respuestas a tus preguntas y aprende a usar MapYourWorld"
    >
      <div className="space-y-12">
        {/* Buscador */}
        <div className="relative">
          <div className="flex items-center border-2 border-gray-200 rounded-lg p-2">
            <Search className="w-6 h-6 text-gray-400 ml-2" />
            <Input
              type="text"
              placeholder="Busca en nuestra base de conocimientos..."
              className="w-full px-4 py-2 border-0 focus:ring-0"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 text-left justify-between group hover:border-primary"
              onClick={() => navigate(category.path)}
            >
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
          {searchQuery && filteredFaqs.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No se encontraron resultados para "{searchQuery}"
            </p>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contacto */}
        <div className="mt-12">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              ¿No encuentras lo que buscas?
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Contacta con Nosotros
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Envíanos un mensaje</DialogTitle>
                  <DialogDescription>
                    Cuéntanos cómo podemos ayudarte
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      value={contactForm.name}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={contactForm.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto de tu mensaje"
                      required
                      value={contactForm.subject}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      value={contactForm.message}
                      onChange={handleContactChange}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar mensaje"}
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