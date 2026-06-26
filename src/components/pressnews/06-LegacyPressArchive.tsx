import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Archive, Search } from "lucide-react";
import { legacyPressArchive } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  "All",
  "Newspaper",
  "Magazine",
  "TV",
  "Interview",
  "Event",
  "Award",
  "International",
] as const;

export default function LegacyPressArchive() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return legacyPressArchive.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.type === activeCategory;

      const searchableText = [
        item.title,
        item.publisher,
        item.type,
        item.country,
        item.year,
        item.summary,
        ...(item.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (cleanQuery.length === 0 || searchableText.includes(cleanQuery))
      );
    });
  }, [activeCategory, query]);

  return (
    <section
      id="legacy-press-archive"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(14,165,233,0.1),transparent_28%)]" />

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
              <Archive className="mr-2 h-4 w-4" />
              Legacy Press Archive
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              The original press trail, preserved and organised.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            Newspaper clippings, television appearances, event coverage, award moments
            and international press records from the older website are preserved here in
            a cleaner archive built for search, scanning and credibility.
          </p>
        </motion.div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_340px] lg:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition",
                    activeCategory === category
                      ? "bg-[#07111f] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700",
                  ].join(" ")}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search press archive..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-normal text-[#07111f] outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white"
              />
            </label>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-slate-500">
          Showing {filteredItems.length} of {legacyPressArchive.length} press
          records.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.image}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: Math.min(index * 0.02, 0.18),
              }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#03070d] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_36%)]" />

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="relative max-h-[240px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.type}
                </div>

                {item.year && (
                  <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.year}
                  </div>
                )}
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
                    View Coverage
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