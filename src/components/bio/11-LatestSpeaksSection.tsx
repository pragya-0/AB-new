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
  fit?: "cover" | "contain";
};

type FeatureItem = SpeakItem & {
  badge: string;
  tone: "gold" | "blue";
};

const featuredSpeak: SpeakItem = {
  title: "Speaking Across Continents Since 2008",
  text: "Speaker in more than 2100 events worldwide across entrepreneurship, future technology, innovation, game development, virtual reality, augmented reality, NFT, blockchain, artificial intelligence, digital banking, SDG goals, creativity, arts and media.",
  image: `${speaking}axis-pune.jpg`,
  meta: "Global Keynotes • Institutions • Business Forums",
  position: "object-center",
};

const signaturePlatforms: SpeakItem[] = [
  {
    title: "TEDx Speaker",
    text: "Ideas, innovation, entrepreneurship and future technology storytelling on a public stage.",
    image: `${speaking}tedx.jpg.jpeg`,
    meta: "TEDx • Ideas Worth Sharing",
    position: "object-center",
  },
  {
    title: "IIT, IIM, NIT & XLRI Platforms",
    text: "Speaker across IITs, IIMs, NITs, XLRI and universities on innovation, startups, technology, funding, game development and future skills.",
    image: `${speaking}IIT_Hydrabad.jpg`,
    meta: "IIT • IIM • NIT • XLRI",
    position: "object-center",
  },
  {
    title: "Dubai AI & Blockchain",
    text: "AI, blockchain, digital finance, crypto, future technology and international business conversations.",
    image: `${speaking}dubai-speaker.png`,
    meta: "AI • Blockchain • Future Tech",
    position: "object-center",
  },
];

const featureMoments: FeatureItem[] = [
  {
    badge: "Featured Engagement",
    title: "Ghana Business Summit with Vice President of Ghana",
    text: "International business, investment and leadership platform connected with global entrepreneurship, innovation and business diplomacy.",
    image: `${speaking}ghana.jpeg`,
    meta: "Ghana • Vice President • Business Summit",
    tone: "gold",
    fit: "contain",
    position: "object-center",
  },
  {
    badge: "International Forum",
    title: "Thailand Blockchain Forum",
    text: "Blockchain, digital finance, crypto ecosystem, fintech and international technology conversations in Southeast Asia.",
    image: `${speaking}Thailand_blockchain.jpg`,
    meta: "Thailand • Blockchain • Digital Finance",
    tone: "blue",
    fit: "cover",
    position: "object-left",
  },
];

const archiveMoments: SpeakItem[] = [
  {
    title: "China VR Film Festival",
    text: "Virtual reality, immersive media, film technology and international creative-technology conversations.",
    image: `${speaking}china.jpg.jpeg`,
    meta: "China • VR • Film Technology",
    position: "object-center",
  },
  {
    title: "Finland Smart City",
    text: "Smart city, global business collaboration, innovation networks and technology-led urban development conversations.",
    image: `${speaking}Finland.jpg`,
    meta: "Finland • Smart City • Global Business",
    position: "object-center",
  },
  {
    title: "Next Growth Nepal",
    text: "Product development, startups, founder growth and entrepreneurship ecosystem conversations.",
    image: `${speaking}Nepal.jpg`,
    meta: "Nepal • Product Development • Startups",
    position: "object-center",
  },
  {
    title: "Axis Bank Bhubaneswar",
    text: "MSME growth, banking, business strategy, digital transformation and entrepreneurship development.",
    image: `${speaking}axis-bank-bhub.jpg`,
    meta: "MSME • Banking • Growth",
    position: "object-center",
  },
  {
    title: "South Korea DeepTech",
    text: "Deeptech, gaming, creative technology and international collaboration with innovation communities.",
    image: `${speaking}SKorea.png`,
    meta: "South Korea • DeepTech • Gaming",
    position: "object-center",
  },
  {
    title: "XLRI Jamshedpur",
    text: "Startup ecosystem, innovation, future business and founder growth conversations.",
    image: `${speaking}xlri.jpeg`,
    meta: "XLRI • Startups • Innovation",
    position: "object-center",
  },
];

const speakingProof = [
  "TEDx Speaker",
  "American Association of Precision Medicine",
  "Diplomatic World Europe",
  "Unicorn Battle USA",
  "Ghana Business Summit & Awards with Vice President of Ghana",
  "China VR Film Festival",
  "Thailand Blockchain Forum",
  "Go International Finland",
  "Next Growth Nepal",
  "CNBC India",
  "DD National",
  "DD Bangla",
  "TV9",
  "Kantipur TV",
  "Josh Talks",
  "Dubai Blockchain Conference",
  "Games Gathering Ukraine",
  "Korea Game Conference",
  "Good Game Show Korea",
  "Passion for Game Singapore",
  "NAB China",
  "Xian Film Festival China",
  "Children Film Festival India",
  "FICCI Frames",
  "Franchise India",
  "IAMAI",
  "Confederation of Indian Industry",
  "Indian Chamber of Commerce",
  "ASSOCHAM",
  "Bengal Chamber of Commerce",
  "German American Chamber of Commerce",
  "FICCI",
  "TiE",
  "Vibrant Saurashtra",
  "World Women Conference USA",
  "MDI Gurgaon",
  "MDI Murshidabad",
  "BESU / IIST Shibpur",
  "Campdain Family Connect",
  "Dream Institute of Technology",
  "UEM",
  "IEM",
  "Vivekananda University",
  "Poornima University",
  "UPS University",
  "Chitkara University",
  "International Conference on Cybercrime and Cyber Security",
  "International Conference on AI",
  "Axis Bank",
  "Government of Himachal",
  "IITs",
  "IIMs",
  "NITs",
  "XLRI",
];

function SpeakingCard({ item }: { item: SpeakItem }) {
  return (
    <motion.article
      {...fadeUp}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/60 md:rounded-[30px]"
    >
      <div className="relative h-[300px] overflow-hidden bg-black sm:h-[340px] md:h-[360px]">
        <SmartImage
          src={item.image}
          fallbacks={[
            `${speaking}axis-pune.jpg`,
            `${speaking}IIT_Hydrabad.jpg`,
            `${speaking}ghana-index.jpg`,
          ]}
          alt={`Arijit Bhattacharyya speaking at ${item.title} on ${item.meta}`}
          className={`h-full w-full ${
            item.fit === "contain"
              ? "object-contain object-center"
              : `object-cover ${item.position ?? "object-center"}`
          } transition duration-700 group-hover:scale-[1.025]`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/24 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8bb7ff]">
            {item.meta}
          </p>

          <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[30px]">
            {item.title}
          </h3>

          <p className="mt-3 max-w-[620px] text-[14px] font-normal leading-[1.7] text-white/74 md:text-[15px]">
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
      className={`overflow-hidden rounded-[30px] border bg-[#090b0f] shadow-[0_30px_100px_rgba(0,0,0,0.32)] md:rounded-[38px] ${
        isGold ? "border-[#f7c948]/60" : "border-[#58a0ff]/45"
      }`}
    >
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div
          className={`flex flex-col justify-center p-6 sm:p-7 md:p-10 ${
            isGold
              ? "bg-[radial-gradient(circle_at_top_left,rgba(247,201,72,0.14),transparent_42%),#090b0f]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(88,160,255,0.16),transparent_42%),#07101f]"
          }`}
        >
          <div
            className={`mb-6 w-fit rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur ${
              isGold
                ? "border-[#f7c948]/55 bg-[#f7c948]/12 text-[#ffe69a]"
                : "border-[#58a0ff]/55 bg-[#58a0ff]/12 text-[#9cc5ff]"
            }`}
          >
            {item.badge}
          </div>

          <p
            className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] ${
              isGold ? "text-[#ffe69a]" : "text-[#8bb7ff]"
            }`}
          >
            {item.meta}
          </p>

          <h3 className="max-w-[760px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            {item.title}
          </h3>

          <p className="mt-5 max-w-[620px] text-[15px] font-normal leading-[1.75] text-white/72 md:text-[17px]">
            {item.text}
          </p>
        </div>

        <div className="relative h-[360px] overflow-hidden bg-black sm:h-[430px] md:h-[520px]">
          <SmartImage
            src={item.image}
            fallbacks={[
              `${speaking}ghana-index.jpg`,
              `${speaking}axis-pune.jpg`,
            ]}
            alt={`Arijit Bhattacharyya speaking at ${item.title}`}
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
      text="A selected speaking archive across institutions, summits, banks, universities, chambers of commerce, television platforms and global innovation forums."
      dark
    >
      <div className="space-y-5 md:space-y-6">
        <motion.article
          {...fadeUp}
          className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.34)] md:rounded-[40px]"
        >
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative h-[360px] overflow-hidden bg-black sm:h-[430px] md:h-[520px]">
              <SmartImage
                src={featuredSpeak.image}
                fallbacks={[
                  `${speaking}Axis-Bank-Pune.jpg`,
                  `${speaking}Pune.jpg`,
                ]}
                alt="Arijit Bhattacharyya speaking across continents since 2008 at global keynotes institutions and business forums"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
            </div>

            <div className="flex flex-col justify-center bg-[#07101f] p-6 sm:p-7 md:p-10 lg:p-12">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#58a0ff]">
                {featuredSpeak.meta}
              </p>

              <h3 className="max-w-[720px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
                {featuredSpeak.title}
              </h3>

              <p className="mt-5 max-w-[680px] text-[15px] font-normal leading-[1.8] text-white/68 md:text-[17px]">
                {featuredSpeak.text}
              </p>

              <div className="mt-7 h-px w-full bg-white/10" />

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Entrepreneurship • AI • Gaming • DeepTech • Innovation • SDG
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

        <motion.div
          {...fadeUp}
          className="rounded-[28px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:rounded-[34px] md:p-7"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
            Selected Platforms
          </p>

          <h3 className="mt-4 max-w-[880px] text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
            Keynote Speaker, Moderator, Resource Person and Global Panelist.
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {speakingProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/68 sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </BioSectionShell>
  );
}
