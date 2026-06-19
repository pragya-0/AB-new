import {
  CalendarDays,
  Globe2,
  Handshake,
  UsersRound,
} from "lucide-react";

const stats = [
  { icon: CalendarDays, value: "29+", label: "Years" },
  { icon: Globe2, value: "102+", label: "Countries" },
  { icon: UsersRound, value: "12M+", label: "Network" },
  { icon: Handshake, value: "7000+", label: "Startups Mentored" },
];

export default function HeroSection() {
  return (
    <section className="bg-black px-5 pb-4">
      <div className="mx-auto max-w-[1740px]">
        <div className="relative min-h-[700px] overflow-hidden rounded-[34px] bg-[#030712]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,132,255,0.28),transparent_30%),linear-gradient(110deg,#05070c_0%,#06101f_50%,#102b55_100%)]" />

          {/* Hero Image */}
          <div className="absolute bottom-0 right-0 top-0 hidden w-[48%] lg:block">
            <img
              src="/assets/hero/hero-speaker.jpeg"
              alt="Arijit Bhattacharyya"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#030712] via-[#030712]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-blue-950/15" />
          </div>

          <div className="relative z-10 flex min-h-[700px] flex-col justify-between px-8 py-10 lg:px-14">
            {/* Content */}
            <div className="max-w-[850px] pt-8">
              <p className="mb-5 text-[15px] font-semibold text-blue-400">
                Entrepreneur. Technologist. Global Innovator.
              </p>

              <h1 className="max-w-[760px] text-[44px] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[56px] xl:text-[60px]">
                Building Technology, Startups &
                <br />
                Global Innovation Since 1998
              </h1>

              <p className="mt-7 max-w-[610px] text-[17px] leading-8 text-white/78">
                Serial entrepreneur, technologist, angel investor, TEDx speaker
                and global business matchmaking expert working across AI, VR,
                blockchain, gaming and emerging technologies.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#0057ff] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#1672ff]">
                  Explore Journey
                </button>

                <button className="rounded-full border border-white/35 bg-white/5 px-8 py-4 text-[15px] font-bold text-white transition hover:bg-white hover:text-black">
                  Watch Keynote
                </button>
              </div>
            </div>

            {/* Mobile Hero Image */}
            <div className="overflow-hidden rounded-[28px] lg:hidden">
              <img
                src="/assets/hero/hero-speaker.jpeg"
                alt="Arijit Bhattacharyya"
                className="h-[320px] w-full object-cover object-center"
              />
            </div>

            {/* Stats Strip */}
            <div className="relative z-20 mx-2 mt-10 mb-4 lg:mx-4">
              <div className="absolute -bottom-20 left-1/2 h-44 w-[92%] -translate-x-1/2 rounded-full bg-[#0057ff]/55 blur-[85px]" />
              <div className="absolute -bottom-4 left-[8%] right-[8%] h-5 rounded-full bg-[#00a6ff]/80 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#06184a]/88 px-6 py-5 shadow-[0_25px_120px_rgba(0,87,255,0.40)] backdrop-blur-2xl lg:px-8">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,87,255,0.28)_0%,rgba(10,31,87,0.52)_22%,rgba(5,15,35,0.62)_52%,rgba(0,166,255,0.16)_100%)]" />

                <div className="absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

                <div className="relative z-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
                  {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-5 ${
                          index !== 0
                            ? "lg:border-l lg:border-white/10 lg:pl-9"
                            : ""
                        }`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/35 bg-blue-500/10 text-blue-300 shadow-[0_0_22px_rgba(0,166,255,0.18)]">
                          <Icon size={25} strokeWidth={1.8} />
                        </div>

                        <div className="flex flex-col justify-center">
                          <div className="text-[34px] font-bold leading-none text-white">
                            {item.value}
                          </div>

                          <div className="mt-2 text-sm font-medium text-white/75">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* End Stats Strip */}
          </div>
        </div>
      </div>
    </section>
  );
}