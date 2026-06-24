import { motion } from "framer-motion";

const asset = "/assets/mentoring/";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const authorityStats = [
  ["7000+", "Startups Mentored"],
  ["2100+", "Events & Sessions"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
];

const authorityCards = [
  {
    title: "Business Scalability Expert",
    text: "Advising corporates, startups, SMEs, MSMEs and manufacturing businesses on growth, risk, systems, market entry, operating margins and profitability.",
  },
  {
    title: "Technology & Digital Transformation",
    text: "Guidance across legacy-system upgrades, AI systems, AR, VR, XR, game development, animation, movies, digital media and business technology.",
  },
  {
    title: "Funding, Grants & Investment Readiness",
    text: "Helping founders structure business plans, financial models, pitch narratives, grants, private-equity readiness and investor-facing growth strategy.",
  },
  {
    title: "Go Global & Market Expansion",
    text: "Supporting new market development, international partnerships, local partner discovery, global business access and cross-border ecosystem growth.",
  },
];

const bankingCard = {
  title: "Banking & Digital Transformation",
  text: "Helped several banks modernize operations, upgrade systems, improve digital adoption and build global business ecosystems.",
};

const ecosystemProof = [
  "Google Business Group",
  "Techsauce",
  "Founder Institute",
  "Techstars",
  "IIM",
  "IIT",
  "HULT",
  "IIM Calcutta Innovation Park",
  "ICC Startup Pad",
  "National Entrepreneurs Network",
  "Business Finland",
  "ASSOCHAM",
];

const visualProof = [
  {
    image: "1.jpg",
    title: "Global Business",
    text: "Business networking and international scaleup conversations.",
  },
  {
    image: "2.jpg",
    title: "Business Matchmaking",
    text: "Direct conversations with global partners and decision makers.",
  },
  {
    image: "5.jpg",
    title: "Startup Forums",
    text: "Founder mentoring, public speaking and growth advisory.",
  },
  {
    image: "6.jpg",
    title: "Startup Summit",
    text: "Entrepreneurship, founder support and ecosystem building.",
  },
];

function AuthorityCard({ item }: { item: { title: string; text: string } }) {
  return (
    <article className="flex min-h-[172px] flex-col rounded-[24px] border border-[#d8e7ff] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 md:min-h-[190px] md:p-6">
      <div className="mb-5 h-[3px] w-14 rounded-full bg-[#0057ff]" />

      <h3 className="text-[22px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[25px]">
        {item.title}
      </h3>

      <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#475569] md:text-[16px]">
        {item.text}
      </p>
    </article>
  );
}

export default function MentoringAuthority() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] px-5 py-14 text-[#07101f] sm:px-6 md:px-10 md:py-20">
      <div className="absolute right-[-240px] top-[-240px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/10 blur-[150px]" />
      <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#58a0ff]/12 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0057ff] md:text-[12px]">
              Mentoring Authority
            </p>

            <h2 className="max-w-[840px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#07101f] md:text-[52px]">
              Scaleup guidance for founders, institutions and growth-stage
              businesses.
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="max-w-[760px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-[#334155] md:text-[18px]"
          >
            In the capacity of a mentor, Arijit has helped entrepreneurs
            incubate ideas into businesses, formulate go-to-market strategies,
            launch products, get funded and build sustainable business models.
            His expertise is hired by businesses that want to scale up, manage
            risk, reduce cost and grow beyond industry benchmarks.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <motion.article
            {...fadeUp}
            className="overflow-hidden rounded-[32px] border border-[#d8e7ff] bg-[#07101f] p-2 shadow-[0_28px_90px_rgba(0,87,255,0.12)]"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-[#03070d] sm:h-[480px] xl:h-[590px]">
              <img
                src={`${asset}Arijit-Bhattacharya.png`}
                alt="Arijit Bhattacharyya global scaleup program business matchmaking mentoring"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8bb7ff]">
                  Global Scaleup Program
                </p>

                <h3 className="mt-3 max-w-[640px] text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[38px]">
                  Business matchmaking, scaleup strategy and market access.
                </h3>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.div
              {...fadeUp}
              className="grid gap-px overflow-hidden rounded-[26px] border border-[#d8e7ff] bg-[#d8e7ff] sm:grid-cols-2 xl:grid-cols-4"
            >
              {authorityStats.map(([value, label]) => (
                <div key={label} className="bg-white p-5">
                  <p className="text-[36px] font-bold leading-none tracking-[-0.04em] text-[#0057ff] md:text-[46px]">
                    {value}
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#334155]">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2">
              {authorityCards.map((item) => (
                <AuthorityCard key={item.title} item={item} />
              ))}
            </motion.div>

            <motion.article
              {...fadeUp}
              className="overflow-hidden rounded-[26px] border border-[#0057ff]/20 bg-[#0057ff]/10 p-5 shadow-[0_18px_55px_rgba(0,87,255,0.08)] md:p-6"
            >
              <div className="grid gap-5 md:grid-cols-[0.36fr_1fr] md:items-center">
                <div>
                  <div className="mb-5 h-[3px] w-14 rounded-full bg-[#0057ff]" />
                  <h3 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[30px]">
                    {bankingCard.title}
                  </h3>
                </div>

                <p className="text-[15px] font-normal leading-[1.7] text-[#475569] md:text-[17px]">
                  {bankingCard.text}
                </p>
              </div>
            </motion.article>
          </div>
        </div>

        <motion.article
          {...fadeUp}
          className="mt-6 overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-[#07101f] p-6 text-white shadow-[0_24px_80px_rgba(0,87,255,0.12)] sm:p-7 md:rounded-[36px] md:p-8"
        >
          <div className="grid gap-7 lg:grid-cols-[0.52fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7fb8ff]">
                Ecosystem Proof
              </p>

              <h3 className="mt-5 max-w-[720px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[48px]">
                Mentoring across banks, startup networks, universities and
                global ecosystems.
              </h3>
            </div>

            <div>
              <p className="max-w-[820px] text-[16px] font-normal leading-[1.8] text-white/68 md:text-[18px]">
                Arijit helped several banks go digital and update their systems
                of operation, while helping large ecosystems grow worldwide
                through founder support, technology mentoring and go-global
                structures.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {ecosystemProof.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/68 sm:text-[10px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          {...fadeUp}
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          {visualProof.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-white p-2 shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 md:rounded-[34px]"
            >
              <div className="relative h-[360px] overflow-hidden rounded-[24px] bg-[#03070d] md:h-[460px]">
                <img
                  src={`${asset}${item.image}`}
                  alt={`Arijit Bhattacharyya mentoring authority ${item.title}`}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/90 via-black/42 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <h3 className="text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[38px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[620px] text-[15px] font-normal leading-7 text-white/72 md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
