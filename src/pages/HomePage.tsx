import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";

import VenturesShowcaseSection from "../components/home/VenturesShowcaseSection";
import VenturesTimelineSection from "../components/home/VenturesTimelineSection";



import PressMediaSection from "../components/home/PressMediaSection";

import ThoughtLeadershipSection from "../components/home/ThoughtLeadershipSection";

import BooksSection from "../components/home/BooksSection";

import GlobalEventsSection from "../components/home/GlobalEventsSection";

import GovernmentLeadershipSection from "../components/home/GovernmentLeadershipSection";

import JourneyTimelineSection from "../components/home/JourneyTimelineSection";

import CreativeUniverseSection from "../components/home/CreativeUniverseSection";

import GameWorldsSection from "../components/home/GameWorldsSection";

import ModelsMediaUniverseSection from "../components/home/ModelsMediaUniverseSection";

import KnowledgeEcosystemSection from "../components/home/KnowledgeEcosystemSection";

import FinalCTA from "../components/home/FinalCTA";

import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutPreview />

      {/* Ventures */}
      <VenturesShowcaseSection />
      <VenturesTimelineSection />

      {/* Proof */}
      
      <PressMediaSection />

      {/* Books & Thought Leadership */}
      <ThoughtLeadershipSection />
      <BooksSection />

      {/* Speaking & Government */}
      <GlobalEventsSection />
      <GovernmentLeadershipSection />

      {/* Journey */}
      <JourneyTimelineSection />

      {/* Creative Universe */}
      <CreativeUniverseSection />

      {/* Games */}
      <GameWorldsSection />

      {/* Models & Media */}
      <ModelsMediaUniverseSection />

      {/* Podcast + Mentorship + Learning */}
      <KnowledgeEcosystemSection />

      {/* Legacy */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </>
  );
}