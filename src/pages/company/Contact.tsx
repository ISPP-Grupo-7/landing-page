import { ResourcePage } from "@/components/resources/ResourcePage";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "mapyourworld.group7@gmail.com",
      description: "Respuesta en 24h"
    },
    {
      icon: MapPin,
      title: "Dirección",
      info: "Calle Ejemplo 123",
      description: "41012 Sevilla, España"
    }
  ];

  const departments = [
    {
      name: "Soporte Técnico",
      email: "mapyourworld.group7@gmail.com",
      description: "Ayuda con la aplicación y funcionalidades."
    },
    {
      name: "Información General",
      email: "mapyourworld.group7@gmail.com",
      description: "Consultas sobre nuestros servicios."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulamos el envío
    try {
      // Aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo lo antes posible.",
      });
      
      // Limpiamos el formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ResourcePage 
      title="Contacto"
      subtitle="Estamos aquí para ayudarte. Contáctanos por cualquier consulta o sugerencia"
    >
      <div className="space-y-12">
        {/* Información de Contacto */}
        <section className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-primary font-medium mb-1">{item.info}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Formulario de Contacto */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>

          {/* Departamentos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Departamentos</h2>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="font-semibold mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-3">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.email}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horario */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Horario de Atención</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                Lunes a Viernes: 9:00 - 18:00
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-5 h-5" />
                Zona Horaria: (GMT+1) Madrid
              </div>
            </div>
            <p className="text-gray-600">
              Nuestro pequeño equipo está disponible para ayudarte durante el horario laboral.
              Para consultas fuera de horario, envíanos un email y te responderemos lo antes posible.
            </p>
          </div>
        </section>
      </div>
    </ResourcePage>
  );
} 