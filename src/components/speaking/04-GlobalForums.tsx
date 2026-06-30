import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  Landmark,
  Network,
  School,
  Sparkles,
} from "lucide-react";

import { fadeUp } from "../bio/bioMotion";

type AccentName = "gold" | "blue" | "emerald" | "purple" | "orange" | "cyan";

type InstitutionGroup = {
  title: string;
  subtitle: string;
  proofLine: string;
  icon: LucideIcon;
  accent: AccentName;
  featured: string[];
  items: string[];
};

const institutionGroups: InstitutionGroup[] = [
  {
    title: "IIM Network",
    subtitle:
      "Management schools for leadership, entrepreneurship and new-venture thinking",
    proofLine: "Management education • Founder strategy • Leadership rooms",
    icon: Landmark,
    accent: "gold",
    featured: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Bodh Gaya"],
    items: [
      "IIM Ahmedabad",
      "IIM Bangalore",
      "IIM Calcutta",
      "IIM Lucknow",
      "IIM Kozhikode",
      "IIM Indore",
      "IIM Shillong",
      "IIM Rohtak",
      "IIM Ranchi",
      "IIM Raipur",
      "IIM Tiruchirappalli",
      "IIM Udaipur",
      "IIM Kashipur",
      "IIM Nagpur",
      "IIM Visakhapatnam",
      "IIM Bodh Gaya",
      "IIM Amritsar",
      "IIM Sambalpur",
      "IIM Sirmaur",
      "IIM Jammu",
      "IIM Mumbai",
    ],
  },
  {
    title: "IIT Network",
    subtitle:
      "Engineering campuses for deeptech, startup funding and product-led thinking",
    proofLine: "Engineering talent • Deeptech • Startup funding conversations",
    icon: School,
    accent: "blue",
    featured: ["IIT Kharagpur", "IIT Bombay", "IIT Delhi", "IIT Madras"],
    items: [
      "IIT Kharagpur",
      "IIT Bombay",
      "IIT Madras",
      "IIT Kanpur",
      "IIT Delhi",
      "IIT Guwahati",
      "IIT Roorkee",
      "IIT Ropar",
      "IIT Bhubaneswar",
      "IIT Gandhinagar",
      "IIT Hyderabad",
      "IIT Jodhpur",
      "IIT Patna",
      "IIT Indore",
      "IIT Mandi",
      "IIT Varanasi (BHU)",
      "IIT Palakkad",
      "IIT Tirupati",
      "IIT Dhanbad (ISM)",
      "IIT Bhilai",
      "IIT Goa",
      "IIT Jammu",
      "IIT Dharwad",
    ],
  },
  {
    title: "NIT Network",
    subtitle: "Technical campuses, student competitions and founder-evaluation rooms",
    proofLine: "Student builders • Jury panels • Early founder review",
    icon: GraduationCap,
    accent: "emerald",
    featured: ["NIT Durgapur", "NIT Silchar", "NIT Rourkela", "NIT Warangal"],
    items: [
      "NIT Agartala",
      "MNNIT Allahabad",
      "NIT Andhra Pradesh",
      "NIT Arunachal Pradesh",
      "MANIT Bhopal",
      "NIT Calicut",
      "NIT Delhi",
      "NIT Durgapur",
      "NIT Goa",
      "NIT Hamirpur",
      "MNIT Jaipur",
      "NIT Jalandhar",
      "NIT Jamshedpur",
      "NIT Kurukshetra",
      "NIT Manipur",
      "NIT Meghalaya",
      "NIT Mizoram",
      "NIT Nagaland",
      "VNIT Nagpur",
      "NIT Patna",
      "NIT Puducherry",
      "NIT Raipur",
      "NIT Rourkela",
      "NIT Sikkim",
      "NIT Silchar",
      "NIT Srinagar",
      "SVNIT Surat",
      "NIT Karnataka Surathkal",
      "NIT Tiruchirappalli",
      "NIT Uttarakhand",
      "NIT Warangal",
    ],
  },
  {
    title: "Private Universities & Innovation Platforms",
    subtitle: "Future-skills sessions, hackathons, creator-tech and founder learning",
    proofLine: "Hackathons • Future skills • Campus entrepreneurship",
    icon: Sparkles,
    accent: "purple",
    featured: ["UPES", "XLRI", "SP Jain Global", "Sister Nivedita University"],
    items: [
      "UPES",
      "AAFT",
      "UEM",
      "IEM",
      "SRM University",
      "SAGE University",
      "XLRI",
      "SP Jain Global",
      "Manipal University",
      "Sister Nivedita University",
      "Chitkara University",
      "IIMC Innovation Park",
    ],
  },
  {
    title: "Chambers & Industry",
    subtitle: "Business-facing forums across SMEs, chambers, banks and founder networks",
    proofLine: "SMEs • Industry bodies • Investor-facing business forums",
    icon: Building2,
    accent: "orange",
    featured: ["CII", "ICC", "ASSOCHAM", "Axis Bank"],
    items: [
      "CII",
      "ICC",
      "BCC&I",
      "ASSOCHAM",
      "FICCI",
      "IAMAI",
      "TiE",
      "Axis Bank",
      "ICAI",
    ],
  },
  {
    title: "Global Platforms",
    subtitle: "Cross-border stages across AI, investment, gaming and digital economies",
    proofLine: "Central Asia • Dubai • Ghana • China • Korea • Ukraine",
    icon: Network,
    accent: "cyan",
    featured: [
      "Digital Bridge Central Asia",
      "Dubai Investor Round Table",
      "Ghana Business Summit",
      "Techstars",
    ],
    items: [
      "Digital Bridge Central Asia",
      "Kazakhstan",
      "Dubai Investor Round Table",
      "Ghana Business Summit",
      "China VR Film Festival",
      "Korea Game Conference",
      "Games Gathering Ukraine",
      "Seedstars",
      "Techstars",
      "IIDF",
    ],
  },
];

function getAccentClasses(accent: AccentName) {
  const accents: Record<
    AccentName,
    {
      panel: string;
      icon: string;
      title: string;
      pill: string;
      featuredPill: string;
      proof: string;
      glow: string;
    }
  > = {
    gold: {
      panel: "border-amber-300/24 bg-amber-400/[0.055]",
      icon: "bg-amber-300/14 text-amber-200 ring-amber-300/25",
      title: "text-amber-200",
      pill: "border-amber-300/20 bg-amber-300/[0.075] text-amber-50/86",
      featuredPill: "border-amber-200/35 bg-amber-300/[0.16] text-amber-50",
      proof: "text-amber-100/82",
      glow: "from-amber-300 via-yellow-100 to-transparent",
    },
    blue: {
      panel: "border-blue-300/24 bg-blue-400/[0.055]",
      icon: "bg-blue-400/14 text-blue-200 ring-blue-300/25",
      title: "text-blue-200",
      pill: "border-blue-300/20 bg-blue-400/[0.075] text-blue-50/86",
      featuredPill: "border-blue-200/35 bg-blue-400/[0.16] text-blue-50",
      proof: "text-blue-100/82",
      glow: "from-blue-300 via-cyan-100 to-transparent",
    },
    emerald: {
      panel: "border-emerald-300/24 bg-emerald-400/[0.055]",
      icon: "bg-emerald-400/14 text-emerald-200 ring-emerald-300/25",
      title: "text-emerald-200",
      pill: "border-emerald-300/20 bg-emerald-400/[0.075] text-emerald-50/86",
      featuredPill: "border-emerald-200/35 bg-emerald-400/[0.16] text-emerald-50",
      proof: "text-emerald-100/82",
      glow: "from-emerald-300 via-green-100 to-transparent",
    },
    purple: {
      panel: "border-purple-300/24 bg-purple-400/[0.055]",
      icon: "bg-purple-400/14 text-purple-200 ring-purple-300/25",
      title: "text-purple-200",
      pill: "border-purple-300/20 bg-purple-400/[0.075] text-purple-50/86",
      featuredPill: "border-purple-200/35 bg-purple-400/[0.16] text-purple-50",
      proof: "text-purple-100/82",
      glow: "from-purple-300 via-fuchsia-100 to-transparent",
    },
    orange: {
      panel: "border-orange-300/24 bg-orange-400/[0.055]",
      icon: "bg-orange-400/14 text-orange-200 ring-orange-300/25",
      title: "text-orange-200",
      pill: "border-orange-300/20 bg-orange-400/[0.075] text-orange-50/86",
      featuredPill: "border-orange-200/35 bg-orange-400/[0.16] text-orange-50",
      proof: "text-orange-100/82",
      glow: "from-orange-300 via-amber-100 to-transparent",
    },
    cyan: {
      panel: "border-cyan-300/24 bg-cyan-400/[0.055]",
      icon: "bg-cyan-400/14 text-cyan-200 ring-cyan-300/25",
      title: "text-cyan-200",
      pill: "border-cyan-300/20 bg-cyan-400/[0.075] text-cyan-50/86",
      featuredPill: "border-cyan-200/35 bg-cyan-400/[0.16] text-cyan-50",
      proof: "text-cyan-100/82",
      glow: "from-cyan-300 via-blue-100 to-transparent",
    },
  };

  return accents[accent];
}

function InstitutionNetworkCard({
  group,
  index,
}: {
  group: InstitutionGroup;
  index: number;
}) {
  const accentClasses = getAccentClasses(group.accent);
  const Icon = group.icon;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={`relative overflow-hidden rounded-[30px] border p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] transition duration-300 sm:p-6 ${accentClasses.panel}`}
    >
      <motion.div
        className={`absolute left-6 right-6 top-0 h-px bg-gradient-to-r ${accentClasses.glow}`}
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          delay: index * 0.25,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mb-5 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accentClasses.icon}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3
            className={`text-[24px] font-bold leading-[1.05] tracking-[-0.035em] ${accentClasses.title}`}
          >
            {group.title}
          </h3>

          <p className="mt-2 max-w-[600px] text-sm font-normal leading-6 text-white/64">
            {group.subtitle}
          </p>

          <p
            className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${accentClasses.proof}`}
          >
            {group.proofLine}
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-4 flex flex-wrap gap-2">
        {group.featured.map((name) => (
          <span
            key={`${group.title}-featured-${name}`}
            className={`rounded-full border px-3.5 py-2 text-xs font-bold leading-none ${accentClasses.featuredPill}`}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="relative z-10 h-px w-full bg-white/10" />

      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {group.items.map((name) => (
          <span
            key={`${group.title}-${name}`}
            className={`rounded-full border px-3 py-2 text-[11px] font-semibold leading-none sm:text-xs ${accentClasses.pill}`}
          >
            {name}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function GlobalForums() {
  return (
    <section
      id="speaking-footprint"
      className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="speaking-footprint-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.1),transparent_28%),linear-gradient(180deg,#03070d_0%,#061225_52%,#03070d_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[26rem] w-[26rem] rounded-full bg-amber-300/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1680px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto max-w-[1180px] text-center"
        >
          <div className="mx-auto mb-5 h-14 w-px bg-gradient-to-b from-amber-300 to-transparent" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#69aaff]">
            Institutional Speaking Network
          </p>

          <h2
            id="speaking-footprint-title"
            className="mx-auto mt-5 max-w-[1040px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-[48px] md:text-[58px] lg:text-[68px]"
          >
            Academic, industry and global platform network.
          </h2>

          <p className="mx-auto mt-6 max-w-[980px] text-base font-normal leading-8 text-white/70 md:text-[17px]">
            A high-trust map of management schools, engineering campuses,
            chambers, startup forums and international stages where Arijit
            Bhattacharyya has contributed as speaker, mentor, jury member,
            resource person and global panelist.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {institutionGroups.slice(0, 3).map((group, index) => (
            <InstitutionNetworkCard
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {institutionGroups.slice(3).map((group, index) => (
            <InstitutionNetworkCard
              key={group.title}
              group={group}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}