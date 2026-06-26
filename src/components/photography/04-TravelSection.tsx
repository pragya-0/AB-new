import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

const uniqueBySrc = <T extends { src: string }>(items: T[]) =>
  Array.from(new Map(items.map((item) => [item.src, item])).values());

export default function TravelSection() {
  const photos = uniqueBySrc(getCategoryPhotos("travelling"));
  const lead = photos[0];
  const rest = photos.slice(1);

  if (!lead) return null;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 text-[#081120] sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-7 grid gap-4 border-b border-slate-200 pb-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-700">
              Travel Journal
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Travel Archive
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            {categoryCopy.travelling}
          </p>
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          whileHover={{ y: -6 }}
          className="group mb-4 overflow-hidden rounded-[1.8rem] bg-white shadow-2xl"
        >
          <img
            src={lead.src}
            alt={lead.alt}
            loading="eager"
            className="h-auto w-full transition duration-700 group-hover:scale-[1.02]"
          />
        </motion.figure>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {rest.map((photo, index) => (
            <motion.figure
              key={photo.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.45,
                delay: Math.min((index % 10) * 0.02, 0.16),
                ease: smoothEase,
              }}
              whileHover={{ y: -5 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-[1.35rem] bg-white shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.025]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}