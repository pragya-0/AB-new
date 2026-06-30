import { motion } from "framer-motion";
import {
  Brain,
  Boxes,
  Building2,
  Gamepad2,
  Globe2,
  LockKeyhole,
  Network,
  Orbit,
} from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";

const domains = [
  {
    title: "Artificial Intelligence",
    text: "Applied AI, generative systems, automation and intelligent business solutions.",
    icon: Brain,
  },
  {
    title: "Virtual Reality",
    text: "Immersive experiences, simulation systems, digital environments and next-generation interaction design.",
    icon: Orbit,
  },
  {
    title: "Gaming Technology",
    text: "Game development, digital characters, interactive storytelling and entertainment ecosystems.",
    icon: Gamepad2,
  },
  {
    title: "Blockchain",
    text: "Web3, digital assets, identity systems, decentralized platforms and future finance.",
    icon: Boxes,
  },
  {
    title: "DeepTech",
    text: "Emerging technologies, innovation ecosystems and scalable technology-driven ventures.",
    icon: Network,
  },
  {
    title: "Cyber Security",
    text: "Digital trust, enterprise protection, compliance awareness and cyber resilience.",
    icon: LockKeyhole,
  },
  {
    title: "Smart Cities",
    text: "IoT-enabled infrastructure, connected systems and technology-powered urban innovation.",
    icon: Building2,
  },
  {
    title: "Digital Transformation",
    text: "Helping organizations modernize through automation, technology adoption and innovation frameworks.",
    icon: Globe2,
  },
];

export default function TechnologyDomains() {
  return (
    <BioSectionShell
      id="technology-domains"
      eyebrow="Technology Domains"
      title="Technology Built Across Multiple Waves of Innovation"
      text="From game development and virtual reality to blockchain, artificial intelligence and deep technology ecosystems."
      className="bg-gradient-to-br from-white via-[#f6faff] to-[#eaf3ff]"
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {domains.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[26px] border border-[#d6e7ff] bg-white p-6 shadow-[0_14px_45px_rgba(0,87,255,0.07)] transition-all duration-500 hover:border-[#0057ff]/40 hover:shadow-[0_22px_70px_rgba(0,87,255,0.13)] sm:rounded-[30px] sm:p-7 lg:rounded-[32px] lg:p-8"
            >
              <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[#0057ff]/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-[#0057ff]/18" />

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.06,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#cfe1ff] bg-[#eef6ff] text-[#0057ff] transition-all duration-500 group-hover:bg-[#0057ff] group-hover:text-white sm:mb-8 sm:h-16 sm:w-16"
              >
                <Icon size={28} strokeWidth={2.2} />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[15px] font-normal leading-[1.7] text-[#475569]">
                  {item.text}
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#0057ff]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
              />
            </motion.article>
          );
        })}
      </div>
    </BioSectionShell>
  );
}
