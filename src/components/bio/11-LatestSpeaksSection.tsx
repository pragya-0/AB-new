import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";

const speaking = "/assets/speaking/";

type SpeakItem = {
  title: string;
  text: string;
  image: string;
  meta: string;
  position?: string;
};

type FeatureItem = SpeakItem & {
  badge: string;
  tone: "gold" | "blue";
  fit?: "cover" | "contain";
};

const featuredSpeak = {
  title: "Speaking Across Continents Since 2008",
  text: "Keynotes, panels and workshops across entrepreneurship, AI, gaming, deeptech, business growth, innovation and global collaboration.",
  image: `${speaking}axis-pune.jpg`,
  meta: "Global Keynotes • Institutions • Business Forums",
};

const signaturePlatforms: SpeakItem[] = [
  {
    title: "TEDx Speaker",
    text: "Ideas, innovation and entrepreneurship storytelling.",
    image: `${speaking}tedx.jpg.jpeg`,
    meta: "Ideas Worth Sharing",
  },
  {
    title: "IIT Hyderabad",
    text: "Technology, innovation and future skills.",
    image: `${speaking}IIT_Hydrabad.jpg`,
    meta: "IIT • Innovation • Future Skills",
  },
  {
    title: "Dubai AI & Blockchain",
    text: "AI, blockchain and future technology conversations.",
    image: `${speaking}dubai-speaker.png`,
    meta: "AI • Blockchain • Future Tech",
  },
];

const archiveMoments: SpeakItem[] = [
  {
    title: "Axis Bank Bhubaneswar",
    text: "MSME, entrepreneurship and business growth.",
    image: `${speaking}axis-bank-bhub.jpg`,
    meta: "MSME • Banking • Growth",
  },
  {
    title: "South Korea",
    text: "Deeptech, gaming and international collaboration.",
    image: `${speaking}SKorea.png`,
    meta: "DeepTech • Gaming • Korea",
  },
  {
    title: "XLRI Jamshedpur",
    text: "Startup ecosystem, innovation and future business conversations.",
    image: `${speaking}xlri.jpeg`,
    meta: "XLRI • Startups • Innovation",
  },
];

const featureMoments: FeatureItem[] = [
  {
    badge: "Featured Engagement",
    title: "Ghana Summit with Vice President of Ghana",
    text: "International business, investment and leadership platform with global impact.",
    image: `${speaking}ghana.jpg`,
    meta: "Ghana • Vice President • Business Summit",
    tone: "gold",
    fit: "contain",
    position: "object-center",
  },
  {
    badge: "Blockchain Forum",
    title: "Thailand Blockchain Forum",
    text: "Blockchain, digital finance and international technology conversations.",
    image: `${speaking}Thailand_blockchain.jpg`,
    meta: "Thailand • Blockchain • Digital Finance",
    tone: "blue",
    fit: "cover",
    position: "object-left",
  },
];

function SpeakingCard({ item }: { item: SpeakItem }) {
  return (
    <motion.article
      {...fadeUp}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/60"
    >
      <div className="relative h-[330px] overflow-hidden bg-black md:h-[390px]">
        <SmartImage
          src={item.image}
          fallbacks={[
            `${speaking}axis-pune.jpg`,
            `${speaking}IIT_Hydrabad.jpg`,
            `${speaking}ghana-index.jpg`,
          ]}
          alt={item.title}
          className={`h-full w-full object-cover ${
            item.position ?? "object-center"
          } transition duration-700 group-hover:scale-[1.035]`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/16 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-[#8bb7ff]">
            {item.meta}
          </p>

          <h3 className="text-[30px] font-black leading-[0.9] tracking-[-0.065em] text-white md:text-[40px]">
            {item.title}
          </h3>

          <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/74">
            {item.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function FeatureSplit({ item }: { item: FeatureItem }) {
  const isGold = item.tone === "gold";

  return (
    <motion.article
      {...fadeUp}
      className={`overflow-hidden rounded-[38px] border bg-[#090b0f] shadow-[0_34px_120px_rgba(0,0,0,0.32)] ${
        isGold ? "border-[#f7c948]/60" : "border-[#58a0ff]/45"
      }`}
    >
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div
          className={`flex flex-col justify-center p-8 md:p-11 ${
            isGold
              ? "bg-[radial-gradient(circle_at_top_left,rgba(247,201,72,0.14),transparent_42%),#090b0f]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(88,160,255,0.16),transparent_42%),#07101f]"
          }`}
        >
          <div
            className={`mb-7 w-fit rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] backdrop-blur ${
              isGold
                ? "border-[#f7c948]/55 bg-[#f7c948]/12 text-[#ffe69a]"
                : "border-[#58a0ff]/55 bg-[#58a0ff]/12 text-[#9cc5ff]"
            }`}
          >
            {item.badge}
          </div>

          <p
            className={`mb-4 text-[10px] font-black uppercase tracking-[0.28em] ${
              isGold ? "text-[#ffe69a]" : "text-[#8bb7ff]"
            }`}
          >
            {item.meta}
          </p>

          <h3 className="max-w-[760px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] text-white md:text-[64px]">
            {item.title}
          </h3>

          <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-white/72">
            {item.text}
          </p>
        </div>

        <div className="relative h-[430px] overflow-hidden bg-black md:h-[560px]">
          <SmartImage
            src={item.image}
            fallbacks={[`${speaking}ghana-index.jpg`, `${speaking}axis-pune.jpg`]}
            alt={item.title}
            className={`h-full w-full ${
              item.fit === "contain"
                ? "object-contain object-center"
                : `object-cover ${item.position ?? "object-center"}`
            } transition duration-700 hover:scale-[1.02]`}
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/8" />
        </div>
      </div>
    </motion.article>
  );
}

export default function LatestSpeaksSection() {
  return (
    <BioSectionShell
      eyebrow="Global Stages"
      title="Ideas Shared Across Continents"
      text="A selected speaking archive across institutions, summits, banks, universities and global innovation platforms."
      dark
    >
      <div className="space-y-5">
        <motion.article
          {...fadeUp}
          className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.34)]"
        >
          <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
            <div className="relative h-[410px] overflow-hidden bg-black md:h-[540px]">
              <SmartImage
                src={featuredSpeak.image}
                fallbacks={[
                  `${speaking}Axis-Bank-Pune.jpg`,
                  `${speaking}Pune.jpg`,
                ]}
                alt={featuredSpeak.title}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
            </div>

            <div className="flex flex-col justify-center bg-[#07101f] p-8 md:p-12">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.34em] text-[#58a0ff]">
                {featuredSpeak.meta}
              </p>

              <h3 className="max-w-[720px] text-[42px] font-black leading-[0.9] tracking-[-0.07em] text-white md:text-[64px]">
                {featuredSpeak.title}
              </h3>

              <p className="mt-6 max-w-[680px] text-[16px] leading-8 text-white/68">
                {featuredSpeak.text}
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              <p className="mt-6 text-[11px] font-black uppercase tracking-[0.24em] text-white/42">
                Entrepreneurship • AI • Gaming • DeepTech • Innovation
              </p>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5 md:grid-cols-3">
          {signaturePlatforms.map((item) => (
            <SpeakingCard key={item.title} item={item} />
          ))}
        </div>

        {featureMoments.map((item) => (
          <FeatureSplit key={item.title} item={item} />
        ))}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {archiveMoments.map((item) => (
            <SpeakingCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}