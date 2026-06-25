import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import VenturesHero from "../components/ventures/01-VenturesHero";
import VentureLogoEcosystem from "../components/ventures/02-VentureLogoEcosystem";
import FlagshipVentures from "../components/ventures/03-FlagshipVentures";
import ScaleUpMarketExpansion from "../components/ventures/04-ScaleUpMarketExpansion";
import InvestmentSupportCTA from "../components/ventures/05-InvestmentSupportCTA";

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-[#03070d] font-sans text-white">
     <MetaTags
  title="Angel Investment, Ventures & Market Expansion | Arijit Bhattacharyya"
  description="Explore Arijit Bhattacharyya's ventures, angel investment support, venture capital ecosystem, startup ecosystem, global market expansion, technology companies, gaming, AI, blockchain, entrepreneurship, media and international business."
  image="/assets/ventures/venture-virtualinfocom.png"
/>

      <Navbar />

      <VenturesHero />

      <VentureLogoEcosystem />

      <FlagshipVentures />

      <ScaleUpMarketExpansion />

      <InvestmentSupportCTA />

      <Footer />
    </main>
  );
}