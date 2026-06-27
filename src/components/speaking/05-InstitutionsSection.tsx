import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Building2,
  Landmark,
  Network,
  Rocket,
  ShieldCheck,
  Star,
  Trophy,
  UsersRound,
  Zap,
} from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type AdvisoryItem = {
  title: string;
  meta: string;
  text: string;
  image: string;
  alt: string;
  fit: "cover" | "contain";
  accent: "blue" | "purple" | "orange";
  metrics: string[];
};

const roleBadges = [
  { label: "National Startup Awards Jury", icon: Trophy },
  { label: "Smart India Hackathon Evaluator", icon: ShieldCheck },
  { label: "HULT Prize Jury", icon: UsersRound },
  { label: "Techstars Mentor", icon: Rocket },
  { label: "Seedstars Mentor", icon: Star },
  { label: "IIDF Mentor", icon: Zap },
  { label: "BGI Portugal Mentor", icon: Network },
  { label: "ICC Startup Pad Creator", icon: Landmark },
  { label: "IIMC Innovation Park Mentor", icon: Award },
  { label: "Global Advisory Board Roles", icon: BadgeCheck },
];

const advisoryItems: AdvisoryItem[] = [
  {
    title: "National Startup India Award Jury",
    meta: "Government Startup Evaluation",
    text: "National-level jury credibility connected with public innovation, founder evaluation and India’s startup ecosystem.",
    image: `${speaking}national-startup-award.jpg`,
    fit: "contain",
    accent: "blue",
    metrics: ["Govt", "Jury", "Startups"],
    alt: "Arijit Bhattacharyya National Startup India Award jury member for Government of India startup evaluation and public innovation",
  },
  {
    title: "Smart India Hackathon Evaluator",
    meta: "Govt Innovation • Technology",
    text: "Evaluator role connected with student innovation, technology problem-solving and national digital transformation initiatives.",
    image: `${speaking}Defence_panel.jpg`,
    fit: "contain",
    accent: "blue",
    metrics: ["Govt", "Innovation", "Technology"],
    alt: "Arijit Bhattacharyya Smart India Hackathon evaluator and innovation panel member for technology startups and national innovation",
  },
  {
    title: "Techstars & Accelerator Mentoring",
    meta: "Accelerators • Startups",
    text: "Mentoring across accelerator ecosystems, founder platforms and global startup support networks.",
    image: `${speaking}techstars.png`,
    fit: "contain",
    accent: "purple",
    metrics: ["Techstars", "Seedstars", "IIDF"],
    alt: "Arijit Bhattacharyya Techstars startup mentor for founders accelerators and innovation ecosystems",
  },
  {
    title: "Global Family Office Forum",
    meta: "Investment • Capital • Networks",
    text: "Investor-facing presence across family office, capital, funding and global business networking platforms.",
    image: `${speaking}2022/family-office.jpg`,
    fit: "contain",
    accent: "orange",
    metrics: ["Capital", "Family Office", "Networks"],
    alt: "Arijit Bhattacharyya global family office forum speaker on investment capital startup funding and business networks",
  },
  {
    title: "CII, ICC & Chamber Platforms",
    meta: "Industry • Business Leadership",
    text: "Industry-facing visibility across chambers, business forums, startup platforms and entrepreneurship ecosystems.",
    image: `${speaking}CII.jpg`,
    fit: "cover",
    accent: "blue",
    metrics: ["CII", "ICC", "BCC&I"],
    alt: "Arijit Bhattacharyya CII ICC chamber speaker on entrepreneurship business innovation and investment",
  },
  {
    title: "Pre-Seed & Founder Evaluation",
    meta: "Investors • Founders • Early Stage",
    text: "Founder evaluation, early-stage mentoring and investment-readiness conversations across startup ecosystems.",
    image: `${speaking}pre-seed.jpg`,
    fit: "contain",
    accent: "orange",
    metrics: ["Pre-Seed", "Founders", "Investors"],
    alt: "Arijit Bhattacharyya pre-seed founder evaluation angel investment startup mentoring and venture capital platform",
  },
];

function accentClasses(accent: AdvisoryItem["accent"]) {
  if (accent === "purple") {
    return {
      border: "border-purple-300/25",
      icon: "bg-purple-400/15 text-purple-200 ring-purple-300/25",
      text: "text-purple-200",
      line: "from-purple-400 to-transparent",
      metric: "border-purple-300/20 bg-purple-400/10 text-purple-100",
    };
  }

  if (accent === "orange") {
    return {
      border: "border-orange-300/25",
      icon: "bg-orange-400/15 text-orange-200 ring-orange-300/25",
      text: "text-orange-200",
      line: "from-orange-400 to-transparent",
      metric: "border-orange-300/20 bg-orange-400/10 text-orange-100",
    };
  }

  return {
    border: "border-blue-300/25",
    icon: "bg-blue-400/15 text-blue-200 ring-blue-300/25",
    text: "text-blue-200",
    line: "from-[#0057ff] to-transparent",
    metric: "border-blue-300/20 bg-blue-400/10 text-blue-100",
  };
}

function FeaturedAdvisoryCard({ item }: { item: AdvisoryItem }) {
  const classes = accentClasses(item.accent);

  return (
    <motion.article
      {...fadeUp}
      className={`overflow-hidden rounded-[34px] border ${classes.border} bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] shadow-[0_35px_110px_rgba(0,87,255,0.12)]`}
    >
      <div className="bg-[#07101f] p-4">
        <SmartImage
          src={item.image}
          alt={item.alt}
          className={`h-[320px] w-full rounded-[24px] sm:h-[380px] lg:h-[430px] ${
            item.fit === "contain" ? "object-contain" : "object-cover object-top"
          }`}
        />
      </div>

      <div className="p-6 md:p-7">
        <div
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${classes.icon}`}
        >
          <Building2 className="h-6 w-6" />
        </div>

        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${classes.text}`}
        >
          {item.meta}
        </p>

        <h3 className="text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[38px]">
          {item.title}
        </h3>

        <div
          className={`my-5 h-1 w-24 rounded-full bg-gradient-to-r ${classes.line}`}
        />

        <p className="text-base font-normal leading-8 text-white/72">
          {item.text}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {item.metrics.map((metric) => (
            <div
              key={metric}
              className={`rounded-2xl border px-3 py-3 text-center text-sm font-bold ${classes.metric}`}
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CompactAdvisoryCard({ item }: { item: AdvisoryItem }) {
  const classes = accentClasses(item.accent);

  return (
    <motion.article
      {...fadeUp}
      className={`grid gap-5 rounded-[30px] border ${classes.border} bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.065] lg:grid-cols-[0.52fr_0.48fr] lg:items-center`}
    >
      <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-[24px] bg-[#07101f] p-4 sm:min-h-[340px] lg:min-h-[360px]">
        <SmartImage
          src={item.image}
          alt={item.alt}
          className={`h-full max-h-[340px] w-full rounded-[20px] sm:max-h-[390px] ${
            item.fit === "contain" ? "object-contain" : "object-cover object-top"
          }`}
        />
      </div>

      <div className="p-2 lg:p-4">
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${classes.text}`}
        >
          {item.meta}
        </p>

        <h3 className="text-[26px] font-bold leading-[1.06] tracking-[-0.035em] text-white md:text-[30px]">
          {item.title}
        </h3>

        <p className="mt-4 text-base font-normal leading-8 text-white/62">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function InstitutionsSection() {
  const featuredCards = advisoryItems.slice(4, 6);
  const compactCards = advisoryItems.slice(0, 4);

  return (
    <BioSectionShell
      id="advisory-leadership"
      dark
      eyebrow="Advisory Leadership"
      title="Trusted Where Decisions, Founders & Innovation Are Evaluated"
      text="Jury, advisory, mentor and investor-facing roles across startup awards, hackathons, accelerators, chambers, family office forums and founder evaluation ecosystems."
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
        <motion.aside
          {...fadeUp}
          className="rounded-[34px] border border-amber-300/25 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.03))] p-7 shadow-[0_40px_120px_rgba(245,158,11,0.08)] md:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-200">
            Beyond Stage Appearances
          </p>

          <h3 className="mt-5 text-[34px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[48px]">
            Where ideas, founders and innovations are{" "}
            <span className="bg-gradient-to-r from-amber-200 to-[#69aaff] bg-clip-text text-transparent">
              evaluated.
            </span>
          </h3>

          <p className="mt-6 text-base font-normal leading-8 text-white/72 md:text-[17px]">
            This section moves beyond stage appearances and shows decision-room
            credibility: <strong>jury panels</strong>,{" "}
            <strong>advisory boards</strong>,{" "}
            <strong>startup evaluation</strong>, accelerator mentoring,
            investment conversations and innovation councils.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {roleBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-blue-300/20 bg-black/20 px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-400/12 text-blue-200 ring-1 ring-blue-300/20">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold leading-5 text-white/90">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex gap-4 rounded-[24px] border border-emerald-300/25 bg-emerald-400/[0.08] p-5">
            <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-200" />
            <p className="text-base font-normal leading-7 text-white/76">
              Includes <strong>national-level jury/evaluator roles</strong>,
              global accelerator mentoring and industry-facing advisory
              leadership.
            </p>
          </div>
        </motion.aside>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredCards.map((item) => (
            <FeaturedAdvisoryCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {compactCards.map((item) => (
          <CompactAdvisoryCard key={item.title} item={item} />
        ))}
      </div>
    </BioSectionShell>
  );
}
