import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";

type VentureItem = {
  name: string;
  image?: string;
  text: string;
  category: string;
  tier: "flagship" | "creative" | "platform";
};

const path = "/assets/ventures/";

const ventures: VentureItem[] = [
  {
    name: "Virtualinfocom",
    image: `${path}final-new.png`,
    text: "Games • Animation • VR • Since 1998",
    category: "Technology",
    tier: "flagship",
  },
  {
    name: "World Leader Summit",
    image: `${path}wls.jpg`,
    text: "Leadership • Global Forums",
    category: "Global Network",
    tier: "flagship",
  },
  {
    name: "Virtual Reality Sol",
    text: "VR • AR • Immersive Media",
    category: "Immersive Tech",
    tier: "flagship",
  },
  {
    name: "Glamworldface",
    image: `${path}glam-world.png`,
    text: "Models • Media • Fashion",
    category: "Creative Media",
    tier: "flagship",
  },
  {
    name: "imsuperhero",
    image: `${path}im-super-heroC.png`,
    text: "Superheroes • Comics • IP",
    category: "Creative IP",
    tier: "flagship",
  },
  {
    name: "Animgaming",
    image: `${path}animgaming.png`,
    text: "Gaming • Animation • Media",
    category: "Gaming",
    tier: "flagship",
  },
  {
    name: "Yogatraining4u",
    image: `${path}yoga.jpg`,
    text: "Yoga • Wellness • Training",
    category: "Wellness",
    tier: "creative",
  },
  {
    name: "Animationreviews",
    image: `${path}new-animaition-rev-iw-and-game-dance-logo.png`,
    text: "Animation • Reviews • Media",
    category: "Media",
    tier: "creative",
  },
  {
    name: "Cosplayseller",
    image: `${path}cosplay.png`,
    text: "Cosplay • Fandom • Commerce",
    category: "Creative Commerce",
    tier: "creative",
  },
  {
    name: "Virtualgamedeveloper",
    text: "Games • Characters • Interactive Media",
    category: "Game Development",
    tier: "creative",
  },
  {
    name: "ArtnCraftMarket",
    image: `${path}artncraftmarket.jpg`,
    text: "Art • Craft • Marketplace",
    category: "Marketplace",
    tier: "creative",
  },
  {
    name: "Avaluglobal Investments",
    image: `${path}avalu.jpg`,
    text: "Investment • Valuation • Advisory",
    category: "Investment",
    tier: "platform",
  },
  {
    name: "Entrepreneursface",
    image: `${path}logo (2).png`,
    text: "Startups • Visibility • Founders",
    category: "Startups",
    tier: "platform",
  },
  {
    name: "8metals",
    image: `${path}logo (3).png`,
    text: "Industry • Metals • Business",
    category: "Industry",
    tier: "platform",
  },
  {
    name: "Coinnovate Ventures",
    image: `${path}coinnovateventures.jpg`,
    text: "Blockchain • Investment • Acceleration",
    category: "Blockchain",
    tier: "platform",
  },
  {
    name: "Health Planeta",
    image: `${path}health-planeta.jpg`,
    text: "Health • Wellness • Digital",
    category: "Health",
    tier: "platform",
  },
  {
    name: "CryptoBeach Association",
    image: `${path}crypto.jpg`,
    text: "Crypto • Blockchain • Community",
    category: "Crypto Community",
    tier: "platform",
  },
  {
    name: "Torch-It",
    image: `${path}torch-it.jpg`,
    text: "Assistive Tech • Inclusion",
    category: "Assistive Tech",
    tier: "platform",
  },
  {
    name: "Smartdomus",
    image: `${path}smartdomus.jpg`,
    text: "Smart Living • Property Tech",
    category: "Smart Living",
    tier: "platform",
  },
  {
    name: "Power Tree",
    image: `${path}power-tree.jpg`,
    text: "Energy • Sustainability",
    category: "Sustainability",
    tier: "platform",
  },
  {
    name: "Cera Heat",
    image: `${path}cera-heat.jpg`,
    text: "Industrial • Materials • Heating",
    category: "Industry",
    tier: "platform",
  },
];

const flagship = ventures.filter((item) => item.tier === "flagship");
const creative = ventures.filter((item) => item.tier === "creative");
const platforms = ventures.filter((item) => item.tier === "platform");

function TextOnlyLogo({ venture, large = false }: { venture: VentureItem; large?: boolean }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-[24px] bg-[#07101f] px-5 text-center">
      <span
        className={`font-black uppercase leading-[0.95] tracking-[-0.04em] text-white ${
          large ? "text-[30px]" : "text-[18px]"
        }`}
      >
        {venture.name}
      </span>
    </div>
  );
}

function LogoBox({ venture, large = false }: { venture: VentureItem; large?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[28px] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(0,87,255,0.14)] ${
        large ? "h-[190px]" : "h-[118px]"
      }`}
    >
      {venture.image ? (
        <SmartImage
          src={venture.image}
          alt={`${venture.name} logo`}
          className="h-full w-full object-contain"
        />
      ) : (
        <TextOnlyLogo venture={venture} large={large} />
      )}
    </div>
  );
}

function FlagshipCard({ venture }: { venture: VentureItem }) {
  return (
    <motion.article
      {...fadeUp}
      className="group rounded-[38px] border border-white/10 bg-white/[0.07] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
    >
      <LogoBox venture={venture} large />

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#58a0ff]">
            {venture.category}
          </p>

          <h3 className="mt-3 text-[30px] font-black leading-[0.95] tracking-[-0.06em] text-white">
            {venture.name}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-[12px] font-black uppercase tracking-[0.14em] text-white/55">
        {venture.text}
      </p>
    </motion.article>
  );
}

function LogoTile({ venture }: { venture: VentureItem }) {
  return (
    <motion.article
      {...fadeUp}
      className="group rounded-[28px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.085]"
    >
      <LogoBox venture={venture} />

      <h3 className="mt-4 text-[18px] font-black leading-tight tracking-[-0.045em] text-white">
        {venture.name}
      </h3>

      <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#58a0ff]">
        {venture.category}
      </p>
    </motion.article>
  );
}

function VentureGroup({ title, items }: { title: string; items: VentureItem[] }) {
  return (
    <div className="mt-14">
      <div className="mb-6 flex items-center gap-5">
        <h3 className="text-[26px] font-black tracking-[-0.05em] text-white">
          {title}
        </h3>
        <div className="h-px flex-1 bg-white/12" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((venture) => (
          <LogoTile key={venture.name} venture={venture} />
        ))}
      </div>
    </div>
  );
}

export default function VentureLogoStrip() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-24 text-white md:px-10">
      <div className="absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#0057ff]/18 blur-[130px]" />
      <div className="absolute bottom-[-16%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#58a0ff]/12 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="mb-12 grid gap-7 lg:grid-cols-[0.78fr_1fr] lg:items-end"
        >
          <div>
           

            <h2 className="max-w-[860px] text-[44px] font-black leading-[0.9] tracking-[-0.075em] text-white md:text-[72px]">
              A multi-industry venture ecosystem built over decades.
            </h2>
          </div>

          <p className="max-w-[720px] text-[17px] leading-8 text-white/66">
            A curated Bio snapshot of Arijit Bhattacharyya’s ventures,
            platforms and ecosystem brands across technology, media, gaming,
            wellness, investment, blockchain and global business.
          </p>
        </motion.div>

        <div>
          <div className="mb-6 flex items-center gap-5">
            <h3 className="text-[26px] font-black tracking-[-0.05em] text-white">
              Flagship Ventures
            </h3>
            <div className="h-px flex-1 bg-white/12" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {flagship.map((venture) => (
              <FlagshipCard key={venture.name} venture={venture} />
            ))}
          </div>
        </div>

        <VentureGroup title="Creative, Gaming & Media Brands" items={creative} />
        <VentureGroup title="Investment, Technology & Business Platforms" items={platforms} />

       
      </div>
    </section>
  );
}
