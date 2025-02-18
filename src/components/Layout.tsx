
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">MapYourWorld</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/explorar" className="nav-link">
                Explorar
              </Link>
              <Link to="/premium" className="nav-link">
                Premium
              </Link>
              <Button variant="ghost" className="nav-link">
                Iniciar sesión
              </Button>
              <Button className="btn-primary">Registrarse</Button>
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => console.log("Abrir menú móvil")}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}
