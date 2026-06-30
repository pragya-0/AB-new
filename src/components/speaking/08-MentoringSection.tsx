import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  Mic2,
  Network,
  Rocket,
  Scale,
  type LucideIcon,
} from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import { fadeUp } from "../bio/bioMotion";

type AuthorityItem = {
  title: string;
  label: string;
  text: string;
  icon: LucideIcon;
};

type MetricItem = {
  value: string;
  label: string;
  text: string;
};

const metrics: MetricItem[] = [
  {
    value: "7000+",
    label: "Startups Mentored",
    text: "Founder support across ideation, validation, pitch direction, growth strategy and investment readiness.",
  },
  {
    value: "1998",
    label: "Founder Since",
    text: "A long founder journey across technology, gaming, animation, creative IP and entrepreneurship.",
  },
  {
    value: "200+",
    label: "Founder Conversations",
    text: "Long-form ecosystem conversations through founder stories, podcast formats and entrepreneurship learning.",
  },
];

const authorityItems: AuthorityItem[] = [
  {
    title: "Startup Mentoring",
    label: "Founder Readiness",
    text: "Guidance across business models, pitch clarity, product direction, market positioning and early-stage execution.",
    icon: Rocket,
  },
  {
    title: "Accelerator Ecosystems",
    label: "Techstars • Seedstars",
    text: "Mentoring exposure across startup and accelerator ecosystems supporting founders, SMEs and innovation teams.",
    icon: Network,
  },
  {
    title: "Jury & Evaluation",
    label: "Startup Awards • Hackathons",
    text: "Founder evaluation credibility across innovation competitions, government-linked startup platforms and institutional jury rooms.",
    icon: Scale,
  },
  {
    title: "Investment Readiness",
    label: "Capital • Pitch • Growth",
    text: "Helping founders shape fundraising narratives, business traction, venture positioning and investor communication.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Institutional Advisory",
    label: "ADB • Global Platforms",
    text: "Advisory and resource-person credibility across development, innovation, entrepreneurship and future-skills conversations.",
    icon: BadgeCheck,
  },
  {
    title: "Founder Conversations",
    label: "Podcast • Community • Learning",
    text: "Long-form founder storytelling, ecosystem conversations and practical learning around entrepreneurship and technology.",
    icon: Mic2,
  },
];

export default function MentoringSection() {
  return (
    <BioSectionShell
      id="mentoring-authority"
      eyebrow="Mentoring & Founder Authority"
      title="Beyond Keynotes: Founder Mentoring, Jury Rooms & Advisory Platforms"
      text="Arijit Bhattacharyya’s speaking work extends into founder mentoring, startup evaluation, accelerator ecosystems, investment-readiness conversations and institutional innovation platforms."
      className="bg-gradient-to-br from-white via-[#f5f9ff] to-[#e8f1ff]"
    >
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-[#bdd9ff] bg-[#07101f] shadow-[0_30px_90px_rgba(0,87,255,0.16)]"
        >
          <div className="relative flex h-full min-h-[520px] flex-col justify-between overflow-hidden p-7 text-white sm:p-9 lg:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2d74ff]/25 blur-3xl" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#69aaff]/15 blur-3xl" />

            <div className="relative">
              <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-[24px] bg-white text-[#0b4fd8] shadow-[0_20px_70px_rgba(45,116,255,0.22)]">
                <Handshake className="h-8 w-8" />
              </div>

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8bb8ff]">
                Founder Support Layer
              </p>

              <h3 className="max-w-[760px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-[52px] md:text-[62px]">
                Mentoring founders, evaluating ideas and shaping innovation
                ecosystems.
              </h3>

              <p className="mt-6 max-w-[720px] text-[16px] font-normal leading-8 text-white/70">
                From startup rooms and accelerator ecosystems to institutional
                forums and jury panels, this layer shows the work behind the
                stage: helping founders think clearly, prepare better and build
                with stronger direction.
              </p>
            </div>

            <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.055] p-5"
                >
                  <p className="text-[34px] font-extrabold leading-none tracking-[-0.045em] text-white">
                    {metric.value}
                  </p>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8bb8ff]">
                    {metric.label}
                  </p>

                  <p className="mt-3 text-[13px] font-normal leading-6 text-white/58">
                    {metric.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5 sm:grid-cols-2">
          {authorityItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                {...fadeUp}
                className="group rounded-[30px] border border-[#bdd9ff] bg-white p-6 shadow-[0_22px_75px_rgba(0,87,255,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#2d74ff]/45 hover:shadow-[0_28px_90px_rgba(45,116,255,0.16)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#2d74ff]/10 text-[#0b4fd8] ring-1 ring-[#2d74ff]/15 transition duration-300 group-hover:bg-[#0b4fd8] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d74ff]">
                  {item.label}
                </p>

                <h3 className="text-[26px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#07101f] sm:text-[30px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] font-normal leading-7 text-[#475569] sm:text-[15px]">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </BioSectionShell>
  );
}