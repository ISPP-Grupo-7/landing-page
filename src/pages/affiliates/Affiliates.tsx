import { ResourcePage } from "@/components/resources/ResourcePage";
import { DollarSign, Rocket, Target, Award, Mail } from "lucide-react";
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

export function Affiliates() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos el envío de la solicitud
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Solicitud enviada",
      description: "Revisaremos tu solicitud y te contactaremos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      website: "",
      description: "",
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
      title="Programa de Afiliados"
      description="Únete a nuestro programa beta de afiliados y crece con nosotros"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Beneficios del Programa</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Comisiones Atractivas</h3>
                  <p className="text-sm text-muted-foreground">
                    Gana un 10% por cada nuevo usuario que se registre a través de
                    tu enlace
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Inicio Rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Acceso inmediato a materiales promocionales y enlaces de
                    afiliado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Audiencia Relevante</h3>
                  <p className="text-sm text-muted-foreground">
                    Conecta con viajeros interesados en compartir sus experiencias
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Programa de Recompensas</h3>
                  <p className="text-sm text-muted-foreground">
                    Bonificaciones especiales al alcanzar objetivos mensuales
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Programa Beta</h2>
            <p className="text-muted-foreground">
              Estamos iniciando nuestro programa de afiliados y buscamos
              colaboradores comprometidos que quieran crecer con nosotros. Durante
              la fase beta, trabajaremos estrechamente con un grupo selecto de
              afiliados para perfeccionar nuestro programa.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  15+
                </div>
                <div>
                  <p className="font-medium">Afiliados Activos</p>
                  <p className="text-sm text-muted-foreground">
                    Comunidad en crecimiento
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  10%
                </div>
                <div>
                  <p className="font-medium">Comisión Base</p>
                  <p className="text-sm text-muted-foreground">
                    Por cada nuevo usuario registrado
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  30d
                </div>
                <div>
                  <p className="font-medium">Duración de Cookie</p>
                  <p className="text-sm text-muted-foreground">
                    Ventana de atribución
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Únete al Programa Beta</h2>
                <p className="text-sm text-muted-foreground">
                  Completa el formulario para solicitar acceso al programa beta de
                  afiliados
                </p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Solicitar Acceso</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Solicitud de Afiliado</DialogTitle>
                    <DialogDescription>
                      Cuéntanos sobre ti y por qué te gustaría unirte a nuestro
                      programa de afiliados
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
                      <Label htmlFor="website">Sitio Web/Blog/RRSS</Label>
                      <Input
                        id="website"
                        name="website"
                        placeholder="https://"
                        required
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">
                        ¿Por qué quieres unirte?
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Cuéntanos sobre tu experiencia y motivación"
                        required
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Enviando..." : "Enviar Solicitud"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">¿Necesitas Ayuda?</h2>
            <p className="text-muted-foreground">
              Si tienes alguna pregunta sobre el programa de afiliados, no dudes
              en contactarnos
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:afiliados@mapjourney.es"
                className="text-sm text-primary hover:underline"
              >
                afiliados@mapjourney.es
              </a>
            </div>
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 