import { motion } from "framer-motion";
import { ArrowRight, LibraryBig } from "lucide-react";
import { books } from "./booksData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BooksCTA() {
  const featured = books.find((book) => book.featured) ?? books[0];

  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-18 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_85%_65%,rgba(14,165,233,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                <LibraryBig className="mr-2 h-4 w-4" />
                Complete Collection
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Explore the books behind the ideas.
              </h2>

              <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-slate-300 sm:text-lg">
                A compact author library connecting artificial intelligence, entrepreneurship,
                startup capital, virtual reality, blockchain and original storytelling — built
                around the same future-facing work that defines Arijit Bhattacharyya’s wider
                ecosystem.
              </p>

              <a
                href={featured.amazon}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center text-sm font-bold text-blue-200 transition hover:text-white"
              >
                Start with the featured book
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {books.slice(0, 6).map((book, index) => (
                <motion.a
                  key={book.id}
                  href={book.amazon}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read more about ${book.title}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-2 backdrop-blur transition hover:border-blue-300/40 hover:bg-white/[0.1]"
                >
                  <img
                    src={book.image}
                    alt={book.alt}
                    className="aspect-[3/4] w-full rounded-xl object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
