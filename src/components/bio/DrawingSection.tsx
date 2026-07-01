import { motion } from "framer-motion";

import BioSectionShell from "./BioSectionShell";
import SmartImage from "./SmartImage";
import { fadeUp } from "./bioMotion";
import { drawingPath } from "../../data/bio/bioAssets";

const pencil = `${drawingPath}Pencil/`;
const digital = `${drawingPath}digital/`;
const color = `${drawingPath}color/`;

const featured = [
  ["Pencil Portrait Archive", `${pencil}pencil-work.jpg`],
  ["Character Sketches", `${pencil}indian-artist.jpg`],
  ["Classic Portrait Study", `${pencil}subhasree-ganguly.jpg`],
];

const pencilWorks = [
  ["Portrait Study", `${pencil}1.jpg`],
  ["Female Portrait", `${pencil}3.jpg`],
  ["Sketch Work", `${pencil}4.jpg`],
  ["Expression Study", `${pencil}5.jpg`],
  ["Mother & Child", `${pencil}6.jpg`],
  ["Face Study", `${pencil}7.jpg`],
  ["Emotional Sketch", `${pencil}10.jpg`],
  ["Actor Sketch", `${pencil}SRk Actor.jpg`],
  ["Character Face", `${pencil}Mithun Actor.jpg`],
  ["Classic Face", `${pencil}susmita-sen.jpg`],
  ["1996 Archive", `${pencil}14.jpg`],
  ["Portrait Memory", `${pencil}Mother Teresa.jpg`],
];

const digitalWorks = [
  ["Arabian Character", `${digital}arabian-character.jpg`],
  ["Archer", `${digital}archer.jpg`],
  ["Cars", `${digital}cars.jpg`],
  ["Chloe", `${digital}chloe.jpg`],
  ["Poppy", `${digital}poppy.jpg`],
  ["Sarah", `${digital}sarah.jpg`],
  ["Surpanakha", `${digital}surpanakha.jpg`],
  ["Tiger Lilly", `${digital}tiger-lilly.jpg`],
];

const colorWorks = [
  ["Color Study", `${color}1.jpg`],
  ["Painted Portrait", `${color}2.jpg`],
];

function ArtCard({
  title,
  image,
  className = "",
  height = "h-[320px] sm:h-[360px]",
  imageMode = "contain",
}: {
  title: string;
  image: string;
  className?: string;
  height?: string;
  imageMode?: "contain" | "cover";
}) {
  const imageClass =
    imageMode === "cover"
      ? "object-cover object-center"
      : "object-contain object-center p-4 sm:p-5";

  return (
    <motion.article
      {...fadeUp}
      className={`${className} group overflow-hidden rounded-[24px] border border-[#bdd9ff] bg-white shadow-[0_18px_55px_rgba(0,87,255,0.09)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,87,255,0.13)]`}
    >
      <div
        className={`relative ${height} overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_54%,#eef6ff_100%)]`}
      >
        <SmartImage
          src={image}
          alt={title}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.025] ${imageClass}`}
        />
      </div>

      <div className="border-t border-[#d9e9ff] bg-white px-5 py-4">
        <h3 className="text-[18px] font-bold leading-tight tracking-[-0.025em] text-[#07101f] md:text-[20px]">
          {title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function DrawingSection() {
  return (
    <BioSectionShell
      eyebrow="Artist • Drawing • Comics"
      title="Drawing, Comics and Storytelling"
      text="Before the large technology ecosystem, there is also the artist: pencil portraits, digital characters, epic research and original visual storytelling."
    >
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ArtCard
            title={featured[0][0]}
            image={featured[0][1]}
            className="lg:row-span-2"
            height="h-[420px] sm:h-[520px] lg:h-[640px]"
          />

          {featured.slice(1).map(([title, image]) => (
            <ArtCard
              key={title}
              title={title}
              image={image}
              height="h-[260px] sm:h-[300px]"
            />
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-[30px] border border-[#bdd9ff] bg-white p-5 shadow-[0_20px_65px_rgba(0,87,255,0.08)] md:p-7"
        >
          <div className="mb-7">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0057ff]">
              Pencil Archive
            </p>
            <h3 className="max-w-[920px] text-[32px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#07101f] md:text-[46px]">
              Hand-drawn portraits and early visual studies.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pencilWorks.map(([title, image]) => (
              <ArtCard
                key={title}
                title={title}
                image={image}
                height="h-[260px] sm:h-[310px] md:h-[340px]"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-[30px] border border-[#bdd9ff] bg-[#f4f8ff] p-5 shadow-[0_20px_65px_rgba(0,87,255,0.08)] md:p-7"
        >
          <div className="mb-7">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0057ff]">
              Digital Characters
            </p>
            <h3 className="max-w-[920px] text-[32px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#07101f] md:text-[46px]">
              Digital art, characters and game-world concepts.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {digitalWorks.map(([title, image]) => (
              <ArtCard
                key={title}
                title={title}
                image={image}
                height="h-[280px] sm:h-[320px]"
                imageMode="cover"
              />
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {colorWorks.map(([title, image]) => (
            <ArtCard
              key={title}
              title={title}
              image={image}
              height="h-[320px] sm:h-[380px]"
            />
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}