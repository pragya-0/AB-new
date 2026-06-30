import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  featuredThoughtArticle,
  sideThoughtArticles,
  thoughtArticleCards,
} from "../../data/thoughtLeadership";

type Article =
  | typeof featuredThoughtArticle
  | (typeof sideThoughtArticles)[number]
  | (typeof thoughtArticleCards)[number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function getImageClass(article: Article) {
  const isAI = article.title === "AI & Future Entrepreneurship";
  const isGaming = article.title === "Gaming & Storytelling";
  const isDeepTech = article.title === "DeepTech Innovation";

  if (isAI) return "object-cover object-[center_15%]";
  if (isGaming) return "object-contain object-center bg-black p-3";
  if (isDeepTech) return "object-contain object-center bg-white p-4";

  return "object-cover object-center";
}

function ExpertiseCard({
  article,
  variant = "small",
}: {
  article: Article;
  variant?: "large" | "small";
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:border-[#0057ff]/25 hover:shadow-[0_45px_120px_rgba(0,87,255,0.14)] sm:rounded-[28px]"
    >
      <div
        className={`relative overflow-hidden ${
          variant === "large"
            ? "h-[260px] sm:h-[320px] lg:h-[340px]"
            : "h-[240px] sm:h-[280px] lg:h-[300px]"
        }`}
      >
        <img
          src={article.image}
          alt={`${article.title} thought leadership by Arijit Bhattacharyya`}
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${getImageClass(
            article
          )}`}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-transparent" />
      </div>

      <div className={variant === "large" ? "p-6 sm:p-7" : "p-5 sm:p-6"}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0057ff]">
          {article.category}
        </p>

        <h3
          className={`mt-3 font-bold leading-tight tracking-[-0.045em] text-black ${
            variant === "large"
              ? "text-[27px] sm:text-[31px] md:text-[32px]"
              : "text-[22px] sm:text-[24px]"
          }`}
        >
          {article.title}
        </h3>

        <p className="mt-3 text-[15px] font-normal leading-7 text-black/60">
          {article.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function ThoughtLeadershipSection() {
  const gamingArticle = sideThoughtArticles[0];
  const globalArticle = sideThoughtArticles[1];
  const lowerCards = [globalArticle, ...thoughtArticleCards];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8faff_46%,#eaf2ff_100%)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute right-[-250px] top-[80px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-240px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/10 blur-[160px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mb-8 max-w-[760px] sm:mb-10">
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0057ff] sm:text-sm"
          >
            Thought Leadership
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-black sm:text-[44px] md:text-[54px]"
          >
            Ideas Shaping Technology, Entrepreneurship and Global Innovation
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[650px] text-[16px] font-normal leading-8 text-black/60 sm:text-[17px]"
          >
            Curated expertise across AI, gaming, global business, startups,
            blockchain and deep technology ecosystems.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="/technology"
              aria-label="Explore Arijit Bhattacharyya technology expertise"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-9 py-4 text-sm font-bold text-white shadow-[0_20px_55px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-fit"
            >
              Explore Expertise
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ExpertiseCard article={featuredThoughtArticle} variant="large" />
          <ExpertiseCard article={gamingArticle} variant="large" />
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {lowerCards.map((article) => (
            <ExpertiseCard key={article.title} article={article} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
