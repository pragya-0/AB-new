import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const films = [
  {
    title: "Ashwathama",
    category: "Mythology • Future Cinema",
    text: "A mythological future-media title positioned around immortal-warrior storytelling, cinematic scale and AI-assisted visual imagination.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.28.41.jpeg`,
    alt: "Ashwathama mythology future cinema poster by Arijit Bhattacharyya",
  },
  {
    title: "Karna",
    category: "Mythology • Digital Storytelling",
    text: "A mythology-led cinematic concept exploring heroic memory, destiny and Indian epic storytelling through a future media lens.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.23.53 (26).jpeg`,
    alt: "Karna mythology digital storytelling poster by Arijit Bhattacharyya",
  },
  {
    title: "Time Traveller",
    category: "Sci-Fi • AI-Based Film",
    text: "A science-fiction AI cinema project expanding Arijit’s entertainment work into time, technology, machine imagination and future storytelling.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.23.53 (19).jpeg`,
    alt: "Time Traveller science fiction AI-based film poster by Arijit Bhattacharyya",
  },
  {
    title: "Hanuman",
    category: "Mythology • Future Cinema",
    text: "A mythology-driven visual universe built around devotion, strength, heroism and Indian cultural imagination for next-generation cinema.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.25.21.jpeg`,
    alt: "Hanuman mythology future cinema poster by Arijit Bhattacharyya",
  },
  {
    title: "Broken",
    category: "Drama • Future Media",
    text: "A dramatic future-media title focused on emotion, fracture, survival and cinematic storytelling beyond conventional production formats.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.29.06.jpeg`,
    alt: "Broken future media film poster by Arijit Bhattacharyya",
  },
  {
    title: "Heal The Earth",
    category: "Climate • AI Storytelling",
    text: "A climate-conscious future cinema concept using storytelling to speak about the planet, responsibility and ecological imagination.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.24.55.jpeg`,
    alt: "Heal The Earth climate and AI storytelling poster by Arijit Bhattacharyya",
  },
  {
    title: "Nada",
    category: "Experimental • Future Cinema",
    text: "An experimental media title exploring mood, abstraction and new cinematic language inside Arijit’s expanding future-film slate.",
    image: `${me}nada.jpeg`,
    alt: "Nada experimental future cinema poster by Arijit Bhattacharyya",
  },
  {
    title: "Crave",
    category: "Thriller • Future Media",
    text: "A thriller-oriented title positioned around desire, tension, dark mood and genre-led future storytelling.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.23.53 (16).jpeg`,
    alt: "Crave thriller future media poster by Arijit Bhattacharyya",
  },
  {
    title: "Parde Ke Peeche",
    category: "Cinema • AI-Assisted Storytelling",
    text: "A cinema-facing title about what happens behind the frame — performance, illusion, production and the unseen layers of storytelling.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.26.11.jpeg`,
    alt: "Parde Ke Peeche AI-assisted cinema poster by Arijit Bhattacharyya",
  },
];

const futurePillars = [
  "AI-Based Films",
  "Mythology Universes",
  "Sci-Fi Cinema",
  "Climate Storytelling",
  "Experimental Films",
  "Digital Characters",
  "Interactive Worlds",
  "Future Media IP",
];

export default function FutureMedia() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 text-[#081120] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.08),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Future Media Universe
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              AI cinema, mythology worlds and future-ready screen stories.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            The next chapter moves from movie-based games into AI-assisted
            films, mythology-led universes, sci-fi storytelling, climate cinema,
            experimental screen language and digital-first entertainment IP.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[2.3rem] border border-slate-200 bg-white shadow-2xl transition duration-300 hover:border-blue-300 hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]"
          >
            <figure className="flex h-[420px] items-center justify-center overflow-hidden bg-[#03070d] p-4 sm:h-[560px] lg:h-[640px]">
              <img
                src={films[0].image}
                alt={films[0].alt}
                className="max-h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                loading="eager"
              />
            </figure>

            <div className="border-t border-slate-100 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                {films[0].category}
              </p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {films[0].title}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {films[0].text}
              </p>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {films.slice(1, 3).map((film, index) => (
              <motion.article
                key={film.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:border-blue-300 hover:shadow-[0_22px_65px_rgba(37,99,235,0.14)]"
              >
                <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                  <figure className="flex h-[300px] items-center justify-center overflow-hidden bg-[#03070d] p-3 sm:h-full sm:min-h-[340px]">
                    <img
                      src={film.image}
                      alt={film.alt}
                      className="max-h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                      loading="lazy"
                    />
                  </figure>

                  <div className="flex flex-col justify-center border-t border-slate-100 p-6 sm:border-l sm:border-t-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {film.category}
                    </p>
                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                      {film.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {film.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Creative Direction
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                From games and characters to AI-powered film universes.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {futurePillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-blue-800"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {films.slice(3).map((film, index) => (
            <motion.article
              key={film.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:border-blue-300 hover:shadow-[0_22px_65px_rgba(37,99,235,0.13)]"
            >
              <figure className="flex h-[280px] items-center justify-center overflow-hidden bg-[#03070d] p-3 sm:h-[330px] lg:h-[360px]">
                <img
                  src={film.image}
                  alt={film.alt}
                  className="max-h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </figure>

              <div className="border-t border-slate-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {film.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  {film.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {film.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
