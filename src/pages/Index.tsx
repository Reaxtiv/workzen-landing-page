import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Web3Section from "@/components/Web3Section";
import WaitlistSection from "@/components/WaitlistSection";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Web3Section />
        <WaitlistSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;