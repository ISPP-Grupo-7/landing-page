import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/footer/Footer";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/explorar', label: 'Explorar' },
    { path: '/plan', label: 'Plan' },
    { path: '/add', label: 'Publicítate' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <header className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/favicon.svg" 
                alt="MapYourWorld Logo" 
                className="w-6 h-6" 
              />
              <span className="font-bold text-xl">MapYourWorld</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "nav-link px-3 py-2 rounded-md transition-colors",
                    isActive(link.path)
                      ? "text-primary font-medium bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="ghost"
                className={cn(
                  "nav-link px-3 py-2 rounded-md transition-colors",
                  isActive('/download')
                    ? "text-primary font-medium bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => navigate("/download")}
              >
                Descargar
              </Button>
              <Button 
                variant="ghost" 
                className={cn(
                  "nav-link px-3 py-2 rounded-md transition-colors",
                  isActive('/login')
                    ? "text-primary font-medium bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </Button>
              <Button 
                className="btn-primary"
                onClick={() => navigate("/register")}
              >
                Registrarse
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-64" : "max-h-0"
          )}>
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-4 py-2 rounded-md transition-colors",
                    isActive(link.path)
                      ? "text-primary font-medium bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start px-4 py-2 rounded-md transition-colors",
                  isActive('/download')
                    ? "text-primary font-medium bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => {
                  navigate("/download");
                  setIsMenuOpen(false);
                }}
              >
                Descargar
              </Button>
              <Button 
                variant="ghost" 
                className={cn(
                  "w-full justify-start px-4 py-2 rounded-md transition-colors",
                  isActive('/login')
                    ? "text-primary font-medium bg-primary/10"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
              >
                Iniciar sesión
              </Button>
              <Button 
                className="w-full"
                onClick={() => {
                  navigate("/register");
                  setIsMenuOpen(false);
                }}
              >
                Registrarse
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
