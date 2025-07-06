import { Target, Cog, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const steps = [
    {
      icon: Target,
      title: "1. Você nos envia",
      description: "Nome do bot, imagem/foto, cores preferidas e informações básicas sobre o que ele deve fazer."
    },
    {
      icon: Cog,
      title: "2. Nós criamos",
      description: "Personalizamos seu chatbot com visual único, treinamos com suas informações e configuramos tudo."
    },
    {
      icon: Users,
      title: "3. Você recebe",
      description: "Link de chat direto e link de API prontos para usar. Sem configurações, sem complicação."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ai-circuit/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Como Funciona
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Simples,</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
              Rápido e Pronto
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa missão é tornar a criação de chatbots algo simples, acessível e visualmente incrível. 
            Personalizamos o seu robô com a sua identidade, entregamos prontos para uso e você não precisa se preocupar com configurações técnicas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl group-hover:animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text mb-2 group-hover:animate-glow-pulse">
                200+
              </div>
              <div className="text-muted-foreground">Chatbots Criados</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text mb-2 group-hover:animate-glow-pulse">
                100%
              </div>
              <div className="text-muted-foreground">Personalizados</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text mb-2 group-hover:animate-glow-pulse">
                24h
              </div>
              <div className="text-muted-foreground">Tempo de Entrega</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text mb-2 group-hover:animate-glow-pulse">
                0
              </div>
              <div className="text-muted-foreground">Config. Necessária</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;