
import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";
import { industries } from "../../data/bio/industriesData";

export default function IndustriesSection() {
  return (
    <BioSectionShell
      eyebrow="Cross-Industry Experience"
      title="Industries Connected Through Technology & Entrepreneurship"
      text="Over nearly three decades, Arijit Bhattacharyya's work has extended across technology, education, media, finance, gaming, entrepreneurship and global business ecosystems."
      dark
    >
      <motion.div
        {...fadeUp}
        className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04]"
      >
        <div className="border-b border-white/10 px-8 py-8 md:px-10">
          <h3 className="max-w-[900px] text-[34px] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[58px]">
            29+ Years Across Multiple Innovation Ecosystems
          </h3>

          <p className="mt-5 max-w-[900px] text-[16px] leading-8 text-white/65">
            From AI and gaming to education, investment, manufacturing,
            entrepreneurship and international collaboration.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {industries.map(([title, text]) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="bg-[#030712] p-7 transition duration-300 hover:bg-[#081324]"
            >
              <h4 className="text-[22px] font-black leading-tight tracking-[-0.04em] text-white">
                {title}
              </h4>

              <p className="mt-4 text-[14px] leading-7 text-white/60">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}

