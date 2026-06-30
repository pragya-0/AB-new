import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

export default function NatureSection() {
  const photos = getCategoryPhotos("nature");
  const lead = photos[0];
  const rest = photos.slice(1);

  if (!lead) return null;

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,.24),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_55%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-7 grid gap-4 border-b border-white/10 pb-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-300">
              Natural Frames
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Nature & Landscapes
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:justify-self-end">
            {categoryCopy.nature}
          </p>
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="group mb-5 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-2xl"
        >
          <div className="aspect-[16/7] overflow-hidden bg-slate-900">
            <img
              src={lead.src}
              alt={lead.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </motion.figure>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
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
