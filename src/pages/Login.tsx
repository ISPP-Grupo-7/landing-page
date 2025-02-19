import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTogglePassword = () => {
    setIsAnimating(true);
    setShowPassword(!showPassword);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="w-full max-w-md p-6 relative z-10 glass-panel hover:scale-[1.01] transition-transform duration-500 ease-out animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:scale-105 transition-transform">
            <MapPin className="w-8 h-8 text-[#40CEB5]" />
            <span className="text-2xl font-bold">MapYourWorld</span>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Bienvenido de nuevo</h1>
          <p className="text-gray-600">
            Inicia sesión para continuar tu aventura
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input
              type="email"
              placeholder="Correo electrónico"
              className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-[#40CEB5] focus:ring-[#40CEB5] transition-colors"
            />
          </div>
          <div className="relative group">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full h-12 rounded-lg border border-gray-300 px-4 pr-12 focus:border-[#40CEB5] focus:ring-[#40CEB5] transition-colors"
              style={{
                animation: isAnimating
                  ? showPassword
                    ? 'show-password 1s ease-out forwards'
                    : 'hide-password 1s ease-out forwards'
                  : 'none'
              }}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#40CEB5] transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-[#40CEB5] hover:text-[#40CEB5]/80 hover:underline transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button 
            className="w-full h-12 bg-[#40CEB5] hover:bg-[#40CEB5]/90 text-white font-medium rounded-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Iniciar sesión
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/register"
              className="text-[#40CEB5] hover:underline font-medium hover:text-[#40CEB5]/80 transition-colors"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
