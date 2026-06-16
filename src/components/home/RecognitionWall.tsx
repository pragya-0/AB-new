const featuredCard = {
  source: "TEDx",
  title: "Ideas, Innovation & Impact Recognized Worldwide",
  text: "A keynote presence built around technology, entrepreneurship, innovation and the future of global business.",
  image: "/assets/press/tedx.jpg",
};

const mediumCards = [
  {
    source: "The Economic Times",
    title: "Driving Innovation & Entrepreneurial Growth",
    image: "/assets/press/Arijit-Bhattacharyya-ECONOMICS.jpg",
    type: "newspaper",
  },
  {
    source: "CNBC TV18",
    title: "Innovation Leaders Shaping the Future",
    image: "/assets/press/cnbc.jpg",
    type: "video",
  },
];

const smallCards = [
  {
    source: "DD Bangla",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/DD-Bangla.jpg",
    type: "video",
  },
  {
    source: "Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/timesofindia-s.jpg",
    type: "newspaper",
  },
  {
    source: "TV9 Bangla",
    title: "Technology, Leadership & Innovation",
    image: "/assets/press/TV9.jpg",
    type: "video",
  },
  {
    source: "Diplomatic World",
    title: "Global Business Matchmaking",
    image: "/assets/press/diplomatic-world-two.jpg",
    type: "document",
  },
  {
    source: "China Blockchain",
    title: "International Technology & Blockchain Forum",
    image: "/assets/press/China-blockchain.jpg",
    type: "video",
  },
  {
    source: "Josh Talks",
    title: "Ideas, Leadership & Entrepreneurial Journey",
    image: "/assets/press/Joshtalks.jpeg",
    type: "video",
  },
];

export default function RecognitionWall() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.14),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-center justify-center gap-5">
          <span className="h-px w-14 bg-[#0057ff]" />
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-white">
            Featured Recognition Wall
          </p>
          <span className="h-px w-14 bg-[#0057ff]" />
        </div>

       {/* Featured TEDx - compact split layout */}
<article className="mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-[#080808] shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
  <div className="grid min-h-[460px] lg:grid-cols-[0.38fr_0.62fr]">
    <div className="relative z-10 flex flex-col justify-center bg-gradient-to-r from-black via-[#080808] to-black/70 p-8 lg:p-10">
              <p className="mb-5 text-[18px] font-black uppercase tracking-[0.35em] text-[#ff2b2b]">
                {featuredCard.source}
              </p>

              <h2 className="max-w-[620px] text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-white lg:text-[54px]">
                {featuredCard.title}
              </h2>

              <p className="mt-6 max-w-[540px] text-[16px] leading-8 text-white/78">
                {featuredCard.text}
              </p>
            </div>

            <div className="relative min-h-[460px] bg-black">
  <img
    src={featuredCard.image}
    alt={featuredCard.source}
    className="absolute inset-0 h-full w-full object-contain object-bottom scale-[0.86] opacity-100 brightness-[1.08]"
  />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
            </div>
          </div>
        </article>

        {/* Premium row */}
        <div className="mb-8 grid gap-7 lg:grid-cols-2">
          {mediumCards.map((card) => {
            const isNewspaper = card.type === "newspaper";
            const isVideo = card.type === "video";

            return (
              <article
                key={card.source}
                className="group relative min-h-[340px] overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0a0a]"
              >
                <img
                  src={card.image}
                  alt={card.source}
                  className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.03] ${
                    isNewspaper
                      ? "object-contain object-bottom bg-[#111] opacity-100 brightness-[1.16]"
                      : isVideo
                      ? "object-contain object-center bg-black p-2 opacity-100 brightness-[1.12]"
                      : "object-cover object-center opacity-100 brightness-[1.1]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/18 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full max-w-[540px] flex-col justify-end p-7">
                  <p className="mb-3 font-serif text-[28px] font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
                    {card.source}
                  </p>

                  <h3 className="text-[26px] font-black leading-tight tracking-[-0.03em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
                    {card.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        {/* Supporting proof grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {smallCards.map((card) => {
            const isNewspaper = card.type === "newspaper";
            const isDocument = card.type === "document";
            const isJoshTalks = card.source === "Josh Talks";

            return (
              <article
                key={card.source}
                className="group relative min-h-[310px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a]"
              >
                <img
                  src={card.image}
                  alt={card.source}
                  className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.03] ${
                    isJoshTalks
                      ? "object-contain object-center bg-black p-3 opacity-100 brightness-[1.35]"
                      : isDocument
                      ? "object-contain object-center bg-white opacity-100 brightness-[1.1]"
                      : isNewspaper
                      ? "object-contain object-bottom bg-[#111] opacity-100 brightness-[1.16]"
                      : "object-cover object-center opacity-100 brightness-[1.12]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/64 via-black/16 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <p className="mb-3 font-serif text-[22px] font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
                    {card.source}
                  </p>

                  <h3 className="max-w-[350px] text-[19px] font-bold leading-tight text-white/95 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
                    {card.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}