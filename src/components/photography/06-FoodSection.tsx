import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

export default function FoodSection() {
  const photos = getCategoryPhotos("food");
  const feature = photos.slice(0, 2);
  const rest = photos.slice(2);

  if (!photos.length) return null;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 text-[#081120] sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-8 grid gap-4 border-b border-slate-200 pb-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-700">
              Culinary Stories
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Food Across Cultures
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            {categoryCopy.food}
          </p>
        </motion.div>

        {/* Featured Images */}

        <div className="grid gap-5 lg:grid-cols-2">
          {feature.map((photo, index) => (
            <motion.figure
              key={photo.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: smoothEase,
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.8rem] shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Gallery */}

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((photo, index) => (
            <motion.figure
              key={photo.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.4,
                delay: Math.min((index % 8) * 0.03, 0.18),
                ease: smoothEase,
              }}
              whileHover={{
                y: -4,
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}