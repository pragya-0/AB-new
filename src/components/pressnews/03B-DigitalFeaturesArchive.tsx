import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenText,
  Globe2,
  Mic,
  Newspaper,
  PlayCircle,
  Quote,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type FeatureKind = "read" | "watch";

type DigitalFeature = {
  id: string;
  kind: FeatureKind;
  eyebrow: string;
  source: string;
  title: string;
  summary: string;
  sneakPeek: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
};

const digitalFeatures: DigitalFeature[] = [
  {
    id: "brilliantread-interview",
    kind: "read",
    eyebrow: "Interview",
    source: "BrilliantRead",
    title: "Angel Investor, Serial Entrepreneur, Mentor & TEDx Speaker",
    summary:
      "A long-form entrepreneurial interview covering Arijit Bhattacharyya’s founder journey, startup work, mentoring and public leadership profile.",
    sneakPeek:
      "A founder-focused interview exploring entrepreneurship, investment, mentoring, TEDx speaking and the journey behind building technology ventures.",
    url: "https://www.brilliantread.com/interview-with-arijit-bhattacharyya-angel-investor-serial-entrepreneur-mentor-tedx-speaker/",
    icon: Newspaper,
  },
  {
    id: "thinking-aloud-interview",
    kind: "read",
    eyebrow: "Exclusive Interview",
    source: "Thinking Aloud",
    title: "Exclusive Interview with Founder & CEO, Virtualinfocom",
    summary:
      "A business-media interview reference positioning Arijit Bhattacharyya as Founder and CEO of Virtualinfocom within a startup and entrepreneurship context.",
    sneakPeek:
      "A business-media interview reference connecting Arijit’s founder identity with Virtualinfocom, entrepreneurship and startup ecosystem credibility.",
    url: "https://stage.thinkingaloud.in/index.php?page=6",
    icon: BookOpenText,
  },
  {
    id: "ask-an-investor",
    kind: "watch",
    eyebrow: "Podcast / Video",
    source: "Ask An Investor",
    title: "Serial Entrepreneur, Technologist & Angel Investor",
    summary:
      "A video conversation focused on entrepreneurship, investing, technology, business building and startup ecosystem thinking.",
    sneakPeek:
      "A video conversation around angel investing, founder mindset, technology, business building and startup ecosystem thinking.",
    url: "https://www.youtube.com/watch?v=MsrJTktx7HA",
    image: "https://img.youtube.com/vi/MsrJTktx7HA/hqdefault.jpg",
    icon: PlayCircle,
  },
  {
    id: "success-tales",
    kind: "watch",
    eyebrow: "Founder Profile",
    source: "Success Tales",
    title: "Founder & CEO, Virtualinfocom",
    summary:
      "A video-led founder profile presenting Arijit Bhattacharyya as a serial entrepreneur, angel investor, technologist and globe trotter.",
    sneakPeek:
      "A founder profile presenting Arijit as a serial entrepreneur, angel investor, technologist and global business personality.",
    url: "https://www.youtube.com/watch?v=7q-4E_QpnVg",
    image: "https://img.youtube.com/vi/7q-4E_QpnVg/hqdefault.jpg",
    icon: Mic,
  },
  {
    id: "thinkers360-profile",
    kind: "read",
    eyebrow: "Thought Leader Profile",
    source: "Thinkers360",
    title: "Founder at Virtualinfocom",
    summary:
      "A thought-leader profile covering AI, AR, VR, blockchain, entrepreneurship, startups, innovation and media experience.",
    sneakPeek:
      "A thought-leader profile connecting AI, AR, VR, blockchain, startups, entrepreneurship, innovation and future technology conversations.",
    url: "https://www.thinkers360.com/tl/profiles/view/3513",
    icon: UserRoundCheck,
  },
  {
    id: "digitalconfex-speaker",
    kind: "read",
    eyebrow: "Speaker Profile",
    source: "DigitalConfex",
    title: "Next-Gen Gaming & New Technologies",
    summary:
      "A speaker profile connecting Arijit Bhattacharyya with gaming, deep technology, Startup India jury credibility and global innovation platforms.",
    sneakPeek:
      "A speaker-profile reference around next-generation gaming, new technologies, founder credibility and innovation-led public speaking.",
    url: "https://digitalconfex.com/speaker/arijit-bhattacharyya/",
    icon: Sparkles,
  },
  {
    id: "iimcip-investor-profile",
    kind: "read",
    eyebrow: "Investor Profile",
    source: "IIM Calcutta Innovation Park",
    title: "Investor & Mentor Profile",
    summary:
      "An institutional profile connecting Arijit Bhattacharyya with startup mentoring, investment, VR, AR and technology advisory.",
    sneakPeek:
      "An institutional investor and mentor profile connecting startup guidance, investment, VR, AR, technology and ecosystem-building work.",
    url: "https://www.iimcip.org/our-network/investor/profile?det=MjQ4",
    icon: Globe2,
  },
  {
    id: "diplomatic-club-profile",
    kind: "read",
    eyebrow: "Global Profile",
    source: "The Diplomatic Club",
    title: "Entrepreneur Since 1998",
    summary:
      "A global profile presenting Arijit Bhattacharyya across entrepreneurship, public speaking, TEDx, diplomacy, technology and international networks.",
    sneakPeek:
      "A global profile positioning Arijit across entrepreneurship, public speaking, TEDx, diplomacy, international networks and technology ecosystems.",
    url: "https://www.thediplomaticclub.org/arijit-bhattacharyya/",
    icon: Globe2,
  },
];

function SourcePreview({ item }: { item: DigitalFeature }) {
  const Icon = item.icon;

  if (item.kind === "watch" && item.image) {
    return (
      <div className="relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[#07111f] sm:w-[210px] sm:shrink-0">
        <img
          src={item.image}
          alt={`${item.source} video thumbnail featuring Arijit Bhattacharyya`}
          loading="lazy"
          className="h-48 w-full object-cover sm:h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
            <PlayCircle className="h-6 w-6" />
          </div>

          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Video
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.35rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 sm:w-[210px] sm:shrink-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100">
          <Icon className="h-6 w-6" />
        </div>

        <Quote className="h-7 w-7 text-blue-200" />
      </div>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
        Article Sneak Peek
      </p>

      <p className="mt-3 text-sm font-semibold leading-7 text-[#07111f]">
        {item.sneakPeek}
      </p>
    </div>
  );
}

export default function DigitalFeaturesArchive() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,.11),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(14,165,233,.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
        >
          <div>
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-700 shadow-sm">
              <Newspaper className="mr-2 h-4 w-4" />
              Digital Features & Interviews
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.04] tracking-[-0.04em] text-[#07111f] sm:text-5xl lg:text-6xl">
              Founder interviews, online profiles and media conversations.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            A curated archive of interview-style features, speaker profiles,
            investor profiles and media conversations covering entrepreneurship,
            startup mentoring, investment, VR, AR, AI, gaming and global
            innovation platforms.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {digitalFeatures.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(index * 0.035, 0.18),
              }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="flex flex-col gap-0 sm:flex-row">
                <SourcePreview item={item} />

                <div className="flex min-h-[320px] flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                          {item.source}
                        </p>

                        <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                          {item.eyebrow}
                        </div>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#07111f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-normal leading-8 text-slate-600">
                      {item.summary}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${
                      item.kind === "watch" ? "Watch" : "Read"
                    } source: ${item.title}`}
                    className="mt-6 inline-flex w-fit items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-[#07111f] transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.kind === "watch" ? "Watch Source" : "Read Source"}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}