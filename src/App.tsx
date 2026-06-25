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
import DrawingPage from "./pages/DrawingPage";
import VRPage from "./pages/VRPage";

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

        {/* Virtual Reality */}
        <Route path="/vr" element={<VRPage />} />
        <Route path="/virtual-reality" element={<VRPage />} />

        {/* Ventures / Ecosystem */}
        <Route path="/ecosystem" element={<VenturesPage />} />
        <Route path="/ventures" element={<VenturesPage />} />
        <Route path="/investments" element={<VenturesPage />} />

        {/* Creative */}
        <Route path="/drawing" element={<DrawingPage />} />
        <Route path="/creative" element={<GalleryPage />} />
        <Route path="/photography" element={<GalleryPage />} />

        {/* Media & Press */}
        <Route path="/press" element={<PressPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/podcast" element={<MediaPage />} />

        {/* Content */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}