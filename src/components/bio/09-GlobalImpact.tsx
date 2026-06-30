import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { bio } from "../../data/bio/bioAssets";

type ImpactItem = {
  title: string;
  text: string;
  image: string;
  fit?: "cover" | "contain";
  position?: string;
};

const featured: ImpactItem = {
  title: "Dubai AI & Blockchain",
  text: "AI, blockchain and deeptech conversations.",
  image: "/assets/speaking/arijit-dubai-ai-blockchain-.jpg.jpeg",
  fit: "cover",
  position: "object-center",
};

const impactItems: ImpactItem[] = [
  {
    title: "Lebanon Business Forum",
    text: "Cross-border entrepreneurship and business growth.",
    image: "/assets/speaking/2022/Lebanon.jpg",
    fit: "contain",
  },
  {
    title: "Kazakhstan Innovation Dialogue",
    text: "AI, innovation and technology ecosystems.",
    image: "/assets/speaking/kazak.png",
    fit: "cover",
    position: "object-center",
  },
  {
    title: "Thailand Blockchain Forum",
    text: "Blockchain and digital transformation.",
    image: "/assets/speaking/Thailand_blockchain.jpg",
    fit: "cover",
    position: "object-center",
  },
  {
    title: "Kuala Lumpur Business Network",
    text: "Southeast Asia business and startup network.",
    image: "/assets/speaking/Kualalmpur.jpg",
    fit: "cover",
    position: "object-center",
  },
  {
    title: "Maldives Innovation Platform",
    text: "Innovation, sustainability and collaboration.",
    image: "/assets/speaking/Maldives.jpg",
    fit: "contain",
  },
  {
    title: "Colombia Global Exchange",
    text: "International entrepreneurship and ecosystem building.",
    image: "/assets/speaking/colombia.jpg",
    fit: "contain",
  },
  {
    title: "WISE Global Platform",
    text: "Education, entrepreneurship and innovation.",
    image: "/assets/speaking/2022/WISE.jpg",
    fit: "cover",
    position: "object-center",
  },
];

function ImpactCard({ item, large = false }: { item: ImpactItem; large?: boolean }) {
  const imageFit =
    item.fit === "contain"
      ? "object-contain object-center p-3"
      : `object-cover ${item.position ?? "object-center"}`;

  return (
    <motion.article
      {...fadeUp}
      className={`group overflow-hidden rounded-[28px] border border-[#bdd9ff] bg-white shadow-[0_20px_70px_rgba(0,87,255,0.10)] transition duration-500 hover:-translate-y-2 ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`overflow-hidden bg-black ${large ? "h-[420px]" : "h-[300px]"}`}>
        <SmartImage
          src={item.image}
          fallbacks={[`${bio}stage-bio-banner.jpeg`, `${bio}wls2.jpg`]}
          alt={item.title}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.025] ${imageFit}`}
        />
      </div>

      <div className="bg-white p-6">
        <p className="mb-3 text-[9px] font-black uppercase tracking-[0.32em] text-[#0057ff]">
          Global Impact
        </p>

        <h3 className="max-w-[760px] text-[28px] font-black leading-[0.92] tracking-[-0.055em] text-[#07101f] md:text-[38px]">
          {item.title}
        </h3>

        <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-[#475569]">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function GlobalImpact() {
  return (
    <section className="relative overflow-hidden bg-[#eef5ff] px-5 py-20 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#0057ff]">
              Global Impact
            </p>

            <h2 className="max-w-[780px] text-[38px] font-black leading-[0.9] tracking-[-0.07em] text-[#07101f] md:text-[62px]">
              Building Businesses, Technologies and Global Ecosystems Since 1998
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-8 text-[#334155] md:text-[16px]">
            From AI, blockchain and VR to entrepreneurship, education,
            investment and global business, Arijit Bhattacharyya’s work connects
            innovation ecosystems across countries and industries.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ImpactCard item={featured} large />

          {impactItems.map((item) => (
            <ImpactCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
