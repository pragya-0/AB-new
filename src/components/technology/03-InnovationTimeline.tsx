import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";
const gameworlds = "/assets/gameworlds/";
const gallery = "/assets/gallery/";

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
    title: "Virtualinfocom, Games & Academy Foundation",
    label: "Game Development • Academy • Software",
    text:
      "Founded Virtualinfocom as a game development company and academy direction, combining software, animation, training and early digital IP creation.",
    image: `${bio}casino-gaming-speech.jpeg`,
    position: "object-center",
  },
  {
    year: "2000",
    title: "Python, Programming & Grassroots Technology Education",
    label: "Python • Training • Grassroots Outreach",
    text:
      "The early technology direction expanded into programming, Python and grassroots-level technology education, including regional learning and student-focused initiatives.",
    image: `${bio}speech.jpeg`,
    position: "object-center",
  },
  {
    year: "2002",
    title: "Early 3D Game Development Direction",
    label: "3D Games • Interactive Media • Indian Gaming",
    text:
      "The work moved into one of India’s early 3D game development waves, helping shape interactive media and game-building when the local ecosystem was still emerging.",
    image: `${gameworlds}ip-character-real-human.jpeg`,
    fit: "contain",
  },
  {
    year: "2004",
    title: "VRML & Early Virtual Reality Exploration",
    label: "VRML • Virtual Reality • Immersive Web",
    text:
      "Exploration expanded toward Virtual Reality Markup Language, immersive web environments and early virtual-reality concepts before VR became mainstream.",
    image: `${speaking}techno-vr-ar.jpg`,
    fit: "contain",
  },
  {
    year: "2006",
    title: "Early RPG, PC Game & VR Direction",
    label: "RPG • PC Games • VR Systems",
    text:
      "The direction grew into early Indian RPG and PC game work, alongside virtual reality, simulation thinking and immersive technology applications.",
    image: `${speaking}deeptech-training.jpg`,
    fit: "contain",
  },
  {
    year: "2016",
    title: "Blockchain, Future Tech & Movie-Based Games",
    label: "Blockchain • Digital Trust • 360+ Character IP",
    text:
      "The technology direction moved into blockchain and future-tech ecosystems while the creative technology side expanded into movie-based games and 360+ IP and character-led worlds.",
    image: `${bio}Arijit-Bhattacharyya-blockchain.png`,
    fit: "contain",
  },
  {
    year: "2020",
    title: "Dubai Investor Platforms, Future Medicine & ADB",
    label: "Dubai • Future of Medicine • ADB",
    text:
      "The global innovation layer expanded through investor platforms, future-medicine conversations, Asian Development Bank consulting direction and international ecosystem participation.",
    image: `${bio}dev-google.png`,
    fit: "contain",
  },
  {
    year: "2023",
    title: "GenAI, Smart Cities & Creative Automation",
    label: "GenAI • Smart City • Ads • Music",
    text:
      "The focus expanded into generative AI, smart-city thinking, AI-assisted ads, music videos, creative automation and applied future technology.",
    image: `${speaking}finland.jpg`,
    fit: "contain",
  },
  {
    year: "2025 / 2026",
    title: "GenAI Films, Energy & Future Venture Systems",
    label: "GenAI Movie • 8 Metals • Energy",
    text:
      "The next direction connects GenAI films, digital humans, spatial storytelling, materials, energy and future venture ecosystems such as 8 Metals and climate-aware technology directions.",
    image: `${gallery}ashwathama-poster-vertical.png`,
    fit: "contain",
  },
];

export default function InnovationTimeline() {
  return (
    <BioSectionShell
      id="technology-timeline"
      dark
      eyebrow="Technology Evolution"
      title="Technology Evolution Across Key Innovation Waves"
      text="A sharper timeline built from verified project milestones: games, software, Python, VRML, VR, blockchain, GenAI, smart cities and future venture ecosystems."
      className="bg-[#03070d]"
    >
      <div className="space-y-6 md:space-y-8">
        {milestones.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, delay: index * 0.035 }}
              whileHover={{ y: -3 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_18px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:border-[#2d74ff]/45 sm:rounded-[34px] lg:rounded-[38px]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[260px] items-center justify-center bg-[#07101f] p-4 sm:h-[340px] md:h-[430px] lg:min-h-[500px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={`Arijit Bhattacharyya technology timeline ${item.year} ${item.title}`}
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

                  <h3 className="max-w-[700px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-[740px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 sm:text-[17px] lg:text-[18px]">
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
