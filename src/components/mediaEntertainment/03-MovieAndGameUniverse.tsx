import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const mainStories = [
  {
    title: "Shaktimaan",
    eyebrow: "Indian Superhero • Game IP",
    text: "A milestone connecting one of India’s most iconic superhero characters with game development, digital characters and interactive storytelling.",
    image: `${me}im_superhero.jpg`,
    alt: "Shaktimaan superhero game archive connected with Arijit Bhattacharyya",
  },
  {
    title: "Boss 2",
    eyebrow: "Bengali Cinema • Movie-Based Game",
    text: "A movie-to-game crossover connected with Actor Jeet and the promotion of Boss 2, linking Bengali cinema with interactive entertainment.",
    image: `${me}Jeet_Arijit_Bhattacharyya.jpg`,
    alt: "Actor Jeet with Arijit Bhattacharyya during Boss 2 movie game promotion",
  },
];

const storyGrid = [
  {
    title: "Raaz 2",
    eyebrow: "Bollywood Horror • Actor-Based Game",
    image: `${me}raaz_2.jpg`,
    alt: "Raaz 2 actor based game archive connected with Arijit Bhattacharyya",
  },
  {
    title: "Star Wars Story",
    eyebrow: "Global IP • Character Worlds",
    image: `${me}Star_Wars_arijit.jpg`,
    alt: "Arijit Bhattacharyya with Star Wars related character universe archive",
  },
  {
    title: "Subhashree Collaboration",
    eyebrow: "Bengali Cinema • Movie Game",
    image: `${me}Subhasree_Arijit.jpg`,
    alt: "Subhashree Ganguly with Arijit Bhattacharyya during movie game collaboration",
  },
  {
    title: "Game Development Universe",
    eyebrow: "Movie Magic • Game Production",
    image: `${me}game-development.jpg`,
    alt: "Virtualinfocom movie magic and game development entertainment archive",
  },
  {
    title: "Digital Human Pipeline",
    eyebrow: "Character Design • Future Media",
    image: `${me}digitalhuman.jpg`,
    alt: "Digital human character and future media production archive by Arijit Bhattacharyya",
  },
];

const chips = [
  "Bizli",
  "Nilanjana",
  "Tushagni",
  "Pocket Films",
  "Short Films",
  "Movie Promotions",
  "Actor-Based Games",
  "Superhero IP",
  "Digital Humans",
  "Interactive Cinema",
];

export default function MovieAndGameUniverse() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,.28),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(14,165,233,.13),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_50%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
            Movie & Game Universe
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            When cinema became games, characters and digital IP.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            From Bengali cinema and Bollywood actor-based games to superhero IP,
            pocket films and digital humans, this chapter connects film
            promotion with interactive entertainment.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {mainStories.map((story, index) => (
            <motion.article
              key={story.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl"
            >
              <figure className="flex h-[320px] items-center justify-center overflow-hidden bg-black p-3 sm:h-[420px] lg:h-[460px]">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  {story.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {story.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {story.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
            Entertainment Ecosystem
          </p>

          <h3 className="mt-3 max-w-4xl text-2xl font-bold tracking-tight sm:text-3xl">
            Movie games, short films, actor-led promotions and character worlds.
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {storyGrid.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] shadow-xl ${
                index <= 2 ? "xl:col-span-2" : "xl:col-span-3"
              }`}
            >
              <figure className="flex h-[280px] items-center justify-center overflow-hidden bg-black p-3 sm:h-[320px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>

              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                  {item.eyebrow}
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}