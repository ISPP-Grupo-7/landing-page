import { CompanyInfo } from "./CompanyInfo";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <CompanyInfo />
          <div className="md:col-span-3">
            <FooterLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MapYourWorld. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 