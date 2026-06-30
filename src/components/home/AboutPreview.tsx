import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPreview() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[30px] border border-black/5 bg-[#f7fbff] px-5 py-14 shadow-[0_30px_100px_rgba(15,23,42,0.06)] sm:rounded-[40px] sm:px-8 md:py-18 lg:px-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600 sm:text-sm"
            >
              About Arijit
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[700px] text-[38px] font-extrabold leading-[1.02] tracking-[-0.05em] text-black sm:text-[48px] lg:text-[60px]"
            >
              Riding Tigers
              <span className="block text-blue-600">Since 1998</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[680px] text-[16px] font-normal leading-8 text-black/68 sm:text-[18px]"
            >
              From writing game code and building Virtualinfocom to mentoring
              founders, investing in startups and connecting businesses across
              continents, the story is about turning technology into ecosystems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-[760px]"
            >
              <div className="rounded-2xl border border-blue-600/10 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <p className="text-[28px] font-bold leading-none tracking-[-0.04em] text-black">
                  1998
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-black/55">
                  Founder Journey
                </p>
              </div>

              <div className="rounded-2xl border border-blue-600/10 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <p className="text-[28px] font-bold leading-none tracking-[-0.04em] text-black">
                  102+
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-black/55">
                  Countries Network
                </p>
              </div>

              <div className="rounded-2xl border border-blue-600/10 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <p className="text-[28px] font-bold leading-none tracking-[-0.04em] text-black">
                  AI • VR • IP
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-black/55">
                  Future-Tech Work
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9">
              <Link
                to="/bio"
                aria-label="Read the full biography of Arijit Bhattacharyya"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-white px-8 py-4 text-[15px] font-bold text-black transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Read Full Story
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-blue-600/10 blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:rounded-[36px]">
              <img
                src="/assets/hero/about-arijit.jpeg"
                alt="Arijit Bhattacharyya founder and technology entrepreneur"
                className="h-[320px] w-full rounded-[22px] object-cover object-center sm:h-[420px] lg:h-[520px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/55 p-5 backdrop-blur-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Kolkata To Global
                </p>
                <p className="mt-2 text-[20px] font-bold leading-tight text-white sm:text-[24px]">
                  Technology. Startups. Investment. Global Platforms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
