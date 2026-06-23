import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "../bio/bioMotion";

const services = [
  "Keynotes",
  "Panels",
  "Workshops",
  "Investor Forums",
  "University Sessions",
  "Innovation Programs",
  "AI & DeepTech Talks",
  "Startup Ecosystem Sessions",
];

export default function SpeakingTimeline() {
  return (
    <section
      id="invite-to-speak"
      className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-10"
    >
      <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#0057ff]/25 blur-[170px]" />
      <div className="absolute bottom-[-260px] right-[-180px] h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <motion.div
        {...fadeUp}
        className="relative z-10 mx-auto max-w-[1200px] text-center"
      >
        <p className="mb-5 text-[11px] font-black uppercase tracking-[0.42em] text-[#6faaff]">
          Invite To Speak
        </p>

        <h2 className="mx-auto max-w-[980px] text-[48px] font-black leading-[0.88] tracking-[-0.075em] md:text-[88px]">
          Invite Arijit Bhattacharyya To Speak
        </h2>

        <div className="mx-auto my-9 h-1.5 w-28 rounded-full bg-[#0057ff]" />

        <p className="mx-auto max-w-[820px] text-[18px] leading-8 text-white/68">
          For keynotes, panels, workshops, investor forums, university sessions,
          policy discussions and global innovation programs across AI,
          entrepreneurship, gaming, blockchain, VR, investment and future
          technology.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/invite-to-speak"
            className="inline-flex items-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1"
          >
            Invite To Speak
            <ArrowRight size={16} />
          </a>

          <a
            href="/bio"
            className="rounded-full border border-white/14 bg-white/[0.04] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#2d74ff]"
          >
            View Bio
          </a>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1000px] flex-wrap justify-center gap-3">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/12 bg-white/[0.045] px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#9fc3ff]"
            >
              {service}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}