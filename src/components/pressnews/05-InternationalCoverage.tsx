import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import { internationalCoverage } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function InternationalCoverage() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(14,165,233,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

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
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
              <Globe2 className="mr-2 h-4 w-4" />
              International Coverage
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
              Recognition across countries, platforms and innovation ecosystems.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            From India to China, Nepal, Thailand, Finland, Singapore, UAE and global
            entrepreneurship networks, the coverage reflects Arijit Bhattacharyya’s work
            across technology, startups, gaming, diplomacy, education and innovation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {internationalCoverage.map((item, index) => (
            <motion.article
              key={`${item.country}-${item.title}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(index * 0.04, 0.22),
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.09]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#07111f] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(37,99,235,0.28),transparent_36%)]" />

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="relative max-h-[240px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  <MapPin className="mr-1.5 h-3.5 w-3.5 text-blue-200" />
                  {item.country}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  {item.publisher}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-slate-300">
                  {item.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100"
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
                    className="mt-6 inline-flex items-center text-sm font-bold text-blue-100 transition hover:text-white"
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