import { Card } from "@/components/ui/card";
import { Users, CheckCircle, Clock, Shield } from "lucide-react";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-workzen/5 to-white relative">
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
            
            {/* Google Form */}
            <Card className="p-8 bg-white border-2 border-workzen/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-workzen mb-2">
                  Solicita tu Demo
                </h3>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </div>
              
              <div className="relative">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc2WbXCbcQSutGkHJf3r9fi0atusX_epgib-FwEypURBoUstQ/viewform?embedded=true" 
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Cargando formulario...
                </iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;