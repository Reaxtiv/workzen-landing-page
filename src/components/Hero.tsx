import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Heart, Users } from "lucide-react";
import workzenLogo from "@/assets/workzen-logo-icon.png";

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
          <div className="mb-12 flex justify-center">
            <img 
              src={workzenLogo} 
              alt="WorkZen Logo" 
              className="w-32 h-32 animate-float"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-workzen">WorkZen</span>
            <br />
            <span className="text-foreground">Productividad Consciente</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Impulsa el bienestar de tu equipo con herramientas que promueven un equilibrio real entre productividad y salud laboral. 
            Ofrecemos datos claros y seguros para que las personas trabajen con más confianza, motivación y satisfacción.
            <span className="text-workzen font-medium block mt-2"> Trabaja mejor. Trabaja humano.</span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-workzen hover:bg-workzen-dark text-white font-semibold px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="#waitlist">
                <Users className="mr-2" size={20} />
                Únete a la Lista de Espera
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-workzen border-2 border-workzen hover:bg-workzen hover:text-white font-semibold px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="https://workzen-theta.vercel.app" target="_blank" rel="noopener noreferrer">
                Probar Demo
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;