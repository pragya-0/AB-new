const rightVentures = [
  {
    title: "World Leader Summit",
    description: "Global leadership and international business ecosystem.",
    image: "/assets/ventures/venture-wls.png",
    fit: "cover",
  },
  {
    title: "Coininnovateventures",
    description: "Blockchain and Web3 innovation platform investing in future.",
    image: "/assets/ventures/venture-coininnovate.png",
    fit: "contain",
  },
  {
    title: "Entrepreneursface",
    description: "Community and founder network empowering entrepreneurs globally.",
    image: "/assets/ventures/venture-entrepreneursface.png",
    fit: "contain",
  },
  {
    title: "Virtualgamedeveloper",
    description: "Gaming and immersive technology initiatives for next-gen worlds.",
    image: "/assets/ventures/venture-virtualgame.png",
    fit: "contain",
  },
  {
    title: "Glamworldface",
    description: "Creative and media platform celebrating talent and stories.",
    image: "/assets/ventures/venture-glamworld.png",
    fit: "contain",
  },
  {
    title: "Deeptech Knowledge",
    description: "AI, deeptech and future technologies research and knowledge hub.",
    image: "/assets/ventures/venture-deeptech.png",
    fit: "contain",
  },
];

const eightMetals = {
  title: "8Metals",
  description:
    "Exploring advanced materials, symbolic geometry and future scientific thinking.",
  image: "/assets/ventures/venture-8metals.png",
  fit: "contain",
  gold: true,
};

type Venture = (typeof rightVentures)[number] | typeof eightMetals;

function VentureCard({ venture }: { venture: Venture }) {
  const isGold = "gold" in venture && venture.gold;

  return (
    <article
      className={`group overflow-hidden rounded-[22px] border bg-[#070707] transition duration-500 hover:-translate-y-1 ${
        isGold
          ? "border-[#d6a84b]/35 hover:border-[#f5c85a]/80"
          : "border-white/14 hover:border-[#0057ff]/70"
      }`}
    >
      <div className="relative h-[220px] overflow-hidden bg-black">
        <img
          src={venture.image}
          alt={venture.title}
          className={`h-full w-full transition duration-700 group-hover:scale-105 ${
            venture.fit === "contain"
              ? "object-contain p-2"
              : "object-cover"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      <div className="min-h-[165px] p-6">
        <h3 className="text-[24px] font-black leading-tight tracking-[-0.04em] text-white">
          {venture.title}
        </h3>

        <p className="mt-3 max-w-[300px] text-[15px] leading-7 text-white/72">
          {venture.description}
        </p>
      </div>
    </article>
  );
}

export default function VenturesShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 text-white md:px-10">
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#0057ff] via-[#0057ff]/28 to-transparent" />

      <div className="absolute left-[-240px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[160px]" />

      <div className="relative z-10 mx-auto grid max-w-[1420px] gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        {/* LEFT COLUMN */}
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#0066ff]">
            Ventures
          </p>

          <h2 className="max-w-[540px] text-[38px] font-black leading-[1.05] tracking-[-0.055em] md:text-[52px]">
            Ventures Built Across Technology, Media & Global Business
          </h2>

          <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-white/72">
            Over the last 29+ years, Arijit Bhattacharyya has built and
            supported ventures spanning gaming, AI, blockchain,
            entrepreneurship, media, global networking and emerging
            technologies.
          </p>

          <article className="group mt-8 overflow-hidden rounded-[24px] border border-white/14 bg-[#070707] shadow-[0_35px_100px_rgba(0,87,255,0.22)]">
            <div className="relative h-[440px] overflow-hidden bg-black">
              <img
                src="/assets/ventures/venture-virtualinfocom.png"
                alt="Virtualinfocom"
                className="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-[38px] font-black tracking-[-0.055em]">
                  Virtualinfocom
                </h3>

                <p className="mt-3 max-w-[460px] text-[15px] leading-7 text-white/78">
                  A technology incubation and digital transformation company
                  building products, platforms and IPs across emerging
                  technologies.
                </p>

                <button className="mt-7 rounded-full bg-[#0057ff] px-8 py-4 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff]">
                  Explore More Ventures →
                </button>
              </div>
            </div>
          </article>

          <div className="mt-5">
            <VentureCard venture={eightMetals} />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid gap-5 md:grid-cols-2">
          {rightVentures.map((venture) => (
            <VentureCard
              key={venture.title}
              venture={venture}
            />
          ))}
        </div>
      </div>
    </section>
  );
}