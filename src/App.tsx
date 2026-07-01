import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { legacyRedirects } from "./data/legacyRedirects";
import LegacyHead from "./components/common/LegacyHead";

const HomePage = lazy(() => import("./pages/HomePage"));
const BioPage = lazy(() => import("./pages/BioPage"));
const SpeakingPage = lazy(() => import("./pages/SpeakingPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));
const MentoringPage = lazy(() => import("./pages/MentoringPage"));
const VenturesPage = lazy(() => import("./pages/VenturesPage"));
const DrawingPage = lazy(() => import("./pages/DrawingPage"));
const VRPage = lazy(() => import("./pages/VRPage"));
const MediaEntertainmentPage = lazy(
  () => import("./pages/MediaEntertainmentPage")
);
const PhotographyPage = lazy(() => import("./pages/PhotographyPage"));
const PressPage = lazy(() => import("./pages/PressPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const BooksPage = lazy(() => import("./pages/BooksPage"));
const ContactRedirect = lazy(() => import("./pages/ContactRedirect"));

function normalizeLegacyTarget(to: string) {
  return to.trim().replace(/\/$/, "");
}

function LegacyAliasPage({ to }: { to: string }) {
  const target = normalizeLegacyTarget(to);

  if (
    target === "" ||
    target === "/" ||
    target === "/index.html" ||
    target === "/home" ||
    target === "/home.html"
  ) {
    return <HomePage />;
  }

  if (target === "/bio" || target === "/bio.html") {
    return <BioPage />;
  }

  if (
    target === "/speaking" ||
    target === "/speaking.html" ||
    target === "/latest-speaks" ||
    target === "/latest-speaks.html" ||
    target === "/latest-speeks" ||
    target === "/latest-speeks.html" ||
    target.includes("latest-spe")
  ) {
    return <SpeakingPage />;
  }

  if (
    target === "/technology" ||
    target === "/technology.html" ||
    target === "/tech-work" ||
    target === "/tech-work.html"
  ) {
    return <TechnologyPage />;
  }

  if (target === "/mentoring" || target === "/mentoring.html") {
    return <MentoringPage />;
  }

  if (
    target === "/vr" ||
    target === "/vr.html" ||
    target === "/virtual-reality" ||
    target === "/virtual-reality.html" ||
    target.includes("virtual-reality")
  ) {
    return <VRPage />;
  }

  if (
    target === "/ecosystem" ||
    target === "/ecosystem.html" ||
    target === "/ventures" ||
    target === "/ventures.html" ||
    target === "/investments" ||
    target === "/investments.html"
  ) {
    return <VenturesPage />;
  }

  if (
    target === "/media-entertainment" ||
    target === "/media-entertainment.html" ||
    target === "/games" ||
    target === "/games.html" ||
    target === "/animation" ||
    target === "/animation.html"
  ) {
    return <MediaEntertainmentPage />;
  }

  if (
    target === "/drawing" ||
    target === "/drawing.html" ||
    target === "/creative" ||
    target === "/creative.html"
  ) {
    return <DrawingPage />;
  }

  if (
    target === "/photography" ||
    target === "/photography.html" ||
    target === "/gallery" ||
    target === "/gallery.html"
  ) {
    return <PhotographyPage />;
  }

  if (
    target === "/press" ||
    target === "/press.html" ||
    target === "/press-news" ||
    target === "/press-news.html" ||
    target === "/media" ||
    target === "/media.html"
  ) {
    return <PressPage />;
  }

  if (target === "/books" || target === "/books.html") {
    return <BooksPage />;
  }

  if (
    target === "/contact" ||
    target === "/contact.html" ||
    target.includes("contact")
  ) {
    return <ContactRedirect />;
  }

  if (target === "/blog" || target === "/blog.html") {
    return <BlogPage />;
  }

  if (target.startsWith("/blog/")) {
    return <BlogArticlePage />;
  }

  return <BlogPage />;
}

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#03070d] text-white">
      <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
        Loading
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home / Legacy Index */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home.html" element={<HomePage />} />

          {/* Bio / Founder / Philanthropy Legacy */}
          <Route path="/bio" element={<BioPage />} />
          <Route path="/bio.html" element={<BioPage />} />
          <Route path="/founder-and-ceo.html" element={<BioPage />} />
          <Route path="/philanthropy.html" element={<BioPage />} />

          {/* Speaking / Latest Speaks / Legacy Typo Preservation */}
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/speaking.html" element={<SpeakingPage />} />
          <Route path="/latest-speaks" element={<SpeakingPage />} />
          <Route path="/latest-speaks.html" element={<SpeakingPage />} />
          <Route path="/latest-speeks" element={<SpeakingPage />} />
          <Route path="/latest-speeks.html" element={<SpeakingPage />} />

          {/* Technology / Tech Work */}
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/technology.html" element={<TechnologyPage />} />
          <Route path="/tech-work" element={<TechnologyPage />} />
          <Route path="/tech-work.html" element={<TechnologyPage />} />

          {/* Mentoring / Entrepreneurship Legacy */}
          <Route path="/mentoring" element={<MentoringPage />} />
          <Route path="/mentoring.html" element={<MentoringPage />} />
          <Route
            path="/entrepreneurship-employment.html"
            element={<MentoringPage />}
          />

          {/* VR / Virtual Reality Legacy */}
          <Route path="/vr" element={<VRPage />} />
          <Route path="/vr.html" element={<VRPage />} />
          <Route path="/virtual-reality" element={<VRPage />} />
          <Route path="/virtual-reality.html" element={<VRPage />} />
          <Route path="/datascience-virtual-reality.html" element={<VRPage />} />
          <Route
            path="/how-to-make-money-from-virtualreality.html"
            element={<VRPage />}
          />

          {/* Media Entertainment / Games / Animation */}
          <Route
            path="/media-entertainment"
            element={<MediaEntertainmentPage />}
          />
          <Route
            path="/media-entertainment.html"
            element={<MediaEntertainmentPage />}
          />
          <Route path="/games" element={<MediaEntertainmentPage />} />
          <Route path="/games.html" element={<MediaEntertainmentPage />} />
          <Route path="/animation" element={<MediaEntertainmentPage />} />
          <Route path="/animation.html" element={<MediaEntertainmentPage />} />

          {/* Ecosystem / Ventures / Investments */}
          <Route path="/ecosystem" element={<VenturesPage />} />
          <Route path="/ecosystem.html" element={<VenturesPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/ventures.html" element={<VenturesPage />} />
          <Route path="/investments" element={<VenturesPage />} />
          <Route path="/investments.html" element={<VenturesPage />} />
          <Route
            path="/international-partnership.html"
            element={<VenturesPage />}
          />

          {/* Drawing / Creative */}
          <Route path="/drawing" element={<DrawingPage />} />
          <Route path="/drawing.html" element={<DrawingPage />} />
          <Route path="/creative" element={<DrawingPage />} />
          <Route path="/creative.html" element={<DrawingPage />} />

          {/* Photography / Gallery */}
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography.html" element={<PhotographyPage />} />
          <Route path="/gallery" element={<PhotographyPage />} />
          <Route path="/gallery.html" element={<PhotographyPage />} />

          {/* Press / Press News / Media */}
          <Route path="/press" element={<PressPage />} />
          <Route path="/press.html" element={<PressPage />} />
          <Route path="/press-news" element={<PressPage />} />
          <Route path="/press-news.html" element={<PressPage />} />
          <Route path="/media" element={<PressPage />} />
          <Route path="/media.html" element={<PressPage />} />

          {/* Books */}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books.html" element={<BooksPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactRedirect />} />
          <Route path="/contact.html" element={<ContactRedirect />} />
          <Route path="/contact-arijit" element={<ContactRedirect />} />
          <Route path="/contact-arijit.html" element={<ContactRedirect />} />
          <Route path="/contact-me" element={<ContactRedirect />} />
          <Route path="/contact-me.html" element={<ContactRedirect />} />

          {/* Podcast / YouTube Temporary Safe Routes */}
          <Route path="/podcast" element={<HomePage />} />
          <Route path="/podcast.html" element={<HomePage />} />
          <Route path="/youtube" element={<HomePage />} />
          <Route path="/youtube.html" element={<HomePage />} />

          {/* Blog Archive */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog.html" element={<BlogPage />} />

          {/* Blog Article: modern + legacy URL support */}
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/blog/:slug.html" element={<BlogArticlePage />} />

          {/* Known old blog .html URLs that were previously mapped to other pages */}
          <Route
            path="/the-art-of-public-speaking.html"
            element={<BlogArticlePage />}
          />
          <Route path="/ai-game-development.html" element={<BlogArticlePage />} />
          <Route
            path="/ARTIFICIAL-INTELLIGENCE-HR-TECHNOLOGY.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/WHAT-IS-ARTIFICIAL-INTELLIGENCE-IN-HEALTHCARE.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/machine-learning-in-gaming.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/what-is-cryptocurrency.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/India-witnessing-digital-payments.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/global-mutual-fund-blockchain.html"
            element={<BlogArticlePage />}
          />
          <Route path="/mixed-reality.html" element={<BlogArticlePage />} />
          <Route
            path="/international-business-matchmaking.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/scaleup-your-business-globally.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/Blockchain-Technology’s-Impact-Game-Development.html"
            element={<BlogArticlePage />}
          />
          <Route
            path="/blog-Shilpo-Abhijan-West Bengal-2013–passion-to-explore-new-verticals-of-business.html"
            element={<BlogArticlePage />}
          />

          {/* Legacy redirect table */}
          {legacyRedirects.map(({ from, to }) => (
            <Route
              key={from}
              path={from}
              element={<LegacyAliasPage to={to} />}
            />
          ))}

          {/* Root-level legacy .html blog articles.
              Keep this LAST so static page routes above stay safe.
              Do not add /:slug because it can hijack /blog, /books, /contact, etc. */}
          <Route path="/:slug.html" element={<BlogArticlePage />} />
        </Routes>

        <LegacyHead />
      </Suspense>
    </BrowserRouter>
  );
}