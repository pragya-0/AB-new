import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { featuredBook, lowerBooks, sideBooks } from "../../data/books";

const allOtherBooks = [...sideBooks, ...lowerBooks];

const amazonBookLinks: Record<string, string> = {
  "The Power of Generic AI":
    "https://www.amazon.in/Unleashing-Universal-Mind-Power-Generic-ebook/dp/B0CCZCG3NL",
  "The VR Sega":
    "https://www.amazon.in/-/hi/Arijit-Bhattacharyya-ebook/dp/B0CD6MSZHC",
  "Empowering Africa":
    "https://www.amazon.in/Empowering-Africa-Transformative-Impact-Blockchain-ebook/dp/B0CDSQHY6N",
  "The Future of Entrepreneurship: The Decade in AI":
    "https://www.amazon.in/-/hi/Arijit-Bhattacharyya-ebook/dp/B0CL2PYQ95",
  "The Future of Entrepreneurship":
    "https://www.amazon.in/-/hi/Arijit-Bhattacharyya-ebook/dp/B0CL2PYQ95",
  "The Legend Comes Alive":
    "https://www.amazon.in/Archer-legend-comes-alive-Book-ebook/dp/B011UYF1RG",
  "Experts Can Blow It":
    "https://www.amazon.in/s?k=Experts+Can+Blow+It+Arijit+Bhattacharyya",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function getAmazonLink(title: string) {
  return (
    amazonBookLinks[title] ||
    `https://www.amazon.in/s?k=${encodeURIComponent(
      `${title} Arijit Bhattacharyya`
    )}`
  );
}

function BookCover({
  src,
  alt,
  featured = false,
  compact = false,
}: {
  src: string;
  alt: string;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_center,#f2f7ff_0%,#ffffff_58%,#eaf2ff_100%)] ${
        featured
          ? "min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]"
          : compact
          ? "h-[240px] sm:h-[270px]"
          : "h-[280px] sm:h-[320px]"
      }`}
    >
      <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#0057ff]/12 blur-[110px]" />

      <img
        src={src}
        alt={alt}
        className={`relative z-10 w-auto object-contain drop-shadow-[0_32px_42px_rgba(15,23,42,0.22)] transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.035] ${
          featured
            ? "max-h-[320px] sm:max-h-[430px] lg:max-h-[480px]"
            : compact
            ? "max-h-[205px] sm:max-h-[235px]"
            : "max-h-[240px] sm:max-h-[280px]"
        }`}
      />
    </div>
  );
}

function StaticBookCard({
  book,
  large = false,
}: {
  book: (typeof allOtherBooks)[number];
  large?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 230, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white p-4 shadow-[0_22px_65px_rgba(0,0,0,0.26)] transition duration-500 hover:border-[#4d8cff]/50 hover:shadow-[0_34px_100px_rgba(0,87,255,0.24)] sm:p-5"
    >
      <BookCover
        src={book.image}
        alt={`${book.title} book by Arijit Bhattacharyya`}
        compact={!large}
      />

      <div className="flex flex-1 flex-col pt-5">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0057ff]">
          Publication
        </p>

        <h3
          className={`font-bold leading-tight tracking-[-0.045em] text-black ${
            large ? "text-[25px] sm:text-[28px]" : "text-[22px] sm:text-[24px]"
          }`}
        >
          {book.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] font-normal leading-7 text-black/60">
          {book.description}
        </p>

        <a
          href={getAmazonLink(book.title)}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${book.title} by Arijit Bhattacharyya on Amazon`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0057ff] transition duration-300 group-hover:translate-x-1"
        >
          View on Amazon
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export default function BooksSection() {
  const topCollectionBooks = allOtherBooks.slice(0, 2);
  const bottomCollectionBooks = allOtherBooks.slice(2, 5);

  return (
    <>
      {/* DARK AUTHOR BRIDGE */}
      <section className="relative overflow-hidden bg-[#02050b] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute right-[-240px] top-[-200px] h-[650px] w-[650px] rounded-full bg-[#0057ff]/25 blur-[170px]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/15 blur-[160px]" />

        <motion.div
          className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#4d8cff] sm:text-sm"
            >
              Author Library
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-[850px] text-[36px] font-extrabold leading-[1.03] tracking-[-0.06em] sm:text-[48px] md:text-[64px]"
            >
              Knowledge becomes powerful only when transformed into action.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[720px] text-[16px] font-normal leading-8 text-white/62 sm:text-[17px]"
            >
              For more than two decades, Arijit Bhattacharyya has transformed
              ideas into companies, books, global ecosystems, technology
              ventures and public conversations across innovation,
              entrepreneurship and emerging technology.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#4d8cff] sm:text-sm"
            >
              — Arijit Bhattacharyya
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.5)] sm:min-h-[420px] sm:rounded-[32px]"
          >
            <img
           src="/assets/hero/hero-speaker.jpeg"
              alt="Arijit Bhattacharyya speaking to an audience about books, entrepreneurship and innovation"
              className="h-full min-h-[320px] w-full object-cover object-center transition duration-[7000ms] group-hover:scale-[1.05] sm:min-h-[420px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#02050b]/45 via-transparent to-[#02050b]/10" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02050b]/45 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED BOOK HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8faff_44%,#eaf2ff_100%)] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute right-[-260px] top-[-180px] h-[680px] w-[680px] rounded-full bg-[#0057ff]/12 blur-[180px]" />
        <div className="pointer-events-none absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/8 blur-[170px]" />

        <motion.div
          className="relative z-10 mx-auto max-w-[1500px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center rounded-[28px] border border-black/10 bg-white/82 p-6 shadow-[0_30px_95px_rgba(15,23,42,0.07)] backdrop-blur sm:rounded-[32px] sm:p-8 md:p-12"
            >
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0057ff] sm:text-sm">
                Books & Publications
              </p>

              <h2 className="max-w-[660px] text-[34px] font-extrabold leading-[1.03] tracking-[-0.06em] text-black sm:text-[44px] md:text-[56px]">
                Ideas That Shape Technology, Entrepreneurship and Global
                Innovation
              </h2>

              <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-8 text-black/60 sm:text-[17px]">
                A curated author library exploring AI, entrepreneurship,
                virtual reality, global development, leadership and
                mythology-inspired storytelling.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "6 Published Books",
                  "AI",
                  "Entrepreneurship",
                  "VR",
                  "Blockchain",
                  "Creative IP",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0057ff]/15 bg-[#0057ff]/8 px-4 py-2 text-xs font-bold text-[#0057ff]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to="/books"
                aria-label="Explore all books by Arijit Bhattacharyya"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0057ff] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_55px_rgba(0,87,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1b6cff] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:w-fit"
              >
                Explore All Books
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.article
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 230, damping: 22 }}
              className="group overflow-hidden rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_34px_110px_rgba(15,23,42,0.09)] transition duration-500 hover:shadow-[0_48px_135px_rgba(0,87,255,0.15)] sm:rounded-[32px] sm:p-7"
            >
              <div className="grid gap-8 md:grid-cols-[0.82fr_1fr] md:items-center">
                <BookCover
                  src={featuredBook.image}
                  alt={`${featuredBook.title} featured book by Arijit Bhattacharyya`}
                  featured
                />

                <div className="p-1 md:p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#0057ff]">
                    Featured Book
                  </p>

                  <h3 className="text-[36px] font-extrabold leading-[1.01] tracking-[-0.06em] text-black sm:text-[44px] md:text-[54px]">
                    {featuredBook.title}
                  </h3>

                  <p className="mt-6 max-w-[520px] text-[16px] font-normal leading-8 text-black/62 sm:text-[17px]">
                    {featuredBook.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredBook.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#0057ff]/10 px-4 py-2 text-xs font-bold text-[#0057ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getAmazonLink(featuredBook.title)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${featuredBook.title} by Arijit Bhattacharyya on Amazon`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0057ff] transition duration-300 group-hover:translate-x-1"
                  >
                    View on Amazon
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* AUTHOR COLLECTION — STATIC 2 + 3 CARD LAYOUT */}
      <section className="relative overflow-hidden bg-[#02050b] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute right-[-260px] top-[-220px] h-[640px] w-[640px] rounded-full bg-[#0057ff]/22 blur-[170px]" />
        <div className="pointer-events-none absolute bottom-[-240px] left-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/12 blur-[160px]" />

        <motion.div
          className="relative z-10 mx-auto max-w-[1500px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#4d8cff]"
              >
                More Published Works
              </motion.p>

              <motion.h3
                variants={fadeUp}
                className="text-[34px] font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-[42px] md:text-[50px]"
              >
                The Author Collection
              </motion.h3>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-[500px] text-[15px] font-normal leading-7 text-white/58 md:text-right"
            >
              Books across technology, business, leadership, immersive media and
              creative storytelling.
            </motion.p>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {topCollectionBooks.map((book) => (
                <StaticBookCard key={book.title} book={book} large />
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {bottomCollectionBooks.map((book) => (
                <StaticBookCard key={book.title} book={book} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
