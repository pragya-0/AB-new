import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type RecognitionCard = {
  source: string;
  title: string;
  text?: string;
  image: string;
  imageMode?: "darkContain" | "lightContain";
};

const featuredCard: RecognitionCard = {
  source: "TEDx",
  title: "Ideas, Innovation & Impact Recognized Worldwide",
  text:
    "A keynote presence built around technology, entrepreneurship, innovation and the future of global business.",
  image: "/assets/speaking/tedx.jpg.jpeg",
  imageMode: "darkContain",
};

const premiumCards: RecognitionCard[] = [
  {
    source: "The Economic Times",
    title: "Driving Innovation & Entrepreneurial Growth",
    image: "/assets/press/Arijit-Bhattacharyya-ECONOMICS.jpg",
    imageMode: "darkContain",
  },
  {
    source: "Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/2024/timesofindia-B.jpg",
    imageMode: "darkContain",
  },
];

const proofCards: RecognitionCard[] = [
  {
    source: "Hindustan Times",
    title: "Startup & Entrepreneurship Coverage",
    image: "/assets/press/hindustan-times-startup.jpg",
    imageMode: "darkContain",
  },
  {
    source: "TV9 Bangla",
    title: "Technology, Leadership & Innovation",
    image: "/assets/press/2022/TV9.jpg",
    imageMode: "darkContain",
  },
  {
    source: "DD Bangla",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/2019/DD-Bangla.jpg",
    imageMode: "darkContain",
  },
  {
    source: "Diplomatic World",
    title: "Global Business Matchmaking",
    image: "/assets/press/2021/diplomatic-world-two.jpg",
    imageMode: "lightContain",
  },
  {
    source: "China Blockchain",
    title: "International Technology & Blockchain Forum",
    image: "/assets/press/2020/China-blockchain.jpg",
    imageMode: "darkContain",
  },
  {
    source: "Josh Talks",
    title: "Ideas, Leadership & Entrepreneurial Journey",
    image: "/assets/press/Joshtalks.jpeg",
    imageMode: "darkContain",
  },
  {
    source: "ABP Bangla",
    title: "Regional Media Recognition & Public Visibility",
    image: "/assets/press/ABP_Arijit.jpg",
    imageMode: "darkContain",
  },
  {
    source: "Anandabazar",
    title: "Bengal Media Coverage & Public Recognition",
    image: "/assets/press/2024/anandabazar-B.jpg",
    imageMode: "darkContain",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function imageClass(imageMode?: RecognitionCard["imageMode"]) {
  if (imageMode === "lightContain") {
    return "object-contain object-center bg-white p-3";
  }

  return "object-contain object-center bg-black p-2";
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
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition duration-500 hover:border-blue-300/55 hover:shadow-[0_34px_110px_rgba(0,87,255,0.18)] sm:rounded-[28px]"
    >
      <div className={`relative overflow-hidden bg-black ${imageHeight}`}>
        <img
          src={card.image}
          alt={`${card.source} coverage of Arijit Bhattacharyya`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.015] ${imageClass(
            card.imageMode
          )}`}
        />
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-[14px] font-bold text-white shadow-[0_20px_55px_rgba(0,87,255,0.28)] transition duration-300 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
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
