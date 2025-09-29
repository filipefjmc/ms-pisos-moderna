import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana C.",
      location: "São Paulo",
      text: "Reformamos nosso apartamento com a MS Pisos e o resultado foi impecável! Profissionais pontuais e extremamente capazes.",
      rating: 5
    },
    {
      name: "Carlos M.",
      profession: "Arquiteto",
      text: "Ótimo custo-benefício e atendimento transparente. Recomendo!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Confiança construída através da qualidade e dedicação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-warm border relative hover-lift"
            >
              <div className="absolute -top-4 left-6">
                <div className="bg-primary p-3 rounded-full">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location || testimonial.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;