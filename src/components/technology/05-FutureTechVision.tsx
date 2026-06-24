import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";
const gameworlds = "/assets/gameworlds/";

const expertiseGroups = [
  {
    eyebrow: "Immersive Technologies",
    title: "Virtual Reality, Augmented Reality & Digital Humans",
    image: `${gameworlds}ip-character-real-human.jpeg`,
    alt: "Real human transformed into digital IP character using virtual reality and character technology",
    text:
      "Working in Virtual Reality since 2006 across healthcare, defense, training, entertainment, education, banking simulation, real estate and immersive experiences. The work later expanded into Augmented Reality and digital human creation using real actors, models and celebrities.",
    points: [
      "VR games and immersive applications since 2006",
      "Healthcare, defense and training simulations",
      "AR for education, retail, tourism and field operations",
      "Digital humans built from real actors and models",
    ],
  },
  {
    eyebrow: "Gaming & Creative Technology",
    title: "Game Development, Animation & Original IP",
    image: `${bio}speech.jpeg`,
    alt: "Game development animation and creative technology",
    text:
      "Building games since 1998 across PC, mobile, VR, AR and emerging platforms. The focus has been on creating original characters, mythology-inspired worlds, superheroes, animation pipelines and creative intellectual property.",
    points: [
      "Game development since 1998",
      "Real actors converted into 3D game characters",
      "Mythology and superhero game universes",
      "Animation, storytelling and creative IP production",
    ],
  },
  {
    eyebrow: "AI & Deep Technology",
    title: "Artificial Intelligence, Blockchain & Cyber Security",
    image: `${speaking}finland.jpg`,
    alt: "Artificial intelligence blockchain and deep technology innovation",
    text:
      "Technology work includes artificial intelligence, machine learning, virtual agents, blockchain systems, digital identity solutions and cyber-security advisory. The focus is practical technology adoption rather than experimental research alone.",
    points: [
      "Artificial Intelligence and Machine Learning",
      "Natural Language Processing and automation",
      "Blockchain platforms across industries",
      "Cyber-security, risk awareness and digital trust",
    ],
  },
  {
    eyebrow: "Technology Systems",
    title: "Enterprise Technology & Leadership",
    image: `${bio}global-speech-stage.jpeg`,
    alt: "Enterprise technology leadership and innovation systems",
    text:
      "The journey started with Visual Basic and Microsoft technologies before expanding into enterprise systems, product strategy, innovation ecosystems and large technology teams ranging from startup scale to multi-disciplinary execution environments.",
    points: [
      "Early Microsoft VB and .NET adopter",
      "Technology team leadership across multiple domains",
      "Smart-home and enterprise technology advisory",
      "Building systems, processes and scalable technology operations",
    ],
  },
];

export default function FutureTechVision() {
  return (
    <BioSectionShell
      id="core-technology-expertise"
      eyebrow="Core Technology Expertise"
      title="Technology Built Across Multiple Waves of Innovation"
      text="A technology journey spanning immersive media, game development, artificial intelligence, blockchain systems, enterprise technology and future innovation platforms."
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
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] sm:rounded-[34px] lg:rounded-[38px]"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[260px] items-center justify-center bg-[#07101f] p-4 sm:h-[340px] sm:p-5 md:h-[440px] lg:h-full lg:min-h-[500px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full rounded-[20px] object-contain p-2 sm:rounded-[24px] sm:p-4 lg:p-5"
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-12">
                  <div>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7fb8ff] sm:tracking-[0.3em]">
                      {item.eyebrow}
                    </p>

                    <h3 className="max-w-[760px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[760px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/70 sm:text-[17px] lg:text-[18px]">
                      {item.text}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <p className="text-[14px] font-normal leading-[1.7] text-white/65 sm:text-[15px]">
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
    </BioSectionShell>
  );
}