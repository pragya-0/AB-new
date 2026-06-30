import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";

const heroImage = {
  image: "/assets/speaking/arijit-dubai-ai-blockchain-.jpg.jpeg",
  eyebrow: "Dubai, UAE",
  label: "AI & Blockchain Summit",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function MediaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-4 py-16 sm:px-6 md:px-10 lg:py-24">
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[640px] w-[640px] rounded-full bg-[#1b5cff]/16 blur-[170px]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[160px]" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="max-w-[760px]">
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#1b5cff] sm:text-[13px]"
          >
            Press & Media
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-[40px] font-extrabold leading-[0.98] tracking-[-0.06em] text-black sm:text-[54px] lg:text-[68px] xl:text-[76px]"
          >
            Stories,
            <br />
            Recognition &
            <br />
            <span className="text-[#1b5cff]">Global Conversations</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[620px] text-[16px] font-normal leading-8 text-black/62 sm:text-[18px]"
          >
            Arijit Bhattacharyya&apos;s work across entrepreneurship, emerging
            technologies, media, policy conversations and global innovation has
            been featured by leading publications, TV channels and business
            platforms.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              to="/media"
              aria-label="Explore Media coverage and interviews of Arijit Bhattacharyya"
              className="inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-[#1b5cff] px-8 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(27,92,255,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0048ff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Explore Media
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/media"
              aria-label="Watch interviews and media conversations of Arijit Bhattacharyya"
              className="inline-flex h-[56px] items-center justify-center gap-2 rounded-full border border-[#1b5cff]/20 bg-white px-8 text-[15px] font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:border-[#1b5cff] hover:text-[#1b5cff] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              <PlayCircle size={18} />
              Watch Interviews
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b5cff]/24 blur-[140px]" />

          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_35px_100px_rgba(27,92,255,0.22)] sm:rounded-[38px]">
            <img
              src={heroImage.image}
              alt="Arijit Bhattacharyya at Dubai AI and Blockchain Summit"
              className="h-[290px] w-full rounded-[22px] object-cover object-center transition duration-700 hover:scale-[1.03] sm:h-[390px] lg:h-[500px]"
            />

            <div className="absolute inset-x-2 bottom-2 rounded-b-[22px] bg-gradient-to-t from-black/88 via-black/45 to-transparent p-5 sm:p-7">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9fc3ff] sm:text-xs">
                {heroImage.eyebrow}
              </p>
              <p className="max-w-[520px] text-[22px] font-bold leading-tight text-white sm:text-[30px]">
                {heroImage.label}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}




