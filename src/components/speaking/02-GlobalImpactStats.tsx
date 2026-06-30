import { motion } from "framer-motion";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const thought = "/assets/thought-leadership/";
const blog = "/assets/blog/";

type ThoughtCard = {
  title: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  imageWrapClass: string;
  imageClass: string;
};

const topics: ThoughtCard[] = [
  {
    title: "AI & GenAI",
    label: "Artificial Intelligence",
    description:
      "How artificial intelligence and generative systems are reshaping entrepreneurship, education, governance, creativity and business strategy.",
    image: `${thought}genai.jpeg`,
    alt: "Arijit Bhattacharyya speaking on AI and generative intelligence for entrepreneurship education governance and future business",
    imageWrapClass: "h-[250px] sm:h-[275px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[92%] w-auto max-w-[92%] rounded-[18px] object-contain object-center",
  },
  {
    title: "Blockchain & Digital Economies",
    label: "Digital Economy",
    description:
      "Digital economies, decentralized systems, tokenization, blockchain adoption and the future of financial ecosystems.",
    image: `${thought}blockchain.jpeg`,
    alt: "Arijit Bhattacharyya blockchain speaker on digital economies decentralized systems tokenization and future financial ecosystems",
    imageWrapClass: "h-[250px] sm:h-[275px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[18px] object-contain object-center",
  },
  {
    title: "Startup & Founder Ecosystems",
    label: "Startup Ecosystems",
    description:
      "Founder communities, innovation networks, accelerators, startup-growth pathways and ecosystem-building for early-stage ventures.",
    image: `${thought}startup.jpeg`,
    alt: "Arijit Bhattacharyya entrepreneur speaking on startup ecosystems founders accelerators and innovation networks",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
  {
    title: "Gaming, IP & Storytelling",
    label: "Gaming & IP",
    description:
      "Interactive entertainment, intellectual property, digital humans, virtual characters and next-generation storytelling experiences.",
    image: `${thought}gaming-ip-storytelling.jpeg`,
    alt: "Arijit Bhattacharyya game development speaker on gaming intellectual property storytelling digital humans and virtual characters",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
  {
    title: "Metaverse & VR",
    label: "Immersive Tech",
    description:
      "Virtual reality, XR, metaverse platforms and immersive technologies transforming learning, collaboration and future experiences.",
    image: `${thought}metaverse-VR.jpg`,
    alt: "Arijit Bhattacharyya virtual reality speaker on metaverse VR XR immersive learning and future experiences",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
  {
    title: "Global Business & Scaling",
    label: "Global Business",
    description:
      "Cross-border growth, international partnerships, business expansion and global innovation strategies for emerging ventures.",
    image: `${thought}global-business-scaling.jpeg`,
    alt: "Arijit Bhattacharyya global speaker on business scaling international partnerships and innovation strategies",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
  {
    title: "Community & Diplomacy",
    label: "Community Impact",
    description:
      "Technology-enabled communities, inclusion, education, diplomacy and long-term ecosystem development across markets.",
    image: `${thought}community.jpeg`,
    alt: "Arijit Bhattacharyya speaking on community diplomacy education inclusion and ecosystem development",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
  {
    title: "Investment & Innovation Ecosystems",
    label: "Capital Networks",
    description:
      "Connecting founders, capital, institutions and innovation platforms into stronger startup and business-growth ecosystems.",
    image: `${blog}investment.png`,
    alt: "Arijit Bhattacharyya speaking on investment innovation ecosystems startup capital and founder growth",
    imageWrapClass: "h-[205px] sm:h-[220px] lg:h-[235px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[16px] object-contain object-center",
  },
];

const firstRow = topics.slice(0, 2);
const secondRow = topics.slice(2, 5);
const thirdRow = topics.slice(5, 8);

function ThoughtLeadershipCard({
  topic,
  index,
}: {
  topic: ThoughtCard;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group overflow-hidden rounded-[24px] border border-blue-200 bg-white shadow-[0_16px_48px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_64px_rgba(0,87,255,0.13)]"
    >
      <div
        className={`flex items-center justify-center border-b border-blue-100 bg-gradient-to-br from-white via-[#f6faff] to-[#eaf3ff] ${topic.imageWrapClass}`}
      >
        <SmartImage
          src={topic.image}
          alt={topic.alt}
          className={`${topic.imageClass} transition duration-500 group-hover:scale-[1.01]`}
        />
      </div>

      <div className="p-5">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0057ff]">
          {topic.label}
        </p>

        <h3 className="text-[22px] font-bold leading-tight tracking-[-0.035em] text-[#07101f]">
          {topic.title}
        </h3>

        <p className="mt-3 text-[14.5px] font-normal leading-7 text-[#475569]">
          {topic.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function GlobalImpactStats() {
  return (
    <section
      id="thought-leadership"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6faff] to-[#e8f1ff] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0057ff]">
              Thought Leadership
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1] tracking-[-0.055em] text-[#07101f] sm:text-5xl lg:text-6xl">
              Ideas, Industries & Future Technologies
            </h2>
          </div>

          <p className="max-w-3xl text-base font-normal leading-8 text-[#475569] sm:text-lg lg:pb-2">
            The conversations span entrepreneurship, artificial intelligence,
            gaming, digital economies, investment ecosystems and emerging
            technologies.
          </p>
        </motion.div>

        <div className="mt-8 space-y-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {firstRow.map((topic, index) => (
              <ThoughtLeadershipCard
                key={topic.title}
                topic={topic}
                index={index}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {secondRow.map((topic, index) => (
              <ThoughtLeadershipCard
                key={topic.title}
                topic={topic}
                index={index + firstRow.length}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {thirdRow.map((topic, index) => (
              <ThoughtLeadershipCard
                key={topic.title}
                topic={topic}
                index={index + firstRow.length + secondRow.length}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}