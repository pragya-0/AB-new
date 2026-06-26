import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./photographyUtils";

const primaryChapters = [
  { label: "Travel", id: "travel" },
  { label: "Nature", id: "nature" },
  { label: "Food", id: "food" },
  { label: "Portraits", id: "models" },
];

const moreChapters = [
  { label: "Middle East", id: "arabic" },
  { label: "Himalayas", id: "himalayan" },
  { label: "Kuala Lumpur", id: "kuala-lumpur" },
  { label: "Silchar", id: "silchar" },
];

export default function PhotographyPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 text-[#081120] sm:px-6 lg:px-8 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,.12),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,.10),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white shadow-[0_28px_80px_rgba(15,23,42,.12)]"
      >
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-700 via-sky-400 to-blue-700" />
        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-700">
              Photography Philosophy
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-[1.02] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A quieter record of movement, people and places.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Beyond conferences, ventures and public stages, photography became
              a way to notice what happens between destinations — light,
              architecture, food, nature, people and the small details that make
              each journey memorable.
            </p>

            <div className="mt-7 rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Explore Collections
                </p>

                <div className="flex flex-wrap gap-2">
                  {primaryChapters.map((chapter, index) => (
                    <motion.a
                      key={chapter.id}
                      href={`#${chapter.id}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                        ease: smoothEase,
                      }}
                      className="group rounded-full bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-md shadow-blue-500/20 transition"
                    >
                      {chapter.label}
                      <span className="ml-2 inline-block transition group-hover:translate-x-1">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 border-t border-blue-100 pt-4">
                {moreChapters.map((chapter, index) => (
                  <motion.a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.035,
                      ease: smoothEase,
                    }}
                    className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-700"
                  >
                    {chapter.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}