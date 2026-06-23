import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import BioPill from "../bio/BioPill";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

const proof = [
  "Global Speaker",
  "AI • Blockchain • Gaming",
  "Founder of Virtualinfocom",
  "Since 1998",
];

const stats = [
  ["2100+", "Events"],
  ["102+", "Countries"],
  ["7000+", "Startups"],
  ["10000+", "Students"],
];

export default function SpeakingHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white md:px-10 md:py-16">
      <div className="absolute left-[-260px] top-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/20 blur-[160px]" />
      <div className="absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          {proof.map((item) => (
            <BioPill key={item} dark>
              {item}
            </BioPill>
          ))}
        </motion.div>

        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.42em] text-[#69aaff]">
              Latest Speaks
            </p>

            <h1 className="max-w-[760px] text-[48px] font-black leading-[0.88] tracking-[-0.075em] md:text-[76px] xl:text-[96px]">
              29+ Years Speaking Across Global Innovation.
            </h1>

            <p className="mt-7 max-w-[680px] text-[18px] leading-8 text-white/68">
              Keynotes, panels and leadership forums across AI, blockchain,
              gaming, startups, investment and future technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1"
              >
                Invite To Speak
                <ArrowRight size={16} />
              </a>

              <a
                href="#global-forums"
                className="rounded-full border border-white/12 bg-white/[0.04] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#2d74ff]"
              >
                Explore Speaks
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(0,87,255,0.16)]">
              <SmartImage
                src={`${speaking}arijit-dubai-ai-blockchain-.jpg.jpeg`}
                fallbacks={[
                  `${speaking}arijit-dubai-ai-blockchain-.jpg (1).jpeg`,
                  `${speaking}1.jpg.jpeg`,
                ]}
                alt="Arijit Bhattacharyya speaking at Dubai AI Blockchain and global innovation forum"
                className="h-[420px] w-full rounded-[32px] object-cover object-center md:h-[620px] xl:h-[700px]"
              />

              <div className="absolute inset-3 rounded-[32px] bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#8fc2ff]">
                  Dubai • AI • Blockchain
                </p>

                <h2 className="max-w-[680px] text-[32px] font-black leading-[0.92] tracking-[-0.055em] text-white md:text-[52px]">
                  Global platforms for technology, investment and leadership.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-[48px] font-black leading-none tracking-[-0.07em] text-[#69aaff]">
                {value}
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/55">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}