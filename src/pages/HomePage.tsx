import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";

import VenturesShowcaseSection from "../components/home/VenturesShowcaseSection";
import JourneyTimelineSection from "../components/home/JourneyTimelineSection";

import PressMediaSection from "../components/home/PressMediaSection";

import ThoughtLeadershipSection from "../components/home/ThoughtLeadershipSection";

import BooksSection from "../components/home/BooksSection";

import GlobalEventsSection from "../components/home/GlobalEventsSection";

import GovernmentLeadershipSection from "../components/home/GovernmentLeadershipSection";

import CreativeUniverseSection from "../components/home/CreativeUniverseSection";

import GameWorldsSection from "../components/home/GameWorldsSection";

import ModelsMediaUniverseSection from "../components/home/ModelsMediaUniverseSection";

import KnowledgeEcosystemSection from "../components/home/KnowledgeEcosystemSection";

import FinalCTA from "../components/home/FinalCTA";

import Footer from "../components/layout/Footer";

import MetaTags from "../components/common/MetaTags";
const homeSeo = {
  title:
    "Arijit Bhattacharyya, mentor, angel investor, international business developer, entrepreneur of Kolkata",

  metaTitle:
    "arijit bhattacharyya, international business development, market entry support, mentor",

  description:
    "arijit bhattacharyya, international business development, technology, AI, market entry, mentor. Arijit Bhattacharyya is a technology founder, startup mentor, angel investor, global speaker and Virtualinfocom founder working across AI, VR, AR, XR, blockchain, game development, media entertainment, World Leader Summit and international business ecosystems.",

  keywords:
    "arijit bhattacharyya, international business, technology, AI, game development, market entry support, mentor, angel investor, international business developer, entrepreneur of Kolkata, Arijit Bhattacharya, Arijit Bhattacharjee, Arijit India, Arijit Bhattacharyya innovator, Arijit Bhattacharyya entrepreneur, technology founder, global speaker, startup mentor, Virtualinfocom founder, VR, AR, XR, blockchain, World Leader Summit, GenAI, media entertainment, investment ecosystem",
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function HomePage() {
  useEffect(() => {
    const socialImage = "/assets/ventures/timeline-1998-virtualinfocom.png";

    document.title = homeSeo.title;

    setMeta("title", homeSeo.metaTitle);
    setMeta("description", homeSeo.description);
    setMeta("keywords", homeSeo.keywords);

    setPropertyMeta("og:title", homeSeo.title);
    setPropertyMeta("og:description", homeSeo.description);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:image", socialImage);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", homeSeo.title);
    setMeta("twitter:description", homeSeo.description);
    setMeta("twitter:image", socialImage);
  }, []);

  return (
    <>
      <MetaTags
            title={"Arijit Bhattacharyya | Founder, Mentor, Angel Investor, Public Speaker"}
            description={"Official website of Arijit Bhattacharyya, founder, entrepreneur, mentor, angel investor, technology speaker, startup advisor and global innovation leader from India."}
            image={"/assets/hero/speaking Image.jpeg"}
          />

          <Navbar />

      {/* Hero */}
      <HeroSection />
      <GovernmentLeadershipSection />

      {/* About */}
      <AboutPreview />

      {/* Ventures */}
      <VenturesShowcaseSection />

      {/* Founder Journey Timeline */}
      <JourneyTimelineSection />

      {/* Proof */}
      <PressMediaSection />

      {/* Books & Thought Leadership */}
      <ThoughtLeadershipSection />
      <BooksSection />

      {/* Speaking & Government */}
      <GlobalEventsSection />
      

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
