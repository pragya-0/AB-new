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
        title="VR, AR & AI | Virtual Reality in India & Kolkata | Arijit Bhattacharyya"
        description="Explore Arijit Bhattacharyya's work in Virtual Reality India, Virtual Reality Kolkata, VR, AR, AI, Mixed Reality, immersive technology, VRML, digital humans, game development, healthcare simulation, defence simulation, banking simulation, recruitment and training, ship and oil-rig simulation, smart cities, robotics, digital twins, Microsoft technologies, Nokia collaborations, Unity, Unreal, OpenGL, CUDA and immersive technology since 1998. Virtual Reality game developer in Kolkata, India."
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