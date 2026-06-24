import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";
import { industries } from "../../data/bio/industriesData";

const industryProof = [
  "Game Development",
  "VR",
  "AR",
  "XR",
  "AI",
  "Blockchain",
  "Deeptech",
  "Technology",
  "Import & Export",
  "Movies & Entertainment",
  "Banking & Finance",
  "Education",
  "Manufacturing",
  "Music",
  "Worldwide Web",
  "Electronics",
  "Real Estate",
  "Construction",
  "Oil & Gas",
  "Agri Tech",
  "Military Communications",
];

const detailedIndustryProof = [
  {
    title: "Import & Export",
    text: "Consulted SMEs from India to export products to UAE, EU and USA, mainly across food, processed food, wine and garments.",
  },
  {
    title: "Movies & Entertainment",
    text: "Hosted West Bengal’s first cosplay show at ITC Sonar Bangla with PRSI, introduced real models as cosplay artists and built creative media-market connections.",
  },
  {
    title: "Fashion Industry",
    text: "Helped five fashion startups promote their brands worldwide through creative, media and international business development support.",
  },
  {
    title: "Banking & Finance",
    text: "Served as consultant to global banks since 2017 and helped banks go digital with payment gateway and digital banking solutions globally.",
  },
  {
    title: "Manufacturing & MSME",
    text: "Supported and structured around 65 SMEs and MSMEs in India, Dubai and Africa for business growth, finance structure, technology and network expansion.",
  },
  {
    title: "Music Industry",
    text: "Created music in school years and later created background scores and voiceovers for own game titles.",
  },
  {
    title: "Worldwide Web",
    text: "Worked across Web 3.0, HTML5 games and HTML-based websites for around 15 years while leading teams.",
  },
  {
    title: "Electronics Industry",
    text: "As President of ELMA, contributed to the upward branding and visibility of the electronics industry.",
  },
  {
    title: "Real Estate & Construction",
    text: "Built a blockchain-powered co-working place in 2018 with Ukraine partners and worked across property, construction and smart living platforms.",
  },
  {
    title: "Agri Tech",
    text: "Structured an Asia-based AgriTech solution that runs white-label drone service support.",
  },
  {
    title: "Military Communications",
    text: "In 2012, helped as a service provider to the communications department in Indian defence.",
  },
  {
    title: "Industrial Simulation",
    text: "Built animation, XR and simulation solutions across marine training, oil rigging, real estate, medical, technology and FMCG sectors.",
  },
];

export default function IndustriesSection() {
  return (
    <BioSectionShell
      eyebrow="Cross-Industry Experience"
      title="Industries Connected Through Technology & Entrepreneurship"
      text="Over nearly three decades, Arijit Bhattacharyya's work has extended across technology, education, media, finance, gaming, entrepreneurship, industrial transformation and global business ecosystems."
      dark
    >
      <motion.div
        {...fadeUp}
        className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] md:rounded-[36px]"
      >
        <div className="border-b border-white/10 px-5 py-7 sm:px-6 md:px-10 md:py-9">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7fb8ff]">
            ARIJIT Since 1998
          </p>

          <h3 className="max-w-[980px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Years worked across several industries.
          </h3>

          <p className="mt-5 max-w-[940px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/65 md:text-[18px]">
            From AI and gaming to education, investment, manufacturing,
            entrepreneurship, banking, media, smart city, VR, AR, XR,
            blockchain, import-export, AgriTech, electronics, real estate,
            military communications and international collaboration.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {industryProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/64 sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map(([title, text]) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="min-h-[210px] bg-[#030712] p-5 transition duration-300 hover:bg-[#081324] sm:p-6 md:min-h-[230px] md:p-7"
            >
              <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
                {title}
              </h4>

              <p className="mt-4 text-[15px] font-normal leading-[1.7] text-white/62 md:text-[16px]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-7 overflow-hidden rounded-[30px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:rounded-[36px] md:p-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
          Detailed Industry Proof
        </p>

        <h3 className="mt-4 max-w-[920px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
          Technology, business development and industry transformation across sectors.
        </h3>

        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {detailedIndustryProof.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 transition duration-300 hover:border-[#58a0ff]/35 hover:bg-black/30"
            >
              <h4 className="text-[20px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[22px]">
                {item.title}
              </h4>

              <p className="mt-3 text-[15px] font-normal leading-[1.7] text-white/66 md:text-[16px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}