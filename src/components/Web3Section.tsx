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
            <span className="text-foreground">Secured by</span>
            <br />
            <span className="text-gradient">Blockchain Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your productivity data deserves the highest level of security. 
            WorkZen leverages blockchain technology to ensure data immutability, 
            transparency, and complete user control.
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
                  Immutable Data Records
                </h3>
                <p className="text-muted-foreground">
                  All productivity metrics are stored on-chain, creating tamper-proof 
                  records that you can trust completely.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Wallet className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  MetaMask Authentication
                </h3>
                <p className="text-muted-foreground">
                  Secure, decentralized login using your MetaMask wallet. 
                  No passwords, no data breaches, just pure Web3 security.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Lock className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  User-Controlled Privacy
                </h3>
                <p className="text-muted-foreground">
                  You own your data completely. Grant and revoke access permissions 
                  with the transparency of smart contracts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-workzen/10 rounded-lg">
                <Blocks className="w-6 h-6 text-workzen" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Smart Contract Integration
                </h3>
                <p className="text-muted-foreground">
                  Automated processes and trustless interactions powered by 
                  smart contracts ensure reliability and transparency.
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
                  Web3 Powered
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience the future of secure, decentralized productivity tracking
                </p>
              </div>
              
              <Button 
                className="w-full bg-workzen hover:bg-workzen/90 text-primary-foreground font-semibold py-3 rounded-xl"
                size="lg"
              >
                Explore Smart Contract
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                Built on Ethereum • Secured by MetaMask
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;