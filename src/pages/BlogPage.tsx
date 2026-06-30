import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BlogHero from "../components/blog/01-BlogHero";
import FeaturedInsights from "../components/blog/02-FeaturedInsights";
import KnowledgeTracks from "../components/blog/03-KnowledgeTracks";
import BlogArchive from "../components/blog/04-BlogArchive";
import CurrentRelevance from "../components/blog/06-CurrentRelevance";
import BlogCTA from "../components/blog/07-BlogCTA";
import { blogSeo } from "../components/blog/blogData";

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

export default function BlogPage() {
  useEffect(() => {
    document.title = blogSeo.title;

    setMeta("description", blogSeo.description);
    setMeta("keywords", blogSeo.keywords);

    setPropertyMeta("og:title", blogSeo.title);
    setPropertyMeta("og:description", blogSeo.description);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:image", "/assets/blog/Arijit_Bhattacharyya-blog.jpg");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", blogSeo.title);
    setMeta("twitter:description", blogSeo.description);
    setMeta("twitter:image", "/assets/blog/Arijit_Bhattacharyya-blog.jpg");
  }, []);

  return (
    <>
      <MetaTags
            title={"Arijit Bhattacharyya Blog | AI, Startups, VR, Entrepreneurship & Leadership"}
            description={"Read legacy and current blog articles by Arijit Bhattacharyya on startups, venture capital, AI, blockchain, virtual reality, gaming, leadership, society, culture and entrepreneurship."}
            image={"/assets/blog/Arijit_Bhattacharyya-blog.jpg"}
          />

          <Navbar />

      <main className="min-h-screen bg-[#03070d]">
        <BlogHero />
        <FeaturedInsights />
        <KnowledgeTracks />
        <BlogArchive />
        <CurrentRelevance />
        <BlogCTA />
      </main>

      <Footer />
    </>
  );
}
