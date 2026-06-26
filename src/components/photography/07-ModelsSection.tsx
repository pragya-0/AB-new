import { motion } from "framer-motion";
import {
  categoryCopy,
  fadeUp,
  getCategoryPhotos,
  smoothEase,
} from "./photographyUtils";

export default function ModelsSection() {
  const photos = getCategoryPhotos("models");
  const lead = photos[0];
  const rest = photos.slice(1);

  if (!lead) return null;

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,.22),transparent_34%),linear-gradient(180deg,#03070d_0%,#081526_58%,#03070d_100%)]" />

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
              Portrait Studies
            </p>

            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Models & Portraits
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:justify-self-end">
            {categoryCopy.models}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06] shadow-2xl sm:col-span-2 lg:col-span-2"
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-900">
              <img
                src={lead.src}
                alt={lead.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </motion.figure>

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
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] shadow-xl ${
                index % 7 === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}