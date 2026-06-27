import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import MentoringHero from "../components/mentoring/01-MentoringHero";
import MentoringAuthority from "../components/mentoring/02-MentoringAuthority";
import GuidanceAreas from "../components/mentoring/03-GuidanceAreas";
import MentoringServices from "../components/mentoring/04-MentoringServices";
import MentoringSessions from "../components/mentoring/05-MentoringSessions";
import MentoringCTA from "../components/mentoring/06-MentoringCTA";

const mentoringKeywords =
  "Arijit Bhattacharyya, Arijit Bhattacharya, Arijit Bhattacharjee, startup mentor India, startup mentor Kolkata, business mentor, business mentors for startups, startup ideas India, startup incubator, startup incubators in Kolkata, incubation programme, angel investor, local investor Kolkata, startup events Kolkata, entrepreneur, AI mentor, business scalability, fundraising, mentoring, startup advisor";

function MentoringSEO() {
  useEffect(() => {
    let keywordsMeta = document.head.querySelector<HTMLMetaElement>(
      'meta[name="keywords"]'
    );

    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }

    keywordsMeta.setAttribute("content", mentoringKeywords);
  }, []);

  return null;
}

export default function MentoringPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      <MetaTags
        title="Startup Mentor, Business Mentor & Advisory | Arijit Bhattacharyya"
        description="Arijit Bhattacharyya is a startup mentor, business mentor, entrepreneur, angel investor and technology advisor helping startups, SMEs, MSMEs and enterprises with fundraising, incubation, AI, digital transformation, business scalability, market expansion, innovation and global growth. Mentoring startups across India and international ecosystems."
        image="/assets/mentoring/banner3.jpg"
      />

      <MentoringSEO />

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