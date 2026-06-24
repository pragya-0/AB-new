import { motion } from "framer-motion";

import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { gallery, gamePath } from "../../data/bio/bioAssets";

const filmHero = {
  title: "Ashwathama",
  image: `${gallery}WhatsApp Image 2026-06-16 at 19.28.41.jpeg`,
};

const featuredFilms = [
  ["Broken", `${gallery}WhatsApp Image 2026-06-16 at 19.29.06.jpeg`],
  ["Time Traveler", `${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (25).jpeg`],
  ["Karna", `${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (26).jpeg`],
  ["Nada", `${gallery}nada.jpeg`],
  ["Crave", `${gallery}WhatsApp Image 2026-06-16 at 19.23.53 (15).jpeg`],
  ["Hanuman", `${gallery}WhatsApp Image 2026-06-16 at 19.25.21.jpeg`],
  ["Parde Ke Peeche", `${gallery}WhatsApp Image 2026-06-16 at 19.26.11.jpeg`],
  ["Heal The Earth", `${gallery}WhatsApp Image 2026-06-16 at 19.24.55.jpeg`],
];

const comicHero = {
  title: "Character Fantasy World",
  image: `${gamePath}comics-img4.jpg`,
};

const comicWorlds = [
  ["Action Comic Universe", `${gamePath}comics-img5.jpg`],
  ["Model to Superhero & IP", `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (2).jpeg`],
  ["VR Gaming Characters", `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (3).jpeg`],
];

const proofStats = [
  ["520+", "Games, VR & AR Projects"],
  ["750+", "Indie Developers Supported"],
  ["360+", "Superhero Characters"],
  ["350+", "Models Converted Into Digital IP"],
  ["275+", "Celebrities & Models Worked With"],
  ["54+", "Original Superheroes"],
  ["21", "Comic Series"],
  ["7+", "Movies Produced"],
  ["12", "Pocket Films"],
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
  "Produced India’s mythology-led RPG game Ashwathama the Immortal.",
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
  "Worked on mythology, science-fiction, fantasy and social-impact narratives through original IP development.",
  "Supported actors, creators and independent filmmakers through creative technology and production ecosystems.",
  "Created Gen AI-led film concepts across mythology, fantasy, futuristic and social themes.",
];

const mythologyResearch = [
  "Research on Indian mythology, culture and storytelling frameworks.",
  "Use of kalari fighters and live-action references for character development.",
  "Study of hero journeys, comic structures and mythology-inspired narratives.",
  "Creation of original superhero universes across games, comics and films.",
  "Exploration of science behind mythology for future storytelling formats.",
  "Character world-building integrating technology, culture and education.",
];

const genAiWorks = [
  "Ashwathama",
  "Karna",
  "Time Traveller The Gem",
  "Middle Class",
  "Raat ka Nasha",
  "Time Travel in Mahabharata",
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

function BigCard({
  title,
  image,
  className = "",
  height = "h-[320px]",
  featured = false,
}: {
  title: string;
  image: string;
  className?: string;
  height?: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`${className} group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-[0_22px_75px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45 md:rounded-[28px]`}
    >
      <div className={`relative ${height} overflow-hidden bg-black`}>
        <SmartImage
          src={image}
          fallbacks={[`${gallery}nada.jpeg`, `${gamePath}comics-img6.jpg`]}
          alt={`Arijit Bhattacharyya creative IP ${title} from AI films comics game worlds and character universe`}
          className="h-full w-full object-contain object-center p-2 transition duration-700 group-hover:scale-[1.02]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8bb7ff]">
            {featured ? "Featured AI Film" : "Creative IP"}
          </p>

          <h3
            className={`font-bold leading-[1.05] tracking-[-0.03em] text-white ${
              featured ? "text-[34px] md:text-[46px]" : "text-[24px] md:text-[30px]"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function GameWorldSection() {
  return (
    <BioSectionShell
      dark
      eyebrow="Creative Universe"
      title="Games, Movies, Superheroes & Original IP"
      text="A Bio snapshot of Arijit Bhattacharyya’s archive across AI-led films, mythology worlds, games, comics, superheroes, digital humans, real models as 3D characters and creative technology."
    >
      <div className="space-y-8 pt-6 md:space-y-10 md:pt-10">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.12),transparent_42%)] shadow-[0_30px_110px_rgba(0,0,0,0.28)] md:rounded-[36px]"
        >
          <div className="relative flex min-h-[560px] items-end overflow-hidden p-5 sm:p-6 md:min-h-[680px] md:p-10 lg:p-12">
            <SmartImage
              src={`${gamePath}comics-img5.jpg`}
              fallbacks={[`${gamePath}comics-img6.jpg`, `${gamePath}comics-img4.jpg`]}
              alt="Arijit Bhattacharyya creative universe of AI films comics game characters superheroes digital humans and model to superhero IP"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/50 to-black/18" />

            <div className="relative z-10 max-w-[1100px] pb-3">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8bb7ff]">
                Game Worlds / AI Films / Character IP
              </p>

              <h3 className="max-w-[980px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px] lg:text-[64px]">
                Films. Games. Comics. Characters. Worlds.
              </h3>

              <p className="mt-6 max-w-[860px] text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-white/72 md:text-[18px]">
                A cinematic archive connecting mythology-led films, superhero IP,
                VR gaming, model-to-superhero work, digital-human creation and
                AI-powered storytelling. The work includes games, VR, AR, comics,
                films, models, actors, mythology research, global characters,
                blockchain-linked creative ecosystems and original character worlds
                built over decades.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {proofStats.map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/28 p-4 backdrop-blur"
                  >
                    <p className="text-[34px] font-bold leading-none tracking-[-0.04em] text-white md:text-[44px]">
                      {value}
                    </p>

                    <p className="mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-white/62">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <motion.section
          {...fadeUp}
          className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.08),transparent_42%)] px-5 py-7 md:rounded-[36px] md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#58a0ff]">
              Gen AI Movies
            </p>

            <h3 className="text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
              AI-Led Films & Mythology Worlds
            </h3>

            <p className="mt-5 max-w-[900px] text-[16px] font-normal leading-[1.8] text-white/64 md:text-[18px]">
              Featured cinematic concepts from mythology, fantasy, action,
              futuristic stories and early Gen AI film development, including
              India’s first movie using Gen AI in 2025.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <BigCard
              title={filmHero.title}
              image={filmHero.image}
              className="col-span-12"
              height="h-[420px] md:h-[520px]"
              featured
            />

            {featuredFilms.map(([title, image], index) => (
              <BigCard
                key={title}
                title={title}
                image={image}
                className={
                  index < 2
                    ? "col-span-12 lg:col-span-6"
                    : "col-span-12 sm:col-span-6 xl:col-span-4"
                }
                height={index < 2 ? "h-[340px] md:h-[380px]" : "h-[300px]"}
              />
            ))}
          </div>

          <div className="mt-7 rounded-[24px] border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
              Gen AI Works by Arijit Bhattacharyya
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {genAiWorks.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/68 sm:text-[10px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.08),transparent_42%)] px-5 py-7 md:rounded-[36px] md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#58a0ff]">
              Comics & Virtual Worlds
            </p>

            <h3 className="text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
              Comics, characters and game-world storytelling.
            </h3>

            <p className="mt-5 max-w-[900px] text-[16px] font-normal leading-[1.8] text-white/64 md:text-[18px]">
              Original comic universes, game characters, model-to-superhero
              transformations, digital humans, mythology research and visual
              storytelling created across decades.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <BigCard
              title={comicHero.title}
              image={comicHero.image}
              className="col-span-12"
              height="h-[420px] md:h-[520px]"
              featured
            />

            {comicWorlds.map(([title, image]) => (
              <BigCard
                key={title}
                title={title}
                image={image}
                className="col-span-12 md:col-span-4"
                height="h-[300px] md:h-[340px]"
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[30px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 md:rounded-[36px] md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
            Movies, Production & Creative Technology
          </p>

          <h3 className="mt-4 max-w-[920px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Films, short movies, VFX co-production and Gen AI storytelling.
          </h3>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {filmProductionProof.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-[15px] font-normal leading-[1.7] text-white/70 md:text-[16px]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 md:rounded-[36px] md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
            Mythology & Character Research
          </p>

          <h3 className="mt-4 max-w-[920px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Research Behind Characters, Culture & Storytelling
          </h3>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {mythologyResearch.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-[15px] font-normal leading-[1.7] text-white/70 md:text-[16px]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[30px] border border-[#58a0ff]/20 bg-[#0057ff]/10 p-5 md:rounded-[36px] md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7fb8ff]">
            Games, VR, AR & Digital Human Proof
          </p>

          <h3 className="mt-4 max-w-[920px] text-[34px] font-extrabold leading-[1] tracking-[-0.04em] text-white md:text-[46px]">
            Real actors, models and mythology worlds transformed into game IP.
          </h3>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {gameProof.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-[15px] font-normal leading-[1.7] text-white/70 md:text-[16px]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </BioSectionShell>
  );
}