import { motion } from "framer-motion";

import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

type ImpactItem = {
  title: string;
  text: string;
  image: string;
  position?: string;
};

const featured: ImpactItem = {
  title: "Dubai AI & Blockchain",
  text: "AI, blockchain and deeptech conversations.",
  image: "/assets/speaking/arijit-dubai-ai-blockchain-.jpg.jpeg",
  position: "object-center",
};

const impactItems: ImpactItem[] = [
  {
    title: "Lebanon Business Forum",
    text: "Cross-border entrepreneurship and business growth.",
    image: "/assets/speaking/2022/Lebanon.jpg",
  },
  {
    title: "Kazakhstan Innovation Dialogue",
    text: "AI, innovation and technology ecosystems.",
    image: "/assets/speaking/kazak.png",
    position: "object-center",
  },
  {
    title: "Thailand Blockchain Forum",
    text: "Blockchain and digital transformation.",
    image: "/assets/speaking/Thailand_blockchain.jpg",
    position: "object-center",
  },
  {
    title: "Kuala Lumpur Business Network",
    text: "Southeast Asia business and startup network.",
    image: "/assets/speaking/Kualalmpur.jpg",
    position: "object-center",
  },
  {
    title: "Maldives Innovation Platform",
    text: "Innovation, sustainability and collaboration.",
    image: "/assets/speaking/Maldives.jpg",
  },
  {
    title: "Colombia Global Exchange",
    text: "International entrepreneurship and ecosystem building.",
    image: "/assets/speaking/colombia.jpg",
  },
  {
    title: "WISE Global Platform",
    text: "Education, entrepreneurship and innovation.",
    image: "/assets/speaking/2022/WISE.jpg",
    position: "object-center",
  },
];

function ImpactCard({
  item,
  large = false,
}: {
  item: ImpactItem;
  large?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`group h-fit overflow-hidden rounded-[30px] border border-[#bdd9ff] bg-white shadow-sm transition duration-700 hover:-translate-y-1 hover:shadow-2xl ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden bg-[#f8fbff] p-3 ${
          large
            ? "min-h-[240px] sm:min-h-[300px] lg:min-h-[380px]"
            : "min-h-[230px] sm:min-h-[270px] lg:min-h-[320px]"
        }`}
      >
        <SmartImage
          src={item.image}
          fallbacks={[`${bio}stage-bio-banner.jpeg`, `${bio}wls2.jpg`]}
          alt={`${item.title} global impact and speaking platform visual for Arijit Bhattacharyya`}
          className={`block h-full w-full !object-contain ${
            item.position ?? "object-center"
          }`}
        />
      </div>

      <div className="border-t border-[#d8e7ff] bg-white p-5 md:p-6">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.34em] text-[#B8792A]">
          Global Impact
        </p>

        <h3 className="max-w-[760px] text-[20px] font-black leading-[1] tracking-[-0.04em] text-[#071C39] md:text-[24px]">
          {item.title}
        </h3>

        <p className="mt-3 max-w-[620px] text-[15px] leading-7 text-[#31435A]">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function GlobalImpact() {
  return (
    <section className="relative overflow-hidden bg-[#eef5ff] py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.34em] text-[#B8792A]">
              Global Impact
            </p>

            <h2 className="max-w-[980px] text-[42px] font-black leading-[0.9] tracking-[-0.055em] text-[#071C39] md:text-[64px] xl:text-[76px] [text-wrap:balance]">
              Building Businesses, Technologies and Global Ecosystems Since
              1998
            </h2>
          </div>

          <p className="max-w-[760px] text-[17px] leading-8 text-[#31435A] md:text-[19px] md:font-semibold md:leading-9">
            From AI, blockchain and VR to entrepreneurship, education,
            investment and global business, Arijit Bhattacharyya’s work connects
            innovation ecosystems across countries and industries.
          </p>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <ImpactCard item={featured} large />

          {impactItems.map((item) => (
            <ImpactCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

