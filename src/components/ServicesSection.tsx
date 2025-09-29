import { Hammer, Home, Building2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Pisos Flutuantes",
      description: "Instalação profissional de pisos flutuantes de madeira e laminados, com acabamento perfeito e durabilidade garantida."
    },
    {
      icon: Home,
      title: "Pisos Vinílicos",
      description: "Pisos vinílicos de alta qualidade, resistentes à água e fáceis de manter, ideais para qualquer ambiente."
    },
    {
      icon: Building2,
      title: "Pisos Laminados",
      description: "Soluções em pisos laminados para residências e empresas, com excelente custo-benefício e beleza duradoura."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em pisos para transformar seu ambiente com qualidade e elegância
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;