import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type HeroSlide = {
  title: string;
  eyebrow: string;
  image: string;
  fallbackImages?: string[];
  alt: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const heroSlides: HeroSlide[] = [
  {
    title: "CNBC Awaaz Udaan Feature",
    eyebrow: "Business Television",
    image:
      "/assets/pressnews/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpeg",
    fallbackImages: [
      "/assets/pressnews/01_USE_NOW/TV___Video_Coverage/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpeg",
      "/assets/pressnews/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpg",
      "/assets/pressnews/01_USE_NOW/TV___Video_Coverage/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpg",
    ],
    alt: "CNBC Awaaz Udaan television panel featuring Arijit Bhattacharyya, Founder-Director of Virtualinfocom",
  },
  {
    title: "IIT ISM CIIE Foundation MoU",
    eyebrow: "Institutional Collaboration",
    image: "/assets/pressnews/01_images_preserved_structure/IIT ISM MOU.jpeg",
    fallbackImages: [
      "/assets/pressnews/iit-ism-ciie-foundation-mou-coinnovate-ventures.jpeg",
      "/assets/pressnews/01_images_preserved_structure/IIT ISM MOU(1).jpeg",
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Institutional_Collaboration/iit-ism-ciie-foundation-mou-coinnovate-ventures.jpeg",
      "/assets/pressnews/iit-ism-ciie-foundation-mou-coinnovate-ventures.jpg",
    ],
    alt: "Hindi newspaper coverage of IIT ISM CIIE Foundation MoU with Coinnovate Ventures connected to startup and innovation ecosystem",
  },
  {
    title: "East India Startup Showcase Day",
    eyebrow: "Startup Investment Coverage",
    image:
      "/assets/pressnews/01_images_preserved_structure/1772780640236 (1).jfif.jpeg",
    fallbackImages: [
      "/assets/pressnews/east-india-startup-showcase-day-jamshedpur-investors-4-6cr.jpeg",
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Startup_Ecosystem/East India Startup Showcase Day — Investors Eye Rs 4.6 Cr.jpeg",
      "/assets/pressnews/east-india-startup-showcase-day-jamshedpur-investors-4-6cr.jpg",
    ],
    alt: "Newspaper coverage of East India Startup Showcase Day where investors eyed Rs 4.6 crore in promising startups",
  },
];

function HeroImage({ slide }: { slide: HeroSlide }) {
  const imageCandidates = useMemo(
    () =>
      Array.from(
        new Set([slide.image, ...(slide.fallbackImages ?? [])].filter(Boolean))
      ),
    [slide.image, slide.fallbackImages]
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImageIndex(0);
    setHasFailed(false);
  }, [slide.image]);

  const currentImage = imageCandidates[imageIndex];

  if (hasFailed || !currentImage) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#06111f] p-8 text-center">
        <p className="max-w-md text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
          Image path needs checking
        </p>
        <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
          {slide.title}
        </p>
      </div>
    );
  }

  return (
    <motion.img
      key={currentImage}
      src={currentImage}
      alt={slide.alt}
      loading="eager"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onError={() => {
        if (imageIndex < imageCandidates.length - 1) {
          setImageIndex((current) => current + 1);
          return;
        }

        setHasFailed(true);
      }}
      className="h-full w-full rounded-[1.5rem] object-contain"
    />
  );
}

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
      <div className="absolute inset-0">
        <div className="absolute -top-52 right-[-220px] h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -bottom-56 left-[-240px] h-[650px] w-[650px] rounded-full bg-sky-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070d]/10 via-[#03070d]/40 to-[#03070d]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
        
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl xl:text-[82px]">
              Press, Interviews
              <br />
              & Public Recognition.
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-normal leading-8 text-slate-300">
              A curated archive of Arijit Bhattacharyya’s coverage across
              television, newspapers, business media, startup ecosystems,
              technology forums and international industry networks —
              documenting his work as founder of Virtualinfocom, speaker,
              mentor and innovation ecosystem builder.
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
                Media Enquiry
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#07111f]">
                <div className="relative flex aspect-[16/11] items-center justify-center bg-[#07111f] p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    <HeroImage slide={currentSlide} />
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous press image"
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-blue-600"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next press image"
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-blue-600"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="border-t border-white/10 bg-black/25 px-6 py-5 sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                    {currentSlide.eyebrow}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                    {currentSlide.title}
                  </h2>
                </div>
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

