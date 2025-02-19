import { ResourcePage } from "@/components/resources/ResourcePage";
import { Coffee, Heart, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const positions: Position[] = [
  {
    id: "dev-fullstack",
    title: "Desarrollador Full Stack",
    department: "Tecnología",
    location: "Sevilla/Remoto",
    type: "Tiempo Completo",
    description:
      "Buscamos un desarrollador Full Stack con experiencia en React y Node.js para unirse a nuestro equipo. Trabajarás en el desarrollo de nuevas funcionalidades y en la mejora de la plataforma existente.",
  },
  {
    id: "marketing-intern",
    title: "Marketing Digital (Prácticas)",
    department: "Marketing",
    location: "Sevilla",
    type: "Prácticas",
    description:
      "Buscamos estudiantes o recién graduados para unirse a nuestro equipo de marketing. Aprenderás sobre estrategias de marketing digital, redes sociales y análisis de datos.",
  },
];

export default function Careers() {
  const { toast } = useToast();
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    coverLetter: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío de la solicitud
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Solicitud enviada",
      description: "Revisaremos tu candidatura y te contactaremos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      linkedin: "",
      coverLetter: "",
    });
    setSelectedPosition(null);
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
      title="Trabaja con Nosotros"
      description="Únete a nuestro equipo y ayúdanos a transformar la forma en que las personas comparten sus viajes"
    >
      <div className="space-y-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Startup en Crecimiento</h3>
            <p className="text-sm text-muted-foreground">
              Forma parte de un equipo joven y dinámico con grandes ambiciones
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Aprendizaje Continuo</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollo profesional y formación constante
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Ambiente Inclusivo</h3>
            <p className="text-sm text-muted-foreground">
              Valoramos la diversidad y fomentamos un entorno respetuoso
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Flexibilidad</h3>
            <p className="text-sm text-muted-foreground">
              Equilibrio entre trabajo y vida personal
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Posiciones Abiertas</h2>
          <div className="grid gap-6">
            {positions.map((position) => (
              <div
                key={position.id}
                className="rounded-lg border bg-card p-6"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{position.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {position.location}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {position.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setSelectedPosition(position)}
                      >
                        Aplicar
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Aplicar a {position.title}</DialogTitle>
                        <DialogDescription>
                          Completa el formulario para enviar tu candidatura
                        </DialogDescription>
                      </DialogHeader>
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
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            placeholder="URL de tu perfil de LinkedIn"
                            required
                            value={formData.linkedin}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coverLetter">Carta de Presentación</Label>
                          <Textarea
                            id="coverLetter"
                            name="coverLetter"
                            placeholder="Cuéntanos por qué te gustaría unirte a nuestro equipo"
                            required
                            value={formData.coverLetter}
                            onChange={handleChange}
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Enviando..." : "Enviar Candidatura"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">¿No encuentras lo que buscas?</h2>
            <p className="text-muted-foreground">
              Siempre estamos interesados en conocer personas talentosas. Envíanos
              tu CV y nos pondremos en contacto si surge una oportunidad que
              coincida con tu perfil.
            </p>
            <a href="mailto:careers@mapjourney.es">
              <Button variant="outline">Enviar CV</Button>
            </a>
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 