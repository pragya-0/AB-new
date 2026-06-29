import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Archive, Search } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type ArchiveCategory =
  | "All"
  | "Business Chamber"
  | "Startup"
  | "Institution"
  | "Corporate"
  | "Gaming"
  | "Creative Media"
  | "Technology"
  | "Mentoring";

type ArchiveItem = {
  id: string;
  title: string;
  publisher: string;
  type: Exclude<ArchiveCategory, "All">;
  country: string;
  year?: string;
  summary: string;
  image: string;
  fallbackImages?: string[];
  alt: string;
  tags: string[];
  url?: string;
};

const categories: ArchiveCategory[] = [
  "All",
  "Business Chamber",
  "Startup",
  "Institution",
  "Corporate",
  "Gaming",
  "Creative Media",
  "Technology",
  "Mentoring",
];

/*
  Locked no-repeat rule:
  This archive intentionally avoids images already used in:
  01-PressHero, 02-FeaturedStories, 03-MediaAuthorityGrid,
  04-TVAndVideoCoverage and 05-InternationalCoverage.
*/

const archiveItems: ArchiveItem[] = [
  {
    id: "axis-bank-evolve-sme-knowledge-series",
    title: "Axis Bank Evolve SME Knowledge Series",
    publisher: "Axis Bank Evolve",
    type: "Corporate",
    country: "India",
    year: "Legacy",
    summary:
      "Corporate business-ecosystem coverage connected to SME growth, entrepreneurship conversations and Arijit Bhattacharyya’s role in mentoring founders and business communities.",
    image:
      "/assets/pressnews/01_USE_NOW/Corporate_Speaking___Business_Ecosystem/axis-bank-evolve-sme-knowledge-series-speaking.jpg",
    fallbackImages: [
      "/assets/pressnews/axis-bank-evolve-sme-knowledge-series-speaking.jpg",
      "/assets/pressnews/01_images_preserved_structure/axis-bank-evolve-sme-knowledge-series-speaking.jpg",
    ],
    alt: "Axis Bank Evolve SME Knowledge Series speaking session connected to Arijit Bhattacharyya",
    tags: ["SME", "Corporate", "Entrepreneurship"],
  },
  {
    id: "calcutta-chamber-of-commerce-business-panel",
    title: "Calcutta Chamber of Commerce Business Panel",
    publisher: "Calcutta Chamber of Commerce",
    type: "Business Chamber",
    country: "India",
    year: "Legacy",
    summary:
      "Business chamber coverage documenting Arijit Bhattacharyya’s participation in industry conversations around enterprise, sustainability, innovation and leadership.",
    image:
      "/assets/pressnews/01_USE_NOW/Business_Chamber___Legacy_Press/Calcutta Chamber of Commerce.jpg",
    fallbackImages: [
      "/assets/pressnews/Calcutta Chamber of Commerce.jpg",
      "/assets/pressnews/01_images_preserved_structure/Calcutta Chamber of Commerce.jpg",
    ],
    alt: "Calcutta Chamber of Commerce business panel featuring Arijit Bhattacharyya",
    tags: ["Chamber", "Business", "Leadership"],
  },
  {
    id: "assocham-business-startup-panel",
    title: "ASSOCHAM Business and Startup Panel",
    publisher: "ASSOCHAM",
    type: "Business Chamber",
    country: "India",
    year: "Legacy",
    summary:
      "Industry-platform coverage connected to entrepreneurship, startup development and business community engagement through ASSOCHAM.",
    image:
      "/assets/pressnews/01_USE_NOW/Business_Chamber___Legacy_Press/ASSOCHAM Business  Startup Panel.jpg",
    fallbackImages: [
      "/assets/pressnews/ASSOCHAM Business  Startup Panel.jpg",
      "/assets/pressnews/ASSOCHAM Business Startup Panel.jpg",
      "/assets/pressnews/01_images_preserved_structure/ASSOCHAM Business  Startup Panel.jpg",
    ],
    alt: "ASSOCHAM business and startup panel connected to Arijit Bhattacharyya",
    tags: ["ASSOCHAM", "Startup", "Business"],
  },
  {
    id: "bengal-chamber-speaking-session",
    title: "Bengal Chamber of Commerce and Industry Session",
    publisher: "Bengal Chamber",
    type: "Business Chamber",
    country: "India",
    year: "Legacy",
    summary:
      "A Bengal Chamber platform reference supporting the archive’s business, technology and industry leadership narrative.",
    image:
      "/assets/pressnews/01_USE_NOW/Business_Chamber___Legacy_Press/Bengal Chamber of Commerce & Industry Speaking Session.jpg",
    fallbackImages: [
      "/assets/pressnews/Bengal Chamber of Commerce & Industry Speaking Session.jpg",
      "/assets/pressnews/01_images_preserved_structure/Bengal Chamber of Commerce & Industry Speaking Session.jpg",
    ],
    alt: "Bengal Chamber of Commerce and Industry speaking session featuring Arijit Bhattacharyya",
    tags: ["Bengal Chamber", "Industry", "Business"],
  },
  {
    id: "icc-startup-pad-patna-2016-panel",
    title: "ICC StartUp Pad Patna 2016 Panel",
    publisher: "Indian Chamber of Commerce",
    type: "Startup",
    country: "India",
    year: "2016",
    summary:
      "Startup ecosystem coverage from ICC StartUp Pad Patna, connected to founder mentoring, entrepreneurship development and early-stage business conversations.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup___Business_Ecosystem/ICC StartUp Pad Patna 2016 Panel.jpg",
    fallbackImages: [
      "/assets/pressnews/ICC StartUp Pad Patna 2016 Panel.jpg",
      "/assets/pressnews/01_images_preserved_structure/ICC StartUp Pad Patna 2016 Panel.jpg",
    ],
    alt: "ICC StartUp Pad Patna 2016 panel with Arijit Bhattacharyya",
    tags: ["ICC", "Startup Pad", "Patna"],
  },
  {
    id: "icc-startup-pad-kolkata",
    title: "ICC Startup Pad Kolkata",
    publisher: "Indian Chamber of Commerce",
    type: "Startup",
    country: "India",
    year: "Legacy",
    summary:
      "Kolkata startup-platform coverage showing the founder ecosystem around mentoring, pitching, investment conversations and business-community building.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup___Business_Ecosystem/ICC Startup Pad Kolkata.jpg",
    fallbackImages: [
      "/assets/pressnews/ICC Startup Pad Kolkata.jpg",
      "/assets/pressnews/01_images_preserved_structure/ICC Startup Pad Kolkata.jpg",
    ],
    alt: "ICC Startup Pad Kolkata event coverage featuring Arijit Bhattacharyya",
    tags: ["ICC", "Kolkata", "Startup"],
  },
  {
    id: "iift-kolkata-avaan-business-plan",
    title: "IIFT Kolkata Avaan Business Plan Session",
    publisher: "IIFT Kolkata",
    type: "Institution",
    country: "India",
    year: "Legacy",
    summary:
      "Institutional entrepreneurship coverage connected to business-plan development, student founders and startup ecosystem learning at IIFT Kolkata.",
    image:
      "/assets/pressnews/01_USE_NOW/Institutional_Talks___Startup_Ecosystem/IIFT Kolkata Avaan Business Plan.png",
    fallbackImages: [
      "/assets/pressnews/IIFT Kolkata Avaan Business Plan.png",
      "/assets/pressnews/01_images_preserved_structure/IIFT Kolkata Avaan Business Plan.png",
    ],
    alt: "IIFT Kolkata Avaan Business Plan session connected to Arijit Bhattacharyya",
    tags: ["IIFT", "Business Plan", "Students"],
  },
  {
    id: "iim-bodh-gaya-yes-2020",
    title: "IIM Bodh Gaya YES 2020",
    publisher: "IIM Bodh Gaya",
    type: "Institution",
    country: "India",
    year: "2020",
    summary:
      "Institutional platform coverage connected to entrepreneurship, youth enterprise and innovation-led learning at IIM Bodh Gaya.",
    image:
      "/assets/pressnews/01_USE_NOW/Institutional_Talks___Startup_Ecosystem/IIM Bodh Gaya YES 2020.jpg",
    fallbackImages: [
      "/assets/pressnews/IIM Bodh Gaya YES 2020.jpg",
      "/assets/pressnews/01_images_preserved_structure/IIM Bodh Gaya YES 2020.jpg",
    ],
    alt: "IIM Bodh Gaya YES 2020 session featuring Arijit Bhattacharyya",
    tags: ["IIM Bodh Gaya", "Youth", "Startup"],
  },
  {
    id: "gato-2017-gaming-for-tomorrow",
    title: "GATO 2017 Gaming for Tomorrow Panel",
    publisher: "GATO",
    type: "Gaming",
    country: "India",
    year: "2017",
    summary:
      "Gaming and technology coverage connected to Arijit Bhattacharyya’s long-running work in game development, IP, animation and interactive entertainment.",
    image:
      "/assets/pressnews/01_USE_NOW/Gaming___Technology/gato-2017-gaming-for-tomorrow-panel.png",
    fallbackImages: [
      "/assets/pressnews/gato-2017-gaming-for-tomorrow-panel.png",
      "/assets/pressnews/01_images_preserved_structure/gato-2017-gaming-for-tomorrow-panel.png",
    ],
    alt: "GATO 2017 Gaming for Tomorrow panel connected to Arijit Bhattacharyya",
    tags: ["Gaming", "Technology", "IP"],
  },
  {
    id: "ficci-frames-2017-mumbai",
    title: "FICCI FRAMES 2017 Mumbai",
    publisher: "FICCI FRAMES",
    type: "Creative Media",
    country: "India",
    year: "2017",
    summary:
      "Creative media and entertainment-industry platform coverage connected to gaming, animation, digital content and media technology.",
    image:
      "/assets/pressnews/01_USE_NOW/Creative_Media___Entertainment_Industry/FICCI FRAMES 2017 Mumbai.jpg",
    fallbackImages: [
      "/assets/pressnews/FICCI FRAMES 2017 Mumbai.jpg",
      "/assets/pressnews/01_images_preserved_structure/FICCI FRAMES 2017 Mumbai.jpg",
    ],
    alt: "FICCI FRAMES 2017 Mumbai coverage connected to Arijit Bhattacharyya",
    tags: ["FICCI", "Media", "Entertainment"],
  },
  {
    id: "odisha-msme-trade-fair-2016",
    title: "Odisha MSME Trade Fair 2016",
    publisher: "Odisha MSME Trade Fair",
    type: "Technology",
    country: "India",
    year: "2016",
    summary:
      "Technology and business ecosystem coverage around MSMEs, entrepreneurship and leading change through technology.",
    image:
      "/assets/pressnews/01_USE_NOW/Technology___Business_Ecosystem/102__odisha.jpg",
    fallbackImages: [
      "/assets/pressnews/102__odisha.jpg",
      "/assets/pressnews/01_images_preserved_structure/102__odisha.jpg",
    ],
    alt: "Odisha MSME Trade Fair 2016 technology and business ecosystem coverage with Arijit Bhattacharyya",
    tags: ["Odisha", "MSME", "Technology"],
  },
  {
    id: "nen-wadhwani-foundation-workshop",
    title: "NEN Wadhwani Foundation Entrepreneurship Workshop",
    publisher: "NEN Wadhwani Foundation",
    type: "Mentoring",
    country: "India",
    year: "Legacy",
    summary:
      "Startup mentoring archive coverage connected to entrepreneurship education, founder development and structured ecosystem support.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup_Mentoring___Legacy/NEN Wadhwani Foundation Entrepreneurship Workshop.jpg",
    fallbackImages: [
      "/assets/pressnews/NEN Wadhwani Foundation Entrepreneurship Workshop.jpg",
      "/assets/pressnews/01_images_preserved_structure/NEN Wadhwani Foundation Entrepreneurship Workshop.jpg",
    ],
    alt: "NEN Wadhwani Foundation entrepreneurship workshop with Arijit Bhattacharyya",
    tags: ["NEN", "Wadhwani", "Mentoring"],
  },
  {
    id: "franchise-india-summit-2016",
    title: "Franchise India Summit 2016",
    publisher: "Franchise India",
    type: "Startup",
    country: "India",
    year: "2016",
    summary:
      "Startup and business ecosystem coverage connected to entrepreneurship, franchise growth, business models and founder-facing platforms.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup___Business_Ecosystem/franchise-india-summit-2016.jpg",
    fallbackImages: [
      "/assets/pressnews/franchise-india-summit-2016.jpg",
      "/assets/pressnews/01_images_preserved_structure/franchise-india-summit-2016.jpg",
    ],
    alt: "Franchise India Summit 2016 coverage featuring Arijit Bhattacharyya",
    tags: ["Franchise India", "Startup", "Business"],
  },
  {
    id: "one-day-finance-clinic-startups-msme",
    title: "One Day Finance Clinic for Startups and MSMEs",
    publisher: "Startup and MSME Ecosystem",
    type: "Startup",
    country: "India",
    year: "Legacy",
    summary:
      "Business support coverage connected to startup finance, MSME development, founder guidance and practical entrepreneurship support.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup___Business_Ecosystem/one-day-finance-clinic-startups-msme.jpg",
    fallbackImages: [
      "/assets/pressnews/one-day-finance-clinic-startups-msme.jpg",
      "/assets/pressnews/01_images_preserved_structure/one-day-finance-clinic-startups-msme.jpg",
    ],
    alt: "One Day Finance Clinic for startups and MSMEs with Arijit Bhattacharyya",
    tags: ["Finance", "MSME", "Startup"],
  },
  {
    id: "icc-startup-funding-panel",
    title: "ICC Startup Funding Panel",
    publisher: "Indian Chamber of Commerce",
    type: "Startup",
    country: "India",
    year: "Legacy",
    summary:
      "Startup investment archive coverage connected to funding, founder readiness, investor conversations and ecosystem-building through chamber platforms.",
    image:
      "/assets/pressnews/01_USE_NOW/Startup___Investment/icc-startup-funding-panel.jpg",
    fallbackImages: [
      "/assets/pressnews/icc-startup-funding-panel.jpg",
      "/assets/pressnews/01_images_preserved_structure/icc-startup-funding-panel.jpg",
    ],
    alt: "ICC startup funding panel connected to Arijit Bhattacharyya",
    tags: ["Funding", "ICC", "Investment"],
  },
];

function ArchiveImage({
  item,
  className,
}: {
  item: ArchiveItem;
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

export default function LegacyPressArchive() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return archiveItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.type === activeCategory;

      const searchableText = [
        item.title,
        item.publisher,
        item.type,
        item.country,
        item.year,
        item.summary,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (cleanQuery.length === 0 || searchableText.includes(cleanQuery))
      );
    });
  }, [activeCategory, query]);

  return (
    <section
      id="legacy-press-archive"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(14,165,233,0.1),transparent_28%)]" />

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
              <Archive className="mr-2 h-4 w-4" />
              Legacy Press Archive
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Older platforms, chambers and ecosystem moments.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            A structured archive of earlier business chambers, startup platforms,
            institutional sessions, gaming-industry forums and entrepreneurship
            workshops — kept separate from the featured media and international
            sections to avoid repetition.
          </p>
        </motion.div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition",
                    activeCategory === category
                      ? "bg-[#07111f] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative block">
              <span className="sr-only">Search legacy press archive</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search press archive..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-normal text-[#07111f] outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
              />
            </label>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-500">
          Showing {filteredItems.length} of {archiveItems.length} archive records.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: Math.min(index * 0.02, 0.18),
              }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#03070d] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_36%)]" />

                <ArchiveImage
                  item={item}
                  className="relative max-h-[240px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.type}
                </div>

                {item.year && (
                  <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.year}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  {item.publisher}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#07111f]">
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
                    View Coverage
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
