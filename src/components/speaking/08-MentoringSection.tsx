import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type JourneyItem = {
  place: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  fit?: "cover" | "contain";
};

const journey: JourneyItem[] = [
  {
    place: "Ghana",
    title: "Business Summit with the Vice President of Ghana",
    text: "International business, investment and entrepreneurship conversations connecting innovation with national growth priorities.",
    image: `${speaking}ghana.jpg`,
    alt: "Arijit Bhattacharyya speaking at Ghana Business Summit with Vice President of Ghana on investment entrepreneurship venture capital and innovation",
    fit: "cover",
  },
  {
    place: "Thailand",
    title: "Blockchain & Future Finance Forum",
    text: "Public conversations around blockchain, digital finance, Web3 ecosystems and emerging technology-led business models.",
    image: `${speaking}Thailand_blockchain.jpg`,
    alt: "Arijit Bhattacharyya Thailand blockchain forum speaker discussing blockchain technology digital finance Web3 cryptocurrency and innovation",
    fit: "contain",
  },
  {
    place: "Dubai",
    title: "AI, Investment & Global Business",
    text: "Leadership platforms across artificial intelligence, entrepreneurship, family offices, investment and future technology.",
    image: `${speaking}dubai-speaker.png`,
    alt: "Arijit Bhattacharyya Dubai speaker on AI investment entrepreneurship startup funding angel investment and venture capital",
    fit: "cover",
  },
  {
    place: "South Korea",
    title: "Technology, DeepTech & Innovation",
    text: "International technology conversations across innovation, gaming, robotics, deeptech and cross-border collaboration.",
    image: `${speaking}SKorea.png`,
    alt: "Arijit Bhattacharyya South Korea technology conference speaker discussing deeptech gaming robotics innovation and future technology",
    fit: "cover",
  },
  {
    place: "Kazakhstan",
    title: "Digital Bridge & AI Dialogue",
    text: "Global innovation forums focused on artificial intelligence, digital ecosystems, entrepreneurship and future economies.",
    image: `${speaking}kazak.png`,
    alt: "Arijit Bhattacharyya Kazakhstan Digital Bridge AI forum speaker on artificial intelligence entrepreneurship digital economy and innovation",
    fit: "cover",
  },
  {
    place: "Finland",
    title: "Smart Cities & Future Technology",
    text: "Innovation platforms exploring smart cities, future technology, urban systems and international collaboration.",
    image: `${speaking}finland.jpg`,
    alt: "Arijit Bhattacharyya Finland smart city speaker discussing IoT smart cities future technology innovation and digital transformation",
    fit: "cover",
  },
];
export default function MentoringSection() {
  return (
    <BioSectionShell
      id="global-journey"
      eyebrow="Global Speaking Journey"

title="Speaking Across 25+ Countries on Innovation, Entrepreneurship & Future Technology"

text="From Ghana, Thailand and Dubai to South Korea, Kazakhstan and Finland, Arijit Bhattacharyya has participated in global forums covering artificial intelligence, blockchain, venture capital, startups, smart cities, deep technology and future innovation ecosystems."
      className="bg-gradient-to-br from-white via-[#f5f9ff] to-[#e8f1ff]"
    >
      <div className="space-y-8">
        {journey.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.place}
              {...fadeUp}
              className="overflow-hidden rounded-[36px] border border-[#bdd9ff] bg-white shadow-[0_24px_85px_rgba(0,87,255,0.10)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[380px] items-center justify-center overflow-hidden bg-[#eef5ff] p-4 md:h-[500px]">
                    <SmartImage
                      src={item.image}
                      alt={item.title}
                      className={`h-full w-full rounded-[26px] ${
                        item.fit === "contain"
                          ? "object-contain"
                          : "object-cover object-center"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 text-[#07101f] md:p-12">
                  <div className="mb-7 h-1.5 w-24 rounded-full bg-[#0057ff]" />

                  <p className="mb-5 text-[11px] font-black uppercase tracking-[0.32em] text-[#0057ff]">
                    {item.place}
                  </p>

                  <h3 className="text-[38px] font-black leading-[0.92] tracking-[-0.06em] md:text-[56px]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-[700px] text-[16px] leading-8 text-[#475569]">
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