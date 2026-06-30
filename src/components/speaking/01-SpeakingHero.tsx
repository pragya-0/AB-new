import { motion } from "framer-motion";
import { Building2, Globe2, GraduationCap, Mic2 } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

const stats = [
  ["2100+", "Events & forums"],
  ["102+", "Country network"],
  ["7000+", "Startups mentored"],
  ["10000+", "Students trained"],
] as const;

const credibilityCards = [
  {
    icon: GraduationCap,
    title: "Academic Platforms",
    text: "Speaking, mentoring and resource-person work across management schools, engineering campuses and institutional innovation forums.",
    chips: ["Universities", "Innovation", "Future Skills"],
  },
  {
    icon: Globe2,
    title: "Global Forums",
    text: "International presence across AI, blockchain, investment, smart cities, gaming, entrepreneurship and future technology platforms.",
    chips: ["AI", "Investment", "Global"],
  },
  {
    icon: Building2,
    title: "Industry & Chambers",
    text: "Business-facing conversations across chambers, startup ecosystems, investor communities and industry-led innovation programs.",
    chips: ["Chambers", "Startups", "Investors"],
  },
] as const;

export default function SpeakingHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-14 text-white sm:px-8 md:py-16 lg:px-10 xl:py-20">
      <div className="pointer-events-none absolute left-[-260px] top-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/18 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(59,130,246,0.14),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#69aaff]">
              Latest Speaks • Public Speaker In India
            </p>

            <h1 className="mt-5 max-w-[680px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[60px]">
              Global speaker on innovation, startups, AI and future technology.
            </h1>

            <p className="mt-6 max-w-[680px] text-base font-normal leading-8 text-white/70 md:text-[17px]">
              Arijit Bhattacharyya speaks as a keynote speaker, moderator,
              resource person and global panelist across universities, chambers,
              startup ecosystems, investment forums and international technology
              platforms.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-blue-200">
              {[
                "Keynote Speaker",
                "Moderator",
                "Resource Person",
                "Global Panelist",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-300/15 bg-blue-400/[0.08] px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-[620px] sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-[30px] font-extrabold leading-none tracking-[-0.05em] text-[#69aaff]">
                    {value}
                  </p>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(0,87,255,0.16)]">
              <div className="flex h-[320px] items-center justify-center rounded-[24px] bg-[#07101f] p-3 sm:h-[430px] md:h-[520px] xl:h-[610px]">
                <SmartImage
                  src={`${speaking}arijit-dubai-ai-blockchain-.jpg.jpeg`}
                  fallbacks={[
                    `${speaking}arijit-dubai-ai-blockchain-.jpg (1).jpeg`,
                    `${speaking}dubai-speaker.png`,
                    `${speaking}1.jpg.jpeg`,
                  ]}
                  alt="Arijit Bhattacharyya keynote speaker and global panelist at Dubai AI Blockchain investment forum"
                  className="h-auto max-h-full w-auto max-w-full rounded-[24px] object-contain"
                />
              </div>

              <div className="grid gap-5 p-5 md:grid-cols-[auto_1fr] md:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0057ff]/15 text-[#8fc2ff] ring-1 ring-[#2d74ff]/25">
                  <Mic2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8fc2ff]">
                    Dubai • AI • Blockchain • Investment
                  </p>

                  <h2 className="max-w-[620px] text-[24px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-[30px] md:text-[34px]">
                    Global platforms for technology, investment and leadership.
                  </h2>

                  <p className="mt-4 text-sm font-normal leading-7 text-white/58">
                    International presence across entrepreneurship, emerging
                    technology, deeptech, funding and future economies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {credibilityCards.map(({ icon: Icon, title, text, chips }) => (
            <motion.article
              key={title}
              {...fadeUp}
              className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-6 shadow-[0_20px_80px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#69aaff]/35 hover:bg-white/[0.055]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200 ring-1 ring-amber-300/25">
                <Icon className="h-5 w-5" />
              </div>

              <h2 className="text-[22px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[24px]">
                {title}
              </h2>

              <p className="mt-4 text-[15px] font-normal leading-7 text-white/66">
                {text}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-blue-300/15 bg-blue-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}