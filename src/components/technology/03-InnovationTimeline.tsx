import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";

type Milestone = {
  year: string;
  title: string;
  label: string;
  text: string;
  image: string;
  fit?: "cover" | "contain";
  position?: string;
};

const milestones: Milestone[] = [
  {
    year: "1998",
    title: "Technology Foundation Begins",
    label: "Game Development • Animation • Digital IP",
    text: "The technology journey begins with game development, animation, training and original digital IP creation — building from the ground up when the Indian gaming ecosystem was still emerging.",
    image: `${bio}casino-gaming-speech.jpeg`,
    position: "object-center",
  },
  {
    year: "2006",
    title: "VR & Simulation Thinking",
    label: "Virtual Reality • AR • Immersive Systems",
    text: "The work expands into virtual reality, immersive experiences, simulation thinking and future-facing digital interaction design.",
    image: `${speaking}techno-vr-ar.jpg`,
    fit: "contain",
  },
  {
    year: "2016",
    title: "Blockchain & Digital Trust",
    label: "Blockchain • Web3 • Digital Finance",
    text: "The technology journey moves into blockchain, digital finance, decentralized systems, identity, tokenization and future trust-based ecosystems.",
    image: `${bio}Arijit-Bhattacharyya-blockchain.png`,
    fit: "contain",
  },
  {
    year: "2020",
    title: "Global Technology Ecosystems",
    label: "Startups • Platforms • Global Networks",
    text: "The work scales from individual products to wider ecosystems — connecting founders, institutions, accelerators and technology communities across countries.",
    image: `${bio}dev-google.png`,
    fit: "contain",
  },
  {
    year: "2023",
    title: "AI & DeepTech Expansion",
    label: "Artificial Intelligence • DeepTech • Future Skills",
    text: "The focus expands into applied AI, deep technology training, automation, digital humans, startup readiness and institutional future-skills development.",
    image: `${speaking}deeptech-training.jpg`,
    fit: "contain",
  },
  {
    year: "2026",
    title: "Future Innovation Systems",
    label: "Generative AI • Digital Humans • Spatial Tech",
    text: "The next chapter connects generative AI, digital humans, immersive storytelling, spatial computing and future-ready innovation ecosystems.",
    image: `${bio}stage-bio-banner.jpeg`,
    position: "object-center",
  },
];

export default function InnovationTimeline() {
  return (
    <BioSectionShell
      id="technology-timeline"
      dark
      eyebrow="Technology Evolution"
      title="A 29+ Year Journey Through Technology Waves"
      text="From early game development to virtual reality, blockchain, AI and future innovation ecosystems, the technology story is built across multiple waves — not one trend."
      className="bg-[#03070d]"
    >
      <div className="space-y-6 md:space-y-8">
        {milestones.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_18px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:border-[#2d74ff]/45 sm:rounded-[34px] lg:rounded-[38px] lg:shadow-[0_24px_90px_rgba(0,87,255,0.10)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[260px] items-center justify-center overflow-hidden bg-[#07101f] p-4 sm:h-[340px] sm:p-5 md:h-[430px] lg:h-full lg:min-h-[500px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={`Arijit Bhattacharyya technology evolution ${item.year} ${item.title}`}
                      className={`h-full w-full rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] ${
                        item.fit === "contain"
                          ? "object-contain p-2 sm:p-4"
                          : `object-cover ${item.position ?? "object-center"}`
                      }`}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                  <p className="mb-5 text-[44px] font-bold leading-none tracking-[-0.05em] text-[#69aaff] md:text-[56px]">
                    {item.year}
                  </p>

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7fb8ff]">
                    {item.label}
                  </p>

                  <h3 className="max-w-[640px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-[700px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 sm:text-[17px] lg:text-[18px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </BioSectionShell>
  );
}