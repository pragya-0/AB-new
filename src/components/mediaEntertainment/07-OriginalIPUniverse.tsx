import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const pillars = [
  {
    title: "Movie-Based Games",
    text: "Cinema stories moved into interactive formats through actor-based games, movie promotions and screen-linked entertainment experiences.",
    image: `${me}game-development.jpg`,
    alt: "Movie based game and entertainment IP work connected with Arijit Bhattacharyya",
  },
  {
    title: "Superhero Entertainment IP",
    text: "Superhero stories, game characters and Indian screen culture became part of a larger entertainment technology universe.",
    image: `${me}im_superhero.jpg`,
    alt: "Superhero entertainment IP and game story archive connected with Arijit Bhattacharyya",
  },
  {
    title: "Animation & Character Systems",
    text: "Animation, comic-inspired worlds and game characters formed the creative base for later film, VR and interactive storytelling.",
    image: `${me}animation.jpg`,
    alt: "Animation and character system work connected with Arijit Bhattacharyya entertainment IP",
  },
];

const celebrityMoments = [
  {
    title: "Industry Collaboration",
    image: `${me}1.jpg`,
    alt: "Film and entertainment industry collaboration moment with Arijit Bhattacharyya",
  },
  {
    title: "Creative Stage",
    image: `${me}2.jpg`,
    alt: "Creative media stage moment with Arijit Bhattacharyya",
  },
  {
    title: "Film & Game Network",
    image: `${me}3.jpg`,
    alt: "Film and game industry networking moment connected with Arijit Bhattacharyya",
  },
  {
    title: "Media Interaction",
    image: `${me}4.jpg`,
    alt: "Media interaction and entertainment industry moment connected with Arijit Bhattacharyya",
  },
];

const slate = [
  "Shaktimaan",
  "Boss 2",
  "Bizli",
  "Raaz 2",
  "Nilanjana",
  "Tushagni",
  "Pocket Films",
  "Short Films",
  "Animation",
  "Digital Humans",
  "VR Films",
  "AI Cinema",
];

export default function OriginalIPUniverse() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,.24),transparent_34%),radial-gradient(circle_at_86%_80%,rgba(14,165,233,.13),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_50%,#03070d_100%)]" />

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
              Original IP Universe
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Games, films, characters and immersive stories under one creative
              system.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            This is the entertainment layer of Arijit Bhattacharyya’s work:
            movie-based games, superhero properties, animation, pocket films,
            short films, VR storytelling and future-ready media IP.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur transition duration-300 hover:border-blue-300/40 hover:bg-white/[0.075]"
            >
              <figure className="flex h-[270px] items-center justify-center overflow-hidden bg-[#05070b] p-3 sm:h-[310px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>

              <div className="border-t border-white/10 p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              Entertainment IP Slate
            </p>

            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A connected media system, not isolated projects.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-300">
              The entertainment work connects movie games, superhero stories,
              animation, VR conversations, short films, pocket films, celebrity
              collaborations and new media experiments into one long-running
              creative ecosystem.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {slate.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {celebrityMoments.map((item, index) => (
              <motion.figure
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] shadow-xl backdrop-blur transition duration-300 hover:border-blue-300/40 hover:bg-white/[0.075]"
              >
                <div className="flex h-[220px] items-center justify-center overflow-hidden bg-[#05070b] p-3 sm:h-[250px]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>

                <figcaption className="border-t border-white/10 p-5">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
