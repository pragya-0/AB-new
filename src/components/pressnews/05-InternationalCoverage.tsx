import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type InternationalItem = {
  id: string;
  country: string;
  title: string;
  publisher: string;
  summary: string;
  image: string;
  fallbackImages?: string[];
  alt: string;
  tags: string[];
  url?: string;
};

/*
  Locked editorial rules:
  1. China Blockchain image is RAW 2018 blockchain coverage only.
     Do not label it as China Film Festival or Xi'an Film Festival.
  2. Japan / Yasuhiro Fukushima / Square Enix was already used earlier.
     Do not repeat it here.
  3. Nepal / Kantipur / Nepal TV was already used in TV & Video.
     Do not repeat it here.
  4. Smart City was removed because it overlaps visually with the Finland item.
  5. Kazakhstan / Digital Bridge is removed because the available image was wrong.
  6. Keep only one Dubai card: Global Family Office Investment Summit / AI Startups panel.
  7. Layout is fixed as a clean 2 x 2 grid on desktop.
*/

const internationalCoverageItems: InternationalItem[] = [
  {
    id: "china-blockchain-raw-2018-media-interview",
    country: "China",
    title: "China Blockchain Prediction and RAW 2018 Media Interview",
    publisher: "RAW 2018 China Blockchain Media",
    summary:
      "International media coverage from China connected to Arijit Bhattacharyya’s blockchain prediction work and technology commentary at RAW 2018. This card is intentionally separated from the China film-festival archive.",
    image: "/assets/pressnews/2020/China-blockchain.jpg",
    fallbackImages: [
      "/assets/pressnews/China-blockchain.jpg",
      "/assets/pressnews/01_images_preserved_structure/2020/China-blockchain.jpg",
      "/assets/pressnews/01_images_preserved_structure/China-blockchain.jpg",
    ],
    alt: "China blockchain media interview connected to Arijit Bhattacharyya's blockchain prediction work at RAW 2018",
    tags: ["China", "Blockchain", "RAW 2018"],
  },
  {
    id: "china-xian-film-festival-creative-technology",
    country: "China",
    title: "China Xi’an Film Festival Creative Technology Coverage",
    publisher: "China Film Festival Archive",
    summary:
      "International creative-industry coverage connected to Arijit Bhattacharyya’s film, gaming, animation and entertainment-technology work in China. This uses only the film-festival image set, not the blockchain interview image.",
    image: "/assets/pressnews/China_film_fest.jpg",
    fallbackImages: [
      "/assets/pressnews/china-films.jpg",
      "/assets/pressnews/arijit_bhattacharyya-films.jpg",
      "/assets/pressnews/01_images_preserved_structure/China_film_fest.jpg",
      "/assets/pressnews/01_images_preserved_structure/china-films.jpg",
      "/assets/pressnews/01_images_preserved_structure/arijit_bhattacharyya-films.jpg",
    ],
    alt: "China film festival coverage connected to Arijit Bhattacharyya's creative technology and entertainment work",
    tags: ["China", "Film Festival", "Creative Tech"],
  },
  {
    id: "finland-india-innovation-business-platform",
    country: "Finland",
    title: "Finland India Innovation and Business Platform",
    publisher: "Finland India Business Ecosystem",
    summary:
      "International business and innovation coverage connected to Finland–India collaboration, entrepreneurship networks and Arijit Bhattacharyya’s cross-border technology ecosystem work.",
    image: "/assets/pressnews/latest-speaks/finland.jpg",
    fallbackImages: [
      "/assets/pressnews/2018/Finland_India.jpg",
      "/assets/pressnews/Finland_India.jpg",
      "/assets/pressnews/finland.jpg",
      "/assets/pressnews/01_images_preserved_structure/latest-speaks/finland.jpg",
      "/assets/pressnews/01_images_preserved_structure/2018/Finland_India.jpg",
    ],
    alt: "Finland India business and innovation platform coverage connected to Arijit Bhattacharyya",
    tags: ["Finland", "India", "Innovation"],
  },
  {
    id: "dubai-ai-startups-family-office-panel",
    country: "UAE",
    title: "Dubai AI Startups and Family Office Investment Panel",
    publisher: "Global Family Office Investment Summit",
    summary:
      "Arijit Bhattacharyya joined a Dubai investment-stage panel on AI startups and visionary entrepreneurs, connecting his work with family-office capital, emerging technology, startup ecosystems and global entrepreneurship.",
    image: "/assets/pressnews/dubai-ai-startups-family-office-panel.jpg",
    fallbackImages: [
      "/assets/pressnews/international/dubai-ai-startups-family-office-panel.jpg",
      "/assets/pressnews/Dubai-Arijit.jpg",
      
    ],
    alt: "Arijit Bhattacharyya on stage at a Dubai AI startups and family office investment panel",
    tags: ["Dubai", "AI Startups", "Investment"],
  },
];

function InternationalImage({
  item,
  className,
}: {
  item: InternationalItem;
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

function InternationalCard({
  item,
  index,
}: {
  item: InternationalItem;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: Math.min(index * 0.05, 0.18),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.09]"
    >
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-[#07111f] p-4 sm:h-[310px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(37,99,235,0.28),transparent_36%)]" />

        <InternationalImage
          item={item}
          className="relative max-h-[260px] w-full rounded-[1.25rem] object-contain transition duration-700 group-hover:scale-[1.03] sm:max-h-[290px]"
        />

        <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          <MapPin className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
          {item.country}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
          {item.publisher}
        </p>

        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em] text-white">
          {item.title}
        </h3>

        <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
          {item.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100"
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
            className="mt-6 inline-flex items-center text-sm font-bold text-blue-100 transition hover:text-white"
          >
            View Coverage
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function InternationalCoverage() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(14,165,233,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

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
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
              <Globe2 className="mr-2 h-4 w-4" />
              International Coverage
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
              Global platforms across technology, business and creative media.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            A carefully separated international archive. China blockchain media
            coverage stays with RAW 2018, China film-festival coverage uses only
            film-festival assets, Finland carries the cross-border innovation
            story, and Dubai is represented by the stronger AI investment-stage
            panel.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {internationalCoverageItems.map((item, index) => (
            <InternationalCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

