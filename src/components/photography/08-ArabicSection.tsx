import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getManyCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

export default function ArabicSection() {
  const photos = getManyCategoryPhotos(["arabic", "dubai"]);
  const lead = photos[0];
  const feature = photos.slice(1, 3);
  const rest = photos.slice(3);

  if (!lead) return null;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 text-[#081120] sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.08),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_55%,#ffffff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-7 grid gap-4 border-b border-slate-200 pb-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-700">
              Urban Luxury & Desert Light
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Middle East & Dubai
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end">
            {categoryCopy.dubai} {categoryCopy.arabic}
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            whileHover={{ y: -5 }}
            className="group overflow-hidden rounded-[1.8rem] shadow-2xl lg:col-span-2"
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-200">
              <img
                src={lead.src}
                alt={lead.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </motion.figure>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {feature.map((photo, index) => (
              <motion.figure
                key={photo.src}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: smoothEase,
                }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-[1.5rem] shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-200 lg:aspect-[16/10]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((photo, index) => (
            <motion.figure
              key={photo.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.45,
                delay: Math.min((index % 9) * 0.025, 0.18),
                ease: smoothEase,
              }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[1.35rem] shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
