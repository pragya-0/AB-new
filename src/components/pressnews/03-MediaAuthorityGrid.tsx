import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { mediaAuthority, pressPath } from "./pressData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const leadAuthority = {
  title: "Economic Times & Business Media Recognition",
  publisher: "Economic Times",
  summary:
    "Business media coverage documenting Arijit Bhattacharyya’s journey across entrepreneurship, innovation, technology leadership, startup mentoring and ecosystem building.",
  image: `${pressPath}Arijit-Bhattacharyya-ECONOMICS.jpg`,
  alt: "Economic Times business media coverage featuring Arijit Bhattacharyya",
  tags: ["Business Media", "Entrepreneurship", "Innovation"],
};

export default function MediaAuthorityGrid() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,.22),transparent_34%),radial-gradient(circle_at_82%_80%,rgba(14,165,233,.14),transparent_30%)]" />
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
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
              Media Authority
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">
              Trusted by media, institutions and global platforms.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg lg:ml-auto">
            Over nearly three decades, Arijit Bhattacharyya has appeared across
            newspapers, television, international publications, entrepreneurship
            platforms and business communities documenting his work across AI,
            startups, gaming, blockchain, innovation and global leadership.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#07111f] p-5 sm:min-h-[430px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(37,99,235,0.28),transparent_36%)]" />

              <img
                src={leadAuthority.image}
                alt={leadAuthority.alt}
                loading="lazy"
                className="relative max-h-[390px] w-full rounded-[1.7rem] object-contain shadow-2xl transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.26em] text-blue-300">
                <Newspaper className="mr-2 h-4 w-4" />
                {leadAuthority.publisher}
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                {leadAuthority.title}
              </h3>

              <p className="mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-300 sm:text-base">
                {leadAuthority.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {leadAuthority.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {mediaAuthority.map((item, index) => (
            <motion.article
              key={item.id || item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                delay: Math.min(index * 0.04, 0.22),
                duration: 0.55,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#07111f] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.26),transparent_36%)]" />

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="relative max-h-[235px] w-full rounded-[1.35rem] object-contain transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  {item.type}
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