import { motion } from "framer-motion";

const me = "/assets/media-entertainment/";

const timeline = [
  {
    period: "1998",
    title: "Virtualinfocom Begins",
    text: "The entertainment journey begins in Kolkata with games, animation, digital art, character creation and early interactive media long before the Indian game industry became mainstream.",
    image: `${me}game-development.jpg`,
    tag: "Foundation",
    alt: "Virtualinfocom early game development and entertainment technology work by Arijit Bhattacharyya",
  },
  {
    period: "Early Game Era",
    title: "Games, Animation & Character Worlds",
    text: "The archive moves into game development, 3D characters, animation, superhero worlds and original entertainment-led technology pipelines.",
    image: `${me}animation.jpg`,
    tag: "Games & Animation",
    alt: "Animation and character development work connected with Virtualinfocom and Arijit Bhattacharyya",
  },
  {
    period: "Industry Forums",
    title: "Game Development Reaches National Platforms",
    text: "The work starts appearing on formal industry stages, connecting game development, media technology and digital entertainment with national-level conversations.",
    image: `${me}IAMAI_Delhi_gamedev.png`,
    tag: "Game Industry",
    alt: "Arijit Bhattacharyya speaking at IAMAI Delhi game development event",
  },
  {
    period: "Movie Games",
    title: "Cinema Enters Interactive Media",
    text: "Film properties and actors move into games through projects connected with Shaktimaan, Boss 2, Raaz, Raaz Reboot and regional movie promotions.",
    image: `${me}im_superhero.jpg`,
    tag: "Movie Games",
    alt: "Shaktimaan and superhero game promotion work connected with Arijit Bhattacharyya",
  },
  {
    period: "Bollywood & Regional Cinema",
    title: "Actor-Led Movie Promotions Become Digital",
    text: "The entertainment archive grows through cinema collaborations where actors, film promotions and game-based storytelling become part of a larger media ecosystem.",
    image: `${me}Jeet_Arijit_Bhattacharyya.jpg`,
    tag: "Cinema Promotion",
    alt: "Actor Jeet with Arijit Bhattacharyya during movie game and entertainment promotion",
  },
  {
    period: "Global Festivals",
    title: "Film Festivals, VR Panels & Creative Stages",
    text: "The journey expands into international festivals, VR movie conversations, short film platforms and creative media stages across China, South Korea and global forums.",
    image: `${me}China_film_fest.jpg`,
    tag: "Global Stage",
    alt: "Arijit Bhattacharyya at China film festival and global media entertainment stage",
  },
  {
    period: "Short Films",
    title: "Pocket Films, Short Films & Independent Screens",
    text: "Alongside commercial cinema and games, the archive includes short film festivals, compact storytelling formats and independent screen culture.",
    image: `${me}short-film-festival-kolkata.jpg`,
    tag: "Short Films",
    alt: "Short film festival Kolkata award event with Arijit Bhattacharyya",
  },
  {
    period: "Creative Communities",
    title: "Cosplay, Models & Entertainment Culture",
    text: "Cosplay shows, model-led character pipelines and fan culture become a visible part of the media ecosystem, connecting live performance with digital character building.",
    image: `${me}cosplay-kolkata.jpg`,
    tag: "Cosplay",
    alt: "Kolkata cosplay stage performance and character showcase connected with Arijit Bhattacharyya",
  },
  {
    period: "Digital Humans",
    title: "From Models To Digital Characters",
    text: "The work moves deeper into digital humans, model-to-character pipelines, virtual personalities and entertainment assets designed for games, film and future media.",
    image: `${me}digitalhuman.jpg`,
    tag: "Digital Humans",
    alt: "Digital human and movie magic game promotion archive by Arijit Bhattacharyya",
  },
  {
    period: "Future Media",
    title: "AI Films & Mythology-Led Storytelling",
    text: "The newest chapter moves into GenAI cinema, mythology-led film universes, AI-assisted visuals, digital characters and future entertainment formats.",
    image: `${me}WhatsApp Image 2026-06-16 at 19.28.41.jpeg`,
    tag: "GenAI Films",
    alt: "Ashwathama future media and AI film universe poster by Arijit Bhattacharyya",
  },
];

export default function EntertainmentTimeline() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#081120] sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,.07),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 sm:text-sm">
              Entertainment Timeline
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A documentary archive from games to cinema, cosplay, VR and AI films.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            This is not a landing-page timeline. It is the entertainment history
            of a founder who moved from early game development into film
            collaborations, celebrity-led promotions, cosplay culture, digital
            humans, global festivals and future media.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-600/0 via-blue-500/40 to-blue-600/0 lg:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)] sm:p-5 lg:ml-10 lg:grid-cols-[1fr_1.05fr] lg:items-center"
              >
                <span className="hidden lg:absolute lg:-left-[3.05rem] lg:top-1/2 lg:block lg:h-4 lg:w-4 lg:-translate-y-1/2 lg:rounded-full lg:border-4 lg:border-white lg:bg-blue-600 lg:shadow-[0_0_0_8px_rgba(37,99,235,0.12)]" />

                <figure className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[260px] w-full object-contain p-3 transition duration-700 hover:scale-[1.025] sm:h-[340px] lg:h-[360px]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>

                <div className="p-2 sm:p-4 lg:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <span className="mt-7 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
                    {item.tag}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

