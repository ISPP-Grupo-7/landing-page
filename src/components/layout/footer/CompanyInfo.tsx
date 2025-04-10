import { Mail } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function CompanyInfo() {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">MapYourWorld</h4>
      <p className="text-gray-600 text-sm">
        Explora, comparte y descubre nuevas aventuras con nuestra comunidad de viajeros.
      </p>
      <div className="inline-flex items-center justify-center gap-2 text-gray-600 bg-gray-50 px-0 py-2 rounded-full">
        <Mail className="w-4 h-4" />
        <a 
          href="mailto:mapyourworld.group7@gmail.com" 
          className="hover:text-primary transition-colors"
        >
          mapyourworld.group7@gmail.com

        </a>
      </div>
      <SocialLinks />
    </div>
  );
} 