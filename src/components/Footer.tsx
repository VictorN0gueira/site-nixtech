import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    "Chatbots Personalizados",
    "Design Customizado",
    "Links Prontos",
    "Entrega em 48h"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "GitHub", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-ai-circuit/10 border-t border-primary/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-20 blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-foreground">Nix Tech<span className="text-primary"> | IA</span></span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Criamos chatbots personalizados com a sua identidade visual. 
              Entregamos links prontos para usar sem nenhuma configuração técnica.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@nixtech.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+55 (81) 9681-8208</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Vitória de Santo Antão, PE - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 relative">
              Links Rápidos
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 relative">
              Serviços
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 relative">
              Redes Sociais
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 transform"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 mb-12 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Receba exemplos de chatbots, dicas de personalização e novidades sobre IA conversacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-input/50 border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-lg hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all duration-300 hover:scale-105 transform font-medium">
                Inscrever-se
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nix Tech | IA. Todos os direitos reservados.
            </div>
            
            {/* <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-20 left-10 w-1 h-1 bg-primary-glow rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-accent-glow rounded-full animate-pulse delay-500"></div>
    </footer>
  );
};

export default Footer;