import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BooksHero from "../components/books/01-BooksHero";
import FeaturedBooks from "../components/books/02-FeaturedBooks";
import BooksTimeline from "../components/books/03-BooksTimeline";
import KnowledgeAreas from "../components/books/04-KnowledgeAreas";
import BooksCTA from "../components/books/06-BooksCTA";

export default function BooksPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#03070d]">
        <BooksHero />
        <FeaturedBooks />
        <BooksTimeline />
        <KnowledgeAreas />
        <BooksCTA />
      </main>

      <Footer />
    </>
  );
}