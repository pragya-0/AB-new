import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, Newspaper, PlayCircle, Radio } from "lucide-react";

import BioSectionShell from "../bio/BioSectionShell";
import SmartImage from "../bio/SmartImage";
import { fadeUp } from "../bio/bioMotion";

const press = "/assets/press/";

type MediaItem = {
  title: string;
  meta: string;
  image: string;
  fallback?: string;
  fit?: "cover" | "contain";
  alt: string;
};

const featured = {
  title: "China Blockchain & International Technology Media",
  eyebrow: "International Media Coverage",
  text: "Public conversations and media visibility across blockchain, technology, startups, gaming, VR, entrepreneurship and global innovation platforms.",
  image: `${press}China-blockchain.jpg`,
  alt: "Arijit Bhattacharyya featured in China blockchain international technology media coverage as innovator and entrepreneur",
};

const pressStories: MediaItem[] = [
  {
    title: "The Economic Times",
    meta: "Innovation • Entrepreneurship",
    image: `${press}economic-times.jpg`,
    fallback: `${press}2018/economic-times.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Economic Times coverage on innovation entrepreneurship startup growth and technology leadership",
  },
  {
    title: "Nepal TV",
    meta: "International Media • Nepal",
    image: `${press}Nepal_TV_Arijit-Bhattacharyya.png`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Nepal TV international media interview on innovation entrepreneurship and technology",
  },
  {
    title: "CNBC",
    meta: "Business • Technology",
    image: `${press}cnbc_arijit.jpg`,
    fallback: `${press}cnbc.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya CNBC business media discussion on startups SME futures innovation and technology",
  },
];

const publicPlatforms: MediaItem[] = [
  {
    title: "TEDx",
    meta: "Global Ideas Platform",
    image: `${press}2019/tedx.jpg`,
    fallback: `${press}tedx.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya TEDx speaker on entrepreneurship technology innovation and public speaking in India",
  },
  {
    title: "Josh Talks",
    meta: "Founder Storytelling",
    image: `${press}Joshtalks.jpeg`,
    fallback: `${press}2018/Josh-Talk_Bengali.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharya Josh Talks Bengali public speaking founder storytelling session",
  },
  {
    title: "Techsauce",
    meta: "Asia • Startups",
    image: `${press}2018/tech-sauce.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Techsauce Asia startup technology media coverage",
  },
  {
    title: "Technology Adviser",
    meta: "Innovation Advisory",
    image: `${press}technology_adviser.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya technology adviser for innovation emerging technology and startup ecosystems",
  },
  {
    title: "China Film Festival",
    meta: "China • Creative Tech",
    image: `${press}China_film_fest.jpg`,
    fallback: `${press}china-films.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharjee China Film Festival creative technology and media entertainment presence",
  },
  {
    title: "Kantipur Media",
    meta: "Nepal • Public Platform",
    image: `${press}2018/kantipur_media.jpg`,
    fit: "contain",
    alt: "Arijit India Kantipur Media Nepal public platform interview on entrepreneurship and innovation",
  },
  {
    title: "The Hindu",
    meta: "National Media",
    image: `${press}2019/the-hindu.png`,
    fit: "contain",
    alt: "Arijit Bhattacharyya The Hindu media coverage on startups innovation and technology",
  },
  {
    title: "Times of India",
    meta: "Business Visibility",
    image: `${press}2024/timesofindia-B.jpg`,
    fallback: `${press}timesofindia-s.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya entrepreneur Times of India media coverage on business innovation and entrepreneurship",
  },
];

function PressStoryCard({ item }: { item: MediaItem }) {
  return (
    <motion.article
      {...fadeUp}
      className="group grid gap-4 rounded-[26px] border border-[#bdd9ff] bg-white/85 p-3 shadow-[0_18px_50px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/35 hover:shadow-[0_24px_70px_rgba(0,87,255,0.14)] sm:grid-cols-[0.44fr_0.56fr] sm:items-center"
    >
      <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[20px] bg-[#f4f8ff]">
        <SmartImage
          src={item.image}
          fallbacks={item.fallback ? [item.fallback] : []}
          alt={item.alt}
          className={`h-full w-full ${
            item.fit === "contain"
              ? "object-contain p-4"
              : "object-cover object-top"
          }`}
        />
      </div>

      <div className="p-2 text-[#07101f]">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0057ff]">
          {item.meta}
        </p>

        <h3 className="text-[24px] font-extrabold leading-[1] tracking-[-0.04em] sm:text-[28px]">
          {item.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0057ff]">
          Media Proof
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

function PlatformCard({ item, large = false }: { item: MediaItem; large?: boolean }) {
  return (
    <motion.article
      {...fadeUp}
      className="group overflow-hidden rounded-[28px] border border-[#bdd9ff] bg-white shadow-[0_16px_50px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0057ff]/40 hover:shadow-[0_26px_80px_rgba(0,87,255,0.15)]"
    >
      <div className={`${large ? "h-[280px]" : "h-[210px]"} bg-[#f4f8ff]`}>
        <SmartImage
          src={item.image}
          fallbacks={item.fallback ? [item.fallback] : []}
          alt={item.alt}
          className={`h-full w-full ${
            item.fit === "contain"
              ? "object-contain p-5"
              : "object-cover object-top"
          }`}
        />
      </div>

      <div className="p-5 text-[#07101f]">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0057ff]">
          {item.meta}
        </p>

        <h4
          className={`font-extrabold leading-[1] tracking-[-0.04em] ${
            large ? "text-[30px]" : "text-[23px]"
          }`}
        >
          {item.title}
        </h4>
      </div>
    </motion.article>
  );
}

export default function MediaAppearances() {
  return (
    <BioSectionShell
      id="media-appearances"
      eyebrow="International Media"
      title="Press, Interviews & Public Media Platforms"
      text="Indian and international media coverage across business, technology, startups, blockchain, public speaking, gaming, VR and global innovation."
      className="bg-[radial-gradient(circle_at_top_right,rgba(0,87,255,0.12),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f6faff_45%,#e8f1ff_100%)]"
    >
      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[38px] border border-[#bdd9ff] bg-white shadow-[0_35px_100px_rgba(0,87,255,0.14)]"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] bg-[#f4f8ff] p-4 sm:min-h-[460px]">
              <SmartImage
                src={featured.image}
                alt={featured.alt}
                className="h-full min-h-[330px] w-full rounded-[28px] object-cover object-center sm:min-h-[430px]"
              />
            </div>

            <div className="flex flex-col justify-center p-7 text-[#07101f] sm:p-9">
              <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0057ff]/10 text-[#0057ff] ring-1 ring-[#0057ff]/15">
                <Globe2 className="h-6 w-6" />
              </div>

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0057ff]">
                {featured.eyebrow}
              </p>

              <h3 className="text-[34px] font-extrabold leading-[1] tracking-[-0.045em] sm:text-[44px] md:text-[52px]">
                {featured.title}
              </h3>

              <p className="mt-6 text-base font-normal leading-8 text-[#475569]">
                {featured.text}
              </p>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-5">
          {pressStories.map((item) => (
            <PressStoryCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <motion.div {...fadeUp} className="mt-16">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.65fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0057ff]">
              Public Platforms
            </p>

            <h3 className="mt-4 max-w-[720px] text-[36px] font-extrabold leading-[1] tracking-[-0.05em] text-[#07101f] sm:text-[46px] md:text-[56px]">
              Conversations Beyond Traditional Media
            </h3>
          </div>

          <p className="max-w-[780px] text-base font-normal leading-8 text-[#475569] lg:justify-self-end">
            From TEDx and Josh Talks to international technology platforms,
            innovation communities and public thought-leadership channels.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {publicPlatforms.slice(0, 2).map((item) => (
            <PlatformCard key={item.title} item={item} large />
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {publicPlatforms.slice(2).map((item) => (
            <PlatformCard key={item.title} item={item} />
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-12 grid gap-4 rounded-[30px] border border-[#bdd9ff] bg-white/80 p-6 text-[#07101f] shadow-[0_20px_70px_rgba(0,87,255,0.08)] md:grid-cols-3"
      >
        {[
          {
            icon: Newspaper,
            title: "National Press",
            text: "Economic Times, The Hindu, Times of India and business media.",
          },
          {
            icon: Radio,
            title: "Broadcast & TV",
            text: "CNBC, Nepal TV and public media interviews across regions.",
          },
          {
            icon: PlayCircle,
            title: "Public Platforms",
            text: "TEDx, Josh Talks, Techsauce and international innovation stages.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl bg-[#f5f9ff] p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0057ff]/10 text-[#0057ff]">
              <Icon className="h-5 w-5" />
            </div>
            <h4 className="text-xl font-bold tracking-[-0.03em]">{title}</h4>
            <p className="mt-3 text-sm font-normal leading-7 text-[#475569]">
              {text}
            </p>
          </article>
        ))}
      </motion.div>
    </BioSectionShell>
  );
}