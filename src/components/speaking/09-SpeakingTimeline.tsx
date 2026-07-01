import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

type TimelineItem = {
  title: string;
  location: string;
  meta: string;
  text: string;
  image: string;
  fallbacks?: string[];
  alt: string;
  imageWrapClass: string;
  imageClass: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "Axis Bank Evolve",
    location: "India",
    meta: "SME Knowledge • Business Growth",
    text: "A business and knowledge platform focused on entrepreneurship, growth strategy and practical innovation for India’s SME ecosystem.",
    image: "/assets/press/2020/axis-bank.jpg",
    fallbacks: [
      "/assets/press/2020/axis-bank-spk.jpg",
      "/assets/pressnews/axis-bank-evolve-sme-knowledge-series-speaking.jpg",
      "/assets/pressnews/01_USE_NOW/Corporate_Speaking___Business_Ecosystem/axis-bank-evolve-sme-knowledge-series-speaking.jpg",
      "/assets/speaking/axisbank.jpg",
    ],
    alt: "Arijit Bhattacharyya speaking at Axis Bank Evolve business knowledge platform",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "TiE Ahmedabad",
    location: "Ahmedabad",
    meta: "Entrepreneurship • Founder Network",
    text: "A founder-focused platform connecting entrepreneurship, startup growth and business ecosystem conversations.",
    image: "/assets/speaking/TiE-ahmedabad.png",
    fallbacks: [
      "/assets/press/2019/NRI-startup_tie-delhi.jpg",
      "/assets/pressnews/2019/NRI-startup_tie-delhi.jpg",
      "/assets/blog/TiE-Kolkata.jpg",
      "/assets/blog/tiecon-panel.jpg",
    ],
    alt: "Arijit Bhattacharyya speaking at TiE Ahmedabad entrepreneurship platform",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "World Leadership Conference",
    location: "Global Platform",
    meta: "Leadership • Innovation • Global Business",
    text: "A global leadership platform bringing together innovation, entrepreneurship, future business thinking and cross-border collaboration.",
    image: "/assets/press/2020/World-Leadership-Conference-Arijit.jpg",
    fallbacks: [
      "/assets/press/2020/World-Leadership-Conference.jpg",
      "/assets/pressnews/2020/World-Leadership-Conference-Arijit.jpg",
      "/assets/pressnews/2020/World-Leadership-Conference.jpg",
      "/assets/speaking/world-leadership-webiner.jpg",
    ],
    alt: "Arijit Bhattacharyya speaking at World Leadership Conference on innovation and global business",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "AI World Summit Singapore",
    location: "Singapore",
    meta: "Artificial Intelligence • Enterprise Innovation",
    text: "A global AI platform focused on enterprise innovation, practical AI adoption and the future direction of intelligent systems.",
    image: "/assets/speaking/2021/AI-world-summit.jpg",
    fallbacks: [
      "/assets/speaking/2021/AI-world-summit.jpg",
      "/assets/speaking/2021/AI-blockchain.jpg",
    ],
    alt: "Arijit Bhattacharyya speaking at AI World Summit Singapore on artificial intelligence and enterprise innovation",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "Ghana Investor Summit",
    location: "Ghana",
    meta: "Venture Capital • Africa • Innovation",
    text: "An international summit appearance connected with venture capital, startup growth, technology innovation and investment ecosystem development.",
    image: "/assets/speaking/2022/ghana-index.jpg",
    fallbacks: [
      "/assets/speaking/ghana high quality.jpeg",
      "/assets/speaking/ghana.jpeg",
      "/assets/speaking/ghana.jpg",
    ],
    alt: "Arijit Bhattacharyya speaking at Ghana Investor Summit with Vice President of Ghana",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "WISE Forum",
    location: "International Platform",
    meta: "Education • Innovation • Future Skills",
    text: "A future-facing platform connecting education, innovation, entrepreneurship and skills for the next generation of founders and professionals.",
    image: "/assets/speaking/2022/WISE.jpg",
    alt: "Arijit Bhattacharyya at WISE forum speaking on education innovation and future skills",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "Dubai Investor Round Table",
    location: "Dubai",
    meta: "Investors • Startups • Global Capital",
    text: "An investor-founder conversation connecting startup opportunities, cross-border funding networks and innovation communities.",
    image: "/assets/speaking/2022/Dubai.jpg",
    fallbacks: [
      "/assets/mentoring/Dubai-Arijit.jpg",
      "/assets/blog/Dubai-Arijit.jpg",
      "/assets/speaking/dubai-speaker.png",
      "/assets/speaking/dubai-speaker2.png",
    ],
    alt: "Arijit Bhattacharyya at Dubai Investor Round Table with investors and startup founders",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "Lebanon Innovation Dialogue",
    location: "Lebanon",
    meta: "Global Business • Technology • Ecosystems",
    text: "A cross-border innovation conversation focused on entrepreneurship, technology adoption and business ecosystem development.",
    image: "/assets/speaking/2022/Lebanon.jpg",
    alt: "Arijit Bhattacharyya speaking at Lebanon innovation dialogue on technology and entrepreneurship",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
  {
    title: "Blockchain Africa",
    location: "Africa",
    meta: "Blockchain • Digital Economy • Emerging Tech",
    text: "A blockchain and digital-economy platform focused on emerging technology, innovation ecosystems and future-ready business models.",
    image: "/assets/speaking/2022/blockchain-africa.jpg",
    fallbacks: [
      "/assets/books/Africa.png",
      "/assets/blog/blockchain.jpeg",
      "/assets/thought-leadership/blockchain.jpeg",
    ],
    alt: "Arijit Bhattacharyya speaking at Blockchain Africa on blockchain digital economy and emerging technology",
    imageWrapClass: "h-[240px] sm:h-[270px] lg:h-[300px]",
    imageClass:
      "h-auto max-h-[94%] w-auto max-w-[94%] rounded-[20px] object-contain object-center",
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group overflow-hidden rounded-[30px] border border-sky-100 bg-white shadow-[0_24px_80px_rgba(14,42,82,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_32px_100px_rgba(14,42,82,0.14)]"
    >
      <div
        className={`flex items-center justify-center border-b border-sky-100 bg-gradient-to-br from-white via-sky-50 to-blue-100/70 p-2 ${item.imageWrapClass}`}
      >
        <SmartImage
          src={item.image}
          fallbacks={item.fallbacks}
          alt={item.alt}
          className={`${item.imageClass} transition duration-500 group-hover:scale-[1.012]`}
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-900">
            <MapPin className="h-3.5 w-3.5" />
            {item.location}
          </span>
        </div>

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          {item.meta}
        </p>

        <h3 className="text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[1.65rem]">
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] font-normal leading-7 text-slate-600">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function SpeakingTimeline() {
  return (
    <section
      id="speaking-timeline"
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">
              Speaking Journey
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
              Speaking Across Markets, Institutions & Global Forums
            </h2>
          </div>

          <p className="max-w-3xl text-base font-normal leading-8 text-slate-700 sm:text-lg lg:pb-2">
            A curated view of selected speaking appearances across business
            forums, investor platforms, AI summits, education networks and
            emerging technology ecosystems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {timelineItems.map((item, index) => (
            <TimelineCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}