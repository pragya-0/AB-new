import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio, venturePath } from "../../data/bio/bioAssets";

type JourneyItem = {
  year: string;
  title: string;
  text: string;
  image: string;
  tag: string;
  meta: string;
  chips: string[];
  fit?: "cover" | "contain";
  artifact?: boolean;
  position?: string;
};

const press = "/assets/press/";
const latest = "/assets/press/latest-speaks/";
const speaking = "/assets/speaking/";

const journey: JourneyItem[] = [
  {
    year: "1998",
    title: "Virtualinfocom Begins",
    text: "The origin story begins with one of India's early game, animation and digital technology ecosystems.",
    image: `${venturePath}final-new.png`,
    tag: "Foundation",
    meta: "Virtualinfocom / Games / Animation",
    chips: ["Games", "Animation", "Education"],
    fit: "contain",
    artifact: true,
  },
  {
    year: "2003",
    title: "Animation & Gaming",
    text: "The work expands into game production, animation pipelines and original entertainment technology.",
    image: `${latest}Games-Gathering.png`,
    tag: "Gaming Era",
    meta: "Game Development / Animation / Digital Media",
    chips: ["Games", "Media", "Creative IP"],
    artifact: true,
  },
  {
    year: "2008",
    title: "Creative IP & Superheroes",
    text: "A creative universe takes shape through Indian superheroes, characters, comics and story-led game worlds.",
    image: `${press}im_superhero.jpg`,
    tag: "Creative Universe",
    meta: "Superheroes / Characters / Models",
    chips: ["Creative IP", "Media", "Models"],
  },
  {
    year: "2012",
    title: "VR & AR",
    text: "The journey moves deeper into immersive experiences, virtual reality, augmented reality and interactive media.",
    image: `${press}virtual_reality_India.jpg`,
    tag: "Immersive Tech",
    meta: "VR / AR / Interactive Experiences",
    chips: ["VR", "AR", "Innovation"],
    position: "object-center",
  },
  {
    year: "2016",
    title: "Startup Ecosystem",
    text: "The focus widens into founder mentoring, startup education, business models and ecosystem building.",
    image: `${press}arijit_startup_pad.jpg`,
    tag: "Entrepreneurship",
    meta: "Startups / Mentoring / Education",
    chips: ["Startups", "Education", "Mentoring"],
  },
  {
    year: "2018",
    title: "Blockchain & Digital Finance",
    text: "Public conversations expand across blockchain, digital finance, crypto, banking and business transformation.",
    image: `${press}China-blockchain.jpg`,
    tag: "Digital Finance",
    meta: "Blockchain / Finance / Investment",
    chips: ["Blockchain", "Finance", "Investment"],
  },
  {
    year: "2020",
    title: "AI & Future Skills",
    text: "AI, machine learning and future-skill education become central to the innovation narrative.",
    image: `${speaking}2021/AI-world-summit.jpg`,
    tag: "Future Skills",
    meta: "AI / Machine Learning / Education",
    chips: ["AI", "Education", "Future Skills"],
    artifact: true,
  },
  {
    year: "2022",
    title: "Global Summits & Smart Cities",
    text: "The journey moves across global forums, smart-city conversations, deeptech and international platforms.",
    image: `${speaking}ghana.jpeg`,
    tag: "Global Stage",
    meta: "Ghana / Smart Cities / Global Forums",
    chips: ["Global Network", "DeepTech", "Conferences"],
  },
  {
    year: "2024",
    title: "Investment Networks",
    text: "The ecosystem expands into investor networks, funding conversations, valuation and cross-border growth.",
    image: `${press}Arijit_Bhattacharyya_Investor.jpg`,
    tag: "Investment",
    meta: "Funding / Valuation / Venture Network",
    chips: ["Investment", "Ventures", "Business"],
  },
  {
    year: "2025",
    title: "Global Innovation Ecosystem",
    text: "The story continues through Gen AI, global entrepreneurship, media, technology and international leadership networks.",
    image: `${speaking}kazak.png`,
    tag: "Global Ecosystem",
    meta: "Gen AI / Media / Global Network",
    chips: ["AI", "Media", "Global Network"],
  },
];

function JourneyCard({ item, index }: { item: JourneyItem; index: number }) {
  const imageClass =
    item.fit === "contain"
      ? "object-contain object-center p-7 md:p-10"
      : `object-cover ${item.position ?? "object-center"}`;

  return (
    <motion.article
      {...fadeUp}
      className="grid overflow-hidden rounded-[34px] border border-white/10 bg-[#080d13] shadow-[0_24px_80px_rgba(0,0,0,0.34)] lg:grid-cols-[15%_45%_40%]"
    >
      <div className="relative flex min-h-[160px] items-center border-b border-white/10 bg-white/[0.035] p-6 lg:min-h-[390px] lg:border-b-0 lg:border-r">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#58a0ff]">
            Chapter {String(index + 1).padStart(2, "0")}
          </p>

          <p className="mt-4 text-[58px] font-extrabold leading-none tracking-[-0.055em] text-white md:text-[76px] lg:text-[82px]">
            {item.year}
          </p>
        </div>

        <div className="absolute bottom-0 left-6 top-24 hidden w-px bg-gradient-to-b from-[#58a0ff] via-white/20 to-transparent lg:block" />
      </div>

      <div className="relative min-h-[320px] overflow-hidden bg-black md:min-h-[390px]">
        <div
          className={`h-full w-full ${
            item.artifact
              ? "flex items-center justify-center bg-[#03070d] p-5 md:p-8"
              : ""
          }`}
        >
          <SmartImage
            src={item.image}
            fallbacks={[`${bio}IMG_1569.JPG.jpeg`, `${venturePath}final-new.png`]}
            alt={item.title}
            className={`${
              item.artifact
                ? "max-h-full w-full rounded-[22px] object-contain shadow-[0_22px_70px_rgba(0,0,0,0.42)]"
                : `h-full w-full transition duration-700 hover:scale-[1.025] ${imageClass}`
            }`}
          />
        </div>

        {!item.artifact && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        )}
      </div>

      <div className="flex min-h-[320px] flex-col justify-center p-7 md:min-h-[390px] md:p-10 lg:p-12">
        <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#58a0ff]">
          {item.tag}
        </p>

        <h3 className="max-w-[560px] text-[36px] font-extrabold leading-[0.92] tracking-[-0.06em] text-white md:text-[48px]">
          {item.title}
        </h3>

        <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-white/68">
          {item.text}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {item.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/70"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-8 h-px w-full bg-white/10" />

        <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/45">
          {item.meta}
        </p>
      </div>
    </motion.article>
  );
}

export default function JourneyTimeline() {
  return (
    <BioSectionShell
      id="journey"
      eyebrow="Timeline Since 1998"
      title="Technology, Creativity & Global Innovation Since 1998"
      text="A cinematic biography timeline following Arijit Bhattacharyya's journey across games, VR, blockchain, AI, education, investment, media and global business ecosystems."
      dark
    >
      <div className="space-y-7">
        {journey.map((item, index) => (
          <JourneyCard
            key={`${item.year}-${item.title}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </BioSectionShell>
  );
}


