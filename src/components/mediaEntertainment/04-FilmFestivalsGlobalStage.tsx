import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const stages = [
  {
    title: "China Film Festival",
    label: "Global Recognition • China",
    text: "A global media stage connecting cinema, games, VR storytelling and cross-border entertainment technology.",
    image: `${me}China_film_fest.jpg`,
    alt: "Arijit Bhattacharyya at China Film Festival representing media entertainment and film technology",
  },
  {
    title: "Xian Film Festival",
    label: "International Film Stage",
    text: "A creative exchange around entertainment, games, cinema and future storytelling formats.",
    image: `${me}china-films.jpg`,
    alt: "Arijit Bhattacharyya at Xian Film Festival speaking on media entertainment and future storytelling",
  },
  {
    title: "Short Film Festival Kolkata",
    label: "Independent Cinema",
    text: "A creative stage for short films, new talent, compact storytelling and independent screen culture.",
    image: `${me}short-film-festival-kolkata.jpg`,
    alt: "Short Film Festival Kolkata media entertainment event with Arijit Bhattacharyya",
  },
  {
    title: "South Korea Creative Market",
    label: "Asian Creative Economy",
    text: "Game, cosplay and business development conversations connecting Indian entertainment with Asian creative markets.",
    image: `${me}south_Korea_game.jpg`,
    alt: "South Korea game and creative entertainment ecosystem connected with Arijit Bhattacharyya",
  },
  {
    title: "VR Cinema Conversation",
    label: "Immersive Media",
    text: "A future-facing conversation on virtual reality, cinema, game engines and immersive storytelling.",
    image: `${me}6.jpg`,
    alt: "Arijit Bhattacharyya at a VR cinema and immersive media discussion",
  },
  {
    title: "Creative Industry Forum",
    label: "Film • Media • Games",
    text: "A professional media stage connecting film culture, entertainment technology and creative industry networking.",
    image: `${me}7.jpg`,
    alt: "Creative industry forum connected with film media and entertainment technology",
  },
  {
    title: "Future of Entertainment",
    label: "Media Innovation",
    text: "A stage moment from the wider entertainment journey across cinema, technology and digital storytelling.",
    image: `${me}8.jpg`,
    alt: "Future entertainment and media innovation stage connected with Arijit Bhattacharyya",
  },
  {
    title: "Live Media Stage",
    label: "Public Conversation",
    text: "A live platform bringing together performance, industry dialogue and entertainment leadership.",
    image: `${me}9.jpg`,
    alt: "Live media entertainment stage featuring Arijit Bhattacharyya",
  },
  {
    title: "Creative Networking Platform",
    label: "Global Media Network",
    text: "Entertainment industry networking across film, media, events and creative communities.",
    image: `${me}10.jpg`,
    alt: "Film media and creative networking platform with Arijit Bhattacharyya",
  },
];

export default function FilmFestivalsGlobalStage() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 text-[#081120] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.08),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Film Festivals & Global Stage
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Film festivals, VR cinema and international creative markets.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            The entertainment journey moves across film festivals, short film
            platforms, immersive media conversations and Asian creative markets —
            showing how cinema, games and future media became one connected
            global stage.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stages.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.52,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-xl transition duration-300 hover:border-blue-300 hover:shadow-[0_22px_60px_rgba(37,99,235,0.13)]"
            >
              <figure className="flex h-[250px] items-center justify-center overflow-hidden bg-slate-50 p-3 sm:h-[290px] lg:h-[310px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </figure>

              <div className="border-t border-slate-100 p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {item.label}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}