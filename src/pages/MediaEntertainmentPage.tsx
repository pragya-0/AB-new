import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/common/MetaTags";

import MediaEntertainmentHero from "../components/mediaEntertainment/01-MediaEntertainmentHero";
import EntertainmentTimeline from "../components/mediaEntertainment/02-EntertainmentTimeline";
import MovieAndGameUniverse from "../components/mediaEntertainment/03-MovieAndGameUniverse";
import FilmFestivalsGlobalStage from "../components/mediaEntertainment/04-FilmFestivalsGlobalStage";
import CelebrityArchive from "../components/mediaEntertainment/05-CelebrityArchive";
import CosplayAndDigitalHumans from "../components/mediaEntertainment/06-CosplayAndDigitalHumans";
import OriginalIPUniverse from "../components/mediaEntertainment/07-OriginalIPUniverse";
import FutureMedia from "../components/mediaEntertainment/08-FutureMedia";

export default function MediaEntertainmentPage() {
  return (
    <main className="min-h-screen bg-[#03070d] font-sans text-white">
      <MetaTags
        title="Media Entertainment, Films, Games, Digital Humans & AI Cinema | Arijit Bhattacharyya"
        description="Explore Arijit Bhattacharyya's media entertainment journey across films, movie-based games, digital humans, cosplay, film festivals, VR storytelling, animation, original IP, GenAI cinema and future media since 1998."
        image="/assets/press/latest-speaks/cosplay-kolkata.jpg"
      />

      <Navbar />
      <MediaEntertainmentHero />
      <EntertainmentTimeline />
      <MovieAndGameUniverse />
      <FilmFestivalsGlobalStage />
      <CelebrityArchive />
      <CosplayAndDigitalHumans />
      <OriginalIPUniverse />
      <FutureMedia />
      <Footer />
    </main>
  );
}
