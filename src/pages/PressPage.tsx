import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DigitalFeaturesArchive from "../components/pressnews/03B-DigitalFeaturesArchive";
import PressHero from "../components/pressnews/01-PressHero";
import FeaturedStories from "../components/pressnews/02-FeaturedStories";
import MediaAuthorityGrid from "../components/pressnews/03-MediaAuthorityGrid";
import TVAndVideoCoverage from "../components/pressnews/04-TVAndVideoCoverage";
import InternationalCoverage from "../components/pressnews/05-InternationalCoverage";
import LegacyPressArchive from "../components/pressnews/06-LegacyPressArchive";
import PressCTA from "../components/pressnews/07-PressCTA";
import PressTechnologyArchive from "../components/pressnews/08-PressTechnologyArchive";

import { pressSeo } from "../components/pressnews/pressData";

import MetaTags from "../components/common/MetaTags";
function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export default function PressPage() {
  useEffect(() => {
    const socialImage =
      "/assets/pressnews/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpeg";

    document.title = pressSeo.title;


    setMeta("title", pressSeo.metaTitle);

    setMeta("description", pressSeo.description);
    setMeta("keywords", pressSeo.keywords);

    setPropertyMeta("og:title", pressSeo.title);
    setPropertyMeta("og:description", pressSeo.description);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:image", socialImage);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pressSeo.title);
    setMeta("twitter:description", pressSeo.description);
    setMeta("twitter:image", socialImage);
  }, []);

  return (
    <>
      <MetaTags
            title={"Arijit Bhattacharyya | Press News, Media Coverage, Interviews & Recognition"}
            description={"Press news, media coverage, interviews, TV features, international stories and public recognition of Arijit Bhattacharyya across entrepreneurship, technology, gaming, AI and business."}
            image={"/assets/pressnews/economic-times.jpg"}
          />

          <Navbar />

      <main className="min-h-screen bg-[#03070d]">
        <PressHero />
<FeaturedStories />
<MediaAuthorityGrid />
<DigitalFeaturesArchive />
<TVAndVideoCoverage />
<InternationalCoverage />
<LegacyPressArchive />
<PressCTA />
<PressTechnologyArchive />

      </main>

      <Footer />
    </>
  );
}
