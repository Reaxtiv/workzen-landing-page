import { Button } from "@/components/ui/button";
import { Github, Twitter, ExternalLink, PlayCircle, FileText } from "lucide-react";
import workzenLogo from "@/assets/workzen-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={workzenLogo} 
              alt="WorkZen Logo" 
              className="w-10 h-10 rounded-full workzen-glow"
            />
            <h1 className="text-2xl font-bold text-gradient">WorkZen</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://workzen-theta.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-workzen transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo en Vivo</span>
            </a>
            
            <a 
              href="https://github.com/Reaxtiv/workzen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-workzen transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            
            <Button variant="outline" size="sm" className="border-workzen text-workzen hover:bg-workzen hover:text-primary-foreground">
              Comenzar
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;