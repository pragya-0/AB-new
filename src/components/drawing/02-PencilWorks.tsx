import { motion } from "framer-motion";

type PencilArtwork = {
  title: string;
  src: string;
  alt: string;
  featured?: boolean;
};

const pencilWorks: PencilArtwork[] = [
  {
    title: "Mother Teresa",
    src: "/assets/Drawing/Pencil/Mother Teresa.jpg",
    alt: "Mother Teresa pencil portrait by Arijit Bhattacharyya",
    featured: true,
  },
  {
    title: "Susmita Sen",
    src: "/assets/Drawing/Pencil/susmita-sen.jpg",
    alt: "Susmita Sen pencil portrait by Arijit Bhattacharyya",
    featured: true,
  },
  {
    title: "Shah Rukh Khan",
    src: "/assets/Drawing/Pencil/SRk Actor.jpg",
    alt: "Shah Rukh Khan pencil portrait by Arijit Bhattacharyya",
    featured: true,
  },
  {
    title: "Mithun Chakraborty",
    src: "/assets/Drawing/Pencil/Mithun Actor.jpg",
    alt: "Mithun Chakraborty pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Princess Diana",
    src: "/assets/Drawing/Pencil/Diana Princess.jpg",
    alt: "Princess Diana pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Diana",
    src: "/assets/Drawing/Pencil/Diana.jpg",
    alt: "Diana pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Sourav Ganguly",
    src: "/assets/Drawing/Pencil/Sourabh Crickter.jpg",
    alt: "Sourav Ganguly pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Subhasree Ganguly",
    src: "/assets/Drawing/Pencil/subhasree-ganguly.jpg",
    alt: "Subhasree Ganguly pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Indian Artist Study",
    src: "/assets/Drawing/Pencil/indian-artist.jpg",
    alt: "Indian artist pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Study",
    src: "/assets/Drawing/Pencil/manojit-BA-big.jpg",
    alt: "Large pencil portrait study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Composition",
    src: "/assets/Drawing/Pencil/pencil-work.jpg",
    alt: "Pencil composition artwork by Arijit Bhattacharyya",
  },
  {
    title: "Figure Study",
    src: "/assets/Drawing/Pencil/3.jpg",
    alt: "Figure pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Portrait",
    src: "/assets/Drawing/Pencil/4.jpg",
    alt: "Pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Study",
    src: "/assets/Drawing/Pencil/5.jpg",
    alt: "Portrait pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Mother and Child",
    src: "/assets/Drawing/Pencil/6.jpg",
    alt: "Mother and child pencil artwork by Arijit Bhattacharyya",
  },
  {
    title: "Expression Study",
    src: "/assets/Drawing/Pencil/7.jpg",
    alt: "Expression pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Study",
    src: "/assets/Drawing/Pencil/10.jpg",
    alt: "Portrait pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Figure Composition",
    src: "/assets/Drawing/Pencil/14.jpg",
    alt: "Figure composition pencil artwork by Arijit Bhattacharyya",
  },
  {
    title: "Classical Portrait",
    src: "/assets/Drawing/Pencil/15.jpg",
    alt: "Classical pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Study",
    src: "/assets/Drawing/Pencil/16.jpg",
    alt: "Portrait study by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Study",
    src: "/assets/Drawing/Pencil/17.jpg",
    alt: "Pencil portrait study by Arijit Bhattacharyya",
  },
  {
    title: "Portrait Sketch",
    src: "/assets/Drawing/Pencil/18.jpg",
    alt: "Portrait pencil sketch by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Portrait",
    src: "/assets/Drawing/Pencil/19.jpg",
    alt: "Pencil portrait by Arijit Bhattacharyya",
  },
  {
    title: "Figure Study",
    src: "/assets/Drawing/Pencil/nude-big.jpg",
    alt: "Figure pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Study",
    src: "/assets/Drawing/Pencil/pencil-img2.jpg",
    alt: "Pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Study",
    src: "/assets/Drawing/Pencil/pencil-img3.jpg",
    alt: "Pencil portrait study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Study",
    src: "/assets/Drawing/Pencil/pencil-img4.jpg",
    alt: "Pencil study by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Study",
    src: "/assets/Drawing/Pencil/pencil-img5.jpg",
    alt: "Pencil illustration by Arijit Bhattacharyya",
  },
  {
    title: "Pencil Study",
    src: "/assets/Drawing/Pencil/pencil-img6.jpg",
    alt: "Pencil artwork by Arijit Bhattacharyya",
  },
];

const featuredWorks = pencilWorks.filter((item) => item.featured);
const galleryWorks = pencilWorks.filter((item) => !item.featured);

export default function PencilWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#0b1220] sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.06),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Pencil Portraits
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Portraits That Built an Artist&apos;s Eye
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Long before technology entrepreneurship and digital storytelling,
            portrait drawing developed observation, patience and visual
            discipline. These studies capture personalities, expressions and
            artistic exploration through traditional pencil techniques.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredWorks.map((artwork, index) => (
            <motion.figure
              key={artwork.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
            >
              <div className="relative flex h-[420px] items-center justify-center overflow-hidden bg-slate-50 p-5 sm:h-[500px] lg:h-[540px]">
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <figcaption className="border-t border-slate-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Featured Pencil Work
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {artwork.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {galleryWorks.map((artwork, index) => (
            <motion.figure
              key={artwork.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.48, delay: (index % 6) * 0.035 }}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_55px_rgba(37,99,235,0.12)]"
            >
              <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 p-4">
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <figcaption className="border-t border-slate-100 p-5">
                <h3 className="text-base font-bold text-slate-950">
                  {artwork.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}