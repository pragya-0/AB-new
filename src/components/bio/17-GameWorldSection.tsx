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
  ["Model To Character", `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (2).jpeg`],
  ["VR Gaming Characters", `${gamePath}WhatsApp Image 2026-06-16 at 19.23.54 (3).jpeg`],
];

function BigCard({
  title,
  image,
  className = "",
  height = "h-[340px]",
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
      className={`${className} group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[#58a0ff]/45`}
    >
      <div className={`relative ${height} overflow-hidden bg-black`}>
        <SmartImage
          src={image}
          fallbacks={[`${gallery}nada.jpeg`, `${gamePath}comics-img6.jpg`]}
          alt={title}
          className="h-full w-full object-contain object-center p-2 transition duration-700 group-hover:scale-[1.025]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#8bb7ff]">
            {featured ? "Featured AI Film" : "Creative IP"}
          </p>

          <h3
            className={`font-black leading-[0.92] tracking-[-0.06em] text-white ${
              featured ? "text-[42px] md:text-[62px]" : "text-[30px] md:text-[40px]"
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
      title="Featured AI Films, Comics & Character Worlds"
      text="A tighter Bio snapshot of Arijit Bhattacharyya's cinematic IP archive across AI-led films, mythology worlds, comics, superheroes, digital humans and game characters."
    >
      <div className="space-y-10 pt-10 md:pt-14">
        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.12),transparent_42%)] shadow-[0_30px_110px_rgba(0,0,0,0.28)]"
        >
          <div className="relative flex h-[500px] items-end overflow-hidden p-7 md:h-[600px] md:p-12">
            <SmartImage
              src={`${gamePath}comics-img5.jpg`}
              fallbacks={[`${gamePath}comics-img6.jpg`, `${gamePath}comics-img4.jpg`]}
              alt="Arijit Bhattacharyya creative universe of AI films comics and game characters"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/94 via-black/46 to-black/16" />

            <div className="relative z-10 max-w-[980px] pb-4">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.36em] text-[#8bb7ff]">
                Game Worlds / AI Films / Character IP
              </p>

              <h3 className="text-[44px] font-black leading-[0.88] tracking-[-0.075em] text-white md:text-[70px]">
                Films. Games. Comics. Characters. Worlds.
              </h3>

              <p className="mt-6 max-w-[780px] text-[16px] leading-8 text-white/72">
                A cinematic archive connecting mythology-led films, superhero IP,
                VR gaming, model-to-character work, digital-human creation and
                AI-powered storytelling.
              </p>

              <p className="mt-5 max-w-[760px] text-[12px] font-black uppercase leading-6 tracking-[0.22em] text-[#8bb7ff]/90">
                Including early Gen AI movie initiatives and mythology-inspired
                AI storytelling projects.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.section
          {...fadeUp}
          className="rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.08),transparent_42%)] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#58a0ff]">
              Gen AI Movies
            </p>

            <h3 className="text-[36px] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[54px]">
              AI-Led Films & Mythology Worlds
            </h3>

            <p className="mt-5 max-w-[880px] text-[16px] leading-8 text-white/64">
              Featured cinematic concepts from mythology, fantasy, action,
              futuristic stories and early Gen AI film development.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5">
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
                    : "col-span-12 md:col-span-6 xl:col-span-4"
                }
                height={index < 2 ? "h-[360px]" : "h-[300px]"}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,90,255,0.08),transparent_42%)] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="mb-8 max-w-[1040px]">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#58a0ff]">
              Comics & Virtual Worlds
            </p>

            <h3 className="text-[36px] font-black leading-[0.92] tracking-[-0.06em] text-white md:text-[54px]">
              Comics, characters and game-world storytelling.
            </h3>

            <p className="mt-5 max-w-[860px] text-[16px] leading-8 text-white/64">
              Original comic universes, game characters, model-to-character
              transformations, digital humans and visual storytelling created
              across decades.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5">
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
                height="h-[320px]"
              />
            ))}
          </div>
        </motion.section>
      </div>
    </BioSectionShell>
  );
}