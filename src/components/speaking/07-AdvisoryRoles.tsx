import { motion } from "framer-motion";

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
  },
  {
    title: "Student Innovation",
    text: "Future-skills conversations with students, institutions and young builders.",
    image: `${mentoring}4.jpg`,
  },
  {
    title: "Startup Ecosystems",
    text: "Mentoring across startup communities, accelerators and business-growth platforms.",
    image: `${mentoring}8.jpg`,
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
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.38em] text-[#6faaff]">
              From Visibility To Impact
            </p>

            <h3 className="text-[44px] font-black leading-[0.9] tracking-[-0.07em] text-white md:text-[72px]">
              Turning experience into founder growth and future skills.
            </h3>

            <p className="mt-7 text-[17px] leading-8 text-white/64">
              The mentoring story is not only about appearing on stages. It is
              about helping founders sharpen ideas, guiding students toward
              emerging careers, and building stronger innovation ecosystems
              through practical, hands-on sessions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {impactStats.map(([value, label]) => (
              <div
                key={label}
                className="border-t border-white/14 pt-5"
              >
                <p className="text-[42px] font-black leading-none tracking-[-0.07em] text-[#69aaff]">
                  {value}
                </p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-5">
         {mentoringMoments.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 rounded-[34px] border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[0.42fr_0.58fr] md:items-center"
            >
              <div className="overflow-hidden rounded-[24px] bg-[#07101f]">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover object-top"
                />
              </div>

              <div className="p-3">
               

                <h4 className="text-[30px] font-black leading-[0.95] tracking-[-0.055em] text-white">
                  {item.title}
                </h4>

                <p className="mt-4 text-[15px] leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </BioSectionShell>
  );
}