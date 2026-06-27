import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import TechnologyHero from "../components/technology/01-TechnologyHero";
import TechnologyDomains from "../components/technology/02-TechDomains";
import InnovationTimeline from "../components/technology/03-InnovationTimeline";
import TechnologyImpact from "../components/technology/04-ProductsPlatforms";
import FutureTechVision from "../components/technology/05-FutureTechVision";
import TechnologyCTA from "../components/technology/06-TechnologyCTA";

const pageTitle =
  "Arijit Bhattacharyya | Technology Entrepreneur, AI, VR, AR, Blockchain & Gaming Innovator";

const pageDescription =
  "Arijit Bhattacharyya is a technology entrepreneur and innovator working across AI, GenAI, VR, AR, XR, blockchain, gaming, digital humans, smart cities, IoT, fintech, deeptech and enterprise technology ecosystems since 1998.";

const pageKeywords =
  "Arijit Bhattacharyya technology, Arijit Bhattacharya AI, Arijit Bhattacharjee innovator, Arijit India technology entrepreneur, AI speaker India, GenAI, VR AR XR, blockchain, game development, deeptech, IoT, digital twins, smart cities, fintech, Microsoft, Nokia, Intel, Google Singapore, Axis Bank, ADB, McKinsey";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");

    if (attributes.name) element.setAttribute("name", attributes.name);
    if (attributes.property) element.setAttribute("property", attributes.property);

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

function TechnologySEO() {
  useEffect(() => {
    const canonicalUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "https://www.arijitbhattacharyya.com/technology.html";

    document.title = pageTitle;

    upsertMeta('meta[name="title"]', {
      name: "title",
      content: pageTitle,
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

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#03070d] text-white">
      <TechnologySEO />

      <Navbar />

      <TechnologyHero />
      <TechnologyDomains />
      <InnovationTimeline />
      <TechnologyImpact />
      <FutureTechVision />
      <TechnologyCTA />

      <Footer />
    </main>
  );
}