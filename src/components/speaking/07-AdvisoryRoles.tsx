import { motion } from "framer-motion";
import { Globe2, GraduationCap, Rocket } from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const mentoring = "/assets/speaking/mentoring/";

const impactStats = [
  ["7000+", "Startups Mentored"],
  ["10000+", "Students Trained"],
  ["Founder", "Mentoring Sessions"],
  ["Global", "Accelerator Networks"],
];

const mentoringMoments = [
  {
    title: "Founder Mentoring",
    text: "Practical sessions with entrepreneurs, early-stage founders and innovation teams.",
    image: `${mentoring}1.jpg`,
    alt: "Arijit Bhattacharyya startup mentor guiding founders entrepreneurs and innovation teams",
    icon: Rocket,
  },
  {
    title: "Student Innovation",
    text: "Future-skills conversations with students, institutions and young builders.",
    image: `${mentoring}4.jpg`,
    alt: "Arijit Bhattacharya speaker mentoring students on future skills innovation and entrepreneurship",
    icon: GraduationCap,
  },
  {
    title: "Startup Ecosystems",
    text: "Mentoring across startup communities, accelerators and business-growth platforms.",
    image: `${mentoring}8.jpg`,
    alt: "Arijit Bhattacharjee mentor for startup ecosystems accelerators founders and business growth platforms",
    icon: Globe2,
  },
];

export default function AdvisoryRoles() {
  return (
    <BioSectionShell
      id="mentoring-impact"
      dark
      eyebrow="Mentoring Impact"
      title="Mentoring Founders, Students & Innovation Ecosystems"
      text="Founder sessions, accelerator programs, institution-led mentoring and startup ecosystem building across entrepreneurship, AI, gaming, investment and future skills."
      className="bg-black"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div {...fadeUp}>
          <div className="max-w-[760px]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6faaff]">
              From Visibility To Impact
            </p>

            <h3 className="text-[36px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[46px] md:text-[58px]">
              Turning experience into founder growth and future skills.
            </h3>

            <p className="mt-7 text-base font-normal leading-8 text-white/65 md:text-[17px]">
              The mentoring story is not only about appearing on stages. It is
              about helping founders sharpen ideas, guiding students toward
              emerging careers, and building stronger innovation ecosystems
              through practical, hands-on sessions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {impactStats.map(([value, label]) => (
              <div key={label} className="border-t border-white/14 pt-5">
                <p className="text-[36px] font-extrabold leading-none tracking-[-0.055em] text-[#69aaff] sm:text-[42px]">
                  {value}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-5">
          {mentoringMoments.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="grid gap-5 rounded-[34px] border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[0.42fr_0.58fr] md:items-center"
              >
                <div className="overflow-hidden rounded-[24px] bg-[#07101f]">
                  <SmartImage
                    src={item.image}
                    alt={item.alt}
                    className="h-[220px] w-full object-cover object-top"
                  />
                </div>

                <div className="p-3">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0057ff]/15 text-[#8fc2ff] ring-1 ring-[#2d74ff]/25">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="text-[26px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[30px]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-[15px] font-normal leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </BioSectionShell>
  );
}
