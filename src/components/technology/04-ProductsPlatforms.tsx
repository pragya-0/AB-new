import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const bio = "/assets/bio/";
const speaking = "/assets/speaking/";

const platforms = [
  {
    title: "Government & Strategic Technology",
    text: "Working with institutions, innovation ecosystems and strategic technology initiatives connecting public and private sector innovation.",
    image: `${bio}south-mou.png`,
    alt: "Technology partnerships and strategic innovation ecosystem collaboration",
    fit: "contain",
  },
  {
    title: "Global Blockchain & Emerging Technology",
    text: "Technology conversations across blockchain, digital transformation, future infrastructure and international innovation forums.",
    image: `${speaking}china.jpg`,
    alt: "International blockchain and emerging technology platform",
    fit: "cover",
  },
  {
    title: "DeepTech & Future Industry Systems",
    text: "Exploring advanced technology adoption, innovation ecosystems, future industry models and cross-border collaboration.",
    image: `${speaking}korea.jpg`,
    alt: "Deep technology and future innovation systems forum",
    fit: "cover",
  },
  {
    title: "Enterprise AI & Digital Transformation",
    text: "Technology leadership discussions around AI adoption, enterprise innovation, automation and future-ready organizations.",
    image: `${speaking}NTPC.jpg`,
    alt: "Enterprise AI and digital transformation leadership platform",
    fit: "contain",
  },
];

export default function ProductsPlatforms() {
  return (
    <BioSectionShell
      id="technology-platforms"
      eyebrow="Technology Platforms"
      title="Building Across Technology Ecosystems"
      text="Technology is not a single domain. The journey spans enterprise systems, blockchain, artificial intelligence, innovation ecosystems and future technology platforms."
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
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[28px] border border-[#cfe2ff] bg-white shadow-[0_18px_55px_rgba(0,87,255,0.08)] sm:rounded-[34px] lg:rounded-[38px] lg:shadow-[0_24px_80px_rgba(0,87,255,0.08)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={imageLeft ? "" : "lg:order-2"}>
                  <div className="flex h-[260px] items-center justify-center bg-[#f5f9ff] p-4 sm:h-[340px] sm:p-5 md:h-[430px] lg:h-full lg:min-h-[500px] lg:p-6">
                    <SmartImage
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full rounded-[20px] sm:rounded-[24px] ${
                        item.fit === "contain"
                          ? "object-contain p-2 sm:p-4"
                          : "object-cover object-center"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-14">
                  <div>
                    <div className="mb-6 h-1 w-20 rounded-full bg-[#0057ff] sm:h-1.5 sm:w-24" />

                    <h3 className="max-w-[640px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[46px]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[650px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-[#475569] sm:text-[17px] lg:text-[18px]">
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