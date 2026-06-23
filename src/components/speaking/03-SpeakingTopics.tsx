import { motion } from "framer-motion";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type ForumItem = {
  year: string;
  title: string;
  meta: string;
  description?: string;
  image: string;
  fit?: "cover" | "contain";
  highlight?: boolean;
};

const forums: ForumItem[] = [
  {
    year: "2022",
    title: "Ghana Investor Summit",
    meta: "Vice President of Ghana • Venture Capital • Africa",
    description:
      "Featured keynote session discussing venture capital, startup growth, technology innovation and the future of investment ecosystems with senior government and business leaders.",
    image: `${speaking}ghana.jpg`,
    highlight: true,
  },
  {
    year: "2022",
    title: "WISE USA",
    meta: "Future of Venture Capital • Global Innovation",
    image: `${speaking}2022/WISE.jpg`,
  },
  {
    year: "2021",
    title: "HULT Prize Nepal",
    meta: "Business Growth • Future Technology • Nepal",
    image: `${speaking}nepal-next-growth.jpg`,
  },
  {
    year: "2019",
    title: "Malaysia Blockchain Forum",
    meta: "Blockchain • Digital Assets • Future Finance",
    image: `${speaking}maly-blockchain.png`,
    fit: "contain",
  },
  {
    year: "2017",
    title: "Finland Smart City Forum",
    meta: "IoT • Smart Cities • Future Infrastructure",
    image: `${speaking}finland.jpg`,
  },
  {
    year: "2021",
    title: "AI World Summit Singapore",
    meta: "Artificial Intelligence • Enterprise Innovation",
    image: `${speaking}2021/AI-world-summit.jpg`,
  },
  {
    year: "2022",
    title: "Lebanon Business Forum",
    meta: "Entrepreneurship • Global Markets • Middle East",
    image: `${speaking}2022/Lebanon.jpg`,
    fit: "contain",
  },
  {
    year: "2020",
    title: "Colombia Innovation Dialogue",
    meta: "Digital Growth • Entrepreneurship • Latin America",
    image: `${speaking}colombia.jpg`,
  },
  {
    year: "2021",
    title: "Maldives Sustainability Forum",
    meta: "Ministers • Tourism • Technology • Sustainability",
    image: `${speaking}Maldives.jpg`,
  },
];

export default function SpeakingTopics() {
  return (
    <BioSectionShell
      id="global-forums"
      dark
      eyebrow="Global Forums"
      title="Global Speaking Timeline Across Innovation, Investment & Technology"
      text="A curated international timeline preserving the strongest legacy speaking proof — Ghana Investor Summit, WISE USA, HULT Nepal, Malaysia Blockchain, Finland Smart City, Singapore AI World Summit and other global innovation platforms."
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#2d74ff] via-white/20 to-transparent md:block" />

        <div className="space-y-8">
          {forums.map((forum) => (
            <motion.article key={forum.title} {...fadeUp} className="relative">
              <div className="absolute left-[11px] top-10 hidden h-5 w-5 rounded-full border-4 border-[#2d74ff] bg-[#03070d] shadow-[0_0_0_8px_rgba(45,116,255,0.12)] md:block" />

              <div
                className={`grid gap-5 md:pl-16 lg:grid-cols-[420px_1fr] lg:items-center ${
                  forum.highlight ? "lg:grid-cols-[520px_1fr]" : ""
                }`}
              >
                <div
                  className={`overflow-hidden rounded-[30px] border bg-white/[0.045] ${
                    forum.highlight
                      ? "border-[#2d74ff]/55 shadow-[0_25px_90px_rgba(0,87,255,0.18)]"
                      : "border-white/10"
                  }`}
                >
                  <div
  className={`flex items-center justify-center bg-[#07101f] p-4 ${
    forum.highlight ? "h-[420px]" : "h-[320px]"
  }`}
>
                    <SmartImage
                      src={forum.image}
                      alt={`Arijit Bhattacharyya keynote speaker at ${forum.title} on ${forum.meta}`}
                     className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 md:p-8">
                  <div className="mb-5 inline-flex rounded-full border border-[#2d74ff]/30 bg-[#2d74ff]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#74adff]">
                    {forum.year}
                  </div>

                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.24em] text-[#74adff]">
                    {forum.meta}
                  </p>

                  <h3
                    className={`font-black leading-[0.94] tracking-[-0.055em] text-white ${
                      forum.highlight
                        ? "text-[42px] md:text-[62px]"
                        : "text-[34px] md:text-[46px]"
                    }`}
                  >
                    {forum.title}
                  </h3>

                  {forum.description ? (
                    <p className="mt-6 max-w-[820px] text-[17px] leading-8 text-white/68">
                      {forum.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}