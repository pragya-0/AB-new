import { motion } from "framer-motion";
import { books, booksPath } from "./booksData";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function BooksHero() {
  const featuredBooks = books.slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden bg-[#03070d] text-white">
      <div className="absolute inset-0">
        <img
          src={`${booksPath}speaking Image.jpeg`}
          alt="Arijit Bhattacharyya speaking at a large auditorium event"
          className="h-full w-full object-cover object-center opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(37,99,235,0.24),transparent_34%),linear-gradient(180deg,rgba(3,7,13,0.98),rgba(3,7,13,0.9),rgba(3,7,13,0.98))] lg:bg-[radial-gradient(circle_at_78%_30%,rgba(37,99,235,0.28),transparent_34%),linear-gradient(90deg,#03070d_0%,rgba(3,7,13,0.96)_42%,rgba(3,7,13,0.72)_72%,rgba(3,7,13,0.94)_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-9 px-4 pb-14 pt-16 sm:px-6 sm:pb-18 sm:pt-20 lg:min-h-[calc(100vh-84px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0 max-w-3xl"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-300 sm:text-xs">
            Books by Arijit Bhattacharyya
          </p>

          <h1 className="max-w-4xl text-[38px] font-extrabold leading-[1] tracking-[-0.04em] text-white min-[390px]:text-[42px] sm:text-[62px] md:text-[72px] lg:text-[82px] xl:text-[88px]">
            Ideas for Technology, Founders & Imagination.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] font-normal leading-7 text-slate-200 sm:text-[18px] sm:leading-8">
            A collection of books across artificial intelligence, entrepreneurship,
            virtual reality, blockchain, startup capital and original storytelling —
            connecting Arijit Bhattacharyya’s work as a founder, technologist,
            investor, speaker and creator.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
          className="relative mx-auto w-full min-w-0 max-w-[680px] overflow-hidden lg:ml-auto"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/15 blur-3xl" />

          <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[2.2rem] sm:p-5">
            <div className="w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#06101f]/85 p-4 sm:rounded-[1.7rem] sm:p-6 lg:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-[11px]">
                Complete Collection
              </p>

              {/* Mobile: fixed grid, no clipping */}
              <div className="mt-5 grid grid-cols-3 gap-3 sm:hidden">
                {featuredBooks.map((book) => (
                  <a
                    key={book.id}
                    href={book.amazon}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${book.title} on Amazon`}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.06] p-2"
                  >
                    <img
                      src={book.image}
                      alt={book.alt}
                      className="aspect-[3/4] w-full rounded-xl object-contain shadow-xl shadow-black/30"
                    />
                    <h2 className="mt-2 line-clamp-2 text-[10px] font-bold leading-4 text-white">
                      {book.title}
                    </h2>
                  </a>
                ))}
              </div>

              {/* Tablet/Desktop: moving carousel */}
              <div className="mt-6 hidden overflow-hidden sm:block">
                <motion.div
                  className="flex w-max gap-5"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 24,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...books, ...books].map((book, index) => (
                    <a
                      key={`${book.id}-${index}`}
                      href={book.amazon}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${book.title} on Amazon`}
                      className="group w-[150px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.1] lg:w-[158px]"
                    >
                      <img
                        src={book.image}
                        alt={book.alt}
                        className="aspect-[3/4] w-full rounded-xl object-contain shadow-2xl shadow-black/35"
                      />

                      <div className="mt-3">
                        <h2 className="line-clamp-2 text-[13px] font-bold leading-5 text-white">
                          {book.title}
                        </h2>
                        <p className="mt-1 line-clamp-1 text-[11px] font-semibold text-blue-200">
                          {book.subtitle}
                        </p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2">
                {books.slice(0, 2).map((book) => (
                  <div
                    key={book.id}
                    className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.055] p-3.5 sm:p-4"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-[11px]">
                      {book.category}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-6 text-white sm:text-[18px]">
                      {book.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[12px] font-normal leading-6 text-slate-300 sm:line-clamp-3 sm:text-[13px]">
                      {book.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
