import { Github, Twitter, ExternalLink, Heart } from "lucide-react";
import workzenLogo from "@/assets/workzen-logo-icon.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={workzenLogo} 
                alt="WorkZen Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-xl font-bold text-workzen">WorkZen</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Potenciando equipos con productividad consciente y análisis asegurados con Web3. 
              Transforma cómo tu equipo aborda el equilibrio vida-trabajo con tecnología blockchain.
            </p>
            <p className="text-workzen text-sm font-medium mt-3">
              Trabaja mejor. Trabaja humano.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://workzen-theta.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-workzen transition-colors flex items-center space-x-1"
                >
                  <span>Demo en Vivo</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Reaxtiv/workzen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-workzen transition-colors flex items-center space-x-1"
                >
                  <span>Documentación</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">Características</span>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">API</span>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conectar</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Reaxtiv/workzen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/50 rounded-lg hover:bg-workzen/10 hover:text-workzen transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://x.com/WorkZen_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/50 rounded-lg hover:bg-workzen/10 hover:text-workzen transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Tema:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 WorkZen. Construido con tecnología blockchain para el futuro del trabajo.
          </p>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>Hecho con</span>
            <Heart size={14} className="text-workzen" />
            <span>para equipos productivos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;