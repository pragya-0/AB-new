import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Newspaper } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type AuthorityItem = {
  id: string;
  title: string;
  publisher: string;
  summary: string;
  image: string;
  fallbackImages?: string[];
  alt: string;
  type: string;
  tags: string[];
  url?: string;
};

const leadAuthority: AuthorityItem = {
  id: "economic-times-business-media",
  title: "Economic Times Business Media Feature",
  publisher: "The Hindu",
  summary:
    "Economic Times coverage anchors this media-authority section with a business-facing view of Arijit Bhattacharyya’s work across entrepreneurship, technology leadership, startup mentoring, innovation and ecosystem building.",
  image: "/assets/pressnews/Arijit-Bhattacharyya-ECONOMICS.jpg",
  fallbackImages: [
    "/assets/pressnews/01_images_preserved_structure/Arijit-Bhattacharyya-ECONOMICS.jpg",
    "/assets/pressnews/economic-times.jpg",
    "/assets/pressnews/01_images_preserved_structure/economic-times.jpg",
    "/assets/pressnews/ecotimes.png",
    "/assets/pressnews/01_images_preserved_structure/ecotimes.png",
  ],
  alt: "Economic Times business media coverage featuring Arijit Bhattacharyya",
  type: "Business Media",
  tags: ["Economic Times", "Entrepreneurship", "Innovation"],
};

const authorityItems: AuthorityItem[] = [
  {
    id: "the-hindu-technology-entrepreneurship",
    title: "The Hindu Technology & Entrepreneurship Coverage",
    publisher: "The Hindu",
    summary:
      "A national newspaper reference that strengthens the press archive beyond event photographs, connecting Arijit’s work with technology, entrepreneurship and public business discourse.",
    image: "/assets/pressnews/2019/the-hindu.png",
    fallbackImages: [
      "/assets/pressnews/2019/the-hindu.png",
      "/assets/pressnews/01_images_preserved_structure/the-hindu.png",
      "/assets/pressnews/01_images_preserved_structure/2019/the-hindu.png",
    ],
    alt: "The Hindu technology and entrepreneurship coverage connected to Arijit Bhattacharyya",
    type: "National Press",
    tags: ["The Hindu", "Technology", "Press"],
  },
  {
    id: "hindustan-times-startup-media",
    title: "Hindustan Times Startup & Business Feature",
    publisher: "Hindustan Times",
    summary:
      "Mainstream newspaper coverage associated with startup conversations, entrepreneurship visibility and the wider business ecosystem around Arijit Bhattacharyya’s work.",
    image: "/assets/pressnews/_hindustan-times-bihar-startup-pad-2016.jpg",
    fallbackImages: [
      "/assets/pressnews/01_images_preserved_structure/hindustantimes.png",
      "/assets/pressnews/_hindustan-times-bihar-startup-pad-2016.jpg",
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Startup_Ecosystem/_hindustan-times-bihar-startup-pad-2016.jpg",
    ],
    alt: "Hindustan Times coverage connected to startup and business ecosystem work by Arijit Bhattacharyya",
    type: "Newspaper",
    tags: ["Hindustan Times", "Startup", "Business"],
  },
  {
    id: "times-of-india-mainstream-press",
    title: "Times of India Mainstream Media Mention",
    publisher: "Times of India",
    summary:
      "A mainstream media reference adding national press credibility to the page while keeping this section focused on recognizable publications and public-facing coverage.",
    image: "/assets/pressnews/timesofindia-s.jpg",
    fallbackImages: [
      "/assets/pressnews/2024/timesofindia-s.jpg",
      "/assets/pressnews/01_images_preserved_structure/timesofindia-s.jpg",
      "/assets/pressnews/01_images_preserved_structure/2024/timesofindia-s.jpg",
    ],
    alt: "Times of India media coverage connected to Arijit Bhattacharyya",
    type: "Mainstream Media",
    tags: ["Times of India", "Press", "India"],
  },
  {
    id: "techsauce-international-startup-platform",
    title: "Techsauce Global Startup Platform Coverage",
    publisher: "Techsauce",
    summary:
      "An international startup and technology-platform reference that connects Arijit’s public profile with entrepreneurship, innovation and cross-border ecosystem conversations.",
    image: "/assets/pressnews/2018/tech-sauce.jpg",
    fallbackImages: [
      "/assets/pressnews/tech-sauce.jpg",
      "/assets/pressnews/01_images_preserved_structure/2018/tech-sauce.jpg",
      "/assets/pressnews/01_images_preserved_structure/tech-sauce.jpg",
    ],
    alt: "Techsauce international startup platform coverage featuring Arijit Bhattacharyya",
    type: "International Platform",
    tags: ["Techsauce", "Startup", "Global"],
  },
  {
    id: "telegraph-regional-business",
    title: "The Telegraph Regional Business Coverage",
    publisher: "The Telegraph",
    summary:
      "Regional business-media coverage that widens the archive beyond metro platforms and shows Arijit’s connection with entrepreneurship and business development conversations across eastern India.",
    image:
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Regional_Business/The Telegraph Enabling the Northeast — Agartala 2011.jpg",
    fallbackImages: [
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Regional_Business/The Telegraph Enabling the Northeast - Agartala 2011.jpg",
      "/assets/pressnews/The Telegraph Enabling the Northeast — Agartala 2011.jpg",
      "/assets/pressnews/01_images_preserved_structure/The Telegraph Enabling the Northeast — Agartala 2011.jpg",
    ],
    alt: "The Telegraph regional business coverage connected to Arijit Bhattacharyya and entrepreneurship in eastern India",
    type: "Regional Business",
    tags: ["The Telegraph", "Business", "Eastern India"],
  },
  {
    id: "magazine-feature-global-profile",
    title: "Magazine Feature on Global Speaking & Innovation",
    publisher: "Magazine Feature",
    summary:
      "A profile-style media feature that supports the wider personal-brand narrative: global speaking, entrepreneurship, technology, mentoring and innovation-led public work.",
    image:
      "/assets/pressnews/01_USE_NOW/Media___Newspapers___Magazine_Feature/Magazine Feature.jpg",
    fallbackImages: [
      "/assets/pressnews/Magazine Feature.jpg",
      "/assets/pressnews/01_images_preserved_structure/Magazine Feature.jpg",
      "/assets/pressnews/magazine-feature.jpg",
    ],
    alt: "Magazine feature highlighting global speaking and innovation work by Arijit Bhattacharyya",
    type: "Magazine",
    tags: ["Profile", "Speaking", "Innovation"],
  },
];

function AuthorityImage({
  item,
  className,
}: {
  item: AuthorityItem;
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

export default function MediaAuthorityGrid() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.22),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(14,165,233,.14),transparent_30%)]" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
              Media Authority
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
              Business media, national press and international platforms.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            This section moves beyond individual highlights and shows the media
            layer around Arijit Bhattacharyya’s work — business publications,
            national newspapers, startup platforms and profile-led coverage
            connected to technology, entrepreneurship and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#07111f] p-5 sm:min-h-[430px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(37,99,235,0.28),transparent_36%)]" />

              <AuthorityImage
                item={leadAuthority}
                className="relative max-h-[390px] w-full rounded-[1.7rem] object-contain shadow-2xl transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.26em] text-blue-300">
                <Newspaper className="mr-2 h-4 w-4" />
                {leadAuthority.publisher}
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                {leadAuthority.title}
              </h3>

              <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-300 sm:text-base">
                {leadAuthority.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {leadAuthority.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {leadAuthority.url && (
                <a
                  href={leadAuthority.url}
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
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {authorityItems.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                delay: Math.min(index * 0.04, 0.22),
                duration: 0.55,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#07111f] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.26),transparent_36%)]" />

                <AuthorityImage
                  item={item}
                  className="relative max-h-[235px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.type}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  <BadgeCheck className="mr-2 h-4 w-4" />
                  {item.publisher}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
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
                    Open Coverage
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

