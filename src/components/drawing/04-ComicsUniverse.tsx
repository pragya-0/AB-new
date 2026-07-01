import { motion } from "framer-motion";

type ComicArtwork = {

  src: string;
  alt: string;
  className?: string;
};

const comicWorks: ComicArtwork[] = [
  {
    
    src: "/assets/Drawing/comics/comics-img1.jpg",
    alt: "Comic artwork by Arijit Bhattacharyya",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    
    src: "/assets/Drawing/comics/comics-img2.jpg",
    alt: "Comic character illustration by Arijit Bhattacharyya",
    className: "lg:col-span-5",
  },
  {
    
    src: "/assets/Drawing/comics/comics-img3.jpg",
    alt: "Comic story panel by Arijit Bhattacharyya",
    className: "lg:col-span-5",
  },
  {
   
    src: "/assets/Drawing/comics/comics-img4.jpg",
    alt: "Sequential comic art by Arijit Bhattacharyya",
    className: "lg:col-span-4",
  },
  {
    
    src: "/assets/Drawing/comics/comics-img5.jpg",
    alt: "Visual storytelling comic artwork by Arijit Bhattacharyya",
    className: "lg:col-span-4",
  },
  {
  
    src: "/assets/Drawing/comics/comics-img6.jpg",
    alt: "Comic universe creative IP artwork by Arijit Bhattacharyya",
    className: "lg:col-span-4",
  },
];

export default function ComicsUniverse() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#0b1220] sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,.07),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

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
              Comics
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              From drawings to characters and story worlds.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Comic art connected Arijit Bhattacharyya&apos;s drawing practice to
            characters, superheroes, sequential storytelling, gaming, animation
            and entertainment-led creative IP.
          </p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[320px] grid-cols-1 gap-5 sm:auto-rows-[360px] md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[310px]">
          {comicWorks.map((artwork, index) => (
            <motion.figure
              key={artwork.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)] ${
                artwork.className ?? "lg:col-span-4"
              }`}
            >
              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.4rem] bg-slate-50 p-2">
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-[98%] w-[98%] object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />

              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
