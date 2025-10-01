import { CheckCircle, Clock, Shield, Users, Award, Wrench } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Instalação rápida e sem sujeira",
      description: "Processo limpo e eficiente"
    },
    {
      icon: Shield,
      title: "Materiais resistentes e fáceis de limpar",
      description: "Qualidade que dura anos"
    },
    {
      icon: Award,
      title: "Acabamento perfeito e durável",
      description: "Resultado profissional garantido"
    },
    {
      icon: CheckCircle,
      title: "Garantia de satisfação",
      description: "Sua tranquilidade é nossa prioridade"
    },
    {
      icon: Users,
      title: "Atendimento do orçamento à entrega",
      description: "Acompanhamento completo"
    },
    {
      icon: Wrench,
      title: "Mão de obra qualificada",
      description: "Profissionais especializados"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre a MS Pisos - Instalação de Pisos em Brasília
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Empresa especializada na instalação profissional de pisos vinílicos, laminados e carpetes 
            em Brasília e região. Atendemos residências, apartamentos, lojas e empresas em todo o DF 
            com mão de obra qualificada, garantia e materiais premium de alta durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-warm hover-lift border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;