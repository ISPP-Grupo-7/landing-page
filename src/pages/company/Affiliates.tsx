import { ResourcePage } from "@/components/resources/ResourcePage";
import { DollarSign, Rocket, Target, Award, Mail, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Affiliates() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    description: ""
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Comisiones Atractivas",
      description: "10% por cada nuevo usuario premium que refieras."
    },
    {
      icon: Rocket,
      title: "Inicio Sencillo",
      description: "Te proporcionamos todo el material necesario para empezar."
    },
    {
      icon: Target,
      title: "Mercado en Crecimiento",
      description: "Sector de viajes en expansión con gran potencial."
    },
    {
      icon: Award,
      title: "Programa Beta",
      description: "Sé uno de los primeros afiliados y ayuda a dar forma al programa."
    }
  ];

  const stats = [
    {
      value: "15+",
      label: "Afiliados Beta"
    },
    {
      value: "10%",
      label: "Comisión Base"
    },
    {
      value: "30 días",
      label: "Cookie Duration"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Solicitud enviada",
        description: "Revisaremos tu solicitud y te contactaremos pronto.",
      });
      
      setFormData({
        name: "",
        email: "",
        website: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar la solicitud. Por favor, inténtalo de nuevo.",
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
      title="Programa de Afiliados (Beta)"
      subtitle="Únete a nuestro programa beta de afiliados y crece con nosotros"
    >
      <div className="space-y-12">
        {/* Aviso Beta */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-800">Programa en Fase Beta</h3>
            <p className="text-yellow-700 text-sm mt-1">
              Estamos iniciando nuestro programa de afiliados. Únete ahora para ser uno de los primeros
              y ayudarnos a mejorar el programa con tu feedback.
            </p>
          </div>
        </div>

        {/* Beneficios */}
        <section className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </section>

        {/* Estadísticas */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="bg-white p-8 rounded-xl text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-4">¿Te interesa unirte?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos buscando creadores de contenido y entusiastas de los viajes para nuestro programa beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Solicitar Acceso Beta</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Solicitud de Programa Beta</DialogTitle>
                  <DialogDescription>
                    Completa el formulario para unirte a nuestro programa de afiliados.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
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
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Sitio web o Red Social
                    </label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">
                      ¿Por qué te gustaría unirte?
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre ti y tu experiencia..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:affiliates@mapyourworld.com">Contactar</a>
            </Button>
          </div>
        </section>
      </div>
    </ResourcePage>
  );
} 