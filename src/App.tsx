import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BioPage from "./pages/BioPage";
import SpeakingPage from "./pages/SpeakingPage";
import TechnologyPage from "./pages/TechnologyPage";
import MentoringPage from "./pages/MentoringPage";
import VenturesPage from "./pages/VenturesPage";
import DrawingPage from "./pages/DrawingPage";
import VRPage from "./pages/VRPage";
import MediaEntertainmentPage from "./pages/MediaEntertainmentPage";

import GalleryPage from "./pages/GalleryPage";
import MediaPage from "./pages/MediaPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import BooksPage from "./pages/BooksPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/bio" element={<BioPage />} />
        <Route path="/bio.html" element={<BioPage />} />

        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/latest-speaks" element={<SpeakingPage />} />
        <Route path="/latest-speaks.html" element={<SpeakingPage />} />

        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/technology.html" element={<TechnologyPage />} />

        <Route path="/mentoring" element={<MentoringPage />} />
        <Route path="/mentoring.html" element={<MentoringPage />} />

        <Route path="/vr" element={<VRPage />} />
        <Route path="/virtual-reality" element={<VRPage />} />
        <Route path="/virtual-reality.html" element={<VRPage />} />

        <Route path="/media-entertainment" element={<MediaEntertainmentPage />} />
        <Route path="/media-entertainment.html" element={<MediaEntertainmentPage />} />

        <Route path="/ecosystem" element={<VenturesPage />} />
        <Route path="/ecosystem.html" element={<VenturesPage />} />
        <Route path="/ventures" element={<VenturesPage />} />
        <Route path="/ventures.html" element={<VenturesPage />} />
        <Route path="/investments" element={<VenturesPage />} />
        <Route path="/investments.html" element={<VenturesPage />} />

        <Route path="/drawing" element={<DrawingPage />} />
        <Route path="/drawing.html" element={<DrawingPage />} />

        <Route path="/creative" element={<GalleryPage />} />
        <Route path="/photography" element={<GalleryPage />} />
        <Route path="/photography.html" element={<GalleryPage />} />

        <Route path="/press" element={<PressPage />} />
        <Route path="/press-news" element={<PressPage />} />
        <Route path="/press-news.html" element={<PressPage />} />

        <Route path="/media" element={<MediaPage />} />
        <Route path="/media.html" element={<MediaPage />} />

        <Route path="/podcast" element={<MediaPage />} />
        <Route path="/podcast.html" element={<MediaPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog.html" element={<BlogPage />} />

        <Route path="/books" element={<BooksPage />} />
        <Route path="/books.html" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}