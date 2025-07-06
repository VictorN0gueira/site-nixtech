import { Bot, Zap, Network, Cog, Brain, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Criamos robôs conversacionais com personalidade única, treinados especificamente para suas necessidades e público-alvo.",
      features: ["IA Conversacional", "Respostas Inteligentes", "Aprendizado Contínuo"]
    },
    {
      icon: Brain,
      title: "Personalização Visual",
      description: "Cada chatbot tem aparência única com sua foto, nome, cores e identidade visual totalmente personalizados.",
      features: ["Design Personalizado", "Cores da Marca", "Foto/Avatar Customizado"]
    },
    {
      icon: Network,
      title: "Links Prontos",
      description: "Receba links de chat direto e API já configurados. Compartilhe ou integre em qualquer lugar sem complicação.",
      features: ["Link de Chat", "API Integrada", "Acesso Instantâneo"]
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Seu chatbot fica pronto em até 24 horas. Processo ágil desde o pedido até a entrega completa.",
      features: ["48h de Entrega", "Processo Ágil", "Pronto para Usar"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ai-circuit/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Chatbots que</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
              Representam Você
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criamos robôs personalizados com a sua identidade visual. 
            Receba links prontos para usar e compartilhar sem nenhuma configuração técnica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-slide-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl group-hover:animate-pulse"></div>
                </div>
                
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                 {/* <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  Ver Exemplo
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Seu chatbot personalizado está a um clique!
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Envie suas preferências e receba seu robô pronto para usar com visual único e funcionalidades inteligentes
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary-glow))] transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            Solicitar Meu Chatbot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;