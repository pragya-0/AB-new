import { useState } from "react";
import { motion } from "framer-motion";

type VentureLogo = {
  name: string;
  logo?: string;
};

type VentureGroup = {
  category: string;
  summary: string;
  ventures: VentureLogo[];
};

const coreVentureGroups: VentureGroup[] = [
  {
    category: "Technology & Immersive Systems",
    summary: "Core technology ventures connected with games, VR, AR, digital systems and innovation.",
    ventures: [
      { name: "Virtualinfocom", logo: "/assets/ventures/final-new.png" },
      { name: "Virtual Reality Sol" },
      { name: "Virtualgamedeveloper", logo: "/assets/ventures/vgd.jpg" },
      { name: "Animgaming", logo: "/assets/ventures/animgaming.png" },
    ],
  },
  {
    category: "Investment & Venture Building",
    summary: "Investment, capital, metals and founder-network platforms.",
    ventures: [
      { name: "Coinnovate Ventures", logo: "/assets/ventures/coinnovateventures.jpg" },
      { name: "Avaluglobal Investments", logo: "/assets/ventures/avalu.jpg" },
      { name: "8metals", logo: "/assets/ventures/logo (3).png" },
      { name: "Entrepreneursface", logo: "/assets/ventures/logo (2).png" },
    ],
  },
  {
    category: "Creative, Media & Characters",
    summary: "Creative identity, fashion, animation, cosplay, characters and visual commerce.",
    ventures: [
      { name: "Glamworldface", logo: "/assets/ventures/glam-world.png" },
      { name: "imsuperhero", logo: "/assets/ventures/im-super-heroC.png" },
      { name: "Animationreviews", logo: "/assets/ventures/new-animaition-rev-iw-and-game-dance-logo.png" },
      { name: "Cosplayseller", logo: "/assets/ventures/cosplay.png" },
      { name: "ArtnCraftMarket", logo: "/assets/ventures/artncraftmarket.jpg" },
    ],
  },
  {
    category: "Global Platforms & Communities",
    summary: "Leadership forums, global communities and international collaboration networks.",
    ventures: [
      { name: "World Leader Summit", logo: "/assets/ventures/wls.jpg" },
      { name: "CryptoBeach Association", logo: "/assets/ventures/crypto.jpg" },
    ],
  },
  {
    category: "Healthcare, Sustainability & Living",
    summary: "Health, wellness, smart living, energy and sustainability-led ventures.",
    ventures: [
      { name: "Health Planeta", logo: "/assets/ventures/health-planeta.jpg" },
      { name: "Power Tree", logo: "/assets/ventures/power-tree.jpg" },
      { name: "Cera Heat", logo: "/assets/ventures/cera-heat.jpg" },
      { name: "Yogatraining4u", logo: "/assets/ventures/yoga.jpg" },
      { name: "Smartdomus", logo: "/assets/ventures/smartdomus.jpg" },
      { name: "Torch-It", logo: "/assets/ventures/torch-it.jpg" },
    ],
  },
];

const extendedEcosystem: VentureLogo[] = [
  { name: "DeepTech Knowledge", logo: "/assets/ventures/deeptech.jpg" },
  { name: "Cyber Security", logo: "/assets/ventures/Cyber-Security.png" },
  { name: "VR Association", logo: "/assets/ventures/vr-association.jpg" },
  { name: "IGamePublisher", logo: "/assets/ventures/igamepublisher.jpg" },
  { name: "Game Dance", logo: "/assets/ventures/game-dance.jpg" },
  { name: "SportsZone", logo: "/assets/ventures/sports-zone.png" },
  { name: "Super Fun", logo: "/assets/ventures/super-fun.jpg" },
  { name: "Broffice", logo: "/assets/ventures/broffice.jpg" },
  { name: "Zuprime", logo: "/assets/ventures/zuprime.png" },
  { name: "Tespack", logo: "/assets/ventures/tespack.jpg" },
  { name: "BringMe", logo: "/assets/ventures/bringme.jpg" },
  { name: "Property Planeta", logo: "/assets/ventures/property-planeta.png" },
  { name: "Leshtronix Drone Systems", logo: "/assets/ventures/lextronics.jpg" },
  { name: "StarBounty", logo: "/assets/ventures/starbounty.jpg" },
  { name: "ESAH", logo: "/assets/ventures/tea.jpg" },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52 },
  },
};

function VentureCard({ venture, compact = false }: { venture: VentureLogo; compact?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.38 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={[
        "group flex items-center justify-center rounded-[22px] border border-slate-200 bg-white/92 p-4 shadow-sm backdrop-blur transition duration-300 hover:border-blue-300 hover:bg-white hover:shadow-2xl",
        compact ? "min-h-24" : "min-h-32 sm:min-h-36",
      ].join(" ")}
      title={venture.name}
      aria-label={venture.name}
    >
      {venture.logo && !imageFailed ? (
        <img
          src={venture.logo}
          alt={`${venture.name} logo`}
          className={[
            "max-w-[92%] object-contain transition duration-300 group-hover:scale-105",
            compact ? "max-h-14" : "max-h-20 sm:max-h-24",
          ].join(" ")}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="px-2 text-center text-sm font-bold leading-snug text-slate-950 sm:text-base">
          {venture.name}
        </span>
      )}
    </motion.div>
  );
}

export default function VentureLogoEcosystem() {
return (
    <section
      id="venture-ecosystem"
      className="relative overflow-hidden bg-white py-14 text-[#03070d] sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_6%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_10%_76%,rgba(14,165,233,0.09),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6fbff_44%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#B8792A]">
              Venture Ecosystem
            </p>

            <h2 className="mt-4 max-w-4xl text-[42px] font-extrabold leading-[0.92] tracking-tight text-slate-950 sm:text-[64px] lg:text-[76px]">
              Venture ecosystem, platforms and product network.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-[17px] leading-8 text-slate-600">
              Since 1998, Arijit Bhattacharyyaâ€™s ecosystem connects core
              ventures, investment platforms, creative brands, technology
              initiatives, communities and product-led networks across multiple
              industries.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Since 1998
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Core Venture Network
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                Extended Ecosystem
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 divide-y divide-slate-200"
        >
          {coreVentureGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={rowVariants}
              className="relative grid gap-6 py-8 lg:grid-cols-[280px_1fr] lg:items-center"
            >
              <div className="absolute -left-2 top-10 hidden h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_8px_rgba(37,99,235,0.10)] lg:block" />

              <div>
                <h3 className="text-2xl font-bold leading-tight text-slate-950">
                  {group.category}
                </h3>

                <p className="mt-3 max-w-xs text-[15px] leading-7 text-slate-600">
                  {group.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {group.ventures.map((venture) => (
                  <VentureCard key={venture.name} venture={venture} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-[32px] border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-7 lg:p-8"
        >
          <div className="grid gap-6 border-b border-slate-200 pb-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#B8792A]">
                Extended Ecosystem
              </p>
              <h3 className="mt-3 text-3xl font-extrabold leading-none tracking-tight text-slate-950 sm:text-4xl">
                Additional platforms and product-led initiatives.
              </h3>
            </div>

            <p className="max-w-3xl text-[15px] leading-7 text-slate-600">
              These connected brands, communities and product initiatives are presented as part of the wider ecosystem network, separate from the primary founder-company list.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {extendedEcosystem.map((venture) => (
              <VentureCard key={venture.name} venture={venture} compact />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}