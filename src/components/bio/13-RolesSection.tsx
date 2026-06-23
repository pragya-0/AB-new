import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const careerHighlights = [
  "National Startup India Award Jury",
  "Top 50 Blockchain Thought Leader",
  "Creator of MAKAUT Game Development Syllabus",
  "Consultant, Asian Development Bank",
  "Director Innovation, Private Office of HH Sheikh Ahmed",
  "TEDx Speaker",
];

const authorityGroups = [
  {
    eyebrow: "Government & Jury",
    title: "Jury, Advisor & Public Innovation Roles",
    text: "Authority signals connected with government-backed innovation, startup evaluation, technology programs and ecosystem development.",
    items: [
      "Jury — National Startup India Award",
      "Jury — Smart India Hackathon",
      "STPI Advisory",
      "Government Advisor",
      "Startup Award Committee",
    ],
  },
  {
    eyebrow: "Startup Ecosystem",
    title: "Mentor, Investor & Founder Network",
    text: "Startup mentoring, investment conversations, founder guidance, accelerator networks and business matchmaking platforms.",
    items: [
      "Angel Investor",
      "Founder Mentor",
      "Startup Advisor",
      "Techstars",
      "Seedstars",
      "IIMC Innovation Park",
    ],
  },
  {
    eyebrow: "Education & Institutions",
    title: "Universities, Future Skills & Faculty Platforms",
    text: "Teaching, mentoring and future-skills conversations across universities, business schools and technology institutions.",
    items: [
      "IIT",
      "IIM",
      "SP Jain",
      "IIFT",
      "Jadavpur University",
      "MAKAUT",
      "NIT",
    ],
  },
  {
    eyebrow: "Media & Global Forums",
    title: "Public Voice Across Media & International Platforms",
    text: "Speaking, media presence, international forums and diplomatic networks connected with entrepreneurship and innovation.",
    items: [
      "TEDx Speaker",
      "CNBC India",
      "TV9",
      "Economic Times",
      "Ghana Summit",
      "The Diplomatic Club",
      "World Women Conference",
    ],
  },
];

const marqueeItems = [
  "Asian Development Bank",
  "ICMEI Global Ambassador",
  "Global Wealth Forum",
  "Atal Innovation Mission",
  "WASME",
  "Axis Bank",
  "Dubai Blockchain",
  "Josh Talks",
  "STPI",
  "Startup India",
];

export default function RolesSection() {
  return (
    <BioSectionShell
      eyebrow="Authority Network"
      title="Authority, Advisory & Global Platforms"
      text="A focused credibility layer showing Arijit Bhattacharyya's role as mentor, jury member, advisor, speaker, investor and ecosystem builder across public institutions, startup networks, universities, media and global forums."
      dark
    >
      <motion.article
        {...fadeUp}
        className="mb-7 overflow-hidden rounded-[34px] border border-[#58a0ff]/25 bg-[linear-gradient(135deg,rgba(0,87,255,0.18),rgba(255,255,255,0.03))] p-7 md:p-8"
      >
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#8bb7ff]">
          Career Highlights
        </p>

        <h3 className="max-w-[960px] text-[34px] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[50px]">
          Key Milestones & Recognition
        </h3>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {careerHighlights.map((item) => (
            <div
              key={item}
              className="rounded-[18px] border border-white/10 bg-black/20 p-4"
            >
              <p className="text-[12px] font-black uppercase leading-5 tracking-[0.12em] text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.article>

      <div className="grid gap-5 lg:grid-cols-2">
        {authorityGroups.map((group) => (
          <motion.article
            key={group.title}
            {...fadeUp}
            className="group rounded-[34px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/55 hover:bg-white/[0.065] md:p-8"
          >
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.34em] text-[#58a0ff]">
              {group.eyebrow}
            </p>

            <h3 className="max-w-[720px] text-[36px] font-black leading-[0.9] tracking-[-0.065em] text-white md:text-[52px]">
              {group.title}
            </h3>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-white/65">
              {group.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.17em] text-white/70 transition group-hover:border-[#58a0ff]/35 group-hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="mt-7 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6"
      >
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.34em] text-[#58a0ff]">
              Extended Trust Network
            </p>

            <h3 className="max-w-[840px] text-[34px] font-black leading-[0.9] tracking-[-0.06em] text-white md:text-[50px]">
              Additional platforms, institutions and ecosystem connections.
            </h3>
          </div>

          <p className="max-w-[560px] text-[14px] leading-7 text-white/55">
            Kept compact so the Bio page preserves credibility without becoming
            a resume-style list.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/56"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}