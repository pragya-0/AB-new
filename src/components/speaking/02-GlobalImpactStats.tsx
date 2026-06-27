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
  alt: "Arijit Bhattacharyya AI speaker on generative intelligence entrepreneurship education governance creativity and future business",
};

const topics = [
  {
    title: "Blockchain & Digital Finance",
    description:
      "Digital economies, decentralized systems, tokenization and future financial ecosystems.",
    image: `${thought}blockchain.jpeg`,
    alt: "Arijit Bhattacharyya blockchain speaker on digital finance decentralized systems tokenization and future financial ecosystems",
  },
  {
    title: "Startup Ecosystems",
    description:
      "Founder communities, innovation networks, accelerators and startup growth pathways.",
    image: `${thought}startup.jpeg`,
    alt: "Arijit Bhattacharyya entrepreneur speaking on startup ecosystems founders accelerators and innovation networks",
  },
  {
    title: "Gaming, IP & Digital Humans",
    description:
      "Interactive entertainment, virtual characters, storytelling and next-generation digital experiences.",
    image: `${thought}gaming-ip-storytelling.jpeg`,
    alt: "Arijit Bhattacharyya game development speaker on gaming intellectual property storytelling and digital humans",
  },
  {
    title: "Metaverse, VR & XR",
    description:
      "Immersive technologies transforming learning, collaboration and future experiences.",
    image: `${thought}metaverse-VR.jpg`,
    alt: "Arijit Bhattacharya virtual reality speaker on metaverse VR XR immersive learning and future experiences",
  },
  {
    title: "Global Business Scaling",
    description:
      "Cross-border growth, international partnerships and global innovation strategies.",
    image: `${thought}global-business-scaling.jpeg`,
    alt: "Arijit Bhattacharyya global speaker on business scaling international partnerships and innovation strategies",
  },
  {
    title: "Community & Impact",
    description:
      "Technology-enabled communities, inclusion, education and long-term ecosystem development.",
    image: `${thought}community.jpeg`,
    alt: "Arijit Bhattacharjee innovator speaking on community impact education inclusion and ecosystem development",
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
          className="overflow-hidden rounded-[34px] border border-[#bdd9ff] bg-white shadow-[0_32px_100px_rgba(0,87,255,0.14)]"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden bg-[#eef5ff]">
              <SmartImage
                src={featured.image}
                alt={featured.alt}
                className="h-[320px] w-full object-cover object-top sm:h-[420px] md:h-[520px] lg:h-[620px]"
              />
            </div>

            <div className="flex flex-col justify-center bg-white p-7 text-[#07101f] sm:p-9 md:p-12 lg:p-14">
              <div className="mb-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0057ff] to-[#69aaff]" />

              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0057ff]">
                Featured Topic
              </p>

              <h3 className="max-w-[560px] text-[32px] font-extrabold leading-[1] tracking-[-0.045em] sm:text-[40px] md:text-[48px]">
                {featured.title}
              </h3>

              <p className="mt-6 max-w-[560px] text-base font-normal leading-8 text-[#334155]">
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
                alt={topic.alt}
                className="h-[220px] w-full object-cover object-center sm:h-[250px] lg:h-[270px]"
              />

              <div className="p-6 text-[#07101f]">
                <h3 className="text-[23px] font-bold leading-tight tracking-[-0.035em] sm:text-[25px]">
                  {topic.title}
                </h3>

                <p className="mt-4 text-[15px] font-normal leading-7 text-[#475569]">
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
