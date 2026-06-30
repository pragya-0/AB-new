import { motion } from "framer-motion";
import { ArrowDownRight, Search } from "lucide-react";
import { featuredInsights } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedInsights() {
  const [primary, ...secondary] = featuredInsights;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(14,165,233,0.1),transparent_28%)]" />

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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 sm:text-sm">
              Featured Insights
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Three entry points into the archive.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            These featured essays introduce the larger legacy blog archive — leadership
            in the age of technology, capital decisions for founders, and the shift
            toward immersive digital worlds.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          {primary && (
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#03070d] shadow-[0_28px_90px_rgba(15,23,42,0.16)]"
            >
              <div className="grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative flex items-center justify-center overflow-hidden bg-[#06101f] p-5 sm:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.25),transparent_38%)]" />

                  <img
                    src={primary.image}
                    alt={primary.alt}
                    className="relative max-h-[430px] w-full rounded-[1.5rem] object-contain shadow-2xl shadow-black/35 transition duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 text-white sm:p-8 lg:p-10">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {primary.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-200">
                    Editor’s Lead
                  </p>

                  <h3 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">
                    {primary.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-300 sm:text-base">
                    {primary.excerpt}
                  </p>

                  <a
                    href="#blog-archive"
                    className="group/link mt-7 inline-flex items-center text-sm font-bold text-blue-100 transition hover:text-white"
                  >
                    Find this in archive
                    <Search className="ml-2 h-4 w-4 transition group-hover/link:scale-110" />
                  </a>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid gap-6">
            {secondary.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)] sm:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#06101f] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(37,99,235,0.26),transparent_36%)]" />

                  <img
                    src={post.image}
                    alt={post.alt}
                    className="relative max-h-[220px] w-full rounded-[1.25rem] object-contain shadow-xl shadow-black/25 transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                    {post.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#07111f]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

                  <a
                    href="#blog-archive"
                    className="group/link mt-5 inline-flex items-center text-sm font-bold text-[#07111f] transition hover:text-blue-700"
                  >
                    Find this in archive
                    <ArrowDownRight className="ml-2 h-4 w-4 transition group-hover/link:translate-x-1 group-hover/link:translate-y-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
