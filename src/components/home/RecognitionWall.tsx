import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type RecognitionCard = {
  source: string;
  title: string;
  text?: string;
  image: string;
  type?: "video" | "newspaper" | "document" | "photo";
};

const featuredCard: RecognitionCard = {
  source: "TEDx",
  title: "Ideas, Innovation & Impact Recognized Worldwide",
  text:
    "A keynote presence built around technology, entrepreneurship, innovation and the future of global business.",
  image: "/assets/press/2019/tedx.jpg",
  type: "video",
};

const premiumCards: RecognitionCard[] = [
  {
    source: "The Economic Times",
    title: "Driving Innovation & Entrepreneurial Growth",
    image: "/assets/press/Arijit-Bhattacharyya-ECONOMICS.jpg",
    type: "newspaper",
  },
  {
    source: "Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/2024/timesofindia-B.jpg",
    type: "newspaper",
  },
];

const proofCards: RecognitionCard[] = [
  {
    source: "Hindustan Times",
    title: "Startup & Entrepreneurship Coverage",
    image: "/assets/press/hindustan-times-startup.jpg",
    type: "newspaper",
  },
  {
    source: "TV9 Bangla",
    title: "Technology, Leadership & Innovation",
    image: "/assets/press/2022/TV9.jpg",
    type: "video",
  },
  {
    source: "DD Bangla",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/2019/DD-Bangla.jpg",
    type: "video",
  },
  {
    source: "Diplomatic World",
    title: "Global Business Matchmaking",
    image: "/assets/press/2021/diplomatic-world-two.jpg",
    type: "document",
  },
  {
    source: "China Blockchain",
    title: "International Technology & Blockchain Forum",
    image: "/assets/press/2020/China-blockchain.jpg",
    type: "video",
  },
  {
    source: "Josh Talks",
    title: "Ideas, Leadership & Entrepreneurial Journey",
    image: "/assets/press/Joshtalks.jpeg",
    type: "video",
  },
  {
    source: "ABP Bangla",
    title: "Regional Recognition & Public Platform Presence",
    image: "/assets/press/ABP_Arijit.jpg",
    type: "photo",
  },
  {
    source: "Anandabazar",
    title: "Bengali Press Coverage & Public Recognition",
    image: "/assets/press/2024/anandabazar-B.jpg",
    type: "newspaper",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function imageClass(type?: RecognitionCard["type"]) {
  if (type === "newspaper") {
    return "object-contain object-center bg-[#050505] p-2";
  }

  if (type === "document") {
    return "object-contain object-center bg-white p-3";
  }

  // Important: no object-cover here.
  // This prevents TEDx / TV / photo images from getting half cut.
  return "object-contain object-center bg-black";
}

function ProofCard({
  card,
  variant = "standard",
}: {
  card: RecognitionCard;
  variant?: "featured" | "premium" | "standard";
}) {
  const imageHeight =
    variant === "featured"
      ? "h-[360px] sm:h-[440px] lg:h-[500px]"
      : variant === "premium"
      ? "h-[230px] sm:h-[250px] lg:h-[270px]"
      : "h-[240px] sm:h-[270px]";

  const titleSize =
    variant === "featured"
      ? "text-[32px] sm:text-[42px] lg:text-[52px]"
      : variant === "premium"
      ? "text-[24px] sm:text-[28px]"
      : "text-[23px] sm:text-[26px]";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition duration-500 hover:border-blue-300/55 hover:shadow-[0_34px_110px_rgba(0,87,255,0.18)] sm:rounded-[28px]"
    >
      <div className={`relative overflow-hidden bg-black ${imageHeight}`}>
        <img
          src={card.image}
          alt={`${card.source} coverage of Arijit Bhattacharyya`}
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.025] ${imageClass(
            card.type
          )}`}
        />

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
          {card.type}
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#58a0ff]">
          {card.source}
        </p>

        <h3
          className={`mt-3 font-bold leading-[1.04] tracking-[-0.045em] text-white ${titleSize}`}
        >
          {card.title}
        </h3>

        {card.text && (
          <p className="mt-4 max-w-[620px] text-[14px] font-normal leading-7 text-white/68 sm:text-[15px]">
            {card.text}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function RecognitionWall() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.16),transparent_42%)]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-220px] top-[35%] h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[160px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mb-10 flex flex-col gap-7 text-center sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#58a0ff]"
            >
              Featured Recognition Wall
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[980px] text-[38px] font-extrabold leading-[0.96] tracking-[-0.065em] text-white sm:text-[52px] md:text-[72px] lg:text-[82px]"
            >
              Media, recognition and public authority.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[760px] text-[15px] font-normal leading-8 text-white/62 sm:text-[17px]"
            >
              A curated wall of media coverage, television conversations,
              international platforms and public recognition.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              to="/press-news"
              aria-label="View full press news and media coverage of Arijit Bhattacharyya"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-[14px] font-bold text-white shadow-[0_20px_55px_rgba(0,87,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
            >
              View Full Press News
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="mb-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7">
          <ProofCard card={featuredCard} variant="featured" />

          <div className="grid gap-6 lg:gap-7">
            {premiumCards.map((card) => (
              <ProofCard key={card.source} card={card} variant="premium" />
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {proofCards.map((card) => (
            <ProofCard key={card.source} card={card} variant="standard" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}