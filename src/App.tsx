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
return ( <BrowserRouter> <Routes>
<Route path="/" element={<HomePage />} />


    <Route path="/bio" element={<BioPage />} />
    <Route path="/speaking" element={<SpeakingPage />} />
    <Route path="/technology" element={<TechnologyPage />} />
    <Route path="/mentoring" element={<MentoringPage />} />

    <Route path="/ecosystem" element={<VenturesPage />} />
    <Route path="/ventures" element={<VenturesPage />} />

    <Route path="/press" element={<PressPage />} />
    <Route path="/media" element={<MediaPage />} />
    <Route path="/podcast" element={<MediaPage />} />

    <Route path="/blog" element={<BlogPage />} />
    <Route path="/books" element={<BooksPage />} />

    <Route path="/creative" element={<GalleryPage />} />
    <Route path="/photography" element={<GalleryPage />} />
  </Routes>
</BrowserRouter>


);
}
