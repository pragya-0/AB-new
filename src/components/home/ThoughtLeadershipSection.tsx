import {
  featuredThoughtArticle,
  sideThoughtArticles,
  thoughtArticleCards,
} from "../../data/thoughtLeadership";

type Article =
  | typeof featuredThoughtArticle
  | (typeof sideThoughtArticles)[number]
  | (typeof thoughtArticleCards)[number];

function ExpertiseCard({
  article,
  variant = "small",
}: {
  article: Article;
  variant?: "large" | "small";
}) {
  const isAI = article.title === "AI & Future Entrepreneurship";
  const isGaming = article.title === "Gaming & Storytelling";
  const isDeepTech = article.title === "DeepTech Innovation";

  return (
    <article className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_45px_120px_rgba(0,87,255,0.14)]">
      <div
        className={`relative overflow-hidden ${
          variant === "large" ? "h-[340px]" : "h-[300px]"
        } ${isGaming ? "bg-black" : "bg-white"}`}
      >
        <img
          src={article.image}
          alt={article.title}
       className={`h-full w-full transition duration-700 group-hover:scale-105 ${
  isAI
    ? "object-cover object-[center_15%]"
    : isGaming
    ? "object-contain object-center"
    : isDeepTech
    ? "object-contain object-center p-4"
    : "object-cover object-center"
}`}
        />
      </div>

      <div className={variant === "large" ? "p-6" : "p-5"}>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0057ff]">
          {article.category}
        </p>

        <h3
          className={`mt-3 font-black leading-tight tracking-[-0.045em] text-black ${
            variant === "large" ? "text-[29px] md:text-[32px]" : "text-[22px]"
          }`}
        >
          {article.title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-black/60">
          {article.description}
        </p>
      </div>
    </article>
  );
}

export default function ThoughtLeadershipSection() {
  const gamingArticle = sideThoughtArticles[0];
  const globalArticle = sideThoughtArticles[1];

  const lowerCards = [globalArticle, ...thoughtArticleCards];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8faff_46%,#eaf2ff_100%)] px-5 py-16 md:px-10">
      <div className="absolute right-[-250px] top-[80px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/10 blur-[180px]" />
      <div className="absolute left-[-240px] bottom-[-180px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-8 max-w-[680px]">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#0057ff]">
            Thought Leadership
          </p>

          <h2 className="text-[38px] font-black leading-[1.04] tracking-[-0.06em] text-black md:text-[54px]">
            Ideas Shaping Technology, Entrepreneurship and Global Innovation
          </h2>

          <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-black/60">
            Curated expertise across AI, gaming, global business, startups,
            blockchain and deep technology ecosystems.
          </p>

          <button className="mt-8 w-fit rounded-full bg-[#0057ff] px-9 py-4 text-sm font-black text-white shadow-[0_20px_55px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff]">
            Explore Expertise →
          </button>
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
      </div>
    </section>
  );
}