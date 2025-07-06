import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-ai-circuit/5"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10 animate-circuit-flow" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="h-6 w-6 text-primary mr-2 animate-neon-flicker" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Chatbots Personalizados
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Seu chatbot pronto,</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text animate-glow-pulse">
                bonito e com a sua identidade
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Criamos robôs personalizados com aparência profissional e funcionalidades inteligentes. 
              Você envia as informações e recebe seu chatbot pronto para usar e compartilhar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary-glow))] transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Solicitar Chatbot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 text-lg px-8 py-6"
              >
                Ver Exemplo
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground">Entrega</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Configuração</div>
              </div>
            </div>
          </div>

          {/* Robot Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src={heroRobot} 
                alt="AI Robot" 
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl shadow-2xl"
              />
              
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl blur-xl animate-glow-pulse"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse shadow-[0_0_20px_hsl(var(--primary))]"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-glow rounded-full animate-pulse delay-1000 shadow-[0_0_15px_hsl(var(--primary-glow))]"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent-glow rounded-full animate-pulse delay-500 shadow-[0_0_10px_hsl(var(--accent-glow))]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;