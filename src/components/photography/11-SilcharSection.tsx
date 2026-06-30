import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

export default function SilcharSection() {
  const photos = getCategoryPhotos("Shilchar");
  const hero = photos[0];
  const rest = photos.slice(1);

  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,.22),transparent_34%),linear-gradient(180deg,#03070d_0%,#081526_60%,#03070d_100%)]" />

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
              Regional Frames
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Silchar
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:justify-self-end">
            {categoryCopy.Shilchar}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[hero, ...rest].map((photo, index) => (
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
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-2 shadow-lg ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`flex items-center justify-center overflow-hidden rounded-[1rem] bg-[#05070b] ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
