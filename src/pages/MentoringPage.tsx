import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import MentoringHero from "../components/mentoring/01-MentoringHero";
import MentoringAuthority from "../components/mentoring/02-MentoringAuthority";
import GuidanceAreas from "../components/mentoring/03-GuidanceAreas";
import MentoringServices from "../components/mentoring/04-MentoringServices";
import MentoringSessions from "../components/mentoring/05-MentoringSessions";
import MentoringCTA from "../components/mentoring/06-MentoringCTA";

export default function MentoringPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      <MetaTags
        title="Mentoring & Advisory | Arijit Bhattacharyya"
        description="Business scalability expert, startup mentor, AI strategist, investor advisor and technology consultant helping founders, SMEs, MSMEs and enterprises scale globally through innovation, fundraising, market expansion and digital transformation."
        image="/assets/mentoring/banner3.jpg"
      />

      <Navbar />

      <MentoringHero />

      <MentoringAuthority />

      <GuidanceAreas />

      <MentoringServices />

      <MentoringSessions />

      <MentoringCTA />

      <Footer />
    </main>
  );
}