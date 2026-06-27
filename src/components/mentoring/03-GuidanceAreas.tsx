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
    text: "Improve operating margins, profitability, revenue growth, execution systems, cost optimisation and long-term business structure.",
  },
  {
    icon: Briefcase,
    title: "Fundraising & Investment Readiness",
    text: "Prepare for grants, angel investors, venture capital, private equity conversations, financial modelling and investor communication.",
  },
  {
    icon: Rocket,
    title: "Go-To-Market & Market Entry",
    text: "Validate markets, sharpen positioning, launch products, build customer acquisition strategies and communicate value clearly.",
  },
  {
    icon: Globe,
    title: "International Expansion",
    text: "Plan cross-border growth, global partnerships, ecosystem access, market entry and international business development.",
  },
  {
    icon: Cpu,
    title: "AI, DeepTech & Technology",
    text: "Modernise legacy systems using AI, GenAI, automation, blockchain, VR, AR, XR, IoT and emerging DeepTech solutions.",
  },
  {
    icon: Crown,
    title: "Leadership & Executive Presence",
    text: "Strengthen leadership, communication, strategic thinking, decision-making and executive presence for founders and CXOs.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "Build relationships with corporates, investors, accelerators, universities, government bodies and innovation ecosystems.",
  },
  {
    icon: Building2,
    title: "SME, MSME & Manufacturing",
    text: "Improve operations, HR processes, employee engagement, business systems and sustainable growth across manufacturing and service sectors.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    text: "Identify blind spots, funding risks, operational gaps and strategic weaknesses before they become expensive business problems.",
  },
];

const advisoryProof = [
  "Funding & grants",
  "Private equity readiness",
  "Investor communication",
  "Market expansion",
  "International market entry",
  "Business model review",
  "Operating margin improvement",
  "Financial model optimisation",
  "Technology upgrade",
  "Legacy system modernisation",
  "AI & DeepTech adoption",
  "Risk management",
  "HR process optimisation",
  "Employee engagement",
  "Pitch deck & business plan review",
  "Manufacturing transformation",
  "Partnership strategy",
  "Operational structure",
];

export default function GuidanceAreas() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Focus"
      title="Where Founders, Leaders & Businesses Need Guidance"
      text="Built from decades of work across startups, SMEs, MSMEs, technology companies, manufacturing businesses, investment ecosystems and international markets."
      dark
    >
      <motion.div
        {...fadeUp}
        className="mb-8 overflow-hidden rounded-[30px] border border-[#58a0ff]/20 bg-[#07101f] md:rounded-[36px]"
      >
        <div className="border-b border-white/10 px-5 py-7 sm:px-6 md:px-10 md:py-9">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#58a0ff]">
            Experience-Led Guidance
          </p>

          <h3 className="max-w-[980px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Gain experience not shared in books.
          </h3>

          <p className="mt-6 max-w-[980px] text-[16px] font-normal leading-[1.85] tracking-[-0.01em] text-white/66 md:text-[18px]">
            Arijit has advised startup founders, SMEs, MSMEs, manufacturing
            companies, banks, technology businesses and growth-stage enterprises
            on operating margin improvement, profitability, fundraising, market
            expansion, risk management, legacy-system modernization, AI
            adoption, leadership development, employee engagement and
            international business growth.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {guidanceAreas.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                {...fadeUp}
                className="group flex min-h-[265px] flex-col bg-[#03070d] p-6 transition duration-300 hover:bg-[#081324] md:min-h-[300px] md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0057ff]/15 ring-1 ring-[#58a0ff]/20">
                  <Icon size={28} className="text-[#58a0ff]" />
                </div>

                <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[29px]">
                  {item.title}
                </h4>

                <p className="mt-4 max-w-[440px] text-[15px] font-normal leading-[1.75] text-white/66 md:text-[17px]">
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
        <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7fb8ff]">
              Practical Advisory Areas
            </p>

            <h3 className="mt-4 max-w-[520px] text-[28px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[38px]">
              Guidance connected to actual founder decisions.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {advisoryProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/70 sm:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
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

          <div className="max-w-[860px]">
            <h3 className="text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[42px]">
              Better decisions create stronger businesses.
            </h3>

            <p className="mt-4 text-[16px] font-normal leading-[1.85] text-white/70 md:text-[18px]">
              Sustainable growth depends on strategic thinking, disciplined
              execution and early identification of risks. Mentoring helps
              founders strengthen business models, improve communication,
              modernise technology, optimise operations and build companies
              prepared for long-term growth.
            </p>
          </div>
        </div>
      </motion.div>
    </BioSectionShell>
  );
}