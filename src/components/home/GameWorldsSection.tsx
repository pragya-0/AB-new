import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2 } from "lucide-react";

import { gameWorldCards, gameWorldStats } from "../../data/gameWorlds";

const timeline = [
  "2001 Racing Game",
  "2006 VR Era",
  "2007 RPG Game",
  "43+ Superheroes",
  "56 Comics",
  "Gen AI Worlds",
];

const cinemaFallbackImage =
  "/assets/media-entertainment/Jeet_Arijit_Bhattacharyya.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function getSafeImage(card: (typeof gameWorldCards)[number]) {
  const key = `${card.label} ${card.title}`.toLowerCase();

  if (
    key.includes("cinema") ||
    key.includes("movie") ||
    key.includes("film") ||
    key.includes("boss")
  ) {
    return cinemaFallbackImage;
  }

  return card.image;
}

function GameImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#03070d_0%,#07162b_100%)] p-3 sm:h-[300px] lg:h-[260px] xl:h-[290px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,87,255,0.26),transparent_45%)]" />

      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full rounded-[18px] object-contain object-center opacity-95 drop-shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition duration-[6500ms] group-hover:scale-[1.035]"
        onError={(event) => {
          event.currentTarget.src = cinemaFallbackImage;
        }}
      />
    </div>
  );
}

export default function GameWorldsSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050b] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/16 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[170px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.12),transparent_44%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mx-auto mb-12 max-w-[980px] text-center">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff] sm:text-sm"
          >
            <Gamepad2 size={18} />
            IP Characters & Game Worlds
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[900px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-white sm:text-[48px] lg:text-[60px]"
          >
            Game Worlds & Character Universes
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[760px] text-[16px] font-normal leading-8 text-white/62 sm:text-[18px]"
          >
            A connected entertainment-tech ecosystem across games, comics,
            superheroes, movie-based IP, VR, AR and GenAI story worlds.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            {gameWorldStats.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-[#4d8cff]/30 bg-[#0057ff]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8bb7ff]"
              >
                {item.value} {item.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {gameWorldCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -7 }}
              transition={{ type: "spring", stiffness: 230, damping: 22 }}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_26px_90px_rgba(0,87,255,0.12)] transition duration-500 hover:border-[#4d8cff]/45 hover:bg-white/[0.07] hover:shadow-[0_38px_120px_rgba(0,87,255,0.22)]"
            >
              <GameImage
                src={getSafeImage(card)}
                alt={`${card.title} ${card.label} by Arijit Bhattacharyya`}
              />

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4d8cff]">
                  {card.label}
                </p>

                <h3 className="text-[25px] font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-[28px]">
                  {card.title}
                </h3>

                <p className="mt-4 flex-1 text-[15px] font-normal leading-7 text-white/62">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-9 rounded-[28px] border border-white/10 bg-white/[0.045] px-5 py-6 shadow-[0_24px_90px_rgba(0,87,255,0.11)] backdrop-blur-xl sm:px-6 sm:py-7"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {timeline.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-black/24 px-5 py-5 text-center"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <Link
            to="/media-entertainment"
            aria-label="Explore IP, games and media entertainment worlds by Arijit Bhattacharyya"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8bb7ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
          >
            Explore IP & Game Worlds
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}