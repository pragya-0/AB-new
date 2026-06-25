import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type FlagshipVenture = {
  name: string;
  eyebrow: string;
  image: string;
  summary: string;
  tags: string[];
};

const flagshipVentures: FlagshipVenture[] = [
  {
    name: "Virtualinfocom",
    eyebrow: "Technology • Games • Animation",
    image: "/assets/ventures/venture-virtualinfocom.png",
    summary:
      "The foundation of the ecosystem — built from Kolkata since 1998 across game development, animation, AR/VR, training, digital IP and technology services.",
    tags: ["Since 1998", "Digital IP", "AR/VR"],
  },
  {
    name: "World Leader Summit",
    eyebrow: "Leadership • Diplomacy • Global Forums",
    image: "/assets/ventures/venture-wls.png",
    summary:
      "A global platform connecting leaders, founders, investors, diplomats, policymakers and innovators through international forums and business conversations.",
    tags: ["Global Forums", "Leadership", "Business"],
  },
  {
    name: "Coinnovate Ventures",
    eyebrow: "Investment • Startups • Innovation",
    image: "/assets/ventures/venture-coininnovate.png",
    summary:
      "An investment and startup ecosystem platform supporting founders, scale-up companies, innovation networks and strategic business expansion.",
    tags: ["Investment", "Startups", "Scale-Up"],
  },
  {
    name: "Glamworldface",
    eyebrow: "Creative Media • Fashion • Talent",
    image: "/assets/ventures/venture-glamworld.png",
    summary:
      "A creative media and talent platform connecting fashion, models, creators, entertainment projects and visual storytelling under a wider media ecosystem.",
    tags: ["Creative Media", "Fashion", "Talent"],
  },
  {
    name: "EntrepreneursFace",
    eyebrow: "Founder Community • Visibility • Growth",
    image: "/assets/ventures/venture-entrepreneursface.png",
    summary:
      "A founder-facing platform built around entrepreneurship visibility, community building, business stories and connections across startup ecosystems.",
    tags: ["Founders", "Community", "Visibility"],
  },
  {
    name: "Virtual Game Developer",
    eyebrow: "Gaming • Development • Interactive Media",
    image: "/assets/ventures/venture-virtualgame.png",
    summary:
      "A gaming and interactive media initiative focused on game development, virtual worlds, developer ecosystems and entertainment technology.",
    tags: ["Gaming", "Interactive", "Developers"],
  },
  {
    name: "DeepTech Knowledge",
    eyebrow: "DeepTech • Education • Future Skills",
    image: "/assets/ventures/venture-deeptech.png",
    summary:
      "A knowledge platform focused on deep technology, emerging skills, training, innovation awareness and future-ready learning ecosystems.",
    tags: ["DeepTech", "Training", "Future Skills"],
  },
  {
    name: "8Metals",
    eyebrow: "Materials • Infrastructure • Future Industry",
    image: "/assets/ventures/venture-8metals.png",
    summary:
      "A future-facing materials and infrastructure venture positioned within the broader ecosystem of industry, product systems and market expansion.",
    tags: ["Materials", "Infrastructure", "Industry"],
  },
];

export default function FlagshipVentures() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(14,165,233,0.13),transparent_30%),linear-gradient(180deg,#03070d_0%,#06101d_48%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
            Flagship Ventures
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Built from technology, expanded into global platforms.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            These flagship ventures represent the strongest pillars of the
            ecosystem — technology, investment, leadership forums, creative
            media, founder communities, gaming, deeptech and future industry.
          </p>
        </motion.div>

        <div className="mt-14 space-y-7">
          {flagshipVentures.map((venture, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={venture.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.58, delay: index * 0.03 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.075]"
              >
                <div
                  className={`grid items-stretch lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[300px] overflow-hidden bg-slate-950 sm:min-h-[420px] lg:min-h-[480px]">
                    <img
                      src={venture.image}
                      alt={`${venture.name} venture artwork`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex min-h-full flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                      {venture.eyebrow}
                    </p>

                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {venture.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                      {venture.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {venture.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {index === 0 && (
                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-300">
                        Ecosystem origin <ArrowUpRight size={17} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}