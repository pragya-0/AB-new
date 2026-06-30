import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeDollarSign,
  Blocks,
  Brain,
  Briefcase,
  
  Code2,
  Cpu,
  Film,
  Gamepad2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Mic2,
  Network,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  text: string;
  detail: string;
  icon: LucideIcon;
  size?: "normal" | "large" | "wide";
};

const timeline: TimelineItem[] = [
  {
    year: "1998",
    title: "Started with INR 49 and Built Virtualinfocom from Kolkata",
    size: "wide",
    text: "At 17, Arijit Bhattacharyya began his founder journey from Kolkata with INR 49, building Virtualinfocom at the intersection of art, technology and practical education.",
    detail:
      "That beginning became the foundation for a long body of work across games, virtual reality, augmented reality, artificial intelligence, blockchain, animation, software, digital media and startup mentoring. It marked the start of a Kolkata-built technology story shaped by imagination, discipline and early belief in India’s digital future.",
    icon: Briefcase,
  },
  {
    year: "2002",
    title: "Early 3D Game Development in India",
    size: "large",
    text: "Virtualinfocom entered India’s early 3D game-development phase, connecting interactive media, digital characters and game-based storytelling.",
    detail:
      "This milestone placed Arijit Bhattacharyya among early Indian creators working seriously with 3D game direction, original characters and interactive entertainment when the local game industry was still young.",
    icon: Gamepad2,
  },
  {
    year: "2003",
    title: "Nokia Partnership and Saudi Arabia Expansion",
    size: "large",
    text: "Virtualinfocom became a game-development partner with Nokia and helped start Saudi Arabia’s first game-development unit.",
    detail:
      "This was an early international expansion moment for Indian game-development talent. It showed that work built from Kolkata could travel into global platform ecosystems and overseas technology markets.",
    icon: Rocket,
  },
  {
    year: "2005",
    title: "6,000 Students and Project-Based Technology Training",
    size: "large",
    text: "The learning ecosystem reached its first 6,000 students and expanded into programming, game development, animation and early Artificial Intelligence and Machine Learning-oriented training.",
    detail:
      "The strength of this phase was practical education. Students were not only learning theory; they were building projects, understanding technology through execution and preparing for real industry demands before modern Generative Artificial Intelligence became mainstream.",
    icon: GraduationCap,
  },
  {
    year: "2006",
    title: "Ashwathama the Immortal and Platform Game Development",
    size: "wide",
    text: "Arijit Bhattacharyya created Ashwathama the Immortal, positioned as India’s first role-playing game, while expanding mythology-led storytelling into mobile and platform-based game development.",
    detail:
      "This became a major mythology-led gaming milestone, bringing Indian storytelling, original characters, platform development and early game innovation into one ambitious creative-technology direction.",
    icon: Gamepad2,
  },
  {
    year: "2008",
    title: "Digital Humans, NEN Mentoring and Microsoft Collaboration",
    size: "wide",
    text: "Arijit Bhattacharyya expanded his work in digital humans, real actors and model-to-character pipelines while becoming a mentor through TATA Udyog Parbo, a National Entrepreneurship Network-linked initiative.",
    detail:
      "This year also carries a Microsoft-linked software development and collaboration reference. Together, these directions strengthened his identity as a technology creator, creative technologist and entrepreneurship mentor, with real actors, models, performers and celebrities becoming digital characters across hundreds of entertainment and game intellectual property projects.",
    icon: Sparkles,
  },
  {
    year: "2010",
    title: "Intel, Microsoft, Opera, Amazon and LG Platform Partnerships",
    size: "wide",
    text: "Virtualinfocom established broader platform and company connections with Intel, Microsoft, Opera, Amazon and LG.",
    detail:
      "This period gave the work stronger technology-market credibility and practical skill alignment. It also strengthened Arijit Bhattacharyya’s larger creation engine across Indian games, celebrity-led virtual reality, augmented reality games with large-scale downloads, mythology-led entertainment, cinema-linked game intellectual property and original character development.",
    icon: Cpu,
  },
  {
    year: "2012",
    title: "Bhutan, Global Education Reach and DeepTechKnowledge Direction",
    size: "wide",
    text: "Arijit Bhattacharyya expanded regional creative-technology work into Bhutan while growing online education reach across Southeast Asia and the United States.",
    detail:
      "This phase connected animation training, regional talent development, early DeepTechKnowledge direction and entrepreneurship exposure across IIT, NIT and IIM-linked environments. It showed his education work moving from classroom training into a wider technology-learning and founder-development direction.",
    icon: Globe2,
  },
  {
    year: "2013",
    title: "IIT Kanpur EDC Mentoring",
    size: "large",
    text: "His startup mentoring footprint extended into premier academic entrepreneurship ecosystems, including IIT Kanpur EDC.",
    detail:
      "This connected technology, startup thinking and practical founder guidance inside one of India’s respected academic entrepreneurship environments.",
    icon: Landmark,
  },
  {
    year: "2014",
    title: "Original Superhero and Mythology Game Universe",
    size: "wide",
    text: "The creative universe strengthened through Indian character properties including Fight of the Legends, Katya, Lalkamal Neelkamal, Banglar Dakat, Sukhu Dukhu and Shaktimaan.",
    detail:
      "This phase deepened his work in Indian character intellectual property, mythology-led storytelling and superhero game universes. It was not only about making games; it was about building characters, worlds and recognisable story systems for Indian audiences.",
    icon: Sparkles,
  },
  {
    year: "2016",
    title: "Blockchain, Smart Cities, NTPC Training and Institutional Mentoring",
    size: "wide",
    text: "He moved deeper into blockchain applications, future technology, smart-city thinking, emerging digital infrastructure, movie-based game direction, institutional training and startup mentoring.",
    detail:
      "By this phase, his work connected IIT mentoring, NIT mentoring, NTPC-linked training, entrepreneurship cells, resource-person roles and the broader entertainment-technology direction of 360+ models and actors becoming digital characters. The year represents a wider convergence of technology, education, institutional guidance and character-led digital innovation.",
    icon: Blocks,
  },
  {
    year: "2017",
    title: "Boss 2 Game, Shaktimaan, Axis Bank and Actor-Led Game IP",
    size: "wide",
    text: "Boss 2 became a landmark entertainment-technology moment, bringing Bengali cinema into game-based promotion as Bengal’s first movie-based game.",
    detail:
      "The Boss 2 game was connected with the actual Boss 2 cast: Jeet, Subhashree Ganguly, Nusraat Faria and Indraneil Sengupta. The same year also carried Shaktimaan as an Indian superhero game-character direction, separate actor-led game intellectual property references such as Nilanjana, Priyanka Sarkar, Tushagni or Tushagna, Arjun Chakraborty, Amrita, Subhashree or Shubhoshree the Tigress, and Axis Bank-linked resource-person work for SME, MSME, business and entrepreneurship sessions.",
    icon: Film,
  },
  {
    year: "2018",
  title: "Riding Tiger with Arijit and 200+ Global Conversations",
    size: "wide",
    text: "He launched Riding Tiger with Arijit, a podcast and conversation platform built around entrepreneurs, innovators, investors, celebrities, change-makers and impact creators.",
    detail:
      "The platform grew into 200+ global podcasts and conversations, extending his voice as a connector of founders, business leaders, investors, policymakers, creators and future-focused leaders across innovation, leadership, startups and global change.",
    icon: Mic2,
  },
  {
    year: "2020",
    title: "World Leader Summit Dubai, Future Medicine and ADB Consulting",
    size: "wide",
    text: "He built World Leader Summit Dubai into a leadership and investor platform, connecting 20 European countries and 20 investors on the 20th day of 2020.",
    detail:
      "The platform later became a recognisable international brand. The same year also expanded his advisory and consulting direction through Future Medicine and Asian Development Bank-related consulting across development, innovation and international institutional ecosystems.",
    icon: Network,
  },
  {
    year: "2021",
    title: "GenAI, Blockchain, Robotics, Seedstars and Stanford Seed",
    size: "wide",
    text: "He continued future-skills capability-building around blockchain applications, robotics and Generative Artificial Intelligence, creating a bridge toward the later GenAI film and creative-production phase.",
    detail:
      "This year also carries Seedstars — Business Mentor and Startup and SME Mentoring Network from 2021 onwards. Stanford Seed is included carefully as a speaker, entrepreneurship and scale-up ecosystem reference, without presenting it as a dated formal appointment.",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Ghana Summit with the Vice President of Ghana",
    size: "large",
    text: "He spoke at the Ghana Africa and Ghana Business Summit with the Vice President of Ghana on Venture Capital, investment and Africa’s emerging business ecosystem.",
    detail:
      "This milestone strengthened his international speaking footprint across Africa, investment conversations, entrepreneurship development and business ecosystem building.",
    icon: Users,
  },
  {
    year: "2023",
    title: "GenAI Movies, Smart Cities, Central Asia and Himachal Direction",
    size: "wide",
    text: "He expanded into Generative Artificial Intelligence movies, videos, music and advertising while continuing smart-city partnership conversations across Asia and the United Arab Emirates.",
    detail:
      "The same year strengthened his Central Asia direction through keynote-level speaking and also marked the beginning of a spiritual and wellness-oriented venture direction in Himachal. This kept the story connected across creative technology, urban innovation, international platforms and human development.",
    icon: Brain,
  },
  {
    year: "2024",
    title: "USA Venture Capital Fund and India’s First GenAI Movie",
    size: "wide",
    text: "He expanded into a USA-linked Venture Capital fund direction and released India’s first Generative Artificial Intelligence movie.",
    detail:
      "This positioned Arijit Bhattacharyya at the intersection of investment, startup funding, Artificial Intelligence-led filmmaking, digital storytelling and venture-building.",
    icon: BadgeDollarSign,
  },
  {
    year: "2025",
    title: "DeepTechKnowledge Execution",
    size: "wide",
    text: "DeepTechKnowledge, powered by Virtualinfocom, continues as a technology-education platform with industry-led courses and project-based learning.",
    detail:
      "The direction includes an Artificial Intelligence-powered learning assistant and an interactive coding platform, keeping the education work aligned with practical creation, emerging skills and founder-oriented technology learning.",
    icon: Code2,
  },
  {
    year: "2026",
    title: "12 Products Across 12 Industries, IIT and XLRI Direction",
    size: "wide",
    text: "The current direction is toward building 12 products across 12 industries, with partnership directions involving IIT and XLRI.",
    detail:
      "This marks the next direction of the journey: moving from education, games, media, technology and investment into product-led innovation across multiple industries.",
    icon: Layers3,
  },
  {
    year: "Legacy",
    title: "Built on People, Respect and Innovation",
    size: "large",
    text: "At the heart of the journey is a belief that strong work is built by people who enjoy creating and are treated fairly, honestly and with respect.",
    detail:
      "From Kolkata, India, Arijit Bhattacharyya’s work has continued to combine imagination, innovation and practical problem-solving. The legacy is not only technology or products, but a team-led culture working toward one idea: building solutions for today and products and services for tomorrow.",
    icon: HeartPulse,
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function JourneyTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % timeline.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeItem = timeline[activeIndex];
  const ActiveIcon = activeItem.icon;

  const longTitle = activeItem.title.length > 62;

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? timeline.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % timeline.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#02050b] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0057ff]/15 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-260px] h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-[180px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,87,255,0.12),transparent_42%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1320px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="mx-auto mb-7 max-w-[1040px] text-center sm:mb-8">
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff] sm:text-sm"
          >
            Journey Since 1998
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[1040px] text-[32px] font-extrabold leading-[1.04] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[54px]"
          >
            From Virtualinfocom to a Future-Tech Global Ecosystem
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[850px] text-[15px] font-normal leading-7 text-white/64 sm:text-[17px] sm:leading-8"
          >
            A journey from Kolkata to global technology, game development,
            education, virtual reality, artificial intelligence, blockchain,
            startup support, Venture Capital, Generative Artificial Intelligence
            films and international business ecosystems.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_28px_90px_rgba(0,87,255,0.12)] backdrop-blur sm:rounded-[34px] sm:p-5 lg:p-6"
        >
          <motion.article
            key={`${activeItem.year}-${activeItem.title}`}
            initial={{ opacity: 0, y: 16, scale: 0.988 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.42 }}
            className="overflow-hidden rounded-[26px] border border-[#0057ff]/30 bg-[#061426]/95 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_0_54px_rgba(0,87,255,0.12)]"
          >
            <div className="border-b border-white/10 p-5 sm:p-6 lg:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-[#4d8cff] bg-[#020b18] shadow-[0_0_42px_rgba(0,87,255,0.38)] sm:h-[68px] sm:w-[68px]">
                    <ActiveIcon className="h-7 w-7 text-[#4d8cff] sm:h-8 sm:w-8" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff]">
                      {activeItem.year}
                    </p>

                    <h3
                      className={`mt-2 max-w-[1080px] font-extrabold leading-[1.06] tracking-[-0.045em] text-white ${
                        longTitle
                          ? "text-[27px] sm:text-[34px] lg:text-[40px]"
                          : "text-[30px] sm:text-[38px] lg:text-[46px]"
                      }`}
                    >
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Milestone
                </span>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.04fr_0.96fr] lg:p-7">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
                <p className="text-[16px] font-normal leading-8 text-white/82 sm:text-[18px] sm:leading-9">
                  {activeItem.text}
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-black/15 p-5">
                <p className="text-[14px] font-normal leading-7 text-white/62 sm:text-[15px] sm:leading-8">
                  {activeItem.detail}
                </p>
              </div>
            </div>
          </motion.article>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <button
                type="button"
                aria-label="Previous timeline milestone"
                onClick={goPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#4d8cff]/60 hover:text-[#4d8cff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff]"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                aria-label="Next timeline milestone"
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#4d8cff]/60 hover:text-[#4d8cff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex max-w-full items-center gap-2 overflow-x-auto pb-1 lg:justify-end">
              {timeline.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${item.year}-chip-${item.title}`}
                    type="button"
                    aria-label={`Go to ${item.year}: ${item.title}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff] ${
                      isActive
                        ? "border-[#4d8cff] bg-[#0057ff]/20 text-[#4d8cff]"
                        : "border-white/10 bg-white/[0.035] text-white/38 hover:border-[#4d8cff]/40 hover:text-white/70"
                    }`}
                  >
                    {item.year}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
