import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ExternalLink, 
  Github, 
  Twitter, 
  PlayCircle, 
  FileText,
  Rocket,
  Code,
  Video
} from "lucide-react";

const LinksSection = () => {
  const links = [
    {
      title: "Demo en Vivo",
      description: "Experimenta WorkZen en acción con nuestro demo interactivo",
      icon: Rocket,
      url: "https://workzen-theta.vercel.app",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Repositorio GitHub",
      description: "Explora el código fuente abierto y contribuye",
      icon: Github,
      url: "https://github.com/Reaxtiv/workzen",
      color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      buttonColor: "bg-gray-700 hover:bg-gray-800"
    },
    {
      title: "Seguir en X",
      description: "Mantente actualizado con los últimos desarrollos de WorkZen",
      icon: Twitter,
      url: "https://x.com/WorkZen_app",
      color: "bg-blue-400/10 text-blue-400 border-blue-400/20",
      buttonColor: "bg-blue-400 hover:bg-blue-500"
    },
    {
      title: "Smart Contract",
      description: "Ve el smart contract de blockchain que potencia WorkZen",
      icon: FileText,
      url: "https://sepolia.etherscan.io/address/0xa08751def5106fd658ce18e10bae948f8cdbfef2",
      color: "bg-workzen/10 text-workzen border-workzen/20",
      buttonColor: "bg-workzen hover:bg-workzen/90"
    },
    {
      title: "Video Demo",
      description: "Tutorial completo de las características de WorkZen",
      icon: PlayCircle,
      url: "https://youtu.be/zp8XorDPcoo",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      buttonColor: "bg-red-500 hover:bg-red-600"
    },
    {
      title: "Documentación",
      description: "Documentación técnica completa y referencias de API",
      icon: Code,
      url: "https://github.com/Reaxtiv/workzen#readme",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      buttonColor: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Explora WorkZen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sumérgete más en la plataforma con nuestros recursos integrales y demostraciones en vivo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const isActive = link.url !== "#";
            
            return (
              <Card 
                key={index}
                className={`workzen-card p-6 group hover:border-workzen/50 transition-all duration-300 ${
                  !isActive ? 'opacity-75' : ''
                }`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {link.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {link.description}
                  </p>
                  
                  <Button 
                    className={`w-full ${link.buttonColor} text-white font-medium py-2 rounded-lg transition-all duration-300 ${
                      !isActive ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={!isActive}
                    asChild={isActive}
                  >
                    {isActive ? (
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center justify-center space-x-2">
                          <span>{link.title === "Demo en Vivo" ? "Probar Ahora" : link.title === "Repositorio GitHub" ? "Ver Código" : "Visitar"}</span>
                          <ExternalLink size={16} />
                        </span>
                      </a>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Próximamente</span>
                      </span>
                    )}
                  </Button>
                  
                  {!isActive && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Enlace estará disponible pronto
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;