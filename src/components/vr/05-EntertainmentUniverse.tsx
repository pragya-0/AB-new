import { motion } from "framer-motion";

const worlds = [
  {
    title: "Games & VR Experiences",
    text: "FPS, racing, casual games, VR gameplay and motion-capture fighting systems built around interactive entertainment.",
    image: "/assets/press/latest-speaks/vr-car.png",
    alt: "Virtual reality car racing game and immersive gameplay experience developed by Arijit Bhattacharyya",
  },
  {
    title: "Digital Humans",
    text: "Real people, actors, models and celebrities transformed into 3D characters for games, simulations and immersive media.",
    image: "/assets/gameworlds/ip-character-real-human.jpeg",
    alt: "Real human actor transformed into a 3D digital character for immersive media by Arijit Bhattacharyya",
  },
  {
    title: "Superhero & Comics IP",
    text: "Original superhero characters, comic stories, game worlds and cinematic digital universes connected through creative IP.",
    image: "/assets/Drawing/comics/comics-img1.jpg",
    alt: "Original comic art and superhero storytelling created as entertainment IP by Arijit Bhattacharyya",
  },
  {
    title: "Interactive Simulation",
    text: "Motion capture, training systems, physics-based interaction, particle effects and real-time simulation mechanics.",
    image: "/assets/speaking/techno-vr-ar.jpg",
    alt: "Virtual reality and augmented reality technology presentation showing immersive simulation work by Arijit Bhattacharyya",
  },
];

export default function EntertainmentUniverse() {
  return (
    <section className="relative overflow-hidden bg-[#03070d] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,.23),transparent_34%),radial-gradient(circle_at_80%_85%,rgba(14,165,233,.13),transparent_34%),linear-gradient(180deg,#03070d_0%,#07111f_52%,#03070d_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">
              Entertainment Universe
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Where characters become immersive worlds.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:justify-self-end">
            Arijit&apos;s immersive work connects drawing, comics, digital
            characters, games, VR, movies and AI-led storytelling into one
            creative technology ecosystem.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {worlds.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40"
            >
              <div className="flex h-[330px] items-center justify-center overflow-hidden bg-[#05070b] p-3">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
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