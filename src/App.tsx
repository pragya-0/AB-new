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

const PhotographyPage = lazy(
  () => import("./pages/PhotographyPage")
);

const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const MediaPage = lazy(() => import("./pages/MediaPage"));

const PressPage = lazy(() => import("./pages/PressPage"));

const BlogPage = lazy(() => import("./pages/BlogPage"));

const BlogArticlePage = lazy(
  () => import("./pages/BlogArticlePage")
);

const BooksPage = lazy(() => import("./pages/BooksPage"));

const ContactRedirect = lazy(
  () => import("./pages/ContactRedirect")
);

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

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Bio */}
          <Route path="/bio" element={<BioPage />} />
          <Route path="/bio.html" element={<BioPage />} />

          {/* Speaking */}
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/latest-speaks" element={<SpeakingPage />} />
          <Route path="/latest-speaks.html" element={<SpeakingPage />} />

          {/* Technology */}
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/technology.html" element={<TechnologyPage />} />

          {/* Mentoring */}
          <Route path="/mentoring" element={<MentoringPage />} />
          <Route path="/mentoring.html" element={<MentoringPage />} />

          {/* VR */}
          <Route path="/vr" element={<VRPage />} />
          <Route path="/virtual-reality" element={<VRPage />} />
          <Route path="/virtual-reality.html" element={<VRPage />} />

          {/* Media Entertainment */}
          <Route
            path="/media-entertainment"
            element={<MediaEntertainmentPage />}
          />
          <Route
            path="/media-entertainment.html"
            element={<MediaEntertainmentPage />}
          />

          {/* Ecosystem */}
          <Route path="/ecosystem" element={<VenturesPage />} />
          <Route path="/ecosystem.html" element={<VenturesPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/ventures.html" element={<VenturesPage />} />
          <Route path="/investments" element={<VenturesPage />} />
          <Route path="/investments.html" element={<VenturesPage />} />

          {/* Drawing */}
          <Route path="/drawing" element={<DrawingPage />} />
          <Route path="/drawing.html" element={<DrawingPage />} />

          {/* Creative */}
          <Route path="/creative" element={<GalleryPage />} />
          <Route path="/creative.html" element={<GalleryPage />} />

          {/* Photography */}
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography.html" element={<PhotographyPage />} />

          {/* Press */}
          <Route path="/press" element={<PressPage />} />
          <Route path="/press-news" element={<PressPage />} />
          <Route path="/press-news.html" element={<PressPage />} />

          {/* Media */}
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media.html" element={<MediaPage />} />

          {/* Podcast */}
          <Route path="/podcast" element={<MediaPage />} />
          <Route path="/podcast.html" element={<MediaPage />} />

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