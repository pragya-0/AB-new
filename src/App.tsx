import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BioPage from "./pages/BioPage";
import BlogPage from "./pages/BlogPage";
import BooksPage from "./pages/BooksPage";
import GalleryPage from "./pages/GalleryPage";
import MediaPage from "./pages/MediaPage";
import PressPage from "./pages/PressPage";
import SpeakingPage from "./pages/SpeakingPage";
import VenturesPage from "./pages/VenturesPage";
import TechnologyPage from "./pages/TechnologyPage";
import MentoringPage from "./pages/MentoringPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Core Pages */}
        <Route path="/bio" element={<BioPage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/mentoring" element={<MentoringPage />} />

        {/* Ventures / Ecosystem */}
        <Route path="/ecosystem" element={<VenturesPage />} />
        <Route path="/ventures" element={<VenturesPage />} />
        <Route path="/investments" element={<VenturesPage />} />

        {/* Media & Press */}
        <Route path="/press" element={<PressPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/podcast" element={<MediaPage />} />

        {/* Content */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/books" element={<BooksPage />} />

        {/* Creative */}
        <Route path="/creative" element={<GalleryPage />} />
        <Route path="/photography" element={<GalleryPage />} />
        <Route path="/drawing" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}