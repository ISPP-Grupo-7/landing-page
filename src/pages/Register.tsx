
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828')] bg-cover bg-center opacity-5" />
      
      <div className="container max-w-lg mx-auto px-4 relative z-10">
        <div className="glass-panel p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">MapYourWorld</span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Crea tu cuenta</h1>
            <p className="text-muted-foreground">
              Comienza a documentar tus aventuras hoy mismo
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Input
                type="text"
                placeholder="Nombre completo"
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Correo electrónico"
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Contraseña"
                className="w-full"
              />
            </div>
            <Button className="w-full btn-primary" size="lg">
              Registrarse
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
