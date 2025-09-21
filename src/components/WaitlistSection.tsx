import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Clock, Shield } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-workzen mb-6">
              Únete a la Revolución del Bienestar Laboral
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sé parte de las primeras empresas en transformar cómo sus equipos abordan la productividad consciente. 
              Solicita acceso temprano y una demo personalizada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ¿Por qué unirte ahora?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-workzen/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-workzen" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Acceso Prioritario</h4>
                    <p className="text-muted-foreground">
                      Sé de los primeros en experimentar WorkZen cuando lancemos oficialmente.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-workzen/10 rounded-lg">
                    <Users className="w-6 h-6 text-workzen" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Demo Personalizada</h4>
                    <p className="text-muted-foreground">
                      Recibe una demostración adaptada a las necesidades específicas de tu empresa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-workzen/10 rounded-lg">
                    <Clock className="w-6 h-6 text-workzen" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Implementación Temprana</h4>
                    <p className="text-muted-foreground">
                      Comienza a mejorar el bienestar de tu equipo antes que tu competencia.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-workzen/10 rounded-lg">
                    <Shield className="w-6 h-6 text-workzen" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Condiciones Preferenciales</h4>
                    <p className="text-muted-foreground">
                      Accede a precios especiales y condiciones exclusivas para early adopters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Demo Request */}
            <Card className="p-8 workzen-card border-workzen/20 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-workzen mb-4">
                  Solicita tu Demo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Completa nuestro formulario y nos pondremos en contacto contigo en menos de 24 horas para agendar una demo personalizada.
                </p>
                
                <div className="bg-workzen/10 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-workzen mb-2">¿Qué incluye la demo?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Presentación personalizada de WorkZen</li>
                    <li>• Análisis de las necesidades de tu equipo</li>
                    <li>• Configuración y onboarding gratuito</li>
                    <li>• Precios especiales para early adopters</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-workzen hover:bg-workzen-dark text-white font-semibold px-12 py-6 text-lg rounded-xl w-full"
                asChild
              >
                <a href="https://forms.gle/ZQmRQkAet2uYGMPC7" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-3" size={24} />
                  Acceder al Formulario
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;