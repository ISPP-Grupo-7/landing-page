import { ResourcePage } from "@/components/resources/ResourcePage";
import { Mail, MessageSquare, Phone, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío del mensaje
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ResourcePage
      title="Contacto"
      description="¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Información de Contacto</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    soporte@mapjourney.es
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Respuesta en 24-48 horas laborables
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">+34 900 123 456</p>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Viernes, 9:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Dirección</h3>
                  <p className="text-sm text-muted-foreground">
                    Av. Reina Mercedes s/n
                  </p>
                  <p className="text-sm text-muted-foreground">
                    41012 Sevilla, España
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Departamentos</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="font-semibold">Soporte Técnico</h3>
                <p className="text-sm text-muted-foreground">
                  Para problemas técnicos y ayuda con la plataforma
                </p>
                <a
                  href="mailto:soporte@mapjourney.es"
                  className="text-sm text-primary hover:underline"
                >
                  soporte@mapjourney.es
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Atención al Cliente</h3>
                <p className="text-sm text-muted-foreground">
                  Para consultas generales y asistencia
                </p>
                <a
                  href="mailto:info@mapjourney.es"
                  className="text-sm text-primary hover:underline"
                >
                  info@mapjourney.es
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Asunto del mensaje"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Horario de Atención</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Lunes a Viernes</p>
                  <p className="text-sm text-muted-foreground">9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Soporte Online</p>
                  <p className="text-sm text-muted-foreground">
                    24/7 vía email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 