import {
  Rocket,
  Brain,
  Gamepad2,
  Shield,
  UsersRound,
  Handshake,
} from "lucide-react";

const expertise = [
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Helping founders scale ideas into global businesses.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Exploring the next decade of AI and Gen AI.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Metaverse",
    description: "Producing games, VR and immersive experiences.",
  },
  {
    icon: Shield,
    title: "Blockchain",
    description: "Building future-ready ecosystems and Web3 initiatives.",
  },
  {
    icon: UsersRound,
    title: "Leadership",
    description: "Sharing founder lessons and innovation frameworks.",
  },
  {
    icon: Handshake,
    title: "Global Business Matchmaking",
    description: "Connecting entrepreneurs across 100+ countries.",
  },
];

export default function StatsExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.22),transparent_35%)]" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-[#0057ff]/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1740px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[15px] font-bold uppercase tracking-[0.4em] text-[#1b5cff]">
              Expertise
            </p>

            <h2 className="max-w-[760px] text-[52px] font-bold leading-[1.08] tracking-[-0.04em] text-white">
              Areas Where Innovation
              <br />
              Meets Impact
            </h2>
          </div>

          <button className="rounded-full border border-white/15 bg-white px-10 py-5 text-[17px] font-semibold text-black transition hover:border-[#1b5cff] hover:bg-[#1b5cff] hover:text-white">
            Explore All Areas →
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[40px] border border-white/10 bg-[#0a0f1f] p-9 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2563ff]/60 hover:shadow-[0_30px_100px_rgba(37,99,255,0.15)]"
              >
                <div className="mb-9 flex h-16 w-16 items-center justify-center rounded-full border border-[#2563ff]/30 bg-[#081b45] shadow-[0_0_30px_rgba(37,99,255,0.35)]">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#4da3ff]"
                  />
                </div>

                <h3 className="mb-5 text-[22px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-[18px] leading-8 text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
