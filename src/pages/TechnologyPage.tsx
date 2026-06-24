import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import TechnologyHero from "../components/technology/01-TechnologyHero";
import TechnologyDomains from "../components/technology/02-TechDomains";
import InnovationTimeline from "../components/technology/03-InnovationTimeline";
import TechnologyImpact from "../components/technology/04-ProductsPlatforms";
import FutureTechVision from "../components/technology/05-FutureTechVision";
import TechnologyCTA from "../components/technology/06-TechnologyCTA";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      <Navbar />
      <TechnologyHero />
      <TechnologyDomains />
      <InnovationTimeline />
      <TechnologyImpact />
      <FutureTechVision />
      <TechnologyCTA />
      <Footer />
    </main>
  );
}