import { motion } from "framer-motion";

type ExpansionBlock = {
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  ventures: string[];
  points: string[];
};

const expansionBlocks: ExpansionBlock[] = [
  {
    title: "Technology Expansion",
    eyebrow: "Technology • Training • Digital Systems",
    summary:
      "A technology-led growth layer connecting software, gaming, AR/VR, deeptech learning, cybersecurity and digital transformation.",
    image: "/assets/ventures/venture-deeptech.png",
    ventures: ["Virtualinfocom", "DeepTech Knowledge", "Cyber Security", "VGD"],
    points: ["Digital IP", "Future Skills", "AR/VR", "Technology Training"],
  },
  {
    title: "Investment & Founder Network",
    eyebrow: "Capital • Startups • Scale-Up",
    summary:
      "A venture-building and investment support network for founders looking to raise capital, access markets and build strategic partnerships.",
    image: "/assets/ventures/venture-coininnovate.png",
    ventures: ["Coinnovate Ventures", "Avalu Global", "EntrepreneursFace"],
    points: ["Investment Support", "Founder Visibility", "Market Access"],
  },
  {
    title: "Creative Economy",
    eyebrow: "Media • Fashion • Characters • Commerce",
    summary:
      "A creative ecosystem connecting fashion, animation, models, cosplay, characters, storytelling and commerce-led media platforms.",
    image: "/assets/ventures/venture-glamworld.png",
    ventures: [
      "Glamworldface",
      "Animation Reviews",
      "imSuperHero",
      "Cosplay Seller",
    ],
    points: ["Creative IP", "Talent", "Fashion", "Entertainment"],
  },
  {
    title: "Community, Impact & Market Access",
    eyebrow: "Community • Sustainability • Global Expansion",
    summary:
      "A wider growth layer supporting communities, healthcare, sustainability, assistive technology, smart infrastructure and international business expansion.",
    image: "/assets/ventures/venture-wls.png",
    ventures: ["Torch-It", "Crypto Beach", "Health Planeta", "Power Tree"],
    points: ["Impact", "Sustainability", "Global Forums", "Partnerships"],
  },
];

export default function ScaleUpMarketExpansion() {
  return (
    <section
      id="scale-up-market-expansion"
      className="relative isolate overflow-hidden bg-white px-5 py-20 text-[#03070d] sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(59,130,246,0.08),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f8fbff_50%,#ffffff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Scale-Up & Market Expansion
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Turning venture networks into market access.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Beyond individual companies, the ecosystem works as a growth engine
            for founders, technologies, creative platforms and businesses
            seeking investment support, partnerships and international reach.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {expansionBlocks.map((block, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={block.title}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:border-blue-300 hover:shadow-[0_25px_70px_rgba(37,99,235,0.14)]"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] overflow-hidden bg-slate-100 sm:min-h-[400px] lg:min-h-[460px]">
                    <img
                      src={block.image}
                      alt={`${block.title} ecosystem expansion artwork`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                      {block.eyebrow}
                    </p>

                    <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                      {block.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                      {block.summary}
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                          Connected Ventures
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {block.ventures.map((venture) => (
                            <span
                              key={venture}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700"
                            >
                              {venture}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                          Expansion Focus
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {block.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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