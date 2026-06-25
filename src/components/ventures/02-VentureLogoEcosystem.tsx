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

const ventureGroups: VentureGroup[] = [
  {
    category: "Technology",
    summary: "Deep technology, cybersecurity, AR/VR and digital infrastructure.",
    ventures: [
      { name: "Virtualinfocom", logo: "/assets/ventures/final-new.png" },
      { name: "DeepTech Knowledge", logo: "/assets/ventures/deeptech.jpg" },
      { name: "Cyber Security", logo: "/assets/ventures/Cyber-Security.png" },
      { name: "Virtual Game Developer", logo: "/assets/ventures/vgd.jpg" },
      { name: "VR Association", logo: "/assets/ventures/vr-association.jpg" },
    ],
  },
  {
    category: "Investment",
    summary: "Startup capital, venture building and investment networks.",
    ventures: [
      {
        name: "Coinnovate Ventures",
        logo: "/assets/ventures/coinnovateventures.jpg",
      },
      { name: "Avalu Global", logo: "/assets/ventures/avalu.jpg" },
      { name: "8Metals", logo: "/assets/ventures/logo (3).png" },
    ],
  },
  {
    category: "Creative",
    summary: "Fashion, animation, characters, media and creative commerce.",
    ventures: [
      { name: "Glamworldface", logo: "/assets/ventures/glam-world.png" },
      {
        name: "Animation Reviews",
        logo: "/assets/ventures/new-animaition-rev-iw-and-game-dance-logo.png",
      },
      { name: "imSuperHero", logo: "/assets/ventures/im-super-heroC.png" },
      { name: "Cosplay Seller", logo: "/assets/ventures/cosplay.png" },
      {
        name: "Art n Craft Market",
        logo: "/assets/ventures/artncraftmarket.jpg",
      },
    ],
  },
  {
    category: "Gaming & Entertainment",
    summary: "Gaming, sports, consumer entertainment and publishing platforms.",
    ventures: [
      { name: "Animgaming", logo: "/assets/ventures/animgaming.png" },
      { name: "IGamePublisher", logo: "/assets/ventures/igamepublisher.jpg" },
      { name: "Game Dance", logo: "/assets/ventures/game-dance.jpg" },
      { name: "SportsZone", logo: "/assets/ventures/sports-zone.png" },
      { name: "Super Fun", logo: "/assets/ventures/super-fun.jpg" },
    ],
  },
  {
    category: "Global Platforms",
    summary: "Leadership forums, founder visibility and international networks.",
    ventures: [
      { name: "World Leader Summit", logo: "/assets/ventures/wls.jpg" },
      { name: "EntrepreneursFace", logo: "/assets/ventures/logo (2).png" },
      { name: "Crypto Beach Association", logo: "/assets/ventures/crypto.jpg" },
    ],
  },
  {
    category: "Healthcare & Sustainability",
    summary: "Health, wellness, energy, sustainability and future living ventures.",
    ventures: [
      { name: "Health Planeta", logo: "/assets/ventures/health-planeta.jpg" },
      { name: "Power Tree", logo: "/assets/ventures/power-tree.jpg" },
      { name: "Cera Heat", logo: "/assets/ventures/cera-heat.jpg" },
      { name: "Yoga Training 4U", logo: "/assets/ventures/yoga.jpg" },
      { name: "ÉSAH", logo: "/assets/ventures/tea.jpg" },
    ],
  },
  {
    category: "Infrastructure",
    summary: "Business infrastructure, smart spaces, metals and product systems.",
    ventures: [
      { name: "Broffice", logo: "/assets/ventures/broffice.jpg" },
      { name: "Smartdomus", logo: "/assets/ventures/smartdomus.jpg" },
      { name: "Zuprime", logo: "/assets/ventures/zuprime.png" },
      { name: "Tespack", logo: "/assets/ventures/tespack.jpg" },
    ],
  },
  {
    category: "Innovation & Communities",
    summary: "Accessibility, marketplaces, drones and ecosystem support ventures.",
    ventures: [
      { name: "Torch-It", logo: "/assets/ventures/torch-it.jpg" },
      { name: "BringMe", logo: "/assets/ventures/bringme.jpg" },
      {
        name: "Property Planeta",
        logo: "/assets/ventures/property-planeta.png",
      },
      {
        name: "Leshtronix Drone Systems",
        logo: "/assets/ventures/lextronics.jpg",
      },
      { name: "StarBounty", logo: "/assets/ventures/starbounty.jpg" },
    ],
  },
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

export default function VentureLogoEcosystem() {
  return (
    <section
      id="venture-ecosystem"
      className="relative overflow-hidden bg-white px-5 py-20 text-[#03070d] sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_6%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_10%_76%,rgba(14,165,233,0.09),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f6fbff_44%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-200/80 to-transparent lg:left-[7%]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Venture Ecosystem
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building companies. Connecting industries. Creating global impact.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Built over 29+ years, Arijit Bhattacharyya’s venture ecosystem
              brings together companies, platforms and communities across
              technology, investment, media, gaming, education, healthcare,
              sustainability and international business.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                Built Since 1998
              </span>
              <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                Companies • Platforms • Communities
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
          {ventureGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={rowVariants}
              className="relative grid gap-6 py-8 lg:grid-cols-[250px_1fr] lg:items-center"
            >
              <div className="absolute -left-2 top-10 hidden h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_8px_rgba(37,99,235,0.10)] lg:block" />

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {group.category}
                </h3>

                <p className="mt-3 max-w-xs text-base leading-7 text-slate-600">
                  {group.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {group.ventures.map((venture, index) => (
                  <motion.div
                    key={venture.name}
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.38, delay: index * 0.04 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group flex min-h-36 items-center justify-center rounded-[1.4rem] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition duration-300 hover:border-blue-300 hover:bg-white hover:shadow-[0_24px_60px_rgba(37,99,235,0.18)] sm:min-h-40"
                    title={venture.name}
                  >
                    {venture.logo ? (
                      <img
                        src={venture.logo}
                        alt={`${venture.name} logo`}
                        className="max-h-24 max-w-[94%] object-contain transition duration-300 group-hover:scale-105 sm:max-h-28"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-center text-lg font-bold text-slate-950">
                        {venture.name}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}