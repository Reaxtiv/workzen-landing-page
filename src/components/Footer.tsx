import { Github, Twitter, ExternalLink, Heart } from "lucide-react";
import workzenLogo from "@/assets/workzen-logo.jpg";

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
                className="w-8 h-8 rounded-full"
              />
              <h3 className="text-xl font-bold text-gradient">WorkZen</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Empowering teams with mindful productivity and Web3-secured analytics. 
              Transform how your team approaches work-life balance with blockchain technology.
            </p>
            <p className="text-workzen text-sm font-medium mt-3">
              Work better. Work human.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://workzen-theta.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-workzen transition-colors flex items-center space-x-1"
                >
                  <span>Live Demo</span>
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
                  <span>Documentation</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">Features</span>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">API</span>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Reaxtiv/workzen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/50 rounded-lg hover:bg-workzen/10 hover:text-workzen transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-background/50 rounded-lg hover:bg-workzen/10 hover:text-workzen transition-all duration-300 opacity-50 cursor-not-allowed"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 WorkZen. Built with blockchain technology for the future of work.
          </p>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="text-workzen" />
            <span>for productive teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;