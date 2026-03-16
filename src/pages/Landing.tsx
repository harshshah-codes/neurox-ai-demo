import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { CoreInfrastructure } from "@/components/landing/CoreInfrastructure";
import { ProtocolSequence } from "@/components/landing/ProtocolSequence";
import { GlobalConsciousness } from "@/components/landing/GlobalConsciousness";
import { Footer } from "@/components/landing/Footer";

export function Landing() {
  return (
    <>
      <Helmet>
        <title>NEUROX — Precision Intelligence for the Neural Age</title>
        <meta name="description" content="The world's first decentralized neural processing layer. Harness synchronized cognitive workflows with millisecond latency." />
        <meta property="og:url" content="https://neurox-demo.vercel.app/" />
      </Helmet>
      <div className="min-h-screen bg-bg-base">
        <Hero />
        <StatsBar />
        <CoreInfrastructure />
        <ProtocolSequence />
        <GlobalConsciousness />
        <Footer />
      </div>
    </>
  );
}
