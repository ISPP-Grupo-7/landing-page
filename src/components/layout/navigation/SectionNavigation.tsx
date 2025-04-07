import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = {
  recursos: {
    title: "Recursos",
    links: [
      { label: "Centro de Ayuda", href: "/help" },
      { label: "Guía de Usuario", href: "/help/guide" },
      { label: "Blog de Viajes", href: "/blog" },
      { label: "Comunidad", href: "/community" },
    ]
  },
  legal: {
    title: "Información Legal",
    links: [
      { label: "Términos y Condiciones", href: "/legal/terms" },
      { label: "Política de Privacidad", href: "/legal/privacy" },
      { label: "Política de Cookies", href: "/legal/cookies" },
      { label: "Aviso Legal", href: "/legal/legal-notice" },
      { label: "Acuerdo del Nivel de Servicio", href: "/legal/service-level-agreement" },
    ]
  },
  company: {
    title: "Compañía",
    links: [
      { label: "Sobre Nosotros", href: "/about" },
      { label: "Trabaja con Nosotros", href: "/careers" },
      { label: "Programa de Afiliados", href: "/affiliates" },
      { label: "Contacto", href: "/contact" },
    ]
  }
};

export function SectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Determinar la sección actual basada en la ruta
  const getCurrentSection = () => {
    if (currentPath.startsWith('/help') || currentPath.startsWith('/blog') || currentPath.startsWith('/community')) {
      return 'recursos';
    }
    if (currentPath.startsWith('/legal')) {
      return 'legal';
    }
    if (currentPath.startsWith('/about') || currentPath.startsWith('/careers') || 
        currentPath.startsWith('/affiliates') || currentPath.startsWith('/contact')) {
      return 'company';
    }
    return null;
  };

  const currentSection = getCurrentSection();
  if (!currentSection) return null;

  const { title, links } = sections[currentSection];
  const currentPage = links.find(link => link.href === currentPath);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative group inline-block">
      <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
        <span>{title}:</span>
        <span className="text-primary font-medium">{currentPage?.label}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      
      <nav className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg border py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={cn(
              "block px-4 py-2 text-sm transition-colors",
              currentPath === link.href
                ? "text-primary bg-primary/5 font-medium"
                : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
} 