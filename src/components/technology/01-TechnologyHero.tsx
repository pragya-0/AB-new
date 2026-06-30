import { motion } from "framer-motion";
import { ArrowRight, Cpu, DatabaseZap, Globe2, Layers3 } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import BioPill from "../bio/BioPill";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

const domains = [
  "AI & GenAI",
  "LLM • NLP",
  "VR • AR • XR",
  "Blockchain",
  "Gaming Since 1998",
  "Enterprise Tech",
  "FinTech",
  "Smart Cities",
];

const proofPoints = [
  {
    value: "1998",
    label: "Technology journey begins",
  },
  {
    value: "2006",
    label: "VR work begins",
  },
  {
    value: "500+",
    label: "Games, VR & AR work",
  },
];

const credibility = [
  {
    icon: Cpu,
    title: "AI, GenAI & DeepTech",
    text: "Applied AI, LLM/NLP, automation, digital humans, smart systems and future technology adoption.",
  },
  {
    icon: Layers3,
    title: "VR, AR, XR & Gaming",
    text: "Immersive products, simulation thinking, game development since 1998 and interactive IP.",
  },
  {
    icon: DatabaseZap,
    title: "Blockchain & Digital Systems",
    text: "Blockchain, digital finance, identity systems, fintech, digital banking and trust-based platforms.",
  },
  {
    icon: Globe2,
    title: "Enterprise & Global Ecosystems",
    text: "Technology conversations connected with Microsoft, Nokia, Intel, Google Singapore, Axis Bank, ADB and global forums.",
  },
];

export default function TechnologyHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 pb-16 pt-12 text-white sm:px-6 sm:pb-20 sm:pt-14 md:px-10 md:pb-24 md:pt-20 lg:px-12 xl:px-14">
      <div className="pointer-events-none absolute left-[-260px] top-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/20 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(59,130,246,0.15),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7fb8ff] sm:text-[12px] sm:tracking-[0.35em]">
              Technology Ecosystem • Since 1998
            </p>

            <h1 className="max-w-[780px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[60px]">
              Building AI, VR, Blockchain, Gaming & DeepTech Ecosystems.
            </h1>

            <p className="mt-7 max-w-[820px] text-[17px] font-normal leading-[1.9] tracking-[-0.01em] text-white/72 sm:text-[18px] md:text-[19px]">
              Arijit Bhattacharyya’s technology journey connects game
              development since 1998, virtual reality since 2006, AI/ML, GenAI,
              LLM/NLP, blockchain, fintech, smart cities, IoT, digital twins
              and enterprise innovation — with work and collaborations
              connected to Microsoft technologies, Nokia, Intel software
              partner networks, Google Singapore office, Axis Bank, ADB and
              McKinsey-linked innovation ecosystems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {domains.map((item) => (
                <BioPill key={item} dark>
                  {item}
                </BioPill>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_14px_50px_rgba(0,87,255,0.08)]"
                >
                  <p className="text-[34px] font-extrabold leading-none tracking-[-0.05em] text-[#69aaff] md:text-[40px]">
                    {item.value}
                  </p>

                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/58">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#technology-domains"
                className="inline-flex items-center gap-2 rounded-full bg-[#0057ff] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1d6dff]"
              >
                Explore Technology Work
                <ArrowRight size={16} />
              </a>

              <a
                href="#core-technology-expertise"
                className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-[#2d74ff] hover:bg-white/[0.07]"
              >
                View Core Expertise
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.65, delay: 0.08 }}>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_24px_80px_rgba(0,87,255,0.12)] sm:rounded-[36px] sm:p-3 lg:rounded-[42px]">
              <div className="flex min-h-[360px] items-center justify-center rounded-[24px] bg-[#07101f] p-3 sm:min-h-[460px] sm:rounded-[28px] sm:p-4 md:min-h-[560px] lg:rounded-[32px] xl:min-h-[620px]">
                <SmartImage
                  src={`${speaking}maly 2.jpeg`}
                  alt="Arijit Bhattacharyya technology entrepreneur at blockchain AI VR AR XR GenAI LLM NLP and deeptech innovation forum"
                  className="h-full max-h-[620px] w-full rounded-[20px] object-contain sm:rounded-[24px] lg:rounded-[28px]"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {credibility.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_14px_50px_rgba(0,87,255,0.08)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0057ff]/18 text-[#8fc2ff] ring-1 ring-[#7fb8ff]/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[18px] font-bold leading-[1.15] tracking-[-0.025em] text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-[14px] font-normal leading-[1.7] text-white/62 sm:text-[15px]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
