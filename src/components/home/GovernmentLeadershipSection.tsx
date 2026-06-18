const leadershipCards = [
  {
    eyebrow: "Africa Investment",
    title: "Ghana Investor Summit",
    description:
      "Africa-focused investor and business summit platform connecting entrepreneurship, global capital and innovation ecosystems.",
    image: "/assets/speaking/ghana.jpg",
  },
  {
    eyebrow: "Global Diplomacy",
    title: "Liberia Leadership Meeting",
    description:
      "International collaboration around youth development, entrepreneurship, diplomacy and global partnerships.",
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

export default function GovernmentLeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050b] px-5 py-24 text-white md:px-10">
      <div className="absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/16 blur-[180px]" />
      <div className="absolute right-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#4d8cff]">
              Policy & Institutional Leadership
            </p>

            <h2 className="text-[42px] font-black leading-[1.02] tracking-[-0.06em] text-white md:text-[64px]">
              Influencing Innovation, Education & Global Ecosystems
            </h2>
          </div>

          <p className="max-w-[620px] text-[17px] leading-8 text-white/62 lg:justify-self-end">
            Collaborating with government-backed initiatives, educational
            leaders, investors and global innovation bodies to accelerate
            entrepreneurship, deep technology and economic development.
          </p>
        </div>

        <article className="mb-8 grid overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] shadow-[0_30px_110px_rgba(0,87,255,0.14)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#4d8cff]">
              National Innovation
            </p>

            <h3 className="text-[36px] font-black leading-[1.02] tracking-[-0.055em] text-white md:text-[52px]">
              Union Government Innovation Ecosystem
            </h3>

            <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-white/64">
              Participation in national innovation and startup ecosystem
              conversations connected with India’s technology, entrepreneurship
              and Startup India growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Startup India", "Innovation Week", "Policy Ecosystem"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#8bb7ff]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-black lg:min-h-[520px]">
            <img
              src="/assets/speaking/15thJan-2022-goyel.jpg.jpeg"
              alt="Union Government Innovation Ecosystem"
              className="h-full w-full object-cover object-center opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </article>

        <div className="grid gap-8 lg:grid-cols-3">
          {leadershipCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,87,255,0.11)] transition duration-500 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-[0_38px_110px_rgba(0,87,255,0.22)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover object-center opacity-95 transition duration-[6500ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-black/5 to-transparent" />
              </div>

              <div className="p-7">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#4d8cff]">
                  {card.eyebrow}
                </p>

                <h3 className="text-[28px] font-black leading-[1.04] tracking-[-0.05em] text-white md:text-[34px]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-white/62">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}