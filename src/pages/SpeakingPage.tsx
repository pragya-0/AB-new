import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SpeakingHero from "../components/speaking/01-SpeakingHero";
import GlobalImpactStats from "../components/speaking/02-GlobalImpactStats";
import SpeakingTopics from "../components/speaking/03-SpeakingTopics";
import GlobalForums from "../components/speaking/04-GlobalForums";
import InstitutionsSection from "../components/speaking/05-InstitutionsSection";
import MediaAppearances from "../components/speaking/06-MediaAppearances";
import AdvisoryRoles from "../components/speaking/07-AdvisoryRoles";
import MentoringSection from "../components/speaking/08-MentoringSection";
import SpeakingTimeline from "../components/speaking/09-SpeakingTimeline";

// Example only if SEO component exists
// import MetaTags from "../components/common/MetaTags";

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      {/* Example SEO */}
      {/*
      <MetaTags
        title="Arijit Bhattacharyya | Global Speaker on AI, Startups, Blockchain & Innovation"
        description="Global keynote speaker, startup mentor and technology entrepreneur. Featured at Ghana Investor Summit, WISE USA, Axis Bank, XLRI, IIT Hyderabad, HULT Nepal, AI World Summit Singapore and global innovation forums."
      />
      */}

      <Navbar />

      <SpeakingHero />
      <GlobalImpactStats />

      <SpeakingTopics />
      <GlobalForums />
      <InstitutionsSection />
      <MediaAppearances />
      <AdvisoryRoles />
      <MentoringSection />
      <SpeakingTimeline />

      <Footer />
    </main>
  );
}