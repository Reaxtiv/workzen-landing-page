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
      title: "Intelligent Analytics",
      description: "Track team productivity with AI-powered insights and comprehensive dashboards that reveal meaningful patterns.",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description: "Promote healthy work-life balance with mindful productivity tracking and burnout prevention tools.",
      color: "text-pink-400"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your data is immutably secured on the blockchain, ensuring complete transparency and tamper-proof records.",
      color: "text-workzen"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based dashboards and collaborative features that bring teams together while respecting individual privacy.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "MetaMask Integration",
      description: "Seamless Web3 authentication through MetaMask wallet, bringing decentralized identity to workplace productivity.",
      color: "text-orange-400"
    },
    {
      icon: Brain,
      title: "Smart Insights",
      description: "AI-driven recommendations help optimize workflow patterns and identify opportunities for improvement.",
      color: "text-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor progress with detailed metrics that focus on sustainable productivity rather than just output.",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Advanced time tracking with focus on meaningful work and healthy boundaries between work and rest.",
      color: "text-indigo-400"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "End-to-end encryption ensures your sensitive productivity data remains completely private and secure.",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform how your team approaches productivity and wellness
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