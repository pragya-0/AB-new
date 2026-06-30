import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { books } from "./booksData";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedBooks() {
  return (
    <section
      id="featured-books"
      className="relative overflow-hidden bg-white px-5 py-20 text-[#07111f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(37,99,235,0.11),transparent_32%),radial-gradient(circle_at_88%_35%,rgba(14,165,233,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">
            Featured Books
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
            Ideas That Shaped an Entrepreneurial Journey
          </h2>

          <p className="mt-5 max-w-3xl text-base font-normal leading-8 text-slate-600 sm:text-lg">
            These books capture years of work across technology, entrepreneurship,
            investment, virtual reality, artificial intelligence and original intellectual
            property. Rather than standalone publications, they reflect the ideas,
            industries and emerging technologies that have shaped Arijit Bhattacharyya’s
            journey as a founder, speaker and innovation ecosystem builder.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8 lg:mt-16 lg:space-y-10">
          {books.map((book, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={book.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.62, ease: "easeOut" }}
                className={[
                  "group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(15,23,42,0.13)]",
                  "lg:grid-cols-[0.82fr_1.18fr]",
                  reverse ? "lg:grid-flow-col-dense" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#03070d] p-8 sm:p-10",
                    reverse ? "lg:col-start-2" : "",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.34),transparent_36%),linear-gradient(135deg,rgba(3,7,13,1),rgba(15,23,42,0.92))]" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />

                  <div className="relative w-full max-w-[270px]">
                    <div className="absolute inset-0 translate-x-5 translate-y-6 rounded-3xl bg-blue-500/25 blur-2xl transition duration-300 group-hover:scale-110" />
                    <img
                      src={book.image}
                      alt={book.alt}
                      className="relative mx-auto aspect-[3/4] w-full rounded-2xl object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 backdrop-blur">
                    {book.category}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {book.category}
                    </span>

                    {book.featured && (
                      <span className="inline-flex items-center rounded-full bg-[#07111f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        <Sparkles className="mr-2 h-4 w-4 text-blue-300" />
                        Featured Release
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-4xl">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-lg font-bold text-blue-700">
                    {book.subtitle}
                  </p>

                  <p className="mt-5 max-w-2xl text-base font-normal leading-8 text-slate-600">
                    {book.description}
                  </p>

                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center text-[15px] font-bold text-[#07111f] transition hover:text-blue-700"
                  >
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
