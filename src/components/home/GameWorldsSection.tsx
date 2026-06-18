import { gameWorldCards, gameWorldStats } from "../../data/gameWorlds";

const timeline = [
  "2001 Racing Game",
  "2006 VR Era",
  "2007 RPG Game",
  "43+ Superheroes",
  "56 Comics",
  "Gen AI Worlds",
];

export default function GameWorldsSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050b] px-5 py-20 text-white md:px-10">
      <div className="absolute left-[-260px] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/16 blur-[180px]" />
      <div className="absolute right-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[170px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.12),transparent_44%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#4d8cff]">
            IP Characters & Game Worlds
          </p>

          <h2 className="mx-auto max-w-[900px] text-[48px] font-black leading-tight tracking-[-0.06em] text-white lg:text-[60px]">
            Game Worlds & Character Universes
          </h2>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {gameWorldStats.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-[#4d8cff]/30 bg-[#0057ff]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#8bb7ff]"
              >
                {item.value} {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {gameWorldCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_26px_90px_rgba(0,87,255,0.12)] transition duration-500 hover:-translate-y-2 hover:border-[#4d8cff]/45 hover:bg-white/[0.07] hover:shadow-[0_38px_120px_rgba(0,87,255,0.22)] ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
       <div className="relative h-[210px] overflow-hidden bg-black">
  <img
    src={card.image}
    alt={card.title}
    className="h-full w-full object-cover object-center opacity-88 transition duration-[6500ms] group-hover:scale-[1.06]"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

 
</div>

                <div className="p-6">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#4d8cff]">
                    {card.label}
                  </p>

                  <h3 className="text-[26px] font-black leading-[1.02] tracking-[-0.055em] text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-white/62">
                    {card.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-9 rounded-[30px] border border-white/10 bg-white/[0.045] px-6 py-7 shadow-[0_24px_90px_rgba(0,87,255,0.11)] backdrop-blur-xl">
          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {timeline.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/10 bg-black/24 px-5 py-5 text-center"
              >
                <p className="text-[13px] font-black uppercase tracking-[0.2em] text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/creative"
            className="inline-flex rounded-full border border-[#4d8cff]/35 bg-[#0057ff]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#8bb7ff] transition duration-300 hover:-translate-y-1 hover:bg-[#0057ff] hover:text-white"
          >
            Explore IP & Game Worlds →
          </a>
        </div>
      </div>
    </section>
  );
}