import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

const institutions = [
  {
    title: "IIT Hyderabad",
    meta: "Technology • Innovation • Research",
    text: "Institution-led conversations around innovation, technology, entrepreneurship and future-ready ecosystems.",
    image: `${speaking}IIT_Hydrabad.jpg`,
  },
  {
    title: "XLRI Jamshedpur",
    meta: "Business Leadership • Entrepreneurship",
    text: "Business-school platform focused on leadership, entrepreneurship and innovation-driven growth.",
    image: `${speaking}2023/XLRI.jpg`,
    fit: "contain",
  },
  {
    title: "UPES",
    meta: "Future Skills • Emerging Technology",
    text: "University engagement across future skills, business innovation and emerging technology adoption.",
    image: `${speaking}2022/UPES.jpg`,
    fit: "contain",
  },
  {
    title: "SNU",
    meta: "University Platform • Startup Thinking",
    text: "Academic platform connecting student audiences with entrepreneurship, startups and innovation thinking.",
    image: `${speaking}2022/SNU.jpg`,
    fit: "contain",
  },
  {
    title: "PDPU",
    meta: "Technology • Business • Youth Innovation",
    text: "A student-facing innovation platform connecting technology, entrepreneurship and business transformation.",
    image: `${speaking}pdpu.jpg`,
    fit: "contain",
  },
  {
    title: "DeepTech Training",
    meta: "AI • DeepTech • Future Skills",
    text: "Training and workshop-led programs around deeptech, artificial intelligence and applied innovation.",
    image: `${speaking}deeptech-training.jpg`,
    fit: "contain",
  },
];

export default function GlobalForums() {
  return (
    <BioSectionShell
      id="institutions"
      eyebrow="Institutions & Academia"
      title="Universities, Business Schools & Innovation Platforms"
      text="Engagements with leading universities, business schools, startup ecosystems and future-skills platforms across entrepreneurship, AI, innovation and emerging technologies."
      className="bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf3ff]"
    >
      <div className="space-y-10">
        {institutions.map((item, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <motion.article
              key={item.title}
              {...fadeUp}
              className="overflow-hidden rounded-[36px] border border-[#dbeafe] bg-white shadow-[0_25px_80px_rgba(0,87,255,0.08)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className={`${imageLeft ? "" : "lg:order-2"}`}>
                  <div className="flex h-[380px] items-center justify-center bg-gradient-to-br from-[#f8fbff] to-[#edf5ff] p-6 md:h-[500px]">
                    <SmartImage
                      src={item.image}
                      alt={`Arijit Bhattacharyya speaking at ${item.title}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 text-[#07101f] md:p-14">
                  <div className="mb-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0057ff] to-[#4ea1ff]" />

                  <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#0057ff]">
                    {item.meta}
                  </p>

                  <h3 className="text-[38px] font-black leading-[0.92] tracking-[-0.06em] md:text-[60px]">
                    {item.title}
                  </h3>

                  <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#0057ff]" />
                    <span className="text-sm font-semibold text-slate-500">
                      Academic & Innovation Engagement
                    </span>
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