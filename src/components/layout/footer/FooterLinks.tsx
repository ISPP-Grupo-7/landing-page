import { useNavigate } from "react-router-dom";

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export function FooterLinks() {
  const navigate = useNavigate();

  const sections: FooterSection[] = [
    {
      title: "Información Legal",
      links: [
        { label: "Términos y Condiciones", href: "/legal/terms" },
        { label: "Política de Privacidad", href: "/legal/privacy" },
        { label: "Política de Cookies", href: "/legal/cookies" },
        { label: "Aviso Legal", href: "/legal/legal-notice" },
        { label: "Acuerdo del Nivel de Servicio", href: "legal/service-level-agreement"}
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Centro de Ayuda", href: "/help" },
        { label: "Guía de Usuario", href: "/help/guide" },
        { label: "Comunidad", href: "/community" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Sobre Nosotros", href: "/about" },
        { label: "Contacto", href: "/contact" },
      ],
    },
  ];

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h4 className="text-lg font-semibold">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 