import { motion } from "framer-motion";
import { fadeUp, getManyCategoryPhotos, smoothEase } from "./photographyUtils";

export default function HimalayanSection() {
  const photos = getManyCategoryPhotos(["Bhutan", "Nepal", "Shimla"]);
  const hero = photos[0];
  const rest = photos.slice(1);

  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,.24),transparent_34%),linear-gradient(180deg,#03070d_0%,#081526_60%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Himalayan Journey
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            Bhutan, Nepal and Shimla become one mountain chapter — calm roads,
            hills, monasteries, streets, weather and Himalayan atmosphere.
          </p>
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: smoothEase }}
          className="group mt-10 overflow-hidden rounded-[2rem] shadow-2xl"
        >
          <div className="aspect-[16/8] overflow-hidden bg-slate-900">
            <img
              src={hero.src}
              alt={hero.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </motion.figure>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
              className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] shadow-lg"
            >
              <div
                className={
                  index % 4 === 0
                    ? "aspect-[16/10] overflow-hidden"
                    : "aspect-[4/3] overflow-hidden"
                }
              >
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
