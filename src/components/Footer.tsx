import { Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/mspisosflutuantes.oficial?utm_source=qr&igsh=MXhkcTJuNTJtZzRleQ==",
      handle: "@mspisosflutuantes.oficial"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1B5rz6bxDR/",
      handle: "MS Pisos"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0",
      handle: "Contato Direto"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MS Pisos</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em pisos flutuantes, vinílicos e laminados. 
              Transformando ambientes com qualidade e confiança.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>(61) 9 2586-6209</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contato@mspisos.com.br</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{social.handle}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold">
              Pronto para transformar seu ambiente?
            </h3>
            <p className="text-primary-foreground/80">
              Entre em contato conosco e solicite seu orçamento gratuito
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="mt-4"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=556192586209&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+instala%C3%A7%C3%A3o+de+pisos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 MS Pisos. Todos os direitos reservados. Transformando ambientes com qualidade e confiança.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;