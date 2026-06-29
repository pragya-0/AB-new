import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, Rocket } from "lucide-react";

const heroStats = [
  { value: "29+", label: "Years" },
  { value: "102+", label: "Countries" },
  { value: "12M+", label: "Network" },
  { value: "7000+", label: "Startups Mentored" },
  { value: "2100+", label: "Events & Forums" },
  { value: "10,000+", label: "Students Trained" },
  { value: "500+", label: "Games / VR / AR Work" },
  { value: "350+", label: "Creative IP & Characters" },
  { value: "TEDx", label: "Speaker" },
  { value: "ADB", label: "Consultant" },
];

const marqueeStats = [...heroStats, ...heroStats];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="bg-black px-4 pb-4 sm:px-5">
      <style>
        {`
          @keyframes heroMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .hero-marquee-track {
            width: max-content;
            animation: heroMarquee 30s linear infinite;
          }

          .hero-marquee-shell:hover .hero-marquee-track {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-marquee-track {
              width: 100%;
              animation: none;
              flex-wrap: wrap;
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-[1740px]">
        <div className="relative overflow-hidden rounded-[26px] bg-[#030712] sm:rounded-[34px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,132,255,0.30),transparent_30%),radial-gradient(circle_at_12%_82%,rgba(0,87,255,0.22),transparent_26%),linear-gradient(110deg,#05070c_0%,#06101f_50%,#102b55_100%)]" />

          <motion.div
            aria-hidden="true"
            className="absolute left-[8%] top-[16%] h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute bottom-[10%] right-[16%] h-44 w-44 rounded-full bg-cyan-400/16 blur-3xl"
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.45, 0.2, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Desktop Hero Image */}
          <motion.div
            className="absolute bottom-0 right-0 top-0 hidden w-[48%] lg:block"
            initial={{ opacity: 0, x: 70, scale: 1.04 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/assets/hero/hero-speaker.jpeg"
              alt="Arijit Bhattacharyya speaking on technology, startups and global innovation"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#030712] via-[#030712]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/74 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-blue-950/15" />
          </motion.div>

          <div className="relative z-10 flex min-h-[auto] flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[720px] lg:px-14">
            {/* Content */}
            <motion.div
              className="max-w-[880px] pt-4 sm:pt-8"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:mb-5 sm:text-[15px] sm:normal-case sm:tracking-normal"
              >
                Entrepreneur. Technologist. Global Innovator.
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-[790px] text-[38px] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-[50px] lg:text-[56px] xl:text-[64px]"
              >
                Building Technology, Startups &
                <br className="hidden sm:block" />
                Global Innovation Since 1998
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[650px] text-[16px] leading-7 text-white/78 sm:mt-7 sm:text-[17px] sm:leading-8"
              >
                Serial entrepreneur, technologist, angel investor, TEDx speaker
                and global business matchmaking expert working across AI, VR,
                blockchain, gaming, startup ecosystems and emerging
                technologies.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                <Link
                  to="/bio"
                  aria-label="Explore Arijit Bhattacharyya founder journey and biography"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(0,87,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1672ff] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#030712]"
                >
                  <Rocket size={18} />
                  Explore Journey
                </Link>

                <Link
                  to="/speaking"
                  aria-label="Watch keynote and speaking highlights by Arijit Bhattacharyya"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-4 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#030712]"
                >
                  <PlayCircle size={18} />
                  Watch Keynote
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Hero Image */}
            <motion.div
              className="mt-9 overflow-hidden rounded-[24px] border border-white/10 lg:hidden"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <img
                src="/assets/hero/hero-speaker.jpeg"
                alt="Arijit Bhattacharyya speaking at a technology and startup event"
                className="h-[280px] w-full object-cover object-center sm:h-[340px]"
              />
            </motion.div>

            {/* Moving Stats Line */}
            <motion.div
              className="relative z-20 mx-0 mb-2 mt-8 sm:mx-2 sm:mt-10 lg:mx-4 lg:mb-4"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
            >
              <div className="absolute -bottom-16 left-1/2 h-36 w-[92%] -translate-x-1/2 rounded-full bg-[#0057ff]/55 blur-[80px]" />
              <div className="absolute -bottom-3 left-[8%] right-[8%] h-5 rounded-full bg-[#00a6ff]/80 blur-2xl" />

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#06184a]/88 px-0 py-4 shadow-[0_25px_120px_rgba(0,87,255,0.40)] backdrop-blur-2xl sm:rounded-[30px]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,87,255,0.28)_0%,rgba(10,31,87,0.52)_22%,rgba(5,15,35,0.62)_52%,rgba(0,166,255,0.16)_100%)]" />
                <div className="absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

                <div className="sr-only">
                  {heroStats.map((item) => `${item.value} ${item.label}`).join(", ")}
                </div>

                <div className="hero-marquee-shell relative z-10 overflow-hidden">
                  <div
                    className="hero-marquee-track flex items-center gap-3 px-4"
                    aria-hidden="true"
                  >
                    {marqueeStats.map((item, index) => (
                      <div
                        key={`${item.value}-${item.label}-${index}`}
                        className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/8 px-5 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-6"
                      >
                        <span className="text-[26px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[34px]">
                          {item.value}
                        </span>

                        <span className="max-w-[150px] text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-blue-100/78 sm:max-w-none sm:text-[12px]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            {/* End Moving Stats Line */}
          </div>
        </div>
      </div>
    </section>
  );
}