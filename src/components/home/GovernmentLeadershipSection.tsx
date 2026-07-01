import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const leadershipCards = [
  {
    eyebrow: "Africa Investment",
    title: "Ghana Investor Summit with Vice President",
    description:
      "Africa-focused investor and business summit platform with the Vice President, connecting entrepreneurship, global capital and innovation ecosystems.",
    image: "/assets/speaking/ghana.jpeg",
  },
  {
    eyebrow: "Global Diplomacy",
    title: "Ambassador of Liberia",
    description:
      "International collaboration with the Ambassador of Liberia around youth development, entrepreneurship, diplomacy and global partnerships.",
    image: "/assets/speaking/Liberia.png",
  },
  {
    eyebrow: "Education Leadership",
    title: "Education Minister of Nagaland",
    description:
      "Engagement around education, entrepreneurship and innovation-led development with state-level leadership.",
    image: "/assets/speaking/Nagaland.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function LeadershipImage({
  src,
  alt,
  large = false,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-black ${
        large
          ? "min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]"
          : "h-[270px] sm:h-[310px]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain object-center p-2 opacity-95 transition duration-[6500ms] group-hover:scale-[1.035]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
    </div>
  );
}

export default function GovernmentLeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050b] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/16 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/10 blur-[170px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff] sm:text-sm"
            >
              Policy & Institutional Leadership
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[900px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-white sm:text-[48px] lg:text-[64px]"
            >
              Influencing Innovation, Education & Global Ecosystems
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-[620px] text-[16px] font-normal leading-8 text-white/62 sm:text-[18px] lg:justify-self-end"
          >
            Collaborating with government-backed initiatives, educational
            leaders, investors and global innovation bodies to accelerate
            entrepreneurship, deep technology and economic development.
          </motion.p>
        </div>

        <motion.article
          variants={fadeUp}
          whileHover={{ y: -7 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="group mb-8 grid overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,87,255,0.14)] backdrop-blur transition duration-500 hover:border-[#4d8cff]/35 hover:bg-white/[0.065] hover:shadow-[0_45px_140px_rgba(0,87,255,0.22)] sm:rounded-[34px] lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4d8cff] sm:text-sm">
              National Innovation
            </p>

            <h3 className="max-w-[760px] text-[32px] font-extrabold leading-[1.03] tracking-[-0.055em] text-white sm:text-[42px] md:text-[52px]">
              Startup India Innovation Ecosystem
            </h3>

            <p className="mt-6 max-w-[620px] text-[16px] font-normal leading-8 text-white/64 sm:text-[18px]">
              Arijit Bhattacharyya as National Startup India Award Jury Member run by Government of India — helping Indian startups go global.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Startup India", "Innovation Week", "Policy Ecosystem"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8bb7ff]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <LeadershipImage
            src="/assets/speaking/15thJan-2022-goyel.jpg.jpeg"
            alt="Arijit Bhattacharyya at Startup India Innovation Ecosystem event"
            large
          />
        </motion.article>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {leadershipCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -7 }}
              transition={{ type: "spring", stiffness: 230, damping: 22 }}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,87,255,0.11)] transition duration-500 hover:border-[#4d8cff]/35 hover:bg-white/[0.07] hover:shadow-[0_38px_110px_rgba(0,87,255,0.22)] sm:rounded-[30px]"
            >
              <LeadershipImage
                src={card.image}
                alt={`${card.title} with Arijit Bhattacharyya`}
              />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4d8cff] sm:text-sm">
                  {card.eyebrow}
                </p>

                <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-[30px] md:text-[34px]">
                  {card.title}
                </h3>

                <p className="mt-4 flex-1 text-[15px] font-normal leading-7 text-white/62">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-14 text-center sm:mt-16">
          <Link
            to="/speaking"
            aria-label="Explore Arijit Bhattacharyya policy and institutional speaking work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#4d8cff]/25 bg-white/[0.06] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8bb7ff] shadow-[0_20px_60px_rgba(0,87,255,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto sm:px-10 sm:py-5 sm:tracking-[0.25em]"
          >
            Explore Speaking Work
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
