import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import StatsExpertiseSection from "../components/home/StatsExpertiseSection";
import PressMediaSection from "../components/home/PressMediaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <StatsExpertiseSection />
       <PressMediaSection />
    </>
  );
}