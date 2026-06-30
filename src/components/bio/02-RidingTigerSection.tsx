import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

export default function RidingTigerSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[34px] border border-[#c3ddff] bg-[#eef5ff] p-2 shadow-[0_28px_90px_rgba(0,87,255,0.12)]"
        >
          <SmartImage
            src={`${bio}stage-bio-banner.jpeg`}
            alt="Arijit Bhattacharyya speaking on a global stage"
            className="h-[320px] w-full rounded-[26px] object-cover object-center md:h-[470px]"
          />

         
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.4em] text-[#0057ff]">
            Positioning
          </p>

          <h2 className="max-w-[840px] text-[42px] font-black leading-[0.92] tracking-[-0.065em] text-[#07101f] md:text-[68px]">
            Where Technology Meets Imagination.
          </h2>

          <div className="mt-8 max-w-[840px] space-y-5 text-[17px] leading-9 text-[#334155]">
            <p>
              For more than 29 years, Arijit Bhattacharyya has worked at the
              intersection of technology, entrepreneurship, creativity and
              global collaboration.
            </p>

            <p>
              Rather than operating in a single industry, his journey has
              connected AI, games, immersive technologies, startups, education,
              investment, storytelling and international ecosystems into one
              body of work.
            </p>
          </div>

          <div className="mt-10 border-l-4 border-[#0057ff] pl-6">
            <p className="max-w-[760px] text-[28px] font-black leading-[1.02] tracking-[-0.055em] text-[#07101f] md:text-[42px]">
              One journey.
              <br />
              Multiple worlds.
              <br />
              One connected ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
