import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";

const platforms = [
  {
    title: "Enterprise Technology & Digital Transformation",
    eyebrow: "Enterprise Systems",
    text:
      "Technology work spans enterprise modernization, digital transformation, automation and innovation programs across public and private organizations. The journey includes collaborations connected with Microsoft technologies, Nokia, enterprise software ecosystems and digital adoption initiatives.",
    image: `${bio}south-mou.png`,
    alt: "Arijit Bhattacharyya technology entrepreneur connected with enterprise technology digital transformation Microsoft Nokia and public private innovation ecosystems",
    fit: "contain",
  },
  {
    title: "AI, GenAI & Intelligent Systems",
    eyebrow: "AI & Automation",
    text:
      "Applied Artificial Intelligence, GenAI, LLMs, NLP, intelligent automation and digital-human technologies across education, manufacturing, finance, healthcare, media and startup ecosystems.",
    image: `${speaking}NTPC.jpg`,
    alt: "Arijit Bhattacharya AI speaker India working across GenAI LLM NLP intelligent automation digital humans and enterprise innovation",
    fit: "contain",
  },
  {
    title: "Blockchain, FinTech & Smart Infrastructure",
    eyebrow: "Digital Trust",
    text:
      "Work across blockchain ecosystems, digital identity, fintech, smart cities, IoT, digital twins, predictive maintenance and next-generation digital infrastructure.",
    image: `${speaking}china.jpg`,
    alt: "Arijit Bhattacharyya blockchain speaker and deeptech innovator working across fintech smart cities IoT digital twins and digital trust infrastructure",
    fit: "cover",
  },
  {
    title: "Global Technology Ecosystems",
    eyebrow: "Global Platforms",
    text:
      "Technology conversations, consulting and ecosystem building connected with institutions, enterprises and innovation networks including Google Singapore, Axis Bank, Asian Development Bank, McKinsey-linked programs and global technology forums.",
    image: `${speaking}korea.jpg`,
    alt: "Arijit Bhattacharjee global technology ecosystem speaker connected with Google Singapore Axis Bank ADB McKinsey innovation forums and international deeptech platforms",
    fit: "cover",
  },
];

export default function ProductsPlatforms() {
  return (
    <BioSectionShell
      id="technology-platforms"
      eyebrow="Technology Platforms"
      title="Enterprise Systems, Intelligent Platforms & Global Technology Ecosystems"
      text="Technology is not a single domain. The journey connects enterprise systems, AI, GenAI, blockchain, fintech, smart infrastructure, digital transformation and global innovation platforms."
      className="bg-gradient-to-br from-white via-[#f8fbff] to-[#eaf3ff]"
    >
      <div className="space-y-6 md:space-y-8">
        {platforms.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="group overflow-hidden rounded-[28px] border border-[#cfe2ff] bg-white shadow-[0_18px_55px_rgba(0,87,255,0.08)] transition duration-300 hover:border-[#0057ff]/35 hover:shadow-[0_24px_80px_rgba(0,87,255,0.12)] sm:rounded-[34px] lg:rounded-[38px]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[270px] items-center justify-center bg-[#f5f9ff] p-4 sm:h-[350px] sm:p-5 md:h-[440px] lg:h-full lg:min-h-[510px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full rounded-[20px] transition duration-700 group-hover:scale-[1.025] sm:rounded-[24px] lg:rounded-[28px] ${
                        item.fit === "contain"
                          ? "object-contain p-2 sm:p-4"
                          : "object-cover object-center"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-14">
                  <div>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0057ff] sm:text-[11px]">
                      {item.eyebrow}
                    </p>

                    <h3 className="max-w-[680px] text-[34px] font-extrabold leading-[1] tracking-[-0.045em] text-[#07101f] md:text-[46px]">
                      {item.title}
                    </h3>

                    <div className="my-6 h-1 w-20 rounded-full bg-[#0057ff] sm:h-1.5 sm:w-24" />

                    <p className="max-w-[700px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-[#475569] sm:text-[17px] lg:text-[18px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </BioSectionShell>
  );
}
