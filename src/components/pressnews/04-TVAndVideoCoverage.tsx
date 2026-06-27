import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Tv } from "lucide-react";

import { completeTvAndVideoCoverage } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TVAndVideoCoverage() {
  const filteredCoverage = completeTvAndVideoCoverage.filter((item) => {
    const title = item.title.toLowerCase();
    const publisher = item.publisher.toLowerCase();
    const outlet = item.outlet.toLowerCase();

    return (
      !title.includes("mtv") &&
      !publisher.includes("mtv") &&
      !outlet.includes("mtv")
    );
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_88%_75%,rgba(14,165,233,0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              <Tv className="mr-2 h-4 w-4" />
              TV & Video Coverage
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Conversations captured across screens and stages.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            Television interviews, video features, TEDx-style talks and digital
            media appearances documenting Arijit Bhattacharyya’s work across
            startups, technology, gaming, AI, education and innovation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCoverage.map((item, index) => (
            <motion.article
              key={item.id || `${item.title}-${item.publisher}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(index * 0.04, 0.22),
              }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#03070d] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.28),transparent_36%)]" />

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="relative max-h-[240px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.type}
                </div>

                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition group-hover:bg-blue-600">
                  <PlayCircle className="h-5 w-5" />
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  {item.publisher}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#07111f]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-600">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-bold text-[#07111f] transition hover:text-blue-700"
                  >
                    Watch / View Coverage
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}