import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { CoreInfrastructure } from "@/components/landing/CoreInfrastructure";
import { ProtocolSequence } from "@/components/landing/ProtocolSequence";
import { GlobalConsciousness } from "@/components/landing/GlobalConsciousness";
import { Footer } from "@/components/landing/Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Hero />
      <StatsBar />
      <CoreInfrastructure />
      <ProtocolSequence />
      <GlobalConsciousness />
      <Footer />
    </div>
  );
}
