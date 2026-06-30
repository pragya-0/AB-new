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
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const asset = "/assets/mentoring/";

const serviceBlocks = [
  {
    icon: Search,
    eyebrow: "Market Entry",
    title: "Landscape Study & Market Entry",
    text:
      "Identify the right market, validate demand, understand competition, assess legal and regulatory direction and choose the strongest entry route before spending serious time or capital.",
    points: [
      "Landscape study and market research",
      "Pilot market selection",
      "Market-entry opportunity analysis",
      "Legal and regulatory assessment",
    ],
  },
  {
    icon: Scale,
    eyebrow: "Investment Readiness",
    title: "Funding, Grants & Private Equity Preparation",
    text:
      "Prepare founders and growth-stage businesses for grants, angel investors, VC conversations, accelerator applications and private-equity style discussions.",
    points: [
      "Pitch deck and business plan",
      "Financial model improvement",
      "Investor narrative and readiness",
      "Private equity readiness",
    ],
  },
  {
    icon: Handshake,
    eyebrow: "Ecosystem Access",
    title: "Partners, Investors & Corporate Access",
    text:
      "Map the right partners, corporate decision makers, investors, mentors, accelerators and ecosystem routes for meaningful business growth.",
    points: [
      "Stakeholder identification",
      "Local partner discovery",
      "Investor targeting and introductions",
      "Corporate partner shortlist",
    ],
  },
  {
    icon: Target,
    eyebrow: "Service Design",
    title: "Product Validation & Founder Readiness",
    text:
      "Shape the value proposition, validate the offer, define customer profiles and make the business easier for investors, customers and partners to understand.",
    points: [
      "Product validation",
      "Customer avatar profiles",
      "Accelerator readiness",
      "Founder message clarity",
    ],
  },
  {
    icon: Cpu,
    eyebrow: "Technology Upgrade",
    title: "AI, DeepTech & Legacy-System Modernization",
    text:
      "Help businesses modernize legacy platforms, adopt AI, GenAI, automation, blockchain, VR, AR, apps, IoT and digital operating systems without losing sight of execution.",
    points: [
      "AI and DeepTech adoption",
      "Legacy-system modernization",
      "Blockchain, VR and AR support",
      "IoT, apps and digital systems",
    ],
  },
  {
    icon: Megaphone,
    eyebrow: "Business Growth",
    title: "Brand, Visibility & International Expansion",
    text:
      "Improve market visibility, ecosystem positioning, influence strategy and international expansion readiness through clearer storytelling and stronger networks.",
    points: [
      "Digital branding strategy",
      "Media and ecosystem access",
      "Global expansion positioning",
      "Capital and accelerator connect",
    ],
  },
];

const businessReasons = [
  "Direct access to large-scale projects",
  "Market positioning and target amplification",
  "Introductions to corporate partners",
  "Government and policy ecosystem access",
  "Technology update and go-digital support",
  "Logistical support for new-market setup",
  "Cost reduction and operating-margin improvement",
  "Business model, pitch and execution clarity",
];

const ecosystemAccess = [
  "Seedstars",
  "Techstars",
  "Founder Institute",
  "FasterCapital Dubai",
  "Business Finland",
  "Google Business Group",
  "ICC Startup Pad",
  "IIM Calcutta Innovation Park",
  "Startup India",
  "Smart India Hackathon",
  "ADB",
  "IIT / IIM Ecosystems",
];

export default function MentoringServices() {
  return (
    <BioSectionShell
      eyebrow="Mentoring Services"
      title="Market Entry, Investment Readiness, Service Design & Technology Growth"
      text="A practical mentoring and advisory framework for founders, SMEs, MSMEs, manufacturing companies and growth-stage businesses looking to enter markets, raise capital, access ecosystems, modernize with technology and scale globally."
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

            <h3 className="max-w-[780px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[46px]">
              Practical mentoring from market-entry clarity to investor,
              service-design and technology readiness.
            </h3>

            <p className="mt-5 max-w-[760px] text-[16px] font-normal leading-[1.85] text-[#334155] md:text-[18px]">
              Research, investment readiness, private equity preparation,
              ecosystem access, corporate matchmaking, technology upgrade,
              AI transformation, legacy-system modernization and global
              expansion — structured as one execution-focused growth framework.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Market Entry",
                "Private Equity Readiness",
                "Service Design",
                "AI & DeepTech",
                "Legacy Modernization",
                "Ecosystem Access",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0057ff]/15 bg-[#0057ff]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0057ff]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-[#03070d] sm:min-h-[460px] lg:min-h-full">
            <SmartImage
              src={`${asset}virtual-reality.jpg`}
              alt="Arijit Bhattacharyya mentoring founders on AI DeepTech legacy-system modernization VR AR business growth and startup advisory"
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
                className="group flex min-h-[380px] flex-col bg-white p-5 transition duration-300 hover:bg-[#eef5ff] sm:p-6 md:p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0057ff]/10 ring-1 ring-[#0057ff]/15">
                  <Icon size={28} className="text-[#0057ff]" />
                </div>

                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0057ff]">
                  {service.eyebrow}
                </p>

                <h4 className="text-[25px] font-bold leading-[1.05] tracking-[-0.03em] text-[#07101f] md:text-[30px]">
                  {service.title}
                </h4>

                <p className="mt-4 text-[15px] font-normal leading-[1.75] text-[#475569] md:text-[17px]">
                  {service.text}
                </p>

                <div className="mt-6 grid gap-2">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[#d8e7ff] bg-[#f7fbff] px-4 py-3 text-[13px] font-semibold leading-5 text-[#1e293b] md:text-[14px]"
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
            Eight reasons founders and businesses connect.
          </h3>

          <p className="mt-5 text-[16px] font-normal leading-[1.85] text-[#475569] md:text-[18px]">
            The goal is not just advice. The goal is to improve execution:
            investor readiness, market entry, partnerships, technology adoption,
            cost reduction, operating-margin improvement, communication and
            global business access.
          </p>
        </article>

        <article className="rounded-[30px] border border-[#0057ff]/20 bg-[#0057ff]/10 p-5 sm:p-6 md:rounded-[36px] md:p-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {businessReasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-[#0057ff]/15 bg-white/80 p-4 text-[15px] font-semibold leading-6 text-[#07101f] shadow-[0_14px_45px_rgba(0,87,255,0.08)] md:text-[16px]"
              >
                {reason}
              </div>
            ))}
          </div>
        </article>
      </motion.div>

     <motion.article
  {...fadeUp}
  className="mt-7 overflow-hidden rounded-[30px] border border-[#d8e7ff] bg-white p-5 shadow-[0_22px_80px_rgba(0,87,255,0.08)] sm:p-6 md:rounded-[36px] md:p-8"
>
  <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-start">
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0057ff]">
        Trusted Ecosystems
      </p>

      <div className="mt-4 h-1 w-16 rounded-full bg-[#0057ff]" />

      <h3 className="mt-7 max-w-[660px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-[#07101f] md:text-[46px]">
        Trusted across leading startup, academic and innovation ecosystems.
      </h3>

      <p className="mt-5 max-w-[680px] text-[16px] font-normal leading-[1.8] text-[#475569] md:text-[18px]">
        Arijit Bhattacharyya has worked with universities, startup accelerators,
        government initiatives, business chambers and international innovation
        platforms supporting founders, SMEs, MSMEs and growth-stage companies.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {ecosystemAccess.map((item) => (
        <div
          key={item}
          className="flex min-h-[104px] items-center rounded-[24px] border border-[#d8e7ff] bg-[#f8fbff] px-5 shadow-[0_14px_45px_rgba(0,87,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 hover:bg-white"
        >
          <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0057ff]/10 text-[18px] font-extrabold text-[#0057ff]">
            {item.slice(0, 1)}
          </div>

          <p className="text-[17px] font-bold leading-[1.15] tracking-[-0.02em] text-[#07101f]">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-8 rounded-[26px] border border-[#0057ff]/20 bg-[#07101f] p-5 text-white md:p-7">
    <h4 className="text-[24px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[32px]">
      Real relationships. Real access. Real impact.
    </h4>

    <p className="mt-4 max-w-[980px] text-[15px] font-normal leading-[1.8] text-white/72 md:text-[17px]">
      These ecosystems help founders and businesses access the right
      introductions, partnerships, markets, mentors, institutions and growth
      opportunities.
    </p>
  </div>
</motion.article>
    </BioSectionShell>
  );
}
