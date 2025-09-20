import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Blocks, Wallet } from "lucide-react";

const Web3Section = () => {
  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-workzen/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Asegurado por</span>
            <br />
            <span className="text-gradient">Tecnología Blockchain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tus datos de productividad merecen el más alto nivel de seguridad. 
            WorkZen aprovecha la tecnología blockchain para asegurar inmutabilidad de datos, 
            transparencia y control completo del usuario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Shield className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Registros de Datos Inmutables
                </h3>
                <p className="text-muted-foreground">
                  Todas las métricas de productividad se almacenan en la cadena, creando 
                  registros a prueba de manipulación en los que puedes confiar completamente.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Wallet className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Autenticación MetaMask
                </h3>
                <p className="text-muted-foreground">
                  Inicio de sesión seguro y descentralizado usando tu wallet MetaMask. 
                  Sin contraseñas, sin violaciones de datos, solo seguridad Web3 pura.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Lock className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Privacidad Controlada por el Usuario
                </h3>
                <p className="text-muted-foreground">
                  Eres dueño completo de tus datos. Otorga y revoca permisos de acceso 
                  con la transparencia de los smart contracts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Blocks className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Integración de Smart Contracts
                </h3>
                <p className="text-muted-foreground">
                  Procesos automatizados e interacciones sin confianza impulsados por 
                  smart contracts aseguran confiabilidad y transparencia.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Interactive Card */}
          <div className="flex justify-center">
            <Card className="workzen-card p-8 max-w-md w-full text-center group hover:scale-105 transition-transform duration-500">
              <div className="mb-6">
                <div className="inline-flex p-6 bg-workzen/10 rounded-full mb-4 group-hover:bg-workzen/20 transition-colors">
                  <Shield className="w-12 h-12 text-workzen" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Potenciado por Web3
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experimenta el futuro del seguimiento de productividad seguro y descentralizado
                </p>
              </div>
              
              <Button 
                className="w-full bg-workzen hover:bg-workzen/90 text-primary-foreground font-semibold py-3 rounded-xl"
                size="lg"
              >
                Explorar Smart Contract
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                Construido en Ethereum • Asegurado por MetaMask
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;