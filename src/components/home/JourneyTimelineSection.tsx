import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Gamepad2,
  Box,
  Sparkles,
  Blocks,
  Network,
  Brain,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    year: "1998",
    title: "Virtualinfocom Begins",
    text: "Founded Virtualinfocom as a game development company and academy, beginning a bootstrapped journey in technology, training and original digital creation.",
    icon: Briefcase,
  },
  {
    year: "2000",
    title: "Programming & Grassroots Tech Education",
    text: "Early work around programming, Python-led learning and grassroots technology education, including outreach beyond traditional city classrooms.",
    icon: Code2,
  },
  {
    year: "2002",
    title: "Early 3D Game Direction",
    text: "Moved into one of India’s early 3D game development directions, connecting interactive media, digital characters and game-based storytelling.",
    icon: Gamepad2,
  },
  {
    year: "2004",
    title: "VRML & Immersive Web Experiments",
    text: "Explored VRML, early virtual reality concepts and immersive web experiments before VR became mainstream in India’s digital ecosystem.",
    icon: Box,
  },
  {
    year: "2006",
    title: "RPG, PC Games & VR Direction",
    text: "Expanded into early Indian RPG and PC-game work while strengthening the direction toward virtual reality, original IP and immersive entertainment.",
    icon: Sparkles,
  },
  {
    year: "2016",
    title: "Blockchain, Future Tech & Movie Games",
    text: "Built stronger future-tech momentum through blockchain, movie-based games, creative IP and a larger ecosystem of characters, models and digital assets.",
    icon: Blocks,
  },
  {
    year: "2020",
    title: "Global Investor & Leadership Platforms",
    text: "Scaled global platforms including Dubai 20-20-20, Future of Medicine, World Leader Summit direction and international consulting conversations.",
    icon: Network,
  },
  {
    year: "2023",
    title: "GenAI, Smart City & Creative Automation",
    text: "Expanded into GenAI-led ads, music videos, smart city ideas and digital-human creative workflows across technology and media.",
    icon: Brain,
  },
  {
    year: "2025–26",
    title: "GenAI Movies, Energy & 8 Metals Direction",
    text: "Future-facing direction across GenAI movies, venture capital, energy, 8 Metals, Cera Heat and new technology-led business ecosystems.",
    icon: Rocket,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function JourneyTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % timeline.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = timeline[activeIndex];
  const ActiveIcon = activeItem.icon;

  const progressWidth =
    timeline.length === 1 ? 0 : (activeIndex / (timeline.length - 1)) * 100;

  return (
    <section className="relative overflow-hidden bg-[#02050b] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-260px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[180px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,87,255,0.13),transparent_42%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mx-auto mb-10 max-w-[980px] text-center sm:mb-12">
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff] sm:text-sm"
          >
            Journey Since 1998
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[980px] text-[36px] font-extrabold leading-[1.04] tracking-[-0.06em] text-white sm:text-[48px] lg:text-[60px]"
          >
            From Virtualinfocom to a Future-Tech Global Ecosystem
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[800px] text-[16px] font-normal leading-8 text-white/62 sm:text-[18px]"
          >
            A sharper timeline of game development, grassroots technology
            education, VR, blockchain, global platforms, GenAI, venture capital
            and energy-led innovation.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_30px_120px_rgba(0,87,255,0.14)] backdrop-blur sm:rounded-[38px] sm:p-6 md:p-10"
        >
          {/* Desktop timeline */}
          <div className="relative hidden px-2 py-8 lg:block xl:px-4 xl:py-10">
            <div className="absolute left-[5%] right-[5%] top-[76px] h-px bg-white/12" />

            <div
              className="absolute left-[5%] top-[76px] h-px bg-gradient-to-r from-[#0057ff] via-cyan-300 to-[#0057ff] shadow-[0_0_35px_rgba(0,87,255,0.75)] transition-all duration-700 ease-out"
              style={{ width: `${progressWidth * 0.9}%` }}
            />

            <div className="grid grid-cols-9 gap-2 xl:gap-3">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    aria-label={`View ${item.year} ${item.title}`}
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex flex-col items-center text-center focus:outline-none"
                  >
                    <div
                      className={`relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border transition-all duration-500 xl:h-[78px] xl:w-[78px] ${
                        isActive
                          ? "scale-110 border-[#4d8cff] bg-[#06101f] shadow-[0_0_85px_rgba(0,87,255,0.7)]"
                          : isPast
                          ? "border-[#0057ff]/75 bg-[#051021] shadow-[0_0_35px_rgba(0,87,255,0.25)]"
                          : "border-white/15 bg-[#080d16] hover:border-[#4d8cff]/40"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 transition duration-500 xl:h-7 xl:w-7 ${
                          isActive || isPast
                            ? "text-[#4d8cff]"
                            : "text-white/35"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-5 text-[11px] font-semibold tracking-[0.18em] transition duration-500 xl:text-[13px] xl:tracking-[0.24em] ${
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

          {/* Mobile/tablet timeline */}
          <div className="grid gap-3 lg:hidden">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  aria-label={`View ${item.year} ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 rounded-[22px] border p-4 text-left transition duration-300 focus:outline-none ${
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
                      className={`text-[12px] font-semibold tracking-[0.24em] ${
                        isActive ? "text-[#4d8cff]" : "text-white/35"
                      }`}
                    >
                      {item.year}
                    </p>

                    <h4 className="mt-1 text-[19px] font-bold leading-tight tracking-[-0.04em] text-white">
                      {item.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active story card */}
          <motion.div
            key={activeItem.year}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mt-6 rounded-[26px] border border-[#0057ff]/30 bg-[#0057ff]/10 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_0_70px_rgba(0,87,255,0.14)] sm:mt-8 sm:rounded-[32px] sm:p-8 md:p-10"
          >
            <div className="mx-auto mb-6 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#4d8cff] bg-[#06101f] shadow-[0_0_80px_rgba(0,87,255,0.58)] sm:h-[92px] sm:w-[92px]">
              <ActiveIcon className="h-9 w-9 text-[#4d8cff] sm:h-10 sm:w-10" />
            </div>

            <p className="mb-4 text-[14px] font-semibold tracking-[0.28em] text-[#4d8cff] sm:text-[18px] sm:tracking-[0.32em]">
              {activeItem.year}
            </p>

            <h3 className="mx-auto max-w-[900px] text-[34px] font-extrabold leading-[1] tracking-[-0.06em] text-white sm:text-[44px] lg:text-[56px]">
              {activeItem.title}
            </h3>

            <p className="mx-auto mt-6 max-w-[780px] text-[16px] font-normal leading-8 text-white/68 sm:text-[18px]">
              {activeItem.text}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}