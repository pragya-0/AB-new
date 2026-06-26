import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  Gamepad2,
  Landmark,
  Rocket,
} from "lucide-react";
import { books } from "./booksData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: BrainCircuit,
    title: "Future Technologies",
    kicker: "AI • VR • Blockchain",
    text: "The books on Generic AI, entrepreneurship in the AI decade, virtual reality and blockchain frame technology as a force changing how people learn, build, trade, collaborate and imagine the future.",
    bookIds: ["generic-ai", "future-entrepreneurship", "vr-sega", "empowering-africa"],
    accent: Bot,
  },
  {
    icon: Rocket,
    title: "Entrepreneurship & Capital",
    kicker: "Founders • Funding • Scale",
    text: "From founder mindset to early-stage fundraising, the collection reflects the harder realities of building ventures: timing, clarity, capital, discipline and the decisions that shape growth.",
    bookIds: ["future-entrepreneurship", "experts-can-blow-it"],
    accent: Landmark,
  },
  {
    icon: Gamepad2,
    title: "Storytelling & Original IP",
    kicker: "Mythology • Characters • Media Worlds",
    text: "The Legend Comes Alive connects Arijit’s creative universe with mythology-inspired characters, comics, games, animation and future entertainment IP.",
    bookIds: ["legend-comes-alive"],
    accent: Blocks,
  },
];

export default function KnowledgeAreas() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 text-[#07111f] sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
        animate={{ x: [0, 28, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

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
              Ideas Behind The Books
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-[#07111f] sm:text-5xl">
              Three pillars behind the author’s body of work.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg lg:ml-auto">
            The books are strongest when read as one connected knowledge system:
            future technology, founder thinking and original intellectual property.
          </p>
        </motion.div>

        <div className="mt-12 space-y-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const Accent = pillar.accent;
            const linkedBooks = pillar.bookIds
              .map((id) => books.find((book) => book.id === id))
              .filter(Boolean);

            return (
              <motion.article
                key={pillar.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.58,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_70px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_90px_rgba(15,23,42,0.12)] sm:p-6 lg:p-7"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.08),transparent_48%,rgba(14,165,233,0.1))]" />
                </div>

                <motion.div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{ opacity: [0.28, 0.65, 0.28], scale: [1, 1.18, 1] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#07111f] text-white shadow-xl shadow-slate-900/15 transition duration-300 group-hover:bg-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                          {pillar.kicker}
                        </p>
                        <Accent className="h-4 w-4 text-blue-600/70" />
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#07111f] sm:text-3xl">
                        {pillar.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
                        {pillar.text}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {linkedBooks.map((book) =>
                      book ? (
                        <a
                          key={book.id}
                          href={book.amazon}
                          target="_blank"
                          rel="noreferrer"
                          className="group/book flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 transition duration-300 hover:border-blue-200 hover:bg-blue-50"
                        >
                          <img
                            src={book.image}
                            alt={book.alt}
                            className="h-16 w-12 shrink-0 rounded-lg object-contain"
                          />

                          <div className="min-w-0">
                            <p className="line-clamp-1 text-sm font-bold text-[#07111f]">
                              {book.title}
                            </p>
                            <p className="mt-1 line-clamp-1 text-xs font-normal text-slate-500">
                              {book.subtitle}
                            </p>
                          </div>

                          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-blue-700 transition group-hover/book:translate-x-1" />
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}