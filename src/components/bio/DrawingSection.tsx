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
  ["Portrait Study", `${pencil}2.jpg`],
  ["Female Portrait", `${pencil}3.jpg`],
  ["Sketch Work", `${pencil}4.jpg`],
  ["Expression Study", `${pencil}5.jpg`],
  ["Mother & Child", `${pencil}6.jpg`],
  ["Face Study", `${pencil}7.jpg`],
  ["Actor Sketch", `${pencil}8.jpg`],
  ["Character Face", `${pencil}9.jpg`],
  ["Emotional Sketch", `${pencil}10.jpg`],
  ["Classic Face", `${pencil}11.jpg`],
  ["1996 Archive", `${pencil}12.jpg`],
  ["Portrait Memory", `${pencil}13.jpg`],
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
  height = "h-[380px]",
  imageMode = "contain",
}: {
  title: string;
  image: string;
  className?: string;
  height?: string;
  imageMode?: "contain" | "cover";
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`${className} group overflow-hidden rounded-[28px] border border-[#bdd9ff] bg-white shadow-[0_24px_80px_rgba(0,87,255,0.10)] transition duration-500 hover:-translate-y-2`}
    >
      <div className={`relative ${height} overflow-hidden bg-white`}>
        <SmartImage
          src={image}
          alt={title}
          className={`h-full w-full transition duration-700 group-hover:scale-[1.06] ${
            imageMode === "cover"
              ? "object-cover object-center"
              : "scale-[1.18] object-contain object-center"
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/78 to-transparent" />
        <h3 className="absolute bottom-6 left-6 right-6 text-[30px] font-black leading-[0.95] tracking-[-0.055em] text-white md:text-[40px]">
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
      text="Before the large technology ecosystem, there is also the artist: pencil portraits, digital characters, mythology research and original visual storytelling."
    >
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ArtCard
            title={featured[0][0]}
            image={featured[0][1]}
            className="lg:row-span-2"
            height="h-[620px]"
          />

          {featured.slice(1).map(([title, image]) => (
            <ArtCard key={title} title={title} image={image} height="h-[300px]" />
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-[34px] border border-[#bdd9ff] bg-white p-5 shadow-[0_24px_80px_rgba(0,87,255,0.08)] md:p-7"
        >
          <div className="mb-7">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#0057ff]">
              Pencil Archive
            </p>
            <h3 className="max-w-[920px] text-[36px] font-black leading-[0.92] tracking-[-0.06em] text-[#07101f] md:text-[54px]">
              Hand-drawn portraits and early visual studies.
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pencilWorks.map(([title, image]) => (
              <ArtCard key={title} title={title} image={image} height="h-[380px]" />
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-[34px] border border-[#bdd9ff] bg-[#f4f8ff] p-5 shadow-[0_24px_80px_rgba(0,87,255,0.08)] md:p-7"
        >
          <div className="mb-7">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.34em] text-[#0057ff]">
              Digital Characters
            </p>
            <h3 className="max-w-[920px] text-[36px] font-black leading-[0.92] tracking-[-0.06em] text-[#07101f] md:text-[54px]">
              Digital art, characters and game-world concepts.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {digitalWorks.map(([title, image]) => (
              <ArtCard
                key={title}
                title={title}
                image={image}
                height="h-[330px]"
                imageMode="cover"
              />
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {colorWorks.map(([title, image]) => (
            <ArtCard key={title} title={title} image={image} height="h-[430px]" />
          ))}
        </div>
      </div>
    </BioSectionShell>
  );
}