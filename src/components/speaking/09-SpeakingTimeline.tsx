import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Globe2, Mic2, Sparkles } from "lucide-react";

import { fadeUp } from "../bio/bioMotion";

const services = [
  "Keynotes",
  "Moderation",
  "Global Panels",
  "Investor Forums",
  "University Sessions",
  "Innovation Programs",
  "AI & DeepTech Talks",
  "Startup Ecosystem Sessions",
];

export default function SpeakingTimeline() {
  return (
    <section
      id="speaking-enquiry"
      className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-8 md:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#0057ff]/20 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-180px] h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_34%)]" />

      <motion.div
        {...fadeUp}
        className="relative z-10 mx-auto max-w-[1200px] text-center"
      >
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#6faaff]">
          Speaking & Global Forums
        </p>

        <h2 className="mx-auto max-w-[920px] text-[36px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[46px] md:text-[58px] lg:text-[68px]">
          Bring global innovation thinking to your audience.
        </h2>

        <div className="mx-auto my-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0057ff] to-[#69aaff]" />

        <p className="mx-auto max-w-[820px] text-base font-normal leading-8 text-white/68 md:text-[18px]">
          For keynotes, moderation, workshops, investor forums, university
          sessions, policy discussions and innovation programs across AI,
          entrepreneurship, gaming, blockchain, VR, investment and future
          technology.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Mic2,
              title: "Keynotes & Panels",
              text: "Thought-leadership sessions for conferences, chambers and global forums.",
            },
            {
              icon: CalendarDays,
              title: "Workshops & Institutions",
              text: "University, startup and founder-focused sessions on future skills.",
            },
            {
              icon: Globe2,
              title: "Global Innovation Programs",
              text: "AI, blockchain, investment, gaming, VR and startup ecosystem conversations.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 text-left"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0057ff]/15 text-[#8fc2ff] ring-1 ring-[#2d74ff]/25">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-bold tracking-[-0.03em] text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-7 text-white/58">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0057ff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1d6bff]"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </a>

          <a
            href="/bio"
            className="rounded-full border border-white/14 bg-white/[0.04] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#2d74ff]"
          >
            View Bio
          </a>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1000px] flex-wrap justify-center gap-3">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/12 bg-white/[0.045] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9fc3ff]"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-[760px] items-center justify-center gap-3 rounded-[24px] border border-blue-300/15 bg-blue-400/[0.08] p-5">
          <Sparkles className="h-5 w-5 shrink-0 text-blue-200" />
          <p className="text-sm font-normal leading-7 text-white/68">
            Best suited for serious conferences, universities, chambers,
            investor forums, startup ecosystems and innovation-led platforms.
          </p>
        </div>
      </motion.div>
    </section>
  );
}