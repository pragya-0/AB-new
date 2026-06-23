import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const thought = "/assets/thought-leadership/";

const featured = {
  title: "AI & Generative Intelligence",
  description:
    "Exploring how artificial intelligence is reshaping entrepreneurship, education, governance, creativity and the future of business.",
  image: `${thought}genai.jpeg`,
};

const topics = [
  {
    title: "Blockchain & Digital Finance",
    description:
      "Digital economies, decentralized systems, tokenization and future financial ecosystems.",
    image: `${thought}blockchain.jpeg`,
  },
  {
    title: "Startup Ecosystems",
    description:
      "Founder communities, innovation networks, accelerators and startup growth pathways.",
    image: `${thought}startup.jpeg`,
  },
  {
    title: "Gaming, IP & Digital Humans",
    description:
      "Interactive entertainment, virtual characters, storytelling and next-generation digital experiences.",
    image: `${thought}gaming-ip-storytelling.jpeg`,
  },
  {
    title: "Metaverse, VR & XR",
    description:
      "Immersive technologies transforming learning, collaboration and future experiences.",
    image: `${thought}metaverse-VR.jpg`,
  },
  {
    title: "Global Business Scaling",
    description:
      "Cross-border growth, international partnerships and global innovation strategies.",
    image: `${thought}global-business-scaling.jpeg`,
  },
  {
    title: "Community & Impact",
    description:
      "Technology-enabled communities, inclusion, education and long-term ecosystem development.",
    image: `${thought}community.jpeg`,
  },
];

export default function GlobalImpactStats() {
  return (
    <BioSectionShell
      id="thought-leadership"
      eyebrow="Thought Leadership"
      title="Ideas, Industries & Future Technologies"
      text="The conversations span entrepreneurship, artificial intelligence, gaming, digital economies, investment ecosystems and emerging technologies shaping the future."
      className="bg-gradient-to-br from-white via-[#f5f9ff] to-[#e8f1ff]"
    >
      <div className="space-y-8">
       <motion.article
  {...fadeUp}
  className="overflow-hidden rounded-[38px] border border-[#bdd9ff] bg-white shadow-[0_35px_120px_rgba(0,87,255,0.14)]"
>
  <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
    <div className="relative overflow-hidden bg-[#eef5ff]">
      <SmartImage
        src={featured.image}
        alt={featured.title}
        className="h-[420px] w-full object-cover object-top md:h-[560px] lg:h-[640px]"
      />
    </div>

    <div className="flex flex-col justify-center bg-white p-8 text-[#07101f] md:p-12 lg:p-16">
      <div className="mb-8 h-1.5 w-24 rounded-full bg-[#0057ff]" />

      <p className="mb-5 text-[11px] font-black uppercase tracking-[0.35em] text-[#0057ff]">
        Featured Topic
      </p>

      <h3 className="max-w-[520px] text-[36px] font-black leading-[0.92] tracking-[-0.055em] md:text-[52px]">
        {featured.title}
      </h3>

      <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-[#334155]">
        {featured.description}
      </p>
    </div>
  </div>
</motion.article>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => (
            <motion.article
              key={topic.title}
              {...fadeUp}
              className="overflow-hidden rounded-[30px] border border-[#bdd9ff] bg-white shadow-[0_18px_55px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,87,255,0.14)]"
            >
              <SmartImage
                src={topic.image}
                alt={topic.title}
                className="h-[240px] w-full object-cover object-center"
              />

              <div className="p-6 text-[#07101f]">
                <h3 className="text-[24px] font-black leading-tight tracking-[-0.04em]">
                  {topic.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#475569]">
                  {topic.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}