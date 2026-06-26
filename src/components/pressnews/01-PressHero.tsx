import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { pressPath } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const heroSlides = [
  {
    title: "ABP / Regional Press Coverage",
    eyebrow: "Press Recognition",
    image: `${pressPath}ABP_Arijit.jpg`,
    alt: "ABP press coverage featuring Arijit Bhattacharyya",
  },
  {
    title: "China Film Festival",
    eyebrow: "International Media",
    image: `${pressPath}china-films.jpg`,
    alt: "Arijit Bhattacharyya at China film festival coverage",
  },
  {
    title: "Dubai Innovation Forum",
    eyebrow: "Global Stage",
    image: `${pressPath}Dubai-Arijit.jpg`,
    alt: "Arijit Bhattacharyya speaking at Dubai innovation forum",
  },
];

export default function PressHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-[#03070d] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-52 right-[-220px] h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -bottom-56 left-[-240px] h-[650px] w-[650px] rounded-full bg-sky-500/20 blur-[160px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#03070d]/10 via-[#03070d]/40 to-[#03070d]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl xl:text-[82px]">
              Trusted by
              <br />
              Global Media.
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-normal leading-8 text-slate-300">
              More than two decades of media recognition across business,
              entrepreneurship, AI, innovation, gaming, education and
              international leadership — featured by newspapers, television
              channels, magazines, interviews and global platforms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#featured-stories"
                className="inline-flex items-center rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Coverage
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                Media Enquiries
              </a>
            </div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-[#07111f]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide.image}
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                    {currentSlide.eyebrow}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                    {currentSlide.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous press image"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition hover:bg-blue-600"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next press image"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition hover:bg-blue-600"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${slide.title}`}
                    className={[
                      "h-2.5 rounded-full transition",
                      activeSlide === index
                        ? "w-10 bg-blue-400"
                        : "w-2.5 bg-white/25 hover:bg-white/50",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}