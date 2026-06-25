import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const featured = [
  {
    name: "Actor Jeet",
    context: "Boss 2 movie-based game",
    text: "A major Bengali cinema crossover where movie promotion and game development came together.",
    image: `${me}Jeet_Arijit_Bhattacharyya.jpg`,
    alt: "Actor Jeet with Arijit Bhattacharyya during Boss 2 movie-based game promotion",
  },
  {
    name: "Dev",
    context: "Bengali cinema and games",
    text: "Entertainment technology conversations around Bengali cinema, games and digital storytelling.",
    image: `${me}Dev_Arijit.jpg`,
    alt: "Actor Dev with Arijit Bhattacharyya during game and entertainment technology discussion",
  },
  {
    name: "Paoli Dam",
    context: "Film festival and creative media",
    text: "A film-industry moment from Arijit’s long-running media entertainment journey.",
    image: `${me}paoli_dam.jpg`,
    alt: "Paoli Dam with Arijit Bhattacharyya at a film festival event",
  },
];

const people = [
  {
    name: "Parambrata",
    context: "Film festival / creative media",
    image: `${me}Parambrata_Arijit.jpg`,
    alt: "Parambrata with Arijit Bhattacharyya in media entertainment archive",
  },
  {
    name: "Prosenjit Chatterjee",
    context: "Bengali cinema archive",
    image: `${me}Arijit_Bumba_da.jpg`,
    alt: "Prosenjit Chatterjee with Arijit Bhattacharyya in Bengali cinema archive",
  },
  {
    name: "Subhashree Ganguly",
    context: "Film-game crossover",
    image: `${me}Subhasree_Arijit.jpg`,
    alt: "Subhashree Ganguly with Arijit Bhattacharyya connected with film and game work",
  },
  {
    name: "Sunny Leone",
    context: "Entertainment promotion",
    image: `${me}sunny-leone.jpg`,
    alt: "Sunny Leone event and entertainment promotion archive connected with Arijit Bhattacharyya",
  },
  {
    name: "Mrs India",
    context: "Fashion, media and celebrity platform",
    image: `${me}Mrs_India.jpg`,
    alt: "Mrs India media event archive with Arijit Bhattacharyya",
  },
  {
    name: "Raaz 2",
    context: "Bollywood actor-based game",
    image: `${me}raaz_2.jpg`,
    alt: "Raaz 2 Bollywood actor-based game archive connected with Arijit Bhattacharyya",
  },
];

export default function CelebrityArchive() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,.24),transparent_34%),radial-gradient(circle_at_86%_82%,rgba(14,165,233,.13),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_50%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
              Film Collaborations
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Film personalities, game conversations and entertainment history.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            A media-entertainment network connecting actors, film personalities,
            celebrity platforms, movie games, promotions and creative technology.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur transition duration-300 hover:border-blue-300/40 hover:bg-white/[0.075]"
            >
              <figure className="flex h-[320px] items-center justify-center overflow-hidden bg-[#05070b] p-3 sm:h-[380px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>

              <div className="border-t border-white/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  {item.context}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.5,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.055] shadow-xl backdrop-blur transition duration-300 hover:border-blue-300/40 hover:bg-white/[0.075]"
            >
              <figure className="flex h-[270px] items-center justify-center overflow-hidden bg-[#05070b] p-3 sm:h-[310px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </figure>

              <div className="border-t border-white/10 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                  {item.context}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}