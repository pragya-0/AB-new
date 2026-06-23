import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import MetaTags from "../components/common/MetaTags";

import BioHero from "../components/bio/01-BioHero";
import RidingTigerSection from "../components/bio/02-RidingTigerSection";
import WhoIsArijit from "../components/bio/03-WhoIsArijit";
import StatsSection from "../components/bio/04-StatsSection";
import FounderEcosystem from "../components/bio/05-FounderEcosystem";
import VentureLogoStrip from "../components/bio/06-VentureLogoStrip";
import OriginStory from "../components/bio/07-OriginStory";
import JourneyTimeline from "../components/bio/08-JourneyTimeline";
import GlobalImpact from "../components/bio/09-GlobalImpact";
import InfluenceSection from "../components/bio/10-InfluenceSection";
import LatestSpeaksSection from "../components/bio/11-LatestSpeaksSection";
import MentoringSection from "../components/bio/12-MentoringSection";
import RolesSection from "../components/bio/13-RolesSection";
import StoriesRecognitionSection from "../components/bio/14-StoriesRecognitionSection";
import PressNewsSection from "../components/bio/15-PressNewsSection";

import GameWorldSection from "../components/bio/17-GameWorldSection";
import BooksSection from "../components/bio/18-BooksSection";
import IndustriesSection from "../components/bio/19-IndustriesSection";
import PhilanthropySection from "../components/bio/20-PhilanthropySection";
import LegacySection from "../components/bio/21-LegacySection";

import DrawingSection from "../components/bio/DrawingSection";
import PhotographySection from "../components/bio/PhotographySection";

export default function BioPage() {
  return (
    <main className="min-h-screen bg-[#03070d] font-sans text-[#07101f]">
      <MetaTags
        title="Arijit Bhattacharyya Biography | Entrepreneur, Investor, Speaker & Technologist"
        description="Official biography of Arijit Bhattacharyya, serial entrepreneur, technologist, angel investor, public speaker, author, mentor and founder of Virtualinfocom. Working across AI, games, VR, blockchain, education, investments, media entertainment and global ecosystems since 1998."
        image="/assets/bio/helicopter-bio.jpeg"
      />

      <Navbar />

      <BioHero />
      <StatsSection />
      <RidingTigerSection />
      <WhoIsArijit />

      <FounderEcosystem />
      <VentureLogoStrip />
      <OriginStory />
      <JourneyTimeline />

      <GlobalImpact />
      <InfluenceSection />
      <LatestSpeaksSection />

      <MentoringSection />
      <RolesSection />

      <StoriesRecognitionSection />
      <PressNewsSection />

      
      <DrawingSection />
      <GameWorldSection />
      <PhotographySection />

      <BooksSection />
      <IndustriesSection />
      <PhilanthropySection />
      <LegacySection />

      <Footer />
    </main>
  );
}