import { Clock, Shield, Handshake } from "lucide-react";
import officeImage from "@/assets/office-flooring.jpg";
import residentialImage from "@/assets/residential-flooring.jpg";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Clock,
      title: "Agilidade",
      description: "Cumprimos prazos com precisão"
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "Compromisso com a qualidade"
    },
    {
      icon: Handshake,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único para nós"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Experiência
          </h2>
          <p className="text-xl text-wood-dark font-medium mb-12">
            Equipe técnica própria, fornecedores premium e compromisso com prazos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-warm hover-lift">
            <img 
              src={officeImage} 
              alt="Instalação de piso vinílico em escritório comercial - MS Pisos Brasília DF"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Projetos Comerciais</h3>
                <p className="text-white/90">Soluções profissionais para empresas</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-warm hover-lift">
            <img 
              src={residentialImage} 
              alt="Piso laminado de madeira instalado em sala residencial - MS Pisos Brasília"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Projetos Residenciais</h3>
                <p className="text-white/90">Conforto e elegância para sua casa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;