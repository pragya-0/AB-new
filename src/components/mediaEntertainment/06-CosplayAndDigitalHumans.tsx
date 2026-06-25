import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const heroCards = [
  {
    title: "Own Cosplay Show",
    eyebrow: "Character Culture • Live Entertainment",
    text: "Cosplay became a bridge between games, comics, performance, fandom and live entertainment culture.",
    image: `${me}cosplay-kolkata.jpg`,
    alt: "Cosplay show and character culture event connected with Arijit Bhattacharyya",
  },
  {
    title: "Model-Led Entertainment Work",
    eyebrow: "Models • Fashion • Media",
    text: "Models and performers became part of Arijit’s entertainment ecosystem across events, promotions, styling, screen culture and visual media.",
    image: `${me}model-work-02.jpeg`,
    alt: "Model and performer working with Arijit Bhattacharyya for media entertainment and modelling work",
  },
];

const showcase = [
  {
    title: "Indian Cosplay",
    eyebrow: "Cosplay Community",
    image: `${me}cosplay.jpg`,
    alt: "Indian cosplay event and character culture archive connected with Arijit Bhattacharyya",
  },
  {
    title: "South Korea Cosplay",
    eyebrow: "Asian Creative Market",
    image: `${me}korean-cosplay.jpg`,
    alt: "South Korea cosplay and game ecosystem archive connected with Arijit Bhattacharyya",
  },
  {
    title: "Model Team",
    eyebrow: "Modelling Team",
    image: `${me}model-team-01.jpeg`,
    alt: "Model team photographed for media entertainment and modelling work with Arijit Bhattacharyya",
  },
  {
    title: "Runway & Performance",
    eyebrow: "Fashion • Performance • Media",
    image: `${me}model-runway-01.jpeg`,
    alt: "Runway performance and model-led entertainment culture connected with Arijit Bhattacharyya",
  },
  {
    title: "Modelling Team",
    eyebrow: "Models • Events • Media",
    image: `${me}model-team-02.jpeg`,
    alt: "Modelling team connected with media entertainment events and visual promotion work",
  },
];

const points = [
  "Cosplay shows and fan communities",
  "Models and performers in media events",
  "Fashion, games and entertainment promotion",
  "Modelling teams for visual media work",
];

export default function CosplayAndDigitalHumans() {
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
              Cosplay, Models & Entertainment Culture
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Where cosplay, modelling and live performance entered the media
              universe.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            Arijit’s media-entertainment work extended beyond screens into
            cosplay shows, modelling teams, runway culture, celebrity platforms
            and performer-led entertainment promotion.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {heroCards.map((item, index) => (
            <motion.article
              key={item.title}
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
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
            >
              <figure className="flex h-[280px] items-center justify-center overflow-hidden bg-slate-50 p-3 sm:h-[340px] lg:h-[360px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>

              <div className="border-t border-slate-100 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  {item.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-6 shadow-lg sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            Arijit’s Contribution
          </p>

          <h3 className="mt-3 max-w-4xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Bringing modelling, cosplay and live entertainment into the media
            ecosystem.
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-blue-200 bg-white px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-blue-800"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {showcase.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-lg transition duration-300 hover:border-blue-300 hover:shadow-[0_18px_55px_rgba(37,99,235,0.12)] ${
                index < 3 ? "xl:col-span-2" : "xl:col-span-3"
              }`}
            >
              <figure className="flex h-[245px] items-center justify-center overflow-hidden bg-slate-50 p-3 sm:h-[285px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </figure>

              <div className="border-t border-slate-100 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
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