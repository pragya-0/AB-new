import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";
const gameworlds = "/assets/gameworlds/";

const credibilityChips = [
  "Microsoft Technologies",
  "Nokia",
  "Intel Software Partner Ecosystem",
  "Google Singapore",
  "Axis Bank",
  "ADB",
  "McKinsey-linked Innovation",
  "Smart Cities",
  "FinTech",
  "IoT",
  "Digital Twins",
  "Blockchain",
  "Artificial Intelligence",
  "GenAI",
];

const expertiseGroups = [
  {
    eyebrow: "Immersive Technologies",
    title: "Virtual Reality, Augmented Reality & Digital Humans",
    image: `${gameworlds}ip-character-real-human.jpeg`,
    alt: "Arijit Bhattacharyya virtual reality speaker and technology innovator working with AR XR digital humans and immersive character systems",
    text:
      "Working in Virtual Reality since 2006 across healthcare, defence, training, entertainment, education, banking simulation, real estate and immersive experiences. The work later expanded into Augmented Reality, XR, spatial technology and digital human creation using real actors, models and celebrities.",
    points: [
      "VR since 2006",
      "AR, XR & mixed reality systems",
      "Healthcare, defence & industrial simulation",
      "Digital humans & spatial computing",
    ],
  },
  {
    eyebrow: "Gaming & Creative Technology",
    title: "Game Development, Animation & Original IP",
    image: `${bio}speech.jpeg`,
    alt: "Arijit Bhattacharyya entrepreneur and game development innovator building animation original IP and interactive storytelling platforms",
    text:
      "Building games since 1998 across PC, mobile, VR, AR and emerging platforms. The focus has been on original characters, mythology-inspired worlds, superheroes, animation pipelines, interactive storytelling and creative intellectual property.",
    points: [
      "Game development since 1998",
      "500+ games, VR & AR projects",
      "350+ characters & digital humans",
      "Original IP, animation & interactive storytelling",
    ],
  },
  {
    eyebrow: "AI & Deep Technology",
    title: "Artificial Intelligence, GenAI, LLMs & Blockchain",
    image: `${speaking}finland.jpg`,
    alt: "Arijit Bhattacharyya AI speaker India working across GenAI LLM NLP blockchain cybersecurity and deep technology innovation",
    text:
      "Technology work includes artificial intelligence, machine learning, GenAI, LLMs, NLP, automation, virtual agents, blockchain systems, digital identity solutions and cyber-security advisory. The focus is practical adoption across business, education, startups and enterprise ecosystems.",
    points: [
      "AI, GenAI & Machine Learning",
      "LLMs, NLP & intelligent automation",
      "Blockchain & digital identity",
      "Cyber Security & enterprise trust",
    ],
  },
  {
    eyebrow: "Enterprise Technology Systems",
    title: "Enterprise Technology, IoT, FinTech & Smart Cities",
    image: `${bio}global-speech-stage.jpeg`,
    alt: "Arijit Bhattacharya technology entrepreneur connected with enterprise technology IoT fintech smart cities and digital transformation leadership",
    text:
      "The journey started with Visual Basic and Microsoft technologies before expanding into enterprise systems, product strategy, digital banking, IoT, smart cities, digital twins and innovation ecosystems connected with global institutions and business platforms.",
    points: [
      "Microsoft & enterprise systems",
      "IoT, smart cities & digital twins",
      "FinTech & digital banking",
      "Innovation strategy & technology leadership",
    ],
  },
];

export default function FutureTechVision() {
  return (
    <BioSectionShell
      id="core-technology-expertise"
      eyebrow="Technology Expertise Since 1998"
      title="Building Technologies Across Industries, Platforms & Innovation Cycles"
      text="A technology journey spanning immersive media, game development, artificial intelligence, GenAI, blockchain systems, enterprise technology, smart cities, fintech and future innovation platforms."
      dark
    >
      <div className="space-y-6 md:space-y-8">
        {expertiseGroups.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_18px_70px_rgba(0,87,255,0.08)] transition duration-300 hover:border-[#2d74ff]/45 sm:rounded-[34px] lg:rounded-[38px]"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[280px] items-center justify-center bg-[#07101f] p-4 sm:h-[360px] sm:p-5 md:h-[460px] lg:h-full lg:min-h-[520px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full rounded-[20px] object-contain p-2 transition duration-700 group-hover:scale-[1.025] sm:rounded-[24px] sm:p-4 lg:p-5"
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-12">
                  <div>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7fb8ff] sm:tracking-[0.3em]">
                      {item.eyebrow}
                    </p>

                    <h3 className="max-w-[780px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[780px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-white/72 sm:text-[17px] lg:text-[18px]">
                      {item.text}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 group-hover:border-white/16"
                        >
                          <p className="text-[14px] font-normal leading-[1.7] text-white/68 sm:text-[15px]">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.6 }}
        className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_70px_rgba(0,87,255,0.08)] sm:rounded-[34px] sm:p-8 lg:rounded-[38px] lg:p-10"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Technology Ecosystem Experience
        </p>

        <h3 className="mt-4 max-w-[820px] text-[32px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
          Built across products, partners, platforms and enterprise innovation
          conversations.
        </h3>

        <div className="mt-8 flex flex-wrap gap-3">
          {credibilityChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-[#7fb8ff]/40 hover:text-white"
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}