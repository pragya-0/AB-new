import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeroArtwork = {
  title: string;
  src: string;
  alt: string;
};

const heroArtworks: HeroArtwork[] = [
  {
    title: "Portrait Studies",
    src: "/assets/Drawing/Pencil/susmita-sen.jpg",
    alt: "Pencil portrait study by Arijit Bhattacharyya",
  },
  {
    title: "Mother Teresa",
    src: "/assets/Drawing/Pencil/Mother Teresa.jpg",
    alt: "Mother Teresa pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Digital Character",
    src: "/assets/Drawing/digital/archer.jpg",
    alt: "Digital archer character artwork by Arijit Bhattacharyya",
  },
  {
    title: "Watercolour",
    src: "/assets/Drawing/color/water-img1.jpg",
    alt: "Watercolour artwork by Arijit Bhattacharyya",
  },
  {
    title: "Comic Art",
    src: "/assets/Drawing/comics/comics-img1.jpg",
    alt: "Comic artwork by Arijit Bhattacharyya",
  },
];

const disciplines = [
  "Pencil Works",
  "Water Colour",
  "Comics",
  "Digital Superhero",
];

export default function DrawingHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtwork = heroArtworks[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroArtworks.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_86%_14%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#03070d_0%,#07111f_55%,#03070d_100%)]" />
      <div className="absolute -left-28 top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The Art Behind the Innovator
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Before the companies, games, films and global technology
              platforms, there was drawing. Arijit Bhattacharyya’s creative
              journey began with pencil portraits, watercolour studies, comic
              panels and digital characters — a visual foundation that later
              evolved into animation, gaming, superheroes, movies and
              technology-led storytelling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {disciplines.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
                Creative Foundation
              </p>
              <p className="mt-3 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                Portraits became characters. Characters became stories. Stories
                became games, films and technology worlds.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl sm:-inset-5 sm:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-4">
              <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#05070b] p-4 sm:h-[560px] sm:rounded-[1.5rem] sm:p-6 lg:h-[660px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeArtwork.src}
                    src={activeArtwork.src}
                    alt={activeArtwork.alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03070d]/85 via-[#03070d]/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                      Featured Artwork
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.h2
                        key={activeArtwork.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="mt-2 text-2xl font-extrabold text-white sm:text-4xl"
                      >
                        {activeArtwork.title}
                      </motion.h2>
                    </AnimatePresence>
                  </div>

                  <div className="flex gap-2">
                    {heroArtworks.map((item, index) => (
                      <button
                        key={item.title}
                        type="button"
                        aria-label={`Show ${item.title}`}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "w-9 bg-blue-300"
                            : "w-2.5 bg-white/35 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}