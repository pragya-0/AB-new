import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import VRHero from "../components/vr/01-VRHero";
import ImmersiveJourney from "../components/vr/02-ImmersiveJourney";
import IndustryApplications from "../components/vr/03-IndustryApplications";
import EngineeringExcellence from "../components/vr/04-EngineeringExcellence";
import EntertainmentUniverse from "../components/vr/05-EntertainmentUniverse";
import FutureXR from "../components/vr/06-FutureXR";

export default function VRPage() {
  return (
    <main className="min-h-screen bg-[#03070d] font-sans text-white">
      <MetaTags
        title="Virtual Reality, AR, XR & Immersive Technology | Arijit Bhattacharyya"
        description="Explore Arijit Bhattacharyya's work in virtual reality, augmented reality, XR, game development, simulation, immersive technology, 3D characters, VRML, Unity, Unreal, healthcare simulation, defence simulation and digital worlds since 1998."
        image="/assets/thought-leadership/metaverse-VR.jpg"
      />

      <Navbar />

      <VRHero />
      <ImmersiveJourney />
      <IndustryApplications />
      <EngineeringExcellence />
      <EntertainmentUniverse />
      <FutureXR />

      <Footer />
    </main>
  );
}