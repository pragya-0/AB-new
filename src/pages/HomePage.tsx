import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import StatsExpertiseSection from "../components/home/StatsExpertiseSection";
import VenturesShowcaseSection from "../components/home/VenturesShowcaseSection";
import VenturesTimelineSection from "../components/home/VenturesTimelineSection";
import PressMediaSection from "../components/home/PressMediaSection";
import ThoughtLeadershipSection from "../components/home/ThoughtLeadershipSection";
import BooksSection from "../components/home/BooksSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <AboutPreview />

      {/* VENTURES */}
      <VenturesShowcaseSection />

      {/* VENTURE TIMELINE */}
      <VenturesTimelineSection />

      {/* STATS + EXPERTISE */}
      <StatsExpertiseSection />

      {/* RECOGNITION WALL */}
      <PressMediaSection />

      {/* THOUGHT LEADERSHIP */}
      <ThoughtLeadershipSection />

      {/* TARB — BOOKS & PUBLICATIONS */}
      <BooksSection />
    </>
  );
}