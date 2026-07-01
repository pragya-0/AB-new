import { motion } from "framer-motion";
import BioSectionShell from "./BioSectionShell";
import { fadeUp } from "./bioMotion";

const careerHighlights = [
  "National Startup India Award Jury",
  "Consultant, Asian Development Bank",
  "Director Innovation, Investment & AI — Private Office of HH Sheikh Ahmed",
  "Top 50 Blockchain Thought Leader",
  "International Record Holder in Technology & Finance",
  "Digital Human Pioneer",
  "Mentor to 7000+ Startups Across Global Ecosystems",
  "Associated with 1000+ Tech, Finance & Political Organizations",
  "Creator of MAKAUT Game Development & VR Syllabus",
  "TEDx Speaker",
  "Public Speaker Since 2008",
  "Business Matchmaking Expert",
  "Government Advisor",
  "Community Builder Since 2010",
];

const authorityGroups = [
  {
    eyebrow: "Government & Jury",
    title: "Jury, Advisor & Public Innovation Roles",
    text: "Authority signals connected with government-backed innovation, startup evaluation, technology programs, policy-facing conversations and ecosystem development.",
    items: [
      "Jury — National Startup India Award",
      "Judge — Startup India Award",
      "Jury — Smart India Hackathon",
      "Panelist — Industry 4.0 Govt of India",
      "Government Advisor",
      "STPI Advisory",
      "Star Mentor of Change — NITI Aayog",
      "Startup Award Committee",
      "Smart India Hackathon",
    ],
  },
  {
    eyebrow: "Global Advisory",
    title: "International Advisory & Diplomatic Platforms",
    text: "Global advisory positions and international platforms connected with innovation, investment, diplomacy, media, women leadership, medicine and global business networks.",
    items: [
      "Asian Development Bank Consultant",
      "Senior Advisor — Global Wealth Forum",
      "Global Advisor — UNACCC",
      "ICMEI Global Ambassador",
      "The Diplomatic Club Global Ambassador",
      "World Women Conference Advisory Board",
      "Future of Medicine Foundation USA",
      "WASME Advisory Board",
      "Private Office of HH Sheikh Ahmed",
    ],
  },
  {
    eyebrow: "Startup Ecosystem",
    title: "Mentor, Investor & Founder Network",
    text: "Startup mentoring, investment conversations, founder guidance, accelerator networks, business matchmaking and ecosystem-building platforms across countries.",
    items: [
      "Angel Investor",
      "Founder Mentor",
      "Startup Advisor",
      "Techstars Mentor",
      "SeedStars Switzerland",
      "BGI Portugal",
      "IIDF Russia",
      "IIMC Innovation Park",
      "Founder Institute",
      "ICC Startup Pad",
      "Bong Entrepreneurs",
      "Naman Capital",
      "Ah Ventures",
      "FasterCapital Dubai",
      "Aldhow Capital VC",
    ],
  },
  {
    eyebrow: "Education & Institutions",
    title: "Universities, Future Skills & Faculty Platforms",
    text: "Teaching, mentoring, curriculum, advisory board and future-skills platforms across universities, business schools, technology institutions and innovation councils.",
    items: [
      "IIT",
      "IIM",
      "SP Jain",
      "IIFT",
      "NIT",
      "MAKAUT",
      "Techno International Newtown IIC",
      "Board of Studies",
      "Corporate Advisory Board",
      "Visiting Faculty",
      "Atal Innovation Mission",
      "Brainware University",
      "B. P. Poddar Institute",
    ],
  },
  {
    eyebrow: "Business Chambers",
    title: "Consultant, Panelist & Business Chamber Network",
    text: "Trade bodies, chambers, business networks and institutional platforms connected with technology, entrepreneurship, industry development and cross-border business.",
    items: [
      "TiE Kolkata",
      "CII",
      "Indian Chamber of Commerce",
      "ASSOCHAM",
      "Bengal Chamber of Commerce",
      "BCC&I",
      "FICCI",
      "IAMAI",
      "German American Chamber",
      "ELMA President 2021",
      "Google Business Group",
      "Dun & Bradstreet India",
      "McKinsey & Company",
    ],
  },
  {
    eyebrow: "Media & Global Forums",
    title: "Public Voice Across Media & International Platforms",
    text: "Speaking, media presence, international forums and diplomatic networks connected with entrepreneurship, technology, innovation and future business.",
    items: [
      "TEDx Speaker",
      "CNBC India",
      "TV9",
      "DD National",
      "DD Bangla",
      "Kantipur TV",
      "Josh Talks",
      "Ghana Business Summit",
      "Dubai Blockchain",
      "China VR Film Festival",
      "World Women Conference USA",
      "Diplomatic World Europe",
      "Unicorn Battle USA",
    ],
  },
];

const extendedTrustNetwork = [
  "1000+ Tech, Finance & Political Organizations",
  "McKinsey & Company",
  "Axis Bank",
  "Unicorn Battle USA",
  "HULT Prize",
  "Casual Connect",
  "NASSCOM GDC",
  "IIFT Vivaan",
  "TATA Social",
  "Power of Ideas",
  "CIIE",
  "NEN",
  "TATA Udyog Parbo",
  "Atal Innovation Mission",
  "WASME",
  "STPI",
  "Startup India",
  "Techstars",
  "SeedStars",
  "Founder Institute",
  "IIMC Innovation Park",
  "ICC Startup Pad",
  "Bong Entrepreneurs",
  "World Women Conference",
  "The Diplomatic Club",
  "ICMEI",
  "Global Wealth Forum",
  "German American Chamber",
  "Dun & Bradstreet India",
];

export default function RolesSection() {
  return (
    <BioSectionShell
      eyebrow="Authority Network"
      title="Authority, Advisory & Global Platforms"
      text="A credibility layer showing Arijit Bhattacharyya’s role as mentor, jury member, advisor, speaker, investor and ecosystem builder across public institutions, startup networks, universities, business chambers, media and global forums."
      dark
    >
      <motion.article
        {...fadeUp}
        className="mb-6 overflow-hidden rounded-[28px] border border-[#58a0ff]/25 bg-[linear-gradient(135deg,rgba(0,87,255,0.18),rgba(255,255,255,0.03))] p-5 sm:p-6 md:mb-8 md:rounded-[34px] md:p-8"
      >
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
          Career Highlights
        </p>

        <h3 className="max-w-[980px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
          Key Milestones & Recognition
        </h3>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {careerHighlights.map((item) => (
            <div
              key={item}
              className="rounded-[18px] border border-white/10 bg-black/20 p-4"
            >
              <p className="text-[12px] font-semibold uppercase leading-5 tracking-[0.12em] text-white/82">
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
            className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#58a0ff]/55 hover:bg-white/[0.065] sm:p-6 md:rounded-[34px] md:p-8"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#58a0ff]">
              {group.eyebrow}
            </p>

            <h3 className="max-w-[720px] text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[28px] md:text-[34px]">
              {group.title}
            </h3>

            <p className="mt-5 max-w-[720px] text-[15px] font-normal leading-[1.75] text-white/65 md:text-[16px]">
              {group.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 transition group-hover:border-[#58a0ff]/35 group-hover:text-white sm:text-[10px]"
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
        className="mt-7 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:rounded-[34px] md:p-7"
      >
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#58a0ff]">
              Extended Trust Network
            </p>

            <h3 className="max-w-[840px] text-[30px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
              Additional platforms, institutions and ecosystem connections.
            </h3>
          </div>

          <p className="max-w-[560px] text-[14px] font-normal leading-7 text-white/58 md:text-[15px]">
            Preserved from the legacy biography so credibility is not removed,
            while keeping the section structured and readable on every device.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {extendedTrustNetwork.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-[10px]"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </BioSectionShell>
  );
}
