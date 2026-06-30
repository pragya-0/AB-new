import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Binary,
  BrainCircuit,
  Building2,
  Clapperboard,
  Cpu,
  Film,
  Gem,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Orbit,
  Rocket,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TimelineItem = {
  period: string;
  title: string;
  text: string;
  tags: string[];
  icon: LucideIcon;
  accent: string;
  gold?: boolean;
};

const timeline: TimelineItem[] = [
  {
    period: "1998",
    title: "Virtualinfocom Begins",
    text:
      "The founder journey begins with Virtualinfocom, technology training, software work, game development, animation and original digital IP creation from Kolkata.",
    tags: ["Virtualinfocom", "Founder Journey", "Digital IP"],
    icon: Rocket,
    accent: "#1b7cff",
  },
  {
    period: "2000",
    title: "Programming & Grassroots Technology Education",
    text:
      "The work expands into programming, technology education and grassroots learning initiatives, connecting students and young creators with early software skills.",
    tags: ["Programming", "Education", "Training"],
    icon: Binary,
    accent: "#22d3ee",
  },
  {
    period: "2002",
    title: "Early 3D Game & Indian Game Development Direction",
    text:
      "The journey moves deeper into early 3D game development, Indian game production, characters, animation pipelines and interactive entertainment technology.",
    tags: ["3D Games", "Game Development", "Animation"],
    icon: Cpu,
    accent: "#8b5cf6",
  },
  {
    period: "2004",
    title: "VRML, Immersive Web & Early Virtual Reality",
    text:
      "The technology direction expands into VRML, immersive web thinking and early virtual reality experiments before VR became mainstream in India.",
    tags: ["VRML", "Virtual Reality", "Immersive Web"],
    icon: Orbit,
    accent: "#06b6d4",
  },
  {
    period: "2006",
    title: "Games, RPG, Animation & VR Direction",
    text:
      "The ecosystem moves into PC games, RPG direction, animation, virtual reality, interactive storytelling and entertainment technology-led IP.",
    tags: ["Games", "RPG", "VR"],
    icon: Clapperboard,
    accent: "#3b82f6",
  },
  {
    period: "2008–Present",
    title: "Angel Investor, Business Chambers & Startup Ecosystem",
    text:
      "The angel investor journey begins and continues across startups, founder networks, ICC, Infocom Startup Forum, business chambers and entrepreneurship platforms.",
    tags: ["Angel Investor", "Startup Ecosystem", "Ongoing"],
    icon: Handshake,
    accent: "#22c55e",
  },
  {
    period: "2015",
    title: "Middle East, Southeast Asia & Global Expansion",
    text:
      "The work expands further into Middle East and Southeast Asia networks, international business connections, cosplay ecosystems and global market access.",
    tags: ["Global Expansion", "Middle East", "Southeast Asia"],
    icon: Globe2,
    accent: "#f97316",
  },
  {
    period: "2016",
    title: "Blockchain, Movie-Based Games & IP Ecosystem",
    text:
      "The journey connects blockchain, future technology, movie-based games, superhero characters, original IP and entertainment technology ecosystems.",
    tags: ["Blockchain", "Movie Games", "IP"],
    icon: Shield,
    accent: "#ef4444",
  },
  {
    period: "2018",
    title: "Riding Tiger Platform & Learning Direction",
    text:
      "The Riding Tiger direction strengthens content-led learning, entrepreneurship conversations, founder education and global knowledge-sharing formats.",
    tags: ["Riding Tiger", "Learning", "Founder Conversations"],
    icon: GraduationCap,
    accent: "#facc15",
  },
  {
    period: "2019",
    title: "World Leader Summit Direction",
    text:
      "The global platform direction expands through World Leader Summit, connecting leadership, innovation, entrepreneurship, policy, business and international communities.",
    tags: ["World Leader Summit", "Leadership", "Global Platform"],
    icon: Network,
    accent: "#38bdf8",
  },
  {
    period: "2020",
    title: "Dubai Investor Platforms, Future of Medicine & ADB Work",
    text:
      "The work connects Dubai investor platforms, future-focused industry conversations, startup ecosystems, global business matchmaking and Asian Development Bank consultant work.",
    tags: ["Dubai", "ADB", "Investor Platforms"],
    icon: Building2,
    accent: "#60a5fa",
  },
  {
    period: "2021",
    title: "Africa, Coinnovate Ventures & Global Startup Networks",
    text:
      "The journey expands through Africa-linked leadership platforms, Coinnovate Ventures, startup acceleration, investment conversations and global founder ecosystems.",
    tags: ["Africa", "Coinnovate", "Startups"],
    icon: Lightbulb,
    accent: "#a78bfa",
  },
  {
    period: "2023",
    title: "GenAI, Smart Cities & Deeptech Direction",
    text:
      "The direction moves into GenAI, AI-led content, music videos, smart city thinking, deeptech, digital transformation and future industry applications.",
    tags: ["GenAI", "Smart Cities", "Deeptech"],
    icon: BrainCircuit,
    accent: "#ec4899",
  },
  {
    period: "2025",
    title: "GenAI Movie & Digital Human Direction",
    text:
      "The creative technology direction expands into GenAI movie experiments, digital humans, AI-led storytelling, characters and future media production.",
    tags: ["GenAI Movie", "Digital Human", "Future Media"],
    icon: Film,
    accent: "#d946ef",
  },
  {
    period: "2026",
    title: "8 Metals, Cera Heat & Future Industry Thinking",
    text:
      "The journey continues into advanced materials, energy, Cera Heat, 8 Metals, symbolic geometry and future industry exploration.",
    tags: ["8 Metals", "Cera Heat", "Future Industry"],
    icon: Gem,
    accent: "#d9a73a",
    gold: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`relative overflow-hidden rounded-[26px] border bg-white/[0.055] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl transition duration-500 sm:p-6 ${
        item.gold
          ? "border-[#d9a73a]/35 hover:border-[#d9a73a]/85"
          : "border-white/10 hover:border-blue-300/70"
      }`}
      style={
        {
          "--accent": item.accent,
        } as CSSProperties & Record<string, string>
      }
      animate={{
        boxShadow: [
          "0 24px 70px rgba(0,0,0,0.20)",
          `0 28px 90px ${item.accent}42`,
          "0 24px 70px rgba(0,0,0,0.20)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 4,
          delay: index * 0.25,
          ease: "easeInOut",
        },
        default: { type: "spring", stiffness: 240, damping: 22 },
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,var(--accent),transparent_30%),radial-gradient(circle_at_92%_100%,var(--accent),transparent_28%)] opacity-[0.16]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 flex gap-5">
        <motion.div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-white shadow-[0_0_35px_rgba(0,87,255,0.22)] ${
            item.gold ? "border-[#d9a73a]/55" : "border-white/15"
          }`}
          style={{
            background: item.gold
              ? "linear-gradient(135deg, rgba(217,167,58,0.95), rgba(116,72,12,0.95))"
              : `linear-gradient(135deg, ${item.accent}, #06111f)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 4,
            delay: index * 0.25,
            ease: "easeInOut",
          }}
        >
          <Icon size={23} strokeWidth={1.8} />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] ${
                item.gold
                  ? "bg-[#d9a73a]/15 text-[#f2c766]"
                  : "bg-blue-400/10 text-blue-100"
              }`}
            >
              {item.period}
            </span>

            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.accent }}
            />
          </div>

          <h3 className="text-[22px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[26px]">
            {item.title}
          </h3>

          <p className="mt-4 text-[14px] font-normal leading-7 text-white/65 sm:text-[15px]">
            {item.text}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                  item.gold
                    ? "border-[#d9a73a]/30 bg-[#d9a73a]/10 text-[#f2c766]"
                    : "border-blue-300/15 bg-blue-400/8 text-blue-100"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function VenturesTimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-4 py-18 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/12 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[150px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1450px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.06 }}
      >
        <div className="mx-auto max-w-[1080px] text-center">
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-300"
          >
            Founder History • 1998 To 2026
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[980px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.055em] text-white sm:text-[44px] md:text-[56px]"
          >
            A 1998–2026 journey across technology, games, AI, investment and
            global ecosystems.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[900px] text-[16px] font-normal leading-8 tracking-[-0.01em] text-white/66 md:text-[18px]"
          >
            From Virtualinfocom in 1998 to AI, VR, AR, blockchain, startup
            mentoring, angel investing, World Leader Summit, GenAI storytelling
            and future industry ventures.
          </motion.p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {timeline.map((item, index) => (
              <TimelineCard key={item.period} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
