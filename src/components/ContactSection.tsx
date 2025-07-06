import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Criaremos seu chatbot e enviaremos os links em até 24h.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@nixtech.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      info: "+55 (81) 99681-8208",
      description: "Seg - Sex: 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Entrega",
      info: "100% Digital",
      description: "Links por e-mail"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", href: "#", color: "hover:text-pink-400" },
    { name: "GitHub", href: "#", color: "hover:text-purple-400" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ai-circuit/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Solicite seu chatbot</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
              personalizado agora mesmo!
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Envie suas informações e preferências. Criaremos seu robô personalizado 
            e entregaremos os links prontos para usar em até 48 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Solicitar Chatbot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome ou empresa"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Descreva seu chatbot: nome, personalidade, cores preferidas, que tipo de conversas deve ter..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-input/50 border-primary/20 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary-glow))] transform hover:scale-105 transition-all duration-300 text-lg py-6"
                    >
                      Solicitar Chatbot
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 group"
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {info.info}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Siga-nos nas redes sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-muted-foreground ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;