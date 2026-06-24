import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Rocket,
  Globe,
  Cpu,
  Crown,
  Handshake,
  Building2,
  Shield,
} from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import { fadeUp } from "../bio/bioMotion";

const guidanceAreas = [
  {
    icon: TrendingUp,
    title: "Business Scalability",
    text: "Improve operating margins, profitability, revenue direction and execution systems.",
  },
  {
    icon: Briefcase,
    title: "Fund Raising & Investment",
    text: "Investor readiness, grants, VC conversations and capital strategy.",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Strategy",
    text: "Launch products, acquire customers and communicate ideas clearly.",
  },
  {
    icon: Globe,
    title: "International Expansion",
    text: "Expand into global markets through partnerships and market entry.",
  },
  {
    icon: Cpu,
    title: "Technology Transformation",
    text: "Upgrade to AI, automation, blockchain, VR and future-ready systems.",
  },
  {
    icon: Crown,
    title: "Leadership & Executive Presence",
    text: "Improve leadership clarity, communication, decision making and executive presence.",
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    text: "Connect with corporates, investors and innovation ecosystems.",
  },
  {
    icon: Building2,
    title: "SME & MSME Growth",
    text: "Structure companies, teams, processes, employee engagement and long-term growth systems.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    text: "Identify blind spots before they become expensive problems.",
  },
];

const advisoryProof = [
  "Getting funding & grants",
  "Market expansion and go global",
  "Strategic thinking and innovation",
  "Prioritise and structure the company",
  "Build and grow the network",
  "Market research and opportunity analysis",
  "Fine-tune financial models",
  "Increase revenue",
  "Improve employee engagement",
  "Create and review business plans",
  "Update technologies for smooth operations",
];

export default function GuidanceAreas() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Focus"
      title="Where Founders, Leaders & Businesses Need Guidance"
      text="Built from decades of experience across startups, SMEs, MSMEs, technology companies, manufacturing businesses, investment ecosystems and international markets."
      dark
    >
      <motion.div
        {...fadeUp}
        className="mb-8 overflow-hidden rounded-[30px] border border-[#58a0ff]/20 bg-[#07101f] md:rounded-[36px]"
      >
        <div className="border-b border-white/10 px-5 py-7 sm:px-6 md:px-10 md:py-9">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#58a0ff]">
            Straight From Experience
          </p>

          <h3 className="max-w-[960px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Gain experience not shared in books.
          </h3>

          <p className="mt-6 max-w-[920px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/65 md:text-[18px]">
            Arijit has advised startup founders, SME owners, manufacturing
            leaders, technology companies, banks and growth-stage businesses on
            profitability, market expansion, fundraising, technology adoption,
            leadership development, executive presence, employee engagement and
            global growth.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {guidanceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                {...fadeUp}
                className="group flex min-h-[250px] flex-col bg-[#03070d] p-6 transition duration-300 hover:bg-[#081324] md:min-h-[285px] md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0057ff]/15 ring-1 ring-[#58a0ff]/20">
                  <Icon size={28} className="text-[#58a0ff]" />
                </div>

                <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[28px]">
                  {item.title}
                </h4>

                <p className="mt-4 max-w-[420px] text-[15px] font-normal leading-[1.7] text-white/65 md:text-[16px]">
                  {item.text}
                </p>

                <div className="mt-auto pt-7">
                  <div className="h-[3px] w-12 rounded-full bg-[#58a0ff]/80 transition duration-300 group-hover:w-20" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-5 md:rounded-[36px] md:p-7"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7fb8ff]">
          Unbiased Guidance On
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {advisoryProof.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/68 sm:text-[10px]"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="rounded-[30px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-6 md:rounded-[36px] md:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[72px] font-bold leading-none tracking-[-0.05em] text-white md:text-[110px]">
              70%
            </p>

            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8bb7ff]">
              Business Survival Rate
            </p>
          </div>

          <div className="max-w-[820px]">
            <h3 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[42px]">
              Most founders do not fail because of effort.
            </h3>

            <p className="mt-4 text-[16px] font-normal leading-[1.8] text-white/70 md:text-[18px]">
              They fail because of blind spots, poor positioning, weak systems,
              funding mistakes and slow decision making. Mentoring helps
              identify these issues early, improve communication, structure the
              company and create a stronger growth path.
            </p>
          </div>
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
