import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">MS</span>
            </div>
            <div className="text-xl font-bold text-foreground">MS PISOS</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline"
              style={{ backgroundColor: "hsl(var(--gold-accent))", color: "hsl(var(--primary))", borderColor: "hsl(var(--gold-accent))" }}
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="outline"
              className="mt-4 w-full"
              style={{ backgroundColor: "hsl(var(--gold-accent))", color: "hsl(var(--primary))", borderColor: "hsl(var(--gold-accent))" }}
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;