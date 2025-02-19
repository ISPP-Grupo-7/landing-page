import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title?: string;
  section?: string;
  links?: {
    label: string;
    href: string;
  }[];
}

export function PageHeader({ title, section, links }: PageHeaderProps) {
  return (
    <div className="relative">
      {section && links && (
        <div className="absolute right-0 top-0 group">
          <button className="text-sm text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
            {section}
          </button>
          <nav className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors px-4 py-2 text-sm"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
} 