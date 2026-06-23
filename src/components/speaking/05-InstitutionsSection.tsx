import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type AdvisoryItem = {
  title: string;
  meta: string;
  image: string;
  alt: string;
  fit: "cover" | "contain";
};

const advisoryItems: AdvisoryItem[] = [
  {
    title: "National Startup India Award Jury",
    meta: "Public Innovation • Startup Evaluation",
    image: `${speaking}national-startup-award.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya National Startup India Award jury member for public innovation startup evaluation and entrepreneurship ecosystem",
  },
  {
    title: "Defence & Innovation Panel",
    meta: "Technology • Policy • Leadership",
    image: `${speaking}Defence_panel.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya Defence Panel Jury with technology policy leadership innovation and startup ecosystem leaders",
  },
  {
    title: "Techstars Ecosystem",
    meta: "Accelerators • Startups • Mentoring",
    image: `${speaking}techstars.png`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Techstars India mentoring session for startups accelerators founders and innovation ecosystems",
  },
  {
    title: "Global Family Office Forum",
    meta: "Investment • Capital • Global Networks",
    image: `${speaking}2022/family-office.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya family office forum speaker on investment capital startup funding and global business networks",
  },
  {
    title: "CII Industry Forum",
    meta: "Industry • Entrepreneurship • Business",
    image: `${speaking}CII.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya CII industry forum speaker on entrepreneurship business innovation startups and investment",
  },
  {
    title: "Pre-Seed & Founder Evaluation",
    meta: "Investors • Founders • Early Stage",
    image: `${speaking}pre-seed.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya pre-seed investment founder evaluation angel investment and startup mentoring platform",
  },
];

export default function InstitutionsSection() {
  return (
    <BioSectionShell
      id="advisory-leadership"
      dark
      eyebrow="Advisory Leadership"
      title="Advisory, Jury & Innovation Leadership"
      text="Jury, advisory, mentor and investor-facing roles across National Startup India Award platforms, defence innovation panels, Techstars startup mentoring, family office forums, CII industry platforms and pre-seed founder evaluation ecosystems."
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <motion.div
          {...fadeUp}
          className="sticky top-28 rounded-[36px] border border-white/10 bg-white/[0.045] p-8 md:p-10"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#6faaff]">
            Beyond Keynotes
          </p>

          <h3 className="mt-6 text-[40px] font-black leading-[0.9] tracking-[-0.065em] text-white md:text-[58px]">
            Trusted where decisions, founders and innovation ecosystems are
            evaluated.
          </h3>

          <p className="mt-7 text-[16px] leading-8 text-white/65">
            This section moves beyond stage appearances and shows credibility in
            advisory rooms, jury panels, innovation councils, startup evaluation
            platforms and investor-facing ecosystems.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {advisoryItems.map((item) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-[#2d74ff]/50"
            >
              <div className="flex h-[260px] items-center justify-center overflow-hidden bg-[#07101f] p-3">
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  className={`h-full w-full ${
                    item.fit === "contain"
                      ? "object-contain"
                      : "object-cover object-top"
                  }`}
                />
              </div>

              <div className="min-h-[150px] p-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#74adff]">
                  {item.meta}
                </p>

                <h3 className="text-[26px] font-black leading-[0.95] tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}