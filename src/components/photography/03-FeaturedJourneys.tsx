import { motion } from "framer-motion";
import { fadeUp, getCategoryPhotos, smoothEase } from "./photographyUtils";

const chapters = [
  {
    category: "travelling",
    title: "Travel",
    label: "Roads • Cities • Movement",
  },
  {
    category: "nature",
    title: "Nature",
    label: "Light • Landscapes • Pause",
  },
  {
    category: "food",
    title: "Food",
    label: "Culture • Texture • Memory",
  },
  {
    category: "models",
    title: "Portraits",
    label: "Presence • Styling • People",
  },
];

export default function FeaturedJourneys() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,.22),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="mb-7 flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-300">
              Visual Chapters
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A photography archive shaped by journeys.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-300">
            The page moves through travel, nature, food and portraits as
            separate visual moods — each one leading into a deeper collection.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter, index) => {
            const photo = getCategoryPhotos(chapter.category)[0];

            if (!photo) return null;

            return (
              <motion.article
                key={chapter.category}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: smoothEase,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] shadow-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                    {chapter.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {chapter.title}
                  </h3>
                </div>

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-blue-500/10" />
                  <div className="absolute right-4 top-4 h-12 w-12 rounded-full border border-blue-200/30 bg-white/10 blur-sm" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
