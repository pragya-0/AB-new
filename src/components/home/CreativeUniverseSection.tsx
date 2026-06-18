const genAICreations = [
  {
    title: "KARNA",
    universe: "Mythological Universe",
    image: "/assets/gallery/karna-poster-vertical.png",
  },
  {
    title: "NADA",
    universe: "Fantasy Universe",
    image: "/assets/gallery/nada-poster-vertical.png",
  },
  {
    title: "BROKEN",
    universe: "Sci-Fi Universe",
    image: "/assets/gallery/broken-poster-vertical.png",
  },
  {
    title: "ASHWATHAMA",
    universe: "Epic Saga",
    image: "/assets/gallery/ashwathama-poster-vertical.png",
  },
  {
    title: "TIME TRAVELLER",
    universe: "Multiverse Adventure",
    image: "/assets/gallery/time-traveller-poster-vertical.png",
  },
];

export default function CreativeUniverseSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_48%,#ffffff_100%)] px-5 py-24 text-black md:px-10">
      <div className="absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/12 blur-[180px]" />
      <div className="absolute right-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-cyan-300/14 blur-[170px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,87,255,0.10),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#0057ff]">
              Gen AI Creations
            </p>

            <h2 className="max-w-[720px] text-5xl font-black leading-tight tracking-[-0.06em] text-black lg:text-6xl">
              Stories Beyond Reality
            </h2>
          </div>

          <p className="max-w-[620px] text-lg leading-8 text-black/62 lg:justify-self-end">
            Mythology, science fiction and cinematic imagination brought
            together through AI-led storytelling, character design and future
            creative universes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {genAICreations.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[30px] border border-[#0057ff]/15 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#edf4ff_100%)] shadow-[0_24px_90px_rgba(0,87,255,0.12)] transition duration-500 hover:-translate-y-3 hover:border-[#0057ff]/55 hover:shadow-[0_0_80px_rgba(0,87,255,0.26)] ${
                index === 2 ? "lg:-mt-8" : ""
              }`}
            >
              <div className="relative h-[520px] overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-[22px] object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-3 rounded-[22px] bg-gradient-to-t from-black/72 via-black/8 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-7 transition duration-500 group-hover:translate-y-0">
                  <p className="mb-3 text-[12px] font-black uppercase tracking-[0.3em] text-[#66a3ff]">
                    {item.universe}
                  </p>

                  <h3 className="text-[34px] font-black leading-[0.95] tracking-[-0.06em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/creative"
            className="inline-flex items-center justify-center rounded-full bg-[#0057ff] px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_22px_60px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff]"
          >
            Explore More Gen AI Films →
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Mythology",
            "Fantasy",
            "Science Fiction",
            "AI Cinema",
            "Story Worlds",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#0057ff]/15 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#0057ff] shadow-[0_16px_45px_rgba(0,87,255,0.10)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}