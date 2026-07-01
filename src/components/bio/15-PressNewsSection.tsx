import { motion } from "framer-motion";

import { fadeUp } from "./bioMotion";

type PressCardItem = {
  source: string;
  title: string;
  text?: string;
  image: string;
  type?: "photo" | "video" | "newspaper" | "document";
  featured?: boolean;
};

const heroCards: PressCardItem[] = [
  {
    source: "TEDx",
    title: "Ideas, Innovation & Impact on Public Stages",
    text: "A keynote presence built around entrepreneurship, technology, innovation and the future of business.",
    image: "/assets/speaking/tedx.jpg.jpeg",
    type: "photo",
    featured: true,
  },
  {
    source: "The Economic Times",
    title: "Driving Innovation & Entrepreneurial Growth",
    image: "/assets/press/Arijit-Bhattacharyya-ECONOMICS.jpg",
    type: "newspaper",
  },
  {
    source: "Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/2024/timesofindia-B.jpg",
    type: "newspaper",
  },
];

const nationalCards: PressCardItem[] = [
  {
    source: "Hindustan Times",
    title: "Startup & Entrepreneurship Coverage",
    image: "/assets/press/hindustan-times-startup.jpg",
    type: "newspaper",
  },
  {
    source: "The Hindu",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/2019/the-hindu.png",
    type: "newspaper",
  },
  {
    source: "CNBC",
    title: "Business, Technology & Founder Conversations",
    image: "/assets/press/cnbc.jpg",
    type: "video",
  },
];

const globalPlatformCards: PressCardItem[] = [
  {
    source: "Diplomatic World",
    title: "Global Business Matchmaking",
    image: "/assets/press/2021/diplomatic-world-two.jpg",
    type: "document",
  },
  {
    source: "China Blockchain",
    title: "International Technology & Blockchain Forum",
    image: "/assets/press/2020/China-blockchain.jpg",
    type: "photo",
  },
  {
    source: "Josh Talks",
    title: "Ideas, Leadership & Entrepreneurial Journey",
    image: "/assets/press/Joshtalks.jpeg",
    type: "video",
  },
];

const regionalCards: PressCardItem[] = [
  {
    source: "TV9 Bangla",
    title: "Technology, Leadership & Innovation",
    image: "/assets/press/2022/TV9.jpg",
    type: "video",
  },
  {
    source: "DD Bangla",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/2019/DD-Bangla.jpg",
    type: "video",
  },
  {
    source: "ABP Bangla",
    title: "Regional Media Recognition & Public Visibility",
    image: "/assets/press/ABP_Arijit.jpg",
    type: "video",
  },
];

const mediaWall = [
  "TEDx",
  "Economic Times",
  "Times of India",
  "Hindustan Times",
  "The Hindu",
  "CNBC",
  "Diplomatic World",
  "Josh Talks",
  "TV9 Bangla",
  "DD Bangla",
  "ABP Bangla",
];

function imageClass(type?: PressCardItem["type"]) {
  if (type === "newspaper" || type === "document") {
    return "object-cover object-center";
  }

  return "object-cover object-center";
}

function overlayClass(type?: PressCardItem["type"]) {
  if (type === "newspaper" || type === "document") {
    return "bg-gradient-to-t from-black/94 via-black/42 to-black/8";
  }

  return "bg-gradient-to-t from-black/90 via-black/22 to-transparent";
}

function PressCard({
  card,
  large = false,
}: {
  card: PressCardItem;
  large?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#05080d] shadow-[0_24px_90px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/50 ${
        large ? "min-h-[560px]" : "min-h-[360px]"
      }`}
    >
      <img
        src={card.image}
        alt={card.source}
        className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.025] ${imageClass(
          card.type
        )}`}
      />

      <div className={`absolute inset-0 ${overlayClass(card.type)}`} />

      <div className="absolute bottom-6 left-6 right-6 z-10 md:bottom-7 md:left-7 md:right-7">
        <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8bb7ff]">
          {card.type === "newspaper"
            ? "National Media"
            : card.type === "document"
            ? "Global Platform"
            : card.type === "video"
            ? "Television / Video"
            : "Public Stage"}
        </p>

        <h3
          className={`font-extrabold leading-[0.9] tracking-[-0.05em] text-white ${
            large ? "text-[42px] md:text-[64px]" : "text-[30px] md:text-[42px]"
          }`}
        >
          {card.source}
        </h3>

        <p className="mt-4 max-w-[660px] text-[15px] font-bold leading-7 text-white/84">
          {card.title}
        </p>

        {card.text && (
          <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-white/68">
            {card.text}
          </p>
        )}
      </div>
    </motion.article>
  );
}

function MediaWall() {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-[34px] border border-white/10 bg-white/[0.04] p-5 md:p-6"
    >
      <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#58a0ff]">
        Seen Across
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {mediaWall.map((item) => (
          <div
            key={item}
            className="flex min-h-[86px] items-center justify-center rounded-[20px] border border-white/10 bg-black/20 px-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/45 hover:bg-white/[0.06]"
          >
            <p className="text-[12px] font-extrabold uppercase leading-5 tracking-[0.16em] text-white/72">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PressBlock({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: PressCardItem[];
}) {
  return (
    <motion.section
      {...fadeUp}
      className="rounded-[36px] border border-white/10 bg-[#05080d] p-5 md:p-7"
    >
      <div className="mb-7 grid gap-5 lg:grid-cols-[0.55fr_1fr] lg:items-end">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#58a0ff]">
          {eyebrow}
        </p>

        <h3 className="max-w-[980px] text-[34px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[54px]">
          {title}
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((card) => (
          <PressCard key={card.source} card={card} />
        ))}
      </div>
    </motion.section>
  );
}

export default function PressNewsSection() {
  return (
    <section className="relative bg-[#02060b] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1500px] space-y-8">
        <motion.section
          {...fadeUp}
          className="rounded-[40px] border border-white/10 bg-black p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:p-8"
        >
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#58a0ff]">
                Recognition & Media Presence
              </p>

              <h3 className="max-w-[860px] text-[40px] font-extrabold leading-[0.9] tracking-[-0.055em] text-white md:text-[68px]">
                Recognized across media, forums and public stages.
              </h3>
            </div>

            <p className="max-w-[760px] text-[16px] leading-8 text-white/68 md:text-[17px]">
              A curated proof section across national media, international
              platforms, television appearances and public speaking moments.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <PressCard card={heroCards[0]} large />

            <div className="grid gap-6">
              {heroCards.slice(1).map((card) => (
                <PressCard key={card.source} card={card} />
              ))}
            </div>
          </div>
        </motion.section>

        <MediaWall />

        <PressBlock
          eyebrow="National Business Media"
          title="Business, technology and startup media authority."
          items={nationalCards}
        />

        <PressBlock
          eyebrow="Global Platforms"
          title="International forums, public stages and entrepreneurial conversations."
          items={globalPlatformCards}
        />

        <PressBlock
          eyebrow="Television & Regional Media"
          title="Regional television and public recognition."
          items={regionalCards}
        />
      </div>
    </section>
  );
}

