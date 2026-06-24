import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

export default function BioHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 md:px-10 md:py-24 xl:py-28">
      <div className="absolute left-[-260px] top-[-220px] h-[640px] w-[640px] rounded-full bg-[#0057ff]/22 blur-[190px]" />
      <div className="absolute bottom-[-260px] right-[-280px] h-[680px] w-[680px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center xl:gap-14">
        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7fb8ff] md:text-[12px]">
            Biography
          </p>

          <h1 className="max-w-[760px] text-[52px] font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-[60px] md:text-[78px] xl:text-[88px]">
            Arijit Bhattacharyya
          </h1>

          <p className="mt-7 max-w-[760px] text-[22px] font-bold leading-[1.1] tracking-[-0.035em] text-white md:text-[30px]">
            Serial Entrepreneur since 1998. Technologist. Angel Investor. TEDx
            Speaker. Author. Global Innovation Builder.
          </p>

          <p className="mt-6 max-w-[780px] text-[16px] font-normal leading-8 tracking-[-0.01em] text-white/70 md:text-[18px]">
            Building technology, startups, creative IP and global innovation
            ecosystems since 1998 — across AI, games, VR, AR, blockchain,
            education, investment, international business and future
            technologies.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Government Advisor",
              "National Startup Award Jury",
              "Gen AI Developer",
              "VR / AR Specialist",
              "Blockchain Specialist",
              "Global Speaker",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/contact"
              className="rounded-full bg-[#0057ff] px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
            >
              Connect With Arijit →
            </a>

            <a
              href="#journey"
              className="rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
            >
              Explore Journey →
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 rounded-[36px] bg-[#0057ff]/22 blur-3xl md:-inset-6 md:rounded-[48px]" />

          <div className="relative overflow-hidden rounded-[28px] border border-[#4d8cff]/35 bg-white/[0.04] p-2 shadow-[0_35px_100px_rgba(0,87,255,0.24)] md:rounded-[38px] md:shadow-[0_45px_140px_rgba(0,87,255,0.28)]">
            <SmartImage
              src={`${bio}helicopter-bio.jpeg`}
              alt="Arijit Bhattacharyya biography portrait representing his global innovation journey since 1998"
              className="h-[360px] w-full rounded-[22px] object-cover object-center sm:h-[430px] md:h-[520px] md:rounded-[30px] lg:h-[560px]"
            />

            <div className="absolute inset-2 rounded-[22px] bg-gradient-to-t from-black/82 via-black/20 to-transparent md:rounded-[30px]" />

            <div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8bb7ff]">
                Since 1998
              </p>

              <p className="mt-3 max-w-[560px] text-[25px] font-extrabold leading-[0.95] tracking-[-0.05em] text-white md:text-[34px]">
                Riding Tigers Since 1998.
              </p>

              <p className="mt-3 max-w-[520px] text-[13px] font-normal leading-6 text-white/68 md:text-[15px]">
                Technology. Business. Creativity. Influence — brought together
                through one global founder journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}