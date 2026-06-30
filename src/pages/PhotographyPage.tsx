import MetaTags from "../components/common/MetaTags";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PhotographyHero from "../components/photography/01-PhotographyHero";
import PhotographyPhilosophy from "../components/photography/02-PhotographyPhilosophy";
import FeaturedJourneys from "../components/photography/03-FeaturedJourneys";
import TravelSection from "../components/photography/04-TravelSection";
import NatureSection from "../components/photography/05-NatureSection";
import FoodSection from "../components/photography/06-FoodSection";
import ModelsSection from "../components/photography/07-ModelsSection";
import ArabicSection from "../components/photography/08-ArabicSection";
import HimalayanSection from "../components/photography/09-HimalayanSection";
import KualaLumpurSection from "../components/photography/10-KualaLumpurSection";
import SilcharSection from "../components/photography/11-SilcharSection";
import ClosingSection from "../components/photography/13-ClosingSection";

export default function PhotographyPage() {
  return (
    <>
      <MetaTags
        title="Photography | Travel, Nature, Food & People | Arijit Bhattacharyya"
        description="Photography portfolio of Arijit Bhattacharyya featuring travel photography, nature, food, models, people, cultural journeys, Himalayan landscapes, Kuala Lumpur, Silchar, Arabic food stories and visual storytelling."
        image="/assets/Photography/travelling/finland.jpg"
      />

      <Navbar />

      <main className="bg-white text-[#081120] overflow-x-hidden">
        <PhotographyHero />
        <PhotographyPhilosophy />
        <FeaturedJourneys />
        <TravelSection />
        <NatureSection />
        <FoodSection />
        <ModelsSection />
        <ArabicSection />
        <HimalayanSection />
        <KualaLumpurSection />
        <SilcharSection />
        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}