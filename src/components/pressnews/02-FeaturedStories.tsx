import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Globe2, Newspaper } from "lucide-react";
import { featuredStories } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

type Story = (typeof featuredStories)[number];

type StoryCopy = {
  publisher: string;
  title: string;
  summary: string;
  tags: string[];
  label: string;
  imageFallbacks?: string[];
};

const preferredStoryOrder = [
  "cnbc-awaaz-udaan-business-finance-panel",
  "iit-ism-ciie-coinnovate-mou",
  "east-india-startup-showcase-2026",
  "japan-yasuhiro-fukushima-square-enix",
];

const storyCopyById: Record<string, StoryCopy> = {
  "cnbc-awaaz-udaan-business-finance-panel": {
    publisher: "CNBC Awaaz",
    title: "CNBC Awaaz Udaan Business Feature",
    summary:
      "Arijit Bhattacharyya appeared on CNBC Awaaz’s Udaan platform in a business and finance discussion, shown as Founder-Director of Virtualinfocom and positioned within entrepreneurship, enterprise growth and market-facing conversations.",
    tags: ["Business TV", "Virtualinfocom", "Entrepreneurship"],
    label: "Business Television",
    imageFallbacks: [
      "/assets/pressnews/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpeg",
      "/assets/pressnews/01_USE_NOW/TV___Video_Coverage/cnbc-awaaz-udaan-business-finance-panel-arijit-bhattacharyya.jpeg",
    ],
  },

  "iit-ism-ciie-coinnovate-mou": {
    publisher: "IIT ISM / CIIE Foundation",
    title: "IIT ISM CIIE Foundation MoU Coverage",
    summary:
      "Coverage of the collaboration between CIIE IIT ISM Foundation and Coinnovate Ventures, connected with startup mentoring, investor access, innovation culture and entrepreneurship support.",
    tags: ["IIT ISM", "Coinnovate", "Startup Ecosystem"],
    label: "Institutional Collaboration",
    imageFallbacks: [
      "/assets/pressnews/01_images_preserved_structure/IIT ISM MOU.jpeg",
      "/assets/pressnews/01_images_preserved_structure/IIT ISM MOU(1).jpeg",
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Institutional_Collaboration/iit-ism-ciie-foundation-mou-coinnovate-ventures.jpeg",
    ],
  },

  "east-india-startup-showcase-2026": {
    publisher: "East India Startup Showcase",
  title: "East India Startup Showcase: ₹4.6 Cr Investor Interest",
    summary:
   "Newspaper coverage from Jamshedpur reporting investor interest of ₹4.6 crore across promising startups at the East India Startup Showcase Day, linked with regional startup growth and entrepreneurship development.",
    tags: ["Startup Capital", "Jamshedpur", "2026"],
    label: "Newspaper Coverage",
    imageFallbacks: [
      "/assets/pressnews/01_images_preserved_structure/1772780640236 (1).jfif.jpeg",
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Startup_Ecosystem/East India Startup Showcase Day — Investors Eye Rs 4.6 Cr.jpeg",
    ],
  },

  "japan-yasuhiro-fukushima-square-enix": {
    publisher: "Japan Gaming Industry",
    title: "Japan Gaming Industry Connection",
    summary:
      "An international archive image featuring Arijit Bhattacharyya with Yasuhiro Fukushima, founder of Square Enix, connecting his gaming, IP and entertainment technology journey with Japan’s global game-development ecosystem.",
    tags: ["Japan", "Square Enix", "Gaming IP"],
    label: "International Platform",
    imageFallbacks: [
      "/assets/pressnews/01_images_preserved_structure/japan.jpg",
      "/assets/pressnews/01_USE_NOW/International_Coverage___Gaming_Industry/yasuhiro-fukushima-square-enix-japan-arijit.jpg",
    ],
  },
};

function isStory(story: Story | undefined): story is Story {
  return Boolean(story);
}

function getStoryCopy(story: Story): StoryCopy {
  return (
    storyCopyById[story.id] ?? {
      publisher: story.publisher,
      title: story.title,
      summary: story.summary,
      tags: story.tags.slice(0, 3),
      label: story.eyebrow || story.publisher,
    }
  );
}

function getCuratedStories() {
  const orderedStories = preferredStoryOrder
    .map((id) => featuredStories.find((story) => story.id === id))
    .filter(isStory);

  const orderedIds = new Set(orderedStories.map((story) => story.id));

  const remainingStories = featuredStories.filter(
    (story) => !orderedIds.has(story.id)
  );

  return [...orderedStories, ...remainingStories].slice(0, 4);
}

function StoryImage({
  story,
  className,
}: {
  story: Story;
  className?: string;
}) {
  const copy = getStoryCopy(story);

  const imageCandidates = useMemo(
    () =>
      Array.from(
        new Set([story.image, ...(copy.imageFallbacks ?? [])].filter(Boolean))
      ),
    [story.image, copy.imageFallbacks]
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImageIndex(0);
    setHasFailed(false);
  }, [story.id, story.image]);

  const currentImage = imageCandidates[imageIndex];

  if (hasFailed || !currentImage) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#06111f] p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
          Image path pending
        </p>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
          {copy.title}
        </p>
      </div>
    );
  }

  return (
    <img
      src={currentImage}
      alt={story.alt}
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

export default function FeaturedStories() {
  const stories = getCuratedStories();
  const leadStory = stories[0];
  const otherStories = stories.slice(1);

  const leadCopy = leadStory ? getStoryCopy(leadStory) : null;

  return (
    <section
      id="featured-stories"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(14,165,233,0.1),transparent_28%)]" />

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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              Featured Coverage
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Selected stories from television, newspapers and global platforms.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            A focused opening set from the wider Press News archive — starting
            with national business television, institutional collaboration,
            startup investment coverage and international gaming-industry
            connections.
          </p>
        </motion.div>

        {leadStory && leadCopy && (
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#03070d] shadow-[0_28px_90px_rgba(15,23,42,0.16)]"
          >
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#07111f] p-5 sm:min-h-[390px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(37,99,235,0.3),transparent_36%)]" />

                <StoryImage
                  story={leadStory}
                  className="relative max-h-[350px] w-full rounded-[1.5rem] object-contain transition duration-700 hover:scale-[1.03]"
                />

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {leadCopy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 text-white sm:p-9 lg:p-12">
                <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                  <Newspaper className="mr-2 h-4 w-4" />
                  {leadCopy.publisher}
                </p>

                <h3 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">
                  {leadCopy.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-300 sm:text-base">
                  {leadCopy.summary}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {leadStory.year && (
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                      {leadStory.year}
                    </span>
                  )}

                  {leadStory.country && (
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                      <Globe2 className="mr-2 h-4 w-4 text-blue-200" />
                      {leadStory.country}
                    </span>
                  )}
                </div>

                {leadStory.url && (
                  <a
                    href={leadStory.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#07111f] transition hover:-translate-y-0.5 hover:bg-blue-100"
                  >
                    Open Coverage
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {otherStories.map((story, index) => {
            const copy = getStoryCopy(story);

            return (
              <motion.article
                key={story.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.56,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-[#03070d] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(37,99,235,0.25),transparent_35%)]" />

                  <StoryImage
                    story={story}
                    className="relative max-h-[195px] w-full rounded-2xl object-contain transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                    <BadgeCheck className="mr-2 h-4 w-4" />
                    {copy.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.025em] text-[#07111f] sm:text-2xl">
                    {copy.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                    {copy.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {copy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {story.url && (
                    <a
                      href={story.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center text-sm font-bold text-[#07111f] transition hover:text-blue-700"
                    >
                      Open Coverage
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

