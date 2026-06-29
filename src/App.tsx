import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const PressPage = lazy(() => import("./pages/PressPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const BooksPage = lazy(() => import("./pages/BooksPage"));
const ContactRedirect = lazy(() => import("./pages/ContactRedirect"));

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
          <Route path="/the-art-of-public-speaking.html" element={<SpeakingPage />} />

          {/* Technology / Tech Work / AI / Blockchain Legacy */}
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/technology.html" element={<TechnologyPage />} />
          <Route path="/tech-work" element={<TechnologyPage />} />
          <Route path="/tech-work.html" element={<TechnologyPage />} />
          <Route path="/ai-game-development.html" element={<TechnologyPage />} />
          <Route
            path="/ARTIFICIAL-INTELLIGENCE-HR-TECHNOLOGY.html"
            element={<TechnologyPage />}
          />
          <Route
            path="/WHAT-IS-ARTIFICIAL-INTELLIGENCE-IN-HEALTHCARE.html"
            element={<TechnologyPage />}
          />
          <Route
            path="/machine-learning-in-gaming.html"
            element={<TechnologyPage />}
          />
          <Route path="/what-is-cryptocurrency.html" element={<TechnologyPage />} />
          <Route
            path="/India-witnessing-digital-payments.html"
            element={<TechnologyPage />}
          />
          <Route
            path="/global-mutual-fund-blockchain.html"
            element={<TechnologyPage />}
          />

          {/* Mentoring / Entrepreneurship Legacy */}
          <Route path="/mentoring" element={<MentoringPage />} />
          <Route path="/mentoring.html" element={<MentoringPage />} />
          <Route
            path="/entrepreneurship-employment.html"
            element={<MentoringPage />}
          />

          {/* VR / Virtual Reality / Mixed Reality Legacy */}
          <Route path="/vr" element={<VRPage />} />
          <Route path="/vr.html" element={<VRPage />} />
          <Route path="/virtual-reality" element={<VRPage />} />
          <Route path="/virtual-reality.html" element={<VRPage />} />
          <Route path="/datascience-virtual-reality.html" element={<VRPage />} />
          <Route path="/mixed-reality.html" element={<VRPage />} />
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

          {/* Ecosystem / Ventures / Investments / International Business Legacy */}
          <Route path="/ecosystem" element={<VenturesPage />} />
          <Route path="/ecosystem.html" element={<VenturesPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/ventures.html" element={<VenturesPage />} />
          <Route path="/investments" element={<VenturesPage />} />
          <Route path="/investments.html" element={<VenturesPage />} />
          <Route
            path="/international-business-matchmaking.html"
            element={<VenturesPage />}
          />
          <Route
            path="/international-partnership.html"
            element={<VenturesPage />}
          />
          <Route
            path="/scaleup-your-business-globally.html"
            element={<VenturesPage />}
          />

          {/* Drawing */}
          <Route path="/drawing" element={<DrawingPage />} />
          <Route path="/drawing.html" element={<DrawingPage />} />

          {/* Creative / Gallery */}
          <Route path="/creative" element={<GalleryPage />} />
          <Route path="/creative.html" element={<GalleryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery.html" element={<GalleryPage />} />

          {/* Photography */}
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography.html" element={<PhotographyPage />} />

          {/* Press / Press News */}
          <Route path="/press" element={<PressPage />} />
          <Route path="/press.html" element={<PressPage />} />
          <Route path="/press-news" element={<PressPage />} />
          <Route path="/press-news.html" element={<PressPage />} />

          {/* Media / Podcast / YouTube */}
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media.html" element={<MediaPage />} />
          <Route path="/podcast" element={<MediaPage />} />
          <Route path="/podcast.html" element={<MediaPage />} />
          <Route path="/youtube" element={<MediaPage />} />
          <Route path="/youtube.html" element={<MediaPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog.html" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          {/* Books */}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books.html" element={<BooksPage />} />
          <Route path="/book" element={<BooksPage />} />
          <Route path="/book.html" element={<BooksPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactRedirect />} />
          <Route path="/contact.html" element={<ContactRedirect />} />
          <Route path="/contact-arijit" element={<ContactRedirect />} />
          <Route path="/contact-arijit.html" element={<ContactRedirect />} />
          <Route path="/contact-me" element={<ContactRedirect />} />
          <Route path="/contact-me.html" element={<ContactRedirect />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}