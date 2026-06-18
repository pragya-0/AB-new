import { useEffect, useState } from "react";
import {
  Briefcase,
  Gamepad2,
  Sparkles,
  Users,
  Globe2,
  Brain,
  Rocket,
  Network,
} from "lucide-react";

const timeline = [
  {
    year: "1998",
    title: "Started With ₹49",
    text: "The beginning of a bootstrapped journey built on technology, ambition and persistence.",
    icon: Briefcase,
  },
  {
    year: "2001",
    title: "Early Game Development",
    text: "Experimenting with gaming, interactive media and digital storytelling.",
    icon: Gamepad2,
  },
  {
    year: "2006",
    title: "Superhero Universe",
    text: "Building original characters, IP and entertainment-led technology products.",
    icon: Sparkles,
  },
  {
    year: "2010",
    title: "Startup Mentoring",
    text: "Guiding founders, entrepreneurs and early-stage ventures across sectors.",
    icon: Users,
  },
  {
    year: "2015",
    title: "Global Expansion",
    text: "Connecting business, innovation and partnerships across international markets.",
    icon: Globe2,
  },
  {
    year: "2020",
    title: "World Leader Summit",
    text: "Creating a global platform for leaders, investors, founders and innovators.",
    icon: Network,
  },
  {
    year: "2022",
    title: "Generative AI",
    text: "Exploring AI-led storytelling, content creation and future creative ecosystems.",
    icon: Brain,
  },
  {
    year: "2026",
    title: "102-Country Ecosystem",
    text: "A connected global innovation network across technology, education and entrepreneurship.",
    icon: Rocket,
  },
];

export default function JourneyTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % timeline.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = timeline[activeIndex];
  const ActiveIcon = activeItem.icon;

  const progressWidth =
    timeline.length === 1 ? 0 : (activeIndex / (timeline.length - 1)) * 100;

  return (
    <section className="relative overflow-hidden bg-[#02050b] px-5 py-20 text-white md:px-10">
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[170px]" />
      <div className="absolute right-[-260px] bottom-[-220px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,87,255,0.13),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 text-center">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#4d8cff]">
            Journey Since 1998
          </p>

          <h2 className="mx-auto max-w-[950px] text-[48px] font-black leading-tight tracking-[-0.06em] text-white lg:text-[60px]">
            From ₹49 to a Global Innovation Ecosystem
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[18px] leading-8 text-white/62">
            A timeline of entrepreneurship, technology, gaming, global speaking,
            startup mentoring and AI-led ecosystem building.
          </p>
        </div>

        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,87,255,0.14)] md:p-10">
          <div className="relative hidden px-6 py-10 lg:block">
            <div className="absolute left-[6%] right-[6%] top-[82px] h-px bg-white/12" />

            <div
              className="absolute left-[6%] top-[82px] h-px bg-gradient-to-r from-[#0057ff] via-cyan-300 to-[#0057ff] shadow-[0_0_35px_rgba(0,87,255,0.75)] transition-all duration-700 ease-out"
              style={{ width: `${progressWidth * 0.88}%` }}
            />

            <div className="grid grid-cols-8 gap-4">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex flex-col items-center text-center"
                  >
                    <div
                      className={`relative z-10 flex h-[86px] w-[86px] items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "scale-110 border-[#4d8cff] bg-[#06101f] shadow-[0_0_90px_rgba(0,87,255,0.72)]"
                          : isPast
                          ? "border-[#0057ff]/75 bg-[#051021] shadow-[0_0_35px_rgba(0,87,255,0.25)]"
                          : "border-white/15 bg-[#080d16]"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 transition duration-500 ${
                          isActive || isPast
                            ? "text-[#4d8cff]"
                            : "text-white/35"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-6 text-[15px] font-black tracking-[0.35em] transition duration-500 ${
                        isActive ? "text-[#4d8cff]" : "text-white/38"
                      }`}
                    >
                      {item.year}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 rounded-[22px] border p-4 text-left transition duration-300 ${
                    isActive
                      ? "border-[#4d8cff]/80 bg-[#0057ff]/15 shadow-[0_0_45px_rgba(0,87,255,0.22)]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${
                      isActive
                        ? "border-[#4d8cff] bg-[#06101f]"
                        : "border-white/15 bg-[#080d16]"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isActive ? "text-[#4d8cff]" : "text-white/35"
                      }`}
                    />
                  </div>

                  <div>
                    <p
                      className={`text-[13px] font-black tracking-[0.3em] ${
                        isActive ? "text-[#4d8cff]" : "text-white/35"
                      }`}
                    >
                      {item.year}
                    </p>

                    <h4 className="mt-1 text-[20px] font-black tracking-[-0.04em] text-white">
                      {item.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-[32px] border border-[#0057ff]/30 bg-[#0057ff]/10 p-8 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_0_70px_rgba(0,87,255,0.14)] md:p-10">
            <div className="mx-auto mb-6 flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#4d8cff] bg-[#06101f] shadow-[0_0_80px_rgba(0,87,255,0.58)]">
              <ActiveIcon className="h-10 w-10 text-[#4d8cff]" />
            </div>

            <p className="mb-4 text-[18px] font-black tracking-[0.35em] text-[#4d8cff]">
              {activeItem.year}
            </p>

            <h3 className="mx-auto max-w-[850px] text-[42px] font-black leading-[0.95] tracking-[-0.06em] text-white lg:text-[56px]">
              {activeItem.title}
            </h3>

            <p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-8 text-white/68">
              {activeItem.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}