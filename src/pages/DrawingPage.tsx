import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import DrawingHero from "../components/drawing/01-DrawingHero";
import PencilWorks from "../components/drawing/02-PencilWorks";
import WaterColorGallery from "../components/drawing/03-WaterColorGallery";
import ComicsUniverse from "../components/drawing/04-ComicsUniverse";
import DigitalArt from "../components/drawing/05-DigitalArt";
import ArtisticJourney from "../components/drawing/06-ArtisticJourney";

export default function DrawingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#03070d]">
      <MetaTags
        title="Drawing | Pencil Works, Water Color, Comics & Digital Superhero | Arijit Bhattacharyya"
        description="Drawing portfolio of Arijit Bhattacharyya featuring pencil works, water color paintings, comics, digital superhero art, Indian artist sketches, character design and visual storytelling."
        image="/assets/Drawing/Pencil/susmita-sen.jpg"
      />

      <Navbar />
      <DrawingHero />
      <PencilWorks />
      <WaterColorGallery />
      <ComicsUniverse />
      <DigitalArt />
      <ArtisticJourney />
      <Footer />
    </main>
  );
}
