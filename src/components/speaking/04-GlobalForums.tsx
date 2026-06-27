import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Globe2,
  GraduationCap,
  Landmark,
  Network,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { fadeUp } from "../bio/bioMotion";

const stats = [
  { value: "2100+", label: "Events & forums", icon: CalendarDays },
  { value: "102+", label: "Country network", icon: Globe2 },
  { value: "7000+", label: "Startups mentored", icon: Rocket },
  { value: "10000+", label: "Students trained", icon: GraduationCap },
];

const institutionGroups = [
  {
    title: "IIM Network",
    icon: Landmark,
    accent: "gold",
    items: [
      "IIM Calcutta",
      "IIM Ahmedabad",
      "IIM Bodhgaya",
      "IIM Ranchi",
      "IIM Raipur",
      "IIM Shillong",
      "IIM Rohtak",
      "IIM Sambalpur",
      "IIMC Innovation Park",
    ],
  },
  {
    title: "IIT Network",
    icon: School,
    accent: "blue",
    items: [
      "IIT Kharagpur",
      "IIT Bombay",
      "IIT Madras",
      "IIT Kanpur",
      "IIT Delhi",
      "IIT Guwahati",
      "IIT Bhubaneswar",
      "IIT Hyderabad",
    ],
  },
  {
    title: "NIT Network",
    icon: GraduationCap,
    accent: "emerald",
    items: [
      "NIT Trichy",
      "NIT Rourkela",
      "NIT Kurukshetra",
      "NIT Silchar",
      "NIT Durgapur",
      "NIT Meghalaya",
      "NIT Raipur",
      "NIT Agartala",
      "NIT Jamshedpur",
      "NIT Patna",
      "NIT Delhi",
    ],
  },
  {
    title: "Private Universities",
    icon: Sparkles,
    accent: "purple",
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
    ],
  },
  {
    title: "Chambers & Industry",
    icon: Building2,
    accent: "orange",
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
    icon: Network,
    accent: "cyan",
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

function getAccentClasses(accent: string) {
  const accents: Record<
    string,
    {
      panel: string;
      icon: string;
      title: string;
      pill: string;
      glow: string;
    }
  > = {
    gold: {
      panel: "border-amber-300/20 bg-amber-400/[0.055]",
      icon: "bg-amber-300/14 text-amber-200 ring-amber-300/25",
      title: "text-amber-200",
      pill: "border-amber-300/30 bg-amber-300/10 text-amber-50",
      glow: "from-amber-300 via-yellow-100 to-transparent",
    },
    blue: {
      panel: "border-blue-300/20 bg-blue-400/[0.055]",
      icon: "bg-blue-400/14 text-blue-200 ring-blue-300/25",
      title: "text-blue-200",
      pill: "border-blue-300/30 bg-blue-400/10 text-blue-50",
      glow: "from-blue-300 via-cyan-100 to-transparent",
    },
    emerald: {
      panel: "border-emerald-300/20 bg-emerald-400/[0.055]",
      icon: "bg-emerald-400/14 text-emerald-200 ring-emerald-300/25",
      title: "text-emerald-200",
      pill: "border-emerald-300/30 bg-emerald-400/10 text-emerald-50",
      glow: "from-emerald-300 via-green-100 to-transparent",
    },
    purple: {
      panel: "border-purple-300/20 bg-purple-400/[0.055]",
      icon: "bg-purple-400/14 text-purple-200 ring-purple-300/25",
      title: "text-purple-200",
      pill: "border-purple-300/30 bg-purple-400/10 text-purple-50",
      glow: "from-purple-300 via-fuchsia-100 to-transparent",
    },
    orange: {
      panel: "border-orange-300/20 bg-orange-400/[0.055]",
      icon: "bg-orange-400/14 text-orange-200 ring-orange-300/25",
      title: "text-orange-200",
      pill: "border-orange-300/30 bg-orange-400/10 text-orange-50",
      glow: "from-orange-300 via-amber-100 to-transparent",
    },
    cyan: {
      panel: "border-cyan-300/20 bg-cyan-400/[0.055]",
      icon: "bg-cyan-400/14 text-cyan-200 ring-cyan-300/25",
      title: "text-cyan-200",
      pill: "border-cyan-300/30 bg-cyan-400/10 text-cyan-50",
      glow: "from-cyan-300 via-blue-100 to-transparent",
    },
  };

  return accents[accent] ?? accents.blue;
}

export default function GlobalForums() {
  return (
    <section
      id="institutions"
      className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-8 lg:px-10"
      aria-labelledby="institutions-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.1),transparent_28%),linear-gradient(180deg,#03070d_0%,#061225_56%,#03070d_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[26rem] w-[26rem] rounded-full bg-amber-300/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...fadeUp}>
            <div className="mb-5 h-20 w-px bg-gradient-to-b from-amber-300 to-transparent" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#69aaff]">
              Verified Speaking Footprint
            </p>

            <h2
              id="institutions-title"
              className="mt-5 max-w-[780px] text-[36px] font-extrabold leading-[1] tracking-[-0.045em] text-white sm:text-[46px] md:text-[56px] lg:text-[64px]"
            >
              From elite institutions to global innovation platforms.
            </h2>

            <p className="mt-6 max-w-[900px] text-base font-normal leading-8 text-white/68 md:text-[17px]">
              A public-speaking, resource-person and global-panelist footprint
              across premier academic institutions, startup ecosystems,
              government platforms, chambers of commerce and international
              innovation forums.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,87,255,0.12)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-200 ring-1 ring-blue-300/20">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-white">
                  {value}
                </p>
                <p className="mt-2 text-xs font-bold text-white/80">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {institutionGroups.map(
              ({ title, items, icon: Icon, accent }, groupIndex) => {
                const accentClasses = getAccentClasses(accent);

                return (
                  <article
                    key={title}
                    className={`relative min-h-[260px] overflow-hidden border-b border-r border-white/10 p-6 sm:p-7 ${accentClasses.panel}`}
                  >
                    <motion.div
                      className={`absolute left-6 right-6 top-0 h-px bg-gradient-to-r ${accentClasses.glow}`}
                      initial={{ x: "-115%", opacity: 0.35 }}
                      animate={{
                        x: ["-115%", "115%"],
                        opacity: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        delay: groupIndex * 0.55,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10 mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accentClasses.icon}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3
                        className={`text-[22px] font-bold leading-tight tracking-[-0.03em] ${accentClasses.title}`}
                      >
                        {title}
                      </h3>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2.5">
                      {items.map((name, itemIndex) => (
                        <motion.span
                          key={name}
                          initial={{ opacity: 0.78, scale: 1 }}
                          animate={{
                            opacity: [0.78, 1, 0.78],
                            scale: [1, 1.045, 1],
                            boxShadow: [
                              "0 0 0 rgba(245,158,11,0)",
                              "0 0 24px rgba(245,158,11,0.18)",
                              "0 0 0 rgba(245,158,11,0)",
                            ],
                          }}
                          transition={{
                            duration: 2.7,
                            delay: groupIndex * 0.25 + itemIndex * 0.11,
                            repeat: Infinity,
                            repeatDelay: 4.5,
                          }}
                          className={`rounded-full border px-3 py-2 text-xs font-semibold leading-none sm:text-[13px] ${accentClasses.pill}`}
                        >
                          {name}
                        </motion.span>
                      ))}
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-6 flex items-center justify-center gap-3 text-center text-sm font-normal text-white/65"
        >
          <ShieldCheck className="h-4 w-4 text-[#8fc2ff]" />
          <p>
            Recognition across academia, industry, government, chambers and
            global innovation ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
