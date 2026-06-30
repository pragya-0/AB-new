import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  
  Landmark,
  Network,
  Rocket,
  ShieldCheck,
  Trophy,
  UsersRound,
} from "lucide-react";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const speaking = "/assets/speaking/";

type AdvisoryItem = {
  title: string;
  meta: string;
  text: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "orange" | "emerald";
  metrics: string[];
  imageWrapClass: string;
  imageClass: string;
};

const advisoryItems: AdvisoryItem[] = [
  {
    title: "National Startup India Award Jury",
    meta: "Government Startup Evaluation",
    text: "National-level jury credibility connected with startup evaluation, public innovation and India’s founder ecosystem.",
    image: `${speaking}national-startup-award.jpg`,
    alt: "Arijit Bhattacharyya as National Startup India Award jury member for startup evaluation and public innovation",
    icon: Trophy,
    accent: "blue",
    metrics: ["Government", "Jury", "Startups"],
    imageWrapClass: "h-[250px] sm:h-[285px] lg:h-[300px]",
    imageClass: "max-h-full max-w-full object-contain p-4 sm:p-5",
  },
  {
    title: "Defence Panel & Innovation Evaluation",
    meta: "Defence • Technology • National Innovation",
    text: "Panel and evaluator presence connected with technology problem-solving, student innovation and national transformation conversations.",
    image: `${speaking}Defence_panel.jpg`,
    alt: "Arijit Bhattacharyya on defence innovation panel for technology evaluation and national innovation",
    icon: ShieldCheck,
    accent: "blue",
    metrics: ["Defence", "Panel", "Technology"],
    imageWrapClass: "h-[250px] sm:h-[285px] lg:h-[300px]",
    imageClass: "max-h-full max-w-full object-contain p-4 sm:p-5",
  },
  {
    title: "Techstars / Seedstars Mentoring",
    meta: "Accelerators • Founders • Startup Growth",
    text: "Mentoring across accelerator ecosystems and founder-support platforms, with focus on readiness, clarity, scale and market direction.",
    image: `${speaking}techstars.png`,
    alt: "Arijit Bhattacharyya associated with Techstars and Seedstars startup mentoring for founders and accelerator ecosystems",
    icon: Rocket,
    accent: "purple",
    metrics: ["Techstars", "Seedstars", "Mentor"],
    imageWrapClass: "h-[250px] sm:h-[285px] lg:h-[300px]",
    imageClass: "max-h-full max-w-full object-contain p-6 sm:p-8",
  },
  {
    title: "Family Office Investment Forum",
    meta: "Investment • Capital • Global Networks",
    text: "Investor-facing presence across family office, capital, funding and global business-networking platforms.",
    image: `${speaking}2022/family-office.jpg`,
    alt: "Arijit Bhattacharyya at global family office forum speaking on investment capital startup funding and business networks",
    icon: Network,
    accent: "orange",
    metrics: ["Capital", "Family Office", "Investors"],
    imageWrapClass: "h-[260px] sm:h-[300px] lg:h-[315px]",
    imageClass: "max-h-full max-w-full object-contain p-3 sm:p-4",
  },
  {
    title: "CII / ICC Chamber Platforms",
    meta: "Industry Bodies • Business Leadership",
    text: "Industry-facing visibility across chambers, business forums, entrepreneurship platforms and innovation-led leadership conversations.",
    image: `${speaking}CII.jpg`,
    alt: "Arijit Bhattacharyya at CII and ICC chamber platform for entrepreneurship business innovation and investment",
    icon: Landmark,
    accent: "emerald",
    metrics: ["CII", "ICC", "Chambers"],
    imageWrapClass: "h-[260px] sm:h-[300px] lg:h-[315px]",
    imageClass: "max-h-full max-w-full object-contain p-4 sm:p-5",
  },
  {
    title: "Pre-Seed Founder Evaluation",
    meta: "Investors • Founders • Early Stage",
    text: "Early-stage founder evaluation, investment-readiness mentoring and venture conversations across startup ecosystems.",
    image: `${speaking}pre-seed.jpg`,
    alt: "Arijit Bhattacharyya at pre-seed founder evaluation platform for angel investment startup mentoring and venture readiness",
    icon: UsersRound,
    accent: "orange",
    metrics: ["Pre-Seed", "Founders", "Evaluation"],
    imageWrapClass: "h-[260px] sm:h-[300px] lg:h-[315px]",
    imageClass: "max-h-full max-w-full object-contain p-3 sm:p-4",
  },
];

const roleBadges = [
  "Jury",
  "Evaluator",
  "Mentor",
  "Advisor",
  "Investor Forum",
  "Founder Evaluation",
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

  if (accent === "emerald") {
    return {
      border: "border-emerald-300/25",
      icon: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/25",
      text: "text-emerald-200",
      line: "from-emerald-400 to-transparent",
      metric: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100",
    };
  }

  return {
    border: "border-blue-300/25",
    icon: "bg-blue-400/15 text-blue-200 ring-blue-300/25",
    text: "text-blue-200",
    line: "from-blue-400 to-transparent",
    metric: "border-blue-300/20 bg-blue-400/10 text-blue-100",
  };
}

function AdvisoryCard({
  item,
  index,
}: {
  item: AdvisoryItem;
  index: number;
}) {
  const classes = accentClasses(item.accent);
  const Icon = item.icon;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={`group overflow-hidden rounded-[30px] border ${classes.border} bg-[linear-gradient(180deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] shadow-[0_26px_80px_rgba(0,87,255,0.1)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]`}
    >
      <div
        className={`flex items-center justify-center border-b border-white/10 bg-[#07101f] ${item.imageWrapClass}`}
      >
        <SmartImage
          src={item.image}
          alt={item.alt}
          className={`${item.imageClass} rounded-[22px] transition duration-500 group-hover:scale-[1.015]`}
        />
      </div>

      <div className="p-5 sm:p-6">
        <div
          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ${classes.icon}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <p
          className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] ${classes.text}`}
        >
          {item.meta}
        </p>

        <h3 className="text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[27px]">
          {item.title}
        </h3>

        <div
          className={`my-4 h-1 w-20 rounded-full bg-gradient-to-r ${classes.line}`}
        />

        <p className="text-[14px] font-normal leading-7 text-white/70 sm:text-[15px]">
          {item.text}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {item.metrics.map((metric) => (
            <div
              key={`${item.title}-${metric}`}
              className={`rounded-xl border px-2 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.06em] ${classes.metric}`}
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function AdvisoryRoles() {
  return (
    <section
      id="advisory-leadership"
      className="relative overflow-hidden bg-[#020711] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-300">
              Advisory, Jury & Mentor Roles
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Authority Beyond the Speaking Stage
            </h2>
          </div>

          <div className="max-w-3xl lg:pb-2">
            <p className="text-base font-normal leading-8 text-white/72 sm:text-lg">
              Decision-room credibility across startup awards, defence and technology
              panels, accelerator networks, chambers, investor forums and founder
              evaluation ecosystems.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {roleBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-blue-300/15 bg-blue-400/[0.08] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {advisoryItems.map((item, index) => (
            <AdvisoryCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}