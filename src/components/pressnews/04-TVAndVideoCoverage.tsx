import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Tv } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type VideoCoverageItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  fallbackImages?: string[];
  alt: string;
  badge: string;
  tags: string[];
  url?: string;
};

const tvCoverageItems: VideoCoverageItem[] = [
  {
    id: "nepal-tv-kantipur-international-coverage",
    title: "Nepal Television Media Coverage",
    summary:
      "International television coverage from Nepal connected to Arijit Bhattacharyya’s work across startup mentoring, entrepreneurship and regional innovation platforms. This single card represents the Nepal TV / Kantipur media appearance so the same event is not repeated twice.",
    image: "/assets/pressnews/Nepal_TV_Arijit-Bhattacharyya.png",
    fallbackImages: [
      "/assets/pressnews/Arijit_Bhattacharyya_Nepal.png",
      "/assets/pressnews/2018/kantipur_TV.jpg",
      "/assets/pressnews/kantipur_TV.jpg",
      "/assets/pressnews/2022/nepal.jpg",
      "/assets/pressnews/01_images_preserved_structure/Nepal_TV_Arijit-Bhattacharyya.png",
      "/assets/pressnews/01_images_preserved_structure/Arijit_Bhattacharyya_Nepal.png",
      "/assets/pressnews/01_images_preserved_structure/2018/kantipur_TV.jpg",
    ],
    alt: "Nepal television media coverage featuring Arijit Bhattacharyya in an international entrepreneurship and innovation discussion",
    badge: "International TV",
    tags: ["Nepal", "Television", "Startup"],
  },
  {
    id: "tedx-technology-innovation-talk",
    title: "TEDx Technology & Innovation Talk",
    summary:
      "A global-stage speaking reference connected to technology, startups, creative industries and future-facing innovation conversations.",
    image: "/assets/pressnews/tedx.png",
    fallbackImages: [
      "/assets/pressnews/tedx.jpg",
      "/assets/pressnews/2019/tedx.jpg",
      "/assets/pressnews/01_images_preserved_structure/tedx.png",
      "/assets/pressnews/01_images_preserved_structure/2019/tedx.jpg",
      "/assets/pressnews/latest-speaks/tedx.jpg",
      "/assets/pressnews/latest-speaks/tedx.jpg.jpeg",
    ],
    alt: "TEDx stage coverage featuring Arijit Bhattacharyya speaking on technology innovation and entrepreneurship",
    badge: "Global Stage",
    tags: ["TEDx", "Speaking", "Innovation"],
  },
  {
    id: "dd-bangla-vr-television-coverage",
    title: "DD Bangla VR Television Feature",
    summary:
      "Public television coverage connected to the growth of virtual reality and Arijit Bhattacharyya’s work in immersive technology education, communication and development.",
    image: "/assets/pressnews/latest-speaks/DD_bangla.jpg",
    fallbackImages: [
      "/assets/pressnews/DD Bangla/DD_bangla.jpg",
      "/assets/pressnews/DD Bangla/DD-bangla.png",
      "/assets/pressnews/DD-bangla.png",
      "/assets/pressnews/DD_bangla.jpg",
      "/assets/pressnews/DD-Bangla.jpg",
      "/assets/pressnews/2019/DD-Bangla.jpg",
      "/assets/pressnews/01_images_preserved_structure/2019/DD-Bangla.jpg",
    ],
    alt: "DD Bangla television appearance with Arijit Bhattacharyya on technology and virtual reality",
    badge: "Public Television",
    tags: ["DD Bangla", "VR", "Bengal"],
  },
  {
    id: "josh-talks-bengali-feature",
    title: "Josh Talks Bengali Feature",
    summary:
      "A digital video feature presenting Arijit Bhattacharyya’s entrepreneurial journey and public communication to a wider Bengali-speaking audience.",
    image: "/assets/pressnews/2018/Josh-Talk_Bengali.jpg",
    fallbackImages: [
      "/assets/pressnews/Josh-Talk_Bengali.jpg",
      "/assets/pressnews/josh-talks.jpg",
      "/assets/pressnews/01_images_preserved_structure/2018/Josh-Talk_Bengali.jpg",
      "/assets/pressnews/01_images_preserved_structure/Josh-Talk_Bengali.jpg",
    ],
    alt: "Josh Talks Bengali video feature with Arijit Bhattacharyya",
    badge: "Digital Video",
    tags: ["Josh Talks", "Bengali", "Entrepreneurship"],
  },
  {
    id: "tv9-game-development-vr",
    title: "TV9 Bengali Game Development & VR Coverage",
    summary:
      "Television coverage on game development, VR and technology-led entertainment from Bengal, connected to Arijit Bhattacharyya’s long-running work in games, IP, animation and interactive media.",
    image: "/assets/pressnews/TV9-2.png",
    fallbackImages: [
      "/assets/pressnews/latest-speaks/TV9.jpg",
      "/assets/pressnews/TV9.jpg",
      "/assets/pressnews/tv9.jpg",
      "/assets/pressnews/2022/TV9-games.jpg",
      "/assets/pressnews/01_images_preserved_structure/TV9-2.png",
      "/assets/pressnews/01_images_preserved_structure/TV9.jpg",
      "/assets/pressnews/01_images_preserved_structure/2022/TV9-games.jpg",
      "/assets/speaking/2022/TV9-games.jpg",
    ],
    alt: "TV9 Bengali coverage on Arijit Bhattacharyya game development virtual reality and technology work",
    badge: "Television Feature",
    tags: ["TV9", "VR", "Games"],
  },
  {
    id: "jharkhand-dd-india-startup-interview",
    title: "Jharkhand Startup & Technology Interview",
    summary:
      "Broadcast-media coverage from Jharkhand connected to startup development, technology conversations and regional innovation visibility.",
    image:
      "/assets/pressnews/01_USE_NOW/TV___Video_Coverage___Regional_Media/hero BTS jharkhand-media-interview-dd-india.jpeg",
    fallbackImages: [
      "/assets/pressnews/jharkhand news.jpeg",
      "/assets/pressnews/01_images_preserved_structure/jharkhand news.jpeg",
      "/assets/pressnews/hero BTS jharkhand-media-interview-dd-india.jpeg",
    ],
    alt: "Jharkhand media interview with DD India microphone connected to Arijit Bhattacharyya",
    badge: "Regional Broadcast",
    tags: ["DD India", "Jharkhand", "Startup"],
  },
];

function VideoImage({
  item,
  className,
}: {
  item: VideoCoverageItem;
  className?: string;
}) {
  const imageCandidates = useMemo(
    () =>
      Array.from(
        new Set([item.image, ...(item.fallbackImages ?? [])].filter(Boolean))
      ),
    [item.image, item.fallbackImages]
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImageIndex(0);
    setHasFailed(false);
  }, [item.id, item.image]);

  const currentImage = imageCandidates[imageIndex];

  if (hasFailed || !currentImage) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.35rem] border border-white/10 bg-[#06111f] p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
          Image path pending
        </p>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
          {item.title}
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentImage}
      alt={item.alt}
      loading="lazy"
      onError={() => {
        if (imageIndex < imageCandidates.length - 1) {
          setImageIndex((current) => current + 1);
          return;
        }

        setHasFailed(true);
      }}
      className={className}
    />
  );
}

export default function TVAndVideoCoverage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_88%_75%,rgba(14,165,233,0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              <Tv className="mr-2 h-4 w-4" />
              TV & Video Coverage
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              International screens first, then national television and digital media.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            A screen-led layer of the Press News archive, starting with a
            cross-border Nepal media reference before moving into TEDx, Indian
            television, regional broadcast coverage and digital video platforms.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {tvCoverageItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(index * 0.04, 0.22),
              }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#03070d] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.28),transparent_36%)]" />

                <VideoImage
                  item={item}
                  className="relative max-h-[240px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.badge}
                </div>

                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition group-hover:bg-blue-600">
                  <PlayCircle className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#07111f]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-bold text-[#07111f] transition hover:text-blue-700"
                  >
                    Watch / View Coverage
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

