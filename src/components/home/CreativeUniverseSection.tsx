import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, PlayCircle, Sparkles } from "lucide-react";

const mediaEntertainmentRoute = "/media-entertainment";

const genAIMoviesPlaylist =
  "https://www.youtube.com/playlist?list=PLqxGT4eSUWHE3cVQIV705v84oVgAXjUrL";

type GenAICreation = {
  title: string;
  universe: string;
  image: string;
  youtubeUrl: string;
  description: string;
};

const genAICreations: GenAICreation[] = [
  {
    title: "KARNA",
    universe: "Indian Epic Universe",
    image: "/assets/gallery/karna-poster-vertical.png",
    youtubeUrl: "https://www.youtube.com/watch?v=LSchEFVs_bs",
    description:
      "AI-led epic sci-fi story world connecting Indian epic characters, cinema, future warfare and original GenAI entertainment.",
  },
  {
    title: "The 4th Dimension",
    universe: "Multiverse Adventure",
    image: "/assets/gallery/time-traveller-poster-vertical.png",
    youtubeUrl: "https://www.youtube.com/watch?v=s-NadEiPO_o",
    description:
      "AI-led cinematic story world blending time, science fiction, epic storytelling and future entertainment.",
  },
  {
    title: "NADA",
    universe: "Fantasy Universe",
    image: "/assets/gallery/nada-poster-vertical.png",
    youtubeUrl: genAIMoviesPlaylist,
    description:
      "AI-led fantasy story world connecting warrior legends, temple mysteries, cinematic action and future entertainment.",
  },
  {
    title: "BROKEN",
    universe: "Sci-Fi Universe",
    image: "/assets/gallery/broken-poster-vertical.png",
    youtubeUrl: "https://www.youtube.com/shorts/KiW-rtz9GeM",
    description:
      "AI-led science fiction superhero story connected with Ashwathama’s gem, emotion, action and cinematic world-building.",
  },
  {
    title: "ASHWATHAMA",
    universe: "Epic Saga",
    image: "/assets/gallery/ashwathama-poster-vertical.png",
    youtubeUrl: genAIMoviesPlaylist,
    description:
      "AI-led epic saga expanding Ashwathama the Immortal into a larger cinematic and character-driven universe.",
  },
];



const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function PosterCard({ item }: { item: GenAICreation }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="group flex h-full min-h-[620px] flex-col overflow-hidden rounded-[26px] border border-[#0057ff]/15 bg-white shadow-[0_24px_90px_rgba(0,87,255,0.12)] transition duration-500 hover:border-[#0057ff]/55 hover:shadow-[0_0_80px_rgba(0,87,255,0.22)]"
    >
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#05070c_0%,#07162b_100%)] p-3 sm:h-[360px] xl:h-[390px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,87,255,0.28),transparent_45%)]" />

        <img
          src={item.image}
          alt={`${item.title} GenAI cinematic poster by Arijit Bhattacharyya`}
          className="relative z-10 h-full w-full rounded-[18px] object-contain object-center drop-shadow-[0_26px_70px_rgba(0,0,0,0.55)] transition duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0057ff] sm:text-[11px]">
          {item.universe}
        </p>

        <h3 className="break-words text-[23px] font-extrabold leading-[1.02] tracking-[-0.055em] text-black sm:text-[26px] xl:text-[28px]">
          {item.title}
        </h3>

        <p className="mt-4 flex-1 text-[14px] font-normal leading-6 text-black/58 sm:text-[15px] sm:leading-7">
          {item.description}
        </p>

        <a
          href={item.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch ${item.title} GenAI story on YouTube`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0057ff] transition duration-300 group-hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PlayCircle size={16} />
          Watch
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}

export default function CreativeUniverseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_48%,#ffffff_100%)] px-4 py-16 text-black sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/12 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-cyan-300/14 blur-[170px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,87,255,0.10),transparent_45%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0057ff] sm:text-sm"
            >
              <Sparkles size={18} />
              Gen AI Creations
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[760px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-black sm:text-[48px] lg:text-[64px]"
            >
              Stories Beyond Reality
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-[660px] text-[16px] font-normal leading-8 text-black/62 sm:text-[18px] lg:justify-self-end"
          >
            Epic storytelling, science fiction and cinematic imagination brought
            together through AI-led storytelling, character design and future
            entertainment universes.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {genAICreations.map((item) => (
            <PosterCard key={item.title} item={item} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-10 overflow-hidden rounded-[30px] border border-[#0057ff]/15 bg-white/80 p-6 shadow-[0_24px_90px_rgba(0,87,255,0.10)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0057ff]">
                <Film size={17} />
                Media Entertainment Universe
              </p>

              <h3 className="max-w-[900px] text-[28px] font-extrabold leading-tight tracking-[-0.05em] text-black sm:text-[36px]">
                A wider cinematic and entertainment universe is being built around AI, Indian epic worlds, fantasy, science fiction and future-facing IP.
              </h3>
            </div>

            <Link
              to={mediaEntertainmentRoute}
              aria-label="Explore media entertainment and GenAI film universe by Arijit Bhattacharyya"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_22px_60px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
            >
              Explore Media Entertainment
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}