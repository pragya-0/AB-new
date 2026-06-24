import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";

const speaking = "/assets/speaking/";

type ForumItem = {
  title: string;
  meta: string;
  image: string;
  fit?: "cover" | "contain";
};

const forums: ForumItem[] = [
  {
    title: "Thailand Blockchain Forum",
    meta: "Thailand • Blockchain • Digital Finance",
    image: `${speaking}Thailand_blockchain.jpg`,
    fit: "contain",
  },
  {
    title: "Finland Smart City Innovation",
    meta: "Finland • Smart Cities • Future Technology",
    image: `${speaking}finland.jpg`,
    fit: "cover",
  },
  {
    title: "Ghana Innovation & Investment",
    meta: "Ghana • Business • Technology • Growth",
    image: `${speaking}ghana.jpg`,
    fit: "contain",
  },
  {
    title: "Kuala Lumpur Technology Network",
    meta: "Malaysia • Startups • Global Business",
    image: `${speaking}Kualalmpur.jpg`,
    fit: "cover",
  },
  {
    title: "Iran Incubator Forum",
    meta: "Iran • Startup Incubation • Innovation",
    image: `${speaking}iran-box-incubator.jpg`,
    fit: "contain",
  },
  {
    title: "Nepal Startup Ecosystem",
    meta: "Nepal • Founders • Technology Growth",
    image: `${speaking}nepal-next-growth.jpg`,
    fit: "cover",
  },
];

export default function TechnologyCTA() {
  return (
    <BioSectionShell
      id="technology-across-continents"
      dark
      eyebrow="Technology Across Continents"
      title="Global Forums, Startup Ecosystems & Innovation Platforms"
      text="Sharing technology, AI, blockchain and innovation conversations across global forums, startup ecosystems and industry platforms."
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
            className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] transition duration-300 hover:border-[#2d74ff]/50 sm:rounded-[30px] xl:rounded-[32px]"
          >
            <div className="flex h-[210px] items-center justify-center bg-[#07101f] p-3 sm:h-[240px] sm:p-4 lg:h-[250px]">
              <SmartImage
                src={item.image}
                alt={`Arijit Bhattacharyya at ${item.title}`}
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
            </div>
          </motion.article>
        ))}
      </div>
    </BioSectionShell>
  );
}