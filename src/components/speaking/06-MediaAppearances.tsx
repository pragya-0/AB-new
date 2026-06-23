import { motion } from "framer-motion";

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
  eyebrow: "International Media",
  text: "Public conversations and media visibility across blockchain, technology, startups, gaming, VR and global innovation platforms.",
  image: `${press}China-blockchain.jpg`,
  alt: "Arijit Bhattacharyya featured in China blockchain international technology media coverage",
};

const pressStories: MediaItem[] = [
  {
    title: "The Economic Times",
    meta: "Driving Innovation & Entrepreneurial Growth",
    image: `${press}economic-times.jpg`,
    fallback: `${press}2018/economic-times.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Economic Times coverage on innovation entrepreneurship and startup growth",
  },
  {
    title: "Nepal TV",
    meta: "International Media • Innovation",
    image: `${press}Nepal_TV_Arijit-Bhattacharyya.png`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Nepal TV international media interview on innovation and entrepreneurship",
  },
  {
    title: "CNBC",
    meta: "Business • Innovation • Technology",
    image: `${press}cnbc_arijit.jpg`,
    fallback: `${press}cnbc.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya CNBC business media discussion on SME futures startups and technology",
  },
];

const publicPlatforms: MediaItem[] = [
  {
    title: "TEDx",
    meta: "Global Ideas Platform",
    image: `${press}2019/tedx.jpg`,
    fallback: `${press}tedx.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya TEDx speaker on entrepreneurship technology and innovation",
  },
  {
    title: "Josh Talks",
    meta: "Public Speaking • Founder Storytelling",
    image: `${press}Joshtalks.jpeg`,
    fallback: `${press}2018/Josh-Talk_Bengali.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Josh Talks Bengali public speaking founder storytelling session",
  },
  {
    title: "Techsauce",
    meta: "Asia • Startups • Technology",
    image: `${press}2018/tech-sauce.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Techsauce Asia startup technology media coverage",
  },
  {
    title: "Technology Adviser",
    meta: "Innovation • Advisory • Emerging Tech",
    image: `${press}technology_adviser.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya technology adviser for innovation emerging technology and startup ecosystems",
  },
  {
    title: "China Film Festival",
    meta: "China • Films • Creative Technology",
    image: `${press}China_film_fest.jpg`,
    fallback: `${press}china-films.jpg`,
    fit: "cover",
    alt: "Arijit Bhattacharyya China Film Festival creative technology and media entertainment presence",
  },
  {
    title: "Kantipur Media",
    meta: "Nepal • Media • Public Platform",
    image: `${press}2018/kantipur_media.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Kantipur Media Nepal public platform interview",
  },
  {
    title: "The Hindu",
    meta: "National Media • Innovation Coverage",
    image: `${press}2019/the-hindu.png`,
    fit: "contain",
    alt: "Arijit Bhattacharyya The Hindu media coverage on startups innovation and technology",
  },
  {
    title: "Times of India",
    meta: "National Media • Business Visibility",
    image: `${press}2024/timesofindia-B.jpg`,
    fallback: `${press}timesofindia-s.jpg`,
    fit: "contain",
    alt: "Arijit Bhattacharyya Times of India media coverage on business innovation and entrepreneurship",
  },
];

function MediaCard({
  item,
  imageHeight,
  titleSize,
}: {
  item: MediaItem;
  imageHeight: string;
  titleSize: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="overflow-hidden rounded-[28px] border border-[#bdd9ff] bg-white shadow-[0_14px_45px_rgba(0,87,255,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,87,255,0.14)]"
    >
      <div className={`${imageHeight} bg-[#f5f9ff]`}>
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

      <div className="p-5">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0057ff]">
          {item.meta}
        </p>

        <h4
          className={`${titleSize} font-black leading-tight tracking-[-0.04em] text-[#07101f]`}
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
      text="Coverage and public conversations across Indian and international media, business platforms, technology communities and public thought-leadership channels."
      className="bg-gradient-to-br from-white via-[#f5f9ff] to-[#e8f1ff]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <motion.article {...fadeUp} className="space-y-7">
          <div className="rounded-[38px] border border-[#bdd9ff] bg-white p-4 shadow-[0_28px_90px_rgba(0,87,255,0.12)]">
            <SmartImage
              src={featured.image}
              alt={featured.alt}
              className="h-[360px] w-full rounded-[28px] object-cover object-top md:h-[560px]"
            />
          </div>

          <div className="max-w-[900px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#0057ff]">
              {featured.eyebrow}
            </p>

            <h3 className="text-[40px] font-black leading-[0.92] tracking-[-0.065em] text-[#07101f] md:text-[62px]">
              {featured.title}
            </h3>

            <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-[#475569]">
              {featured.text}
            </p>
          </div>
        </motion.article>

        <div className="space-y-5">
          {pressStories.map((item) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              className="grid gap-5 rounded-[30px] border border-[#bdd9ff] bg-white p-4 shadow-[0_18px_55px_rgba(0,87,255,0.08)] sm:grid-cols-[0.48fr_0.52fr] sm:items-center"
            >
              <div className="flex h-[185px] items-center justify-center overflow-hidden rounded-[22px] bg-[#f5f9ff]">
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
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#0057ff]">
                  {item.meta}
                </p>

                <h3 className="text-[30px] font-black leading-[0.95] tracking-[-0.055em]">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div {...fadeUp} className="mt-14">
        <div className="mb-8">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#0057ff]">
            Public Platforms
          </p>

          <h3 className="mt-3 text-[40px] font-black leading-[0.92] tracking-[-0.06em] text-[#07101f] md:text-[58px]">
            Conversations Beyond Traditional Media
          </h3>

          <p className="mt-4 max-w-[760px] text-[16px] leading-8 text-[#475569]">
            From TEDx stages and Josh Talks to international technology
            platforms, innovation communities and public thought-leadership
            channels.
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            {publicPlatforms.slice(0, 2).map((item) => (
              <MediaCard
                key={item.title}
                item={item}
                imageHeight="h-[280px]"
                titleSize="text-[28px]"
              />
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {publicPlatforms.slice(2, 5).map((item) => (
              <MediaCard
                key={item.title}
                item={item}
                imageHeight="h-[220px]"
                titleSize="text-[22px]"
              />
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {publicPlatforms.slice(5, 8).map((item) => (
              <MediaCard
                key={item.title}
                item={item}
                imageHeight="h-[220px]"
                titleSize="text-[22px]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </BioSectionShell>
  );
}