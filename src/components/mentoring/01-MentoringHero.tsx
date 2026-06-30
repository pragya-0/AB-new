import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const asset = "/assets/mentoring/";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const proofStats = [
  ["7100+", "Startups Supported"],
  ["2100+", "Events & Sessions"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
];

const heroSlides = [
  {
    image: "banner3.jpg",
    title: "Helping founders see blind spots, structure growth and go global.",
    eyebrow: "Business Mentoring / Scaleup / Funding",
    alt: "Arijit Bhattacharyya mentoring session for business scalability startup advisory funding grants private equity readiness and global expansion",
    fit: "contain",
  },
  {
    image: "Dubai-Arijit.jpg",
    title: "International scaleup, market-entry and private-equity conversations.",
    eyebrow: "Global Business / Market Entry",
    alt: "Arijit Bhattacharyya global business mentoring market entry private equity readiness and international scaleup conversation",
    fit: "contain",
  },
  {
    image: "public-speaker.jpg",
    title: "Mentoring through real stages, founder rooms and business networks.",
    eyebrow: "Founder Guidance / Leadership Rooms",
    alt: "Arijit Bhattacharyya public speaking and mentoring founders in leadership rooms business chambers and startup ecosystems",
    fit: "cover",
  },
];

export default function MentoringHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-14 text-white sm:px-6 md:px-10 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,87,255,0.20),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(111,177,252,0.14),transparent_34%)]" />
      <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/14 blur-[170px]" />
      <div className="absolute right-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-cyan-400/8 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-9 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7fb8ff] md:text-[12px]">
              Mentoring & Advisory Since 2006
            </p>

            <h1 className="max-w-[780px] text-[42px] font-bold leading-[0.96] tracking-[-0.055em] text-white sm:text-[52px] md:text-[64px] xl:text-[72px]">
              Gain experience not shared in books.
            </h1>

            <p className="mt-7 max-w-[820px] text-[17px] font-normal leading-[1.75] tracking-[-0.01em] text-white/70 md:text-[18px]">
              Arijit Bhattacharyya is a Business Scalability Expert,
              Technologist, Digital Media Expert, DeepTech Strategist and
              Finance & Growth Consultant helping corporates, startups, SMEs,
              MSMEs, manufacturing companies, financial institutions and
              growth-stage businesses modernize operations, prepare for private
              equity, adopt AI and expand globally.
            </p>

            <p className="mt-5 max-w-[800px] text-[16px] font-normal leading-[1.75] text-white/62 md:text-[18px]">
              His mentoring focuses on business strategy, market entry,
              fundraising, operating-margin improvement, technology
              modernization, legacy-system modernization, AI, GenAI, AR, VR, XR,
              blockchain, digital media, gaming, animation and sustainable
              business models.
            </p>

            <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-4">
              {proofStats.map(([value, label]) => (
                <div key={label} className="bg-[#07101f] p-4 md:p-5">
                  <p className="text-[32px] font-bold leading-none tracking-[-0.04em] text-white md:text-[42px]">
                    {value}
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-5 rounded-[44px] bg-[#0057ff]/16 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[#07101f] p-2 shadow-[0_38px_120px_rgba(0,87,255,0.22)] md:rounded-[42px]">
              <div className="relative h-[460px] overflow-hidden rounded-[24px] bg-[#03070d] sm:h-[560px] md:h-[660px] md:rounded-[34px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide.image}
                    src={`${asset}${currentSlide.image}`}
                    alt={currentSlide.alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`absolute inset-0 h-full w-full ${
                      currentSlide.fit === "cover"
                        ? "object-cover"
                        : "object-contain"
                    } object-center`}
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/92 via-black/46 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8bb7ff]">
                        {currentSlide.eyebrow}
                      </p>

                      <h2 className="mt-3 max-w-[760px] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[38px]">
                        {currentSlide.title}
                      </h2>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 flex items-center gap-3">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.image}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show ${slide.eyebrow}`}
                        className={`h-2.5 rounded-full transition duration-300 ${
                          activeSlide === index
                            ? "w-10 bg-[#58a0ff]"
                            : "w-2.5 bg-white/35 hover:bg-white/60"
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
