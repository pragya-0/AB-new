import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  getCategoryPhotos,
  getManyCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

const slideDuration = 4200;

const uniqueBySrc = <T extends { src: string }>(items: T[]) =>
  Array.from(new Map(items.map((item) => [item.src, item])).values());

export default function PhotographyHero() {
  const slides = useMemo(() => {
    return uniqueBySrc([
      ...getCategoryPhotos("travelling").slice(0, 8),
      ...getCategoryPhotos("dubai").slice(0, 3),
      ...getCategoryPhotos("kul").slice(0, 3),
      ...getManyCategoryPhotos(["Bhutan", "Nepal", "Shimla"]).slice(0, 4),
      ...getCategoryPhotos("Shilchar").slice(0, 3),
    ]).slice(0, 8);
  }, []);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const current = slides[active];
  const nextOne = slides[(active + 1) % slides.length];
  const nextTwo = slides[(active + 2) % slides.length];

  if (!current) return null;

  return (
    <section className="relative overflow-hidden bg-[#03070d] text-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={current.src}
          src={current.src}
          alt=""
          aria-hidden="true"
          loading="eager"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.28, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 1.1, ease: smoothEase }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#03070d]/90 to-[#03070d]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03070d] via-transparent to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(37,99,235,.28),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,.18),transparent_30%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-110px)] max-w-7xl items-center gap-8 px-5 py-10 sm:min-h-[calc(100svh-90px)] sm:px-6 sm:py-14 md:grid-cols-[0.95fr_1.05fr] lg:min-h-screen lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: smoothEase }}
          className="relative z-20 max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.12em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="text-[10px] font-semibold uppercase text-blue-300 sm:text-xs"
          >
            Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: smoothEase }}
            className="mt-4 max-w-3xl text-[34px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl"
          >
            Seeing the World
            <br />
            Differently.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: smoothEase }}
            className="mt-5 max-w-xl text-sm leading-7 text-white/78 sm:text-base lg:text-lg"
          >
            A visual record of travel, conferences, places and personal journeys
            captured through Arijit Bhattacharyya’s lens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: smoothEase }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["Travel", "Conferences", "Cities", "Culture", "Journeys"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur sm:text-[11px]"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          <div className="mt-7 flex max-w-full flex-wrap items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show Arijit Bhattacharyya photography slide ${
                  index + 1
                }`}
                className="h-1.5 w-8 overflow-hidden rounded-full bg-white/20 sm:w-9"
              >
                <motion.span
                  className="block h-full rounded-full bg-blue-300"
                  initial={false}
                  animate={{ width: active === index ? "100%" : "0%" }}
                  transition={{
                    duration: active === index ? slideDuration / 1000 : 0.2,
                    ease: "linear",
                  }}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative z-20 min-h-[360px] sm:min-h-[430px] md:min-h-[520px] lg:min-h-[620px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.src}
              initial={{ opacity: 0, y: 28, rotate: -1.5, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, rotate: 1.5, scale: 0.97 }}
              transition={{ duration: 0.85, ease: smoothEase }}
              className="absolute left-1/2 top-0 z-30 w-[82%] -translate-x-1/2 overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/10 p-2 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur sm:w-[70%] md:left-auto md:right-4 md:w-[68%] md:translate-x-0 lg:right-8 lg:top-8 lg:w-[64%] lg:rounded-[2rem]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-slate-900 lg:rounded-[1.5rem]">
                <img
                  src={current.src}
                  alt={current.alt}
                  loading="eager"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.figure>
          </AnimatePresence>

          {nextOne && (
            <motion.figure
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-20 z-20 w-[42%] overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/10 p-1.5 opacity-80 shadow-2xl backdrop-blur sm:left-10 sm:w-[34%] md:left-4 md:top-24 lg:left-8 lg:top-28 lg:p-2"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1rem]">
                <img
                  src={nextOne.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.figure>
          )}

          {nextTwo && (
            <motion.figure
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 z-20 w-[48%] overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/10 p-1.5 opacity-75 shadow-2xl backdrop-blur sm:left-24 sm:w-[38%] md:bottom-16 lg:bottom-20 lg:p-2"
            >
              <div className="aspect-[16/11] overflow-hidden rounded-[1rem]">
                <img
                  src={nextTwo.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.figure>
          )}

          <div className="absolute bottom-0 left-1/2 z-40 flex w-[92%] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/25 p-2 backdrop-blur md:bottom-4 md:left-auto md:right-6 md:w-auto md:translate-x-0 lg:bottom-8 lg:right-10">
            {slides.slice(0, 6).map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Open Arijit Bhattacharyya frame ${index + 1}`}
                className={`h-12 w-16 shrink-0 overflow-hidden rounded-xl border transition sm:h-14 sm:w-20 ${
                  active === index
                    ? "border-blue-300 opacity-100"
                    : "border-white/15 opacity-60 hover:opacity-90"
                }`}
              >
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#03070d] to-transparent sm:h-24" />
    </section>
  );
}