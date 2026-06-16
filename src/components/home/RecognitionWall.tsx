const featuredCard = {
  source: "The Economic Times",
  title: "Driving Innovation & Entrepreneurial Growth",
  text: "Featured coverage on entrepreneurship, technology and emerging business ecosystems.",
  image: "/assets/press/economic-times.jpg",
};

const cards = [
  {
    source: "The Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/timesofindia-s.jpg",
  },
  {
    source: "CNBC",
    title: "Innovation Leaders Shaping the Future",
    image: "/assets/press/cnbc.jpg",
  },
  {
    source: "TV9 Bangla",
    title: "Future of Technology & Entrepreneurship",
    image: "/assets/press/TV9-2.png",
  },
  {
    source: "Hindustan Times",
    title: "Recognition Across Business & Innovation",
    image: "/assets/press/hindusthantimes.jpg",
  },
];

export default function RecognitionWall() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pt-24 pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.16),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mb-14 flex items-center justify-center gap-5">
          <span className="h-px w-14 bg-[#0057ff]" />
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-white">
            Press Highlights
          </p>
          <span className="h-px w-14 bg-[#0057ff]" />
        </div>

        <article className="group relative mb-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]">
          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-10 lg:p-14">
              <p className="mb-5 font-serif text-[42px] font-bold text-white">
                {featuredCard.source}
              </p>

              <h2 className="max-w-[700px] text-[52px] font-bold leading-[1.05] text-white">
                {featuredCard.title}
              </h2>

              <p className="mt-7 max-w-[620px] text-lg leading-8 text-white/70">
                {featuredCard.text}
              </p>
            </div>

            <div className="overflow-hidden">
              <img
                src={featuredCard.image}
                alt={featuredCard.source}
                className="h-[400px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </article>

        <div className="grid gap-7 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.source}
              className="group flex items-center gap-7 rounded-[28px] border border-white/10 bg-[#0a0a0a] p-6 transition duration-500 hover:border-[#0057ff]/50"
            >
              <div className="flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.source}
                  className="h-[135px] w-[190px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="mb-3 font-serif text-[30px] font-bold text-white">
                  {card.source}
                </p>

                <h3 className="max-w-[430px] text-[24px] font-bold leading-tight text-white">
                  {card.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}