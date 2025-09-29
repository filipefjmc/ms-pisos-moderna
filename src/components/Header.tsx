import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gradient">MS Pisos</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <Phone className="h-5 w-5" />
            <span className="font-medium">(61) 9 2586-6209</span>
          </div>
          
          <Button 
            variant="cta" 
            asChild
            className="hidden sm:inline-flex"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;