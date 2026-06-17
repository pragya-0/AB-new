import { featuredBook, lowerBooks, sideBooks } from "../../data/books";

const allOtherBooks = [...sideBooks, ...lowerBooks];

function BookCover({
  src,
  alt,
  featured = false,
}: {
  src: string;
  alt: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_center,#f2f7ff_0%,#ffffff_58%,#eaf2ff_100%)] ${
        featured ? "min-h-[520px]" : "h-[255px]"
      }`}
    >
      <div className="absolute h-[300px] w-[300px] rounded-full bg-[#0057ff]/12 blur-[110px]" />

      <img
        src={src}
        alt={alt}
        className={`relative z-10 w-auto object-contain drop-shadow-[0_35px_45px_rgba(15,23,42,0.24)] transition duration-700 group-hover:-translate-y-3 group-hover:scale-[1.04] ${
          featured ? "max-h-[480px]" : "max-h-[215px]"
        }`}
      />
    </div>
  );
}

function MovingBookCard({
  book,
  index,
}: {
  book: (typeof allOtherBooks)[number];
  index: number;
}) {
  return (
    <article
      className={`group w-[330px] shrink-0 overflow-hidden rounded-[26px] border border-white/10 bg-white p-5 shadow-[0_22px_65px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_34px_100px_rgba(0,87,255,0.28)] ${
        index % 2 === 0 ? "hover:rotate-[-1.5deg]" : "hover:rotate-[1.5deg]"
      }`}
    >
      <BookCover src={book.image} alt={book.title} />

      <div className="pt-5">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#0057ff]">
          Publication
        </p>

        <h3 className="text-[23px] font-black leading-tight tracking-[-0.045em] text-black">
          {book.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-black/60">
          {book.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0057ff] transition duration-300 group-hover:translate-x-1">
          Explore Book →
        </span>
      </div>
    </article>
  );
}

export default function BooksSection() {
  const marqueeBooks = [...allOtherBooks, ...allOtherBooks, ...allOtherBooks];

  return (
    <>
      <style>
        {`
          @keyframes authorMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          .animate-author-marquee {
            animation: authorMarquee 38s linear infinite;
          }

          .animate-author-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* DARK AUTHOR BRIDGE */}
      <section className="relative overflow-hidden bg-[#02050b] px-5 py-24 text-white md:px-10">
        <div className="absolute right-[-240px] top-[-200px] h-[650px] w-[650px] rounded-full bg-[#0057ff]/25 blur-[170px]" />
        <div className="absolute left-[-260px] bottom-[-240px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/15 blur-[160px]" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.34em] text-[#4d8cff]">
              Author Library
            </p>

            <h2 className="max-w-[850px] text-[42px] font-black leading-[1.03] tracking-[-0.06em] md:text-[64px]">
              Knowledge becomes powerful only when transformed into action.
            </h2>

            <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-white/62">
              For more than two decades, Arijit Bhattacharyya has transformed
              ideas into companies, books, global ecosystems, technology
              ventures and public conversations across innovation,
              entrepreneurship and emerging technology.
            </p>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.26em] text-[#4d8cff]">
              — Arijit Bhattacharyya
            </p>
          </div>

          <div className="group relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
            <img
              src="/assets/books/speaking Image.jpeg"
              alt="Arijit Bhattacharyya speaking to an audience"
              className="h-full min-h-[420px] w-full object-cover transition duration-[7000ms] group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#02050b]/45 via-transparent to-[#02050b]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050b]/45 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* FEATURED BOOK HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8faff_44%,#eaf2ff_100%)] px-5 py-20 md:px-10">
        <div className="absolute right-[-260px] top-[-180px] h-[680px] w-[680px] rounded-full bg-[#0057ff]/12 blur-[180px]" />
        <div className="absolute left-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-[#0057ff]/8 blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
            <div className="flex flex-col justify-center rounded-[32px] border border-black/10 bg-white/82 p-8 shadow-[0_30px_95px_rgba(15,23,42,0.07)] backdrop-blur md:p-12">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.34em] text-[#0057ff]">
                Books & Publications
              </p>

              <h2 className="max-w-[660px] text-[38px] font-black leading-[1.03] tracking-[-0.06em] text-black md:text-[56px]">
                Ideas That Shape Technology, Entrepreneurship and Global
                Innovation
              </h2>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-black/60">
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
                    className="rounded-full border border-[#0057ff]/15 bg-[#0057ff]/8 px-4 py-2 text-xs font-black text-[#0057ff]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <article className="group overflow-hidden rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_34px_110px_rgba(15,23,42,0.09)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_48px_135px_rgba(0,87,255,0.15)]">
              <div className="grid gap-8 md:grid-cols-[0.82fr_1fr] md:items-center">
                <BookCover
                  src={featuredBook.image}
                  alt={featuredBook.title}
                  featured
                />

                <div className="p-1 md:p-6">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#0057ff]">
                    Featured Book
                  </p>

                  <h3 className="text-[40px] font-black leading-[1.01] tracking-[-0.06em] text-black md:text-[54px]">
                    {featuredBook.title}
                  </h3>

                  <p className="mt-6 max-w-[520px] text-[17px] leading-8 text-black/62">
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

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#0057ff] transition duration-300 group-hover:translate-x-1">
                    Explore Book →
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AUTHOR COLLECTION — INFINITE MARQUEE */}
      <section className="relative overflow-hidden bg-[#02050b] px-5 py-20 text-white md:px-10">
        <div className="absolute right-[-260px] top-[-220px] h-[640px] w-[640px] rounded-full bg-[#0057ff]/22 blur-[170px]" />
        <div className="absolute left-[-260px] bottom-[-240px] h-[560px] w-[560px] rounded-full bg-[#0057ff]/12 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-[#4d8cff]">
                More Published Works
              </p>

              <h3 className="text-[34px] font-black leading-tight tracking-[-0.05em] text-white md:text-[50px]">
                The Author Collection
              </h3>
            </div>

            <p className="hidden max-w-[440px] text-right text-[15px] leading-7 text-white/58 md:block">
              Books across technology, business, leadership, immersive media and
              creative storytelling.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[110px] bg-gradient-to-r from-[#02050b] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[110px] bg-gradient-to-l from-[#02050b] to-transparent" />

            <div className="flex w-max gap-7 py-3 animate-author-marquee hover:[animation-play-state:paused]">
              {marqueeBooks.map((book, index) => (
                <MovingBookCard
                  key={`${book.title}-${index}`}
                  book={book}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}