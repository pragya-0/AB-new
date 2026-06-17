const timeline = [
  {
    year: "1998",
    title: "Virtualinfocom",
    text: "The journey began with technology, software and digital innovation.",
    image: "/assets/ventures/timeline-1998-virtualinfocom.png",
  },
  {
    year: "2006",
    title: "VR Initiatives",
    text: "Exploring virtual reality, interactive media and immersive experiences.",
    image: "/assets/ventures/timeline-2006-vr.png",
  },
  {
    year: "2010",
    title: "Community Building",
    text: "Building entrepreneur communities and founder networks.",
    image: "/assets/ventures/timeline-2010-community.png",
  },
  {
    year: "2016",
    title: "Blockchain Ecosystem",
    text: "Investing in blockchain, Web3 and decentralized future technologies.",
    image: "/assets/ventures/timeline-2016-blockchain.png",
  },
  {
    year: "2020",
    title: "Global Business Matchmaking",
    text: "Connecting businesses, investors and entrepreneurs across 100+ countries.",
    image: "/assets/ventures/timeline-2020-global-business.png",
  },
  {
    year: "2025",
    title: "Generative AI Films",
    text: "Pioneering Gen AI storytelling, films and creative universes.",
    image: "/assets/ventures/timeline-2025-ai-films.png",
  },
  {
    year: "2026",
    title: "8Metals",
    text: "Exploring advanced materials, symbolic geometry and future scientific thinking.",
    image: "/assets/ventures/timeline-2026-8metals.png",
    gold: true,
  },
];

export default function VenturesTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] px-5 pt-24 pb-28 md:px-10">
      <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />
      <div className="absolute left-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div>
          <p className="mb-6 text-sm font-black uppercase tracking-[0.32em] text-[#0057ff]">
            Companies & Ecosystem
          </p>

          <h2 className="max-w-[900px] text-[42px] font-black leading-[1.06] tracking-[-0.055em] text-black md:text-[58px]">
            Creating Impact Across Industries and Continents
          </h2>
        </div>

        <div className="relative mt-14 overflow-x-auto pb-2">
          <div className="relative min-w-[1340px]">
            <div className="absolute left-[90px] right-[90px] top-[214px] h-px bg-black/12" />

            <div className="grid grid-cols-7 gap-8">
              {timeline.map((item) => {
                const isGold = "gold" in item && item.gold;

                return (
                  <article key={item.year} className="relative">
                    <div
                      className={`relative mx-auto h-[176px] w-[176px] overflow-hidden rounded-full border-[8px] border-white bg-[#07111f] shadow-[0_20px_55px_rgba(15,23,42,0.16)] ${
                        isGold
                          ? "shadow-[0_22px_70px_rgba(217,167,58,0.22)]"
                          : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-95"
                      />

                      <div
                        className={`absolute inset-0 ${
                          isGold
                            ? "bg-gradient-to-br from-[#d9a73a]/12 via-transparent to-black/32"
                            : "bg-gradient-to-br from-[#0057ff]/12 via-transparent to-black/32"
                        }`}
                      />
                    </div>

                    <div
                      className={`relative z-10 mx-auto mt-6 h-4 w-4 rounded-full ring-8 ${
                        isGold
                          ? "bg-[#d9a73a] ring-[#d9a73a]/15"
                          : "bg-[#0057ff] ring-[#0057ff]/10"
                      }`}
                    />

                    <div className="mt-10">
                      <p
                        className={`text-[28px] font-black tracking-[-0.04em] ${
                          isGold ? "text-[#b88516]" : "text-[#0057ff]"
                        }`}
                      >
                        {item.year}
                      </p>

                      <h3 className="mt-3 text-[21px] font-black leading-tight tracking-[-0.035em] text-black">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[16px] leading-7 text-black/62">
                        {item.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}