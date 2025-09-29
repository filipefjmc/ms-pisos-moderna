import { Hammer, Home, Building2, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Pisos Flutuantes",
      description: "Instalação profissional de pisos flutuantes de madeira e laminados, com acabamento perfeito e durabilidade garantida.",
      features: ["Instalação sem cola", "Resistente à umidade", "Fácil manutenção", "Acabamento premium"]
    },
    {
      icon: Home,
      title: "Pisos Vinílicos",
      description: "Pisos vinílicos de alta qualidade, resistentes à água e fáceis de manter, ideais para qualquer ambiente.",
      features: ["100% impermeável", "Antialérgico", "Isolamento acústico", "Variedade de designs"]
    },
    {
      icon: Building2,
      title: "Pisos Laminados",
      description: "Soluções em pisos laminados para residências e empresas, com excelente custo-benefício e beleza duradoura.",
      features: ["Alta resistência", "Custo-benefício", "Instalação rápida", "Garantia estendida"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consulta e Medição",
      description: "Visitamos seu local para análise técnica e medição precisa"
    },
    {
      step: "02", 
      title: "Orçamento Detalhado",
      description: "Apresentamos proposta completa com materiais e prazos"
    },
    {
      step: "03",
      title: "Preparação do Ambiente",
      description: "Preparamos o contrapiso e realizamos nivelamento"
    },
    {
      step: "04",
      title: "Instalação Profissional",
      description: "Instalação com equipe técnica especializada e ferramentas adequadas"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em pisos para transformar seu ambiente com qualidade e elegância
          </p>
        </div>

        {/* Tipos de Piso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="text-center bg-card p-8 rounded-lg shadow-warm hover-lift border"
              >
                <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nosso Processo */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Como Funciona Nosso Processo
            </h3>
            <p className="text-muted-foreground text-lg">
              Do primeiro contato à entrega final, acompanhamos cada etapa do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground mx-auto mb-4"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                >
                  {step.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              style={{ 
                backgroundColor: "hsl(var(--gold-accent))", 
                color: "hsl(var(--primary))"
              }}
              asChild
              className="font-semibold px-8"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+os+servi%C3%A7os+da+MS+Pisos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça Nossos Serviços
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;