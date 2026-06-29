import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Venture = {
  title: string;
  description: string;
  image: string;
  fit: "cover" | "contain";
  gold?: boolean;
};

const rightVentures: Venture[] = [
  {
    title: "World Leader Summit",
    description: "Global leadership and international business ecosystem.",
    image: "/assets/ventures/venture-wls.png",
    fit: "cover",
  },
  {
    title: "Coinnovate Ventures",
    description: "Blockchain and Web3 innovation platform investing in future.",
    image: "/assets/ventures/venture-coininnovate.png",
    fit: "contain",
  },
  {
    title: "Entrepreneursface",
    description: "Community and founder network empowering entrepreneurs globally.",
    image: "/assets/ventures/venture-entrepreneursface.png",
    fit: "contain",
  },
  {
    title: "Virtualgamedeveloper",
    description: "Gaming and immersive technology initiatives for next-gen worlds.",
    image: "/assets/ventures/venture-virtualgame.png",
    fit: "contain",
  },
  {
    title: "Glamworldface",
    description: "Creative and media platform celebrating talent and stories.",
    image: "/assets/ventures/venture-glamworld.png",
    fit: "contain",
  },
  {
    title: "Deeptech Knowledge",
    description: "AI, deeptech and future technologies research and knowledge hub.",
    image: "/assets/ventures/venture-deeptech.png",
    fit: "contain",
  },
];

const eightMetals: Venture = {
  title: "8Metals",
  description:
    "Exploring advanced materials, symbolic geometry and future scientific thinking.",
  image: "/assets/ventures/venture-8metals.png",
  fit: "contain",
  gold: true,
};

const featuredVenture: Venture = {
  title: "Virtualinfocom",
  description:
    "A technology incubation and digital transformation company building products, platforms and IPs across emerging technologies.",
  image: "/assets/ventures/venture-virtualinfocom.png",
  fit: "contain",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function VentureCard({ venture, featured = false }: { venture: Venture; featured?: boolean }) {
  const isGold = venture.gold === true;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className={`group overflow-hidden rounded-[24px] border bg-[#070707] shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition duration-500 ${
        isGold
          ? "border-[#d6a84b]/35 hover:border-[#f5c85a]/80"
          : "border-white/14 hover:border-[#0057ff]/70"
      } ${featured ? "lg:rounded-[30px]" : ""}`}
    >
      <div
        className={`relative overflow-hidden bg-black ${
          featured ? "h-[300px] sm:h-[380px] lg:h-[430px]" : "h-[210px] sm:h-[230px]"
        }`}
      >
        <img
          src={venture.image}
          alt={`${venture.title} venture by Arijit Bhattacharyya`}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
            venture.fit === "contain" ? "object-contain p-4" : "object-cover"
          }`}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
      </div>

      <div className={`${featured ? "p-6 sm:p-8" : "p-6"} min-h-[150px]`}>
        <p
          className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isGold ? "text-[#f5c85a]" : "text-blue-300"
          }`}
        >
          Venture Ecosystem
        </p>

        <h3
          className={`font-bold leading-tight tracking-[-0.04em] text-white ${
            featured ? "text-[32px] sm:text-[40px]" : "text-[23px]"
          }`}
        >
          {venture.title}
        </h3>

        <p className="mt-3 max-w-[520px] text-[15px] font-normal leading-7 text-white/70">
          {venture.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function VenturesShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-18 text-white sm:px-6 sm:py-20 md:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-[#0057ff] via-[#0057ff]/24 to-transparent" />
      <div className="pointer-events-none absolute left-[-240px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-220px] top-[-120px] h-[440px] w-[440px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Header */}
        <div className="mb-10 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d9cff]"
            >
              Ventures
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[820px] text-[36px] font-extrabold leading-[1.02] tracking-[-0.055em] text-white sm:text-[46px] lg:text-[58px]"
            >
              Ventures Built Across Technology, Media & Global Business
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[720px] text-[16px] font-normal leading-8 text-white/70 sm:text-[17px]"
            >
              Over the last 29+ years, Arijit Bhattacharyya has built and
              supported ventures spanning gaming, AI, blockchain,
              entrepreneurship, media, global networking and emerging
              technologies.
            </motion.p>
          </div>

          {/* Only CTA in this section */}
          <motion.div variants={fadeUp}>
            <Link
              to="/ecosystem"
              aria-label="Explore more ventures by Arijit Bhattacharyya"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-[14px] font-bold text-white shadow-[0_18px_55px_rgba(0,87,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
            >
              Explore More Ventures
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column */}
          <div className="grid gap-5">
            <VentureCard venture={featuredVenture} featured />
            <VentureCard venture={eightMetals} />
          </div>

          {/* Right Column */}
          <div className="grid gap-5 sm:grid-cols-2">
            {rightVentures.map((venture) => (
              <VentureCard key={venture.title} venture={venture} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}