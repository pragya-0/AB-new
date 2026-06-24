import { motion } from "framer-motion";
import {
  Search,
  Scale,
  Handshake,
  Target,
  Cpu,
  Megaphone,
} from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const serviceBlocks = [
  {
    icon: Search,
    eyebrow: "Research",
    title: "Landscape Study & Market Entry",
    text: "Find the right market, validate demand and identify the strongest entry route.",
    points: [
      "Landscape study and market research",
      "Pitch deck and business plan",
      "Optimal pilot market selection",
      "Market-entry opportunity analysis",
    ],
  },
  {
    icon: Scale,
    eyebrow: "Research",
    title: "Legal & Regulatory Assessment",
    text: "Understand legal, regulatory and structural options before entering a new market.",
    points: [
      "Legal and regulatory landscape",
      "Entry structure options",
      "Risk and compliance direction",
      "Regulatory navigation",
    ],
  },
  {
    icon: Handshake,
    eyebrow: "Matchmaking",
    title: "Partners, Investors & Corporate Access",
    text: "Identify local experts, distributors, investors, decision makers and corporate partners.",
    points: [
      "Stakeholder identification",
      "Local partner discovery",
      "Investor targeting and introductions",
      "Top corporate partner shortlist",
    ],
  },
  {
    icon: Target,
    eyebrow: "Service Design",
    title: "Value Proposition & Product Validation",
    text: "Shape the right market offer, validate the product and adapt it to local realities.",
    points: [
      "Product validation",
      "Local optimization",
      "Frugal innovation support",
      "10–15 customer avatar profiles",
    ],
  },
  {
    icon: Cpu,
    eyebrow: "Technology Growth",
    title: "Future-Ready Technology Upgrade",
    text: "Make the business ready for AI, blockchain, VR, AR, apps, IoT and automation.",
    points: [
      "AI and automation readiness",
      "Blockchain, VR and AR support",
      "Website, app and IoT direction",
      "Legacy-system modernization",
    ],
  },
  {
    icon: Megaphone,
    eyebrow: "Growth",
    title: "Brand Amplification & Market Visibility",
    text: "Increase credibility through branding, influence marketing, media and ecosystem access.",
    points: [
      "Digital branding strategy",
      "Influencer and media access",
      "Glam World Face network support",
      "Capital and accelerator connect",
    ],
  },
];

const businessReasons = [
  "Direct access to large-scale projects",
  "Amplification of expertise and market positioning",
  "Introductions to local corporate partners",
  "Access to government decision and policy makers",
  "Technology update and digital transformation",
  "Logistical support in setting up operations",
];

const executionProof = [
  "Mentorship sessions to fine-tune your message",
  "Presenting to top investors",
  "Selecting top corporate partners to engage",
  "Customer profile and persona creation",
  "Financial model improvement",
  "Business plan review and implementation",
];

const seoKeywords = [
  "Startup incubators in Kolkata",
  "Arijit Bhattacharyya incubation programme",
  "Business mentors for startups",
  "Startup events in Kolkata",
  "Local investor in Kolkata",
  "Startup mentors India",
  "Business mentors in India",
];

export default function MentoringServices() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Services"
      title="Research, Matchmaking, Service Design & Technology Growth"
      text="A structured mentoring and advisory framework for founders, SMEs, MSMEs and growth-stage businesses looking to enter markets, raise capital, build partnerships and modernize with technology."
    >
      <motion.div
        {...fadeUp}
        id="mentoring-services"
        className="overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-[#f7fbff] shadow-[0_30px_100px_rgba(0,87,255,0.10)] md:rounded-[36px]"
      >
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-[#d8e7ff] px-5 py-7 sm:px-6 md:px-10 md:py-10 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#0057ff]">
              Commercial Advisory Framework
            </p>

            <h3 className="max-w-[760px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[46px]">
              From market research to investor access, the mentoring is built
              around practical execution.
            </h3>

            <p className="mt-5 max-w-[700px] text-[16px] font-normal leading-[1.8] text-[#334155] md:text-[18px]">
              Research, regulatory assessment, matchmaking, investor
              presentations, corporate partner access, customer avatars,
              technology upgrades and brand amplification — structured into one
              business-growth framework.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Research", "Matchmaking", "Service Design", "Tech Growth"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0057ff]/15 bg-[#0057ff]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0057ff]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#03070d] sm:min-h-[460px] lg:min-h-full">
            <img
              src={`${asset}virtual-reality.jpg`}
              alt="Arijit Bhattacharyya technology mentoring business growth AI VR AR digital transformation advisory"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8bb7ff]">
                Technology + Business Growth
              </p>

              <h3 className="mt-3 max-w-[680px] text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[42px]">
                Strategy becomes useful when it can be executed.
              </h3>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-[#d8e7ff] md:grid-cols-2 xl:grid-cols-3">
          {serviceBlocks.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                {...fadeUp}
                className="group flex min-h-[340px] flex-col bg-white p-5 transition duration-300 hover:bg-[#eef5ff] sm:p-6 md:p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0057ff]/10 ring-1 ring-[#0057ff]/15">
                  <Icon size={28} className="text-[#0057ff]" />
                </div>

                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0057ff]">
                  {service.eyebrow}
                </p>

                <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[28px]">
                  {service.title}
                </h4>

                <p className="mt-4 text-[15px] font-normal leading-[1.7] text-[#475569] md:text-[16px]">
                  {service.text}
                </p>

                <div className="mt-6 grid gap-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[#d8e7ff] bg-[#f7fbff] px-4 py-3 text-[13px] font-semibold leading-5 text-[#1e293b]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-7 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <article className="rounded-[30px] border border-[#d8e7ff] bg-white p-5 shadow-[0_22px_80px_rgba(0,87,255,0.10)] sm:p-6 md:rounded-[36px] md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0057ff]">
            Business Development
          </p>

          <h3 className="mt-4 max-w-[720px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[46px]">
            Six reasons founders connect.
          </h3>

          <p className="mt-5 text-[16px] font-normal leading-[1.8] text-[#475569] md:text-[18px]">
            Arijit can provide access to live projects around the world and the
            opportunity to work closely with fast-moving startups, businesses,
            partners, investors and innovation networks.
          </p>
        </article>

        <article className="rounded-[30px] border border-[#0057ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:rounded-[36px] md:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {businessReasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-[#0057ff]/15 bg-white/80 p-4 text-[15px] font-semibold leading-6 text-[#07101f] shadow-[0_14px_45px_rgba(0,87,255,0.08)]"
              >
                {reason}
              </div>
            ))}
          </div>
        </article>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-7 overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-white p-5 shadow-[0_22px_80px_rgba(0,87,255,0.08)] sm:p-6 md:rounded-[36px] md:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0057ff]">
              Execution Support
            </p>

            <h3 className="mt-4 max-w-[720px] text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[42px]">
              Practical support from message clarity to investor and partner
              conversations.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {executionProof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#0057ff]/15 bg-[#0057ff]/10 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0057ff] sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 border-t border-[#d8e7ff] pt-6">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0057ff]">
            Legacy Search Terms Preserved
          </p>

          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#d8e7ff] bg-[#f7fbff] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#334155] sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
