import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Quanto custa instalar piso vinílico em Brasília?",
      answer: "O valor varia conforme metragem, tipo de piso e complexidade da instalação. Em média, a instalação de piso vinílico em Brasília fica entre R$ 25 a R$ 45 por m² (mão de obra). Fazemos orçamento gratuito com visita técnica para apresentar o valor exato do seu projeto."
    },
    {
      question: "Qual o tempo de instalação de um piso?",
      answer: "O tempo varia conforme o tamanho do ambiente e tipo de piso. Em média, um ambiente de 20m² leva de 4 a 6 horas para ser concluído. Fornecemos cronograma detalhado no orçamento."
    },
    {
      question: "É necessário quebrar o piso existente?",
      answer: "Na maioria dos casos, não! Pisos flutuantes e vinílicos podem ser instalados sobre o piso existente, desde que esteja nivelado e em boas condições. Fazemos uma avaliação técnica gratuita."
    },
    {
      question: "Qual a melhor opção de piso para apartamento em Brasília?",
      answer: "Para apartamentos em Brasília, recomendamos pisos vinílicos ou laminados de alta qualidade. São resistentes, têm isolamento acústico (importante para apartamentos), fácil manutenção e suportam bem o clima do DF. Avaliamos seu caso para indicar a melhor opção."
    },
    {
      question: "Qual a garantia oferecida pela MS Pisos?",
      answer: "Oferecemos garantia de 1 ano para mão de obra e seguimos a garantia do fabricante para os materiais (que varia de 10 a 25 anos conforme o produto escolhido). Nossa garantia cobre defeitos de instalação e problemas relacionados ao trabalho executado."
    },
    {
      question: "Vocês fornecem os materiais ou só fazem a instalação?",
      answer: "Sim! Trabalhamos com fornecedores premium e oferecemos uma seleção completa de pisos de alta qualidade com os melhores preços de Brasília. Também instalamos materiais fornecidos pelo cliente, caso prefira comprar por conta própria."
    },
    {
      question: "Como é feito o orçamento? É cobrado algo?",
      answer: "O orçamento é 100% gratuito! Agendamos uma visita técnica para medição e análise do ambiente. Em seguida, apresentamos proposta detalhada com valores, materiais, prazos e não há nenhum custo ou compromisso."
    },
    {
      question: "Atendem toda região de Brasília e cidades satélites?",
      answer: "Sim, atendemos Brasília e toda região metropolitana, incluindo Taguatinga, Ceilândia, Samambaia, Águas Claras, Gama, Sobradinho, Planaltina e demais cidades satélites. Entre em contato para confirmar o atendimento em sua localidade."
    },
    {
      question: "Qual a diferença entre piso flutuante e laminado?",
      answer: "O piso flutuante é instalado sem cola, 'flutuando' sobre o contrapiso com encaixe click. Já o laminado se refere ao material com camadas laminadas de madeira prensada. Ambos podem ser flutuantes. Explicamos todas as opções e diferenças na consulta técnica."
    },
    {
      question: "Fazem nivelamento e preparação do contrapiso?",
      answer: "Sim! Oferecemos serviço completo incluindo nivelamento, preparação do contrapiso, correção de imperfeições e aplicação de manta para garantir o melhor resultado final e durabilidade do seu piso."
    },
    {
      question: "Piso vinílico é resistente? Dura quanto tempo?",
      answer: "Sim! O piso vinílico de qualidade é muito resistente a riscos, impactos e tráfego intenso. Com manutenção adequada, dura de 15 a 25 anos. É 100% impermeável, ideal para áreas úmidas, e possui camada de proteção UV contra desbotamento."
    },
    {
      question: "Qual piso é melhor para área comercial em Brasília?",
      answer: "Para áreas comerciais, recomendamos pisos vinílicos de tráfego intenso (classe 43) ou laminados de alta resistência (AC5). São duráveis, suportam grande fluxo de pessoas e facilitam a limpeza. Atendemos lojas, escritórios, clínicas e empresas em todo o DF."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Perguntas Frequentes sobre Instalação de Pisos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre instalação de pisos vinílicos, laminados e carpetes em Brasília
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div 
                  key={index}
                  className="bg-card border rounded-lg shadow-sm overflow-hidden hover-lift"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="border-t pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Não encontrou sua pergunta? Entre em contato conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+sobre+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{ 
                  backgroundColor: "hsl(var(--gold-accent))", 
                  color: "hsl(var(--primary))"
                }}
              >
                Fale no WhatsApp
              </a>
              <a
                href="tel:+556192586209"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                style={{ 
                  borderColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary))"
                }}
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;