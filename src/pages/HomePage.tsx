import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import StatsExpertiseSection from "../components/home/StatsExpertiseSection";
import VenturesShowcaseSection from "../components/home/VenturesShowcaseSection";
import VenturesTimelineSection from "../components/home/VenturesTimelineSection";
import PressMediaSection from "../components/home/PressMediaSection";
import ThoughtLeadershipSection from "../components/home/ThoughtLeadershipSection";
import BooksSection from "../components/home/BooksSection";
import GlobalEventsSection from "../components/home/GlobalEventsSection";
import GovernmentLeadershipSection from "../components/home/GovernmentLeadershipSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutPreview />

      <VenturesShowcaseSection />

      <VenturesTimelineSection />

      <StatsExpertiseSection />

      <PressMediaSection />

      <ThoughtLeadershipSection />

      <BooksSection />

      <GlobalEventsSection />

      <GovernmentLeadershipSection />
    </>
  );
}