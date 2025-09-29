import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flooring.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Conforto e qualidade para cada passo
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Especialistas em pisos flutuantes, vinílicos e laminados para residências e empresas
          </p>
          
          <Button
            variant="hero"
            size="lg"
            asChild
            className="text-xl px-12 py-6"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicite um Orçamento Gratuito
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;