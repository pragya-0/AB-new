import {  useEffect } from "react";

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

import MetaTags from "../components/common/MetaTags";
const pageTitle =
  "Arijit Bhattacharyya | Public Speaker in India, Keynote Speaker, Moderator & Global Panelist";

const pageDescription =
  "Arijit Bhattacharyya is a public speaker in India, keynote speaker, moderator, resource person and global panelist on AI, blockchain, virtual reality, game development, startups, investment, entrepreneurship and future technology.";

const pageKeywords =
  "public speakers in india, top 10 motivational technology speakers in india, Arijit Bhattacharyya speaker, Arijit Bhattacharya, Arijit Bhattacharjee, keynote speaker India, motivational speakers in India, technology speaker India, AI speaker, blockchain speaker, virtual reality speaker, game development speaker, startup speaker, global panelist, resource person, moderator";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");

    if (attributes.name) {
      element.setAttribute("name", attributes.name);
    }

    if (attributes.property) {
      element.setAttribute("property", attributes.property);
    }

    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function SpeakingSEO() {
  useEffect(() => {
    const canonicalUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "https://www.arijitbhattacharyya.com/latest-speeks.html";

    document.title = pageTitle;

    upsertMeta('meta[name="title"]', {
      name: "title",
      content:
        "public speakers in india, top 10 motivational technology speakers in india",
    });

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: pageDescription,
    });

    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: pageKeywords,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: pageDescription,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: pageDescription,
    });

    upsertCanonical(canonicalUrl);
  }, []);

  return null;
}

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      <SpeakingSEO />

      <MetaTags
            title={"Public Speakers in India | AI, Innovation & Global Leadership Speaker"}
            description={"Invite Arijit Bhattacharyya for keynote speaking, AI, technology, startup, innovation, investment, entrepreneurship and global leadership forums across India and international platforms."}
            image={"/assets/speaking/ghana.jpeg"}
          />

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
