import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Globe2, Newspaper } from "lucide-react";
import { featuredStories, pressPath } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

type Story = (typeof featuredStories)[number];

const imageFallbacksById: Record<string, string[]> = {
  "brilliantread-interview": [
    `${pressPath}Dubai-Arijit.jpg`,
    `${pressPath}ABP_Arijit.jpg`,
    `${pressPath}Arijit-Bhattacharyya.jpg`,
  ],
  "digitalconfex-speaker-profile": [
    `${pressPath}ABP_Arijit.jpg`,
    `${pressPath}Dubai-Arijit.jpg`,
    `${pressPath}china-films.jpg`,
  ],
  "diplomatic-club-profile": [
    `${pressPath}2021/diplomatic-world.jpg`,
    `${pressPath}diplomatic-world.jpg`,
    `${pressPath}ABP_Arijit.jpg`,
  ],
  "official-profile-pdf": [
    `${pressPath}china-films.jpg`,
    `${pressPath}Dubai-Arijit.jpg`,
    `${pressPath}ABP_Arijit.jpg`,
  ],
};

function cleanPublisher(story: Story) {
  if (story.id === "official-profile-pdf") return "Verified Profile";
  return story.publisher;
}

function cleanTitle(story: Story) {
  if (story.id === "official-profile-pdf") {
    return "Technology, Startups, AI, VR and Global Innovation";
  }

  return story.title;
}

function cleanSummary(story: Story) {
  if (story.id === "official-profile-pdf") {
    return "A verified profile consolidating Arijit Bhattacharyya’s work across startup mentoring, global speaking, innovation, Asian Development Bank consulting and technology ecosystem building.";
  }

  if (story.id === "digitalconfex-speaker-profile") {
    return "DigitalConfex profiles Arijit as a serial entrepreneur since 1998, public speaker, AI evangelist, VR specialist, blockchain specialist and global startup ecosystem voice.";
  }

  return story.summary;
}

function cleanTags(story: Story) {
  if (story.id === "official-profile-pdf") {
    return ["Startup India", "ADB", "Global Speaker"];
  }

  return story.tags.slice(0, 3);
}

function shouldShowSourceLink(story: Story) {
  return ![
    "digitalconfex-speaker-profile",
    "official-profile-pdf",
  ].includes(story.id);
}

function StoryImage({
  story,
  className,
}: {
  story: Story;
  className?: string;
}) {
  const fallbackImages = imageFallbacksById[story.id] ?? [story.image];
  const [imageSrc, setImageSrc] = useState(fallbackImages[0]);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const handleError = () => {
    const nextIndex = fallbackIndex + 1;
    const nextImage = fallbackImages[nextIndex];

    if (nextImage) {
      setFallbackIndex(nextIndex);
      setImageSrc(nextImage);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={story.alt}
      loading="lazy"
      onError={handleError}
      className={className}
    />
  );
}

export default function FeaturedStories() {
  const stories = featuredStories.slice(0, 4);
  const leadStory = stories[0];
  const otherStories = stories.slice(1);

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
              Featured Media Stories
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Public credibility beyond the website.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            Independent interviews, speaker profiles and global platform features
            documenting Arijit Bhattacharyya’s work across entrepreneurship,
            technology, innovation, investment, mentoring and global speaking.
          </p>
        </motion.div>

        {leadStory && (
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
                  {cleanTags(leadStory).map((tag) => (
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
                  {cleanPublisher(leadStory)}
                </p>

                <h3 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">
                  {cleanTitle(leadStory)}
                </h3>

                <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-300 sm:text-base">
                  {cleanSummary(leadStory)}
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

                {leadStory.url && shouldShowSourceLink(leadStory) && (
                  <a
                    href={leadStory.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#07111f] transition hover:-translate-y-0.5 hover:bg-blue-100"
                  >
                    Read Featured Story
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {otherStories.map((story, index) => (
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
                  {cleanPublisher(story)}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.025em] text-[#07111f] sm:text-2xl">
                  {cleanTitle(story)}
                </h3>

                <p className="mt-3 text-sm font-normal leading-7 text-slate-600">
                  {cleanSummary(story)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cleanTags(story).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {story.url && shouldShowSourceLink(story) && (
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-bold text-[#07111f] transition hover:text-blue-700"
                  >
                    View Feature
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