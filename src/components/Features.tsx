import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Heart, 
  Shield, 
  Users, 
  Zap, 
  Lock,
  TrendingUp,
  Brain,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Análisis Inteligente",
      description: "Rastrea la productividad del equipo con insights impulsados por IA y paneles integrales que revelan patrones significativos.",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Enfoque en Bienestar",
      description: "Promueve un equilibrio saludable entre vida y trabajo con seguimiento consciente de productividad y herramientas de prevención de agotamiento.",
      color: "text-pink-400"
    },
    {
      icon: Shield,
      title: "Seguridad Blockchain",
      description: "Tus datos están asegurados de forma inmutable en la blockchain, garantizando transparencia completa y registros a prueba de manipulación.",
      color: "text-workzen"
    },
    {
      icon: Users,
      title: "Colaboración en Equipo",
      description: "Paneles basados en roles y características colaborativas que unen a los equipos respetando la privacidad individual.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Integración MetaMask",
      description: "Autenticación Web3 fluida a través de MetaMask wallet, trayendo identidad descentralizada a la productividad laboral.",
      color: "text-orange-400"
    },
    {
      icon: Brain,
      title: "Insights Inteligentes",
      description: "Recomendaciones impulsadas por IA ayudan a optimizar patrones de flujo de trabajo e identificar oportunidades de mejora.",
      color: "text-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Seguimiento de Rendimiento",
      description: "Monitorea el progreso con métricas detalladas que se enfocan en productividad sostenible en lugar de solo producción.",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Gestión de Tiempo",
      description: "Seguimiento avanzado de tiempo enfocado en trabajo significativo y límites saludables entre trabajo y descanso.",
      color: "text-indigo-400"
    },
    {
      icon: Lock,
      title: "Privacidad Primero",
      description: "El cifrado de extremo a extremo asegura que tus datos sensibles de productividad permanezcan completamente privados y seguros.",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Características Poderosas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para transformar cómo tu equipo aborda la productividad y el bienestar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="workzen-card p-8 feature-glow relative group cursor-pointer hover:border-workzen/50"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-background/50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className={feature.color} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;