import { motion } from "framer-motion";

import SmartImage from "../bio/SmartImage";

const asset = "/assets/mentoring/";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const authorityStats = [
  ["7100+", "Startups Supported"],
  ["2100+", "Events & Sessions"],
  ["102+", "Countries Connected"],
  ["60+", "Countries Travelled"],
];

const authorityCards = [
  {
    title: "Startup Mentor & Ecosystem Builder",
    text:
      "Helping founders validate ideas, structure businesses, prepare for fundraising, connect with ecosystems and scale sustainably.",
  },
  {
    title: "AI, DeepTech & Transformation",
    text:
      "Guidance across AI, GenAI, automation, blockchain, VR, AR, XR, legacy-system modernization and future technology adoption.",
  },
  {
    title: "Investment & Private Equity Readiness",
    text:
      "Preparing startups and growth-stage businesses for grants, angel investment, VC conversations, private equity discussions, financial modelling and investor communication.",
  },
  {
    title: "Global Expansion & Partnerships",
    text:
      "Helping businesses identify markets, strategic partnerships, ecosystem access, matchmaking and cross-border opportunities.",
  },
];

const proofGroups = [
  {
    title: "Jury, Evaluation & Advisory",
    items: [
      "Startup India Award Jury",
      "Smart India Hackathon Evaluator",
      "Asian Development Bank Consultant",
      "HULT Prize Jury",
      "Global Advisory Roles",
    ],
  },
  {
    title: "Global Accelerators & Investor Platforms",
    items: [
      "Seedstars",
      "Techstars",
      "Founder Institute USA",
      "FasterCapital Dubai",
      "IIDF",
      "BGI Portugal",
      "Naman Capital",
      "iAngels",
    ],
  },
  {
    title: "Institutions & Innovation Parks",
    items: [
      "IIM Calcutta Innovation Park",
      "IIM Ahmedabad",
      "IIM Calcutta",
      "IIM Madras",
      "IIT Kharagpur",
      "IIT Madras",
      "IIT Hyderabad",
      "IIT Mumbai",
      "NIT Bhopal",
      "PDPU",
      "BIMTECH",
      "CIIE",
    ],
  },
  {
    title: "Business & Ecosystem Networks",
    items: [
      "Business Finland",
      "Google Business Group",
      "Indian Chamber of Commerce",
      "ASSOCHAM",
      "National Entrepreneurs Network",
      "MSME West Bengal",
    ],
  },
];

const visualProof = [
  {
    image: "1.jpg",
    title: "Global Business",
    text: "Business networking and international scaleup conversations.",
    alt: "Arijit Bhattacharyya business mentoring and global startup ecosystem",
  },
  {
    image: "2.jpg",
    title: "Business Matchmaking",
    text: "Direct conversations with global partners and decision makers.",
    alt: "Arijit Bhattacharyya startup mentoring session with founders entrepreneurs and business leaders",
  },
  {
    image: "5.jpg",
    title: "Startup Forums",
    text: "Founder mentoring, public speaking and growth advisory.",
    alt: "Arijit Bhattacharyya entrepreneurship workshop and innovation ecosystem for startup founders",
  },
  {
    image: "6.jpg",
    title: "Startup Summit",
    text: "Entrepreneurship, founder support and ecosystem building.",
    alt: "Arijit Bhattacharyya mentoring founders at startup summit and business growth forum",
  },
];

function AuthorityCard({ item }: { item: { title: string; text: string } }) {
  return (
    <article className="flex min-h-[190px] flex-col rounded-[24px] border border-[#d8e7ff] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 md:p-6">
      <div className="mb-5 h-[3px] w-14 rounded-full bg-[#0057ff]" />

      <h3 className="text-[23px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[27px]">
        {item.title}
      </h3>

      <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#475569] md:text-[17px]">
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

            <h2 className="max-w-[880px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#07101f] md:text-[52px]">
              Scaleup guidance for founders, institutions and growth-stage
              businesses.
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="max-w-[820px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-[#334155] md:text-[18px]"
          >
            Arijit mentors founders, startups, SMEs, MSMEs, enterprises and
            innovation ecosystems on business scalability, fundraising,
            international expansion, technology adoption and leadership. His work
            spans mentor, jury member, evaluator, advisor and ecosystem-builder
            roles across accelerators, incubators, universities and investor
            platforms.
          </motion.p>
        </div>

        <motion.article
          {...fadeUp}
          className="mt-8 rounded-[28px] border border-[#0057ff]/20 bg-white p-5 shadow-[0_18px_55px_rgba(0,87,255,0.08)] md:rounded-[34px] md:p-7"
        >
          <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0057ff]">
                Banking & Enterprise Advisory
              </p>

              <h3 className="mt-4 max-w-[620px] text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[42px]">
                Digital transformation beyond startup mentoring.
              </h3>
            </div>

            <p className="max-w-[920px] text-[16px] font-normal leading-[1.85] text-[#475569] md:text-[18px]">
              Over the years, Arijit has advised banks, financial institutions,
              SMEs, MSMEs and growth-stage businesses on digital transformation,
              modernization of legacy systems, technology adoption, ecosystem
              development, operating-margin improvement and business
              scalability.
            </p>
          </div>
        </motion.article>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <motion.article
            {...fadeUp}
            className="overflow-hidden rounded-[32px] border border-[#d8e7ff] bg-[#07101f] p-2 shadow-[0_28px_90px_rgba(0,87,255,0.12)]"
          >
            <div className="relative h-[360px] overflow-hidden rounded-[26px] bg-[#03070d] sm:h-[420px] xl:h-[500px]">
              <SmartImage
                src={`${asset}Arijit-Bhattacharya.png`}
                alt="Arijit Bhattacharyya global scaleup program business matchmaking startup mentoring and market access advisory"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8bb7ff]">
                  Global Scaleup Program
                </p>

                <h3 className="mt-3 max-w-[660px] text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[38px]">
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
          </div>
        </div>

        <motion.article
          {...fadeUp}
          className="mt-7 overflow-hidden rounded-[32px] border border-[#d8e7ff] bg-[#07101f] p-6 text-white shadow-[0_24px_80px_rgba(0,87,255,0.12)] sm:p-7 md:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7fb8ff]">
                Ecosystem Proof
              </p>

              <h3 className="mt-5 max-w-[620px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white md:text-[44px]">
                Mentoring across accelerators, universities, startup networks
                and global platforms.
              </h3>

              <p className="mt-6 max-w-[620px] text-[16px] font-normal leading-[1.8] text-white/68 md:text-[18px]">
                Visible proof is grouped by role and ecosystem, so the section
                stays credible without becoming a crowded wall of logos or
                keywords.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {proofGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <h4 className="text-[20px] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[23px]">
                    {group.title}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/72 sm:text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div {...fadeUp} className="mt-8 grid gap-6 lg:grid-cols-2">
          {visualProof.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-white p-2 shadow-[0_22px_70px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 md:rounded-[34px]"
            >
              <div className="relative h-[360px] overflow-hidden rounded-[24px] bg-[#03070d] md:h-[460px]">
                <SmartImage
                  src={`${asset}${item.image}`}
                  alt={item.alt}
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