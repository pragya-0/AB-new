import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PlayCircle, Rocket } from "lucide-react";

const heroImage = "/assets/hero/speaking Image.jpeg";

const heroStats = [
  { value: "29+", label: "Years" },
  { value: "102+", label: "Countries" },
  { value: "7000+", label: "Startups Mentored" },
  { value: "2100+", label: "Events" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function HeroImagePanel() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050b16] shadow-[0_30px_100px_rgba(0,87,255,0.18)] sm:rounded-[30px] lg:h-full"
      initial={{ opacity: 0, x: 34 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Soft fill background so object-contain does not create ugly empty space */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-2xl"
      />

      <div className="absolute inset-0 bg-[#030712]/28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,132,255,0.12),transparent_38%)]" />

      {/* Main image: full image visible */}
      <img
        src={heroImage}
        alt="Arijit Bhattacharyya speaking to a large audience at a technology and startup event"
        className="relative z-10 h-[300px] w-full object-contain object-center p-2 sm:h-[390px] lg:h-full lg:min-h-[620px] xl:min-h-[650px]"
      />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-black px-4 pb-4 sm:px-5">
      <div className="mx-auto max-w-[1740px]">
        <div className="relative overflow-hidden rounded-[26px] bg-[#030712] sm:rounded-[34px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,132,255,0.22),transparent_28%),radial-gradient(circle_at_78%_82%,rgba(0,87,255,0.18),transparent_30%),linear-gradient(115deg,#05070c_0%,#06101f_48%,#102b55_100%)]" />

          <div
            aria-hidden="true"
            className="absolute left-[8%] top-[16%] h-36 w-36 rounded-full bg-blue-500/18 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[8%] right-[14%] h-44 w-44 rounded-full bg-cyan-400/14 blur-3xl"
          />

          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-14">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch xl:grid-cols-[0.82fr_1.18fr]">
              {/* Content */}
              <motion.div
                className="flex flex-col justify-center rounded-[24px] bg-[#030712]/44 p-0 backdrop-blur-sm lg:min-h-[620px] lg:pr-4 xl:min-h-[650px]"
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
                  className="max-w-[760px] text-[38px] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-[50px] lg:text-[54px] xl:text-[62px]"
                >
                  Building Technology,
                  <br className="hidden sm:block" />
                  Startups & Global
                  <br className="hidden sm:block" />
                  Innovation Since 1998
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-[660px] text-[16px] leading-7 text-white/78 sm:mt-7 sm:text-[17px] sm:leading-8"
                >
                  Serial entrepreneur, technologist, angel investor, TEDx
                  speaker and global business matchmaking expert working across
                  AI, VR, blockchain, gaming, startup ecosystems and emerging
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

              {/* Full visible hero image */}
              <HeroImagePanel />
            </div>

            {/* Static Stats Line */}
            <motion.div
              className="relative z-20 mt-8 sm:mt-10 lg:mt-8"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
            >
              <div className="absolute -bottom-12 left-1/2 h-28 w-[88%] -translate-x-1/2 rounded-full bg-[#0057ff]/35 blur-[72px]" />
              <div className="absolute -bottom-3 left-[8%] right-[8%] h-4 rounded-full bg-[#00a6ff]/55 blur-2xl" />

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#06184a]/90 px-4 py-4 shadow-[0_25px_100px_rgba(0,87,255,0.34)] backdrop-blur-2xl sm:rounded-[30px] sm:px-5">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,87,255,0.26)_0%,rgba(10,31,87,0.48)_42%,rgba(5,15,35,0.58)_78%,rgba(0,166,255,0.16)_100%)]" />
                <div className="absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

                <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {heroStats.map((item) => (
                    <div
                      key={`${item.value}-${item.label}`}
                      className="flex min-h-[74px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-center shadow-[0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:px-5 xl:px-6"
                    >
                      <span className="text-[26px] font-bold leading-none tracking-[-0.04em] text-white sm:text-[32px] xl:text-[36px]">
                        {item.value}
                      </span>

                      <span className="text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-blue-100/78 sm:text-[12px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* End Static Stats Line */}
          </div>
        </div>
      </div>
    </section>
  );
}
