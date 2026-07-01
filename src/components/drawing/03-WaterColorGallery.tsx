import { motion } from "framer-motion";

type WaterColorArtwork = {
 
  src: string;
  alt: string;
  layout?: string;
};

const waterColorWorks: WaterColorArtwork[] = [
  {
    
    src: "/assets/Drawing/color/water-img1.jpg",
    alt: "Watercolour landscape artwork by Arijit Bhattacharyya",
    layout: "lg:col-span-7 lg:row-span-2",
  },
  {
  
    src: "/assets/Drawing/color/1.jpg",
    alt: "Watercolour portrait artwork by Arijit Bhattacharyya",
    layout: "lg:col-span-5",
  },
  {
   
    src: "/assets/Drawing/color/2.jpg",
    alt: "Colour portrait artwork by Arijit Bhattacharyya",
    layout: "lg:col-span-5",
  },
  {
   
    src: "/assets/Drawing/color/water-img2.jpg",
    alt: "Watercolour painting by Arijit Bhattacharyya",
    layout: "lg:col-span-4",
  },
  {
   
    src: "/assets/Drawing/color/water-img3.jpg",
    alt: "Watercolour artwork by Arijit Bhattacharyya",
    layout: "lg:col-span-4",
  },
  {
   
    src: "/assets/Drawing/color/water-img4.jpg",
    alt: "Watercolour illustration by Arijit Bhattacharyya",
    layout: "lg:col-span-4",
  },
  {
  
    src: "/assets/Drawing/color/water-img5.jpg",
    alt: "Watercolour art study by Arijit Bhattacharyya",
    layout: "lg:col-span-6",
  },
  {
   
    src: "/assets/Drawing/color/water-img6.jpg",
    alt: "Watercolour painting study by Arijit Bhattacharyya",
    layout: "lg:col-span-6",
  },
];

export default function WaterColorGallery() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_86%_26%,rgba(14,165,233,0.14),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_50%,#03070d_100%)]" />

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
              Water Colour
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Emotion, atmosphere and colour.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:justify-self-end">
            Watercolour expanded the visual language beyond graphite. These
            works explore softness, light, mood and movement — the emotional
            side of an artist who later built characters, stories and creative
            worlds.
          </p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[320px] grid-cols-1 gap-5 sm:auto-rows-[380px] md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[300px]">
          {waterColorWorks.map((artwork, index) => (
            <motion.figure
              key={artwork.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-2 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.075] ${
                artwork.layout ?? "lg:col-span-4"
              }`}
            >
              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.4rem] bg-[#05070b] p-2">
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-[98%] w-[98%] object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />

              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
