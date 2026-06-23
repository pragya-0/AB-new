import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

export default function BioHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white md:px-10 md:py-28">
      <div className="absolute left-[-260px] top-[-220px] h-[640px] w-[640px] rounded-full bg-[#0057ff]/22 blur-[190px]" />
      <div className="absolute bottom-[-260px] right-[-280px] h-[680px] w-[680px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="mb-6 text-[11px] font-black uppercase tracking-[0.42em] text-[#58a0ff]">
            Biography
          </p>

          <h1 className="max-w-[720px] text-[54px] font-black leading-[0.86] tracking-[-0.075em] md:text-[86px]">
            Arijit Bhattacharyya
          </h1>

          <p className="mt-7 max-w-[720px] text-[22px] font-black leading-tight tracking-[-0.035em] text-white md:text-[30px]">
            Serial Entrepreneur. Technologist. Author. Speaker. Investor.
          </p>

          <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-white/68">
            Building technology, startups, creative IP and global innovation
            ecosystems since 1998 — across AI, games, VR, blockchain,
            education, investment and international business.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/speaking"
              className="rounded-full bg-[#0057ff] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1672ff]"
            >
              Invite To Speak →
            </a>

            <a
              href="#journey"
              className="rounded-full border border-[#2d74ff]/45 bg-[#0057ff]/10 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#a8c8ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
            >
              Explore Journey →
            </a>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-6 rounded-[48px] bg-[#0057ff]/22 blur-3xl" />

          <div className="relative overflow-hidden rounded-[38px] border border-[#4d8cff]/35 bg-white/[0.04] p-2 shadow-[0_45px_140px_rgba(0,87,255,0.28)]">
            <SmartImage
              src={`${bio}helicopter-bio.jpeg`}
              alt="Arijit Bhattacharyya biography"
              className="h-[360px] w-full rounded-[30px] object-cover object-center md:h-[520px]"
            />

            <div className="absolute inset-2 rounded-[30px] bg-gradient-to-t from-black/78 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#8bb7ff]">
                Since 1998
              </p>

              <p className="mt-3 max-w-[560px] text-[25px] font-black leading-[0.95] tracking-[-0.05em] text-white md:text-[34px]">
                Riding Tigers Since 1998.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}