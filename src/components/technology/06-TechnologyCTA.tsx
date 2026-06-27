import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const speaking = "/assets/speaking/";

type ForumItem = {
  title: string;
  meta: string;
  text: string;
  image: string;
  fit?: "cover" | "contain";
};

const forums: ForumItem[] = [
  {
    title: "Thailand Blockchain & Digital Finance",
    meta: "Thailand • Blockchain • Digital Finance",
    text:
      "Technology conversations around blockchain ecosystems, digital finance, future infrastructure and trust-based digital platforms.",
    image: `${speaking}Thailand_blockchain.jpg`,
    fit: "contain",
  },
  {
    title: "Finland Smart Cities & DeepTech",
    meta: "Finland • Smart Cities • Future Technology",
    text:
      "Innovation discussions connected with smart cities, deep technology, digital infrastructure and future-ready urban systems.",
    image: `${speaking}finland.jpg`,
    fit: "cover",
  },
  {
    title: "Ghana Innovation & Investment Summit",
    meta: "Ghana • Business • Technology • Growth",
    text:
      "Global business, innovation and investment ecosystem conversations connecting technology, founders and emerging-market growth.",
    image: `${speaking}ghana.jpg`,
    fit: "contain",
  },
  {
    title: "Malaysia Technology Leadership",
    meta: "Malaysia • Startups • Global Business",
    text:
      "Technology leadership, startup ecosystem and cross-border innovation conversations across South East Asian business networks.",
    image: `${speaking}Kualalmpur.jpg`,
    fit: "cover",
  },
  {
    title: "Iran Startup & Incubation Forum",
    meta: "Iran • Startup Incubation • Innovation",
    text:
      "Founder ecosystem, incubation, business innovation and startup growth conversations with international technology communities.",
    image: `${speaking}iran-box-incubator.jpg`,
    fit: "contain",
  },
  {
    title: "Nepal Digital Innovation Ecosystem",
    meta: "Nepal • Founders • Technology Growth",
    text:
      "Digital innovation, entrepreneurship, startup mentoring and technology ecosystem development across Nepal-focused platforms.",
    image: `${speaking}nepal-next-growth.jpg`,
    fit: "cover",
  },
];

export default function TechnologyCTA() {
  return (
    <BioSectionShell
      id="technology-across-continents"
      dark
      eyebrow="Global Technology Presence"
      title="Technology, AI & Innovation Conversations Across Continents"
      text="Technology, AI, blockchain, digital transformation and innovation conversations delivered across international forums, universities, government platforms and startup ecosystems."
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {forums.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: index * 0.035 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] shadow-[0_16px_60px_rgba(0,87,255,0.08)] transition duration-300 hover:border-[#2d74ff]/50 sm:rounded-[30px] xl:rounded-[32px]"
          >
            <div className="flex h-[230px] items-center justify-center bg-[#07101f] p-3 sm:h-[260px] sm:p-4 lg:h-[280px]">
              <SmartImage
                src={item.image}
                alt={`Arijit Bhattacharyya global technology speaker at ${item.title} covering AI blockchain startup innovation and digital transformation`}
                className={`h-full w-full rounded-[18px] transition duration-700 group-hover:scale-[1.03] sm:rounded-[22px] ${
                  item.fit === "contain"
                    ? "object-contain"
                    : "object-cover object-center"
                }`}
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#7fb8ff] sm:text-[10px] sm:tracking-[0.26em]">
                {item.meta}
              </p>

              <h3 className="text-[22px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[24px] lg:text-[26px]">
                {item.title}
              </h3>

              <p className="mt-4 text-[14px] font-normal leading-[1.75] text-white/64 sm:text-[15px]">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}