import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Como Funciona", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-20 blur-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Nix Tech<span className="text-primary"> | IA</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all duration-300">
              Solicitar Chatbot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border border-primary/20 backdrop-blur-md animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all duration-300 mt-4">
                Solicitar Chatbot
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;