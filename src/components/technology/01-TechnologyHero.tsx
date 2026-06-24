import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import BioPill from "../bio/BioPill";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

const domains = ["AI", "VR", "Blockchain", "Gaming", "DeepTech"];

export default function TechnologyHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:py-14 md:px-10 md:py-20">
      <div className="absolute left-[-260px] top-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/20 blur-[160px]" />
      <div className="absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7fb8ff] md:text-[12px]">
              Technology Ecosystem
            </p>

           <h1 className="max-w-[620px] text-[42px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[58px] xl:text-[68px]">
              Building Products, Platforms & Technology Ecosystems Since 1998
            </h1>

            <p className="mt-7 max-w-[720px] text-[17px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 sm:text-[18px]">
              From game development and virtual reality to AI, blockchain and
              deep technology, Arijit Bhattacharyya has built products,
              communities and innovation platforms across multiple industries.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {domains.map((item) => (
                <BioPill key={item} dark>
                  {item}
                </BioPill>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#technology-domains"
                className="inline-flex items-center gap-2 rounded-full bg-[#0057ff] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1d6dff]"
              >
                Explore Technologies
                <ArrowRight size={16} />
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#2d74ff] hover:bg-white/[0.07]"
              >
                Technology Advisory
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_24px_80px_rgba(0,87,255,0.12)] sm:rounded-[36px] sm:p-3 lg:rounded-[42px] lg:shadow-[0_30px_100px_rgba(0,87,255,0.14)]">
              <SmartImage
                src={`${speaking}maly 2.jpeg`}
                alt="Arijit Bhattacharyya at technology and blockchain innovation forum"
                className="h-[360px] w-full rounded-[24px] object-cover object-center sm:h-[430px] sm:rounded-[28px] md:h-[560px] lg:rounded-[32px] xl:h-[620px]"
              />

              <div className="absolute inset-2 rounded-[24px] bg-gradient-to-t from-black/88 via-black/12 to-transparent sm:inset-3 sm:rounded-[28px] lg:rounded-[32px]" />

              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-5 sm:bottom-7 sm:left-7 sm:right-7 md:flex-row md:flex-wrap md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8fc2ff]">
                    Built Across
                  </p>

                  <h2 className="mt-2 max-w-[520px] text-[28px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
                    Products, labs, platforms and future industries.
                  </h2>
                </div>

                <div className="w-fit rounded-3xl border border-white/15 bg-black/65 p-4 backdrop-blur-xl sm:p-5">
                  <p className="text-[44px] font-bold leading-none tracking-[-0.05em] text-[#69aaff] md:text-[56px]">
                    29+
                  </p>

                  <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/60">
                    Years Building
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}