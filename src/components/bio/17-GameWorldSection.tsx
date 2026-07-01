import { motion } from "framer-motion";

import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { gallery, gamePath } from "../../data/bio/bioAssets";

type CreativeItem = {
  title: string;
  image: string;
  fallbacks?: string[];
  label?: string;
};

const filmHero: CreativeItem = {
  title: "Ashwathama",
  label: "Featured AI Film",
  image: `${gallery}WhatsApp Image 2026-06-16 at 19.28.41.jpeg`,
  fallbacks: [`${gallery}ashwathama-poster-vertical.png`, `${gallery}nada.jpeg`],
};

const featuredFilms: CreativeItem[] = [
  {
    title: "Broken",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.29.06.jpeg`,
    fallbacks: [`${gallery}broken-poster-vertical.png`],
  },
  {
    title: "Time Travel",
    label: "Creative IP",
    image: `${gallery}time-traveller-poster-vertical.png`,
    fallbacks: [`${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (25).jpeg`],
  },
  {
    title: "Karna",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (26).jpeg`,
    fallbacks: [`${gallery}karna-poster-vertical.png`],
  },
  {
    title: "Nada",
    label: "Creative IP",
    image: `${gallery}nada.jpeg`,
    fallbacks: [`${gallery}nada-poster-vertical.png`],
  },
  {
    title: "Crave",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (15).jpeg`,
  },
  {
    title: "Hanuman",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.25.21.jpeg`,
  },
  {
    title: "Parde Ke Peeche",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.26.11.jpeg`,
  },
  {
    title: "Heal The Earth",
    label: "Creative IP",
    image: `${gallery}WhatsApp Image 2026-06-16 at 19.24.55.jpeg`,
  },
];

const comicHero: CreativeItem = {
  title: "Character Fantasy World",
  label: "Featured Comic World",
  image: `${gamePath}comics-img4.jpg`,
  fallbacks: [`${gamePath}comics-img3.jpg`, `${gamePath}comics-img5.jpg`],
};

const comicWorlds: CreativeItem[] = [
  {
    title: "Action Comic Universe",
    label: "Creative IP",
    image: `${gamePath}comics-img5.jpg`,
    fallbacks: [`${gamePath}comics-img3.jpg`, `${gamePath}comics-img4.jpg`],
  },
  {
    title: "Classic Comic Archive",
    label: "Creative IP",
    image: `${gamePath}comics-img3.jpg`,
    fallbacks: [`${gamePath}comics-img4.jpg`, `${gamePath}comics-img5.jpg`],
  },
  {
    title: "Next-Gen VR Gaming Characters",
    label: "Creative IP",
    image: `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (1).jpeg`,
    fallbacks: [
      `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54.jpeg`,
      `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (3).jpeg`,
    ],
  },
  {
    title: "Villain Chase Game Concept",
    label: "Creative IP",
    image: `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54.jpeg`,
    fallbacks: [
      `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (1).jpeg`,
      `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (3).jpeg`,
    ],
  },
  {
    title: "Movie Game Character IP",
    label: "Creative IP",
    image: `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (3).jpeg`,
    fallbacks: [`${gamePath}ip-character-real-human.jpg`],
  },
];

const gameProof = [
  "Producer of 520+ games, VR and AR projects and gave opportunity to 750+ indie developers around the world.",
  "Created 360+ superhero game characters from real actors and celebrities.",
  "Created 54+ superheroes of his own across 21 comics series.",
  "Worked with more than 275 celebrities, actors, actresses and models across gaming, media and digital IP projects.",
  "Built model-to-superhero and digital-human IP from real actors and models from India and across global creative markets.",
  "Built one of India’s earliest model-to-superhero conversion ecosystems integrating real actors into game and comic worlds.",
  "Created digital humans from real actors, models and public personalities using proprietary creative-technology pipelines.",
  "Created India’s first cosplay community platform and character ecosystem connecting creators with gaming culture.",
  "Built one of India's earliest B2B game publishing and distribution platforms.",
  "Established VR laboratories and immersive technology initiatives across India and the Middle East.",
  "Produced Bengal’s first movie-based game with Actor Jeet in Boss 2.",
  "Created India’s first real actor and actress based RPG game.",
  "Produced India’s epic-led RPG game Ashwathama the Immortal.",
  "Used kalari fighters and real-life shooting of models in 2007 to create 3D game characters for Ashwathama the Immortal.",
  "Created Shaktimaan the game and Shaktimaan the Battle with superstar Mukesh Khanna.",
  "Created game IP involving actors including Mukesh Khanna, Subhashree Ganguly, Priyanka Sarkar and Arjun Chakraborty.",
  "Produced Bangladesh’s superhero movie-based game Bizli.",
  "Produced Nepal’s first 3D racing game and Bhutan’s first 3D game.",
  "Built VR games and immersive experiences executed in China, including 3D VR games integrated with China-based VR devices.",
  "Worked on VR theme park experiences in Kiev, Ukraine.",
  "Created Fight of the Legends, a superhero-based fighting game series using 200+ models and actors as 3D game characters.",
  "Created Bengali folk-tale based games including Sukhu Dukhu, Lalkamal Nilkamal and Dacoits of Bengal.",
  "Created games and apps for Nokia, Microsoft and Apple platforms.",
  "Developed Asia’s first Intel Ultrabook-based game as software development partner.",
  "Built industrial animation and simulation solutions across oil rigging, real estate, medical, technology and FMCG.",
  "Marketed blockchain and crypto projects around the world.",
  "Made several local actors and artists popular globally in TV series and international movie markets in Asia.",
  "Creator of India’s first movie using Gen AI in 2025.",
];

const filmProductionProof = [
  "Produced 7+ movies and several short movies as investor and sleeping producer.",
  "Produced 7 short movies and 12 pocket films.",
  "Created approximately 24 short indie movies and 2 long indie movie projects connected with creative IP and film production.",
  "Worked as VFX co-producer for 2 Spanish movies.",
  "Produced Bengal’s first movie-based game Boss 2.",
  "Produced content across feature films, short films, pocket films and AI-generated cinematic storytelling.",
  "Worked on epic storytelling, science-fiction, fantasy and social-impact narratives through original IP development.",
  "Supported actors, creators and independent filmmakers through creative technology and production ecosystems.",
  "Created Gen AI-led film concepts across epic storytelling, fantasy, futuristic and social themes.",
];

const epicStorytellingResearch = [
  "Research on Indian epic traditions, culture and storytelling frameworks.",
  "Use of kalari fighters and live-action references for character development.",
  "Study of hero journeys, comic structures and epic-inspired narratives.",
  "Creation of original superhero universes across games, comics and films.",
  "Exploration of science behind Indian epic traditions for future storytelling formats.",
  "Character world-building integrating technology, culture and education.",
];

const genAiWorks = [
  "Ashwathama",
  "Karna",
  "Time Travel",
  "Middle Class",
  "Raat ka Nasha",
  "Time Travel in Epic Worlds",
  "Dharmayudhha 3025",
  "Drona Gen AI Birth",
  "Drona",
  "Samudra Manthan",
  "Nada",
  "Broken",
  "Hanuman",
  "Heal The Earth",
  "Parde Ke Peeche",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#B8792A]">
      {children}
    </p>
  );
}

function CreativeCard({
  title,
  image,
  fallbacks = [],
  label = "Creative IP",
  featured = false,
}: CreativeItem & {
  featured?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`group mb-5 break-inside-avoid overflow-hidden rounded-[26px] border border-white/10 bg-[#05070b] shadow-sm transition duration-700 hover:-translate-y-1 hover:border-[#B8792A]/45 hover:shadow-2xl md:mb-6 ${
        featured ? "rounded-[32px]" : ""
      }`}
    >
      <div className="flex items-center justify-center bg-black px-2 py-2">
        <SmartImage
          src={image}
          fallbacks={fallbacks}
          alt={`Arijit Bhattacharyya ${title} creative IP visual`}
          className={`block h-auto w-auto max-w-full object-contain ${
            featured
              ? "max-h-[360px] sm:max-h-[420px] lg:max-h-[460px]"
              : "max-h-[280px] sm:max-h-[320px] lg:max-h-[360px]"
          }`}
        />
      </div>

      <div className="border-t border-white/10 bg-[#050505] px-4 py-4 md:px-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B8792A]">
          {label}
        </p>

        <h3
          className={`font-black leading-[1] tracking-[-0.04em] text-white ${
            featured ? "text-[22px] md:text-[28px]" : "text-[18px] md:text-[20px]"
          }`}
        >
          {title}
        </h3>
      </div>
    </motion.article>
  );
}

function CreativeMasonry({
  hero,
  items,
}: {
  hero: CreativeItem;
  items: CreativeItem[];
}) {
  return (
    <div>
      <div className="mx-auto max-w-[920px]">
        <CreativeCard {...hero} featured />
      </div>

      <div className="columns-1 gap-5 md:columns-2 md:gap-6 xl:columns-3">
        {items.map((item) => (
          <CreativeCard key={`${item.title}-${item.image}`} {...item} />
        ))}
      </div>
    </div>
  );
}

function ProofList({
  eyebrow,
  title,
  items,
  blue = false,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  blue?: boolean;
}) {
  return (
    <motion.section
      {...fadeUp}
      className={`rounded-[30px] border p-5 md:p-8 ${
        blue
          ? "border-[#B8792A]/25 bg-[#B8792A]/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>

      <h3 className="max-w-[1320px] text-[42px] font-black leading-[0.9] tracking-[-0.055em] [text-wrap:balance] text-white md:text-[64px] xl:text-[76px]">
        {title}
      </h3>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[22px] border border-white/10 bg-black/25 p-5 text-[15px] leading-7 text-white/72 transition duration-700 hover:-translate-y-1 hover:border-[#B8792A]/40"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default function GameWorldSection() {
  return (
    <section className="bg-[#03070d] py-14 md:py-20">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-12 xl:px-14">
      <div className="space-y-8 pt-6 md:space-y-10 md:pt-10">
<motion.section
          {...fadeUp}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <Eyebrow>Gen AI Movies</Eyebrow>

            <h3 className="text-[42px] font-black leading-[0.9] tracking-[-0.055em] text-white md:text-[64px] xl:text-[76px]">
              AI-Led Films & Epic Worlds
            </h3>

            <p className="mt-6 max-w-[900px] text-[17px] leading-8 text-white/70 md:text-[19px] md:leading-9">
              Featured cinematic concepts from epic storytelling, fantasy,
              action, futuristic stories and early Gen AI film development,
              including India’s first movie using Gen AI in 2025.
            </p>
          </div>

          <CreativeMasonry hero={filmHero} items={featuredFilms} />

          <div className="mt-8 rounded-[30px] border border-white/10 bg-black/25 p-5 md:p-6">
            <Eyebrow>Gen AI Works by Arijit Bhattacharyya</Eyebrow>

            <div className="flex flex-wrap gap-2">
              {genAiWorks.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <Eyebrow>Comics & Virtual Worlds</Eyebrow>

            <h3 className="text-[42px] font-black leading-[0.9] tracking-[-0.055em] text-white md:text-[64px] xl:text-[76px]">
              Comics, Characters and Game-World Storytelling.
            </h3>

            <p className="mt-6 max-w-[900px] text-[17px] leading-8 text-white/70 md:text-[19px] md:leading-9">
              Original comic universes, game characters, model-to-superhero
              transformations, digital humans, epic research and visual
              storytelling created across decades.
            </p>
          </div>

          <CreativeMasonry hero={comicHero} items={comicWorlds} />
        </motion.section>

        <ProofList
          blue
          eyebrow="Movies, Production & Creative Technology"
          title="Films, VFX & Gen AI Storytelling."
          items={filmProductionProof}
        />

        <ProofList
          eyebrow="Epic & Character Research"
          title="Research Behind Characters, Culture & Storytelling"
          items={epicStorytellingResearch}
        />

        <ProofList
          blue
          eyebrow="Games, VR, AR & Digital Human Proof"
          title="Real Actors, Models and Epic Worlds Transformed Into Game IP."
          items={gameProof}
        />
      </div>
          </div>
    </section>
  );
}

