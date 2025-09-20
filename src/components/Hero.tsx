import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Heart } from "lucide-react";
import workzenLogo from "@/assets/workzen-logo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-workzen/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-workzen/5 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={workzenLogo} 
              alt="WorkZen Logo" 
              className="w-24 h-24 rounded-full workzen-glow animate-float"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">WorkZen</span>
            <br />
            <span className="text-foreground/90">Productividad Consciente</span>
            <br />
            <span className="text-workzen">Encuentra Web3</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Potencia tu equipo con seguimiento inteligente de productividad y analíticas seguras con blockchain. 
            <span className="text-workzen font-medium"> Trabaja mejor. Trabaja humano.</span>
          </p>
          
          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border workzen-card">
              <BarChart3 size={16} className="text-workzen" />
              <span className="text-sm">Análisis Inteligente</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border workzen-card">
              <Heart size={16} className="text-workzen" />
              <span className="text-sm">Balance Vida-Trabajo</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border workzen-card">
              <Shield size={16} className="text-workzen" />
              <span className="text-sm">Seguro Web3</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-workzen hover:bg-workzen/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl workzen-glow"
              asChild
            >
              <a href="https://workzen-theta.vercel.app" target="_blank" rel="noopener noreferrer">
                Probar Demo
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-workzen text-workzen hover:bg-workzen hover:text-primary-foreground px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="https://github.com/Reaxtiv/workzen" target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;