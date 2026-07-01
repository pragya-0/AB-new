import { motion } from "framer-motion";

type DigitalArtwork = {
  src: string;
  alt: string;
};

const heroArtwork: DigitalArtwork = {
  src: "/assets/Drawing/digital/digital-duperhero-img1.jpg",
  alt: "Digital superhero artwork by Arijit Bhattacharyya",
};

const topArtworks: DigitalArtwork[] = [
  {
    src: "/assets/Drawing/digital/archer.jpg",
    alt: "Digital archer character artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/arabian-character.jpg",
    alt: "Arabian digital character artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/surpanakha.jpg",
    alt: "Surpanakha digital epic storytelling artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/tiger-lilly.jpg",
    alt: "Tiger Lilly digital character artwork by Arijit Bhattacharyya",
  },
];

const galleryArtworks: DigitalArtwork[] = [
  {
    src: "/assets/Drawing/digital/sarah.jpg",
    alt: "Sarah digital character artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/chloe.jpg",
    alt: "Chloe digital portrait artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/cars.jpg",
    alt: "Digital car concept artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/poppy.jpg",
    alt: "Poppy digital illustration by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/digital-duperhero-img2.jpg",
    alt: "Digital superhero character artwork by Arijit Bhattacharyya",
  },
  {
    src: "/assets/Drawing/digital/digital-duperhero-img3.jpg",
    alt: "Digital superhero illustration by Arijit Bhattacharyya",
  },
];

function ArtworkCard({
  artwork,
  index,
  className = "",
  imageClassName = "",
}: {
  artwork: DigitalArtwork;
  index: number;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-2 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.075] ${className}`}
    >
      <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#05070b] p-2">
        <img
          src={artwork.src}
          alt={artwork.alt}
          className={`h-full w-full object-contain transition duration-700 group-hover:scale-[1.025] ${imageClassName}`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
    </motion.figure>
  );
}

export default function DigitalArt() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,.22),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,.15),transparent_35%),linear-gradient(180deg,#03070d_0%,#07111f_45%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
              Digital Art & Character Design
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              From Traditional Art to Digital Worlds
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:justify-self-end">
            Drawing naturally evolved into digital illustration, character
            development and visual storytelling. These concepts later influenced
            animation, games, comics, epic-inspired universes and original
            creative IP developed across multiple projects.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ArtworkCard
            artwork={heroArtwork}
            index={0}
            className="h-[520px] sm:h-[640px] lg:h-[720px]"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {topArtworks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.src}
                artwork={artwork}
                index={index + 1}
                className="h-[300px] sm:h-[310px] lg:h-[350px]"
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryArtworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.src}
              artwork={artwork}
              index={index + 5}
              className="h-[320px] sm:h-[380px] lg:h-[360px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
