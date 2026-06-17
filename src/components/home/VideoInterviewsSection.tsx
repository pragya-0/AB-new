const ventures = [
  {
    title: "World Leader Summit",
    description: "A global leadership and business ecosystem connecting founders, investors, innovators and decision-makers.",
    image: "/assets/ventures/final-new.png",
  },
  {
    title: "DeepTech Knowledge",
    description: "A knowledge platform focused on AI, deeptech, cybersecurity and future technology education.",
    image: "/assets/ventures/DeepTeckKnowledge.jpg.jpeg",
  },
  {
    title: "GlamWorldFace",
    description: "A fashion, beauty, talent and media-facing platform built around creativity and global exposure.",
    image: "/assets/ventures/glam-world.png",
  },
  {
    title: "Animation & Gaming",
    description: "Interactive entertainment, animation, games and immersive storytelling across digital worlds.",
    image: "/assets/ventures/animgaming.png",
  },
  {
    title: "Cyber Security",
    description: "Technology initiatives connected to cybersecurity, digital trust and future-ready infrastructure.",
    image: "/assets/ventures/Cyber-Security.png",
  },
  {
    title: "Sports Zone",
    description: "Sports, youth engagement and community-led initiatives built around participation and impact.",
    image: "/assets/ventures/sports-zone.png",
  },
];

export default function VenturesShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white">
      <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-[#0057ff]/75 via-[#0057ff]/18 to-transparent" />
      <div className="absolute left-[-180px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[160px]" />
      <div className="absolute right-[-180px] bottom-[10%] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[160px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#1b5cff]">
              Ventures
            </p>

            <h2 className="max-w-[650px] text-[42px] font-black leading-[1.05] tracking-[-0.045em] md:text-[56px]">
              Ventures Built Across Technology, Media & Global Business
            </h2>

            <p className="mt-8 max-w-[560px] text-[18px] leading-8 text-white/72">
              Over the last 29+ years, Arijit Bhattacharyya has built and
              supported ventures spanning gaming, AI, cybersecurity,
              entrepreneurship, media, entertainment, global networking and
              emerging technologies.
            </p>
          </div>

          <article className="group mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-[#090909] shadow-[0_40px_120px_rgba(0,87,255,0.18)]">
            <div className="relative h-[390px] overflow-hidden">
              <img
                src="/assets/ventures/logo.jpg.jpeg"
                alt="Virtualinfocom"
                className="h-full w-full object-contain bg-white p-10 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-[38px] font-black tracking-[-0.04em]">
                  Virtualinfocom
                </h3>

                <p className="mt-4 max-w-[500px] text-[17px] leading-8 text-white/82">
                  A technology incubation and digital transformation company
                  building products, platforms and IPs across games, animation,
                  AI, VR and emerging technologies.
                </p>

                <button className="mt-8 rounded-full bg-[#0057ff] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b5cff] hover:shadow-[0_20px_50px_rgba(0,87,255,0.35)]">
                  Explore Venture →
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((venture) => (
            <article
              key={venture.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] transition duration-500 hover:-translate-y-1 hover:border-[#0057ff]/60 hover:shadow-[0_35px_90px_rgba(0,87,255,0.18)]"
            >
              <div className="relative h-[220px] overflow-hidden bg-white">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-[205px] flex-col justify-between p-7">
                <div>
                  <h3 className="text-[24px] font-bold tracking-[-0.035em]">
                    {venture.title}
                  </h3>

                  <p className="mt-4 max-w-[320px] text-[16px] leading-7 text-white/70">
                    {venture.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    aria-label={`Explore ${venture.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-xl text-white transition duration-300 group-hover:border-[#0057ff] group-hover:bg-[#0057ff]"
                  >
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}