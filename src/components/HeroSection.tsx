import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-installation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu Ambiente com{" "}
            <span style={{ color: "hsl(var(--gold-accent))" }}>
              Pisos de Qualidade
            </span>
          </h1>
          
          <div className="text-lg md:text-xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-2">
              Especialistas em instalação de pisos flutuantes, vinílicos e laminados.
            </p>
            <p>
              Qualidade profissional que você pode confiar.
            </p>
          </div>
          
          <Button
            size="lg"
            style={{ 
              backgroundColor: "hsl(var(--gold-accent))", 
              color: "hsl(var(--primary))",
              fontSize: "1.1rem",
              padding: "1.5rem 3rem",
              marginTop: "2rem"
            }}
            asChild
            className="font-semibold hover:opacity-90 transition-opacity shadow-xl"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento Gratuito
            </a>
          </Button>
        </div>
      </div>

      {/* Chat Widget Placeholder */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center border-2 border-white/20" style={{ backgroundColor: "hsl(var(--gold-accent))" }}>
          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;